import React, {Image} from 'react-native';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {NavigationProps} from './interface/Props';
import {api, app} from './interface/urrl';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Login({navigation}: NavigationProps): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [getpassword, setpasswordvi] = useState(false);
  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ tên đăng nhập và mật khẩu.');
      return;
    }
    fetch(`https://api.backendless.com/${app}/${api}/users/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: username,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.objectId) {
          navigation.navigate('Home');
        } else {
          Alert.alert('Lỗi', 'Tên đăng nhập hoặc mật khẩu không đúng.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

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
                  placeholder="Phone Number"
                  value={username}
                  onChangeText={text => setUsername(text)}></TextInput>
              </View>

              <View>
                <Text style={[styles.text2, {marginLeft: 10, marginTop: 20}]}>
                  PASSWORD
                </Text>
                <TextInput
                  style={styles.textinputstyle}
                  placeholder="Password"
                  autoCapitalize="none"
                  secureTextEntry={getpassword ? false : true}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity
                  style={{position: 'absolute', right: 30, top: 70}}
                  onPress={() => {
                    setpasswordvi(!getpassword);
                  }}>
                  {getpassword ? (
                    <Image
                      source={require('../assets/no-eye.png')}
                      style={{height: 30, width: 40, right: 0}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/eye.png')}
                      style={{height: 30, width: 40, right: 0}}
                    />
                  )}
                </TouchableOpacity>
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
                onPress={handleLogin}>
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
}
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
