import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

// @ts-ignore
import birdScene from "../assets/3d/bird.glb";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const birdRef = useRef<any>();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef) as any;

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  useFrame((state) => {
    const birdPosition = birdRef.current.position;
    const cameraPosition = state.camera.position;
    birdPosition.y = Math.sin(state.clock.elapsedTime) * 0.25 + 2;
    const speedFactor = 0.02;

    if (birdPosition.x > cameraPosition.x + 30) {
      birdRef.current.rotation.y = Math.PI;
      birdPosition.x -= speedFactor;
    } else if (birdPosition.x < cameraPosition.x - 10) {
      birdRef.current.rotation.y = 0;
      birdPosition.x += speedFactor;
    }

    if (birdRef.current.rotation.y === 0) {
      birdPosition.x += speedFactor;
      birdPosition.z -= speedFactor;
    } else {
      birdPosition.x -= speedFactor;
      birdPosition.z += speedFactor;
    }
  });

  return (
    <mesh position={[-3, 1, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
