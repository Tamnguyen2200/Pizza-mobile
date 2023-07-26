import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text, View, Dimensions, Image, ActivityIndicator, Alert} from 'react-native';
import {NavigationProps, Profiles} from './interface/Props';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useState, useEffect} from 'react';
import {api, app, apiLogin} from './interface/urrl';
import {useIsFocused} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const Profile: React.FC<NavigationProps> = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();
  const {objectId} = route.params;
  const [userProfile, setUserProfile] = useState<Profiles | null>({
    name: '',
    phoneNumber: '',
    address: '',
  });

  const handleEditProfilePress = () => {
    navigation.navigate('Editprofile', {
      objectId,
      phoneNumber: userProfile?.phoneNumber,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.backendless.com/${app}/${apiLogin}/data/Users/${objectId}`,
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
        setUserProfile({
          name: data.name || '',
          phoneNumber: data.phoneNumber || '',
          address: data.address || '',
        });
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [objectId, isFocused]);

  const handleLogout = () => {

    const currentDateTime = new Date().toISOString();
  
    fetch(`https://api.backendless.com/${app}/${api}/data/Users/${objectId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lastLogout: currentDateTime,
      }),
    })
    .then(response => response.json())
    .then(data => {
      Alert.alert(
        'Xác nhận đăng xuất',
        'Bạn có chắc chắn muốn đăng xuất?',
        [
          {
            text: 'Hủy',
            style: 'cancel',
          },
          {
            text: 'Đăng xuất',
            style: 'destructive', 
            onPress: () => {
              navigation.navigate('Login');
            },
          },
        ],
      );
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color="#5500dc"></ActivityIndicator>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Home', {objectId})}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.texttitle}> Profile </Text>
        </View>
        <View>
          <Image source={require('../assets/testanh.png')} style={styles.img} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.borderEdit}>
          <TouchableOpacity onPress={handleEditProfilePress}>
            <Text style={styles.TextEdit}> Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.borderInfoTitle}>
          <Text style={styles.textBody}> Full Name:</Text>
        </View>
        <View style={styles.borderInfo}>
          <AntDesign name="user" size={30} style={styles.icontext} />
          <Text style={styles.textName}>
            {' '}
            {userProfile ? userProfile.name : ''}
          </Text>
        </View>
        <View style={styles.borderInfoTitle}>
          <Text style={styles.textBody}> Phone:</Text>
        </View>
        <View style={styles.borderInfo}>
          <AntDesign name="phone" size={30} style={styles.icontext} />
          <Text style={styles.textName}>
            {' '}
            {userProfile ? userProfile.phoneNumber : ''}
          </Text>
        </View>
        <View style={styles.borderInfoTitle}>
          <Text style={styles.textBody}> Adress:</Text>
        </View>
        <View style={styles.borderInfo}>
          <Entypo name="address" size={30} style={styles.icontext} />
          <Text style={styles.textName}>
            {' '}
            {userProfile ? userProfile.address : ''}
          </Text>
        </View>

        <View style={styles.borderLogout}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.TextEdit} onPress={handleLogout}> Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    top: 20,
    left: 158,
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
    marginTop: 40,
  },
  borderEdit: {
    borderWidth: 3,
    borderColor: 'black',
    width: 150,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    left: 120,
    marginTop: 10,
    marginBottom: 30,
  },
  TextEdit: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Comfortaa',
    color: 'white',
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
    marginTop: 8,
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Comfortaa',
    color: 'black',
    marginLeft: 20,
  },
  borderInfo: {
    marginTop: 5,
    marginLeft: 9,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#dee2e6',
    borderColor: '#dee2e6',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderLogout: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'black',
    marginTop: 70,
    left: (width * 30) / 100,
  },
  icontext: {
    marginLeft: 20,
  },
});

export default Profile;
