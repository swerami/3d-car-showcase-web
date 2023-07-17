import { Html } from "@react-three/drei";
import Navbar from "./Navbar";
import PerformanceMenu from "./menu/PerformanceMenu";
import Bottombar from "./Bottombar";
import useNavigationStore from "../../store/navigation";
import CarCustomizationMenu from "./menu/CarCustomizationMenu";

const Menu = () => {
  const { activeMenu } = useNavigationStore();

  const currentActiveMenu = () => {
    switch (activeMenu) {
      case "performance":
        return <PerformanceMenu />;
      case "customization":
        return <CarCustomizationMenu />;
      default:
        return null;
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

export default Menu;
