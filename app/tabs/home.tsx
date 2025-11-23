import "@/global.css";
import Card from '@/src/modules/core/components/Card';
import Icon from '@/src/modules/core/components/Icons';
import Nav from '@/src/modules/core/components/Nav';
import React, { useState } from "react";
import { Dimensions, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const { width: screenWidth } = Dimensions.get("window");

const data = [
  { Icono: "SecureGray", Titulo: "Game Design", Descripcion: "Create menu in dashboard & Make user flow" },
  { Icono: "UserGray", Titulo: "Decission", Descripcion: "Edit Icons for the team task for next week" },
  { Icono: "HealthBlue", Titulo: "Historial", Descripcion: "Tu historial clínico" },
];


export default function HomeScreen() {

  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (screenWidth * 0.6));
    setActiveIndex(index);
  };


  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-Fondo">
        <View className="flex-1">

          {/*Bienvenido*/}
          <View className="flex-row items-center pt-10 px-10 justify-between">
            <View className="flex-row items-center gap-3">
              <Icon tipo="UserGray" />
              <Text className="font-vs-semiboldtext text-xl">Bienvenido (Nombre)</Text>
            </View>
            <View className="flex-row gap-2">
              <Icon tipo="Notification" size={25}/>
              <Icon tipo="Config" size={25}/>
            </View>
          </View>

          {/* Project */}
          <View className="flex-row justify-between mt-10 px-10 items-center">
            <Text className="font-vs-bold text-3xl">Project</Text>
            <Pressable>
              <Text className="font-vs-light text-lg">All Task</Text>
            </Pressable>
          </View>

          {/* Carrusel */}
          <View className="h-[280px]">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={screenWidth * 0.6}
              decelerationRate={0.2} // <--- entre 0 y 1, más pequeño = más lento
              onScroll={handleScroll}
              scrollEventThrottle={16}
              contentContainerStyle={{
                paddingHorizontal: (screenWidth - screenWidth * 0.8) / 2,
                paddingRight: (screenWidth - screenWidth * 0.6) / 2, 
                alignItems: "flex-end", // 👈 todas las cards pegadas abajo     // espacio extra para última card
              }}>
                {data.map((item, index) => (
                  <Card
                    key={index}
                    Icono={item.Icono}
                    Titulo={item.Titulo}
                    Descripcion={item.Descripcion}
                    isActive={activeIndex === index} // <- detecta si es el del medio
                    />
                ))}
            </ScrollView>
          </View>
        </View>

        {/* Tasks */}
          <View className="flex-row justify-between mt-48 px-10 items-center ">
            <Text className="font-vs-bold text-3xl">Tasks</Text>
            <Pressable>
              <Text className="font-vs-light text-lg">View All</Text>
            </Pressable>
          </View>
          {/* Tasks */}
          <View className="flex-row justify-between mt-5 px-10 items-center">
            <View className="border-GrisOscuro p-3 border-[1px] rounded-full">
              <Icon tipo="HearthRate" size={30} />
            </View>
            <View className="border-GrisOscuro p-3 border-[1px] rounded-full">
              <Icon tipo="SecureGray" size={30} />
            </View>
            <View className="border-GrisOscuro p-3 border-[1px] rounded-full">
              <Icon tipo="SecureGray" size={30} />
            </View>
            <View className="border-GrisOscuro p-3 border-[1px] rounded-full">
              <Icon tipo="SecureGray" size={30} />
            </View>
            <View className="border-GrisOscuro p-3 border-[1px] rounded-full">
              <Icon tipo="SecureGray" size={30} />
            </View>
          </View>



        <View className="flex-1 justify-end">
          <Nav screenActual="home" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}