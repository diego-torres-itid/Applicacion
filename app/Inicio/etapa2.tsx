import "@/global.css";
import { useRouter } from "expo-router";
import * as React from "react";
import { Pressable, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Study from "../../src/assets/images/undraw-book-writer.svg";
export default function HomeScreen() {
    const router = useRouter();
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 justify-center items-center px-10">
                <View className="gap-10 items-center">
                    <Study width={230} height={230} />
                    <View className="gap-10">
                        <Text className="font-vs-semibold text-xl">Registra tu historial clínico fácilmente</Text>
                        <Text className="font-vs-extralight text-xl">Conversa con Neurona, nuestra IA especializada en salud, y mantén tu información médica organizada desde el primer día.</Text>
                    </View>
                </View>
                <Pressable className="absolute right-20 bottom-40" onPress={() => router.push('./etapa3')}><Text>Click me</Text></Pressable>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}