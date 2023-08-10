import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {
  Text,
  View,
  Dimensions,
  Image,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import {NavigationProps, Profiles} from './interface/Props';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState, useEffect} from 'react';
import {api, app, apiLogin} from './interface/urrl';
import {useIsFocused} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const History: React.FC<NavigationProps> = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {objectId} = route.params || {};
  const [data, setData] = useState('');
  const [error, setError] = useState('');

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
          onPress={() => navigation.navigate('Profile', {objectId})}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.texttitle}> History </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.list}>
            <View style={styles.con}>
              <Image
                source={require('../assets/pizza.png')}
                style={styles.imglist}
              />
              <View style={styles.item}>
                <Text style={styles.ten}> Anchovy Adict</Text>
                <Text style={styles.size}> Size : S</Text>
                <Text style={styles.gia}> Giá Tiền: $12</Text>
              </View>
              <View style={styles.sl}>
                <Text style={styles.soluong}> Số lượng: 1</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: width,
    height: (height * 10) / 100,
    backgroundColor: '#A45D51',
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

  body: {
    alignItems: 'center',
    width: width,
    height: '100%',
  },
  list: {
    width: (width * 95) / 100,
    height: (height * 20) / 100,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
  },
  imglist: {
    width: 120,
    height: 140,
  },
  con: {
    padding: 5,
    flexDirection: 'row',
  },
  item: {
    marginLeft: 10,
  },
  ten: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  size: {
    fontSize: 20,
    fontWeight: '400',
  },
  gia: {
    fontSize: 17,
    fontWeight: '400',
  },
  ngay: {
    fontSize: 17,
    fontWeight: '400',
  },
  sl: {
    justifyContent: 'flex-end',
  },
  soluong: {
    fontSize: 17,
    fontWeight: '400',
  },
});

export default History;
