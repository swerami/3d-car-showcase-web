import { MeshReflectorMaterial } from "@react-three/drei";

const Floor = () => {
  return (
    <mesh rotation-x={Math.PI * -0.5}>
      <planeGeometry args={[20, 20]} />
      <MeshReflectorMaterial
        blur={[0, 0]}
        resolution={2048}
        mixBlur={1}
        mixStrength={80}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#010101"
        metalness={0.5}
        mirror={0}
      />
    </mesh>
  );
};

export default Floor;
