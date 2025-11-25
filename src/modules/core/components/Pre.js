import "@/global.css";
import { useThemeStore } from "@/src/store/themeStore";
import * as React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from './Icons';

    export default function Pre({ frase, onPress  }){
    const modoConsulta = useThemeStore(state => state.modoConsulta);
    return(
            <Pressable className="flex-1"
            onPress={onPress}>
                <View className={`rounded-full py-2 px-4 flex-row gap-2 items-center ${modoConsulta ? "bg-Consulta border-Negro border-[1px]" : "bg-Blanco border-Blanco border-[1px]"}`}>
                    <Text className="font-vs-light text-[16px]">{frase}</Text>
                    <Icon tipo="Plus" size={20}/>
                </View>
            </Pressable>
    )
}