import "@/global.css";
import CrearRecordatorio from '@/src/modules/core/components/CrearRecordatorio';
import Header from '@/src/modules/core/components/Header';
import Nav from '@/src/modules/core/components/Nav';
import Recordatorio from '@/src/modules/core/components/Recordatorio';
import { ScrollView, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-Blanco">
                <View className="flex-1 bg-Fondo">
                    <Header tipo="Default" />
                    <View className="flex-row bg-Blanco mx-5 mt-5 rounded-2xl items-center justify-between">
                        <CrearRecordatorio Icono="Plus" Texto="Recordatorio"/>
                        <CrearRecordatorio Icono="Pastilla" Texto="Consulta"/>
                        <CrearRecordatorio Icono="Pastilla" Texto="Medicacion"/>
                    </View>
                    <ScrollView className="px-5 mt-10">
                        <View className="gap-4">
                            <Recordatorio   
                            Icono="Medicina" 
                            Titulo="Paracetamol" 
                            Texto="Paracetamol" 
                            Fecha="14 Nov, 10:00am" 
                            Restante="(2 dias)"
                            />
                            <Recordatorio 
                            Icono="Estetoscopio" 
                            Titulo="Consulta Dermatologo" 
                            Texto="Dermatologo" 
                            Fecha="14 Nov, 10:00am" 
                            Restante="(2 dias)"
                            />
                            <Recordatorio 
                            Icono="Medicina" 
                            Titulo="Medicina" 
                            Texto="Paracetamol" 
                            Fecha="14 Nov, 10:00am" 
                            Restante="(2 dias)"
                            />
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