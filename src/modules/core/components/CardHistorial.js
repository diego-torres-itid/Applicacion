import "@/global.css";
import * as React from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import Icon from './Icons';

    const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

    export default function CardHistorial({ Icono, Titulo, Texto, onPress }){

    
    return(
        <Pressable className="active:opacity-60" onPress={onPress} >
            <View className="p-5 rounded-3xl bg-Blanco gap-3 justify-center"
            style={{
                width: screenWidth * 0.4274,
                height: screenHeight *0.1502,
                }}
                >
                <View className="pl-2">
                    <Icon tipo={Icono} size={35}/>
                </View>
                <View>
                    <Text className="font-vs-medium text-[16px]">{Titulo}</Text>
                    <Text className="font-vs-light text-[12px]">{Texto}</Text>
                </View>
            </View>
        </Pressable>
    )

}