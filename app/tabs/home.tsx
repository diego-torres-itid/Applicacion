import "@/global.css";
import Card from '@/src/modules/core/components/Card';
import CardRegistro from "@/src/modules/core/components/CardRegistro";
import Header from '@/src/modules/core/components/Header';
import Icon from '@/src/modules/core/components/Icons';
import Nav from '@/src/modules/core/components/Nav';
import React, { useEffect, useState } from "react";
import { BackHandler, Dimensions, ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const { width: screenWidth } = Dimensions.get("window");

const data = [
  { Icono: "Pulmones", IconoFocus: "", Titulo: "Cuestionario respiratorio", Descripcion: "Evaluar sintomas respiratorios relevantes" },
  { Icono: "DolorCabezaNegro", IconoFocus: "DolorCabeza", Titulo: "Sintomas actuales", Descripcion: "Evaluar como te sientes hoy rapidamente" },
];


export default function HomeScreen() {

  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (screenWidth * 0.6));
    setActiveIndex(index);
  };

  useEffect(() => {
    const handler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true // ← bloquea SOLO aquí
    );

    return () => handler.remove(); // ← al salir, vuelve a funcionar normal
  }, []);



  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-Blanco">

      <ScrollView
          className="flex-1 bg-Fondo"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >

        <View className="flex-1 bg-Fondo">
          <View>
            <Header tipo="Home"/>

            {/* Project */}
            <View className="flex-row justify-between mt-5 px-10 items-center">
              <Text className="font-vs-medium text-[28px]">Contesta los cuestionarios y mejora tu historial.</Text>
            </View>

            {/* Carrusel */}
            <View className="h-[230px]">
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
                      IconoFocus={item.IconoFocus}
                      Titulo={item.Titulo}
                      Descripcion={item.Descripcion}
                      isActive={activeIndex === index} // <- detecta si es el del medio
                      />
                  ))}
              </ScrollView>
            </View>
          </View>

          {/* Tasks */}
          <View className="flex-row gap-4  mt-5 px-10 items-center">
            <Text className="font-vs-medium text-[22px]">Encuestas semanales</Text>
            <Text className="font-vs-regular text-[14px]">(2 pendientes)</Text>
          </View>
          {/* Tasks */}
          <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                >
          <View className="flex-row gap-5 mt-5 px-10 items-center">
            <View className="items-center gap-2">
              <View className="p-3 bg-GrisOscuro rounded-full">
                <Icon tipo="Coronavirus" size={30} />
              </View>
              <Text className="font-vs-regular text-[12px]">Enfermedades</Text>
            </View>
            <View className="items-center gap-2">
              <View className="p-3 bg-GrisOscuro rounded-full">
                <Icon tipo="DolorCabeza" size={30} />
              </View>
              <Text className="font-vs-regular text-[12px]">Sintomas</Text>
            </View>
            <View className="items-center gap-2">
              <View className="p-3 bg-GrisOscuro rounded-full">
                <Icon tipo="Coronavirus" size={30} />
              </View>
              <Text className="font-vs-regular text-[12px]">Hbitos</Text>
            </View>
            <View className="items-center gap-2" >
              <View className="p-3 bg-GrisOscuro rounded-full">
                <Icon tipo="Caminar" size={30} />
              </View>
              <Text className="font-vs-regular text-[12px]">Factores</Text>
            </View>
            <View className="items-center gap-2">
              <View className="p-3 bg-GrisOscuro rounded-full">
                <Icon tipo="IndustriaBlanca" size={30} />
              </View>
              <Text className="font-vs-regular text-[12px]">Medicamentos</Text>
            </View>
          </View>
          </ScrollView>

          <View className="flex-row gap-4  mt-5 px-10 items-center">
            <Text className="font-vs-medium text-[22px]">Registros pendientes</Text>
            <Icon tipo="Cambiar" size={25}/>
          </View>

          


          <View className="px-10 mt-5 " style={{ maxHeight: 300 }}>
          <ScrollView 
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
          >
            <CardRegistro 
              Titulo="Migraña → Aun te duele la cabeza?" 
              Fecha="2/25/2025"
            />
            <CardRegistro 
              Titulo="Migraña → Aun te duele la cabeza?" 
              Fecha="2/25/2025"
            />
            <CardRegistro 
              Titulo="Migraña → Aun te duele la cabeza?" 
              Fecha="2/25/2025"
            />
            <CardRegistro 
              Titulo="Migraña → Aun te duele la cabeza?" 
              Fecha="2/25/2025"
            />
            <CardRegistro 
              Titulo="Migraña → Aun te duele la cabeza?" 
              Fecha="2/25/2025"
            />
            <CardRegistro 
              Titulo="Migraña → Aun te duele la cabeza?" 
              Fecha="2/25/2025"
            />
            <CardRegistro 
              Titulo="Migraña → Aun te duele la cabeza?" 
              Fecha="2/25/2025"
            />
            <CardRegistro 
              Titulo="Migraña → Aun te duele la cabeza?" 
              Fecha="2/25/2025"
            />
            <CardRegistro 
              Titulo="Migraña → Aun te duele la cabeza?" 
              Fecha="2/25/2025"
            />
            <CardRegistro 
              Titulo="Migraña → Aun te duele la cabeza?" 
              Fecha="2/25/2025"
            />
        </ScrollView>
        </View>



        </View> 
        </ScrollView>
        <View className="justify-end">
          <Nav screenActual="home" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}