"use client";
import { useRef } from "react";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import { FloatingSharkboy } from "../../common/floating-items/floating-sharkboy";
import { FloatingSharkgirl } from "../../common/floating-items/floating-sharkgirl";
import { FloatingMeteor } from "../../common/floating-items/floating-meteor";
import { FloatingGun } from "../../common/floating-items/floating-gun";
import { AppearWrapper } from "../../common/appear-wrapper";

export const ThirdSection = (props: any) => {
  const { y } = props;
  const onPhotoClick = () => {
    alert("cheese! TEMP");
  };

  return (
    <div className="relative flex-col bg-white min-h-screen w-full p-4 pt-28 lg:px-64 max-w-screen-2xl mb-24">
      <AppearWrapper>
        <div className="relative justify-center w-full pt-0 h-1/4">
          <p className="text-3xl font-bold text-center mb-8">
            Take a photo with the $DAPUSS
          </p>
          <img
            onClick={onPhotoClick}
            className=" w-5/12 md:w-4/12 lg:w-3/12 pb-8 cursor-pointer mx-auto"
            src="./block3/photo-button.png"
          />
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-16 justify-center">
          <FloatingSharkgirl y={y} />
          <FloatingSharkboy y={y} />
          <img className="w-full md:w-2/3 lg:w-1/3" src="./block3/image.png" />
          <img className="w-full md:w-2/3 lg:w-1/3" src="./block3/image.png" />
          <img className="w-full md:w-2/3 lg:w-1/3" src="./block3/image.png" />
          <FloatingGun y={y} />
        </div>
        <div className="relative h-1/3">
          <p className="text-2xl p-8 pt-16 font-bold z-40 relative">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
        <FloatingMeteor y={y} />
      </AppearWrapper>
    </div>
  );
};
