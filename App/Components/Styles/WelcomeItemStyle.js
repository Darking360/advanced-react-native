import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  textCenterStyle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  buttonStyle: {
    paddingHorizontal: 15,
  },
  buttonContainer: {
    marginVertical: 10
  }
})
