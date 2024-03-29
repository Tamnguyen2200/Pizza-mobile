import React, { useEffect, useState } from 'react';
import {
    Image,
    StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { OrderProps, ProductInPaymentProps } from '../interface/Props';

function ProductInPayment({ Pizza, Size, Thickness, id, Cheese, TotalPrice , onSelectRemoveProduct, onCalculatedPriceChange}: ProductInPaymentProps): JSX.Element {
    const [quantity, setQuantity] = useState(1);
    const [initialPrice, setInitialPrice] = useState(TotalPrice);

    //Hàm tăng số lượng
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    useEffect(() => {
        // Calculate total price based on quantity
        const calculatedTotal = initialPrice * quantity;
    
    
        // Notify parent component about the change
        if (onCalculatedPriceChange) {
          onCalculatedPriceChange(id, calculatedTotal);
        }
      }, [quantity, initialPrice]);

    // Hàm giảm số lượng
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    const handlePress = () => {
        if (onSelectRemoveProduct) {
            onSelectRemoveProduct(id);
        }
    };

    return (

        <View style={{ backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#CFCCCC', height: 150, marginBottom: 10, borderRadius: 15, }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', alignContent: 'center', paddingLeft: 15, paddingTop: 20, position: 'relative' }}>
                <Image
                    source={{ uri: Pizza.Image }}
                    style={{ width: 100, height: 100 }}
                />
                <View>
                    <Text style={{ color: '#000000', fontSize: 13, marginLeft: 20, fontWeight: '700' }}>{Pizza.PizzaName}</Text>
                    <Text style={{ color: '#000000', fontSize: 12, marginLeft: 20, paddingTop: 5, paddingBottom: 5 }}>{Size.SizeName}, {Thickness.ThicknessName},{Cheese.CheeseName}</Text>
                    <Text style={{ color: '#000000', fontSize: 13, marginLeft: 20, fontWeight: '700' }}>${TotalPrice}</Text>
                    <View style={{ marginTop: 15, width: 90, marginLeft: 20, backgroundColor: 'white', borderWidth: 1, borderColor: '#000000', height: 30, borderRadius: 15, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity onPress={decreaseQuantity} style={{ alignItems: 'center', display: 'flex', alignContent: 'center' }}>
                                <View style={{ backgroundColor: 'black', width: 12, height: 2, marginTop: 12, }}></View>
                            </TouchableOpacity>
                            <Text style={{ color: '#000000', fontSize: 13, marginTop: 4 }}>{quantity}</Text>
                            <TouchableOpacity onPress={increaseQuantity}>
<View>
                                    <View style={{ backgroundColor: 'black', width: 12, height: 2, marginTop: 12, position: 'relative' }}></View>
                                    <View style={{ backgroundColor: 'black', width: 2, height: 12, position: 'absolute', marginTop: 6.5, marginLeft: 5 }}></View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View >
            </View>
            <TouchableOpacity onPress={handlePress}
                style={{ position: 'absolute', marginLeft: 270, marginTop: 15 }}>
                <Image
                    source={require('../../assets/close.png')}
                    style={{
                        marginLeft: 60,
                        width: 10,
                        height: 10
                    }}
                />
            </TouchableOpacity>
        </View>

    )
}

export default ProductInPayment
