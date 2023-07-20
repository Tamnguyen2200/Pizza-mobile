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
        console.log(route)
    })

   
    return( 
        <View 
        style={{
            backgroundColor: '#F5F5F5',
            flex: 100
        }}>
            <View style={{
                flex: 10,
                marginLeft: 15,
                width: 225,
                paddingTop: 10
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View>
                        <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Home')
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
                        }}>Payment</Text>
                    </View>
                </View>
            </View>
    
    
            {/* view2 */}
            <View style={{
                flex: 20,
                marginLeft: 15,
                marginRight: 15,
            }}>
                <Text style={{
                    color: '#000000',
                    fontSize: 15,
                    paddingBottom: 5
                }}
                >FILL YOUR INFORMATION</Text>
    
                <View style={{
                    backgroundColor: '#FFFFFF',
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
                    backgroundColor: '#FFFFFF',
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
                    backgroundColor: '#FFFFFF',
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
            {keyboardIsShow == false && <View style={{
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
    
                    {/* <TouchableOpacity>
                    <Text style={{
                        color: 'black',
                        fontSize: 15,
                    }}
                    >More dishes</Text>
                    </TouchableOpacity> */}
                    
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
                        <View style={{
                            padding: 10,
                            flexDirection: 'row',
                        }}>
                            <Image
                                source={require('../assets/pizza1.png')}
                                style={{
                                    width: 70,
                                    height: 70
                                }}
                            />
                            <View>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 13,
                                    marginLeft: 20
                                }}
                                >Shrimp</Text>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 12,
                                    marginLeft: 20
                                }}
                                >Size S, Thin crust, Double cheese</Text>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 13,
                                    marginLeft: 20
                                }}
                                >150$</Text>
                                <View style={{
                                    marginTop: 5,
                                    width: 100,
                                    marginLeft: 20,
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: '#000000',
                                    height: 20,
                                    borderRadius: 10,
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around'
                                    }}>
                                        <TouchableOpacity>
                                            <Image
                                                source={require('../assets/minus-sign.png')}
                                                style={{
                                                    width: 20,
                                                    height: 17
                                                }}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{
                                            color: '#000000',
                                            fontSize: 13
                                        }}
                                        >1</Text>
                                        <TouchableOpacity>
                                            <Image
                                                source={require('../assets/plus.png')}
                                                style={{
                                                    margin: 1,
                                                    width: 16,
                                                    height: 16
                                                }}
                                            />
                                        </TouchableOpacity>
    
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/close.png')}
                                    style={{
                                        marginLeft: 80,
                                        width: 10,
                                        height: 10
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        borderWidth: 1,
                        borderColor: '#CFCCCC',
                        height: '45%',
                        borderRadius: 15
                    }}>
                        <View style={{
                            padding: 10,
                            flexDirection: 'row'
                        }}>
                            <Image
                                source={require('../assets/pizza1.png')}
                                style={{
                                    width: 70,
                                    height: 70
                                }}
                            />
                            <View>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 13,
                                    marginLeft: 20
                                }}
                                >Shrimp</Text>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 12,
                                    marginLeft: 20
                                }}
                                >Size S, Thin crust, Double cheese</Text>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 13,
                                    marginLeft: 20
                                }}
                                >150$</Text>
                                <View style={{
                                    marginTop: 5,
                                    width: 100,
                                    marginLeft: 20,
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: '#000000',
                                    height: 20,
                                    borderRadius: 10,
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around'
                                    }}>
                                        <TouchableOpacity>
                                            <Image
                                                source={require('../assets/minus-sign.png')}
                                                style={{
                                                    width: 20,
                                                    height: 17
                                                }}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{
                                            color: '#000000',
                                            fontSize: 13
                                        }}
                                        >1</Text>
                                        <TouchableOpacity>
                                            <Image
                                                source={require('../assets/plus.png')}
                                                style={{
                                                    marginTop: 1,
    
                                                    width: 16,
                                                    height: 16
                                                }}
                                            />
                                        </TouchableOpacity>
    
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image
                                    source={require('../assets/close.png')}
                                    style={{
                                        marginLeft: 80,
                                        width: 10,
                                        height: 10
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>}
    
    
            {/* View4 */}
            {keyboardIsShow == false && <View style={{
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
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 10
                }}>
                    <Text style={{
                        fontSize: 15,
                        color: '#A45D51',
                    }}
                    >Total:</Text>
    
                    <Text style={{
                        color: '#000000',
                        fontSize: 15,
                    }}
                    >$301.2</Text>
                </View>
    
                <Text style={{
                    color: '#000000',
                    fontSize: 15,
                    paddingBottom: 5
                }}
                >PAYMENT METHOD</Text>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('PaymentMethods')
                }}
                style={{
                    height: 35,
                    borderRadius: 7,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}>
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
                            marginLeft: 250,
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
                            marginLeft: 240,
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
                            marginLeft: 200,
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
                            marginLeft: 220,
                            width: 15,
                            height: 15
                        }}
                    />
                            </>
                    )}
                    
                </TouchableOpacity>
    
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
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 15,
                        color: '#A45D51'
                    }}>Order</Text>
                </TouchableOpacity>
    
            </View>}
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