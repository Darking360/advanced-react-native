import React, {
    PureComponent as Component
} from 'react'

import {
    Image,
    PanResponder,
    Animated,
    View,
    Dimensions,
    LayoutAnimation,
    UIManager
} from 'react-native';

import styles from './Styles/DeckCardStyle'
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right
} from 'native-base';

const width = Dimensions.get('window').width;
const swipeThreshold = 0.25 * width;
const swipeDuration = 250;

export default class DeckCard extends Component {

  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {},
    buttonAction: () => {}
  };

  componentWillUpdate = () => {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > swipeThreshold) {
          this.forceSwipe('right');
        } else if (gesture.dx < -swipeThreshold) {
          this.forceSwipe('left');
        } else {
           this.resetPosition();        
        }
      }
    });

    this.state = { panResponder, position };

  }

  forceSwipe = (direction) => {
    const { position } = this.state;
    const x = direction === 'right' ? width : -width;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: swipeDuration,
    }).start(() => {
      this.onSwipeComplete(direction);
    });
  }

  onSwipeComplete = (direction) => {
    const { onSwipeRight, onSwipeLeft, item } = this.props;
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.state.position.setValue({ x: 0, y: 0 });
  }

  resetPosition = () => {
    const { position } = this.state;
    Animated.spring(position, {
      toValue: { x: 0, y: 0 }
    }).start();
  };

  renderCard = (component) => {
    const {
      isFirst,
      index
    } = this.props;
    if ( isFirst ) {
      return(
        <Animated.View 
          style={[styles.cardStyle, this.getCardStyle(), { elevation: 9 }]}
          {...this.state.panResponder.panHandlers}
        >
          { component }      
        </Animated.View>
      );
    } else {
      return(
        <Animated.View style={[styles.cardStyle, { top: 12 * parseInt(index)}]}>
          { component }  
        </Animated.View>
      );
    }
  }

  getCardStyle = () => {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-width * 1.5, 0 , width * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });
    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    }
  }

    render() {
        const {
            item: {
              text: title,
              uri: image
            },
            buttonText,
            buttonAction,
            index,
        } = this.props;
        return (this.renderCard(
            <Card index={index}>
              <CardItem>
              <Left>
                <Body>
                  <Text>{title}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: image}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
                  <Button primary full onPress={buttonAction}>
                    <Text>{buttonText}</Text>
                  </Button>
                </Body>
              </CardItem>
             </Card>
          ))
    }
}
