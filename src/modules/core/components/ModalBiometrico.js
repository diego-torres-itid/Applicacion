import { useUserStore } from "@/src/store/userStore";
import React, { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import Button from "./Buttons";
import InputCustom from "./Input";

export default function ModalBiometricc({ visible, onClose }) {
    const userId = useUserStore(state => state.userId);

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [loading, setLoading] = useState(false);

    const guardar = async () => {
        if (!peso || !altura) {
          Alert.alert("Error", "Debes llenar peso y altura.");
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
                id: userId,
                peso: peso.toString(),
                altura: altura.toString(),
                accion: "biometricos",
                subaccion: "save"
            }),
            }
          );
      
          const data = await response.json();
          console.log("API response:", data);
      
          if (!response.ok) {
            Alert.alert("Error", data.detail || "Hubo un error enviando los datos.");
            return;
          }
      
          Alert.alert("Éxito", "Datos guardados correctamente.");
          onClose();
      
        } catch (error) {
          Alert.alert("Error", error.message);
        } finally {
          setLoading(false);
        }
      };
      



    

    return (
        <Modal
        visible={visible}
        transparent
        animationType="fade"
        >
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
    );
}
