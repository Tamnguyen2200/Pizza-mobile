import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Search({navigation}): JSX.Element {
  return (
    <View>
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
          <AntDesign name="search1" style={{color: 'black', fontSize: 20}} />
          <TextInput placeholder="Seach..." />
          <MaterialIcons name="cancel" style={{fontSize: 15}} />
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
});
export default Search;
