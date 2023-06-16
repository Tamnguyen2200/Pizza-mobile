import React, { useState } from "react";
import { Dimensions, Image, ScrollView, TouchableOpacityComponent } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { Button, Text, View } from "react-native";
import ToppingButton from "../components/ToppingButton";


function Topping(): JSX.Element{

    const [showImage, setShowImage] = useState(false);

    const handleSelectToppingButton = () => {
        setShowImage(true);
    }
    
    return( 
    <SafeAreaView style = {styles.sectionContainer}>
        <View style = {styles.sectionButton}>
            <TouchableOpacity style = {styles.sectionButton}>
                <Image source={require('../assets/arrowback.png')}/>
                <Text style = {styles.text}>Choose your topping</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.sectionImg}>
            <Image style ={ styles.pizzaImg } source={require('../assets/pizza.png')}/>
            {showImage && (
            <Image source={require('../assets/bacon-topping.png')} style ={ styles.toppingImg }/>
            )} 
        </View>
        <View style = {styles.sectionTopping}>
            <Text style = {styles.test}>Toppings</Text>
            <View style = {styles.topping}>
                <ScrollView horizontal = {true}>
                {[...Array(15)].map((_, index) => (
                    <ToppingButton showImage={showImage} setShowImage={setShowImage} key={index}/>
                ))}
                </ScrollView>
            </View>
        </View>
        <View style = {styles.sectionfoodButton}>
            <TouchableOpacity>
                <Image source={require('../assets/arrownext.png')}/>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionContainer:{
        flex:100,
        backgroundColor: (`#F5F5F5`)
    },
    sectionButton:{
        fontWeight: 700,
        display: 'flex',
        flexDirection: 'row',
        flex:5,
        padding: 5
    },
    text: {
        fontWeight: '700', 
        fontSize: 20,
        color: 'black',
        marginLeft: 20
    },
    sectionImg:{
        flex:40,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft:70
    },
    sectionTopping:{
        flex:35,
    },
    topping:{
        display: 'flex',
        flexDirection: "row"
    },
    item:{
        margin: 5
    },
    test:{
        fontSize: 14,
        fontWeight: "700",
        color: 'black',
        marginLeft: 25,
    },
    
    sectionfoodButton:{
        flex:5,
        flexDirection: "row-reverse",
        marginLeft: 30
    },
    pizzaImg:{
        position: 'relative',
    },
    toppingImg:{
        position: 'absolute',
        marginLeft: 65,
        width: 240,
        height: 240
    },
}) 

export default Topping;