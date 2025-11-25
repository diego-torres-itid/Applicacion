import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

export default function CustomSelect({ label, options, value, onChange }) {
    const [open, setOpen] = useState(false);
    const animatedHeight = useState(new Animated.Value(0))[0];

    const toggle = () => {
        setOpen(!open);

        Animated.timing(animatedHeight, {
            toValue: open ? 0 : options.length * 45,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    return (
        <View style={{ marginBottom: 16 }}>

            {/* Label */}
            {label && (
                <Text style={{ fontSize: 16, marginBottom: 4, color: "#666" }}>
                    {label}
                </Text>
            )}

            {/* Caja principal */}
            <TouchableOpacity
                onPress={toggle}
                style={{
                    borderWidth: 1,
                    borderColor: "#4ac2b8",
                    borderRadius: 16,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
                activeOpacity={0.7}
            >
                <Text style={{ fontSize: 16 }}>
                    {value || "Selecciona una opción"}
                </Text>

                <Ionicons
                    name={open ? "chevron-up" : "chevron-down"}
                    size={20}
                    color="black"
                />
            </TouchableOpacity>

            {/* Dropdown */}
            <Animated.View
                style={{
                    height: animatedHeight,
                    overflow: "hidden",
                }}
            >
                {options.map((opt, idx) => {
                    const seleccionado = opt === value;

                    return (
                        <TouchableOpacity
                            key={idx}
                            onPress={() => {
                                onChange(opt);
                                toggle();
                            }}
                            style={{
                                paddingHorizontal: 16,
                                paddingVertical: 12,
                                backgroundColor: seleccionado ? "#74c7c3" : "white",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: seleccionado ? "white" : "#444",
                                }}
                            >
                                {opt}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </Animated.View>
        </View>
    );
}
