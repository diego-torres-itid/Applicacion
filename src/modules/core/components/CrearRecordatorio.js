import "@/global.css";
import * as React from "react";
import { Text, View } from "react-native";
import Icon from './Icons';

    export default function CrearRecordatorio({ Icono, Texto  }){
    return(
            <View className="p-5 bg-Blanco items-center gap-4">
                <Icon tipo={Icono} size={45}/>
                <Text className="font-vs-light text-[16px">{Texto}</Text>
            </View>
    )
}