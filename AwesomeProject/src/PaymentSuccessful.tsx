import React, { useEffect, useState } from "react";
import { Dimensions, Image, Keyboard, ScrollView, TextInput, TouchableOpacityComponent } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { Button, Text, View } from "react-native";
import { NavigationProps, ProfileProps } from "./interface/Props";


<<<<<<< HEAD
function PaymentSuccessful({ navigation, route }: NavigationProps): JSX.Element {
    const { PaymentMethod, Fullname, Address, PhoneNumber, TotalPriceOrder } = route.params;

    return (
=======
function PaymentSuccessful ({navigation, route}: NavigationProps): JSX.Element{

    const objectId  = route.params.objectId;
    const PayMentMethod = route.params.additionalValue;

    return(
>>>>>>> main
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
<<<<<<< HEAD
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Tracking', {
                                Fullname: Fullname,
                                Address: Address,
                                PhoneNumber: PhoneNumber,
                                PaymentMethod: PaymentMethod,
                                TotalPriceOrder: TotalPriceOrder
                            })
                        }}
                        style={{
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
=======
                    <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate('Tracking', {objectId, additionalValue: PayMentMethod})
                    }}
                    style={{
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
>>>>>>> main
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