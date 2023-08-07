import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import {NavigationProps} from './interface/Props';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {api, app} from './interface/urrl';

const {width, height} = Dimensions.get('screen');

const Editprofile: React.FC<NavigationProps> = ({navigation, route}) => {
  const [newFullname, setNewFullname] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [objectId, setObjectId] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    setObjectId(route.params?.objectId || '');
    fetchProfileData(route.params?.objectId || '');
  }, [route.params?.objectId]);

  const fetchProfileData = (objectId: string) => {
    fetch(`https://api.backendless.com/${app}/${api}/data/Users/${objectId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setNewFullname(data.FullName || '');
        setNewAddress(data.Address || '');
        setConfirmPassword(data.ConfirmPassword || '');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleFieldChange = () => {
    setHasChanges(true);
  };

  const handleUpdatePassword = () => {
    if (!newAddress || !newFullname) {
      Alert.alert('Lỗi', 'Không được để trống thông tin');
      return;
    } else if (newFullname.length > 30) {
      Alert.alert('Lỗi', 'Tối đa tên của bạn được 30 ký tự.');
      return;
    } else if (newFullname.trim().length === 0) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên đầy đủ');
      return;
    } else if (!/^[a-zA-Z0-9\s]+$/.test(newFullname)) {
      Alert.alert('Lỗi', 'Tên của bạn không được chứa ký tự đặc biệt.');
      return;
    } else if (/\d/.test(newFullname)) {
      Alert.alert(
        'Lỗi',
        'Bạn hãy nhập tên hợp lệ( Không được có số và ký tự đặc biệt).',
      );
      return;
    } else if (newAddress.length > 50) {
      Alert.alert('Lỗi', 'Địa chỉ của bạn chỉ được tối đa 50 ký tự.');
      return;
    } else if (newAddress.length < 3) {
      Alert.alert(
        'Lỗi',
        'Địa chỉ của bạn chỉ được tối thiểu phải có ít nhất 3 ký tự.',
      );
      return;
    } else if (newAddress.trim().length === 0) {
      Alert.alert('Lỗi', 'Vui lòng nhập địa chỉ đầy đủ');
      return;
    }

    const updatedFullname = newFullname.replace(/\s+/g, ' ');
    const updatedAddress = newAddress.replace(/\s+/g, ' ');
    setNewFullname(updatedFullname);
    setNewAddress(updatedAddress);
    if (hasChanges) {
      setModalVisible(true);
    } else {
      navigation.navigate('Profile', {objectId});
    }
  };

  const updateProfile = () => {
    const updatedUserData = {
      FullName: newFullname,
      Address: newAddress,
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
        setModalVisible(false);
        navigation.navigate('Profile', {
          objectId,
          updatedData: {
            Fullname: newFullname,
            Address: newAddress,
          },
        });
      })
      .catch(error => {
        console.error('Lỗi:', error);
        Alert.alert('Đã xảy ra lỗi khi cập nhật mật khẩu');
      });
  };

  const handlePasswordConfirmation = () => {
    if (password === confirmPassword) {
      updateProfile();
    } else {
      Alert.alert('Lỗi', 'Sai mật khẩu');
    }

    setPassword('');
  };

  const handleCancel = () => {
    setModalVisible(false);
    setPassword('');
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
          <Image source={require('../assets/user.png')} style={styles.img} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.borderEdit}></View>
        <View style={[styles.borderInfoTitle, {marginBottom: 50}]}>
          <Text style={styles.textBody}> Full Name</Text>
          <TextInput
            placeholder="Full Name"
            style={styles.TextInput}
            value={newFullname}
            onChangeText={text => {
              setNewFullname(text);
              handleFieldChange();
            }}
          />
        </View>
        <View style={[styles.borderInfoTitle, {marginBottom: 50}]}>
          <Text style={styles.textBody}> Address</Text>
          <TextInput
            placeholder="Address"
            style={styles.TextInput}
            value={newAddress}
            onChangeText={text => {
              setNewAddress(text);
              handleFieldChange();
            }}
          />
        </View>
        <TouchableOpacity onPress={handleUpdatePassword}>
          <View style={styles.borderLogout}>
            <Text style={styles.TextUpdate}> Update</Text>
          </View>
        </TouchableOpacity>
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
    width: 50,
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
    marginTop: 10,
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
    height: 40,
    marginTop: 2,
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
    height: 50,
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

export default Editprofile;
