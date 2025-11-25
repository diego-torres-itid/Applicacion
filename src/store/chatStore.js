import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useChatStore = create(
  persist(
    (set) => ({
      mensajes: [],

      addMensaje: (msg) =>
        set((state) => ({ mensajes: [...state.mensajes, msg] })),

      clearMensajes: () => set(() => ({ mensajes: [] })),
    }),
    {
      name: "chat-storage",
      getStorage: () => AsyncStorage,
      onRehydrateStorage: () => (state, error) => {
        if (error) console.warn("Error al rehidratar chat-storage:", error);
      },
    }
  )
);
