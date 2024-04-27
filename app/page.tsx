"use client";

import { OrbitControls } from "@react-three/drei";
import { Interactive, XR, Controllers, ARButton } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";

import { motion } from "framer-motion";
import { useRef } from "react";
import { MainSection } from "./components/main-section/main-section";
import { SecondSection } from "./components/second-section/second-section";
import { FooterSection } from "./components/footer-section";
import { ARTest } from "./components/main-section/ar-test";

export default function Home() {
  const audioRef = useRef();

  const play = (ref: any) => {
    if (audioRef.current) {
      //@ts-ignore
      audioRef.current.play();
    }
  };

  return (
    <>
      <ARButton className="" />
      <Canvas>
        <XR referenceSpace="local">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <ARTest position={[0, 0.1, -0.2]} />
          <Controllers />
        </XR>
      </Canvas>
    </>
    // <motion.div
    //   initial={{
    //     opacity: 0,
    //   }}
    //   whileInView={{
    //     opacity: 1,
    //   }}
    //   transition={{
    //     duration: 3,
    //   }}
    //   viewport={{ once: true }}
    // >
    //   <main className="relative flex flex-col">

    //     <audio hidden ref={audioRef as any} src="./meow.mp3" />
    //     <MainSection play={() => play(audioRef)} />
    //     <SecondSection />
    //     <FooterSection />
    //   </main>
    // </motion.div>
  );
}
