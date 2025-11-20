import "@/global.css";
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1">
                <View>
                    <Text>aslkdjas</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}