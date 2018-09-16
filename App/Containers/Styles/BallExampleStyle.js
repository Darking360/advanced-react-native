import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({  
  ...ApplicationStyles.screen,  
  ballStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'black'
  }
}) 
