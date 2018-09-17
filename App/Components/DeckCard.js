import React, {
    Component
} from 'react'

import {
    Image,
    PanResponder,
    Animated,
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

export default class DeckCard extends Component {

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {}
    });

    this.state = { panResponder, position };

  }

    render() {
        const {
            title,
            key,
            image
        } = this.props;
        return (
          <Animated.View style={this.state.position.getLayout()}>
            <Card key={key} {...this.state.panResponder.panHandlers}>
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
                  <Button primary full>
                    <Text>Choose</Text>
                  </Button>
                </Body>
              </CardItem>
             </Card>
          </Animated.View>
        )
    }
}
