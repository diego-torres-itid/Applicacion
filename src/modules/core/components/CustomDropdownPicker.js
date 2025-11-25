import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from './Icons';

export default function CustomDropdownPicker({ label, options, selectedValue, onValueChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const selectedOption = options.find(option => option.value === selectedValue);
    const displayLabel = selectedOption ? selectedOption.label : label;

    const handleSelect = (value) => {
        onValueChange(value);
        setIsOpen(false);
    };

    return (
        <View className="w-full mb-4">
            {/* Botón principal */}
            <View className={`w-full ${isOpen ? "border-2 border-teal-400 rounded-full" : "border-2 border-Blanco rounded-full"}`}>
            <TouchableOpacity
                onPress={() => setIsOpen(!isOpen)}
                activeOpacity={0.8}
                className={`
                    px-4 py-2 rounded-full border bg-Blanco
                    flex-row justify-between items-center
                    ${isOpen ? 'border-Primario' : 'border-GrisClaro'}
                `}
            >
                <Text
                    className={`text-base ${selectedValue ? 'text-GrisOscuro' : 'text-GrisClaro'}`}
                >
                    {displayLabel}
                </Text>

                {isOpen ? (
                    <Icon tipo="DownBlue" size={20} />
                ) : (
                    <Icon tipo="DownGray" size={20} />
                )}
            </TouchableOpacity>
            </View>

            {/* Menú desplegado */}
            {isOpen && (
                <View
                    className="
                        absolute top-[50px] w-full z-50
                        bg-Blanco rounded-2xl border border-GrisClaro overflow-hidden
                        max-h-44
                    "
                >
                    <ScrollView>
                        {options.map((option) => {
                            const isSelected = option.value === selectedValue;
                            return (
                                <TouchableOpacity
                                    key={option.value}
                                    className={`px-4 py-2 ${isSelected ? 'bg-Primario' : 'bg-white'}`}
                                    onPress={() => handleSelect(option.value)}
                                >
                                    <Text
                                        className={`text-base text-center ${
                                            isSelected ? 'text-white' : 'text-gray-900'
                                        }`}
                                    >
                                        {option.label}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>
            )}
        </View>
    );
}
