import {create} from 'zustand';

interface NavigationStore {
  activeNavItem: number;
  activeMenu: string;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  setActiveMenu: (value: string) => void;
  setActiveNavItem: (value: number) => void;
}

const useNavigationStore = create<NavigationStore>((set) => ({
  activeNavItem: 1,
  activeMenu: 'performance',
  isPlaying: false,
  setIsPlaying: (value: boolean) => set({isPlaying: value}),
  setActiveNavItem: (value: number) => set({ activeNavItem: value }), 
  setActiveMenu: (value: string) => set(({activeMenu: value}))
}));

export default useNavigationStore;
