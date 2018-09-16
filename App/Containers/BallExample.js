import React, { Component } from 'react'
import {  
  Text, 
  View,
  Animated
} from 'react-native'
import { connect } from 'react-redux'

import styles from './Styles/BallExampleStyle'

class BallExample extends Component {

  componentWillMount = () => {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 200 }
    }).start();
  }

  render () {
    return (
        <Animated.View style={this.position.getLayout()}>
          <View style={styles.ballStyle}/>
        </Animated.View>
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

export default connect(mapStateToProps, mapDispatchToProps)(BallExample)
