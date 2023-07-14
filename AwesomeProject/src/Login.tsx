import React from "react-native"
import {useState, useEffect} from 'react';
import { View, 
    Text,
     StyleSheet, 
     Image,
     TextInput, 
     TouchableOpacity,
      Animated } from 'react-native';
import { NavigationProps } from "./interface/Props";
import axios from "axios";
//0387064024
function Login({ navigation }: NavigationProps): JSX.Element{
  fetch('https://api.backendless.com/A5006051-5583-53F6-FF4D-3C4BD85F2800/D8B6ABE7-71A8-464D-89C6-8E29D654C873/users/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    login: '03461323356',
    password: 'tam1234567',
  }),
}).then(response => response.json())
.then(data => {
  console.log(data); ;
})
.catch(error => {
  console.error('Error:', error);
});

  
return (
    <View style={{backgroundColor: '#A45D51', flex: 1}}>
      {/* Login */}
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          margin: 10,
          borderRadius: 10,
        }}>
        <View style={{flex: 1, marginVertical: 40}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.texttitle}>LOG IN</Text>
          </View>
          {/* Input */}
          <View style={{flex: 4}}>
            <View>
              <Text style={[styles.text2, {marginLeft: 10}]}> USER NAME</Text>
              <View>
                <TextInput
                  style={styles.textinputstyle}
                  placeholder="User Name"></TextInput>
              </View>

              <Text style={[styles.text2, {marginLeft: 10, marginTop: 20}]}>
                {' '}
                PASSWORD
              </Text>
              <View>
                <TextInput
                  style={styles.textinputstyle}
                  placeholder="Phone Number"></TextInput>
              </View>
            </View>
            <View style={{marginLeft: 110, marginTop: 40}}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  alignItems: 'center',
                  borderColor: '#A45D51',
                  borderRadius: 10,
                  width: '60%',
                }}
                onPress={() => navigation.navigate('Home')}>
                <Text style={{fontSize: 28, color: '#A45D51'}}>Log In</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: 10,
                marginTop: 20,
              }}>
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#A45D51',
                }}>
                Do not have an account?
              </Text>
              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  marginTop: 20,
                  borderWidth: 1,
                  alignItems: 'center',
                  borderRadius: 50,
                  width: '30%',
                  height: '60%',
                }}
                onPress={() => navigation.navigate('Signin')}>
                <Text style={{fontSize: 20, color: '#A45D51'}}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  texttitle: {
    fontWeight: 'bold',
    fontSize: 36,
    fontFamily: 'Comfortaa-Regular',
    color: '#A45D51',
  },
  text2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  border: {
    color: '#A45D51',
  },
  textinputstyle: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
export default Login;