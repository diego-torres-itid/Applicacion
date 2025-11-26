import "@/global.css";
import * as React from "react";
import { Text, View } from "react-native";
import Icon from "./Icons";
    export default function CardRegistro({ Titulo, Fecha }){
    return(
        <View className="flex-row justify-between border-2 border-GrisClaro rounded-xl p-3 mb-2">
            <View className="w-8/12">
                <Text className="font-vs-regular text-[16px]">{Titulo}</Text>
                <View className="flex-row gap-4">
                    <Text className="font-vs-regular text-[12px] text-PrimarioOscuro">Fecha</Text>
                    <Text className="font-vs-regular text-[12px] text-PrimarioOscuro">{Fecha}</Text>
                </View>
            </View>
            <View className="flex-row gap-10 items-center pr-5">
                <Icon tipo="Check" size={20}/>
                <Icon tipo="CloseGray" size={20} />
            </View>
        </View>
    )

}