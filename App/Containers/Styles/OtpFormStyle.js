import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background,
    backgroundColor: 'white'
  },
  formContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    paddingHorizontal: 5
  },
  innerForm: {
    flex: 1,
    width: 300,
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10
  }
})
