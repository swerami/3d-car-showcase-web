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

const MainMenu = () => {
  const { activeMenu } = useNavigationStore();
  const { camera, viewMode, wheelCam, originalPosition } = useSettingsStore();
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

  useFrame((state, delta) => {
    // create a switch case function to do mulitple different functions depending on various cases
    switch (viewMode) {
      case ViewMode.ActiveBodyViewmode:
        gsap.to(state.camera.position, {
          x: originalPosition.x,
          y: originalPosition.y,
          z: originalPosition.z,
          duration: 1,
        });
        state.camera.clear();
        break;
      case ViewMode.HubcapViewMode:
        gsap.to(state.camera.position, { ...wheelCam.position, duration: 1 });
        console.log("hi");
        state.camera.clear();
        state.camera.clearViewOffset();
        state.camera.updateProjectionMatrix();
        break;
      default:
        // state.camera.position.set(3, 2, -5);
        state.camera.clear();
        state.camera.clearViewOffset();
        break;
    }

    // if (viewMode) {
    //   gsap.to(state.camera.position, { ...wheelCam.position, duration: 1 });
    // } else if (viewMode) {
    //   gsap.to(state.camera.position, {
    //     x: originalPosition.x,
    //     y: originalPosition.y,
    //     z: originalPosition.z,
    //     duration: 1,
    //   });
    // }
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
