import "@/global.css";
import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Pressable, Text, View } from "react-native";
import Icon from "./Icons";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Card({ Icono, IconoFocus, Titulo, Descripcion, isActive }) {
    const baseWidth = screenWidth * 0.5;
    const activeHeight = screenHeight * 0.25;
    const inactiveHeight = screenHeight * 0.25;

    const heightAnim = useRef(new Animated.Value(inactiveHeight)).current;

    useEffect(() => {
        Animated.timing(heightAnim, {
            toValue: isActive ? activeHeight : inactiveHeight,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [isActive]);

    return (
        <Animated.View
            style={{
                width: baseWidth,
                height: heightAnim,
            }}
            className={`mr-5 rounded-[50px] px-5 py-2 justify-start
                ${isActive ? "bg-GrisOscuro" : "bg-GrisClaro"}`}
        >

            <Icon tipo={isActive && IconoFocus ? IconoFocus : Icono} size={70} />

            <View className="gap-2 w-9/12">
                <Text className={`text-[20px] font-vs-semibold ${isActive ? "text-Blanco" : "text-black"}`}>
                    {Titulo}
                </Text>
                <Text className={`${isActive ? "text-Blanco" : "text-gray-600"} font-vs-lighttext`}>
                    {Descripcion}
                </Text>
            </View>

            {isActive && (
                <Pressable className="absolute bg-Blanco rounded-full items-center justify-center p-2 right-5 bottom-5">
                    <Icon tipo="NextGray" size={25} />
                </Pressable>
            )}
        </Animated.View>
    );
}
