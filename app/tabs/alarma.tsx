import "@/global.css";

import CrearRecordatorio from '@/src/modules/core/components/CrearRecordatorio';
import Header from '@/src/modules/core/components/Header';
import Icon from '@/src/modules/core/components/Icons';
import Nav from '@/src/modules/core/components/Nav';
import Recordatorio from '@/src/modules/core/components/Recordatorio';

import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { useRecordatorioStore } from "@/src/store/recordatorioStore";
import { useState } from 'react';

export default function HomeScreen() {
    const recordatorios = useRecordatorioStore(s => s.recordatorios);
    const deleteRecordatorio = useRecordatorioStore(s => s.deleteRecordatorio);

    // 🔥 Estado para controlar la edición
    const [recordatorioEditar, setRecordatorioEditar] = useState(null);
    {/* @ts-ignore */}
    const handleEdit = (index) => {
        // 🔥 Encontrar el tipo basado en el icono
        let tipo = "Recordatorio";
        const icono = recordatorios[index].Icono;
        
        if (icono === "Estetoscopio") tipo = "Consulta";
        if (icono === "Medicina") tipo = "Medicacion";
        
        // 🔥 Preparar datos para edición
        setRecordatorioEditar({
            ...recordatorios[index],
            index: index,
            tipo: tipo
        });
    };

    const handleCloseEdicion = () => {
        setRecordatorioEditar(null);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-Blanco">
                <View className="flex-1 bg-Fondo">
                    <Header tipo="Default" />
                    <View className="flex-1 bg-Primario">

                        <Text className="text-Blanco text-3xl font-vs-semibold py-10 text-center">Recordatorios</Text>
                    {/* Botones de crear */}
                    <View className="flex-row bg-Blanco mx-5 mb-8 overflow-hidden rounded-2xl items-center justify-between px-2">
                        {/* @ts-ignore */}
                        <CrearRecordatorio Texto="Recordatorio" />
                        {/* @ts-ignore */}
                        <CrearRecordatorio Texto="Consulta" />
                        {/* @ts-ignore */}
                        <CrearRecordatorio Texto="Medicacion" />
                    </View>
                    <View className="flex-1 bg-Fondo rounded-t-3xl">

                    <Pressable className="absolute bottom-10 right-10 bg-Blanco border-Primario border-2 rounded-full p-5">
                        <Icon tipo="Mas" size={30}/>
                    </Pressable>

                    {/*Modal de edición (si está activo) */}
                    {recordatorioEditar && (
                        
                        <CrearRecordatorio 
                            //@ts-ignore
                            Texto={recordatorioEditar.tipo}
                            recordatorioEditar={recordatorioEditar}
                            onClose={handleCloseEdicion}
                        />
                    )}

                    {/* LISTA DINÁMICA */}
                    <ScrollView className="px-5 mt-10">
                        <View className="gap-4">
                            {/* @ts-ignore */}
                            {recordatorios.map((r, index) => (
                                <Recordatorio
                                    key={index}
                                    Icono={r.Icono}
                                    Titulo={r.Titulo}
                                    Texto={r.Texto}
                                    Fecha={r.Fecha}
                                    Restante={r.Restante}
                                    onDelete={() => deleteRecordatorio(index)}
                                    onEdit={() => handleEdit(index)}
                                />
                            ))}
                        </View>
                    </ScrollView>
                    </View>
                </View>
                </View>
                <View className="justify-end">
                    <Nav screenActual="alarma" />
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    );
}