import {create} from 'zustand';

interface SettingsStore {
  camera: {
    positionX: number;
    positionY: number;
    positionZ: number;
    setPositionX: (value: number) => void;
  };
}

const useSettingsStore = create<SettingsStore>((set) => ({
  camera: {
    positionX: 0, 
    positionY: 0, 
    positionZ: 0, 
    setPositionX: (value: number) => set((state) => ({ camera: { ...state.camera, positionX: value } })),
  },
}));

export default useSettingsStore;
