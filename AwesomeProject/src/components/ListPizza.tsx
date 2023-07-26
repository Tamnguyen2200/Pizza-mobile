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

<<<<<<< HEAD
const {width, height} = Dimensions.get('screen'); // lấy kích thước màn hình

function ListPizza({ img, name, price, id, navigation }: ListPizzaProps): JSX.Element {

  const [OrderId, setOrderId] = useState('');
  
=======
function ListPizza({
  img,
  name,
  price,
  id,
  navigation,
}: ListPizzaProps): JSX.Element {
>>>>>>> phat.huynh
  const handlePress = () => {
    fetchCreateNewOrder();
  };

  const fetchCreateNewOrder = async () => {
    fetch(`https://api.backendless.com/${app}/${api}/data/Order`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
<<<<<<< HEAD
    }).then(response => response.json())
    .then(data =>{
      if(data['objectId']){
        const objectId = data['objectId'];
        setOrderId(objectId);
        
      } else{
        Alert.alert('Error', "Can't create order");
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  useEffect(() => {
    if (OrderId) {
      fetchAddCustomerToOrder();
    }
  }, [OrderId]);
  const fetchAddCustomerToOrder = async() => {
    fetch(`https://api.backendless.com/${app}/${api}/data/Order/${OrderId}/Customer`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(["6C123A20-5A6F-4612-B02F-7034BB317B46"]),
    }).then(response => response.json())
    .then(async data =>{
      if(data == 1){
        console.log(data)
        fetchAddPizzaToOrder()
      } else{
        Alert.alert('Error', "Can't create order");
        console.log(data)
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  const fetchAddPizzaToOrder = async() => {
    fetch(`https://api.backendless.com/${app}/${api}/data/Order/${OrderId}/Pizza`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([id]),
    }).then(response => response.json())
    .then(async data =>{
      if(data == 1){
        navigation.navigate('Size', { data: OrderId })
      } else{
        Alert.alert('Error', "Can't create order");
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  const fetchAddPricePizzaToOrder = async() => {
    fetch(`https://api.backendless.com/${app}/${api}/data/Order/${OrderId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "PricePizza": price
      }),
    }).then(response => response.json())
    .then(async data =>{
      if(data == 1){
        navigation.navigate('Size', { data: OrderId })
      } else{
        Alert.alert('Error', "Can't create order");
      }
=======
>>>>>>> phat.huynh
    })
      .then(response => response.json())
      .then(async data => {
        if (data.objectId) {
          try {
            fetch(
              `https://api.backendless.com/${app}/${api}/data/Order/${data.objectId}/Pizza`,
              {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify([id]),
              },
            )
              .then(response => response.json())
              .then(data => {
                if (data == 1) {
                  navigation.navigate('Size');
                } else {
                  Alert.alert('Error', "Can't add pizza.");
                }
              });
          } catch (error) {
            Alert.alert('error');
          } finally {
          }
        } else {
          Alert.alert('Lỗi', 'Không Thêm Hoá Đơn Được');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
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
