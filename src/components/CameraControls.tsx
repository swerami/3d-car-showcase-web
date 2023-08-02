// CameraControls.tsx
import { Html } from "@react-three/drei";
import useSettingsStore from "../store/settings";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";

const CameraControls = () => {
  const { camera, wheelCamPosition, originalPosition } = useSettingsStore();

  const handleGoToWheel = () => {
    gsap.to(camera.currentPosition, {
      x: wheelCamPosition.x,
      y: wheelCamPosition.y,
      z: wheelCamPosition.z,
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

  useFrame(() => {
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
