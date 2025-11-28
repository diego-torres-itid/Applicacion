import "@/global.css";
import useLocation from "@/hooks/useLocation";
// @ts-ignore
import Logo from "@/src/assets/logo.svg";
import Header from '@/src/modules/core/components/Header';
import MensajesList from "@/src/modules/core/components/Mensaje";
import Nav from '@/src/modules/core/components/Nav';
import Pre from '@/src/modules/core/components/Pre';
import Question from "@/src/modules/core/components/Question";
import { useChatStore } from "@/src/store/chatStore";
import { useThemeStore } from "@/src/store/themeStore";
import { useUserStore } from "@/src/store/userStore";
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
    const { latitude, longitude, errorMsg, getUserLocation } = useLocation();

    const [inputEnFoco, setInputEnFoco] = React.useState(false);

    {/* Modo consulta */}
    const modoConsulta = useThemeStore(state => state.modoConsulta);
    const toggleModoConsulta = useThemeStore(state => state.toggleModoConsulta);
    
    const userId = useUserStore(state => state.userId);


    const mensajes = useChatStore(state => state.mensajes);
    const addMensaje = useChatStore(state => state.addMensaje);


    const [input, setInput] = React.useState("");

    const scrollViewRef = React.useRef<ScrollView>(null);

    React.useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [mensajes]);


    

    // Enviar mensaje
    const enviarMensaje = async (mensajeOpcional?: string) => {
        const textoEnviado = mensajeOpcional ?? input;
        if (!textoEnviado.trim()) return;
        await getUserLocation();
        const ahora = new Date();
        const fechaActual = `${ahora.getFullYear()}-${String(ahora.getMonth() + 1).padStart(2, '0')}-${String(ahora.getDate()).padStart(2,'0')} ` +
                            `${String(ahora.getHours()).padStart(2,'0')}:${String(ahora.getMinutes()).padStart(2,'0')}:${String(ahora.getSeconds()).padStart(2,'0')}`;

                            const modoActual = useThemeStore.getState().modoConsulta;

                            const pretipo = modoActual ? "consulta" : "normal";
                            console.log("🔥 PRETIPO FINAL DESDE STORE:", pretipo);

        addMensaje({
            Texto: textoEnviado,
            tipo: "enviado",
            fecha_hora: fechaActual,
        });
    
        setInput("");

    try {
        const response = await fetch("https://taina-preneural-stereochromatically.ngrok-free.dev/usuario/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                id_persona: userId, 
                pregunta_usuario: textoEnviado,
                fecha_y_hora: fechaActual,
                tipo: pretipo,
                latitud: latitude,   
                longitud: longitude,
            }),
        });

        const data = await response.json();
        console.log("API:", data);


        addMensaje({ Texto: data.respuesta.mensaje, tipo: "recibido", fecha_hora: data.respuesta.fecha_hora, });
            } catch (error) {
                console.error("Error enviando mensaje:", error);
                addMensaje({ Texto: "Error: no se pudo enviar el mensaje", tipo: "recibido", fecha_hora: new Date().toISOString().slice(0,16)});
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
                    <View className={`flex-1 ${modoConsulta ? "bg-Consulta" : "bg-Fondo"}`}>
                        <Header tipo="Chat" onPress={toggleModoConsulta}/>
                        {/* CONTENIDO SCROLLABLE: mensajes o frases random */}
                        <ScrollView
                            className="flex-1"
                            ref={scrollViewRef}
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
                                    onPress={() => enviarMensaje(frase)}
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
