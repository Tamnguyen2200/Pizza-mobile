import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import {NavigationProps} from './interface/Props';
import {api, app, apiLogin} from './interface/urrl';

function Signin({navigation}: NavigationProps): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [getpassword, setpasswordvi] = useState(false);
  const [address, setaddress] = useState('');
  const [getconfirmpassword, setconfirmpasswordvi] = useState(false);

  const handleRegister = () => {
    if (!fullname || !username || !password || !confirmPassword || !address) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin');
      return;
    } else if (address.length > 50) {
      Alert.alert('Lỗi', 'Địa chỉ của bạn chỉ được tối đa 50 ký tự.');
      return;
    } else if (address.trim().length === 0) {
      Alert.alert('Lỗi', 'Vui lòng nhập địa chỉ đầy đủ');
      return;
    } else if (fullname.length > 30) {
      Alert.alert('Lỗi', 'Tối đa tên của bạn được 30 ký tự.');
      return;
    } else if (fullname.trim().length === 0) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên đầy đủ');
      return;
    } else if (!/^[a-zA-Z0-9\s]+$/.test(fullname)) {
      Alert.alert('Lỗi', 'Tên của bạn không được chứa ký tự đặc biệt.');
      return;
    } else if (/\d/.test(fullname)) {
      Alert.alert(
        'Lỗi',
        'Bạn hãy nhập tên hợp lệ( Không được có số và ký tự đặc biệt).',
      );
      return;
    } else if (
      username.includes(' ') ||
      password.includes(' ') ||
      confirmPassword.includes(' ')
    ) {
      Alert.alert('Lỗi', 'Vui lòng không nhập space');
      return;
    } else if (username.length > 10 || username.length < 10) {
      Alert.alert(
        'Lỗi',
        'Vui lòng điền số điện thoại hợp lệ( gồm: 10 chữ số).',
      );
      return;
    } else if (username.toString()[0] !== '0') {
      Alert.alert('Lỗi', 'Vui lòng nhập số điện thoại hợp lệ .');
      return;
    } else if (!/^[0-9\s]+$/.test(username)) {
      Alert.alert(
        'Lỗi',
        'Số điện thoại của bạn không hợp lệ(Không được chứa ký tự đặc biệt và chữ cái ).',
      );
      return;
    } else if (!/^[0-9\s]+$/.test(username)) {
      Alert.alert(
        'Lỗi',
        'Số điện thoại của bạn không hợp lệ(Không được chứa ký tự đặc biệt và chữ cái ).',
      );
      return;
    } else if (password?.length < 6 || password?.length > 16) {
      Alert.alert(
        'Lỗi',
        'Mật khẩu của bạn phải có ít nhất 6 ký tự và tối đa là 16 ký tự.',
      );
      return;
    } else if (password != confirmPassword) {
      Alert.alert('Lỗi', 'Mật khẩu chưa khớp');
      return;
    }
    const updatedFullname = fullname.replace(/\s+/g, ' ');
    const updatedAddress = address.replace(/\s+/g, ' ');
    setFullname(updatedFullname);
    setaddress(updatedAddress);
    fetch(
      `https://api.backendless.com/${app}/${apiLogin}/data/Users?where=phoneNumber%3D'${username}'`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
          console.log('Tài Khoảng đã Tồn Tại');
          Alert.alert('Lỗi', 'Số điện thoại đã tồn tại');
        } else {
          fetch(`https://api.backendless.com/${app}/${api}/users/register`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              PhoneNumber: username,
              password: password,
              ConfirmPassword: confirmPassword,
              FullName: fullname,
              Address: address,
            }),
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              if (data.objectId) {
                console.log('objectId:', data.objectId);
                navigation.navigate('Login');
                Alert.alert('Thông báo:', 'Đăng Ký Thành Công');
              } else {
                Alert.alert('Lỗi', 'Đăng Ký Không Thành Công.');
              }
            })
            .catch(error => {
              console.error('Error:', error);
            });
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
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              top: -20,
            }}>
            <Text style={styles.texttitle}>Register</Text>
          </View>
          {/* Input */}
          <View style={{flex: 4, top: -50}}>
            <View>
              <Text style={[styles.text2, {marginLeft: 10}]}> Full Name</Text>
              <View>
                <TextInput
                  style={styles.textinputstyle}
                  placeholder="Full Name"
                  value={fullname}
                  onChangeText={text => setFullname(text)}
                />
              </View>

              <Text style={[styles.text2, {marginLeft: 10}]}> Address</Text>
              <View>
                <TextInput
                  style={styles.textinputstyle}
                  placeholder="Address"
                  value={address}
                  onChangeText={text => setaddress(text)}
                />
              </View>
              <Text style={[styles.text2, {marginLeft: 10}]}>
                {' '}
                Phone Number(*)
              </Text>
              <View>
                <TextInput
                  style={styles.textinputstyle}
                  placeholder="Phone Number"
                  value={username}
                  onChangeText={text => setUsername(text)}
                />
              </View>

              <Text style={[styles.text2, {marginLeft: 10, marginTop: 5}]}>
                {' '}
                Password
              </Text>
              <View>
                <TextInput
                  style={styles.textinputstyle}
                  placeholder="Password"
                  autoCapitalize="none"
                  secureTextEntry={getpassword ? false : true}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity
                  style={{position: 'absolute', right: 30, top: 17}}
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
              <Text style={[styles.text2, {marginLeft: 10, marginTop: 20}]}>
                {' '}
                Confirm Password
              </Text>
              <View>
                <TextInput
                  style={styles.textinputstyle}
                  placeholder="Confirm Password"
                  autoCapitalize="none"
                  secureTextEntry={getconfirmpassword ? false : true}
                  value={confirmPassword}
                  onChangeText={text => setconfirmPassword(text)}
                />
                <TouchableOpacity
                  style={{position: 'absolute', right: 30, top: 17}}
                  onPress={() => {
                    setconfirmpasswordvi(!getconfirmpassword);
                  }}>
                  {getconfirmpassword ? (
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
            <View style={{marginLeft: 110, marginTop: 20}}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  alignItems: 'center',
                  borderColor: '#A45D51',
                  borderRadius: 10,
                  width: '60%',
                }}
                onPress={handleRegister}>
                <Text style={{fontSize: 28, color: '#A45D51'}}>Signin</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: 10,
                marginTop: 10,
              }}>
              <Text
                style={{
                  marginTop: 15,
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#A45D51',
                }}>
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
                onPress={() => navigation.navigate('Login')}>
                <Text style={{fontSize: 20, color: '#A45D51'}}>Login</Text>
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
