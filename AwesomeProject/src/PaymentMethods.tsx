import React, { useEffect, useState } from "react";
import { Dimensions, Image, Keyboard, ScrollView, TextInput, TouchableOpacityComponent } from "react-native";
import { TouchableOpacity} from "react-native";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { Button, Text, View } from "react-native";
import { NavigationProps } from "./interface/Props";


function PaymentMethods ({navigation}: NavigationProps): JSX.Element{
    const handlePaymentMethodSelect = (method: string) => {
        navigation.navigate('Payment', { data: method })
    };

    

    return (
        <View style={{
            backgroundColor: '#F5F5F5',
            flex: 100
        }}>
            <View style={{
                flex: 10,
                marginLeft: 15,
                marginRight: 15,
                width: 275,
                paddingTop: 10
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // backgroundColor: 'blue'
                }}>
                    <View style={{height: 47}}>
                        <TouchableOpacity onPress ={() => {
                            navigation.navigate('Payment',{data: 'Cash'})
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
                        }}>Payment Methods</Text>
                    </View>
                </View>
            </View>
    
            <View style={{
                flex: 65,
                marginLeft: 15,
                marginRight: 15,
                // backgroundColor: 'red'
            }}>
                <Text style={{
                    color: '#000000',
                    fontSize: 15,
                    paddingBottom: 5,
                }}
                >CHOOSE A PAYMENT METHOD</Text>
                <View style={{
                    backgroundColor: '#FFFFFF',
                    borderWidth: 1,
                    borderColor: '#F6F6F6',
                    height: 200,
                    borderRadius: 7,
                    marginTop: 10
                }}>
                    <View style={{
                        marginTop: 20,
                        marginLeft: 15,
                        marginRight: 15
                    }}>
                        <View style={{
                            backgroundColor: '#F6F6F6',
                            borderWidth: 1,
                            borderColor: '#F6F6F6',
                            height: 35,
                            borderRadius: 1,
                            marginBottom: 5,
    
                        }}>
                            <TouchableOpacity
                             onPress={() => {
                                handlePaymentMethodSelect('Cash')
                            }}
                            style={{
                                height: 35,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Image
                                    source={require('../assets/dollar.png')}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        marginLeft: 10,
                                        marginRight: 25
                                    }}
                                />
                                <Text style={{
                                    fontSize: 15,
                                    color: 'black',
                                }}>Cash</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            backgroundColor: '#F6F6F6',
                            borderWidth: 1,
                            borderColor: '#F6F6F6',
                            height: 35,
                            borderRadius: 3,
                            marginBottom: 5,
                        }}>
                            <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Paypal')
                            }}
                            style={{
                                height: 35,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Image
                                    source={require('../assets/paypal-logo1.png')}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        marginLeft: 10,
                                        marginRight: 25
                                    }}
                                />
    
                                <Text style={{
                                    fontSize: 15,
                                    color: 'black'
                                }}>Paypal</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            backgroundColor: '#F6F6F6',
                            borderWidth: 1,
                            borderColor: '#F6F6F6',
                            height: 35,
                            borderRadius: 3,
                            marginBottom: 5
    
                        }}>
                            <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('MasterCard')
                            }}
                            style={{
                                height: 35,
                                flexDirection: 'row',
                                alignItems: 'center',
    
                            }}>
                                <Image
                                    source={require('../assets/mastercard-logo1.png')}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        marginLeft: 10,
                                        marginRight: 25
                                    }}
                                />
                                <Text style={{
                                    fontSize: 15,
                                    color: 'black'
                                }}>Master Card</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            backgroundColor: '#F6F6F6',
                            borderWidth: 1,
                            borderColor: '#F6F6F6',
                            height: 35,
                            borderRadius: 3,
    
                        }}>
                            <TouchableOpacity 
                            onPress={() => {
                                navigation.navigate('VisaCard')
                            }}
                            style={{
                                height: 35,
                                flexDirection: 'row',
                                alignItems: 'center',
    
                            }}>
                                <Image
                                    source={require('../assets/visa-logo-preview1.png')}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        marginLeft: 10,
                                        marginRight: 25
                                    }}
                                />
                                <Text style={{
                                    fontSize: 15,
                                    color: 'black'
                                }}>Visa Card</Text>
                            </TouchableOpacity>
                        </View>
    
                    </View>
    
                </View>
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
                }}></View>
            </View>
        </View>
    )
}

export default PaymentMethods