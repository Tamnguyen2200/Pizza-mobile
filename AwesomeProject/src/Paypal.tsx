import React, { useEffect, useState } from "react";
import { Dimensions, Image, Keyboard, ScrollView, TextInput, TouchableOpacityComponent } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { Button, Text, View } from "react-native";
import { NavigationProps } from "./interface/Props";

function Paypal({ navigation }: NavigationProps): JSX.Element {

    const handlePaymentMethodSelect = (method: string) => {
        navigation.navigate('Payment', { data: method })
    };
    return (
        <View style={{
            flex: 100,
            backgroundColor: 'white'
        }}>
            <View style={{
                // flex: 10,
                marginLeft: 15,
                marginRight: 15,
                width: 300,
                paddingTop: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // backgroundColor: 'blue'
                }}>
                    <View>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }}>
                            <Image
                                source={require('../assets/left.png')}
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                    }}>
                        <Text style={{
                            color: '#000000',
                            fontSize: 20,
                        }}>SIGN IN YOUR PAYPAL</Text>
                    </View>
                </View>

            </View>



            <View style={{
                marginTop: 30,
                marginLeft: 15,
                marginRight: 15,

            }}>
                <View style={{
                    backgroundColor: '#F6F6F6',
                    borderWidth: 1,
                    borderColor: '#F6F6F6',
                    height: 40,
                    borderRadius: 3,
                    marginBottom: 15,

                }}>
                    <TextInput style={{
                        marginLeft: 10,
                        color: 'black',
                        height: 40,
                    }}
                        placeholder='Email'
                    />
                </View>
                <View style={{
                    backgroundColor: '#F6F6F6',
                    borderWidth: 1,
                    borderColor: '#F6F6F6',
                    height: 40,
                    borderRadius: 3,
                    marginBottom: 5,
                }}>
                    <TextInput style={{
                        color: 'black',
                        height: 40,
                        marginLeft: 10
                    }}
                        placeholder='Password'
                    />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 15
            }}>
                <TouchableOpacity
                    onPress={() => {
                        handlePaymentMethodSelect('PayPal')
                    }}
                    style={{
                        marginTop: 30,
                        borderColor: '#A45D51',
                        borderWidth: 1,
                        width: 150,
                        height: 40,
                        borderRadius: 7,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        fontSize: 15,
                        color: '#A45D51'
                    }}>Verify</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Paypal