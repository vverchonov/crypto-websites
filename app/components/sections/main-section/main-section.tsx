"use client";

import { useRef } from "react";
import { Links } from "./links";
import { CopyCa } from "./copy-ca";
import { ToastContainer } from "react-toastify";
import { FloatingAlien } from "../../common/floating-items/floating-alien";
import { FloatingSilica } from "./floating-silica";
import { Circle } from "../../common/circle";

import { MotionValue, useScroll, useTransform } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [distance, -distance]);
}

export const MainSection = (props: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 150);

  return (
    <div className="flex min-h-screen w-full relative">
      <div className="absolute top-0">
        <img src="/block1/bluetop.png" alt="header" />
      </div>
      <ToastContainer />
      <div className="flex flex-col justify-center align-center items-center p-4 lg:p-28">
        <div className="flex flex-col lg:flex-row h-full w-full justify-center align-center gap-6 items-center relative">
          <FloatingSilica
            y={y}
            itemClass="left-0 top-48"
            imageClass="rotate(124deg)"
          />
          <div className="object-scale-down flex justify-center w-full lg:w-1/4 p-6">
            <video
              src="/block1/alien.mp4"
              preload="auto"
              autoPlay
              loop
              controls={false}
              className="rounded-2xl w-2/3 lg:w-full h-full"
            ></video>
          </div>
          <div className="flex flex-col h-full gap-6 text-center items-center justify-between relative w-full lg:w-1/2 p-6">
            <FloatingSilica
              y={y}
              itemClass="right-0 top-32"
              imageClass="rotate(36deg)"
            />
            <FloatingAlien y={y} customTranslate={"-translate-y-[50%]"} />
            <FloatingSilica
              y={y}
              itemClass="left-0 -top-32"
              imageClass="rotate(12deg)"
            />

            <Circle customClass={"mt-40"} />
            <h1 className="flex text-xl uppercase font-bold mt-24">
              In 2023 I animated some silly IKEA aliens! This series of
              animations went very viral. The project is not in association with
              IKEA, but they did reach out with approval!
            </h1>
            <CopyCa copyLink="test" />
            <div className="flex w-full justify-center">
              <Links />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
