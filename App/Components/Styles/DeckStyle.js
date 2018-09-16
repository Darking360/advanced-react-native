import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  deckContainer: {
    ...ApplicationStyles.screen.mainContainer,
    padding: 5
  }
})
