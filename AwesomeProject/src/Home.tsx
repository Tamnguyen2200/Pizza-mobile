import React, {useState, useEffect} from 'react';
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
  ActivityIndicator,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationProps, HomeProps} from './interface/Props';

const {width, height} = Dimensions.get('screen'); // lấy kích thước màn hình

function Home({navigation, route}: NavigationProps): JSX.Element {
  const [data, setData] = useState([]);
  const [error, setError] = useState<any>(null);
  const [favouriteData, setFavoritData] = useState<HomeProps[]>([]);
  const [hot, setHotData] = useState<HomeProps[]>([]);
  const [forYou, setforYouData] = useState<HomeProps[]>([]);
  const [bestSeller, setBestSellerData] = useState<HomeProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const {objectId} = route.params || {};

  useEffect(() => {
    console.log(objectId)
    fetchData();
    setIsLoading(true);
  }, []);

  const handleProfilePress = () => {
    if (objectId) {
      navigation.navigate('Profile', {objectId});
    }
  };
  const handlePaymentPress = () => {
    if (objectId) {
      navigation.navigate('Payment', {objectId, additionalValue: 'Cash'});
    }
  };
  const handleSearchPress = () => {
    if (objectId) {
      navigation.navigate('Search', {objectId});
    }
  };
  const fetchData = async () => {
    try {
      const url = `https://api.backendless.com/${app}/${api}/data/Pizza?pageSize=21`;
      const respone = await fetch(url);
      const json = await respone.json();
      setData(json);

      const favouriteItems = json.filter(
        (item: any) => item.TypeData === 'Favourite',
      );
      setFavoritData(favouriteItems);

      const HotItems = json.filter((item: any) => item.TypeData === 'Hot');
      setHotData(HotItems);

      const forYouItems = json.filter(
        (item: any) => item.TypeData === 'For You',
      );
      setforYouData(forYouItems);

      const BestSellerItems = json.filter(
        (item: any) => item.TypeData === 'Best Seller',
      );
      setBestSellerData(BestSellerItems);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(setError);
    }
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
  const handleSelectPizzaButton = (id: string) => {
    fetchCreateNewOrder(id);
    console.log('ok');
  };
  const fetchCreateNewOrder = async (PizzaId: string) => {
    fetch(`https://api.backendless.com/${app}/${api}/data/Order`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(data => {
        if (data['objectId']) {
          const Id = data['objectId'];
          console.log(Id);
          fetchAddOrderToUser(Id, PizzaId);
        } else {
          Alert.alert('Error', "Can't create order");
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const fetchAddOrderToUser = async (OrderId: string, PizzaId: string) => {
    console.log(objectId);
    fetch(
      `https://api.backendless.com/${app}/${api}/data/Users/${objectId}/Order`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([OrderId]),
      },
    )
      .then(response => response.json())
      .then(async data => {
        if (data == 1) {
          fetchAddPizzaToOrder(OrderId, PizzaId);
        } else {
          Alert.alert('Error', "Can't create order");
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const fetchAddPizzaToOrder = async (OrderId: string, PizzaId: string) => {
    fetch(
      `https://api.backendless.com/${app}/${api}/data/Order/${OrderId}/Pizza`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([PizzaId]),
      },
    )
      .then(response => response.json())
      .then(async data => {
        if (data == 1) {
          navigation.navigate('Size', {data: OrderId});
        } else {
          Alert.alert('Error', "Can't create order");
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (
    <View style={{height: '100%'}}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={handleProfilePress}>
            <AntDesign name="user" size={30} color="#900" />
          </TouchableOpacity>
        </View>
        <View style={styles.title}>
          <Text style={styles.textTitle}> Pizza Good</Text>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={handleSearchPress}>
            <FontAwesome name="search" size={30} color="#900" />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={handlePaymentPress}>
            <AntDesign name="shoppingcart" size={30} color="#900" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.textTitle}> Best Seller</Text>
          <FlatList
            horizontal={true}
            data={bestSeller}
            renderItem={({item}) => (
              <ListPizza
                img={{uri: item.Image}}
                name={item.PizzaName}
                price={item.Total}
                id={item.objectId}
                onSelectPizza={handleSelectPizzaButton}
              />
            )}
          />
        </View>
        <View>
          <Text style={styles.textTitle}> Hot</Text>
          <FlatList
            horizontal={true}
            data={hot}
            renderItem={({item}) => (
              <ListPizza
                img={{uri: item.Image}}
                name={item.PizzaName}
                price={item.Total}
                id={item.objectId}
                onSelectPizza={handleSelectPizzaButton}
              />
            )}
          />
        </View>
        <View>
          <Text style={styles.textTitle}> Favourite</Text>
          <FlatList
            horizontal={true}
            data={favouriteData}
            renderItem={({item}) => (
              <ListPizza
                img={{uri: item.Image}}
                name={item.PizzaName}
                price={item.Total}
                id={item.objectId}
                onSelectPizza={handleSelectPizzaButton}
              />
            )}
          />
        </View>
        <View>
          <Text style={styles.textTitle}> For You</Text>
          <FlatList
            horizontal={true}
            data={forYou}
            renderItem={({item}) => (
              <ListPizza
                img={{uri: item.Image}}
                name={item.PizzaName}
                id={item.objectId}
                price={item.Total}
                onSelectPizza={handleSelectPizzaButton}
              />
            )}
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
    flexDirection: 'row',
  },
  icon: {
    width: (width * 10) / 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: (width * 65) / 100,
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
