"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cat } from "./components/cat";
import { Links } from "./components/links";
import { CopyButton } from "./components/copy-button";

export default function Home() {
  return (
    <main className="flex flex-col w-100 min-h-screen z-50">
      <div className="flex w-full h-fit p-12 justify-center z-50">
        <Links />
      </div>
      <div className="flex flex-col gap-4 text-center z-50 mt-auto p-12 items-center">
        <h1 className="mt-auto text-8xl uppercase font-bold">Da Puss cat</h1>
        <p className="text-center z-50 text-xl cursor-pointer flex flex-row gap-4 align-center">
          CA:3jfFHek23if2f2wWFw23r2aDAWwAef23t
          <CopyButton copyLink="test" />
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
