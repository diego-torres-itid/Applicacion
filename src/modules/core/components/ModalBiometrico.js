import { useUserStore } from "@/src/store/userStore";
import React, { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import Alerta from "./Alerta";
import Button from "./Buttons";
import { obtenerFechaActual } from "./configuracion";
import InputCustom from "./Input";

export default function ModalBiometricc({ visible, onClose }) {

  const userId = useUserStore(state => state.userId);

  // 👉 Agregar esta línea
  const setDatosBiometricos = useUserStore(state => state.setDatosBiometricos);

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [loading, setLoading] = useState(false);

  const [alertas, setAlertas] = useState([]);

  const agregarAlerta = (texto, color = "#4784ab", icono = "info") => {
    const id = Date.now();

    setAlertas(prev => [...prev, { id, texto, color, icono }]);

    setTimeout(() => {
      setAlertas(prev => prev.filter(a => a.id !== id));
    }, 4000);
  };

  const guardar = async () => {
    const fecha = obtenerFechaActual();

    if (!peso || !altura) {
      agregarAlerta("Completa todos los campos", "#ff3b30", "error");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://taina-preneural-stereochromatically.ngrok-free.dev/usuario/datos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_persona: userId,
            peso: peso.toString(),
            altura: altura.toString(),
            fecha: fecha,
            accion: "biometricos",
            subaccion: "save"
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || data.success === false) {
        agregarAlerta(
          data.detail || "Error al guardar los datos",
          "#ff4140",
          "error"
        );
        return;
      }

      // 🔥🔥🔥 Actualizar la STORE
      setDatosBiometricos(peso, altura);

      agregarAlerta("Datos guardados correctamente", "#3ddb7e", "success");

      onClose();

    } catch (error) {
      agregarAlerta("Error de conexión con el servidor", "#ff4140", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {alertas.map(alerta => (
        <View key={alerta.id} className="absolute top-20 w-full items-center z-10">
          <Alerta
            Texto={alerta.texto}
            Color={alerta.color}
            Icono={alerta.icono}
          />
        </View>
      ))}

      <Modal visible={visible} transparent animationType="fade">
        <Pressable
          className="flex-1 bg-black/50 justify-center items-center"
          onPress={onClose}
        >
          <Pressable
            className="w-11/12 max-w-md bg-white rounded-2xl p-6"
            onPress={(e) => e.stopPropagation()}
          >
            <Text className="text-xl font-vs-semibold text-center mb-4">
              Registrar biométricos
            </Text>

            <View className="gap-4">

              <InputCustom
                placeholder="Peso (kg)"
                icon="Mancuerna"
                iconfocused="Mancuerna"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
              />

              <InputCustom
                placeholder="Altura (cm)"
                icon="Regla"
                iconfocused="Regla"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
              />

              <Button
                text="Guardar"
                color="Primario"
                variant="Fill"
                onPress={guardar}
                disabled={loading}
              />
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
