import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import styles from './Styles/MenuStyle'

import { Button } from 'native-base'

class Menu extends Component {

  static navigationOptions = {
    title: 'Menu'
  }

  navigateTo = (screen) => {
    const {
      navigation: {
        navigate
      }
    } = this.props;
    navigate(screen);
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.linkContainer}>
          <Button onPress={() => this.navigateTo('BallExample')}>
            <Text style={styles.menuText}>
              Ejemplo Bola
            </Text>
          </Button>      
        </View>
        <View style={styles.linkContainer}>
          <Button onPress={() => this.navigateTo('TinderExample')}>
            <Text style={styles.menuText}>  
              Ejemplo Tinder
            </Text>
          </Button>      
        </View>
        <View style={styles.linkContainer}>
          <Button onPress={() => this.navigateTo('OtpForm')}>
            <Text style={styles.menuText}>  
              One Time Password
            </Text>
          </Button>      
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
