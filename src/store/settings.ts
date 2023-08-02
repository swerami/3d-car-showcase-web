import { Vector3 } from 'three';
import { create } from 'zustand';

export enum ViewMode {
  OriginalMode,
  PerformanceViewMode,
  HubcapViewMode,
  ActiveBodyViewmode,
}

interface SettingsStore {
  cameraAnimated: boolean;
  setCameraAnimated: (value: boolean) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  originalPosition: Vector3;
  PerformancePosition: Vector3;
  camera: {
    currentPosition: Vector3;
    setPosition: (value: Vector3) => void;
  };
  wheelCamPosition: Vector3;
}

const useSettingsStore = create<SettingsStore>((set) => ({
  cameraAnimated: false,
  setCameraAnimated: (value: boolean) => set(()=> ({cameraAnimated: value})),
  viewMode: ViewMode.OriginalMode,
  setViewMode: (mode: ViewMode) => set(() => ({ viewMode: mode })),
  originalPosition: new Vector3(2, 2, -3),
  PerformancePosition: new Vector3(2.9, 0.9, -4),
  camera: {
    currentPosition: new Vector3(2.9, 0.9, -4),
    setPosition: (value: Vector3) => set((state) => ({
      camera: { ...state.camera, position: value },
    })),
  },
  wheelCamPosition: new Vector3(-1.8, 0.6, 2.0),

}));

export default useSettingsStore;
