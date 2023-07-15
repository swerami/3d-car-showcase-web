import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Floor from "./Floor";
import { CustomLight } from "./Light";

const Environment = () => {
  return (
    <>
      <EffectComposer>
        <Bloom mipmapBlur />
      </EffectComposer>
      <Floor />
      <CustomLight rotation-y={Math.PI / 2.1} scale={2} position={[0, 0, 0]} />
    </>
  );
};

export default Environment;
