import Button from "@/src/modules/core/components/Buttons";
import InputCustom from "@/src/modules/core/components/Input";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function PersonasFormScreen() {

    const [nombre, setNombre] = useState("");
    const [primerApellido, setPrimerApellido] = useState("");
    const [segundoApellido, setSegundoApellido] = useState("");
    const [sexo, setSexo] = useState("M");
    const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
    const [mostrarFecha, setMostrarFecha] = useState(false);
    const [tipoSangre, setTipoSangre] = useState("A+");

    const handleGuardar = async () => {

        const data = {
            nombre,
            primer_apellido: primerApellido,
            segundo_apellido: segundoApellido,
            sexo,
            fecha_nacimiento: fechaNacimiento.toISOString().slice(0, 10),
            tipo_sangre: tipoSangre,
        };

        console.log("Datos del formulario:", data);

        try {
            const response = await fetch("https://taina-preneural-stereochromatically.ngrok-free.dev/usuario/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("Respuesta API:", result);
        } catch (error) {
            console.error("Error enviando datos API:", error);
        }
    };

    return (
    <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="p-5">

                {/* TITULO */}
                <Text className="text-[25px] font-vs-bold my-10 text-center">
                    Registro de persona
                </Text>

                {/* Nombre */}
                <View className="gap-5">
                    <InputCustom
                        label="Nombre"
                        placeholder="Ingresa tu nombre"
                        value={nombre}
                        onChangeText={setNombre}
                    />

                    {/* Primer apellido */}
                    <InputCustom
                        label="Primer apellido"
                        placeholder="Ingresa tu primer apellido"
                        value={primerApellido}
                        onChangeText={setPrimerApellido}
                    />

                    {/* Segundo apellido */}
                    <InputCustom
                        label="Segundo apellido"
                        placeholder="Ingresa tu segundo apellido"
                        value={segundoApellido}
                        onChangeText={setSegundoApellido}
                    />
                

                    {/* Sexo */}
                    <View className="flex-row justify-between items-center">
                        <View className="px-3 w-1/2">
                            <Text className="text-[16px] mb-1">Sexo</Text>
                            <View className="border border-gray-300 rounded-lg">
                                <Picker selectedValue={sexo} onValueChange={setSexo}>
                                    <Picker.Item label="Masculino" value="M" />
                                    <Picker.Item label="Femenino" value="F" />
                                </Picker>
                            </View>
                        </View>

                        {/* Tipo de sangre */}
                        <View className="px-3 w-1/2">
                            <Text className="text-[16px] mb-1">Tipo de sangre</Text>
                            <View className="border border-gray-300 rounded-lg">
                                <Picker selectedValue={tipoSangre} onValueChange={setTipoSangre}>
                                    <Picker.Item label="A+" value="A+" />
                                    <Picker.Item label="A-" value="A-" />
                                    <Picker.Item label="B+" value="B+" />
                                    <Picker.Item label="B-" value="B-" />
                                    <Picker.Item label="O+" value="O+" />
                                    <Picker.Item label="O-" value="O-" />
                                    <Picker.Item label="AB+" value="AB+" />
                                    <Picker.Item label="AB-" value="AB-" />
                                </Picker>
                            </View>
                        </View>
                    </View>
                    {/* Fecha de nacimiento */}
                    <View className="px-3">
                        <Text className="text-[16px] mb-1">Fecha de nacimiento</Text>

                        <TouchableOpacity
                            className="border border-gray-300 rounded-lg p-5"
                            onPress={() => setMostrarFecha(true)}
                        >
                            <Text>{fechaNacimiento.toLocaleDateString()}</Text>
                        </TouchableOpacity>

                        {mostrarFecha && (
                            <DateTimePicker
                                value={fechaNacimiento}
                                mode="date"
                                display="calendar"
                                onChange={(e, selected) => {
                                    setMostrarFecha(false);
                                    if (selected) setFechaNacimiento(selected);
                                }}
                            />
                        )}
                    </View>

                    {/* BOTÓN GUARDAR */}
                    <View className="pt-4 px-10">
                        <Button 
                        text="Guardar"
                        textColor="Blanco" 
                        color="Primario" 
                        variant="Fill" 
                        onPress={handleGuardar}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}
