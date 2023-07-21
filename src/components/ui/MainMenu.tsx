import { Html } from "@react-three/drei";
import Navbar from "./Navbar";
import Bottombar from "./Bottombar";
import useNavigationStore from "../../store/navigation";
import Menu from "./Menu";
import PerformanceMenu from "./menus/PerformanceMenu";
import CarCustomizationMenu from "./menus/CarCustomizationMenu";
import useSettingsStore from "../../store/settings";

const MainMenu = () => {
  const { activeMenu } = useNavigationStore();
  const { camera } = useSettingsStore();
  const currentActiveMenu = () => {
    switch (activeMenu) {
      case "performance":
        return <PerformanceMenu />;
      case "customization":
        return <CarCustomizationMenu />;
      default:
        return <Menu />;
    }
  };

  return (
    <Html as="div" fullscreen>
      <div className="h-screen w-screen flex flex-col justify-between p-12 gap-6">
        <Navbar />
        {currentActiveMenu()}
        <Bottombar />
      </div>
    </Html>
  );
};

export default MainMenu;
