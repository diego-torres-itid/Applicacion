import "@/global.css";
import * as React from "react";
import { Pressable, View } from "react-native";
import Icon from './Icons';
export default function Nav(){
    const [selected, setSelected] = React.useState("Home"); 

	return (
        <View>
            <View className="bg-gray-800 h-4 border rounded-t-lg"></View>
            <View className="flex-row justify-evenly py-4 items-center">
                <Pressable onPress={() => setSelected("Home")}>
                    <Icon tipo="Home" relleno={selected === "Home" ? "Lleno" : "Vacio"} color="Negro"/>
                </Pressable>
                <Pressable onPress={() => setSelected("Clock")}>
                    <Icon tipo="Clock" relleno={selected === "Clock" ? "Lleno" : "Vacio"} color="Negro" size={38}/>
                </Pressable>
                <Pressable onPress={() => setSelected("Chat")}>
                    <View className="bg-gray-800 rounded-full p-3">
                        <Icon tipo="Chat" relleno={selected === "Chat" ? "Lleno" : "Vacio"} color="Blanco"/>
                    </View>
                </Pressable>
                <Pressable onPress={() => setSelected("Book")}>
                    <Icon tipo="Book" relleno={selected === "Book" ? "Lleno" : "Vacio"} color="Negro"/>
                </Pressable>
                <Pressable onPress={() => setSelected("User")}>
                    <Icon tipo="User" relleno={selected === "User" ? "Lleno" : "Vacio"} color="Negro"/>
                </Pressable>
            </View>
        </View>
    );
};	