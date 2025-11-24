import "@/global.css";
import Perfil from '@/src/modules/core/components/DatosPerfil';
import Header from '@/src/modules/core/components/Header';
import Nav from '@/src/modules/core/components/Nav';
import SeccionPrefil from '@/src/modules/core/components/SeccionPrefil';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {

    const Nada = () => {
        
    };
    
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-Blanco">
                <View className="flex-1 bg-Fondo">
                    <Header  tipo="Perfil"/>
                    <View className="px-10 py-5">
                        <Perfil mostrarDetalles={true}/>
                    </View>
                    <View className="mx-10 rounded-3xl bg-Blanco p-10">
                        <Text className="font-vs-semibold text-[20px] pb-5">General</Text>

                        <SeccionPrefil Icono="EditUser" Texto="Editar perfil" onPress={Nada}/>
                        <SeccionPrefil Icono="Notification" Texto="Notificaciones" onPress={Nada}/>
                        <SeccionPrefil Icono="Config" Texto="Seccion" onPress={Nada}/>

                    </View>
                </View>
                
                <View className="justify-end">
                    <Nav screenActual="user" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}