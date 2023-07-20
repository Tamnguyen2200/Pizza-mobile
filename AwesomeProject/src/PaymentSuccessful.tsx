import React, { useEffect, useState } from "react";
import { Dimensions, Image, Keyboard, ScrollView, TextInput, TouchableOpacityComponent } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { Button, Text, View } from "react-native";
import { NavigationProps } from "./interface/Props";


function PaymentSuccessful ({navigation}: NavigationProps): JSX.Element{
    return(
        <View style={{
            backgroundColor: '#F5F5F5',
            flex: 100,
        }}>
            <View style={{
                flex: 85,
                paddingTop: 10,
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image
                    source={require('../assets/logo2.png')}
                />
                <Text style={{
                    color: '#000000',
                    fontSize: 20,
                    fontFamily: 'Arial'
                }}>ORDER SUCCESSFUL!</Text>
            </View>
            <View style={{
                flex: 15,
                marginLeft: 15,
                marginRight: 15,
                // backgroundColor: 'green'
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <TouchableOpacity style={{
                        marginTop: 30,
                        borderColor: '#A45D51',
                        backgroundColor: '#A45D51',
                        borderWidth: 1,
                        width: 180,
                        height: 40,
                        borderRadius: 7,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 15,
                            color: 'white'
                        }}>Tracking your order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                    style={{
                        marginTop: 30,
                        borderColor: '#A45D51',
                        borderWidth: 1,
                        width: 180,
                        height: 40,
                        borderRadius: 7,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 15,
                            color: '#A45D51'
                        }}>Order</Text>
                    </TouchableOpacity>
                </View>
    
            </View>
        </View>
    )
}
export default PaymentSuccessful