import React,{useState, useEffect} from 'react';
import ListPizza from './components/ListPizza';
import {api, app} from './interface/urrl';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationProps, HomeProps} from './interface/Props';

const {width, height} = Dimensions.get('screen'); // lấy kích thước màn hình

function Home({navigation}: NavigationProps): JSX.Element {
  const [data, setData] = useState([]);
  const [error, setError] = useState<any>(null)
  const [favouriteData, setFavoritData] = useState<HomeProps[]>([]);
  const [hot, setHotData] = useState<HomeProps[]>([]);
  const [forYou, setforYouData] = useState<HomeProps[]>([]);
  const [bestSeller, setBestSellerData] = useState<HomeProps[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    try{
    const url = `https://api.backendless.com/${app}/${api}/data/Pizza?pageSize=21`;
    const respone = await fetch(url);
      const json = await respone.json();
      setData(json);

      const favouriteItems = json.filter((item: any) => item.TypeData === "Favourite");
      setFavoritData(favouriteItems);

      const HotItems = json.filter((item: any) => item.TypeData === "Hot");
      setHotData(HotItems);

      const forYouItems = json.filter((item: any) => item.TypeData === "For You");
      setforYouData(forYouItems);

      const BestSellerItems = json.filter((item: any) => item.TypeData === "Best Seller");
      setBestSellerData(BestSellerItems);

      console.log(BestSellerItems)
    } catch(error){
    setError(error);
    console.log(setError)
    }
  }
  return (
    <View style={{height: '100%'}}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <AntDesign name="user" size={30} color="#900" />
          </TouchableOpacity>
        </View>
        <View style={styles.title}>
          <Text style={styles.textTitle}> Pizza Good</Text>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <FontAwesome name="search" size={30} color="#900" />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
            <AntDesign name="shoppingcart" size={30} color="#900" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.textTitle}> Best Seller</Text>
          <FlatList 
          horizontal={true }
          data={bestSeller}
          renderItem={({item}) => 
          <ListPizza
           img={{uri:item.Image}}
           name={item.PizzaName}
           price= {item.Price}
           navigation={navigation}/>}
          />
        </View>
        <View>
          <Text style={styles.textTitle}> Hot</Text>
          <FlatList 
          horizontal={true }
          data={hot}
          renderItem={({item}) => 
          <ListPizza
           img={{uri:item.Image}}
           name={item.PizzaName}
           price= {item.Price}
           navigation={navigation}/>}
          />
        </View>
        <View>
          <Text style={styles.textTitle}> Favourite</Text>
          <FlatList 
          horizontal={true}
          data={favouriteData}
          renderItem={({item}) => 
          <ListPizza
           img={{uri:item.Image}}
           name={item.PizzaName}
           price= {item.Price}
           navigation={navigation}/>}
          />
        </View>
        <View>
          <Text style={styles.textTitle}> For You</Text>
          <FlatList 
          horizontal={true }
          data={forYou}
          renderItem={({item}) => 
          <ListPizza
           img={{uri:item.Image}}
           name={item.PizzaName}
           price= {item.Price}
           navigation={navigation}/>}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: (height * 10) / 100,
    paddingTop: 25,
    paddingHorizontal: (width * 1) / 100,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  icon: {
    width: (width * 10) / 100,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: (width * 65) / 100,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Comfortaa',
    color: '#A45D51',
  },
  scrollView: {
    height: height,
    padding: 10,
  },
});

export default Home;
