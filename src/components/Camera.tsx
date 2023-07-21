import { Html, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import useSettingsStore from "../store/settings";
import { gsap } from "gsap";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

const Camera = () => {
  const { camera, wheelCam } = useSettingsStore();
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

  // Store the original camera position for resetting later
  // const originalPosition = camera.position;

  function handleAnimation() {
    gsap.to(cameraRef.current?.position, { ...wheelCam.position, duration: 1 });
  }

  // function handleReset() {
  //   gsap.to(cameraRef.current?.position, { ...originalPosition, duration: 1 });
  // }

  useFrame((state, delta) => {
    cameraRef.current?.lookAt(0, 0, 0);
  });

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={camera.currentPosition}
        rotation={[0, 0, 0]}
      />
      <Html>
        <button
          onClick={handleAnimation}
          className="font-bold text-white border-4 border-red-700"
        >
          Go to Wheel
        </button>
        {/* <button
          onClick={handleReset}
          className="font-bold text-white border-4 border-red-700 ml-2"
        >
          Reset Camera
        </button> */}
      </Html>
    </>
  );
};

export default Camera;
