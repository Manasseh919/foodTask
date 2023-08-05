/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import SmallText from '../components/Text/SmallText';
import BigText from '../components/Text/BigText';
import StyledTextInput from '../components/Inputs/StyledTextinput';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <View>
        <TouchableOpacity style={styles.loginHeader}>
          <Text style={{color: '#FF5E0E', textDecorationLine: true}}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <BigText style={{marginBottom: 20}}>Login to your account</BigText>
        <SmallText style={{marginBottom: 40}}>
          Good to see you again, enter your details below to continue ordering
        </SmallText>

        <StyledTextInput
          label="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Enter email"
          style={{marginBottom: 20}}
        />
        <StyledTextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="Enter password"
          style={{marginBottom: 20}}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: '50%'}}>
        <View style={styles.google}>
          <Image
            source={{
              uri: 'https://img.icons8.com/?size=512&id=17949&format=png',
            }}
            style={{width: 48, height: 48}}
          />
          <SmallText style={{textDecorationLine: true}}>
            Sign-in with Google
          </SmallText>
        </View>
        <View style={styles.createAccount}>
          <TouchableOpacity>
            <SmallText style={{color: 'white'}}>Create an account</SmallText>
          </TouchableOpacity>
        </View>
        <View style={styles.loginAccount}>
          <TouchableOpacity>
            <SmallText style={{color: '#FF5E0E'}}>
              Login to my account
            </SmallText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginHeader: {
    flexDirection: 'row-reverse',
    marginTop: 20,
    marginBottom: 30,
  },
  google: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '60%',
    borderRadius: 20,
    height: 50,
  },
  createAccount: {
    backgroundColor: '#FF5E0E',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
    borderRadius: 20,
  },
  loginAccount: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
    borderRadius: 20,
  },
});
