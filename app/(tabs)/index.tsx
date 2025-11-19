import "@/global.css";
import Icon from '@/src/modules/core/components/Icons';
import Nav from '@/src/modules/core/components/Nav';
import { ThemedText } from '@/src/modules/core/components/themed-text';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
          <ThemedText>
            Esta es el area de home.
          </ThemedText>
          <View className="gap-5 py-10">
          <View className="flex-row">
              <Icon tipo="User" relleno="Lleno" color="Negro"/>
              <Icon tipo="Home" relleno="Lleno" color="Negro"/>
              <Icon tipo="Clock" relleno="Lleno" color="Negro"/>
              <Icon tipo="Book" relleno="Lleno" color="Negro"/>
              <Icon tipo="Chat" relleno="Lleno" color="Negro"/>
            </View>
            <View className="flex-row">
              <Icon tipo="User" relleno="Vacio" color="Negro"/>
              <Icon tipo="Home" relleno="Vacio" color="Negro"/>
              <Icon tipo="Clock" relleno="Vacio" color="Negro"/>
              <Icon tipo="Book" relleno="Vacio" color="Negro"/>
              <Icon tipo="Chat" relleno="Vacio" color="Negro"/>
            </View>
          </View>
          <View className="bg-black gap-5 py-10">
            <View className="flex-row">
              <Icon tipo="User" relleno="Lleno" color="Blanco"/>
              <Icon tipo="Home" relleno="Lleno" color="Blanco"/>
              <Icon tipo="Clock" relleno="Lleno" color="Blanco"/>
              <Icon tipo="Book" relleno="Lleno" color="Blanco"/>
              <Icon tipo="Chat" relleno="Lleno" color="Blanco"/>
            </View>
            <View className="flex-row">
              <Icon tipo="User" relleno="Vacio" color="Blanco"/>
              <Icon tipo="Home" relleno="Vacio" color="Blanco"/>
              <Icon tipo="Clock" relleno="Vacio" color="Blanco"/>
              <Icon tipo="Book" relleno="Vacio" color="Blanco"/>
              <Icon tipo="Chat" relleno="Vacio" color="Blanco"/>
            </View>
          </View>
          <View className=" flex-1 justify-end elevation-2xl">
            <Nav />
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
