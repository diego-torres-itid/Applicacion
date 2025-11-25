import "@/global.css";
import { useRouter } from "expo-router";
import * as React from "react";
import { Pressable, View } from "react-native";
import Icon from './Icons';
export default function Nav({ screenActual = "home" }){
    const router = useRouter();

    const irA = (ruta) => {
        if(screenActual === ruta) {
            return;
        }
        router.push(`/tabs/${ruta}`);
    };

	return (
        <View>
            {screenActual !== "chat" && (
            <View className="bg-GrisOscuro h-0.5 border-none rounded-t-lg"></View>
            )}
            <View className="flex-row justify-evenly py-4 items-center bg-Blanco">
                <Pressable onPress={() => irA("home")}>
                    <Icon tipo="Home" relleno={screenActual === "home" ? "Lleno" : "Vacio"} color="Negro" size={25}/>
                </Pressable>
                <Pressable onPress={() => irA("alarma")}>
                    <Icon tipo="Clock" relleno={screenActual === "alarma" ? "Lleno" : "Vacio"} color="Negro" size={22}/>
                </Pressable>
                <Pressable onPress={() => irA("chat")}>
                    <View className="bg-GrisOscuro rounded-full p-2">
                        <Icon tipo="Chat" relleno={screenActual === "chat" ? "Lleno" : "Vacio"} color="Blanco" size={25}/>
                    </View>
                </Pressable>
                <Pressable onPress={() => irA("book")}>
                    <Icon tipo="Book" relleno={screenActual === "book" ? "Lleno" : "Vacio"} color="Negro" size={25}/>
                </Pressable>
                <Pressable onPress={() => irA("user")}>
                    <Icon tipo="User" relleno={screenActual === "user" ? "Lleno" : "Vacio"} color="Negro" size={25}/>
                </Pressable>
            </View>
        </View>
    );
};	