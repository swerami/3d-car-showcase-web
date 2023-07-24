import { Vector3 } from 'three';
import { create } from 'zustand';

export enum ViewMode {
  OriginalMode,
  HubcapViewMode,
  ActiveBodyViewmode,
}

interface SettingsStore {
  cameraAnimated: boolean;
  setCameraAnimated: () => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  originalPosition: Vector3;
  camera: {
    currentPosition: Vector3;
    setPosition: (value: Vector3) => void;
  };
  wheelCamPosition: Vector3;
}

const useSettingsStore = create<SettingsStore>((set) => ({
  cameraAnimated: false,
  setCameraAnimated: () => set((state)=> ({cameraAnimated: !state.cameraAnimated})),
  viewMode: ViewMode.OriginalMode,
  setViewMode: (mode: ViewMode) => set(() => ({ viewMode: mode })),
  originalPosition: new Vector3(2, 2, -3),
  camera: {
    currentPosition: new Vector3(2.9, 0.9, -4),
    setPosition: (value: Vector3) => set((state) => ({
      camera: { ...state.camera, position: value },
    })),
  },
  wheelCamPosition: new Vector3(-1.8, 0.6, 2.0),

}));

export default useSettingsStore;
