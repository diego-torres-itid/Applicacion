import "@/global.css";
import * as React from "react";
import { Pressable, Text, View } from "react-native";
    export default function ButtonHistorial({ Texto, selected, onPress }){
    return(
        <Pressable onPress={onPress}>
            <View className={
                `rounded-full py-2 px-8 
                ${selected 
                    ? "bg-Blanco border-Primario border-2" 
                    : "bg-Blanco border-Blanco border-2"}`
                }>
                <Text className={
                    `text-[20px] 
                    ${selected ? "text-PrimarioOscuro font-vs-medium" : "font-vs-regular"}`
                }>
                    {Texto}</Text>
            </View>
        </Pressable>
    )

}