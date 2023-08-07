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
import {NavigationProps} from './interface/Props';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {api, app} from './interface/urrl';

const {width, height} = Dimensions.get('screen');

const Security: React.FC<NavigationProps> = ({navigation, route}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const {objectId} = route.params || {};
  const [showpassword, setshowpassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

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
        setConfirmNewPassword(data.ConfirmPassword || '');
        setNewPassword(data.password || '');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [objectId]);

  const handleUpdatePassword = () => {
    const updatedUserData = {
      password: newPassword,
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
        Alert.alert('Thay đổi mật khẩu thành công');
        navigation.navigate('Profile', {
          objectId,
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
          <Text style={styles.texttitle}> Security </Text>
        </View>
        <View>
          <Image source={require('../assets/user.png')} style={styles.img} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.borderEdit}></View>
        <View>
          <View style={styles.borderText}>
            <Text style={styles.bodyTextTitlephone}> Change Password</Text>
            <TouchableOpacity onPress={() => setshowpassword(!showpassword)}>
              <AntDesign
                name={showpassword ? 'up' : 'down'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
        {showpassword && (
          <View style={styles.changePasss}>
            <View style={styles.bodyText}>
              <Text style={styles.bodyTextTitle}> Password New</Text>
              <TextInput
                placeholder="Password New"
                onChangeText={setNewPassword}
                secureTextEntry
                style={styles.bodyTextInput}
              />
            </View>
            <View style={styles.bodyText}>
              <Text style={styles.bodyTextTitle}> Confirm New Password</Text>
              <TextInput
                placeholder="Confirm New Password"
                secureTextEntry
                style={styles.bodyTextInput}
              />
            </View>
            <TouchableOpacity>
              <View style={styles.bodyButton}>
                <Text style={styles.bodyTextButton}> Change</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.bodytextItem}>
          <TouchableOpacity>
            <View style={styles.borderText}>
              <Text style={styles.bodyTextDelete}> Delete Account</Text>
              <AntDesign name="right" size={24} color="red" />
            </View>
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
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  texttitle: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Comfortaa',
    color: 'white',
    top: 20,
  },
  img: {
    marginVertical: 50,
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: 'white',
  },
  body: {
    height: (height * 80) / 100,
    marginTop: 40,
  },
  bodyText: {
    width: width,
    height: (height * 9) / 100,
    marginTop: 10,
  },
  bodyTextTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  bodytextItem: {
    marginTop: 20,
  },
  changePasss: {
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 20,
    height: 250,
    borderRadius: 5,
  },
  borderText: {
    height: 60,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  bodyTextTitlephone: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 5,
  },
  bodyTextInput: {
    height: 40,
    width: 320,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  bodyTextDelete: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 5,
    color: 'red',
  },
  bodyButton: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#CCD2E8',
    width: 170,
    height: 35,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  bodyTextButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  borderEdit: {
    width: 150,
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

export default Security;
