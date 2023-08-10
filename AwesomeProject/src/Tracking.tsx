import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import ToppingButton from "./components/ToppingButton";
import { NavigationProps, ProfileProps, ToppingProps } from "./interface/Props";
import { api, app } from "./interface/urrl";

function Tracking({ navigation , route}: NavigationProps): JSX.Element{

    const [PaymentData, setPaymentData] = useState<ProfileProps>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);


    const objectId  = route.params.objectId;
    const PayMentMethod = route.params.additionalValue;

    useEffect(() => {
        setIsLoading(true);
        fetchPayment();
    }, []);

    const fetchPayment = async () => {
        try {
            const relation = "?loadRelations=Order.Cheese%2COrder.Pizza%2COrder.Size%2COrder.Thickness%2COrder"
            const url = `https://api.backendless.com/${app}/${api}/data/Users/${objectId}${relation}`;
            const response = await fetch(url);
            const json = await response.json();
            setPaymentData(json);
            setIsLoading(false);
 
        }
        catch (error) {
            // Alert.alert('error');
            // setLoading(false);
        }
        finally {
            // setLoading(false);
        }
    }
    if (isLoading) {
        return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'} color="#5500dc"></ActivityIndicator>
          </View>
        );
      }
      if (error) {
        return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> Lỗi Tải Dữ Liệu, Hãy Kiểm Tra Lại Đuờng Truyền</Text>
          </View>
        );
      }

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
                            navigation.navigate('Home', {objectId, additionalValue: PayMentMethod})
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
                        }}>TRACKING YOUR ORDER</Text>
                    </View>
                </View>
            </View>
    
            <View style={{
                marginTop: 30,
                marginLeft: 15,
                marginRight: 15,
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                    <View style={{
                        backgroundColor: '#F6F6F6',
                        borderWidth: 5,
                        borderColor: '#A45D51',
                        height: 40,
                        borderRadius: 20,
                        marginBottom: 15,
                        width: 40,
                    }}>
                    </View>
    
                    <View style={{
                        backgroundColor: '#A45D51',
                        borderColor: '#A45D51',
                        height: 40,
                        borderRadius: 20,
                        marginBottom: 15,
                        width: 40,
                    }}>
                    </View>
                    <View style={{
                        backgroundColor: '#A45D51',
                        borderColor: '#A45D51',
                        height: 40,
                        borderRadius: 20,
                        marginBottom: 15,
                        width: 40,
                    }}>
                    </View>
                    <View style={{
                        backgroundColor: '#A45D51',
                        borderColor: '#A45D51',
                        height: 40,
                        borderRadius: 20,
                        marginBottom: 15,
                        width: 40,
                    }}>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                }}>
                    <Text style={{ right: 8, color: 'black' }}>Checking</Text>
                    <Text style={{color: 'black'}}>Cooking</Text>
                    <Text style={{ left: 10, color: 'black'}}>Delivering</Text>
                    <Text style={{ left: 12, color: 'black'}}>Delivered</Text>
                </View>
    
    
    
    
            </View>
            {/* <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 35,
                marginLeft: 25,
                marginRight: 15,
                width: '80%'
            }}>
                <Text style={{
                    color: 'red',
                    fontSize: 15,
                }}
                >Vegan</Text>
    
                <Text style={{
                    color: '#ADADAD',
                    fontSize: 15,
                }}
                >x1</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                marginLeft: 25,
                marginRight: 15,
                width: '80%'
            }}>
                <Text style={{
                    color: '#000000',
                    fontSize: 15,
                }}
                >Vegatarian</Text>
    
                <Text style={{
                    color: '#ADADAD',
                    fontSize: 15,
                }}
                >x1</Text>
            </View> */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 35,
                marginLeft: 25,
                marginRight: 15,
                width: '80%'
            }}>
                <Text style={{
                    color: '#000000',
                    fontSize: 15,
                }}
                >Name:</Text>
    
                <Text style={{
                    color: 'black',
                    fontSize: 15,
                }}
                >{PaymentData?.FullName}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 35,
                marginLeft: 25,
                marginRight: 15,
                width: '80%'
            }}>
                <Text style={{
                    color: '#000000',
                    fontSize: 15,
                }}
                >Phone Number:</Text>
    
                <Text style={{
                    color: 'black',
                    fontSize: 15,
                }}
                >{PaymentData?.PhoneNumber}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 35,
                marginLeft: 25,
                marginRight: 15,
                width: '80%'
            }}>
                <Text style={{
                    color: '#000000',
                    fontSize: 15,
                }}
                >Address:</Text>
    
                <Text style={{
                    color: 'black',
                    fontSize: 15,
                }}
                >{PaymentData?.Address}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 35,
                marginLeft: 25,
                marginRight: 15,
                width: '80%'
            }}>
                <Text style={{
                    color: '#000000',
                    fontSize: 15,
                }}
                >Price:</Text>
    
                <Text style={{
                    color: 'black',
                    fontSize: 15,
                }}
                >{PaymentData?.TotalPriceOrder}$ ({PaymentData?.PaymentMethod})</Text>
            </View>
        </View>
    )
}
export default Tracking