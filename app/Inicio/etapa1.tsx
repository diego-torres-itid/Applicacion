import "@/global.css";
// @ts-ignore
import Logo from "@/src/assets/logo.svg";
import { router } from 'expo-router';
import * as React from "react";
import { useRef } from 'react';
import { Animated, PanResponder, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function Etapa1() {
    const pan = useRef(new Animated.Value(0)).current;
    const panResponder = useRef(
    PanResponder.create({
        onMoveShouldSetPanResponder: (_, gesture) => {
            return Math.abs(gesture.dy) > 10;
            },
        onPanResponderMove: (_, gesture) => {
            if (gesture.dy < 0) {
                pan.setValue(gesture.dy);
                }
            },
        onPanResponderRelease: (_, gesture) => {
            if (gesture.dy < -100) {
                router.replace('/Inicio/etapa2');
            } else {
                Animated.spring(pan, {
                    toValue: 0,
                    useNativeDriver: true,
                }).start();
            }
        },
    })
).current;
// asdas
return (
    <SafeAreaProvider>
        <SafeAreaView className="flex-1 items-center bg-Fondo">
            <View {...panResponder.panHandlers}>
                <Animated.View style={{ transform: [{ translateY: pan }] }} className="flex-1 justify-between">
                    <View className="top-16">
                        <Text className="font-vs-lighttext text-gray-600">Evoluciona con la tecnología</Text>
                    </View>
                    <View className="items-center">
                        <Logo width={150} height={150} />
                        <Text className="font-vs-lightdeck text-6xl mt-10">Ofiuco</Text>
                    </View>
                    <View className="bottom-16 items-center">
                        <Text className="text-2xl">↑</Text>
                        <Text className="font-vs-bold text-gray-600 mt-2">Desliza hacia arriba</Text>
                    </View>
                </Animated.View>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
);
}
