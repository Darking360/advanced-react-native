import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/WelcomeItemStyle'
import { Button } from 'native-base'

export default class WelcomeItem extends PureComponent {

  goToLogin = () => {
    const { navigate } = this.props;
    navigate('LoginScreen');
  }

  render () {
    const {
      color,
      text,
      image,
      button,
    } = this.props
    return (
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text style={styles.textCenterStyle}>{ text }</Text>
        {
          button && <View style={styles.buttonContainer}>
            <Button 
              secondary 
              style={styles.buttonStyle}
              onPress={this.goToLogin}
            ><Text style={styles.textCenterStyle}>Go to Jobs Finder</Text></Button>
          </View>
        }
      </View>
    )
  }
}
