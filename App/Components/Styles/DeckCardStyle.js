import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  cardStyle: {
    position: 'absolute',
    width: width * .95,
    left: 0
  }
})
