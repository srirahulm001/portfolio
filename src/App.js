import React from "react";
import { Canvas } from "@react-three/fiber";
import DanceBoy from "./DanceBoy.js";
import JoyBoy from "./JoyBoy.js";
import KuttyBoyFall from "./KuttyBoyFall.js";
import { Grid, OrbitControls } from "@react-three/drei";
import "./App.css";
import { TypeAnimation } from "react-type-animation";

export default function App() {
  return (
    <>
      <Canvas  gl={{ logarithmicDepthBuffer: true }} shadows camera={{ position: [-8, 2, 15], fov: 25 }} >
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      {/* <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative' }} adjustCamera={false}> */}
      <DanceBoy position={[1 ,0, 0]} />
        <JoyBoy rotation={[0, Math.PI, 0]} position={[2 ,0, 0]} />
        <KuttyBoyFall position={[3 ,0, 0]} />
      {/* </Stage> */}
      <Grid renderOrder={-1} position={[0, -0.01, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} />

      
    </Canvas>
    <div className="name">
      
      <TypeAnimation
        sequence={[
          `Hello`,
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
