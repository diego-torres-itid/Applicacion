import "@/global.css";
import * as React from "react";
import { Text, View } from "react-native";
import Icon from './Icons';
    export default function Perfil({ mostrarDetalles = true}){
    return(
            <View className="gap-5 p-7 py-10 justify-center items-center bg-Blanco rounded-3xl">

                <View className="p-4 bg-GrisOscuro rounded-full">
                    <Icon tipo="User" relleno="Lleno" color="Blanco" size={80}/>
                </View>

                <View className="items-center">
                    <Text className="font-vs-medium text-[20px]">Name Lastname, age</Text>
                    <Text className="font-vs-light text-[16px]">email@ofiuco.com</Text>
                </View>
                
                {mostrarDetalles && (
                <View className="flex-row gap-16">

                    <View className="items-center">
                        <Icon tipo="Mancuerna" size={30}/>
                        <Text className="font-vs-regular text-[20px]">0.0 kg</Text>
                        <Text className="font-vs-light text-[12px]">Peso</Text>
                    </View>

                    <View className="items-center">
                        <Icon tipo="Regla" size={30}/>
                        <Text className="font-vs-regular text-[20px]">0 cm</Text>
                        <Text className="font-vs-light text-[12px]">Altura</Text>
                    </View>

                    <View className="items-center">
                        <Icon tipo="CalendarOutlineGray" size={30}/>
                        <Text className="font-vs-regular text-[20px]">0</Text>
                        <Text className="font-vs-light text-[12px]">Edad</Text>
                    </View>
                    
                </View>
            )}
            </View>
    )

}