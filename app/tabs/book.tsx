import "@/global.css";
import CardHistorial from "@/src/modules/core/components/CardHistorial";
import Header from '@/src/modules/core/components/Header';
import Nav from '@/src/modules/core/components/Nav';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-Blanco">
                <View className="bg-Fondo flex-1">
                    <Header />
                    <View className="bg-Primario">
                        <View className="h-20 justify-center items-center">
                            <Text className="text-Blanco text-3xl font-vs-semibold">Explora tu historial médico</Text>
                        </View>
                        <View className=" bg-Fondo p-5 rounded-t-3xl">
                            <View>
                                <Text>ksadjldj</Text>
                            </View>
                            <ScrollView className="pt-5"
                            contentContainerStyle={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: 20,
                            }}>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                                <CardHistorial Icono="UserGray" Titulo="Biometricos" Texto="Altura y peso"/>
                            </ScrollView>
                        </View>
                    </View>
                    
                </View>
                <View className="justify-end">
                    <Nav screenActual="book" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}