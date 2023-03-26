import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import DanceBoy from "./DanceBoy.js";

import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { TypeAnimation } from "react-type-animation";

export default function App() {
  return (
    <>
      <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <DanceBoy position={[0, -1, 1]} />
      </Suspense>
    </Canvas>
    <div className="name">
      
      <TypeAnimation
        sequence={[
          `Hello, I'm Srirahul`,
          17000,
        ]}
        cursor={false}
        repeat={Infinity}
        speed={500}
      />
    </div>
    </>
  );
}
