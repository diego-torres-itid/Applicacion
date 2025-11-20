import "@/global.css";
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function Screen1() {
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1">
                <View className="">
                    <Text>lkdskjakdsj</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}