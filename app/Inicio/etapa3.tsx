import "@/global.css";
import { useRouter } from "expo-router";
import * as React from "react";
import { Pressable, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import News from "../../src/assets/images/undraw-happy-news.svg";
export default function HomeScreen() {
    const router = useRouter();
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 justify-center items-center px-10">
                <View className="gap-10 items-center">
                    <News width={230} height={230} />
                    <View className="gap-10">
                        <Text className="font-vs-semibold text-xl">Recibe alertas y consejos personalizados</Text>
                        <Text className="font-vs-extralight text-xl">Usa la app regularmente y obtén recordatorios inteligentes que te ayudan a cuidarte y mejorar tu bienestar día a día.</Text>
                    </View>
                </View>
                <Pressable className="absolute right-20 bottom-40" onPress={() => router.push('./etapa4')}><Text>Click me</Text></Pressable>
                <Pressable className="absolute left-20 top-40" onPress={() => router.push('./etapa2')}><Text>Back</Text></Pressable>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}