import "@/global.css";
import Alerta from "@/src/modules/core/components/Alerta";
import ButtonHistorial from '@/src/modules/core/components/ButtonHIstorial';
import CardHistorial from "@/src/modules/core/components/CardHistorial";
import Header from '@/src/modules/core/components/Header';
import ModalBiometricc from "@/src/modules/core/components/ModalBiometrico";
import Nav from '@/src/modules/core/components/Nav';
import React, { useState } from "react";
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Todo");
    const botones = ["Todo", "Malestar", "Entorno", "Otro"];

    const [mostrarCardInfo, setMostrarCardInfo] = useState(false);

    const Informacion = () => {
        setMostrarCardInfo(true);

        setTimeout(() => {
            setMostrarCardInfo(false);
    }, 5000);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-Blanco">
            <Header tipo="Default" />
            <View className="absolute top-10 w-full items-center z-10">
                {mostrarCardInfo && (
                    <Alerta Texto="En desarrollo" Color="#4784ab" />
                )}
            </View>
            <View className="h-24 justify-center items-center bg-Primario">
                <Text className="text-Blanco text-3xl font-vs-semibold">Explora tu historial médico</Text>
            </View>
            <ScrollView
                className="flex-1 bg-Fondo"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 30 }}
                >
                <View className="bg-Fondo flex-1">
                    
                    <View className="flex-1">

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
                                <CardHistorial 
                                Icono="Contacts" 
                                Titulo="Biometricos" 
                                Texto="Altura y peso"
                                onPress={() => {
                                    console.log("Card presionado");
                                    setOpen(true);
                                }}
                                />
                                
                                
                                <CardHistorial Icono="Comunidad" Titulo="Lazos" Texto="Antecedentes familiares" onPress={Informacion} />
                                <CardHistorial Icono="Jeringa" Titulo="Vacunuas" Texto="Vacunas recibidas" onPress={Informacion}/>
                                <CardHistorial Icono="Icons8" Titulo="Habitos" Texto="Cosas que sueles ahcer" onPress={Informacion}/>
                                <CardHistorial Icono="Alergias" Titulo="Sintomas" Texto="Esto es lo que sientes" onPress={Informacion}/>
                                <CardHistorial Icono="RegistroMedico" Titulo="Intervenciones" Texto="Documents, ID c..." onPress={Informacion}/>
                                <CardHistorial Icono="Pastilla" Titulo="Medicamentos" Texto="Altura y peso" onPress={Informacion}/>
                                <CardHistorial Icono="Virus" Titulo="Enfermedades" Texto="Altura y peso"onPress={Informacion}/>
                            </ScrollView>
                        </View>
                    </View>
                    
                </View>

                </ScrollView>

                <ModalBiometricc 
                    visible={open} 
                    onClose={() => setOpen(false)} 
                />
                <View className="justify-end ">
                    <Nav screenActual="book" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}