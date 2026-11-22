
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/yowakata.glb");

  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Canvas camera={{ position: [4, 3, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />

        <Stage environment="city" intensity={0.6}>
          <Model />
        </Stage>

        <OrbitControls
          makeDefault
          enableZoom={true}
          enablePan={true}
        />
      </Canvas>
    </div>
  );
}
