import "@/global.css";
import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Pressable, Text, View } from "react-native";
import Icon from "./Icons";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Card({ Icono, Titulo, Descripcion, isActive }) {
    const baseWidth = screenWidth * 0.5;
    const activeHeight = screenHeight * 0.27;
    const inactiveHeight = screenHeight * 0.22;

    // altura animada
    const heightAnim = useRef(new Animated.Value(inactiveHeight)).current;

    useEffect(() => {
        Animated.timing(heightAnim, {
            toValue: isActive ? activeHeight : inactiveHeight,
            duration: 300, // ← más lento = más suave
            useNativeDriver: false,
        }).start();
    }, [isActive]);

    return (
        <Animated.View
            style={{
                width: baseWidth,
                height: heightAnim, // ← altura animada
                }}
                className={`mr-5 rounded-[50px] px-5 py-7 justify-start 
                ${isActive ? "bg-GrisOscuro" : "bg-GrisClaro"}`}>
            <View className="bg-Blanco rounded-full p-2 w-12 h-12 justify-center items-center mb-4">
                <Icon tipo={Icono} size={30} />
            </View>
            <View className="gap-2">
                <Text className={`text-lg font-vs-semibold ${isActive ? "text-Blanco" : "text-black"}`}>
                    {Titulo}
                </Text>
                <Text className={`${isActive ? "text-Blanco" : "text-gray-600"} font-vs-lighttext`}>
                    {Descripcion}
                </Text>
            </View>
            {isActive && (
                <Pressable className="bg-Blanco rounded-full items-center justify-center p-2 mt-auto self-end">
                    <Icon tipo="NextGray" size={25} />
                </Pressable>
            )}
        </Animated.View>
    );
}
