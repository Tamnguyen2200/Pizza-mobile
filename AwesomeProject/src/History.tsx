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

const History: React.FC<NavigationProps> = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {objectId} = route.params || {};

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
});

export default History;
