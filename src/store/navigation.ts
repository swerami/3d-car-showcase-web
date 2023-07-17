import {create} from 'zustand';

interface NavigationStore {
  activeNavItem: number;
  activeMenu: string;
  setActiveMenu: (value: string) => void;
  setActiveNavItem: (value: number) => void;
}

const useNavigationStore = create<NavigationStore>((set) => ({
  activeNavItem: 1,
  activeMenu: 'performance',
  setActiveNavItem: (value: number) => set({ activeNavItem: value }), 
  setActiveMenu: (value: string) => set(({activeMenu: value}))
}));

export default useNavigationStore;
