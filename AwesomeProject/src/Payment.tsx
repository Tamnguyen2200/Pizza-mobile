import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, Image, Keyboard, ScrollView, TextInput, TouchableOpacityComponent } from "react-native";
import { TouchableOpacity, Alert } from "react-native";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { Button, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductInPayment from "./components/ProductInPayment";
import { ChesseProps, NavigationProps, OrderProps, PizzaProps, ProductInPaymentProps, ProfileProps, SizeProps, ThicknessProps } from "./interface/Props";
import { app, api } from "./interface/urrl";

function Payment({ navigation, route }: NavigationProps): JSX.Element {
    const [PaymentData, setPaymentData] = useState<ProfileProps>();
    const [updatedOrders, setUpdatedOrders] = useState<OrderProps[]>([]);
    const [totalOrderPrice, setTotalOrderPrice] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    const handleSelectRemoveProduct = (id: string) => {
        fetchRemoveProductInOrder(id)
    }

    const fetchRemoveProductInOrder = async(id: string) => {
        fetch(`https://api.backendless.com/${app}/${api}/data/Users/${objectId}/Order`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([
            id
          ]),
        }).then(response => response.json())
        .then(data =>{
          if(data == 1){
            Alert.alert('Delete Order', '?', [
                {
                  text: 'Hủy',
                  style: 'cancel',
                },
                {
                  text: 'Ok',
                  style: 'destructive',
                  onPress: () => {
                    fetchPayment()
                  },
                },
              ]);
            
          } else{
            Alert.alert('Error', "Can't remove product");
          }
        })
    }
    const objectId  = route.params.objectId;
    const PayMentMethod = route.params.additionalValue;

    const fetchPayment = async () => {
        try {
            const relation = "?loadRelations=Order.Cheese%2COrder.Pizza%2COrder.Size%2COrder.Thickness%2COrder"
            const url = `https://api.backendless.com/${app}/${api}/data/Users/${objectId}${relation}`;
            const response = await fetch(url);
            const json = await response.json();
            setPaymentData(json);
            
        }
        catch (error) {
            // Alert.alert('error');
            // setLoading(false);
        }
        finally {
            // setLoading(false);
        }
    }
    useEffect(() => {
        setIsLoading(true);
        fetchPayment();
    }, []);

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

    //tính từng order
    const calculateTotalPrice = (order: any) => {
        let totalPrice = 0;
      
        if (order.Thickness) {
          totalPrice += order.Thickness.PriceThickness || 0;
        }
        if (order.Pizza) {
          totalPrice += order.Pizza.Total * (order.Pizza.TypeData === 'Best Seller' ? 15 : 10); // Giá tạm thời, bạn cần thay đổi logic tính giá thực tế
        }
        if (order.Size) {
          totalPrice += order.Size.PriceSize || 0;
        }
        if (order.Cheese) {
          totalPrice += order.Cheese.PriceCheese || 0;
        }
      
        return totalPrice;
    };
    
    useEffect(() => {
        if (PaymentData?.Order) {
          const updatedOrdersInitial = PaymentData.Order.map((order) => {
            const totalPrice = calculateTotalPrice(order);
            return {
              ...order,
              TotalPrice: totalPrice,
            };
          });
          setUpdatedOrders(updatedOrdersInitial);
        }
      }, [PaymentData]);

    const handleCalculatedPriceChange = (itemId: string, newTotal: number) => {
        // Create a copy of the updatedOrders array
        const updatedOrdersCopy = [...updatedOrders];

        // Find the index of the item in the updatedOrders array
        const itemIndex = updatedOrdersCopy.findIndex((item) => item.objectId === itemId);

        if (itemIndex !== -1) {
            // Update the total price of the item in the copied array
            updatedOrdersCopy[itemIndex].TotalPrice = newTotal;

            // Recalculate the total order price
            const totalPriceSum = updatedOrdersCopy.reduce((sum, order) => sum + order.TotalPrice, 0);
            // Update the state with the new total order price
            setTotalOrderPrice(totalPriceSum);

            // Update the state with the modified updatedOrders array
            setUpdatedOrders(updatedOrdersCopy);
        }
    };

    return (
        <ScrollView style={{ backgroundColor: '#F5F5F5', flex: 100 }}>
            {/* Button Back */}
            <View style={{ flex: 10, marginLeft: 15, width: 225, paddingTop: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View>
                        <TouchableOpacity onPress={() => { navigation.navigate('Home', {objectId, additionalValue: 'Cash'}) }}>
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
                        <Text style={{ color: '#000000', fontSize: 20, fontWeight: '700', }}>Payment</Text>
                    </View>
                </View>
            </View>
            {/* Form */}
            
            <View style={{ flex: 20, marginLeft: 15, marginRight: 15, marginTop: 25 }}>
                <Text style={{ color: '#000000', fontSize: 15, paddingBottom: 5, fontWeight: '700' }}>FILL YOUR INFORMATION</Text>
                <View style={{ backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#CFCCCC', borderRadius: 7, marginBottom: 10 }}>
                    <TextInput
                        style={{ color: 'black', height: 40 }}
                        placeholder='Name'
                        value={PaymentData?.FullName}
                    />
                </View>
                <View style={{ backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#CFCCCC', borderRadius: 7, marginBottom: 10 }}>
                    <TextInput style={{ color: 'black', height: 40 }}
                        placeholder='Phone number'
                        value={String(PaymentData?.PhoneNumber)}
                    />
                </View>
                <View style={{ backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#CFCCCC', borderRadius: 7 }}>
                    <TextInput style={{ color: 'black', height: 40 }}
                        placeholder='Address'
                        value={PaymentData?.Address}
                    />
                </View>
            </View>
            {/* Order */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginLeft: 16, marginRight: 16 }}>
                <Text style={{ color: '#000000', fontSize: 15, marginBottom: 10, fontWeight: '600' }}>ORDER PROCESSING</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                    <Text style={{ color: 'black', fontSize: 15, }}>More dishes</Text>
                </TouchableOpacity>
            </View>
            {/* Product */}
            <View style={{ flex: 100, marginTop: 15, marginLeft: 16, marginRight: 16 }}>
             {updatedOrders?.map((item) => ( 
                <View key={item.objectId}>
                <ProductInPayment 
                    Pizza={item.Pizza}
                    Size={item.Size}
                    id={item.objectId}
                    Thickness={item.Thickness}
                    Cheese={item.Cheese}
                    TotalPrice={item.TotalPrice}
                    onSelectRemoveProduct={handleSelectRemoveProduct}
                    onCalculatedPriceChange={handleCalculatedPriceChange}
                    />
                </View>
                ))}
            </View>
            {/* Price */}
            <View style={{ flex: 20, marginLeft: 15, marginRight: 15, marginTop: 10 }}>
                <View style={{ backgroundColor: '#D9D9D9', width: '100%', height: 1, marginBottom: 10, marginTop: 10 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
                    <Text style={{ fontSize: 15, color: '#A45D51', }}>Total:</Text>
                    <Text style={{ color: '#000000', fontSize: 15, }}>${totalOrderPrice}</Text>
                </View>
            </View>
            {/* PaymentMethod */}
            <View style={{ flex: 20, marginLeft: 15, marginRight: 15, marginTop: 10 }}>
                <Text style={{ color: '#000000', fontSize: 15, paddingBottom: 5 }}>PAYMENT METHOD</Text>
                <TouchableOpacity style={{ height: 45, borderRadius: 7, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginTop: 17 }}
                    onPress={() => {
                        navigation.navigate('PaymentMethods')
                    }}
                >
                    {PayMentMethod === 'Cash' && (
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
                    {PayMentMethod === 'PayPal' && (
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
                    {PayMentMethod === 'MasterCard' && (
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
                    {PayMentMethod === 'VisaCard' && (
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
            <View style={{ flex: 20, marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 40 }}>
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
    sectionContainer: {
        flex: 100,
        backgroundColor: (`#F5F5F5`)
    },
    sectionButton: {
        fontWeight: 700,
        display: 'flex',
        flexDirection: 'row',
        flex: 5,
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
