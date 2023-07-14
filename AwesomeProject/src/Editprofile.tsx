import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text, View, Dimensions, Image, TextInput} from 'react-native';
import {NavigationProps} from './interface/Props';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('screen');

const Editprofile: React.FC<NavigationProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Profile')}>
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
          <Text style={styles.textBody}> User Name</Text>
          <TextInput placeholder="User Name" style={styles.TextInput}></TextInput>
        </View>
        <View style={[styles.borderInfoTitle, {marginBottom: 50}]}>
          <Text style={styles.textBody}> Email</Text>
          <TextInput placeholder="Email" style={styles.TextInput}></TextInput>
        </View>
        <View style={[styles.borderInfoTitle, {marginBottom: 50}]}>
          <Text style={styles.textBody}> Phone Number</Text>
          <TextInput placeholder="Phone Number" style={styles.TextInput}></TextInput>
        </View>
        <View style={[styles.borderInfoTitle, {marginBottom: 50}]}>
          <Text style={styles.textBody}> Password</Text>
          <TextInput placeholder="Password" style={styles.TextInput}></TextInput>
        </View>
        <View style={styles.borderLogout}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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
    marginTop: 40,
  },
  borderEdit: {
    width: 150,
    height: 50,
    borderRadius: 10,
    left: 120,
    marginTop: 10,
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
    marginTop: 30,
    left: 80,
  },
  TextUpdate: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Comfortaa',
    color: 'white',
  },
  TextInput:
  {
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
