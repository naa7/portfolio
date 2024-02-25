import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Object3D } from "three";
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

  const setRotation = (object: Object3D) => {
    object.rotation.y = 1.75;
    object.rotation.x = 0.5;
    object.rotation.z = 0.75;
  };
  useEffect(() => {
    actions["Take 001"].play();
    setRotation(planeRef.current);
  }, [isRotating, actions]);

  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
