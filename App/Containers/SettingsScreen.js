import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'

import styles from './Styles/SettingsScreenStyle'

class SettingsScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Settings'
    };
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>SettingsScreen Container</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
