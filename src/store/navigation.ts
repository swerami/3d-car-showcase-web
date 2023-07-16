import {create} from 'zustand';

interface NavigationStore {
  activeMenu: string;
  setActiveMenu: (value: string) => void;
}

const useNavigationStore = create<NavigationStore>((set) => ({
  activeMenu: 'MYRIDE',
  setActiveMenu: (value: string) => set({ activeMenu: value }), // Function to set the activeMenu
}));

export default useNavigationStore;
