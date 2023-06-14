import React, { useEffect, useRef } from "react";
import type {PropsWithChildren} from 'react';
import { Animated, Image, TouchableOpacityComponent } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { Button, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";



function Begin(): JSX.Element{
    const rotateValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(rotateValue, {
              toValue: 1,
              duration: 1500, // Thời gian mỗi lần hoàn thành hiệu ứng
              useNativeDriver: true,
            }),
            Animated.timing(rotateValue, {
              toValue: 0,
              duration: 1500, // Thời gian mỗi lần hoàn thành hiệu ứng
              useNativeDriver: true,
            }),
          ])
        ).start();
      }, [rotateValue]);
   
      const interpolatedRotateAnimation = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['-20deg', '20deg'], // Điều chỉnh góc quay tại đây
      });
    return (
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Text style={styles.texttile}>GOOD PIZZA, </Text>
            <Text style={[styles.texttile, { marginLeft: 150, marginTop: 0 }]}>GREAT PIZZA</Text>
          </View>
    
          <View style={{ flex: 3 }}>
            <Animated.Image
              source={require('../assets/banner.png')}
              style={[styles.img, { transform: [{ rotate: interpolatedRotateAnimation }] }]}
            />
          </View>
    
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                borderWidth: 3,
                alignItems: 'center',
                borderColor: '#A45D51',
                borderRadius: 20,
                width: '70%',
                alignSelf: 'center',
              }}
            >
              <Text style={{ fontSize: 40 }}>Start Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      texttile: {
        fontSize: 30,
        fontWeight: '700',
        marginLeft: 70,
        marginTop: 20,
        color: '#A45D51'
      },
      img: {
        alignSelf: 'center',
        width: 290,
        height: 350,
      },
}) 

export default Begin;