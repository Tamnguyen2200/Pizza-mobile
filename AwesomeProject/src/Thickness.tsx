import React from'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { NavigationProps } from './interface/Props';

<<<<<<< HEAD
function Size({}): JSX.Element
=======
function Thickness({ navigation }:NavigationProps ): JSX.Element
>>>>>>> main
{
     return(
        <SafeAreaView style={styles.container}>
            <View style = {styles.sectionButton} >
                <TouchableOpacity style = {styles.sectionButton} onPress={() => navigation.navigate('Size')}>
                    <Image source={require('../assets/arrowback.png')}/>
                    <Text style = {styles.text}>Thickness</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row1}>
                  <Text style={styles.text}> Thin Crust </Text>
            </View>  
            <View style = {styles.margins}>
              <TouchableOpacity onPress={() => navigation.navigate('Topping')}>
              <Image source={require('../assets/Thick1.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.row1}>
                  <Text style={styles.text}> New Your Crust </Text>
            </View>  
            <View style = {styles.margins}>
                  <Image source={require('../assets/Thick2.png')} />
            </View>
            <View style={styles.row1}>
                  <Text style={styles.text}> Handtossed </Text>
            </View>
            <View style = {styles.margins}>
                  <Image source={require('../assets/Thick3.png')} />
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
        padding: 8
    },
    row1: {
      flex: 10,
      flexDirection: 'row',
      marginLeft: 60
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
      width: 100, 
      height: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 160,
    }
  });

export default Thickness;