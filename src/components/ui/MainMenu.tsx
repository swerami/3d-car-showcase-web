import { Html } from "@react-three/drei";
import Navbar from "./Navbar";
import Bottombar from "./Bottombar";
import useNavigationStore from "../../store/navigation";
import Menu from "./Menu";
import PerformanceMenu from "./menus/PerformanceMenu";
import CarCustomizationMenu from "./menus/CarCustomizationMenu";
import useSettingsStore, { ViewMode } from "../../store/settings";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useCustomizationStore } from "../../store/customization";
import { bodyColorOptions } from "./menus/CarPartsOptions/partsOptions";

const MainMenu = () => {
  const { activeMenu } = useNavigationStore();
  const { setBodyColor, setHubcapColor } = useCustomizationStore();
  const {
    viewMode,
    wheelCamPosition,
    originalPosition,
    PerformancePosition,
    cameraAnimated,
    camera,
  } = useSettingsStore();
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
  let bodyColor;
  useEffect(() => {
    bodyColor = Number(
      localStorage.getItem(`activeIndex_${ViewMode.ActiveBodyViewmode}`)
    );
    let hubcapColor = Number(
      localStorage.getItem(`activeIndex_${ViewMode.HubcapViewMode}`)
    );
    setBodyColor(bodyColorOptions[bodyColor].value);
    setHubcapColor(bodyColorOptions[hubcapColor].value);
  }, [bodyColor]);

  useFrame((state) => {
    if (cameraAnimated) {
      switch (viewMode) {
        case ViewMode.ActiveBodyViewmode:
          gsap.to(state.camera.position, {
            x: originalPosition.x,
            y: originalPosition.y,
            z: originalPosition.z,
            duration: 1,
          });
          break;
        case ViewMode.HubcapViewMode:
          gsap.to(state.camera.position, { ...wheelCamPosition, duration: 1 });
          break;
        default:
          gsap.to(state.camera.position, {
            x: originalPosition.x,
            y: originalPosition.y,
            z: originalPosition.z,
            duration: 1,
          });
          break;
      }
    }
  });
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
