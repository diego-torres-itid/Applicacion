import "@/global.css";
import Alerta from "@/src/modules/core/components/Alerta";
import { obtenerFechaActual } from "@/src/modules/core/components/configuracion";
import Perfil from '@/src/modules/core/components/DatosPerfil';
import Header from '@/src/modules/core/components/Header';
import Nav from '@/src/modules/core/components/Nav';
import SeccionPrefil from '@/src/modules/core/components/SeccionPrefil';
import { useUserStore } from "@/src/store/userStore";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const [mostrarCardInfo, setMostrarCardInfo] = useState(false);

    const userId = useUserStore(state => state.userId);
    const peso = useUserStore(state => state.peso);
    const altura = useUserStore(state => state.altura);
    const setDatosBiometricos = useUserStore(state => state.setDatosBiometricos);
    const isHydrated = useUserStore(state => state.isHydrated);

    const Informacion = () => {
        setMostrarCardInfo(true);
        setTimeout(() => {
            setMostrarCardInfo(false);
        }, 5000);
    };

    const clearUser = useUserStore(state => state.clearUser);

    const logout = async () => {
        await clearUser();
        router.replace("/");
    };

    // 🔥 Pedir biométricos automáticamente solo si NO están en el store
    useEffect(() => {
        // ⏳ Esperar a que hydrate termine
        if (!isHydrated) {
            console.log("⏳ Esperando hidratación...");
            return;
        }
    
        const pedir = async () => {
            const fecha = obtenerFechaActual();
    
            console.log("Enviando solicitud biométricos:", {
                id_persona: userId,
                fecha,
                accion: "biometricos",
                subaccion: "get"
            });
    
            try {
                const response = await fetch(
                    "https://taina-preneural-stereochromatically.ngrok-free.dev/usuario/datos",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            id_persona: userId,
                            fecha,
                            accion: "biometricos",
                            subaccion: "get"
                        }),
                    }
                );
    
                const data = await response.json();
                console.log("Respuesta biométricos:", data);
    
                setDatosBiometricos(data.datos.peso, data.datos.altura);

            } catch (error) {
                console.log("Error obteniendo biométricos:", error);
            }
        };
    
        // Solo pedir si NO existen en la store
        if (peso == null || altura == null) {
            console.log("Biométricos vacíos → pidiendo a la API...");
            pedir();
        } else {
            console.log("✔️ Biométricos ya presentes en STORE:", { peso, altura });
        }
    
    }, [isHydrated, peso, altura, userId]);

    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-Blanco">

                <View className="absolute top-20 w-full items-center z-10">
                    {mostrarCardInfo && (
                        <Alerta Texto="En desarrollo" Color="#4784ab" />
                    )}
                </View>

                <Header tipo="Perfil"/>

                <ScrollView
                    className="flex-1 bg-Fondo"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 30 }}
                >
                    <View className="flex-1 bg-Fondo">

                        <View className="px-10 py-5">
                            {/* @ts-ignore */}
                            <Perfil mostrarDetalles={true} altura={altura} peso={peso}/>
                        </View>

                        <View className="gap-5">

                            <View className="mx-10 rounded-3xl bg-Blanco overflow-hidden">
                                <Text className="font-vs-semibold text-[20px] pb-5 px-10 pt-10">
                                    General
                                </Text>

                                <SeccionPrefil Icono="Qr" Texto="Mostrar codigo QR" onPress={Informacion}/>
                                <SeccionPrefil Icono="Notification" Texto="Notificaciones" onPress={Informacion}/>
                                <SeccionPrefil Icono="EditUser" Texto="Modificar codigo QR" onPress={Informacion}/>
                                <SeccionPrefil Icono="Config" Texto="Cerrar sesion" onPress={logout}/>
                            </View>

                            <View className="mx-10 rounded-3xl bg-Blanco overflow-hidden">
                                <Text className="font-vs-semibold text-[20px] pb-5 px-10 pt-10">
                                    Soporte
                                </Text>

                                <SeccionPrefil Icono="Question" Texto="Ayuda" onPress={Informacion}/>
                                <SeccionPrefil Icono="Like" Texto="Calificar aplicaion" onPress={Informacion}/>
                                <SeccionPrefil Icono="Info" Texto="Terminos y condiciones" onPress={Informacion}/>
                            </View>

                        </View>
                    </View>
                </ScrollView>

                <View className="justify-end">
                    <Nav screenActual="user" />
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    );
}
