import "@/global.css";
import Nav from '@/src/modules/core/components/Nav';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
    return (
        <SafeAreaProvider>
        <SafeAreaView className="flex-1">
            <View className="flex-1 justify-end">
                <Nav screenActual="user" />
            </View>
        </SafeAreaView>
        </SafeAreaProvider>
    );
}