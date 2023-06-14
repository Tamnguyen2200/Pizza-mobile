<<<<<<< HEAD
import React from "react";
import type {PropsWithChildren} from 'react';
import { Image, TouchableOpacityComponent } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { Button, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";



function Topping(): JSX.Element{
    return( 
    <SafeAreaView style = {{flex:100}}>
        <View style = {styles.sectionButton}>
            <TouchableOpacity style = {styles.sectionButton}>
                {/* <Image source={}/> */}
                <Text style = {{fontWeight: '700', fontSize: 20}}>Choose your topping</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.sectionImg}>
            
        </View>
        <View style = {styles.sectionTopping}>
            
        </View>
        <View style = {styles.sectionfoodButton}>
            
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionContainer:{
        backgroundColor: 'White'
    },
    sectionButton:{
        backgroundColor: 'White',
        fontWeight: 700,
        flex:10
    },
    sectionImg:{
        backgroundColor: 'White',
        flex:50
    },
    sectionTopping:{
        backgroundColor: 'White',
        flex:35
    },
    sectionfoodButton:{
        backgroundColor: 'White',
        flex:5
    }
}) 
=======
import React from "react-native"
import type {PropsWithChildren} from 'react';
import { Button, Text, View } from "react-native";

function Topping(): JSX.Element{
    return(
        <View><Text>áklflasfa</Text></View>
    )
};
>>>>>>> phat.huynh

export default Topping;