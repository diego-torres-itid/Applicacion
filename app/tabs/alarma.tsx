import "@/global.css";

import CrearRecordatorio from '@/src/modules/core/components/CrearRecordatorio';
import Header from '@/src/modules/core/components/Header';
import Nav from '@/src/modules/core/components/Nav';
import Recordatorio from '@/src/modules/core/components/Recordatorio';

import { ScrollView, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { useRecordatorioStore } from "@/src/store/recordatorioStore";

export default function HomeScreen() {

    const recordatorios = useRecordatorioStore(s => s.recordatorios);

    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-Blanco">
                <View className="flex-1 bg-Fondo">

                    <Header tipo="Default" />

                    {/* Botones de crear */}
                    <View className="flex-row bg-Blanco mx-5 mt-5 rounded-2xl items-center justify-between px-2">
                        <CrearRecordatorio Texto="Recordatorio" />
                        <CrearRecordatorio Texto="Consulta" />
                        <CrearRecordatorio Texto="Medicacion" />

                    </View>

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
                                />
                            ))}
                        </View>
                    </ScrollView>

                </View>

                <View className="justify-end">
                    <Nav screenActual="alarma" />
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    );
}
