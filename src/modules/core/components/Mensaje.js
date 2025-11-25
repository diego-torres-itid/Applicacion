import "@/global.css";
import * as React from "react";
import { Dimensions, Text, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default function MensajesList({ mensajes = [] }) {

    function obtenerHoraMinutoAMPM() {
        const ahora = new Date();
        let horas = ahora.getHours(); // 0-23
        const minutos = String(ahora.getMinutes()).padStart(2, "0"); // 00-59
        const ampm = horas >= 12 ? "PM" : "AM";
    
        horas = horas % 12; // convierte a formato 12 horas
        horas = horas ? horas : 12; // si es 0, poner 12
    
        return `${horas}:${minutos} ${ampm}`;
    }
    
    // Ejemplo de uso
    const horaMinuto = obtenerHoraMinutoAMPM();
    console.log("Hora actual:", horaMinuto); // Ej: "19:53"

    return (
        <View className="px-5 py-2">
            {mensajes.map((msg, index) => {
                const esMismoTipoAnterior =
                    index > 0 && mensajes[index - 1].tipo === msg.tipo;

                return (
                    <View
                        key={index}
                        style={{
                            width: screenWidth * 0.7,
                            alignSelf: msg.tipo === "enviado" ? "flex-end" : "flex-start",
                            marginTop: esMismoTipoAnterior ? 5 : 14,
                        }}
                        className={`p-3 px-6 ${
                        msg.tipo === "enviado"
                            ? `bg-Primario ${
                                esMismoTipoAnterior
                                ? "rounded-3xl"
                                : "rounded-b-3xl rounded-tl-3xl"
                            }`
                                : `bg-Blanco ${
                                esMismoTipoAnterior
                                ? "rounded-3xl"
                                : "rounded-b-3xl rounded-tr-3xl"
                            }`
                        }`}
                    >
                        <View 
                        className={`${
                            msg.tipo === "enviado" ? "items-end" : "items-start"
                            }`}>
                        <Text
                            className={`font-vs-regular text-[14px] ${
                                msg.tipo === "enviado" ? "text-Blanco" : "text-Negro"
                            }`}
                        >
                            {msg.Texto}
                        </Text>
                        </View>
                        <View 
                        className={`${
                                msg.tipo === "enviado" ? "items-end" : "items-start"
                            }`}>
                            <Text
                                className={`font-vs-regular text-[9px] ${
                                    msg.tipo === "enviado" ? "text-Blanco opacity-65" : "text-Negro opacity-65"
                                }`}
                            >
                                {horaMinuto}
                            </Text>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}
