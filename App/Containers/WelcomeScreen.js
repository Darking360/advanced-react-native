import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import styles from './Styles/WelcomeScreenStyle'

const SLIDES_DATA = [
  {
    text: '',
    image: ''
  }
];

class WelcomeScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>WelcomeScreen Container</Text>
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
