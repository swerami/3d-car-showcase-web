// CameraControls.tsx
import { Html } from "@react-three/drei";
import useSettingsStore from "../store/settings";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";

const CameraControls = () => {
  const { camera, wheelCam, originalPosition } = useSettingsStore();

  const handleGoToWheel = () => {
    gsap.to(camera.currentPosition, {
      x: wheelCam.position.x,
      y: wheelCam.position.y,
      z: wheelCam.position.z,
      duration: 1,
      onUpdate: () => {
        useSettingsStore.setState((state) => ({
          camera: { ...state.camera, currentPosition: camera.currentPosition },
        }));
      },
    });
  };

  const handleResetCamera = () => {
    gsap.to(camera.currentPosition, {
      x: originalPosition.x,
      y: originalPosition.y,
      z: originalPosition.z,
      duration: 1,
      onUpdate: () => {
        useSettingsStore.setState((state) => ({
          camera: { ...state.camera, currentPosition: camera.currentPosition },
        }));
      },
    });
  };

  useFrame((state, delta) => {
    // Update camera position in the store when the camera is moved by other components or animation.
    useSettingsStore.setState((state) => ({
      camera: {
        ...state.camera,
        currentPosition: state.camera.currentPosition,
      },
    }));
  });

  return (
    <Html>
      <button onClick={handleGoToWheel}>Go to Wheel</button>
      <button onClick={handleResetCamera}>Reset Camera</button>
    </Html>
  );
};

export default CameraControls;
