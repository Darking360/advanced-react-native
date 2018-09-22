import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.baseMargin,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  linkContainer: {
    marginVertical: 10
  },
  menuText: {
    color: 'white',
    fontSize: 14,
    paddingHorizontal: 10
  }
})
