import Button from "@/src/modules/core/components/Buttons";
import CustomDropdownPicker from '@/src/modules/core/components/CustomDropdownPicker';
import Icon from "@/src/modules/core/components/Icons";
import InputCustom from "@/src/modules/core/components/Input";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function PersonasFormScreen() {


    const opcionesSexo = [
        { label: 'Mujer', value: 'F' },
        { label: 'Hombre', value: 'M' },
    ];
    
    const opcionesTipoSangre = [
        { label: 'A+', value: 'A+' },
        { label: 'A-', value: 'A-' },
        { label: 'B+', value: 'B+' },
        { label: 'B-', value: 'B-' },
        { label: 'O+', value: 'O+' },
        { label: 'O-', value: 'O-' },
        { label: 'AB+', value: 'AB+' },
        { label: 'AB-', value: 'AB-' },
    ];


    







    
    const { email, password } = useLocalSearchParams();


    const router = useRouter();


    const [nombre, setNombre] = useState("");
    const [primerApellido, setPrimerApellido] = useState("");
    const [segundoApellido, setSegundoApellido] = useState("");
    const [sexo, setSexo] = useState("M");
    const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
    const [mostrarFecha, setMostrarFecha] = useState(false);
    const [tipoSangre, setTipoSangre] = useState("A+");


    const formularioInvalido =
    !email ||
    !password ||
    !nombre.trim() ||
    !primerApellido.trim() ||
    !segundoApellido.trim() ||
    !sexo ||
    !tipoSangre ||
    !fechaNacimiento;

    const handleGuardar = async () => {

        if (formularioInvalido) {
            alert("Por favor completa todos los campos.");
            return;
        }


        const data = {
            email,
            password,
            nombre,
            primer_apellido: primerApellido,
            segundo_apellido: segundoApellido,
            sexo,
            fecha_nacimiento: fechaNacimiento.toISOString().slice(0, 10),
            tipo_sangre: tipoSangre,
        };

        console.log("Datos del formulario:", data);

        try {
            const response = await fetch("https://taina-preneural-stereochromatically.ngrok-free.dev/usuario/registrar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                console.log("Respuesta API:", result);
                alert(result.message || "Error al guardar los datos");
                return;
            }
            const idPersona = result.id_persona;
            console.log("ID Persona recibido:", idPersona);
            alert("Cuenta creada correctamente.");
            router.back();

        } catch (error) {
            console.error("Error enviando datos API:", error);
            alert("Hubo un error al guardar los datos");
        }
    };

    return (
    <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="p-5">

                {/* TITULO */}
                <Text className="text-[25px] font-vs-bold my-10 mt-20 text-center">
                    Registro de persona
                </Text>

                {/* Nombre */}
                <View className="gap-5">
                    {/* @ts-ignore */}
                    <InputCustom
                        label="Nombre"
                        placeholder="Nombre"
                        value={nombre}
                        onChangeText={setNombre}
                    />

                    {/* Primer apellido */}
                    {/* @ts-ignore */}
                    <InputCustom
                        label="Primer apellido"
                        placeholder="Primer apellido"
                        value={primerApellido}
                        onChangeText={setPrimerApellido}
                    />

                    {/* Segundo apellido */}
                    {/* @ts-ignore */}
                    <InputCustom
                        label="Segundo apellido"
                        placeholder="Segundo apellido"
                        value={segundoApellido}
                        onChangeText={setSegundoApellido}
                    />
                

                    {/* Sexo */}
                    <View className="flex-row justify-between items-center">
                        <View className="px-3 w-1/2">
                            <Text className="text-[16px] mb-1 pl-2">Sexo</Text>
                            <CustomDropdownPicker
                                label="Selecciona tu sexo"
                                options={opcionesSexo}
                                selectedValue={sexo}
                                onValueChange={setSexo}
                            />
                        </View>

                        {/* Tipo de sangre */}
                        <View className="px-3 w-1/2">
                            <Text className="text-[16px] mb-1 pl-2">Tipo de sangre</Text>
                            <CustomDropdownPicker
                                label="Selecciona tu tipo de sangre"
                                options={opcionesTipoSangre}
                                selectedValue={tipoSangre}
                                onValueChange={setTipoSangre}
                            />
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
                                display="spinner"
                                maximumDate={new Date()}
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
                        disabled={formularioInvalido}
                        onPress={handleGuardar}
                        />
                    </View>
                </View>
                <Pressable className="absolute left-5 top-5" onPress={() => router.back()}>
                    <Icon tipo="BackGray" size={30} />
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}
