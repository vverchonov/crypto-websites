"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MainSection } from "./components/sections/main-section/main-section";
import { SecondSection } from "./components/sections/second-section/second-section";
import { FooterSection } from "./components/footer-section";
import { ThirdSection } from "./components/sections/third-section/third-section";
import { FourthSection } from "./components/sections/fourth-section/fourth-section";
import { SeventhSection } from "./components/sections/seventh-section/seventh-section";
import { SixthSection } from "./components/sections/sixth-section/sixth-section";
import { FifthSection } from "./components/sections/fifth-section/fifth-section";
import { Banner } from "./components/banner";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [distance, -distance]);
}

export default function Home() {
  const [showBanner, setShowBanner] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 150);

  useEffect(() => {
    let timer1 = setTimeout(() => setShowBanner(false), 5 * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      {/* <audio hidden ref={audioRef as any} src="./meow.mp3" /> */}
      {showBanner ? (
        <Banner />
      ) : (
        <>
          <main className="relative flex flex-col items-center">
            <MainSection y={y} />
            <SecondSection y={y} />
            <ThirdSection y={y} />
            <FourthSection y={y} />
            <FifthSection y={y} />
            <SixthSection y={y} />
            <SeventhSection y={y} />
          </main>
          <FooterSection />
        </>
      )}
    </>
  );
}
