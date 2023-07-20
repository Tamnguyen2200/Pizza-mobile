import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import ToppingButton from "./components/ToppingButton";
import { NavigationProps, ToppingProps } from "./interface/Props";
import { api, app } from "./interface/urrl";


function Topping({ navigation }: NavigationProps): JSX.Element{

    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [selectedPrices, setSelectedPrices] = useState<number[]>([]);
    const [isLoading, setLoading] = useState(true);

    const [data, setData] = useState<ToppingProps[]>([]);

    const handleSelectToppingButton = (img: string , price: number) => {
        const newSelectedImages = [...selectedImages];
        const newSelectedPrice = [...selectedPrices]
        const indexImage = newSelectedImages.indexOf(img);
        const indexPrice = newSelectedPrice.indexOf(price)

        if (indexImage === -1) {
            newSelectedImages.push(img);
        } else {
            newSelectedImages.splice(indexImage, 1);
        }
        
        if (indexPrice === -1) {
            newSelectedPrice.push(price);
        } else {
            newSelectedPrice.splice(indexPrice, 1);
        }
        
        setSelectedImages(newSelectedImages); 
        setSelectedPrices(newSelectedPrice)
    }
    const totalPrice = selectedPrices.reduce((total, price) => {
        const selectedTopping = data.find((item) => item.PriceTopping === price);
        return total + (selectedTopping ? selectedTopping.PriceTopping : 0);
    }, 0);
    useEffect(() => {
        setLoading(true);
        fetchListTopping();
    }, []);

    const fetchListTopping = async () =>{
        try{
            const url = `https://api.backendless.com/${app}/${api}/data/Topping`;
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        }
        catch (error){
            Alert.alert('error');
            setLoading(false);
        }
        finally {
            setLoading(false);
        }
    }
    const renderItem = ({ item }: { item: ToppingProps }) => (
        <ToppingButton Name={item.ToppingName} img={item.Image} price={item.PriceTopping} pizzaImg={item.ImagePizza} onSelectTopping={handleSelectToppingButton} isSelected={selectedImages.includes(item.Image)}/>
    );
    const NextPage = ()=>{
        console.log(totalPrice)
        navigation.navigate('Payment', {data: 'Cash'})
    }
    return( 
    <SafeAreaView style = {styles.sectionContainer}>
        <View style = {styles.sectionButton}>
            <TouchableOpacity style = {styles.sectionButton} onPress={() => navigation.navigate('Thickness')}>
                <Image source={require('../assets/arrowback.png')}/>
                <Text style = {styles.text}>Choose your topping</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.sectionImg}>
            <Image style ={ styles.pizzaImg } source={require('../assets/pizza.png')}/>
            {selectedImages.map((img) => (
                <Image key={img} source={{ uri: img }} style={styles.toppingImg} />
            ))}
        </View>
        <View style = {styles.sectionTopping}>
            <Text style = {styles.test}>Toppings</Text>
            <View style = {styles.topping}>
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.objectId}
                horizontal = {true}
                />
            </View>
        </View>
        <View style = {styles.sectionfoodButton}>
            <TouchableOpacity onPress={NextPage}>
                <Image source={require('../assets/arrownext.png')}/>
            </TouchableOpacity>
        </View>
        {isLoading && (
            <View style={styles.loadingIndicator} >
                    <ActivityIndicator size={'large'}/>
            </View>
        )}
    </SafeAreaView>
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
    sectionImg:{
        flex:40,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft:70
    },
    sectionTopping:{
        flex:35,
    },
    topping:{
        display: 'flex',
        flexDirection: "row"
    },
    item:{
        margin: 5
    },
    test:{
        fontSize: 14,
        fontWeight: "700",
        color: 'black',
        marginLeft: 25,
    },
    
    sectionfoodButton:{
        flex:5,
        flexDirection: "row-reverse",
        marginLeft: 30
    },
    pizzaImg:{
        position: 'relative',
    },
    toppingImg:{
        position: 'absolute',
        marginLeft: 65,
        width: 240,
        height: 240
    },
    loadingIndicator:{
        position: 'absolute',
        zIndex: 15,
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: 'rgba(164, 93, 81, 0.08)',
        justifyContent: 'center'
    }
}) 

export default Topping;