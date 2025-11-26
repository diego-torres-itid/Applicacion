import "@/global.css";
import Perfil from '@/src/modules/core/components/DatosPerfil';
import Header from '@/src/modules/core/components/Header';
import Nav from '@/src/modules/core/components/Nav';
import SeccionPrefil from '@/src/modules/core/components/SeccionPrefil';
import { useUserStore } from "@/src/store/userStore";
import { router } from "expo-router";
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {

    const Nada = () => {
        
    };
    
    const clearUser = useUserStore(state => state.clearUser);

    const logout = async () => {
        await clearUser();  
        router.replace("/");  
    };
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-Blanco">
            <Header  tipo="Perfil"/>
            <ScrollView
                className="flex-1 bg-Fondo"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 30 }}
                >
                <View className="flex-1 bg-Fondo">
                    
                    <View className="px-10 py-5">
                        <Perfil mostrarDetalles={true}/>
                    </View>
                    <View className="gap-5">
                    <View className="mx-10 rounded-3xl bg-Blanco overflow-hidden">
                        <Text className="font-vs-semibold text-[20px] pb-5 px-10 pt-10">General</Text>
                        <SeccionPrefil Icono="EditUser" Texto="Mostrar codigo QR" onPress={Nada}/>
                        <SeccionPrefil Icono="Notification" Texto="Notificaciones" onPress={Nada}/>
                        <SeccionPrefil Icono="Notification" Texto="Modificar codigo QR" onPress={Nada}/>
                        <SeccionPrefil Icono="Config" Texto="Cerrar sesion" onPress={logout}/>
                    </View>
                    <View className="mx-10 rounded-3xl bg-Blanco overflow-hidden">
                        <Text className="font-vs-semibold text-[20px] pb-5 px-10 pt-10">Soporte</Text>
                        <SeccionPrefil Icono="Question" Texto="Ayuda" onPress={Nada}/>
                        <SeccionPrefil Icono="Like" Texto="Calificar aplicaion" onPress={Nada}/>
                        <SeccionPrefil Icono="Info" Texto="Terminos y condiciones" onPress={Nada}/>
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