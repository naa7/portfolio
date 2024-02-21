import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// @ts-ignore
// import skyScene from "../assets/3d/sky.glb";
import skyScene from "../assets/3d/earth.glb";

type Props = {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
  isRotating: boolean;
};

const Sky = (isRotating: Props) => {
  const skyRef = useRef<any>();
  const sky = useGLTF(skyScene);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.1 * delta;
    } else if (Math.abs(skyRef.current.rotation.y) < 0.0005) {
      skyRef.current.rotation.y = 0;
    }
  });

  return (
    <mesh ref={skyRef} scale={70}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
