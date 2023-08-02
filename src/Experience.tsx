import { OrbitControls } from "@react-three/drei";
import { Bugatti } from "./components/Bugatti";
import Environment from "./components/Environment";
import Camera from "./components/Camera";
import MainMenu from "./components/ui/MainMenu";

const Experience = () => {
  return (
    <>
      <Bugatti position={[0, 0.54, 0]} scale={0.02} />
      <Environment />
      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.1} />
      <MainMenu />
      <Camera />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 4, 0]} intensity={2} />
    </>
  );
};

export default Experience;
