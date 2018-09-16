import React, {
    Component
} from 'react'

import {
    Image
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

    render() {
        const {
            title,
            key,
            image
        } = this.props;
        return (
            <Card key={key} >
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
        )
    }
}
