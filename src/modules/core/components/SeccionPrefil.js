import "@/global.css";
import * as React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from './Icons';
    export default function SeccionPrefil({ Icono, Texto, onPress }){
    return(
            <View>
                <Pressable onPress={onPress} className="bg-Blanco flex-row justify-between py-8 items-center">
                    <View className="flex-row gap-4 items-center">
                        <Icon tipo={Icono} size={20}/>
                        <Text className="font-vs-regular text-[16px]">{Texto}</Text>
                    </View>
                    <View>
                        <Icon tipo="NextGray" size={20}/>
                    </View>
                </Pressable>
            </View>
    )

}