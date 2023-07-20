import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, Alert, FlatList } from 'react-native';
import { ChesseProps, NavigationProps } from './interface/Props';
import { api, app } from './interface/urrl';

function Thickness({ navigation }: NavigationProps): JSX.Element {
  const [selectedDropdown, setSelectedDropdown] = useState('');

  const [data, setData] = useState<ChesseProps[]>([]);
  const [isLoading, setLoading] = useState(true);



  const handleDropdownToggle = (dropdownName: string) => {
    if (selectedDropdown === dropdownName) {
      setSelectedDropdown('');
    } else if (selectedDropdown === '') {
      setSelectedDropdown(dropdownName);
    }

  };
  const handleSelectCheeseButton = () =>{
    navigation.navigate('Topping')
  }
  useEffect(() => {
    setLoading(true);
    fetchListCheese();
}, []);

const fetchListCheese = async () =>{
    try{
        const url = `https://api.backendless.com/${app}/${api}/data/Cheese`;
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }
    catch (error){
        Alert.alert('error');
        setLoading(false);
    }
    finally {
        setLoading(false);
    }
}
const renderItem = ({ item }: { item: ChesseProps }) => (
  <TouchableOpacity onPress={handleSelectCheeseButton}>
    <Text style={styles.text1}>{item.CheeseName} = {item.PriceCheese}$</Text>
  </TouchableOpacity>  
)
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.sectionButton} onPress={() => navigation.navigate('Size')}>
        <Image source={require('../assets/arrowback.png')} />
        <Text style={styles.text}>Thickness</Text>
      </TouchableOpacity>

      {/* Đế bánh thứ nhất */}
      <View style={styles.row1}>
        <Text style={styles.text}>Thin Crust</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => handleDropdownToggle('thin')}>
          <View style={styles.margins}>
            <Image source={require('../assets/Thick1.png')} />
          </View>
        </TouchableOpacity>
      </View>
      {selectedDropdown === 'thin' && (
        <View style={styles.row2}>
            <View style={styles.box}>
              <FlatList
               data={data}
               renderItem={renderItem}
              />
            </View>
        </View>
      )}

      {/* Đế bánh thứ hai */}
      <View style={styles.row1}>
        <Text style={styles.text}>New York Crust</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => handleDropdownToggle('newyork')}>
          <View style={styles.margins}>
            <Image source={require('../assets/Thick2.png')} />
          </View>
        </TouchableOpacity>
      </View>
      {selectedDropdown === 'newyork' && (
        <View style={styles.row2}>
          <View style={styles.box}>
           <FlatList
            data={data}
            renderItem={renderItem}
            />
          </View>
        </View>
      )}

      {/* Đế bánh thứ ba */}
      <View style={styles.row1}>
        <Text style={styles.text}>Handtossed</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => handleDropdownToggle('handtossed')}>
          <View style={styles.margins}>
            <Image source={require('../assets/Thick3.png')} />
          </View>
        </TouchableOpacity>
      </View>
      {selectedDropdown === 'handtossed' && (
        <View style={styles.row2}>
          <View style={styles.box}>
            <FlatList
                data={data}
                renderItem={renderItem}
                />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 10
  },
  sectionButton: {
    fontWeight: '700',
    flexDirection: 'row',
    padding: 8,
    marginBottom: 5
  },
  row1: {
    marginLeft: 45,
    marginBottom: 5,
    marginTop: 55
  },
  row2: {
    marginLeft: 55,
    marginBottom: 30
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Comfortaa',
    color: '#000000',
  },
  box: {
    borderWidth: 1,
    width: 300,
    height: 200,
    borderRadius: 10,
    borderColor: '#A45D51'
  },
  box1: {
    borderWidth: 1,
    width: 300,
    height: 110,
    borderRadius: 10,
    borderColor: '#A45D51'
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Comfortaa',
    color: 'black',
    textAlignVertical: 'center',
    textAlign: 'center',
    marginTop: 5
  },
  margins: {
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 160,
  },
});

export default Thickness;
