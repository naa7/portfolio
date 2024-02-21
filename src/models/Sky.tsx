import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// @ts-ignore
import skyScene from "../assets/3d/sky.glb";

type Props = {
  isRotating: boolean;
};

const Sky = ({ isRotating }: Props) => {
  const skyRef = useRef<any>();
  const sky = useGLTF(skyScene);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.1 * delta;
    } else if (Math.abs(skyRef.current.rotation.y) < 0.0005) {
      skyRef.current.rotation.y = 0;
    } else {
      skyRef.current.rotation.y += 0.02 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
