import {StyleSheet} from 'react-native';
import {useState, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {NavigationProps, editProfiles} from './interface/Props';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {api, app} from './interface/urrl';

const {width, height} = Dimensions.get('screen');

const Editprofile: React.FC<NavigationProps> = ({navigation, route}) => {
  const [getpassword, setpasswordvi] = useState(false);
  const [getconfirmpassword, setconfirmpasswordvi] = useState(false);
  const [userProfile, setUserProfile] = useState<editProfiles | null>();
  const [newPassword, setNewPassword] = useState('');
  const [newFullname, setNewFullname] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const {objectId} = route.params || {};

  useEffect(() => {
    fetch(`https://api.backendless.com/${app}/${api}/data/Users/${objectId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setUserProfile({
          name: data.name || '',
          password: data.password || '',
          address: data.address || '',
          ConfirmPassword: '',
        });
        setConfirmNewPassword(data.ConfirmPassword || '');
        setNewFullname(data.name || '');
        setNewPassword(data.password || '');
        setNewAddress(data.address || '');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [objectId]);

  const handleUpdatePassword = () => {
    if (!newAddress || !newFullname || !confirmNewPassword) {
      Alert.alert('Lỗi', 'Không được để trống thông tin');
      return;
    } else if (newPassword !== confirmNewPassword) {
      Alert.alert('Mật khẩu mới và xác nhận mật khẩu không khớp');
      return;
    }

    const updatedUserData = {
      name: newFullname,
      password: newPassword,
      address: newAddress,
      ConfirmPassword: confirmNewPassword,
    };

    fetch(`https://api.backendless.com/${app}/${api}/data/Users/${objectId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData),
    })
      .then(response => response.json())
      .then(data => {
        Alert.alert('Cập nhật thông tin thành công!');
        navigation.navigate('Profile', {
          objectId,
          updatedData: {
            name: newFullname,
            address: newAddress,
          },
        });
      })
      .catch(error => {
        console.error('Lỗi:', error);
        Alert.alert('Đã xảy ra lỗi khi cập nhật mật khẩu');
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Profile', {objectId})}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.texttitle}> Edit Profile </Text>
        </View>
        <View>
          <Image source={require('../assets/testanh.png')} style={styles.img} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.borderEdit}>
          <TouchableOpacity>
            <Text style={styles.TextEdit}> Change Picture</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.borderInfoTitle, {marginBottom: 50}]}>
          <Text style={styles.textBody}> Full Name</Text>
          <TextInput
            placeholder="Full Name"
            style={styles.TextInput}
            value={newFullname}
            onChangeText={setNewFullname}
          />
        </View>
        <View style={[styles.borderInfoTitle, {marginBottom: 50}]}>
          <Text style={styles.textBody}> Password</Text>
          <TextInput
            placeholder="Password"
            style={styles.TextInput}
            autoCapitalize="none"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={getpassword ? false : true}
          />
          <TouchableOpacity
            style={{position: 'absolute', right: 40, top: 35}}
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
        <View style={[styles.borderInfoTitle, {marginBottom: 50}]}>
          <Text style={styles.textBody}> Confirm Password</Text>
          <TextInput
            placeholder="Confirm Password"
            style={styles.TextInput}
            autoCapitalize="none"
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
            secureTextEntry={getconfirmpassword ? false : true}
          />
          <TouchableOpacity
            style={{position: 'absolute', right: 40, top: 35}}
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
        <View style={[styles.borderInfoTitle, {marginBottom: 50}]}>
          <Text style={styles.textBody}> Address</Text>
          <TextInput
            placeholder="Address"
            style={styles.TextInput}
            value={newAddress}
            onChangeText={setNewAddress}
          />
        </View>
        <View style={styles.borderLogout}>
          <TouchableOpacity onPress={handleUpdatePassword}>
            <Text style={styles.TextUpdate}> Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: width,
    height: (height * 20) / 100,
    backgroundColor: '#A45D51',
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  icon: {
    top: 20,
    left: 10,
    width: 30,
  },
  title: {
    top: 20,
    left: 140,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texttitle: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Comfortaa',
    color: 'white',
  },
  img: {
    position: 'absolute',
    left: 130,
    top: 40,
    width: 130,
    height: 130,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: 'white',
  },
  body: {
    height: (height * 80) / 100,
    marginTop: 10,
  },
  borderEdit: {
    width: 150,
    height: 50,
    borderRadius: 10,
    left: 120,
    marginTop: 30,
    marginBottom: 10,
  },
  TextEdit: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Comfortaa',
    color: 'black',
  },
  textBody: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Comfortaa',
    color: 'black',
    marginLeft: 20,
  },
  borderInfoTitle: {
    height: 30,
    marginTop: 2,
    // borderWidth: 1,
    // borderRadius: 20,
    // backgroundColor: '#dee2e6',
    // borderColor: '#dee2e6'
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Comfortaa',
    color: 'black',
    marginLeft: 20,
  },
  borderInfo: {
    marginTop: 2,
    marginLeft: 9,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#dee2e6',
    borderColor: '#dee2e6',
  },
  borderLogout: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'black',
    marginTop: 40,
    left: 80,
  },
  TextUpdate: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Comfortaa',
    color: 'white',
  },
  TextInput: {
    height: 40,
    marginTop: 5,
    marginLeft: 25,
    marginRight: 25,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default Editprofile;
