import { create } from "zustand";

export const useChatStore = create((set) => ({
    mensajes: [],

    addMensaje: (msg) =>
        set((state) => ({
            mensajes: [...state.mensajes, msg],
        })),

    clearMensajes: () =>
        set(() => ({ mensajes: [] })),
}));
