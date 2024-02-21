import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

// @ts-ignore
import planeScene from "../assets/3d/plane.glb";

type Props = {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
  isRotating: boolean;
};

const Plane = ({ isRotating, ...props }: Props) => {
  const planeRef = useRef<any>();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef) as any;

  useEffect(() => {
    if (isRotating) actions["Take 001"].play();
    else actions["Take 001"]?.stop();
  }, [isRotating, actions]);

  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
