import {NavigationProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationProps, SearchProps} from './interface/Props';
import filter from "lodash.filter"
import {api, app} from './interface/urrl';

const {width, height} = Dimensions.get('screen');

function Search({navigation}: NavigationProps): JSX.Element {
  const [searchQuery, setSeachQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState<SearchProps[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url = `https://api.backendless.com/${app}/${api}/data/Pizza`;
      const respone = await fetch(url);
      const json = await respone.json();
      setData(json);

      setFullData(json);
      setIsLoading(false);
      console.log(json[0]);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };
  const handleSeach = (query: string) => {
    setSeachQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData, (data) =>{
      return contains(data, formattedQuery);
    });
    setData(filteredData);
  };
  const contains = (PizzaName: string, query: string) => {
    const {first} = PizzaName;

    if( first.includes(query)){
      return true;
    }
    return false;
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color="#5500dc"></ActivityIndicator>
      </View>
    );
  }
  if (error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Lỗi Tải Dữ Liệu, Hãy Kiểm Tra Lại Đuờng Truyền</Text>
      </View>
    );
  }
  return (
    <View style={{height: height, width: width, backgroundColor:'white'}}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign
            name="left"
            style={{
              fontSize: 30,
              marginLeft: 10,
              color: 'black',
              marginVertical: 10,
            }}
          />
        </TouchableOpacity>
        <View style={styles.textinput}>
          <AntDesign
            name="search1"
            style={{
              color: 'black',
              fontSize: 20,
              position: 'absolute',
              left: 20,
            }}
          />
          <TextInput placeholder="Seach..." />
          <MaterialIcons
            name="cancel"
            style={{fontSize: 15, position: 'absolute', right: 20}}
          />
        </View>
        <View style={styles.listcontainer}>
          <FlatList
            data={data}
            keyExtractor={item => item.objectId}
            renderItem={({item}) => (
          <TouchableOpacity>
              <View style={styles.listcontainer}>
                <Image
                source={{ uri: item.Image}}
                style={styles.image} />
                <View>
                  <Text style={styles.Textname}>{item.PizzaName}</Text>
                  <Text style={styles.des}></Text>
                </View>
              </View>
              </TouchableOpacity>
            )}></FlatList>
        </View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    position: 'absolute',
    marginVertical: 50,
    marginLeft: 20,
    width: 350,
    height: 45,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#E7DEDE',
    borderColor: '#E7DEDE',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  listcontainer: {
    marginTop: 45,
    marginLeft: 10,
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 25,
  },
  Textname: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: '600',
    color: 'black',
  },
  des: {
    fontSize: 14,
    marginLeft: 10,
    color: 'gray',
  },
});
export default Search;
