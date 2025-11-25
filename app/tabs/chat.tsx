import "@/global.css";
// @ts-ignore
import Logo from "@/src/assets/logo.svg";
import Header from '@/src/modules/core/components/Header';
import MensajesList from "@/src/modules/core/components/Mensaje";
import Nav from '@/src/modules/core/components/Nav';
import Pre from '@/src/modules/core/components/Pre';
import Question from "@/src/modules/core/components/Question";
import { useChatStore } from "@/src/store/chatStore";
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
    const [inputEnFoco, setInputEnFoco] = React.useState(false);

    const mensajes = useChatStore(state => state.mensajes);
    const addMensaje = useChatStore(state => state.addMensaje);

    const [input, setInput] = React.useState("");





    // Enviar mensaje
    const enviarMensaje = async () => {
        if (!input.trim()) return;
        const textoEnviado = input;
        const fechaActual = new Date().toISOString().replace("T", " ").slice(0, 19); 
        addMensaje({
            Texto: textoEnviado,
            tipo: "enviado",
        });
    
        setInput("");

    try {
        const response = await fetch("https://taina-preneural-stereochromatically.ngrok-free.dev/usuario/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                id_persona: "1",
                pregunta_usuario: textoEnviado,
                fecha_y_hora: fechaActual
            }),
        });

        const data = await response.json();


        addMensaje({ Texto: data.respuesta, tipo: "recibido" });
            } catch (error) {
                console.error("Error enviando mensaje:", error);
                addMensaje({ Texto: "Error: no se pudo enviar el mensaje", tipo: "recibido" });
            }
        };












    // Frases random
    const frasesRandom = React.useMemo(() => {
        return [...frases].sort(() => Math.random() - 0.5);
    }, []);



    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-Blanco">
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
                    >
                    <View className="flex-1 bg-Fondo">
                        <Header tipo="Chat" />
                        {/* CONTENIDO SCROLLABLE: mensajes o frases random */}
                        <ScrollView
                            className="flex-1"
                            contentContainerStyle={{
                                paddingHorizontal: 0,
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
                                        enviarMensaje({
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
                        <View className="bg-GrisClarisimo">
                            <View className="px-4 pb-3 pt-3">
                                <Question
                                    value={input}
                                    onChangeText={setInput}
                                    onSend={enviarMensaje}
                                    onFocus={() => setInputEnFoco(true)}
                                    onBlur={() => setInputEnFoco(false)}
                                />
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
                {Platform.OS === "ios" ? (
                    <View className="relative">
                        <Nav screenActual="chat" />
                    </View>
                ) : (
                    <View className="relative" style={{ paddingBottom: inputEnFoco ? 0 : 16 }}>
                        <Nav screenActual="chat" />
                    </View>
                )}
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
