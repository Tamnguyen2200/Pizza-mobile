import React from 'react';
import { View, 
        Image, 
        Text, 
        TextInput, 
        StyleSheet,
        TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function Home(): JSX.Element {
  return (
      <View style={{ flex: 1}}>
        <View style={{flex: 1, marginVertical: 40}}>
             <TextInput style={styles.textinput} placeholder="Seach..."> 
                 <AntDesign name='search1' style={{color: 'black', fontSize: 20}}/>
             </TextInput>
             <MaterialIcons name='account-circle' style={{fontSize: 60, marginLeft: 310, marginTop: -8}}></MaterialIcons>
             <TouchableOpacity
          style={{
            borderWidth: 2,
            alignItems: 'center',
            borderColor: '#A45D51',
            borderRadius: 10,
            width: 250,
            marginTop: 20,
            alignSelf: 'center',
          }}
        >
          <Text style={{ fontSize: 25 }}>Create your own </Text>
        </TouchableOpacity>
        </View> 

        <View></View>
      </View>
   
  );
}

const styles = StyleSheet.create({
  textinput: {
    position: 'absolute',
    marginLeft: 20,
    width: 270,
    height: 45,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#E7DEDE",
    borderColor: "#E7DEDE"
  },
});

export default Home;
