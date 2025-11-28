import "@/global.css";
import { useUserStore } from "@/src/store/userStore";
import * as React from "react";
import { Text, View } from "react-native";
import Icon from "./Icons";

export default function Perfil({ mostrarDetalles = true }) {

    // 🟦 Datos personales
    const nombre = useUserStore((state) => state.nombre);
    const primerApellido = useUserStore((state) => state.primer_apellido);
    const segundoApellido = useUserStore((state) => state.segundo_apellido);
    const fechaNacimiento = useUserStore((state) => state.fecha_nacimiento);

    // 🟩 Datos biométricos DESDE LA STORE
    const peso = useUserStore((state) => state.peso);
    const altura = useUserStore((state) => state.altura);

    const calcularEdad = (fecha) => {
        if (!fecha) return 0;
        const nacimiento = new Date(fecha);
        const hoy = new Date();

        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }

        return edad;
    };

    const edad = calcularEdad(fechaNacimiento);

    return (
        <View className="gap-5 p-7 py-10 justify-center items-center bg-Blanco rounded-3xl">

            <View className="p-4 bg-GrisOscuro rounded-full">
                <Icon tipo="User" relleno="Lleno" color="Blanco" size={80} />
            </View>

            <View className="items-center">
                <Text className="font-vs-medium text-[20px]">
                    {nombre} {primerApellido} {segundoApellido}
                </Text>
                <Text className="font-vs-light text-[16px]">email@ofiuco.com</Text>
            </View>

            {mostrarDetalles && (
                <View className="flex-row gap-16">

                    <View className="items-center">
                        <Icon tipo="Mancuerna" size={30} />
                        <Text className="font-vs-regular text-[20px]">
                        {peso != null ? peso + " kg" : "--"}

                        </Text>
                        <Text className="font-vs-light text-[12px]">Peso</Text>
                    </View>

                    <View className="items-center">
                        <Icon tipo="Regla" size={30} />
                        <Text className="font-vs-regular text-[20px]">
                            {altura ? altura + " cm" : "--"}
                        </Text>
                        <Text className="font-vs-light text-[12px]">Altura</Text>
                    </View>

                    <View className="items-center">
                        <Icon tipo="CalendarOutlineGray" size={30} />
                        <Text className="font-vs-regular text-[20px]">
                            {edad}
                        </Text>
                        <Text className="font-vs-light text-[12px]">Edad</Text>
                    </View>

                </View>
            )}

        </View>
    );
}
