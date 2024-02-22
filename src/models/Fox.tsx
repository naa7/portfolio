import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
// @ts-ignore
import foxScene from "../assets/3d/fox.glb";

type Props = {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
};

const Fox = (props: Props) => {
  const foxRef = useRef<any>();
  const { nodes, materials } = useGLTF(foxScene);
  //   const { actions } = useAnimations(animations, foxRef);

  //   useEffect(() => {
  //     console.log(actions);
  //     Object.values(actions).forEach((action) => action.stop());

  //     if (actions[currentAnimation]) actions[currentAnimation].play();
  //   }, [currentAnimation, actions]);

  return (
    <group ref={foxRef} {...props}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
};

export default Fox;
