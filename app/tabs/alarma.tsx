import "@/global.css";
import Header from '@/src/modules/core/components/Header';
import Nav from '@/src/modules/core/components/Nav';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-Blanco">
                <View className="flex-1 bg-Fondo">
                    <Header tipo="Default" />
                </View>
                <View className="justify-end">
                    <Nav screenActual="alarma" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}