import "@/global.css";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from './Icons';

export default function Recordatorio({ Icono, Titulo, Texto, Fecha, Restante, onDelete, onEdit }) {

    const [menuVisible, setMenuVisible] = React.useState(false);

    return (
        <View className="flex-row justify-between p-2 bg-Blanco rounded-full items-center px-5">
            {/* Si NO está abierto el menú */}
            {!menuVisible && (
                <>
                    <View className="gap-5 flex-row items-center">
                        <View className="p-2 bg-GrisClarisimo rounded-full">
                            <Icon tipo={Icono} size={35} />
                        </View>

                        <View>
                            <Text className="font-vs-regular text-[18px]">{Titulo}</Text>
                            <Text className="font-vs-regular text-[14px] text-PrimarioOscuro">{Texto}</Text>

                            <View className="flex-row gap-2">
                                <Text className="font-vs-regular text-[14px]">{Fecha}</Text>
                                <Text className="font-vs-regular text-[14px] text-red-700">{Restante}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setMenuVisible(true)}>
                        <Icon tipo="TreePoint" size={35} />
                    </TouchableOpacity>
                </>
            )}
            {/* Si SÍ está abierto el menú */}
            {menuVisible && (
                <View className="flex-row w-full justify-between px-5 py-2 items-center">
                    <TouchableOpacity onPress={onDelete}>
                        <Text className="text-red-600 font-vs-regular text-[18px]">
                            Eliminar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onEdit}>
                        <Text className="font-vs-regular text-[18px]">
                            Modificar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setMenuVisible(false)}>
                        <Icon tipo="CloseGray" size={25} />
                    </TouchableOpacity>

                </View>
            )}

        </View>
    );
}
