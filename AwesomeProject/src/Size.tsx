import React from'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { NavigationProps } from './interface/Props';

function Size({ navigation }: NavigationProps): JSX.Element
{

  
     return(
        <SafeAreaView style={styles.container}>
            <View style = {styles.sectionButton}>
                <TouchableOpacity style = {styles.sectionButton} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/arrowback.png')}/>
                    <Text style = {styles.text}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row1}>
              <TouchableOpacity  onPress={() => navigation.navigate('Thickness')}>
                <View style = {styles.margins}>
                  <Image source={require('../assets/SizeS.png')} />
                </View>
                </TouchableOpacity>

                <Text style={styles.text}>7”: $3.99</Text>
                
            </View>
            <View style={styles.row2}>
                <View style = {styles.margins}>
                  <Image source={require('../assets/SizeM.png')}/>
                </View>
                <Text style={styles.text}>9”: $7.99</Text>
            </View>
            <View style={styles.row3}>
                <View style = {styles.margins}>
                  <Image source={require('../assets/SizeL.png')}/>
                </View>
                <Text style={styles.text}>12”: $11.99</Text>
            </View>
        </SafeAreaView>  
     )
};

const styles = StyleSheet.create({
    container: {
      flex: 100,
      backgroundColor: (`#F5F5F5`),
    },
    sectionButton:{
        fontWeight: 700,
        display: 'flex',
        flexDirection: 'row',
        flex:5,
        padding: 5
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
      fontFamily:'Comfortaa',
      color: '#000000',
    },
    margins: {
      width: 250, 
      height: 250,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10
    }
  });

export default Size;