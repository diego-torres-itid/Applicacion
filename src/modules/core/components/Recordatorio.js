import "@/global.css";
import * as React from "react";
import { Text, View } from "react-native";
import Icon from './Icons';

    export default function Recordatorio({ Icono, Titulo, Texto, Fecha, Restante  }){
    return(
            <View className="flex-row justify-between p-2 bg-Blanco rounded-full items-center px-5">
                <View className="gap-5 flex-row items-center">
                    <View className="p-2 bg-GrisClarisimo rounded-full">
                        <Icon tipo={Icono} size={35}/>
                    </View>
                    <View className="">
                        <Text className="font-vs-regular text-[18px]">{Titulo}</Text>
                        <Text className="font-vs-regular text-[14px] text-PrimarioOscuro">{Texto}</Text>
                        <View className="flex-row gap-2">
                            <Text className="font-vs-regular text-[14px]">{Fecha}</Text>
                            <Text className="font-vs-regular text-[14px] text-red-700">{Restante}</Text>
                        </View>
                    </View>
                </View>
                <Icon tipo="TreePoint" size={35}/>
            </View>
    )
}