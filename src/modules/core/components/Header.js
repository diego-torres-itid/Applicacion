import "@/global.css";
import * as React from "react";
import { Text, View } from "react-native";
import Icon from './Icons';
export default function Header(){

    return(
        <View className="flex-row items-center py-5 px-10 justify-between bg-Blanco">
            <View className="flex-row items-center gap-3">
                <Icon tipo="UserGray" />
                <Text className="font-vs-semiboldtext text-xl text-PrimarioOscuro">Bienvenido (Nombre)</Text>
            </View>
            <View className="flex-row gap-2">
                <Icon tipo="Notification" size={25}/>
                <Icon tipo="Config" size={25}/>
            </View>
        </View>
    )

}