import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import useSettingsStore from "../store/settings";

const Camera = () => {
  const { camera } = useSettingsStore();
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={camera.currentPosition}
        rotation={[0, 0, 0]}
      />
    </>
  );
};

export default Camera;
