"use client";
import { useRef } from "react";
import { useParallax } from "../second-section/second-section";
import { useScroll } from "framer-motion";
import { FloatingSharkboy } from "./floating-sharkboy";
import { FloatingSharkgirl } from "./floating-sharkgirl";
import { FloatingMeteor } from "../../common/floating-items/floating-meteor";
import { FloatingGun } from "../../common/floating-items/floating-gun";

export const ThirdSection = (props: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 150);

  const onPhotoClick = () => {
    alert("cheese! TEMP");
  };

  return (
    <div className="relative flex-col bg-white min-h-screen w-full p-4 pt-28 lg:px-64 max-w-screen-2xl mb-24">
      <div className="relative justify-center w-full pt-0 h-1/4">
        <p className="text-3xl font-bold text-center mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <img
          onClick={onPhotoClick}
          className="w-2/12 pb-8 cursor-pointer mx-auto"
          src="./block3/photo-button.png"
        />
      </div>
      <div className="flex flex-col items-center lg:flex-row gap-16 justify-center">
        <FloatingSharkgirl y={y} />
        <FloatingSharkboy y={y} />
        <img className="w-2/3 lg:w-1/3" src="./block3/image.png" />
        <img className="w-2/3 lg:w-1/3" src="./block3/image.png" />
        <img className="w-2/3 lg:w-1/3" src="./block3/image.png" />
        <FloatingGun />
      </div>
      <div className="relative h-1/3">
        <p className="text-2xl p-8 pt-16 font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
      <FloatingMeteor y={y} />
    </div>
  );
};
