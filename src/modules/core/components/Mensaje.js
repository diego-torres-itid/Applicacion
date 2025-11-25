import "@/global.css";
import * as React from "react";
import { Dimensions, Text, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default function MensajesList({ mensajes = [] }) {

    function obtenerHoraMinutoAMPM(fechaHora) {
        if (!fechaHora) return "";
    
        // fechaHora = "2025-11-25 05:06:19"
        const partes = fechaHora.split(" "); // ["2025-11-25", "05:06:19"]
        if (partes.length !== 2) return "";
    
        const [horaStr, minutoStr] = partes[1].split(":"); // ["05","06","19"]
        if (!horaStr || !minutoStr) return "";
    
        let horas = parseInt(horaStr, 10); // 5
        const minutos = minutoStr.padStart(2, "0"); // "06"
        const ampm = horas >= 12 ? "PM" : "AM";
        horas = horas % 12 || 12; // convierte 0 a 12
    
        return `${horas}:${minutos} ${ampm}`; // "5:06 AM"
    }
    
    

    return (
        <View className="px-5 py-2">
            {mensajes.map((msg, index) => {
                const esMismoTipoAnterior =
                    index > 0 && mensajes[index - 1].tipo === msg.tipo;

                return (
                    <View
                        key={index}
                        style={{
                            maxWidth: screenWidth * 0.7,
                            alignSelf: msg.tipo === "enviado" ? "flex-end" : "flex-start",
                            marginTop: esMismoTipoAnterior ? 5 : 14,
                        }}
                        className={`p-3 px-6 ${
                            msg.tipo === "enviado"
                                ? `${esMismoTipoAnterior ? "bg-Primario rounded-3xl" : "bg-Primario rounded-b-3xl rounded-tl-3xl"}`
                                : `${esMismoTipoAnterior ? "bg-Blanco rounded-3xl" : "bg-Blanco rounded-b-3xl rounded-tr-3xl"}`
                        }`}
                    >
                        {/* Mensaje */}
                        <View className={`${msg.tipo === "enviado" ? "items-end" : "items-start"}`}>
                            <Text
                                className={`font-vs-regular text-[14px] ${msg.tipo === "enviado" ? "text-Blanco" : "text-Negro"}`}
                            >
                                {msg.Texto}
                            </Text>
                        </View>

                        {/* Hora del mensaje */}
                        <View className={`mt-2 ${msg.tipo === "enviado" ? "items-end" : "items-start"}`}>
                            <Text
                                className={`font-vs-regular text-[9px] 
                                    ${msg.tipo === "enviado" ? "text-Blanco opacity-65" : "text-Negro opacity-65"}`}
                            >
                                {obtenerHoraMinutoAMPM(msg.fecha_hora)}
                            </Text>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}
