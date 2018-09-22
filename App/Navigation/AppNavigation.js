import { StackNavigator } from 'react-navigation'
import Menu from '../Containers/Menu'
import TinderExample from '../Containers/TinderExample'
import BallExample from '../Containers/BallExample'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Menu: { screen: Menu, title: 'Menu' },
  TinderExample: { screen: TinderExample },
  BallExample: { screen: BallExample },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
