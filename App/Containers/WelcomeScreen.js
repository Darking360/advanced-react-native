import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

import styles from './Styles/WelcomeScreenStyle'
import WelcomeItem from '../Components/WelcomeItem'

const SLIDES_DATA = [
  {
    text: 'Set you location',
    image: '',
    color: '#66bb6a'
  },
  {
    text: 'Wait for jobs to list',
    image: '',
    color: '#7e57c2'
  },
  {
    text: 'Pick you favorite jobs, and then apply for them!',
    image: '',
    color: '#29b6f6',
    button: true
  }
];

class WelcomeScreen extends Component {

  renderItem = ({ item }) => {
    const { navigation: { navigate } } = this.props;
    return(
      <WelcomeItem 
        key={item.text} 
        {...item}
        navigate={navigate}
      />
    );
  }

  render () {
    return (
      <View style={styles.container }>
        <FlatList
          data={SLIDES_DATA}
          renderItem={this.renderItem}
          horizontal
          pagingEnabled
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
