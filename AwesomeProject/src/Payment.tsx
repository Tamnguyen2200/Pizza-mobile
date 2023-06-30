import React, { useState } from "react";
import { Dimensions, Image, ScrollView, TextInput, TouchableOpacityComponent } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { Button, Text, View } from "react-native";
import { NavigationProps } from "./interface/Props";

function Payment({ navigation }:NavigationProps ): JSX.Element{
    
    return( 
        <View style={{
            backgroundColor: '#F5F5F5',
            flex: 100
        }}>
            <View style = {styles.sectionButton}>
                <TouchableOpacity style = {styles.sectionButton} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/arrowback.png')}/>
                </TouchableOpacity>
            </View>
            {/* View1 */}
            <View style={{ 
                flexDirection: 'row',
                flex: 5,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    color: '#000000',
                    fontSize: 20
                }}>Payment</Text>
            </View>
            <View style={{
                flex: 20,
                marginLeft: 15,
                marginRight: 15
            }}>
    
                {/* View2 */}
                <Text style={{
                    color: '#000000',
                    fontSize: 15,
                    paddingBottom: 5
                }}
                >FILL YOUR INFORMATION</Text>
    
                <View style={{
                    borderWidth: 1,
                    borderColor: '#CFCCCC',
                    height: 30,
                    borderRadius: 7,
                    marginBottom: 10
                }}>
                    <TextInput style={{
                        color: 'black',
                        height: 35
                    }}
                        placeholder='Name'
                    />
    
                </View>
                <View style={{
                    borderWidth: 1,
                    borderColor: '#CFCCCC',
                    height: 30,
                    borderRadius: 7,
                    marginBottom: 10
    
                }}>
                    <TextInput style={{
                        color: 'black',
                        height: 35
                    }}
                        placeholder='Phone number'
                    />
                </View>
                <View style={{
                    borderWidth: 1,
                    borderColor: '#CFCCCC',
                    height: 30,
                    borderRadius: 7
    
                }}>
                    <TextInput style={{
                        color: 'black',
                        height: 35
                    }}
                        placeholder='Address'
                    />
                </View>
            </View>
    
            {/* View3 */}
            <View style={{
                flex: 35,
                marginLeft: 15,
                marginRight: 15,
                paddingTop: 10
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{
                        color: '#000000',
                        fontSize: 15,
    
                        marginBottom: 10
                    }}
                    >ORDER PROCESSING</Text>
    
                    <Text style={{
                        color: '#000000',
                        fontSize: 15,
    
                    }}
                    >More dishes</Text>
                </View>
    
                <View style={{
                    flex: 100
                }}>
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        borderWidth: 1,
                        borderColor: '#CFCCCC',
                        height: '45%',
                        marginBottom: 10,
                        borderRadius: 15
                    }}>
                    </View>
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        borderWidth: 1,
                        borderColor: '#CFCCCC',
                        height: '45%',
                        borderRadius: 15
                    }}>
                    </View>
    
                </View>
    
            </View>
    
    
            {/* View4 */}
            <View style={{
                flex: 30,
                marginLeft: 15,
                marginRight: 15,
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{
                        color: '#000000',
                        fontSize: 15,
                    }}
                    >Subtotal (2 items):</Text>
    
                    <Text style={{
                        color: '#000000',
                        fontSize: 15,
                    }}
                    >$300</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 10
                }}>
                    <Text style={{
                        color: '#000000',
                        fontSize: 15,
                    }}
                    >Shipping: 2.8km</Text>
    
                    <Text style={{
                        color: '#000000',
                        fontSize: 15,
                    }}
                    >$1.2</Text>
                </View>
                <Text style={{
                    color: '#000000',
                    fontSize: 15,
                    paddingBottom: 5
                }}
                >PAYMENT METHOD</Text>
                <TouchableOpacity style={{
                    borderColor: '#CFCCCC',
                    borderWidth: 1,
                    height: 40,
                    borderRadius: 7,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 15,
                        paddingLeft: 30
                    }}>Cash/Paypal/Master Card</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={{
                    marginTop: 30,
                    borderColor: '#A45D51',
                    borderWidth: 1,
                    height: 40,
                    borderRadius: 7,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 15,
                    }}>Order</Text>
                </TouchableOpacity>
    
            </View>
    
        </View>
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
})


export default Payment;