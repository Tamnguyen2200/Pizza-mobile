import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  FlatList,
} from 'react-native';
import {ChesseProps, NavigationProps} from './interface/Props';
import {api, app} from './interface/urrl';

function Thickness({navigation, route}: NavigationProps): JSX.Element {
  const [selectedDropdown, setSelectedDropdown] = useState('');

  const [data, setData] = useState<ChesseProps[]>([]);
  const [isLoading, setLoading] = useState(true);
  const OrderId = route.params.data;
  const SizeId = route.params.AddData;
  const objectId = route.params.objectId;

  const handleDropdownThinToggle = (dropdownName: string) => {
    const ThicknessId = '62E62E21-44C6-46BC-AADE-4F48E5158BE9';
    if (selectedDropdown === dropdownName) {
      fetchRemoveThickessToOrder(ThicknessId);
      setSelectedDropdown('');
    } else if (selectedDropdown === '') {
      fetchAddThickessToOrder(ThicknessId);
      setSelectedDropdown(dropdownName);
    }
  };
  const handleDropdownNewYourToggle = (dropdownName: string) => {
    const ThicknessId = 'AD28A746-3DB8-458B-96C5-6ABB375C5152';
    if (selectedDropdown === dropdownName) {
      fetchRemoveThickessToOrder(ThicknessId);
      setSelectedDropdown('');
    } else if (selectedDropdown === '') {
      setSelectedDropdown(dropdownName);
      fetchAddThickessToOrder(ThicknessId);
    }
  };
  const handleDropdownHandtossedToggle = (dropdownName: string) => {
    const ThicknessId = 'E4B1F5B4-BC72-4B16-8934-09F41A92BCD1';
    if (selectedDropdown === dropdownName) {
      fetchRemoveThickessToOrder(ThicknessId);
      setSelectedDropdown('');
    } else if (selectedDropdown === '') {
      setSelectedDropdown(dropdownName);
      fetchAddThickessToOrder(ThicknessId);
    }
  };
  const handleSelectCheeseButton = (CheeseID: string) => {
    fetchAddCheeseToOrder(CheeseID);
  };
  useEffect(() => {
    setLoading(true);
    fetchListCheese();
  }, []);
  const handleSelectBackButton = () => {
    fetchRemoveSizeToOrder();
  };
  const fetchRemoveSizeToOrder = async () => {
    fetch(
      `https://api.backendless.com/${app}/${api}/data/Order/${OrderId}/Size`,
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([SizeId]),
      },
    )
      .then(response => response.json())
      .then(data => {
        if (data == 1) {
          navigation.navigate('Size', {data: OrderId, objectId});
        } else {
          Alert.alert('Error', "Can't remove size from pizza.");
        }
      });
  };
  const fetchAddThickessToOrder = async (id: string) => {
    fetch(
      `https://api.backendless.com/${app}/${api}/data/Order/${OrderId}/Thickness`,
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
          // navigation.navigate('Thickness',{data: OrderId, AddData: id})
        } else {
          Alert.alert('Error', "Can't add pizza.");
        }
      });
  };
  const fetchRemoveThickessToOrder = async (id: string) => {
    fetch(
      `https://api.backendless.com/${app}/${api}/data/Order/${OrderId}/Thickness`,
      {
        method: 'DELETE',
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
        } else {
          Alert.alert('Error', "Can't add Thickness to pizza.");
        }
      });
  };
  const fetchAddCheeseToOrder = async (id: string) => {
    fetch(
      `https://api.backendless.com/${app}/${api}/data/Order/${OrderId}/Cheese`,
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
          navigation.navigate('Payment', {data: OrderId, AddData: 'Cash'});
        } else {
          Alert.alert('Error', "Can't add pizza.");
        }
      });
  };

  const fetchListCheese = async () => {
    try {
      const url = `https://api.backendless.com/${app}/${api}/data/Cheese`;
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      Alert.alert('error');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const renderItem = ({item}: {item: ChesseProps}) => (
    <TouchableOpacity onPress={() => handleSelectCheeseButton(item.objectId)}>
      <Text style={styles.text1}>
        {item.CheeseName} = {item.PriceCheese}$
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.sectionButton}
        onPress={handleSelectBackButton}>
        <Image source={require('../assets/arrowback.png')} />
        <Text style={styles.text}>Thickness</Text>
      </TouchableOpacity>

      {/* Đế bánh thứ nhất */}
      <View style={styles.row1}>
        <Text style={styles.text}>Thin Crust</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => handleDropdownThinToggle('thin')}>
          <View style={styles.margins}>
            <Image source={require('../assets/Thick1.png')} />
          </View>
        </TouchableOpacity>
      </View>
      {selectedDropdown === 'thin' && (
        <View style={styles.row2}>
          <View style={styles.box}>
            <FlatList data={data} renderItem={renderItem} />
          </View>
        </View>
      )}

      {/* Đế bánh thứ hai */}
      <View style={styles.row1}>
        <Text style={styles.text}>New York Crust</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => handleDropdownNewYourToggle('newyork')}>
          <View style={styles.margins}>
            <Image source={require('../assets/Thick2.png')} />
          </View>
        </TouchableOpacity>
      </View>
      {selectedDropdown === 'newyork' && (
        <View style={styles.row2}>
          <View style={styles.box}>
            <FlatList data={data} renderItem={renderItem} />
          </View>
        </View>
      )}

      {/* Đế bánh thứ ba */}
      <View style={styles.row1}>
        <Text style={styles.text}>Handtossed</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => handleDropdownHandtossedToggle('handtossed')}>
          <View style={styles.margins}>
            <Image source={require('../assets/Thick3.png')} />
          </View>
        </TouchableOpacity>
      </View>
      {selectedDropdown === 'handtossed' && (
        <View style={styles.row2}>
          <View style={styles.box}>
            <FlatList data={data} renderItem={renderItem} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 10,
  },
  sectionButton: {
    fontWeight: '700',
    flexDirection: 'row',
    padding: 8,
    marginBottom: 5,
  },
  row1: {
    marginLeft: 45,
    marginBottom: 5,
    marginTop: 55,
  },
  row2: {
    marginLeft: 55,
    marginBottom: 30,
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
    height: 100,
    borderRadius: 10,
    borderColor: '#A45D51',
  },
  box1: {
    borderWidth: 1,
    width: 300,
    height: 110,
    borderRadius: 10,
    borderColor: '#A45D51',
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Comfortaa',
    color: 'black',
    textAlignVertical: 'center',
    textAlign: 'center',
    marginTop: 5,
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
