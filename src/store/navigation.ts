import {create} from 'zustand';

interface NavigationStore {
  activeNavItem: number;
  activeMenu: number;
  setActiveMenu: (value: number) => void;
  setActiveNavItem: (value: number) => void;
}

const useNavigationStore = create<NavigationStore>((set) => ({
  activeNavItem: 1,
  activeMenu: 0,
  setActiveNavItem: (value: number) => set({ activeNavItem: value }), 
  setActiveMenu: (value: number) => set(({activeMenu: value}))
}));

export default useNavigationStore;
