import "@/global.css";
// @ts-ignore
import Logo from "@/src/assets/logo.svg";
import Header from '@/src/modules/core/components/Header';
import Nav from '@/src/modules/core/components/Nav';
import Pre from '@/src/modules/core/components/Pre';
import Question from '@/src/modules/core/components/Question';
import * as React from "react";
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const frases = [
    "Me siento mal...",
    "Quiero más energía",
    "Comer más sano",
    "Tengo mucho estrés"
];


export default function HomeScreen() {
    const frasesRandom = React.useMemo(() => {
        return [...frases].sort(() => Math.random() - 0.5);
    }, []);

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
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            className="p-4"
                            contentContainerStyle={{ gap: 16 }}
                            >
                                {frasesRandom.slice(0, 4).map((frase, index) => (
                                <Pre key={index} frase={frase} />
                            ))}
                        </ScrollView>
                    </View>


                    <View className="px-5 pb-5">
                        <Question />
                    </View>

                </View>


                <View className="justify-end">
                    <Nav screenActual="chat" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}