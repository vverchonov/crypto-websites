"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { MainSection } from "./components/sections/main-section/main-section";
import { SecondSection } from "./components/sections/second-section/second-section";
import { FooterSection } from "./components/footer-section";
import { ThirdSection } from "./components/sections/third-section/third-section";
import { FourthSection } from "./components/sections/fourth-section/fourth-section";
import { SeventhSection } from "./components/sections/seventh-section/seventh-section";
import { SixthSection } from "./components/sections/sixth-section/sixth-section";
import { FifthSection } from "./components/sections/fifth-section/fifth-section";

export default function Home() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 3,
      }}
      viewport={{ once: true }}
    >
      <main className="relative flex flex-col items-center">
        {/* <audio hidden ref={audioRef as any} src="./meow.mp3" /> */}
        <MainSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        {/* <FifthSection /> */}
        {/* <SixthSection /> */}
        {/* <SeventhSection /> */}
      </main>
      <FooterSection />
    </motion.div>
  );
}
