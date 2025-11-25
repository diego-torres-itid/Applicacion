import { create } from "zustand";

export const useThemeStore = create(set => ({
  modoConsulta: false,
  toggleModoConsulta: () => set(state => ({ modoConsulta: !state.modoConsulta }))
}));
