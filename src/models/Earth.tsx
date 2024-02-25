import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
// @ts-ignore
import earthScene from "../assets/3d/earth.glb";
import { a } from "@react-spring/three";

type Props = {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
  isRotating: boolean;
  setIsRotating: (value: boolean) => void;
  currentStage: number | null;
  setCurrentStage: (value: number | null) => void;
};

const Earth = ({
  isRotating,
  setIsRotating,
  currentStage,
  setCurrentStage,
  ...props
}: Props) => {
  const earthRef = useRef<any>();
  const { nodes, materials } = useGLTF(earthScene) as any;
  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const rotationSpeedX = useRef(0);
  const dampingFactor = 0.95;
  const autoRotationSpeed = -0.0075;

  const handlePointerDown = (e: PointerEvent | TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e: PointerEvent | TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e: PointerEvent | TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      if ("touches" in e) {
        handlePointerMoveX(e.touches[0].clientX);
      } else {
        handlePointerMoveX(e.clientX);
      }
    }
  };

  const handlePointerMoveX = (clientX: number) => {
    const delta = (clientX - lastX.current) / viewport.width;
    earthRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = clientX;
    rotationSpeedX.current = delta * 0.01 * Math.PI;
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      earthRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeedX.current = 0.0125 * Math.PI;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      earthRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeedX.current = -0.0125 * Math.PI;
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") setIsRotating(false);
  };

  useFrame(() => {
    if (!isRotating) {
      earthRef.current.rotation.y += autoRotationSpeed;
      rotationSpeedX.current *= dampingFactor;
      if (Math.abs(earthRef.current.rotation.y) < 0.0001) {
        rotationSpeedX.current = 0;
      }
      earthRef.current.rotation.y += rotationSpeedX.current;
    }

    const normalizedRotation =
      ((earthRef.current.rotation.y % (2 * Math.PI)) + 2 * Math.PI) %
      (2 * Math.PI);
    switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2 && normalizedRotation <= 3:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    gl,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
    handleKeyDown,
    handleKeyUp,
  ]);

  return (
    <a.group {...props} ref={earthRef}>
      <mesh
        geometry={nodes.earth4_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth4_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </a.group>
  );
};

export default Earth;
