import Head from "next/head";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { pagesPath, staticPath } from "@/utils/pathpida/$path";

export const PortfolioPageComponent = () => {
  const Model = () => {
    // location of the 3D model
    const gltf = useLoader(GLTFLoader, staticPath.untitled_glb);
    return (
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={0.8} />
      </>
    );
  };

  return (
    <div style={{ position: "relative", width: 1400, height: 1400 }}>
      <Canvas dpr={2} shadows camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
