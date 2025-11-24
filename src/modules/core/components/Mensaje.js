import "@/global.css";
import * as React from "react";
import { Dimensions, Text, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default function MensajesList({ mensajes = [] }) {

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
                        <Text
                            className={`font-vs-regular text-[16px] ${
                                msg.tipo === "enviado" ? "text-Blanco" : "text-Negro"
                            }`}
                        >
                            {msg.Texto}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
}
