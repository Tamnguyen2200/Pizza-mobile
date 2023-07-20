import React, { useEffect, useState } from "react";
import { Dimensions, Image, Keyboard, ScrollView, TextInput, TouchableOpacityComponent } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { Button, Text, View } from "react-native";
import { NavigationProps } from "./interface/Props";

function Payment({ navigation, route  }:NavigationProps ): JSX.Element{
    const { data } = route.params;
    
    const [keyboardIsShow, setkeyboardIsShow] = useState(false)
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setkeyboardIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyboardIsShow(false)
        })
    })

   
    return( 
        <ScrollView style={{backgroundColor: '#F5F5F5',flex: 100}}>
            {/* Button Back */}
            <View style={{flex: 10,marginLeft: 15,width: 225,paddingTop: 10}}>
                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'}}>
                    <View>
                        <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                            <Image
                                source={require('../assets/arrowback.png')}
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{color: '#000000',fontSize: 20,fontWeight: '700',}}>Payment</Text>
                    </View>
                </View>
            </View>
            {/* Form */}
            <View style={{flex: 20,marginLeft: 15,marginRight: 15,marginTop: 25}}>
                <Text style={{color: '#000000',fontSize: 15,paddingBottom: 5, fontWeight: '700'}}>FILL YOUR INFORMATION</Text>
                <View style={{backgroundColor: '#FFFFFF',borderWidth: 1,borderColor: '#CFCCCC',borderRadius: 7,marginBottom: 10}}>
                    <TextInput 
                        style={{color: 'black',height: 40}}
                        placeholder='Name'
                    />
                </View>
                <View style={{backgroundColor: '#FFFFFF',borderWidth: 1,borderColor: '#CFCCCC',borderRadius: 7,marginBottom: 10}}>
                    <TextInput style={{color: 'black', height: 40}}
                        placeholder='Phone number'
                    />
                </View>
                <View style={{backgroundColor: '#FFFFFF',borderWidth: 1,borderColor: '#CFCCCC',borderRadius: 7}}>
                    <TextInput style={{ color: 'black',height: 40}}
                        placeholder='Address'
                    />
                </View>
            </View>
            {/* Order */}
            <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop: 20, marginLeft: 16, marginRight: 16}}>
                <Text style={{color: '#000000',fontSize: 15,marginBottom: 10, fontWeight:'600'}}>ORDER PROCESSING</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                    <Text style={{color: 'black',fontSize: 15,}}>More dishes</Text>
                </TouchableOpacity>
            </View>
            {/* Product */}
            <View style={{flex: 100,marginTop: 15, marginLeft: 16, marginRight: 16 }}>
                <View style={{backgroundColor: '#FFFFFF',borderWidth: 1,borderColor: '#CFCCCC',height: 150,marginBottom: 10,borderRadius: 15, }}>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', alignContent: 'center', paddingLeft: 15, paddingTop:20, position:'relative'}}>
                        <Image
                            source={require('../assets/pizza1.png')}
                            style={{width: 100, height: 100}}
                        />
                        <View>
                            <Text style={{color: '#000000',fontSize: 13,marginLeft: 20, fontWeight: '700'}}>Shrimp</Text>
                            <Text style={{color: '#000000',fontSize: 12,marginLeft: 20, paddingTop: 5, paddingBottom: 5}}>Size S, Thin crust, Double cheese</Text>
                            <Text style={{color: '#000000',fontSize: 13,marginLeft: 20, fontWeight:'700'}}>150$</Text>
                            <View style={{marginTop: 15,width: 90,marginLeft: 20,backgroundColor: 'white',borderWidth: 1,borderColor: '#000000',height: 30,borderRadius: 15,}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                                    <TouchableOpacity style={{alignItems: 'center',display: 'flex', alignContent: 'center'}}>
                                        <View style={{backgroundColor: 'black', width: 12, height: 2, marginTop: 12, }}></View>
                                    </TouchableOpacity>
                                    <Text style={{color: '#000000',fontSize: 13, marginTop: 4}}>1</Text>
                                    <TouchableOpacity>
                                        <View>
                                            <View style={{backgroundColor: 'black', width: 12, height: 2, marginTop: 12, position:'relative'}}></View>
                                            <View style={{backgroundColor: 'black', width: 2, height: 12, position:'absolute',marginTop:6.5, marginLeft: 5 }}></View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View >
                    </View>
                    <TouchableOpacity style={{position:'absolute', marginLeft: 270, marginTop: 15}}>
                        <Image
                            source={require('../assets/close.png')}
                            style={{
                                marginLeft: 60,
                                width: 10,
                                height: 10
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: '#FFFFFF',borderWidth: 1,borderColor: '#CFCCCC',height: 150,marginBottom: 10,borderRadius: 15, }}>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', alignContent: 'center', paddingLeft: 15, paddingTop:20, position:'relative'}}>
                        <Image
                            source={require('../assets/pizza1.png')}
                            style={{width: 100, height: 100}}
                        />
                        <View>
                            <Text style={{color: '#000000',fontSize: 13,marginLeft: 20, fontWeight: '700'}}>Shrimp</Text>
                            <Text style={{color: '#000000',fontSize: 12,marginLeft: 20, paddingTop: 5, paddingBottom: 5}}>Size S, Thin crust, Double cheese</Text>
                            <Text style={{color: '#000000',fontSize: 13,marginLeft: 20, fontWeight:'700'}}>150$</Text>
                            <View style={{marginTop: 15,width: 90,marginLeft: 20,backgroundColor: 'white',borderWidth: 1,borderColor: '#000000',height: 30,borderRadius: 15,}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                                    <TouchableOpacity style={{alignItems: 'center',display: 'flex', alignContent: 'center'}}>
                                        <View style={{backgroundColor: 'black', width: 12, height: 2, marginTop: 12, }}></View>
                                    </TouchableOpacity>
                                    <Text style={{color: '#000000',fontSize: 13, marginTop: 4}}>1</Text>
                                    <TouchableOpacity>
                                        <View>
                                            <View style={{backgroundColor: 'black', width: 12, height: 2, marginTop: 12, position:'relative'}}></View>
                                            <View style={{backgroundColor: 'black', width: 2, height: 12, position:'absolute',marginTop:6.5, marginLeft: 5 }}></View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View >
                    </View>
                    <TouchableOpacity style={{position:'absolute', marginLeft: 270, marginTop: 15}}>
                        <Image
                            source={require('../assets/close.png')}
                            style={{
                                marginLeft: 60,
                                width: 10,
                                height: 10
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {/* Price */}
            <View style={{flex: 20,marginLeft: 15,marginRight: 15,marginTop: 10}}>
                <View style={{backgroundColor: '#D9D9D9', width: '100%', height: 1,marginBottom: 10}}></View>
                <View style={{flexDirection: 'row',justifyContent: 'space-between',marginLeft: 10, marginRight: 10}}>
                    <Text style={{color: '#000000',fontSize: 15,}}>Subtotal (2 items):</Text>
                    <Text style={{color: '#000000',fontSize: 15,}}>$300</Text>
                </View>

                <View style={{flexDirection: 'row',justifyContent: 'space-between',marginLeft: 10, marginRight: 10}}>
                    <Text style={{color: '#000000',fontSize: 15,}}>Shipping: 2.8km</Text>
                    <Text style={{color: '#000000',fontSize: 15,}}>$1.2</Text>
                </View>
                <View style={{backgroundColor: '#D9D9D9', width: '100%', height: 1,marginBottom: 10, marginTop: 10}}></View>
                <View style={{flexDirection: 'row',justifyContent: 'space-between',marginBottom: 10 ,marginLeft: 10, marginRight: 10}}>
                    <Text style={{fontSize: 15,color: '#A45D51',}}>Total:</Text>
                    <Text style={{color: '#000000',fontSize: 15,}}>$301.2</Text>
                </View>
            </View>
            {/* PaymentMethod */}
            <View  style={{flex: 20,marginLeft: 15,marginRight: 15,marginTop: 10}}>
                <Text style={{color: '#000000',fontSize: 15,paddingBottom: 5}}>PAYMENT METHOD</Text>
                <TouchableOpacity style={{height: 45,borderRadius: 7,flexDirection: 'row',alignItems: 'center',backgroundColor: 'white', marginTop: 17}}
                    onPress={() => {
                    navigation.navigate('PaymentMethods')
                    }}
                >
                    {data === 'Cash' && ( 
                        <><Image
                            source={require('../assets/dollar.png')}
                            style={{
                                width: 35,
                                height: 35,
                                marginLeft: 10,
                                marginRight: 25
                            }} /><Text style={{
                                fontSize: 15,
                                color: 'black',
                            }}>Cash</Text>
                            <Image
                        source={require('../assets/right-arrow.png')}
                        style={{
                            marginLeft: 230,
                            width: 15,
                            height: 15
                        }}
                    />
                            </>
                    )}
                    {data === 'PayPal' && (
                        <><Image
                            source={require('../assets/paypal-logo1.png')}
                            style={{
                                width: 35,
                                height: 35,
                                marginLeft: 10,
                                marginRight: 25,
                            }} /><Text style={{
                                fontSize: 15,
                                color: 'black',
                            }}>Paypal</Text>
                            <Image
                        source={require('../assets/right-arrow.png')}
                        style={{
                            marginLeft: 220,
                            width: 15,
                            height: 15
                        }}
                    />
                            </>
                    )}
                    {data === 'MasterCard' && (
                        <><Image
                            source={require('../assets/mastercard-logo1.png')}
                            style={{
                                width: 35,
                                height: 35,
                                marginLeft: 10,
                                marginRight: 25
                            }} /><Text style={{
                                fontSize: 15,
                                color: 'black',
                            }}>Master Card</Text>
                            <Image
                        source={require('../assets/right-arrow.png')}
                        style={{
                            marginLeft: 180,
                            width: 15,
                            height: 15
                        }}
                    />
                            </>
                    )}
                    {data === 'VisaCard' && (
                        <><Image
                            source={require('../assets/visa-logo-preview1.png')}
                            style={{
                                width: 35,
                                height: 35,
                                marginLeft: 10,
                                marginRight: 25
                            }} /><Text style={{
                                fontSize: 15,
                                color: 'black',
                            }}>Visa Card</Text>
                            <Image
                        source={require('../assets/right-arrow.png')}
                        style={{
                            marginLeft: 200,
                            width: 15,
                            height: 15
                        }}
                    />
                    </>
                    )}
                </TouchableOpacity>
            </View>
            <View style={{flex: 20,marginLeft: 15,marginRight: 15,marginTop: 10, marginBottom:40}}>
                <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate('PaymentSuccessful')
                    }}
                    style={{
                        marginTop: 15,
                        borderColor: '#A45D51',
                        borderWidth: 1,
                        height: 40,
                        borderRadius: 7,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{
                        fontSize: 15,
                        color: '#A45D51'
                    }}>Order</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      
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