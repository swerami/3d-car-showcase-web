import { Html } from "@react-three/drei";
import Navbar from "./Navbar";
import PerformanceMenu from "./menu/PerformanceMenu";
import Bottombar from "./Bottombar";

const Menu = () => {
  return (
    <Html as="div" fullscreen>
      <div className="h-screen w-screen flex flex-col justify-between p-12 gap-6">
        <Navbar />
        <PerformanceMenu />
        <Bottombar />
      </div>
    </Html>
  );
};

export default Menu;
