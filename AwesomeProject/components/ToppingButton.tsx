
import React, { useState } from 'react';
import {
    Image,
    StyleSheet, Text, Touchable, TouchableOpacity, View
} from 'react-native';

function ToppingButton({ showImage, setShowImage }): JSX.Element {
    
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
        setShowImage(!showImage);
    };

    return (
        <View style ={styles.item}>
            <Image source={require('../assets/bacon.png')} style = {styles.img}/>
            <View style = {styles.box}>
                <Text style = {styles.titleTopping}>Bacon</Text>
                <Text style = {styles.titleTopping}>$2</Text>
                <TouchableOpacity style={[styles.button, isPressed && styles.buttonPressed]}
                    onPress={handlePress}>
                    <View style = {[styles.textBorder, { borderColor: isPressed ? '#ffffff' : '#A45D51' },]}>
                        <Text style={[styles.plus, isPressed && styles.plusPressed]}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        position: 'absolute',
        zIndex: 1,
        margin: 12.5
    },
    box:{
        backgroundColor: 'white',
        width: 125,
        height: 160,
        position: 'relative',
        marginTop: 70,
        borderRadius: 30,
        paddingTop: 70,
        textAlign: 'center'        
    },
    button:{
        alignItems: 'center',
        margin: 5,
        textAlign: 'center',
        width: 25,
        height: 25,
        borderRadius: 50,
        marginLeft: 50
    },
    textBorder:{
        borderWidth: 1,
        width: 25,
        height: 25,
        alignItems: 'center',
        borderColor: (`#A45D51`),
        borderRadius: 50
    },
    buttonPressed: {
        backgroundColor: (`#A45D51`),
    },
    titleTopping:{
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    },
    plus:{
        color: (`#A45D51`),
    },
    plusPressed: {
       color: 'white'
    },
    item:{
        margin: 5
    },
});

export default ToppingButton