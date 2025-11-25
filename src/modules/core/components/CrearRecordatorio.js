import "@/global.css";
import { useRecordatorioStore } from "@/src/store/recordatorioStore";
import * as React from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from './Icons';

export default function CrearRecordatorio({ Texto }) {

    const addRecordatorio = useRecordatorioStore(s => s.addRecordatorio);

    const [modalVisible, setModalVisible] = React.useState(false);

    const [titulo, setTitulo] = React.useState("");
    const [descripcion, setDescripcion] = React.useState("");
    const [fecha, setFecha] = React.useState("");

    // 🔥 Asignar icono dependiendo del tipo
    const getIconoByTipo = () => {
        switch (Texto) {
            case "Consulta":
                return "Estetoscopio";
            case "Medicacion":
                return "Medicina";
            case "Recordatorio":
            default:
                return "RegistroMedico";
        }
    };

    const crear = () => {
        if (!titulo || !descripcion || !fecha) return;

        addRecordatorio({
            Icono: getIconoByTipo(),
            Titulo: titulo,
            Texto: descripcion,
            Fecha: fecha,
            Restante: "(--)"
        });

        setModalVisible(false);
        setTitulo("");
        setDescripcion("");
        setFecha("");
    };

    return (
        <>
            {/* BOTÓN */}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View className="p-5 bg-Blanco items-center gap-4">
                    <Icon tipo={getIconoByTipo()} size={45} />
                    <Text className="font-vs-light text-[16px]">{Texto}</Text>
                </View>
            </TouchableOpacity>

            {/* MODAL */}
            <Modal visible={modalVisible} transparent animationType="fade">
                <View className="flex-1 bg-black/40 justify-center items-center">
                    <View className="bg-white p-6 rounded-2xl w-[80%] gap-4">

                        <Text className="font-vs-regular text-[18px] text-center">
                            Crear {Texto}
                        </Text>

                        <TextInput
                            placeholder="Título"
                            className="border p-2 rounded"
                            value={titulo}
                            onChangeText={setTitulo}
                        />

                        <TextInput
                            placeholder="Descripción"
                            className="border p-2 rounded"
                            value={descripcion}
                            onChangeText={setDescripcion}
                        />

                        <TextInput
                            placeholder="Fecha (ej. 14 Nov, 10:00am)"
                            className="border p-2 rounded"
                            value={fecha}
                            onChangeText={setFecha}
                        />

                        <View className="flex-row justify-between mt-4">
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text className="text-red-500">Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={crear}>
                                <Text className="text-blue-600">Crear</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </>
    );
}
