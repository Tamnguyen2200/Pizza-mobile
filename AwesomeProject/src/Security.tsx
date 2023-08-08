import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  StyleSheet,
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
  const [password, setPassword] = useState('');
  const [hasChanges, setHasChanges] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showLockConfirmation, setShowLockConfirmation] = useState(false);
  const [lockConfirmationPassword, setLockConfirmationPassword] = useState('');

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
        setConfirmPassword(data.ConfirmPassword || '');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [objectId]);

  const handleFieldChange = () => {
    setHasChanges(true);
  };

  const handleUpdate = () => {
    if (newPassword?.length < 6 || newPassword?.length > 16) {
      Alert.alert(
        'Lỗi',
        'Mật khẩu mới của bạn phải có ít nhất 6 ký tự và tối đa là 16 ký tự.',
      );
      return;
    } else if (
      newPassword?.includes(' ') ||
      confirmNewPassword?.includes(' ')
    ) {
      Alert.alert('Lỗi', 'Vui lòng không nhập space');
      return;
    } else if (!newPassword || !confirmNewPassword) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ để cập nhật mật khẩu.');
      return;
    } else if (newPassword !== confirmNewPassword) {
      Alert.alert('Lỗi', 'Vui lòng điền mật khẩu trùng khớp.');
      return;
    }

    const updatedPassword = newPassword.replace(/\s+/g, ' ');
    const updatedConfirm = confirmNewPassword.replace(/\s+/g, ' ');
    setNewPassword(updatedPassword);
    setConfirmNewPassword(updatedConfirm);

    if (hasChanges) {
      setModalVisible(true);
    } else {
      performUpdate();
    }
  };

  const performUpdate = () => {
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
        setModalVisible(false);
        Alert.alert('Đổi mật khẩu thành công');
        navigation.navigate('Profile', {
          objectId,
        });
      })
      .catch(error => {
        console.error('Lỗi:', error);
        Alert.alert('Đã xảy ra lỗi khi cập nhật mật khẩu');
      });
  };

  const handlePasswordConfirmation = () => {
    if (password === confirmPassword) {
      performUpdate();
      setModalVisible(false);
    } else {
      Alert.alert('Lỗi', 'Sai mật khẩu');
    }

    setPassword('');
  };

  const handleCancel = () => {
    setModalVisible(false);
    setPassword('');
  };

  const LockAcc = () => {
    const updatedUserData = {
      status: 'Delete',
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
        setModalVisible(false);
        console.log(data);
        Alert.alert('Thông Báo', 'Tài khoản của bạn sẽ bị khoá sau 10 ngày');
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error('Lỗi:', error);
        Alert.alert('Đã xảy ra lỗi khi xoá tài khoản');
      });
  };

  const handleLockAccount = () => {
    if (lockConfirmationPassword === confirmPassword) {
      LockAcc();
      setShowLockConfirmation(false);
    } else {
      Alert.alert('Mật khẩu xác nhận không chính xác!');
    }
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
          <TouchableOpacity onPress={() => setshowpassword(!showpassword)}>
            <View style={styles.borderText}>
              <Text style={styles.bodyTextTitlephone}> Change Password</Text>
              <AntDesign
                name={showpassword ? 'up' : 'down'}
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>
        {showpassword && (
          <View style={styles.changePasss}>
            <View style={styles.bodyText}>
              <Text style={styles.bodyTextTitle}> Password New</Text>
              <TextInput
                placeholder="Password New"
                value={newPassword}
                onChangeText={text => {
                  setNewPassword(text);
                  handleFieldChange();
                }}
                secureTextEntry
                style={styles.bodyTextInput}
              />
            </View>
            <View style={styles.bodyText}>
              <Text style={styles.bodyTextTitle}> Confirm New Password</Text>
              <TextInput
                placeholder="Confirm New Password"
                value={confirmNewPassword}
                onChangeText={text => {
                  setConfirmNewPassword(text);
                  handleFieldChange();
                }}
                secureTextEntry
                style={styles.bodyTextInput}
              />
            </View>
            <TouchableOpacity onPress={handleUpdate}>
              <View style={styles.bodyButton}>
                <Text style={styles.bodyTextButton}> Change</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.bodytextItem}>
          <TouchableOpacity onPress={() => setShowLockConfirmation(true)}>
            <View style={styles.borderText}>
              <Text style={styles.bodyTextDelete}> Delete Account</Text>
              <AntDesign name="right" size={24} color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={isModalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nhập mật khẩu để xác nhận</Text>
            <TextInput
              placeholder="Mật khẩu"
              style={styles.modalTextInput}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity onPress={handleCancel}>
                <View style={styles.modalCancelButton}>
                  <Text style={styles.modalButtonText}>Huỷ</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePasswordConfirmation}>
                <View style={styles.modalConfirmButton}>
                  <Text style={styles.modalButtonText}>Xác nhận</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={showLockConfirmation} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Nhập mật khẩu để xác nhận xoá tài khoản
            </Text>
            <TextInput
              placeholder="Mật khẩu"
              style={styles.modalTextInput}
              onChangeText={setLockConfirmationPassword}
              value={lockConfirmationPassword}
              secureTextEntry
            />
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity onPress={() => setShowLockConfirmation(false)}>
                <View style={styles.modalCancelButton}>
                  <Text style={styles.modalButtonText}>Huỷ</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLockAccount}>
                <View style={styles.modalConfirmButton}>
                  <Text style={styles.modalButtonText}>Xác nhận</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  modalTextInput: {
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 40,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  modalButtonContainer: {
    width: 230,
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  modalCancelButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 80,
  },
  modalConfirmButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 80,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Security;
