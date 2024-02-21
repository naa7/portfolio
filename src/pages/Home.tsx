import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
// import Island from "../models/Island";
import Sky from "../models/Sky";
// import Bird from "../models/Bird";
// import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import VisionPro from "../models/VisionPro";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const adjustIslandForScreenSize = () => {
    let screenScale: [number, number, number] = [1, 1, 1];
    let screenPosition: [number, number, number] = [0, -6.5, -43];
    let rotation: [number, number, number] = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  // const adjustPlaneForScreenSize = () => {
  //   let screenScale: [number, number, number] = [3, 3, 3];
  //   let screenPosition: [number, number, number] = [0, -4, -4];

  //   if (window.innerWidth < 768) {
  //     screenScale = [1.5, 1.5, 1.5];
  //     screenPosition = [0, -1.5, 0];
  //   }
  //   return [screenScale, screenPosition];
  // };

  // const adjustBirdForScreenSize = () => {
  //   let screenScale: [number, number, number] = [3, 3, 3];
  //   let screenPosition: [number, number, number] = [0, -4, -4];

  //   if (window.innerWidth < 768) {
  //     screenScale = [1.5, 1.5, 1.5];
  //     screenPosition = [0, -1.5, 0];
  //   }
  //   return [screenScale, screenPosition];
  // };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  // const [planeScale, planePosition] = adjustPlaneForScreenSize();
  const [skyScale, skyPosition, skyRotation] = adjustIslandForScreenSize();
  // const [birdScale, birdPosition] = adjustBirdForScreenSize();
  return (
    <section
      className={`w-full h-screen relative ${
        isRotating ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      <div className="absolute top-28 left-0 right-0 z-10 flex  items-center justify-center text-white">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className="w-full h-screen relative bg-black-500"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight
            position={[5, 10, 5]}
            intensity={3}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />{" "}
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
          <Sky
            position={skyPosition}
            scale={skyScale}
            rotation={skyRotation}
            isRotating={isRotating}
          />
          {/* <Bird position={birdPosition} scale={birdScale} />  */}
          {/* <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          /> */}
          {/* <Plane
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20.2, 0]}
          /> */}
          <VisionPro
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
