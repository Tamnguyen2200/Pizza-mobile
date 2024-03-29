import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ListPizzaProps} from '../interface/Props';
import {api, app} from '../interface/urrl';

const {width, height} = Dimensions.get('screen');

function ListPizza({
  img,
  name,
  price,
  id,
  onSelectPizza
}: ListPizzaProps): JSX.Element {
  const handlePress = () => {
    if (onSelectPizza) {
      onSelectPizza(id); 
    }
  };

  return (
    <View style={styles.post}>
      <TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Image source={img} style={styles.img} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textName}> {name}</Text>
          <View>
            <View style={styles.textInfor}>
              <Text style={styles.textPrice}> $ {price} </Text>
              <TouchableOpacity onPress={handlePress}>
                <AntDesign name="pluscircle" size={30} color="#900" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  post: {
    width: (width * 40) / 100,
    height: (height * 25) / 100,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
    marginLeft: 20,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  textName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Comfortaa',
    color: '#A45D51',
  },
  textPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Comfortaa',
    color: '#A45D51',
  },
  textInfor: {
    height: 40,
    alignItems: 'center',
    width: (width * 35) / 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
});

export default ListPizza;
