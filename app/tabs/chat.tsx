import "@/global.css";
// @ts-ignore
import Logo from "@/src/assets/logo.svg";
import Header from '@/src/modules/core/components/Header';
import Nav from '@/src/modules/core/components/Nav';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-Blanco">


                <View className="flex-1 bg-Fondo">

                    <Header tipo="Chat"/>



                    <View className="flex-1 items-center justify-center">
                        <Logo width={100} height={100} />
                        <Text className="font-vs-bold text-[28px] text-Primario">Hola Name</Text>
                        <Text className="font-vs-regular text-[24px]">Aqui estoy para ayudarte</Text>
                        <Text className="font-vs-light text-[16px]">¿Como te sientes hoy?</Text>
                    </View>


                    <View>

                    </View>
                </View>


                <View className="justify-end">
                    <Nav screenActual="chat" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}