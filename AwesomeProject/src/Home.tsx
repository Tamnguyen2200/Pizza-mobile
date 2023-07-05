import React from 'react';
import ListPizza from './components/ListPizza';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationProps } from './interface/Props';

const {width, height} = Dimensions.get('screen'); // lấy kích thước màn hình

function Home({ navigation }: NavigationProps): JSX.Element {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}>
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
        <Text style={styles.textTitle}> Best Seller</Text>
        <ScrollView horizontal={true}>
          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />

          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation} 
            />

          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />

          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />

          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />
        </ScrollView>

        <Text style={styles.textTitle}> Hot</Text>
        <ScrollView horizontal={true}>
          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />

          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />

          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />

          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />
          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />
        </ScrollView>

        <Text style={styles.textTitle}> Favourite</Text>
        <ScrollView horizontal={true}>
          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />

          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />

          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />

          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />
          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />
        </ScrollView>

        <Text style={styles.textTitle}> For You</Text>
        <ScrollView horizontal={true}>
          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />

          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />

          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />

          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />
          <ListPizza
            img={require('../assets/banner.png')}
            name="Shrimp Pizza"
            price="$ 20,99"
             navigation={navigation}
          />
        </ScrollView>
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
    height: (height * 90) / 100,
    padding: 10,
  },
});

export default Home;
