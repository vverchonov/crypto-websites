"use client";

import * as THREE from "three";
import { Box, OrbitControls } from "@react-three/drei";
import { Interactive, XR, Controllers, ARButton } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";

import { motion } from "framer-motion";
import { useRef } from "react";
import { MainSection } from "./components/main-section/main-section";
import { SecondSection } from "./components/second-section/second-section";
import { FooterSection } from "./components/footer-section";
import { ARTest } from "./components/main-section/ar-test";
import ARView from "./components/main-section/ARView";

export default function Home() {
  const audioRef = useRef();

  const play = (ref: any) => {
    if (audioRef.current) {
      //@ts-ignore
      audioRef.current.play();
    }
  };

  return (
    //@ts-ignore
    <model-viewer
      alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
      src="./Horse.glb"
      ar
      ar-modes="webxr scene-viewer quick-look"
      //   environment-image="shared-assets/environments/moon_1k.hdr"
      poster="poster.webp"
      seamless-poster
      shadow-intensity="1"
      camera-controls
      //@ts-ignore
    ></model-viewer>
    // <>
    //   <ARButton />
    //   <Canvas camera={{ position: [0, 2, 0] }}>
    //     <XR referenceSpace="local-floor">
    //       <color attach="background" args={["#111"]} />
    //       <ambientLight intensity={2} />
    //       <pointLight position={[20, 10, -10]} intensity={2} />
    //       <primitive object={new THREE.AxesHelper(2)} />
    //       <primitive object={new THREE.GridHelper(20, 20)} />
    //       <OrbitControls />

    //       <Box key="companionCube">
    //         <meshPhongMaterial color="#440066" />
    //       </Box>
    //     </XR>
    //   </Canvas>
    // </>
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
