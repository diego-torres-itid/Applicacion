import "@/global.css";
// @ts-ignore
import Logo from "@/src/assets/logo.svg";
import Header from '@/src/modules/core/components/Header';
import MensajesList from "@/src/modules/core/components/Mensaje";
import Nav from '@/src/modules/core/components/Nav';
import Pre from '@/src/modules/core/components/Pre';
import Question from "@/src/modules/core/components/Question";

import * as React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const frases = [
    "Me siento mal...",
    "Quiero más energía",
    "Comer más sano",
    "Tengo mucho estrés"
];

type Mensaje = {
    Texto: string;
    tipo: "enviado" | "recibido";
};


export default function HomeScreen() {
    // Estado de los mensajes
    const [mensajes, setMensajes] = React.useState([]);

    // Input del usuario
    const [input, setInput] = React.useState("");
    // Frases random
    const frasesRandom = React.useMemo(() => {
        return [...frases].sort(() => Math.random() - 0.5);
    }, []);
    // Enviar mensaje
    const enviarMensaje = () => {
    if (!input.trim()) return;
    // @ts-ignore
    setMensajes(prev => [
        ...prev,
        { Texto: input, tipo: "enviado" }
    ]);
    setInput("");
};
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-Blanco">
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
                    >
                    <View className="flex-1 bg-Fondo">
                        <Header tipo="Chat" />
                        {/* CONTENIDO SCROLLABLE: mensajes o frases random */}
                        <ScrollView
                            className="flex-1"
                            contentContainerStyle={{
                                paddingHorizontal: 20,
                                paddingTop: 20,
                                paddingBottom: 20,
                                ...(mensajes.length === 0 && {
                                flex: 1,
                                justifyContent: "center",
                            })
                            }}
                            showsVerticalScrollIndicator={false}
                        >
                            {/* NO HAY MENSAJES → LOGO + FRASES */}
                            {mensajes.length === 0 && (
                                    <View className="items-center mb-10">
                                        <Logo width={100} height={100} />
                                        <Text className="font-vs-bold text-[28px] text-Primario">Hola Name</Text>
                                        <Text className="font-vs-regular text-[24px]">Aquí estoy para ayudarte</Text>
                                        <Text className="font-vs-light text-[16px]">¿Cómo te sientes hoy?</Text>
                                    </View>
                            )}
                            {/* SÍ HAY MENSAJES → LISTA */}
                            {mensajes.length > 0 && (
                            <MensajesList mensajes={mensajes} />
                            )}
                        </ScrollView>
                        {mensajes.length === 0 && (
                            <View className="px-5 pb-5">
                                <ScrollView
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ gap: 16 }}
                                >
                                    {frasesRandom.slice(0, 4).map((frase, index) => (
                                    <Pre key={index} frase={frase} />
                                    ))}
                                </ScrollView>
                            </View>
                        )}
                        {/* INPUT + NAV (SIEMPRE ABAJO) */}
                        <View>
                            <View className="px-5 pb-2">
                                <Question
                                    value={input}
                                    onChangeText={setInput}
                                    onSend={enviarMensaje}
                                />
                            </View>
                            <Nav screenActual="chat" />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
