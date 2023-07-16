import { OrbitControls } from "@react-three/drei";
import { Bugatti } from "./components/Bugatti";
import Environment from "./components/Environment";
import Camera from "./components/Camera";
import Menu from "./components/ui/Menu";

const Experience = () => {
  return (
    <>
      <Menu />
      <Bugatti position={[0, 0.54, 0]} scale={0.02} />
      {/* <mesh position={[0, 1, 0]}>
        <boxGeometry />
        <meshBasicMaterial color={"red"} />
      </mesh> */}
      <Environment />
      <OrbitControls makeDefault />
      <Camera />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 4, 0]} intensity={2} />
    </>
  );
};

export default Experience;
