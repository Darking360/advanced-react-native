import React, { Component } from 'react'
import { 
  ScrollView, 
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import styles from './Styles/TinderExampleStyle'

import Deck from '../Components/Deck'
import DeckCard from '../Components/DeckCard'

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

class TinderExample extends Component {

  state = {
    activeCard: 0,
    data: DATA,
  };

  renderCard = ({ key, item }) => {
    const { activeCard } = this.state;
    return(
      <DeckCard 
        key={key} 
        isFirst={key === activeCard}
        item={item}
        onSwipeRight={this.onSwipeRight}
        onSwipeLeft={this.onSwipeLeft}
        buttonText={'View more'}
      />
    );
  }

  onSwipeRight = (card) => {
    this.setState({ data: this.state.data.filter((item) => item.id != card.id) });
  }

  onSwipeLeft = (card) => {
    this.setState({ data: this.state.data.filter((item) => item.id != card.id) });
  }

  renderEmpty = () => {
    return(
      <DeckCard
        item={
          { title: 'No more items, fetch some more!', uri: null }
        }
        key={'Empty'}
        buttonText={'Get more!'}
        buttonAction={() => this.setState({ data: DATA })}
      />
    );
  }

  render () {
    const { data } = this.state;
    return (
      <View style={styles.mainContainer}>
      {
        data.length > 0 ?
           <Deck 
            data={data.map((deckItem, index) => {return { key: index, item: deckItem }})}
            renderCard={this.renderCard} 
          />
        :
          this.renderEmpty()
      } 
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TinderExample)
