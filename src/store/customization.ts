import { create } from "zustand";

interface CustomizationStore {
  bodyColor: string | null;
  bodySecondaryColor: string | null;
  hubcapColor: string | null;
  setBodyColor: (value: string | null) => void;
  setBodySecondaryColor: (value: string | null) => void;
  setHubcapColor: (value: string | null) => void;
}

export const useCustomizationStore = create<CustomizationStore>((set) => ({
  bodyColor: null,
  bodySecondaryColor: null,
  hubcapColor: null,
  setBodyColor: (value: string | null) => set({ bodyColor: value }), 
  setBodySecondaryColor: (value: string | null) => set({ bodySecondaryColor: value }), 
  setHubcapColor: (value: string | null) => set({ hubcapColor: value }), 
}));
