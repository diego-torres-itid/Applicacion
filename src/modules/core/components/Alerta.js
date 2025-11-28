import "@/global.css";
import * as React from "react";
import { Image, Text, View } from "react-native";

const icons = {
    info: require("@/src/assets/icons/informacion.png"),
    error: require("@/src/assets/icons/error.png"),
    success: require("@/src/assets/icons/check.png"),
    warning: require("@/src/assets/icons/warning.png"),
};


    export default function Alerta({ Texto, Color, Icono = "info" }){
    return(
        <View className="items-center border-2 rounded-full p-3 bg-Blanco flex-row gap-5 px-10" style={{ borderColor: Color}}>
            <Image source={icons[Icono]} className="h-5 w-5"></Image>
            <Text className="font-vs-bold text-[18px]">
                {Texto}
            </Text>
        </View>
    )
}