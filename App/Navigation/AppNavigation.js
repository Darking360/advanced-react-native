import { StackNavigator } from 'react-navigation'
import TinderExample from '../Containers/TinderExample'
import BallExample from '../Containers/BallExample'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  TinderExample: { screen: TinderExample },
  BallExample: { screen: BallExample },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TinderExample',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
