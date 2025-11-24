import "@/global.css";
import * as React from "react";
import { Pressable, Text } from "react-native";
import Icon from './Icons';
    export default function Pre({ Icono, Texto, onPress }){
    return(
            <Pressable onPress={onPress} className="active:opacity-50 active:bg-slate-200">
                <Text>Me siento mal..</Text>
                <Icon tipo="Plus" size={20}/>
            </Pressable>
    )

}