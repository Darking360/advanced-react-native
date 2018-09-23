import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'

import styles from './Styles/ReviewScreenStyle'
import { Button } from 'native-base'

class ReviewScreen extends Component {

  static navigationOptions = ({ navigation: { navigate } }) => {
    return {
       title: 'Review Jobs',
       headerRight: (
        <Button 
         style={styles.navigationButton}
         onPress={() => navigate('SettingsScreen')}
        >
         <Text style={styles.navigationButtonText}>Settings</Text>
        </Button>
      ),
      headerStyle: styles.headerNavigationStyle
    }
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>ReviewScreen Container</Text>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewScreen)
