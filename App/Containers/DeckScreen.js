import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import styles from './Styles/DeckScreenStyle'
import MapView from 'react-native-maps';

class DeckScreen extends Component {

  state = {
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }

  changeRegion = (region) => {
    this.setState({ region });
  }

  render () {
    const { region } = this.state;
    return (
      <View style={styles.container}>
        <MapView style={StyleSheet.absoluteFillObject} initialRegion={region} region={region} onRegionChange={this.changeRegion}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeckScreen)
