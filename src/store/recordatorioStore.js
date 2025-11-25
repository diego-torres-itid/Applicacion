import { create } from "zustand";

export const useRecordatorioStore = create(set => ({
    recordatorios: [],

    addRecordatorio: (nuevo) =>
        set(state => ({
            recordatorios: [...state.recordatorios, nuevo]
        })),

    deleteRecordatorio: (index) =>
        set(state => ({
            recordatorios: state.recordatorios.filter((_, i) => i !== index)
        }))
}));
