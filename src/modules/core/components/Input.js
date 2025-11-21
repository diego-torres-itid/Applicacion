import "@/global.css";
import { useState } from "react";
import { TextInput, View } from "react-native";
import Icon from "./Icons";

export default function InputCustom({
    placeholder = "Nombre (s)",
    icon = "UserGray",
    iconfocused = "UserBlue",
    onFocusChange,
    ...props
}) {
    const [focused, setFocused] = useState(false);

    return (
        <View className={`w-full ${focused ? "border-2 border-teal-400 rounded-full" : "p-1 border-none"}`}>
            <View
                className={`w-full flex-row items-center py-1 gap-5 pl-6 rounded-full bg-white
                ${focused ? "border-2 border-Primario" : "border border-GrisClaro"}`}
            >
                <Icon tipo={focused ? iconfocused : icon} size={30} />

                <TextInput
                    placeholder={focused ? "" : placeholder}
                    className="font-vs-light text-xl flex-1"
                    onFocus={(e) => {
                        setFocused(true);
                        onFocusChange && onFocusChange(true);
                        props.onFocus && props.onFocus(e);
                    }}
                    onBlur={(e) => {
                        setFocused(false);
                        onFocusChange && onFocusChange(false);
                        props.onBlur && props.onBlur(e);
                    }}
                    {...props}
                />
            </View>
        </View>
    );
}
