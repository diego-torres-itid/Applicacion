import "@/global.css";
import Button from "@/src/modules/core/components/Buttons";
import Icon from "@/src/modules/core/components/Icons";
import { useRouter } from "expo-router";
import * as React from "react";
import { Pressable, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// @ts-ignore
import Study from "../../src/assets/images/undraw-book-writer.svg";
export default function HomeScreen() {
    const router = useRouter();
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 justify-center items-center px-10 bg-Fondo">
                <View className="gap-10 items-center">
                    <Study width={230} height={230} />
                    <View className="gap-10">
                        <Text className="font-vs-semibold text-xl">Registra tu historial clínico fácilmente</Text>
                        <Text className="font-vs-extralight text-xl">Conversa con Neurona, nuestra IA especializada en salud, y mantén tu información médica organizada desde el primer día.</Text>
                    </View>
                </View>
                <View className="absolute w-4/5 bottom-40">
                    <Button 
                    text="Next"
                    textColor="Blanco" 
                    color="Primario" 
                    variant="Fill" 
                    onPress={() => router.push('./etapa3')}/>
                    
                </View>
                <View className="absolute top-40 flex-row gap-3 justify-center">
                    <View className="p-0.5 w-1/5 bg-Primario border-none rounded-full"></View>
                    <View className="p-0.5 w-1/5 bg-Blanco border-2 border-gray-200 rounded-full"></View>
                    <View className="p-0.5 w-1/5 bg-Blanco border-2 border-gray-200 rounded-full"></View>
                </View>
                <Pressable className="absolute top-24 left-5" onPress={() => router.back()}>
                    <Icon tipo="BackGray" size={30} />
                </Pressable>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}