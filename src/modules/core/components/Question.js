import "@/global.css";
import * as React from "react";
import { useState } from "react";
import { TextInput, View } from "react-native";
import Icon from './Icons';

    export default function Question(){

    const [focused, setFocused] = useState(false);

    return(
        <View className="w-full bg-Blanco flex-row justify-between rounded-full p-4 pl-9 items-center">
            <View className="flex-row gap-5 items-center">
                <Icon tipo="Plus" size={30} />
                <TextInput 
                placeholder={focused ? "" : "Preguntale a Neurona"} 
                className="font-vs-light text-xl flex-1"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                />
            </View>
            <View className="right-12">
                {focused ? (
                    <Icon tipo="SendBlue" size={35} />
                ) : (
                    <Icon tipo="Send" size={35} />
                )}
            </View>
        </View>
    )
}