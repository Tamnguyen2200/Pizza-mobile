import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text, View, Dimensions, Image} from 'react-native';
import {NavigationProps} from './interface/Props';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('screen');

const Profile: React.FC<NavigationProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Home')}>
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
          <TouchableOpacity onPress={() => navigation.navigate('Editprofile')}>
            <Text style={styles.TextEdit}> Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.borderInfoTitle}>
          <Text style={styles.textBody}> Name:</Text>
        </View>
        <View style={styles.borderInfo}>
          <Text style={styles.textName}> Nguyen Thi Thu Tam</Text>
        </View>
        <View style={styles.borderInfoTitle}>
          <Text style={styles.textBody}> Email:</Text>
        </View>
        <View style={styles.borderInfo}>
          <Text style={styles.textName}> ThuTam@gmail.com</Text>
        </View>
        <View style={styles.borderInfoTitle}>
          <Text style={styles.textBody}> Phone:</Text>
        </View>
        <View style={styles.borderInfo}>
          <Text style={styles.textName}> 02399994455</Text>
        </View>
        <View style={styles.borderInfoTitle}>
          <Text style={styles.textBody}> Adress:</Text>
        </View>
        <View style={styles.borderInfo}>
          <Text style={styles.textName}> Tân Bình- Hồ Chí Minh</Text>
        </View>

        <View style={styles.borderLogout}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.TextEdit}> Logout</Text>
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
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'black',
    marginTop: 30,
    left: (width * 30) / 100,
  },
});

export default Profile;
