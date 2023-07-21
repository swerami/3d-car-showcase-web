import { Vector3 } from 'three';
import { create } from 'zustand';

interface SettingsStore {
  originalPosition: Vector3;
  camera: {
    currentPosition: Vector3;
    setPosition: (value: Vector3) => void;
  };
  wheelCam :{
    position: Vector3;
    setPosition: (value: Vector3) => void;
  };
  
}

const useSettingsStore = create<SettingsStore>((set) => ({
  originalPosition:  new Vector3(0, 0, 0),
  camera: {
    currentPosition: new Vector3(2.9, 0.9, -4),
    setPosition: (value: Vector3) => set((state) => ({ camera: { ...state.camera, position: value } })),
   
  },
  wheelCam: {
    position: new Vector3(-1.8000000000000016, 0.5999999999999999, 2.0000000000000004),
    setPosition: (value: Vector3) => set((state) => ({ wheelCam: { ...state.wheelCam, position: value } })),
  }
}));

export default useSettingsStore;
