import "@/global.css";
import Button from "@/src/modules/core/components/Buttons";
import Icon from "@/src/modules/core/components/Icons";
import InputCustom from "@/src/modules/core/components/Input";
import { useRouter } from "expo-router";
import * as React from "react";
import { Animated, Dimensions, Pressable, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// @ts-ignore
import Medicine from "../../src/assets/images/undraw-medicine.svg";

export default function Etapa4() {
    const router = useRouter();

    const screenHeight = Dimensions.get("window").height;

    const overlayOpacity = React.useRef(new Animated.Value(0)).current;
    const [panelVisible, setPanelVisible] = React.useState(false);

    // Animación panel
    const translateY = React.useRef(new Animated.Value(screenHeight)).current;

    const subirPanel = () => {
        setPanelVisible(true);
    
        Animated.parallel([
            Animated.timing(translateY, {
                toValue: screenHeight * 0.15,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.timing(overlayOpacity, {
                toValue: 0.5, // oscurecido
                duration: 600,
                useNativeDriver: true,
            })
        ]).start();
    };
    const bajarPanel = () => {
        Animated.parallel([
            Animated.timing(translateY, {
                toValue: screenHeight, // lo manda hasta abajo
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.timing(overlayOpacity, {
                toValue: 0, // transparente
                duration: 600,
                useNativeDriver: true,
            })
        ]).start(() => {
            // Se ejecuta al finalizar la animación
            setPanelVisible(false);
        });
    };



    // Modulos independientes de mostrar contraseñas
    //Iniciar Sesion
    const [loginPasswordFocused, setLoginPasswordFocused] = React.useState(false);
    const [loginPasswordVisible, setLoginPasswordVisible] = React.useState(false);

    const eyeIconLogin = loginPasswordVisible
    ? loginPasswordFocused ? "EyeOpenBlue" : "EyeOpenGray"
    : loginPasswordFocused ? "EyeCloseBlue" : "EyeCloseGray";
    // Crear cuenta contraseña
    const [signupPassword1Focused, setSignupPassword1Focused] = React.useState(false);
    const [signupPassword1Visible, setSignupPassword1Visible] = React.useState(false);

    const eyeIconSignup1 = signupPassword1Visible
    ? signupPassword1Focused ? "EyeOpenBlue" : "EyeOpenGray"
    : signupPassword1Focused ? "EyeCloseBlue" : "EyeCloseGray";
    // Crear cuenta confirmar contraseña
    const [signupPassword2Focused, setSignupPassword2Focused] = React.useState(false);
    const [signupPassword2Visible, setSignupPassword2Visible] = React.useState(false);

    const eyeIconSignup2 = signupPassword2Visible
    ? signupPassword2Focused ? "EyeOpenBlue" : "EyeOpenGray"
    : signupPassword2Focused ? "EyeCloseBlue" : "EyeCloseGray";




    // Slider
    const [activeScreen, setActiveScreen] = React.useState("login");
    const translateX = React.useRef(new Animated.Value(0)).current;
    // @ts-ignore
    const moveSlider = (to) => {
        setActiveScreen(to);

        Animated.spring(translateX, {
            toValue: to === "login" ? 0 : 150,
            useNativeDriver: true,
        }).start();
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 justify-center items-center px-10 bg-Fondo">
                

                {/* Screen normal */}
                <View className="gap-10 items-center">
                    <Medicine width={230} height={230} />
                    <View className="gap-10">
                        <Text className="font-vs-semibold text-xl">Tu salud, más simple que nunca</Text>
                        <Text className="font-vs-extralight text-xl">
                            Organiza, entiende y cuida tu salud con una app diseñada para acompañarte en cada paso.
                        </Text>
                    </View>
                </View>
                <View className="absolute w-4/5 bottom-40">
                    <Button 
                        text="Next"
                        textColor="Blanco" 
                        color="Primario" 
                        variant="Fill" 
                        onPress={subirPanel}
                    />
                </View>
                <View className="absolute top-40 flex-row gap-3 justify-center">
                    <View className="p-0.5 w-1/5 bg-Blanco border-2 border-gray-200 rounded-full"></View>
                    <View className="p-0.5 w-1/5 bg-Blanco border-2 border-gray-200 rounded-full"></View>
                    <View className="p-0.5 w-1/5 bg-Primario rounded-full"></View>
                </View>
                <Pressable className="absolute top-24 left-5" onPress={() => router.back()}>
                    <Icon tipo="BackGray" size={30} />
                </Pressable>







                {panelVisible ? (
                    <Animated.View
                        pointerEvents="none"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "#000",
                            opacity: overlayOpacity,
                        }}
                    />
                ) : null}
                {/* PANEL ANIMADO */}
                <Animated.View
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        height: screenHeight * 0.75,
                        backgroundColor: "#ffffff",
                        transform: [{ translateY }],
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        shadowColor: "#000",
                        shadowOpacity: 0.15,
                        shadowOffset: { width: 0, height: -4 },
                        shadowRadius: 10,
                        elevation: 5,
                    }}
                >

                    { /* Close */}
                    <Pressable className="absolute right-10 top-10" onPress={bajarPanel}>
                            <Icon tipo="CloseGray" size={30}/>
                    </Pressable>


                    <View className="items-center mt-20 gap-5">
                        <Text className="font-vs-medium text-3xl">
                            {activeScreen === "login" ? "Iniciar Sesion" : "Registarse"}
                        </Text>




                        {/* ---- SLIDER ---- */}
                        <View className=" mt-5 mb-2 flex-row bg-GrisMuyClaro w-[300px] rounded-full overflow-hidden items-center border-Primario border-2 m-0 p-0">

                            <Animated.View
                                style={{
                                    position: "absolute",
                                    width: 150,
                                    height: "100%",
                                    backgroundColor: "#5EBBB5",
                                    borderRadius: 999,
                                    transform: [{ translateX }],
                                }}
                            />
                            <Pressable
                                onPress={() => moveSlider("login")}
                                className="w-[150px] h-10 justify-center items-center">
                                <Text className={`text-lg ${activeScreen === "login" ? "text-white font font-vs-semibold" : "text-black"}`}>
                                    Iniciar Sesion
                                </Text>
                            </Pressable>

                            <Pressable
                                onPress={() => moveSlider("signup")}
                                className="w-[150px] h-10 justify-center items-center">
                                <Text className={`text-lg ${activeScreen === "signup" ? "text-white font-vs-semibold" : "text-black"}`}>
                                    Registrarse
                                </Text>
                            </Pressable>
                        </View>
                        {/* ---- END SLIDER ---- */}
                        <View className="w-full h-[1px] bg-gray-300 my-3" />



                        {/* LOGIN FORM */}
                        {activeScreen === "login" && (
                            <>
                                
                                
                                <View className="w-11/12">
                                {/* @ts-ignore */}
                                    <InputCustom 
                                        placeholder="Email" 
                                        icon="MailGray" 
                                        iconfocused="MailBlue" 
                                        />
                                </View>
                                <View>
                                    <View className="w-11/12">
                                        <InputCustom
                                            placeholder="Contraseña"
                                            icon="SecureGray"
                                            iconfocused="SecureBlue"
                                            secureTextEntry={!loginPasswordVisible}
                                            onFocusChange={setLoginPasswordFocused}
                                        />
                                    </View>
                                    <Pressable
                                        className="absolute right-10 top-5"
                                        onPress={() => setLoginPasswordVisible(!loginPasswordVisible)}>
                                        <Icon tipo={eyeIconLogin} size={25} />
                                    </Pressable>
                                </View>

                                <View className="w-3/4 mt-32">
                                    <Button
                                        text="Continuar"
                                        color="Primario"
                                        variant="Fill"
                                        textColor="Blanco"
                                        onPress={subirPanel}
                                    />
                                </View>
                            </>
                        )}

                        {/* SIGN UP FORM */}
                        {activeScreen === "signup" && (
                            <>

                                <View className="w-11/12">
                                    {/* @ts-ignore */}
                                    <InputCustom 
                                    placeholder="Email" 
                                    icon="MailGray" 
                                    iconfocused="MailBlue" 
                                    />
                                </View>
                                <View>
                                    <View className="w-11/12">
                                        <InputCustom
                                            placeholder="Contraseña"
                                            icon="SecureGray"
                                            iconfocused="SecureBlue"
                                            secureTextEntry={!signupPassword1Visible}
                                            onFocusChange={setSignupPassword1Focused}
                                        />
                                    </View>
                                    <Pressable
                                        className="absolute right-10 top-5"
                                        onPress={() => setSignupPassword1Visible(!signupPassword1Visible)}>
                                        <Icon tipo={eyeIconSignup1} size={25} />
                                    </Pressable>
                                </View>
                                <View>
                                    <View className="w-11/12">
                                        <InputCustom
                                            placeholder="Contraseña"
                                            icon="SecureGray"
                                            iconfocused="SecureBlue"
                                            secureTextEntry={!signupPassword2Visible}
                                            onFocusChange={setSignupPassword2Focused}
                                        />
                                    </View>
                                    <Pressable
                                        className="absolute right-10 top-5"
                                        onPress={() => setSignupPassword2Visible(!signupPassword2Visible)}>
                                        <Icon tipo={eyeIconSignup2} size={25} />
                                    </Pressable>
                                </View>

                                <View className="w-3/4 mt-10">
                                    <Button
                                        text="Crear cuenta"
                                        color="Primario"
                                        variant="Fill"
                                        textColor="Blanco"
                                        onPress={() => {}}
                                    />
                                </View>
                            </>
                        )}
                    </View>
                </Animated.View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
