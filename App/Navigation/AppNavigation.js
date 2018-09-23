import { StackNavigator, TabNavigator } from 'react-navigation'
import SettingsScreen from '../Containers/SettingsScreen'
import ReviewScreen from '../Containers/ReviewScreen'
import DeckScreen from '../Containers/DeckScreen'
import MapScreen from '../Containers/MapScreen'
import LoginScreen from '../Containers/LoginScreen'
import WelcomeScreen from '../Containers/WelcomeScreen'
import OtpForm from '../Containers/OtpForm'
import Menu from '../Containers/Menu'
import TinderExample from '../Containers/TinderExample'
import BallExample from '../Containers/BallExample'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  OtpForm: { screen: OtpForm },
  Menu: { screen: Menu, title: 'Menu' },
  TinderExample: { screen: TinderExample },
  BallExample: { screen: BallExample },
  LaunchScreen: { screen: LaunchScreen },
  JobFinderApp: TabNavigator({  
    WelcomeScreen: { screen: WelcomeScreen },
    LoginScreen: { screen: LoginScreen },
    MainScreen: TabNavigator({
       DeckScreen: { screen: DeckScreen },
       MapScreen: { screen: MapScreen },
        ReviewScreen: StackNavigator({
          ReviewScreen: { screen: ReviewScreen },
          SettingsScreen: { screen: SettingsScreen },
        })
    })
  }, {
    navigationOptions: {
      tabBarVisible: false,
    },
    lazyLoad: true
  })
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle: styles.header,
  },
  lazyLoad: true
})

export default PrimaryNav
