/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 public/models/light.glb -t
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    body: THREE.Mesh;
    lamp005: THREE.Mesh;
    metal: THREE.Mesh;
    metal2: THREE.Mesh;
    body001: THREE.Mesh;
    lamp001: THREE.Mesh;
    metal001: THREE.Mesh;
    metal2001: THREE.Mesh;
    body003: THREE.Mesh;
    lamp002: THREE.Mesh;
    metal002: THREE.Mesh;
    metal2002: THREE.Mesh;
    body004: THREE.Mesh;
    lamp003: THREE.Mesh;
    metal003: THREE.Mesh;
    metal2003: THREE.Mesh;
    body005: THREE.Mesh;
    lamp004: THREE.Mesh;
    metal004: THREE.Mesh;
    metal2004: THREE.Mesh;
    body002: THREE.Mesh;
    lamp: THREE.Mesh;
    metal005: THREE.Mesh;
    metal2005: THREE.Mesh;
  };
  materials: {
    ["Material.007"]: THREE.MeshStandardMaterial;
    gray: THREE.MeshStandardMaterial;
  };
};

export function CustomLight(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/light.glb") as GLTFResult;
  const lampMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(5, 5, 5),
    toneMapped: false,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.body.geometry}
        material={materials["Material.007"]}
        position={[0.584, 0, 0.134]}
        rotation={[-0.011, 0.183, 0]}
        scale={[0.771, 0.02, 0.017]}
      >
        <mesh
          geometry={nodes.lamp005.geometry}
          material={lampMaterial}
          position={[0, 0, -0.065]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.871, 0.993, 0.773]}
        />
      </mesh>
      <mesh
        geometry={nodes.body001.geometry}
        material={materials["Material.007"]}
        position={[1.382, 0, -0.802]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.763, 0.02, 0.017]}
      >
        <mesh
          geometry={nodes.lamp001.geometry}
          material={lampMaterial}
          position={[0, 0, -0.065]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.871, 0.993, 0.773]}
        />
      </mesh>
      <mesh
        geometry={nodes.body003.geometry}
        material={materials["Material.007"]}
        position={[0.576, 0, -1.755]}
        rotation={[-2.882, 0.196, 3.102]}
        scale={[0.771, 0.02, 0.017]}
      >
        <mesh
          geometry={nodes.lamp002.geometry}
          material={lampMaterial}
          position={[0, 0, -0.065]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.871, 0.993, 0.773]}
        />
      </mesh>
      <mesh
        geometry={nodes.body004.geometry}
        material={materials["Material.007"]}
        position={[1.26, 0.431, -1.602]}
        rotation={[Math.PI, 0, -1.844]}
        scale={[0.452, 0.019, 0.017]}
      >
        <mesh
          geometry={nodes.lamp003.geometry}
          material={lampMaterial}
          position={[0, 0, -0.065]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.871, 0.993, 0.773]}
        />
      </mesh>
      <mesh
        geometry={nodes.body005.geometry}
        material={materials["Material.007"]}
        position={[1.26, 0.431, -0.002]}
        rotation={[Math.PI, 0, -1.844]}
        scale={[0.452, 0.019, 0.017]}
      >
        <mesh
          geometry={nodes.lamp004.geometry}
          material={lampMaterial}
          position={[0, 0, -0.065]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.871, 0.993, 0.773]}
        />
      </mesh>
      <mesh
        geometry={nodes.body002.geometry}
        material={materials["Material.007"]}
        position={[1.132, 0.889, -0.802]}
        rotation={[Math.PI / 2, 0.27, -Math.PI / 2]}
        scale={[0.81, 0.02, 0.017]}
      >
        <mesh
          geometry={nodes.lamp.geometry}
          material={lampMaterial}
          position={[0, 0, -0.065]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.871, 0.993, 0.773]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/light.glb");
