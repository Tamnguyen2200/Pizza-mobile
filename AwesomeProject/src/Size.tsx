import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import {NavigationProps, SizeProps} from './interface/Props';
import {api, app} from './interface/urrl';

function Size({navigation, route}: NavigationProps): JSX.Element {
  const OrderId = route.params.data;
  const {objectId} = route.params || {};

  const handleSelectSizeSButton = () => {
    const id = '641A0B89-D00E-4698-B598-9D185A95B55F';
    fetchAddSizeToOrder(id);
  };
  const handleSelectSizeMButton = () => {
    const id = 'C009F961-F0C6-4CAB-857D-6084FCFB9CDD';
    fetchAddSizeToOrder(id);
  };
  const handleSelectSizeLButton = () => {
    const id = 'EF70E875-24E1-43E2-95E9-76BDF82817B1';
    fetchAddSizeToOrder(id);
  };
  const handleSelectBackButton = () => {
    fetchRemovePizzaToOrder();
  };
  useEffect(() => {
    console.log(route);
  }, []);

  const fetchAddSizeToOrder = async (id: string) => {
    fetch(
      `https://api.backendless.com/${app}/${api}/data/Order/${OrderId}/Size`,
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
          navigation.navigate('Thickness', {
            data: OrderId,
            AddData: id,
            objectId,
          });
        } else {
          Alert.alert('Error', "Can't add pizza.");
        }
      });
  };

  const fetchRemovePizzaToOrder = async () => {
    console.log(route.params.data);
    fetch(`https://api.backendless.com/${app}/${api}/data/Order/${OrderId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(data => {
        navigation.navigate('Home', {objectId});
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionButton}>
        <TouchableOpacity
          style={styles.sectionButton}
          onPress={handleSelectBackButton}>
          <Image source={require('../assets/arrowback.png')} />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row1}>
        <TouchableOpacity onPress={handleSelectSizeSButton}>
          <View style={styles.margins}>
            <Image source={require('../assets/SizeS.png')} />
          </View>
        </TouchableOpacity>

        <Text style={styles.text}>7”: $3.99</Text>
      </View>
      <View style={styles.row2}>
        <TouchableOpacity onPress={handleSelectSizeMButton}>
          <View style={styles.margins}>
            <Image source={require('../assets/SizeM.png')} />
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>9”: $7.99</Text>
      </View>
      <View style={styles.row3}>
        <TouchableOpacity onPress={handleSelectSizeLButton}>
          <View style={styles.margins}>
            <Image source={require('../assets/SizeL.png')} />
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>12”: $11.99</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: `#F5F5F5`,
  },
  sectionButton: {
    fontWeight: 700,
    display: 'flex',
    flexDirection: 'row',
    flex: 5,
    padding: 5,
  },
  row1: {
    flex: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row2: {
    flex: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row3: {
    flex: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Comfortaa',
    color: '#000000',
  },
  margins: {
    width: 250,
    height: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});

export default Size;
