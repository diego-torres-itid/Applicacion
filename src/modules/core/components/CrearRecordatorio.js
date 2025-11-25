import "@/global.css";
import { useRecordatorioStore } from "@/src/store/recordatorioStore";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as React from "react";
import { Alert, Modal, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from './Icons';

export default function CrearRecordatorio({ Texto, recordatorioEditar, onClose }) {
    const addRecordatorio = useRecordatorioStore(s => s.addRecordatorio);
    const updateRecordatorio = useRecordatorioStore(s => s.updateRecordatorio);

    // 🔥 Si viene recordatorioEditar, estamos en modo edición
    const [modalVisible, setModalVisible] = React.useState(false);
    const [esEdicion, setEsEdicion] = React.useState(false);
    const [indiceEdicion, setIndiceEdicion] = React.useState(null);

    const [titulo, setTitulo] = React.useState("");
    const [descripcion, setDescripcion] = React.useState("");
    const [fecha, setFecha] = React.useState("");
    const [fechaSeleccionada, setFechaSeleccionada] = React.useState(new Date());
    const [mostrarDatePicker, setMostrarDatePicker] = React.useState(false);
    const [mostrarTimePicker, setMostrarTimePicker] = React.useState(false);

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

    // 🔥 Calcular días restantes
    const calcularDiasRestantes = (fechaObjetivo) => {
        const hoy = new Date();
        const fechaObj = new Date(fechaObjetivo);
        
        // Resetear horas para comparar solo días
        hoy.setHours(0, 0, 0, 0);
        fechaObj.setHours(0, 0, 0, 0);
        
        const diferenciaMs = fechaObj.getTime() - hoy.getTime();
        const diasRestantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));
        
        if (diasRestantes === 0) {
            return "Hoy";
        } else if (diasRestantes === 1) {
            return "Mañana";
        } else if (diasRestantes > 1) {
            return `En ${diasRestantes} días`;
        } else if (diasRestantes === -1) {
            return "Ayer";
        } else {
            return `Hace ${Math.abs(diasRestantes)} días`;
        }
    };

    // 🔥 Formatear fecha para mostrar
    const formatearFecha = (fecha) => {
        try {
            const fechaObj = new Date(fecha);
            if (isNaN(fechaObj.getTime())) {
                return "";
            }
            
            const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
            const dia = fechaObj.getDate();
            const mes = meses[fechaObj.getMonth()];
            
            let horas = fechaObj.getHours();
            const minutos = fechaObj.getMinutes().toString().padStart(2, '0');
            const ampm = horas >= 12 ? 'pm' : 'am';
            
            horas = horas % 12;
            horas = horas ? horas : 12; // la hora '0' debe ser '12'
            
            return `${dia} ${mes}, ${horas}:${minutos}${ampm}`;
        } catch (error) {
            console.log("Error formateando fecha:", error);
            return "";
        }
    };

    // 🔥 Efecto para manejar la edición
    React.useEffect(() => {
        if (recordatorioEditar) {
            setModalVisible(true);
            setEsEdicion(true);
            setTitulo(recordatorioEditar.Titulo || "");
            setDescripcion(recordatorioEditar.Texto || "");
            setFecha(recordatorioEditar.Fecha || "");
            setIndiceEdicion(recordatorioEditar.index);
            
            // Si hay fecha existente, intentar parsearla
            if (recordatorioEditar.Fecha) {
                try {
                    // Intentar parsear la fecha existente
                    const fechaParseada = new Date(recordatorioEditar.Fecha);
                    if (!isNaN(fechaParseada.getTime())) {
                        setFechaSeleccionada(fechaParseada);
                    }
                } catch (error) {
                    console.log("Error parseando fecha existente:", error);
                }
            }
        }
    }, [recordatorioEditar]);

    // 🔥 Manejar cambio de fecha
    const onChangeFecha = (event, selectedDate) => {
        setMostrarDatePicker(false);
        if (selectedDate) {
            const nuevaFecha = new Date(selectedDate);
            // Mantener la hora actual al cambiar solo la fecha
            nuevaFecha.setHours(fechaSeleccionada.getHours());
            nuevaFecha.setMinutes(fechaSeleccionada.getMinutes());
            
            setFechaSeleccionada(nuevaFecha);
            const fechaFormateada = formatearFecha(nuevaFecha);
            setFecha(fechaFormateada);
            console.log("Fecha seleccionada:", fechaFormateada);
        }
    };

    // 🔥 Manejar cambio de hora
    const onChangeHora = (event, selectedTime) => {
        setMostrarTimePicker(false);
        if (selectedTime) {
            // Combinar la fecha actual con la nueva hora
            const nuevaFecha = new Date(fechaSeleccionada);
            nuevaFecha.setHours(selectedTime.getHours());
            nuevaFecha.setMinutes(selectedTime.getMinutes());
            
            setFechaSeleccionada(nuevaFecha);
            const fechaFormateada = formatearFecha(nuevaFecha);
            setFecha(fechaFormateada);
            console.log("Hora seleccionada:", fechaFormateada);
        }
    };

    // 🔥 Mostrar selector de fecha
    const mostrarSelectorFecha = () => {
        setMostrarDatePicker(true);
    };

    // 🔥 Mostrar selector de hora
    const mostrarSelectorHora = () => {
        setMostrarTimePicker(true);
    };

    const crear = () => {
        console.log("Creando recordatorio...");
        console.log("Título:", titulo);
        console.log("Descripción:", descripcion);
        console.log("Fecha formateada:", fecha);
        console.log("Fecha completa:", fechaSeleccionada);

        // Validar campos
        if (!titulo.trim()) {
            Alert.alert("Error", "Por favor ingresa un título");
            return;
        }
        if (!descripcion.trim()) {
            Alert.alert("Error", "Por favor ingresa una descripción");
            return;
        }
        if (!fecha.trim()) {
            Alert.alert("Error", "Por favor selecciona una fecha y hora");
            return;
        }

        // Calcular días restantes
        const diasRestantes = calcularDiasRestantes(fechaSeleccionada);
        console.log("Días restantes calculados:", diasRestantes);

        const nuevoRecordatorio = {
            Icono: getIconoByTipo(),
            Titulo: titulo.trim(),
            Texto: descripcion.trim(),
            Fecha: fecha,
            FechaCompleta: fechaSeleccionada.toISOString(),
            Restante: diasRestantes // 🔥 Aquí agregamos los días restantes
        };

        console.log("Nuevo recordatorio:", nuevoRecordatorio);

        try {
            if (esEdicion) {
                // 🔥 Actualizar recordatorio existente
                console.log("Actualizando recordatorio en índice:", indiceEdicion);
                updateRecordatorio(indiceEdicion, nuevoRecordatorio);
            } else {
                // 🔥 Crear nuevo recordatorio
                console.log("Agregando nuevo recordatorio");
                addRecordatorio(nuevoRecordatorio);
            }
            
            cerrarModal();
        } catch (error) {
            console.log("Error al crear recordatorio:", error);
            Alert.alert("Error", "No se pudo guardar el recordatorio");
        }
    };

    const cerrarModal = () => {
        setModalVisible(false);
        setEsEdicion(false);
        setIndiceEdicion(null);
        setTitulo("");
        setDescripcion("");
        setFecha("");
        setFechaSeleccionada(new Date());
        setMostrarDatePicker(false);
        setMostrarTimePicker(false);
        
        // 🔥 Si se pasó onClose (para edición), ejecutarlo
        if (onClose) {
            onClose();
        }
    };

    return (
        <>
            {/* BOTÓN - Solo se muestra si NO estamos en modo edición */}
            {!recordatorioEditar && (
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <View className="p-5 bg-Blanco items-center gap-4">
                        <Icon tipo={getIconoByTipo()} size={45} />
                        <Text className="font-vs-light text-[16px]">{Texto}</Text>
                    </View>
                </TouchableOpacity>
            )}

            {/* MODAL */}
            <Modal visible={modalVisible} transparent animationType="fade">
                <View className="flex-1 bg-black/40 justify-center items-center">
                    <View className="bg-white p-6 rounded-2xl w-[80%] gap-7">

                        <Text className="font-vs-regular text-[18px] text-center">
                            {esEdicion ? `Modificar ${Texto}` : `Crear ${Texto}`}
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
                            multiline
                        />

                        {/* Selector de Fecha y Hora */}
                        <View className="gap-2">
                            <Text className="font-vs-regular text-[14px]">Fecha y Hora</Text>
                            
                            <View className="flex-row gap-2">
                                <TouchableOpacity 
                                    onPress={mostrarSelectorFecha}
                                    className="flex-1 border p-2 rounded items-center"
                                >
                                    <Text className="text-gray-700">
                                        {fechaSeleccionada.toLocaleDateString('es-ES')}
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    onPress={mostrarSelectorHora}
                                    className="flex-1 border p-2 rounded items-center"
                                >
                                    <Text className="text-gray-700">
                                        {fechaSeleccionada.toLocaleTimeString('es-ES', {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <Text className="text-xs text-gray-500 text-center">
                                {fecha || "Selecciona fecha y hora"}
                            </Text>
                            
                            {/* Muestra los días restantes en tiempo real */}
                            {fecha && (
                                <Text className="text-xs text-blue-600 text-center font-vs-regular">
                                    {calcularDiasRestantes(fechaSeleccionada)}
                                </Text>
                            )}
                        </View>

                        {/* Date Pickers */}
                        {mostrarDatePicker && (
                            <DateTimePicker
                                value={fechaSeleccionada}
                                mode="date"
                                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                onChange={onChangeFecha}
                                minimumDate={new Date()}
                            />
                        )}

                        {mostrarTimePicker && (
                            <DateTimePicker
                                value={fechaSeleccionada}
                                mode="time"
                                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                onChange={onChangeHora}
                            />
                        )}

                        <View className="flex-row justify-between mt-4">
                            <TouchableOpacity onPress={cerrarModal}>
                                <Text className="text-red-500">Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={crear}>
                                <Text className="text-blue-600">
                                    {esEdicion ? "Guardar" : "Crear"}
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </>
    );
}