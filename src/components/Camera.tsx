import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import useSettingsStore, { ViewMode } from "../store/settings";
import gsap from "gsap";

const Camera = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);
  const {
    viewMode,
    wheelCamPosition,
    originalPosition,
    PerformancePosition,
    cameraAnimated,
    camera,
  } = useSettingsStore();

  if (cameraAnimated) {
    switch (viewMode) {
      case ViewMode.ActiveBodyViewmode:
        gsap.to(cameraRef.current?.position, {
          x: originalPosition.x,
          y: originalPosition.y,
          z: originalPosition.z,
          duration: 1,
        });
        break;
      case ViewMode.HubcapViewMode:
        gsap.to(cameraRef.current?.position, {
          ...wheelCamPosition,
          duration: 1,
        });
        break;
      default:
        gsap.to(cameraRef.current?.position, {
          x: originalPosition.x,
          y: originalPosition.y,
          z: originalPosition.z,
          duration: 1,
        });
        break;
    }
  } else {
    gsap.to(cameraRef.current?.position, {
      ...PerformancePosition,
      duration: 1,
    });
  }

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
