import { create } from "zustand";

export const useThemeStore = create(set => ({
  modoConsulta: false,

  toggleModoConsulta: () =>
    set(state => {
      const nuevoValor = !state.modoConsulta;

      console.log(
        "🔄 [themeStore] modoConsulta =>",
        nuevoValor ? "ACTIVADO" : "DESACTIVADO"
      );

      return { modoConsulta: nuevoValor };
    })
}));
