import "@/global.css";
import Logo from "@/src/assets/logo.svg";
import * as React from "react";
import { Text, View } from "react-native";
import Icon from './Icons';
export default function Header({ tipo = "Default"}){

    const renderContenido = () => {
        switch (tipo) {
            case "Perfil":
                return (
                    <View>
                        <Text className="font-vs-semiboldtext text-2xl">Perfil</Text>
                    </View>
                );

            case "Default":
                return (
                    <View className="flex-row items-center gap-3">
                        <View className="bg-GrisOscuro rounded-full p-2">
                            <Icon tipo="User" relleno="Lleno" color="Blanco" size={35}/>
                        </View>
                        <Text className="font-vs-semiboldtext text-xl text-PrimarioOscuro">Name Lastname</Text>
                    </View>
                );

            case "Home":
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
            
            case "Chat":
                return (
                    <View className="flex-row items-center gap-5">
                        <Logo width={40} height={40} />
                        <View>
                            <Text className="font-vs-semibold text-[20px]">Neurona</Text>
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
            <View className="flex-row gap-5">
                <Icon tipo="Notification" size={22}/>
                <Icon tipo="Config" size={22}/>
            </View>
        </View>
    )

}