"use client";

import { useRef } from "react";
import { FloatingAlien } from "../common/floating-alien";
import { FloatingBanana } from "./floating-banana";
import { FloatingDildo } from "./floating-dildo";
import { FloatingDrink } from "./floating-drink";
import { Circle } from "../common/circle";

import { MotionValue, useScroll, useTransform } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [distance, -distance]);
}

export const SecondSection = (props: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 150);

  return (
    <div className="flex flex-col bg-white min-h-screen w-full p-28 max-w-screen-2xl">
      <div className="flex flex-col justify-center align-center items-center">
        <div className="flex flex-col md:flex-row h-full w-full  border-black">
          <div className="flex flex-col w-full md:w-1/2 items-center relative">
            <div className="relative ms-auto">
              <img className="z-40 relative" src="./block2/text.webp" />
              <FloatingBanana y={y} />
            </div>
            <Circle customClass={"img-hor mt-40"} />
            <FloatingAlien
              customClass={"img-hor"}
              y={y}
              customTranslate={"translate-y-[80%]"}
            />
            <div className="relative w-full justify-center">
              <div className="mx-auto w-2/4 text-center">
                <p className="text-2xl font-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <FloatingDildo y={y} />
            </div>
          </div>
          <div className="relative w-full md:w-1/2 p-8 ps-24">
            <div className="ms-auto">
              <video
                className="w-3/4 mt-12 rounded-2xl"
                controls={false}
                autoPlay
                loop
                src="./block2/dancing.mp4"
              />
              <FloatingDrink y={y} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
