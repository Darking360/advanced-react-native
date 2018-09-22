import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles } from '../../Themes'

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  deckContainer: {
    ...ApplicationStyles.screen.mainContainer,
    margin: 8,
    alignItems: 'center'
  }
})
