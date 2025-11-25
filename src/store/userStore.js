import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({



      userId: "fake-user-123", // 👈 simulación

      /*
      userId: null, //Esta es la correcta
      */

      
      setUserId: (id) => set({ userId: id }),
      clearUser: () => set({ userId: null }),
    }),
    {
      name: "user-storage", // Se guarda en AsyncStorage automáticamente
    }
  )
);
