import "@/global.css";
import * as React from "react";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import Icon from "./Icons";

export default function Question({ value, onChangeText, onSend, onFocus, onBlur }) {
    const [focused, setFocused] = useState(false);

    const puedeEnviar = value.trim().length > 0;

    return (
        <View className="w-full bg-Blanco flex-row justify-between rounded-full p-4 pl-9 items-center">

            <View className="flex-row gap-5 items-center">
                <Icon tipo="Plus" size={30} />

                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={focused ? "" : "Pregúntale a Neurona"}
                    className="font-vs-light text-xl flex-1"
                    style={{ maxWidth: "75%" }} 
                    onFocus={() => {
                        setFocused(true);
                        onFocus && onFocus();   // <<< notifica al padre
                    }}
                    onBlur={() => {
                        setFocused(false);
                        onBlur && onBlur();     // <<< notifica al padre
                    }}
                    multiline={false}
                />
            </View>

            {/* BOTÓN ENVIAR */}
            <Pressable
                onPress={() => puedeEnviar && onSend()}
                disabled={!puedeEnviar}
                className="right-6"
            >
                {focused && puedeEnviar ? (
                    <Icon tipo="SendBlue" size={35} />
                ) : (
                    <Icon tipo="Send" size={35} />
                )}
            </Pressable>
        </View>
    );
}
