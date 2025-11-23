import "@/global.css";
import * as React from "react";
import { Text, View } from "react-native";
import Icon from './Icons';
export default function Header({ tipo = "Default"}){

    const renderContenido = () => {
        switch (tipo) {
            case "Perfil":
                return (
                    <View className="py-3">
                        <Text className="font-vs-semiboldtext text-2xl">Perfil</Text>
                    </View>
                );

            case "Home":
                return (
                    <View className="flex-row items-center gap-3">
                        <View className="bg-GrisOscuro rounded-full p-2">
                            <Icon tipo="User" relleno="Lleno" color="Blanco" size={35}/>
                        </View>
                        <Text className="font-vs-semiboldtext text-xl text-PrimarioOscuro">Name Lastname</Text>
                    </View>
                );

            case "Default":
                return (
                    <View className="flex-row items-center gap-3">
                        <View className="bg-GrisOscuro rounded-full p-2">
                            <Icon tipo="User" relleno="Lleno" color="Blanco" size={35}/>
                        </View>
                        <View>
                            <Text className="font-vs-extralighttext text-sm">Bienvenido de nuevo,</Text>
                            <Text className="font-vs-semiboldtext text-xl text-PrimarioOscuro">Name Lastname</Text>
                        </View>
                    </View>
                );

            default:
                return null;
        }
    };

    return(
        <View className="flex-row items-center py-5 px-10 justify-between bg-Blanco">
            {renderContenido()}
            <View className="flex-row gap-2">
                <Icon tipo="Notification" size={25}/>
                <Icon tipo="Config" size={25}/>
            </View>
        </View>
    )

}