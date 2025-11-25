import "@/global.css";
import * as React from "react";
import { Text, View } from "react-native";
import Icon from './Icons';

    export default function Recordatorio({ Icono, Titulo, Texto, Fecha, Restante  }){
    return(
            <View className="flex-row justify-between p-2">
                <View className="gap-2">
                    <Icon tipo={Icono}/>
                    <View>
                        <Text className="font-vs-regular font-[20px]">{Titulo}</Text>
                        <Text className="font-vs-regular font-[16px] text-PrimarioOscuro">{Texto}</Text>
                        <View>
                            <Text className="font-vs-regular font-[20px]">{Fecha}</Text>
                            <Text className="font-vs-regular font-[20px] text-red-700">{Restante}</Text>
                        </View>
                    </View>
                </View>
                <Icon tipo="TreePoint"/>
            </View>
    )
}