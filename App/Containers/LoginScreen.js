import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { LoginButton, AccessToken } from 'react-native-fbsdk';

import styles from './Styles/LoginScreenStyle'

// Actions
import {
  loginUser,
  logoutUser,
} from '../Redux/GeneralRedux';

class LoginScreen extends Component {

  componentDidMount = () => {
    const { isLogged, navigation: { navigate } } = this.props;
    if (isLogged) navigate('DeckScreen');
  }

  render () {
    const { loginUser, navigation: { navigate } } = this.props;
    return (
      <View style={styles.container}>
        <LoginButton
          readPermissions={["public_profile email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    loginUser(data.accessToken.toString());
                    Alert.alert('Bienvenido a Job Finder!');
                    navigate('DeckScreen');
                  }
                )
              }
            }
          }
      onLogoutFinished={() => {
        logoutUser();
        Alert.alert('Goodbye');
      }}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.general.userToken !== null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userToken) => dispatch(loginUser(userToken)),
    logoutUser: () => dispatch(logoutUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
