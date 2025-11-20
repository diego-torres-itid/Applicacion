import "@/global.css";
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function Screen1() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1">
                <View className="flex-1 justify-end">
                    
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}