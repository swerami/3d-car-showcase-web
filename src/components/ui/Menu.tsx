import { Html } from "@react-three/drei";
import Navbar from "./Navbar";
import PerformanceMenu from "./menu/PerformanceMenu";

const Menu = () => {
  return (
    <Html as="div" fullscreen>
      <div className="h-screen w-screen flex flex-col justify-between">
        <Navbar />
        <PerformanceMenu />
        <p style={{ color: "red" }}>heeeeeeeeeeeeeeeeeeeee</p>
      </div>
    </Html>
  );
};

export default Menu;
