import { useUserStore } from "@/src/store/userStore";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const userId = useUserStore(state => state.userId);
  const isHydrated = useUserStore(state => state.isHydrated);
  
  useEffect(() => {
    if (!isHydrated) return; // ⬅️ ESPERA A QUE HIDRATE
    if (userId) {
      router.replace("/tabs/home");
    } else {
      router.replace("/Inicio/etapa1");
    }
  }, [userId, isHydrated]);

  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" />
    </View>
  );
}
