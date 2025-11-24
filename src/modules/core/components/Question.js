import "@/global.css";
import * as React from "react";
import { useState } from "react";
import { Platform, Pressable, ScrollView, TextInput, View } from "react-native";
import Icon from "./Icons";

export default function Question({ value, onChangeText, onSend, onFocus, onBlur }) {
    const [focused, setFocused] = useState(false);
    const [inputHeight, setInputHeight] = useState(40);

    const MAX_LINES = 2.5;
    const FONT_SIZE = 18;
    const LINE_HEIGHT = 22;

    const puedeEnviar = value.trim().length > 0;

    const handleSend = () => {
        if (!puedeEnviar) return;
        onSend();
        onChangeText("");        // limpia el texto
        setInputHeight(40);      // resetea altura
    };

    return (
        <View
            className="w-full bg-Blanco flex-row items-center rounded-full px-4 py-2"
            style={{ minHeight: 50 }}
        >

            {/* ICONO PLUS — siempre centrado */}
            <View className="items-center justify-center mr-3">
                <Icon tipo="Plus" size={25} />
            </View>

            {/* INPUT CON SCROLL INTERNO */}
            <ScrollView
                style={{
                    maxHeight: MAX_LINES * LINE_HEIGHT,
                    flex: 1,
                }}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
            >
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={focused ? "" : "Pregúntale a Neurona"}
                    className="font-vs-light text-xl"
                    multiline={true}
                    onContentSizeChange={(e) => {
                        const newHeight = e.nativeEvent.contentSize.height;
                        const limited = Math.min(newHeight, MAX_LINES * LINE_HEIGHT);
                        setInputHeight(limited);
                    }}
                    style={{
                        height: inputHeight,
                        fontSize: FONT_SIZE,
                        lineHeight: LINE_HEIGHT,

                        // CENTRAR PLACEHOLDER Y TEXTO
                        textAlignVertical: Platform.OS === "android" ? "center" : "top",

                        // Ajuste fino para centrar visualmente en iOS
                        paddingTop:
                            Platform.OS === "ios"
                                ? Math.max(0, (inputHeight - LINE_HEIGHT) / 2)
                                : 0,
                        paddingBottom: 0,
                    }}
                    onFocus={() => {
                        setFocused(true);
                        onFocus && onFocus();
                    }}
                    onBlur={() => {
                        setFocused(false);
                        onBlur && onBlur();
                    }}
                />
            </ScrollView>

            {/* BOTÓN SEND — completamente centrado */}
            <Pressable
                onPress={handleSend}
                disabled={!puedeEnviar}
                className="items-center justify-center ml-3"
            >
                {focused && puedeEnviar ? (
                    <Icon tipo="SendBlue" size={25} />
                ) : (
                    <Icon tipo="Send" size={25} />
                )}
            </Pressable>

        </View>
    );
}
