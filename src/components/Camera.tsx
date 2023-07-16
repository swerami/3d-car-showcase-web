import { Html, PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";
import useSettingsStore from "../store/settings";

// Default camera positions:
// {"positionX":2.9}
// {"positionY":0.9}
// {"positionZ":-4.400000000000005}

// Camera Color positions
// {"positionX":-2.2000000000000006}
// {"positionY":1.1999999999999997}
// {"positionZ":-3.8000000000000025}

// Camera wheeles positions
// {"positionX":-1.8000000000000016}
// {"positionY":0.5999999999999999}
// {"positionZ":2.0000000000000004}

// Camera driving positions
// {"positionX":-1.0269562977782698e-15}
// {"positionY":2.1000000000000005}
// {"positionZ":6.399999999999992}

const Camera = () => {
  const settings = useMemo(() => {
    return {
      positionX: { value: 0, step: 0.1 },
      positionY: { value: 0, step: 0.1 },
      positionZ: { value: 0, step: 0.1 },
      rotateX: { value: 0.0, step: 0.1 },
      rotateY: { value: 0, step: 0.1 },
      rotateZ: { value: 0.0, step: 0.1 },
      fov: { value: 30.0, step: 0.1 },
    };
  }, []);
  const { camera } = useSettingsStore();
  //   const camera = useControls("camera", settings);
  return (
    <>
      {/* <Html>
        <button
          onClick={() => {
            camera.setPositionX(4);
          }}
        >
          Click me please!
        </button>
      </Html> */}
      <PerspectiveCamera
        position={[camera.positionX, camera.positionY, camera.positionZ]}
        // rotation={[camera.rotateX, camera.rotateY, camera.rotateZ]}
        // position={[camera.positionX, camera.positionY, camera.positionZ]}
        // rotation={[camera.rotateX, camera.rotateY, camera.rotateZ]}
        // makeDefault
      />
    </>
  );
};

export default Camera;
