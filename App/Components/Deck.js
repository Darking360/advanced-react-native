import React, { Component } from 'react'

import { 
  View, 
  Text,
  Animated,
  FlatList
} from 'react-native'
import styles from './Styles/DeckStyle'

export default class Deck extends Component {

  renderItem = ({ key, item }) => {
    const {
      renderCard,
    } = this.props;
    return renderCard({ key, item });
  }

  render () {
    const {
      data,
    } = this.props;
    return (
      <View style={styles.deckContainer}>
      {
        /*
         *
         *<FlatList
          data={data.map((item) => { return { key: item.id, item } })}
          renderItem={this.renderItem}
          style={{ flex: 1, backgroundColor: 'green', position: 'relative' }}
        />
         *
         * */
      }
      { data.map((item) => {
          return this.renderItem(item);
        }) 
      } 
      </View>
    )
  }
}
