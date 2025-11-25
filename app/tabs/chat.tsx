import "@/global.css";
// @ts-ignore
import Logo from "@/src/assets/logo.svg";
import Header from '@/src/modules/core/components/Header';
import MensajesList from "@/src/modules/core/components/Mensaje";
import Nav from '@/src/modules/core/components/Nav';
import Pre from '@/src/modules/core/components/Pre';
import Question from "@/src/modules/core/components/Question";
import { useChatStore } from "@/src/store/chatStore";
import { Keyboard } from "react-native";



import * as React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const frases = [
    "Me siento mal...",
    "Me duele la cabeza",
    "Quiero vomitar...",
    "Tengo mucho estrés"
];

type Mensaje = {
    Texto: string;
    tipo: "enviado" | "recibido";
};


export default function HomeScreen() {
    const [tecladoAbierto, setTecladoAbierto] = React.useState(false);

React.useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () => {
        setTecladoAbierto(true);
    });

    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
        setTecladoAbierto(false);
    });

    return () => {
        showSub.remove();
        hideSub.remove();
    };
}, []);



    const [inputEnFoco, setInputEnFoco] = React.useState(false);


    // Estado de los mensajes
    const mensajes = useChatStore(state => state.mensajes);
    const addMensaje = useChatStore(state => state.addMensaje);


    // Input del usuario
    const [input, setInput] = React.useState("");
    // Frases random
    const frasesRandom = React.useMemo(() => {
        return [...frases].sort(() => Math.random() - 0.5);
    }, []);
    // Enviar mensaje
    const enviarMensaje = () => {
        if (!input.trim()) return;
    
        addMensaje({
            Texto: input,
            tipo: "enviado",
        });
    
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
                                    <Pre 
                                    key={index} 
                                    frase={frase} 
                                    onPress={() => {
                                        { /* @ts-ignore */}
                                        addMensaje({
                                            Texto: frase,   
                                            tipo: "enviado"
                                        });
                                    }}
                                    />
                                    ))}
                                </ScrollView>
                            </View>
                        )}
                        {/* INPUT + NAV (SIEMPRE ABAJO) */}
                        <View>
                            <View className="px-4 mb-2">
                                <Question
                                    value={input}
                                    onChangeText={setInput}
                                    onSend={enviarMensaje}
                                    onFocus={() => setInputEnFoco(true)}
                                    onBlur={() => setInputEnFoco(false)}
                                />
                                {inputEnFoco  && !tecladoAbierto && (
                                    <View className="h-12 bg-transparent"></View>
                                )}
                                {!inputEnFoco  && !tecladoAbierto && (
                                    <View className="h-24 bg-transparent"></View>
                                )}
                            </View>
                            
                        </View>
                    </View>
                </KeyboardAvoidingView>
                <View className="absolute bottom-4 w-full">
                <Nav screenActual="chat" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
