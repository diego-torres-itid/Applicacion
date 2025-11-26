import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      userId: null,
      nombre: null,
      primer_apellido: null,
      segundo_apellido: null,

      setUserId: (id) => set({ userId: id }),

      setUserData: (data) =>
        set({
          nombre: data.nombre,
          primer_apellido: data.primer_apellido,
          segundo_apellido: data.segundo_apellido,
        }),

      clearUser: () =>
        set({
          userId: null,
          nombre: null,
          primer_apellido: null,
          segundo_apellido: null,
        }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
