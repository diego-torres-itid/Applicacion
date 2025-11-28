import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      // --- ESTADO ---
      userId: null,
      nombre: null,
      primer_apellido: null,
      segundo_apellido: null,
      fecha_nacimiento: null,

      peso: null,
      altura: null,

      isHydrated: false, // ← listo para la pantalla de carga

      // --- SETTERS ---
      setUserId: (id) => set({ userId: id }),

      setUserData: (data) =>
        set({
          nombre: data.nombre,
          primer_apellido: data.primer_apellido,
          segundo_apellido: data.segundo_apellido,
          fecha_nacimiento: data.fecha_nacimiento,
        }),

      setDatosBiometricos: (peso, altura) =>
        set({
          peso,
          altura,
        }),

      // --- LOGOUT ---
      clearUser: () =>
        set({
          userId: null,
          nombre: null,
          primer_apellido: null,
          segundo_apellido: null,
          fecha_nacimiento: null,
          peso: null,
          altura: null,
        }),
    }),

    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),

      onRehydrateStorage: () => (state) => {
        state.isHydrated = true;
      },
    }
  )
);
