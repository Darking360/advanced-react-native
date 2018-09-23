import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios';
import { Button, Form, Item, Input } from 'native-base';

import styles from './Styles/OtpFormStyle'

class OtpForm extends Component {

  state = {
    signupPhone: '',
    signinPhone: '',
    code: '',
    loading: false,
  };

  handleChangeSignupPhone = (signupPhone) => {
    this.setState({ signupPhone });
  }

  handleChangeSigninPhone = (signinPhone) => {
    this.setState({ signinPhone });
  } 

  handleChangeCode = (code) => {
    this.setState({ code });
  }

  handleSubmitSignup = async () => {
    const {
      signupPhone: phone,
    } = this.state;
    try {
      await axios.post('https://us-central1-one-time-password-rna-551c7.cloudfunctions.net/createUser', {
        phone
      });
      Alert.alert('Excelente', 'Te has registrado correctamente, enseguida enviaremos un codigo a tu celular.');
    } catch(e) {
      Alert.alert('Algo ha ido mal', e.response.data.error);
    }
  }

  render () {
    const { signupPhone, signinPhone, code } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
           <Form style={styles.innerForm}>
            <Item>
              <Input 
                placeholder="Telefono" 
                value={signupPhone}
                onChangeText={this.handleChangeSignupPhone}
              />
            </Item>
            <View style={styles.buttonContainer}>
              <Button primary onPress={this.handleSubmitSignup}><Text style={styles.buttonText}>Register</Text></Button>
            </View>
          </Form>  
        </View>
        <View style={styles.formContainer}>
          <Form style={styles.innerForm}>
            <Item>
              <Input 
                placeholder="Telefono" 
                value={signinPhone}
                onChangeText={this.handleChangeSigninPhone}
              />
            </Item>
            <Item>
              <Input 
                placeholder="Codigo" 
                value={code}
                onChangeText={this.handleChangeCode}
              />
            </Item>
            <View style={styles.buttonContainer}>
              <Button primary><Text style={styles.buttonText}>Solicitar codigo</Text></Button>
            </View>
          </Form>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtpForm)
