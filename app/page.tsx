"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cat } from "./components/cat";
import { Links } from "./components/links";

export default function Home() {
  return (
    <main className="flex flex-col w-100 min-h-screen z-50">
      <div className="flex w-full h-fit p-12 justify-center z-50">
        <Links />
      </div>
      <div className="flex flex-col gap-4 text-center z-50 mt-auto p-12">
        <h1 className="mt-auto text-8xl uppercase font-bold">Da Puss cat</h1>
        <p className="text z-50 text-xl">
          CA:3jfFHek23if2f2wWFw23r2aDAWwAef23t
        </p>
      </div>
      <div
        className="absolute top-0 z-0"
        style={{ width: "100%", height: "100vh" }}
      >
        <Canvas className="z-0">
          <OrbitControls enableZoom={false} />
          <ambientLight />
          <Cat />
        </Canvas>
      </div>
    </main>
  );
}
