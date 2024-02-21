import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
// import Island from "../models/Island";
import Sky from "../models/Sky";
import Earth from "../models/Earth";
// import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
// import VisionPro from "../models/VisionPro";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);

  const adjustEarthForScreenSize = () => {
    let screenScale: [number, number, number] = [2.5, 2.5, 2.5];
    let screenPosition: [number, number, number] = [0, -7.5, -43];
    let rotation: [number, number, number] = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [2, 2, 2];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [2.5, 2.5, 2.5];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale: [number, number, number] = [2, 2, 2];
    let screenPosition: [number, number, number] = [0, -1.5, -4];

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0, -1, -2];
    }
    return [screenScale, screenPosition];
  };

  const [earthScale, earthPosition, earthRotation] = adjustEarthForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section
      className={`w-full h-screen relative ${
        isRotating ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && (
          <HomeInfo
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
        )}
      </div>
      <Canvas
        className="w-full h-screen relative bg-zinc-800"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight
            castShadow
            position={[0, 0, 1]}
            intensity={2}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <ambientLight intensity={1} />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#b97a20"
            intensity={0.5}
          />
          <spotLight
            position={[0, 10, 0]}
            intensity={1}
            angle={Math.PI / 4}
            penumbra={0.05}
            castShadow
          />
          <rectAreaLight
            position={[-5, 5, 5]}
            width={6}
            height={6}
            intensity={1}
            color="#FFD700"
          />
          <pointLight position={[0, 5, 0]} intensity={2} />
          <Earth
            position={earthPosition}
            scale={earthScale}
            rotation={earthRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
          <Sky isRotating={isRotating} />

          <Plane
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20.2, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
