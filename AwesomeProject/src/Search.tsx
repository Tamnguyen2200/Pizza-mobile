import {NavigationProp} from '@react-navigation/native';
import React, {useEffect, useState, useTransition} from 'react';
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
import {NavigationProps, SearchProps} from './interface/Props';
import {api, app} from './interface/urrl';

const {width, height} = Dimensions.get('screen');

function Search({navigation}: NavigationProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<SearchProps[]>([]);
  const [originalData, setOriginalData] = useState<SearchProps[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

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

      setIsLoading(false);
      setOriginalData(json);
      console.log(json);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };
  const handleSeach = (searchTerm: string) => {
    setSearchQuery(searchTerm);
    const formattedQuery = searchTerm.toLowerCase();
    const filteredData = originalData.filter((user) =>
      user.PizzaName.toLowerCase().includes(formattedQuery)
    );
    setData(filteredData);
  };
  const handleClearSearch = () => {
    setSearchQuery('');
    setData(originalData);
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
          <TextInput placeholder="Seach..." 
          clearButtonMode='always'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(event) => handleSeach(event)}
          onEndEditing={() => {
            if (!searchQuery) {
              handleClearSearch();
            }
          }}/>
        </View>
        <View style={styles.listcontainer}>
          <FlatList
            data={data}
            keyExtractor={item => item.objectId}
            renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Size')}>
              <View style={styles.listcontainer}>
                <Image
                source={{uri:item.Image}}
                style={styles.image} />
                <View>
                  <Text style={styles.Textname}>{item.PizzaName}</Text>
                  <Text style={styles.des}>$ {item.Price}</Text>
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
    marginRight: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginBottom: 30
  },
  Textname: {
    fontSize: 25,
    marginLeft: 10,
    fontWeight: '600',
    color: 'black',
  },
  des: {
    fontSize: 20,
    marginLeft: 10,
    color: 'gray',
  },
});
export default Search;
