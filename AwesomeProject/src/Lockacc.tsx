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
import {useState, useEffect} from 'react';
import {api, app} from './interface/urrl';

const Lockacc: React.FC<NavigationProps> = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [time, settime] = useState('');
  const [name, setname] = useState('');
  const [format, setFormattedLockTime] = useState('');
  const {objectId} = route.params || {};

  const updatedUserData = {
    status: 'Normal',
  };

  useEffect(() => {
    fetch(
      `https://api.backendless.com/${app}/${api}/data/Users?where=objectId%3D'${objectId}'`,
    )
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const timelock = data[0].timelock;
          settime(timelock);
          setname(data[0].FullName);

          const formattedTime = new Date(timelock).toLocaleTimeString();
          setFormattedLockTime(formattedTime);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);
  const formattedTime = new Date(time).toLocaleString();

  const currentDate = new Date();
  const deleteDate = new Date(currentDate.getTime() + 10 * 24 * 60 * 60 * 1000);
  const formattedDeleteDate = deleteDate.toLocaleDateString();

  const handleRestoreAccount = () => {
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
        console.log('Tài khoản đã được khôi phục');
        navigation.navigate('Home', {objectId});
      })
      .catch(error => {
        console.error('Lỗi:', error);
        Alert.alert('Lỗi', 'Đã xảy ra lỗi khi khôi phục tài khoản');
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
        <View style={styles.headerTitle}>
          <Text style={styles.name}> Pizza Good</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.img}>
          <Image source={require('../assets/Lock.png')} style={styles.img} />
        </View>
        <View style={styles.bodyText}>
          <Text style={styles.Text}>
            {name} ơi, tài khoản của bạn đã bị khoá tạm thời
          </Text>
          <Text style={styles.Textcon}>
            Tài khoản của bạn sẽ bị xoá trong vòng 10 ngày nữa, hãy khôi phục và
            tiếp tục trải nghiệm ứng dụng của chúng tôi
          </Text>
        </View>
        <View style={styles.thongbao}>
          <View>
            <Text style={styles.Texttime}>
              Ngày khoá tài khoản: {formattedTime}
            </Text>
          </View>
        </View>
        <View style={styles.thongbaos}>
          <View>
            <Text style={styles.Texttime}>
              Ngày xoá tài khoản: {formattedDeleteDate}, {format}
            </Text>
          </View>
        </View>
        <View style={styles.Boder}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <View style={styles.Button}>
              <Text style={styles.thoat}>Thoát</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRestoreAccount}>
            <View style={styles.Buttons}>
              <Text style={styles.khoiphuc}>Khôi Phục</Text>
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
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '20%',
  },
  headerTitle: {
    marginHorizontal: 30,
    marginVertical: 30,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#A45D51',
  },

  body: {
    width: '94%',
    height: '70%',
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: 200,
  },
  bodyText: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    marginTop: 10,
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Textcon: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 5,
  },
  thongbao: {
    borderWidth: 1,
    borderColor: '#D1EBEB',
    backgroundColor: '#D1EBEB',
    marginTop: 40,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
  },
  thongbaos: {
    borderWidth: 1,
    borderColor: '#D1EBEB',
    backgroundColor: '#D1EBEB',
    marginTop: 20,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
  },
  Texttime: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  Button: {
    borderWidth: 1,
    width: 140,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    marginTop: 30,
  },
  Buttons: {
    borderWidth: 1,
    borderColor: '#A45D51',
    width: 140,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A45D51',
    borderRadius: 10,
    marginTop: 30,
  },
  thoat: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  khoiphuc: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  Boder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Lockacc;
