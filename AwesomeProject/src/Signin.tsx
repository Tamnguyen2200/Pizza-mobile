import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationProps } from './interface/Props';

function Signin({ navigation }: NavigationProps): JSX.Element {
  return (
    <View style={{ backgroundColor: '#A45D51', flex: 1 }}>
      {/* Login */}
      <View style={{ backgroundColor: 'white', flex: 1, margin: 10, borderRadius: 10 }}>
        <View style={{ flex: 1, marginVertical: 40 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.texttitle}>Register</Text>
          </View>
          {/* Input */}
          <View style={{ flex: 4 }}>
            <View>
              <Text style={[styles.text2, { marginLeft: 10 }]}> USER NAME</Text>
              <View>
                <TextInput style={styles.textinputstyle} placeholder="User Name" />
              </View>

              <Text style={[styles.text2, { marginLeft: 10, marginTop: 20 }]}> PASSWORD</Text>
              <View>
                <TextInput style={styles.textinputstyle} placeholder="Password" />
              </View>
              <Text style={[styles.text2, { marginLeft: 10, marginTop: 20 }]}> CONFIRM PASSWORD</Text>
              <View>
                <TextInput style={styles.textinputstyle} placeholder="Confirm Password" />
              </View>
            </View>
            <View style={{ marginLeft: 110, marginTop: 40 }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  alignItems: 'center',
                  borderColor: '#A45D51',
                  borderRadius: 10,
                  width: '60%',
                }}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={{ fontSize: 28, color: '#A45D51' }}>Signin</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, marginTop: 20 }}>
              <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 20, color: '#A45D51' }}>
                You already have an account
              </Text>
              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  marginTop: 20,
                  borderWidth: 1,
                  alignItems: 'center',
                  borderRadius: 20,
                  width: '25%',
                  height: '60%',
                }}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={{ fontSize: 20, color: '#A45D51' }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  texttitle: {
    fontWeight: 'bold',
    fontSize: 36,
    fontFamily: 'Comfortaa',
    color: '#A45D51',
  },
  text2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  border: {
    color: '#A45D51',
  },
  textinputstyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default Signin;
