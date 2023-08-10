import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {
  Text,
  View,
  Dimensions,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
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
    FullName: '',
    PhoneNumber: '',
  });

  const handleEditProfilePress = () => {
    navigation.navigate('Editprofile', {
      objectId,
      phoneNumber: userProfile?.PhoneNumber,
    });
  };
  const handleSecurity = () => {
    navigation.navigate('Security', {
      objectId,
    });
  };
  const handleHistory = () => {
    navigation.navigate('History', {
      objectId,
    });
  };
  useEffect(() => {
    console.log(route);
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
          FullName: data.FullName || '',
          PhoneNumber: data.PhoneNumber || '',
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
        Alert.alert('Xác nhận đăng xuất', 'Bạn có chắc chắn muốn đăng xuất?', [
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
        ]);
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
          <Image source={require('../assets/user.png')} style={styles.img} />
        </View>
        <View style={styles.name}>
          <Text style={styles.textname}> {userProfile?.FullName} </Text>
          <Text style={styles.textphone}> {userProfile?.PhoneNumber} </Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodycon}>
          <View style={styles.bodyconItem}>
            <TouchableOpacity
              style={styles.border}
              onPress={handleEditProfilePress}>
              <Text style={styles.textButton}>Edit Profile</Text>
              <AntDesign name="right" size={30} color="#A45D51" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bodycon}>
          <View style={styles.bodyconItem}>
            <TouchableOpacity style={styles.border} onPress={handleHistory}>
              <Text style={styles.textButton}>History</Text>
              <AntDesign name="right" size={30} color="#A45D51" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bodycon}>
          <View style={styles.bodyconItem}>
            <TouchableOpacity style={styles.border} onPress={handleSecurity}>
              <Text style={styles.textButton}>Security</Text>
              <AntDesign name="right" size={30} color="#A45D51" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bodycon}>
          <View style={styles.bodyconItem}>
            <TouchableOpacity style={styles.border} onPress={handleLogout}>
              <Text style={styles.textButton}>Logout</Text>
              <AntDesign name="right" size={30} color="#A45D51" />
            </TouchableOpacity>
          </View>
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
    height: 50,
    width: 50,
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
    marginVertical: 50,
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: 'white',
  },
  name: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
    marginTop: 220,
  },
  textname: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  textphone: {
    fontSize: 15,
    fontWeight: '400',
  },

  body: {
    width: '90%',
    height: '60%',
    marginVertical: 130,
    alignSelf: 'center',
  },
  bodycon: {
    height: (height * 9) / 100,
    justifyContent: 'center',
  },
  bodyconItem: {},
  textButton: {
    fontSize: 23,
    padding: 10,
    fontWeight: 'bold',
  },
  border: {
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Profile;
