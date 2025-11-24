import "@/global.css";
import * as React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from './Icons';

    export default function Pre({ frase, onPress  }){
    return(
            <Pressable className="active:opacity-50 active:bg-slate-200" onPress={onPress}>
                <View className="bg-Blanco rounded-full py-2 px-4 flex-row gap-2 items-center">
                    <Text className="font-vs-light text-[16px]">{frase}</Text>
                    <Icon tipo="Plus" size={20}/>
                </View>
            </Pressable>
    )
}