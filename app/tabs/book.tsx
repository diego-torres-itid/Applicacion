import "@/global.css";
import ButtonHistorial from '@/src/modules/core/components/ButtonHIstorial';
import CardHistorial from "@/src/modules/core/components/CardHistorial";
import Header from '@/src/modules/core/components/Header';
import Nav from '@/src/modules/core/components/Nav';
import React, { useState } from "react";
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
    const [selected, setSelected] = useState("all");
    const botones = ["all", "Malestar", "Entorno", "Otro"];
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-Blanco">
                <View className="bg-Fondo flex-1">
                    <Header tipo="Default" />
                    <View className="bg-Primario flex-1">
                        <View className="h-24 justify-center items-center">
                            <Text className="text-Blanco text-3xl font-vs-semibold">Explora tu historial médico</Text>
                        </View>
                        <View className=" bg-Fondo rounded-t-3xl flex-1">

                        <View className="p-5">
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ flexDirection: "row", gap: 12 }}>
                                    {botones.map((item) => (
                                    <ButtonHistorial
                                    key={item}
                                    Texto={item}
                                    selected={selected === item}
                                    onPress={() => setSelected(item)}
                                />
                                ))}
                            </ScrollView>
                        </View>

                            <ScrollView className="pt-5"
                                contentContainerStyle={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: 20,
                                paddingBottom: 40,
                            }}>
                                <CardHistorial Icono="Contacts" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="Comunidad" Titulo="Lazos" Texto="Antecedentes familiares"/>
                                <CardHistorial Icono="Jeringa" Titulo="Vacunuas" Texto="Vacunas recibidas"/>
                                <CardHistorial Icono="Icons8" Titulo="Habitos" Texto="Cosas que sueles ahcer"/>
                                <CardHistorial Icono="Alergias" Titulo="Sintomas" Texto="Esto es lo que sientes"/>
                                <CardHistorial Icono="RegistroMedico" Titulo="Intervenciones" Texto="Documents, ID c..."/>
                                <CardHistorial Icono="Pastilla" Titulo="Medicamentos" Texto="Altura y peso"/>
                                <CardHistorial Icono="Virus" Titulo="Enfermedades" Texto="Altura y peso"/>
                            </ScrollView>
                        </View>
                    </View>
                    
                </View>
                <View className="justify-end ">
                    <Nav screenActual="book" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}