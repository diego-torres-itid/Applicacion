import Button from "@/src/modules/core/components/Buttons";
import Icon from "@/src/modules/core/components/Icons";
import InputCustom from "@/src/modules/core/components/Input";
import { useUserStore } from "@/src/store/userStore";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Animated, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Registro() {


    {/* CREAR CUENTA */}
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    { /* @ts-ignore */}
    const validarEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };


    {/* INICIAR SESION */}
    const [loginEmail, setLoginEmail] = React.useState("");
    const [loginPassword, setLoginPassword] = React.useState("");

    const setUserId = useUserStore.getState().setUserId;



    const handleLogin = async () => {
        if (!loginEmail || !loginPassword) {
            alert("Por favor llena todos los campos");
            return;
        }
        const payload = {
            email: loginEmail,
            password: loginPassword
        };
        console.log("Mensaje enviado a API:", JSON.stringify(payload, null, 2));
    
        try {
            const response = await fetch("https://taina-preneural-stereochromatically.ngrok-free.dev/usuario/datos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: loginEmail,
                    password: loginPassword
                })
            });
    
            const data = await response.json();
            console.log("Respuesta API:", data);
    
            if (!response.ok) {
                alert(data.message || "Error al iniciar sesión");
                return;
            }
    
            // Guardar ID en zustand
            setUserId(data.id);

            // Ir al home
            router.push("/tabs/home");
        
    
        } catch (error) {
            alert("Error de conexión");
        }
    };
    











    const translateY = useRef(new Animated.Value(0)).current; // empieza en 0

    const closeModal = () => {
        Animated.timing(translateY, {
            toValue: 1000, // baja fuera de pantalla
            duration: 500, // tiempo lento
            useNativeDriver: true,
        }).start(() => {
            router.back(); // cerrar la pantalla solo después
        });
    };

    const router = useRouter();
    const [activeScreen, setActiveScreen] = useState("login");

    // 1. Configuración de la animación
    const translateX = useRef(new Animated.Value(0)).current;

    const moveSlider = (screen: "login" | "signup") => {
        setActiveScreen(screen);
        Animated.spring(translateX, {
            toValue: screen === "login" ? 0 : 150,
            useNativeDriver: true,
            friction: 6,
            tension: 40
        }).start();
    };

    // Log in
    const [loginPasswordFocused, setLoginPasswordFocused] = React.useState(false);
    const [loginPasswordVisible, setLoginPasswordVisible] = React.useState(false);

    const eyeIconLogin = loginPasswordVisible
        ? loginPasswordFocused ? "EyeOpenBlue" : "EyeOpenGray"
        : loginPasswordFocused ? "EyeCloseBlue" : "EyeCloseGray";
        
    // Sign up
    const [signupPassword1Focused, setSignupPassword1Focused] = React.useState(false);
    const [signupPassword1Visible, setSignupPassword1Visible] = React.useState(false);

    const eyeIconSignup1 = signupPassword1Visible
        ? signupPassword1Focused ? "EyeOpenBlue" : "EyeOpenGray"
        : signupPassword1Focused ? "EyeCloseBlue" : "EyeCloseGray";
        
    const [signupPassword2Focused, setSignupPassword2Focused] = React.useState(false);
    const [signupPassword2Visible, setSignupPassword2Visible] = React.useState(false);

    const eyeIconSignup2 = signupPassword2Visible
        ? signupPassword2Focused ? "EyeOpenBlue" : "EyeOpenGray"
        : signupPassword2Focused ? "EyeCloseBlue" : "EyeCloseGray";

    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1" edges={['top', 'left', 'right']}>
                
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
                >
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1 }}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                    >
                        
                        <Pressable 
                            className="flex-1" 
                            onPress={closeModal} // Opcional: Tocar arriba cierra o hace back
                        />
                        <Animated.View className="bg-Blanco rounded-t-3xl px-5 py-10 items-center w-full min-h-[87%]"
                        style={{ transform: [{ translateY }] }}>
                            
                            <Pressable className="absolute right-10 top-10" onPress={closeModal}>
                                <Icon tipo="CloseGray" size={30} />
                            </Pressable>
                            
                            <Text className="font-vs-bold text-3xl pb-10">
                                {activeScreen === "login" ? "Iniciar Sesión" : "Registrarse"}
                            </Text>

                            {/* ---- SLIDER ANIMADO ---- */}
                            <View className="flex-row w-[300px] h-10 rounded-full border-2 border-Primario overflow-hidden mb-5 relative bg-transparent">
                                <Animated.View 
                                    className="absolute top-0 bottom-0 left-0 w-1/2 bg-Primario h-full rounded-full"
                                    style={{ transform: [{ translateX }] }} 
                                />
                                <Pressable
                                    onPress={() => moveSlider("login")}
                                    className="flex-1 justify-center items-center z-10"
                                >
                                    <Text className={`text-lg ${activeScreen === "login" ? "text-Blanco font-vs-semibold" : "text-black font-vs-light"}`}>
                                        Iniciar Sesión
                                    </Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => moveSlider("signup")}
                                    className="flex-1 justify-center items-center z-10"
                                >
                                    <Text className={`text-lg ${activeScreen === "signup" ? "text-Blanco font-vs-semibold" : "text-black font-vs-light"}`}>
                                        Registrarse
                                    </Text>
                                </Pressable>
                            </View>
                            {/* ---- END SLIDER ---- */}

                            <View className="w-full h-0.5 bg-GrisClarisimo my-5 mb-10" />






                            {/* LOGIN FORM */}
                            {activeScreen === "login" && (
                                <>
                                    <View className="w-full mb-5 relative">
                                        { /* @ts-ignore */}
                                        <InputCustom 
                                            placeholder="Email" 
                                            icon="MailGray" 
                                            iconfocused="MailBlue" 
                                            value={loginEmail}
                                            onChangeText={setLoginEmail}
                                        />
                                    </View>
                                    <View className="w-full mb-5 relative flex-row items-center">
                                        { /* @ts-ignore */}
                                        <InputCustom
                                            placeholder="Contraseña"
                                            icon="SecureGray"
                                            iconfocused="SecureBlue"
                                            secureTextEntry={!loginPasswordVisible}
                                            value={loginPassword}
                                            onChangeText={setLoginPassword}
                                            onFocusChange={setLoginPasswordFocused}
                                        />
                                        <Pressable
                                            className="right-14"
                                            onPress={() => setLoginPasswordVisible(!loginPasswordVisible)}
                                        >
                                            <Icon tipo={eyeIconLogin} size={25} />
                                        </Pressable>
                                    </View>
                                    <View className="w-4/5 mt-5 items-center">
                                        <Button 
                                            text="Continuar" 
                                            color="Primario" 
                                            variant="Fill" 
                                            textColor="Blanco" 
                                            onPress={handleLogin} />
                                    </View>
                                </>
                            )}







                            {/* SIGN UP FORM */}
                            {activeScreen === "signup" && (
                                <>
                                    <View className="w-full mb-5 relative">
                                        { /* @ts-ignore */}
                                        <InputCustom    
                                            placeholder="Email" 
                                            icon="MailGray" 
                                            iconfocused="MailBlue" 
                                            value={email} 
                                            onChangeText={setEmail}/>
                                    </View>
                                    <View className="w-full mb-5 relative flex-row items-center">
                                        { /* @ts-ignore */}
                                        <InputCustom
                                            placeholder="Contraseña"
                                            icon="SecureGray"
                                            iconfocused="SecureBlue"
                                            secureTextEntry={!signupPassword1Visible}
                                            onFocusChange={setSignupPassword1Focused}
                                            value={password}
                                            onChangeText={setPassword}
                                        />
                                        <Pressable
                                            className="right-14"
                                            onPress={() => setSignupPassword1Visible(!signupPassword1Visible)}
                                        >
                                            <Icon tipo={eyeIconSignup1} size={25} />
                                        </Pressable>
                                    </View>
                                    <View className="w-full mb-5 relative flex-row items-center">
                                        { /* @ts-ignore */}
                                        <InputCustom
                                            placeholder="Repetir Contraseña"
                                            icon="SecureGray"
                                            iconfocused="SecureBlue"
                                            secureTextEntry={!signupPassword2Visible}
                                            onFocusChange={setSignupPassword2Focused}
                                            value={repeatPassword}
                                            onChangeText={setRepeatPassword}

                                        />
                                        <Pressable
                                            className="right-14"
                                            onPress={() => setSignupPassword2Visible(!signupPassword2Visible)}
                                        >
                                            <Icon tipo={eyeIconSignup2} size={25} />
                                        </Pressable>
                                    </View>
                                    <View className="w-4/5 mt-5 items-center">
                                        <Button 
                                            text="Crear cuenta" 
                                            color="Primario" 
                                            variant="Fill" 
                                            textColor="Blanco" 
                                            onPress={() => {
                                                if (!email || !password || !repeatPassword) {
                                                    alert("Por favor llena todos los campos.");
                                                    return;
                                                }
                                        
                                                // Validar email correcto
                                                if (!validarEmail(email)) {
                                                    alert("Ingresa un correo válido.");
                                                    return;
                                                }
                                        
                                                // Validar contraseñas iguales
                                                if (password !== repeatPassword) {
                                                    alert("Las contraseñas no coinciden.");
                                                    return;
                                                }
                                        
                                                // Validar longitud mínima (opcional pero recomendado)
                                                if (password.length < 6) {
                                                    alert("La contraseña debe tener al menos 6 caracteres.");
                                                    return;
                                                }
                                        
                                                // Si todo está bien, avanzar
                                                router.push({
                                                    pathname: "./formulario",
                                                    params: {
                                                        email,
                                                        password,
                                                    },
                                                });
                                            }}
                                        />
                                    </View>
                                </>
                            )}









                        </Animated.View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}