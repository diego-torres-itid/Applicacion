import { COLORS } from "@/constants/colors";
import "@/global.css";
import { Pressable, Text } from "react-native";

export default function Button({
    text,
    color = "Negro",
    variant = "Fill",
    textColor = "Blanco",
    onPress,
    disabled = false,
    }) {
    const bgColor = variant === "Fill" ? COLORS[color] : "Transparent";
    const borderColor = COLORS[color];

    const finalTextColor =
    textColor !== null
        ? COLORS[textColor] || textColor
        : variant === "filled"
        ? "#fff"
        : COLORS[color];
    return (
        <Pressable
            onPress={onPress}
            className="py-2 rounded-full items-center w-full border-2"
            style={{
                backgroundColor: bgColor,
                borderColor: borderColor,
            }}>
            <Text
                className="text-[20px] font-vs-extralighttext"
                style={{ color: finalTextColor }}>{text}
            </Text>
        </Pressable>
    );
}
