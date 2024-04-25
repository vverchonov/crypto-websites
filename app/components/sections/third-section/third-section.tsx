"use client";

import { FloatingSharkboy } from "../../common/floating-items/floating-sharkboy";
import { FloatingSharkgirl } from "../../common/floating-items/floating-sharkgirl";
import { FloatingMeteor } from "../../common/floating-items/floating-meteor";
import { FloatingGun } from "../../common/floating-items/floating-gun";
import { AppearWrapper } from "../../common/appear-wrapper";
import { useMoveOnScrollHook } from "../../useMoveOnScrollHook";

export const ThirdSection = (props: any) => {
  const { y, ref } = useMoveOnScrollHook(100);
  const onPhotoClick = () => {
    alert("cheese! TEMP");
  };

  return (
    <div className="relative flex-col bg-white min-h-screen w-full p-4 pt-28 lg:px-64 max-w-screen-2xl mb-24">
      <AppearWrapper>
        <div className="relative justify-center w-full pt-0 h-1/4">
          <img
            className="w-5/12 md:w-4/12 lg:w-6/12 pb-8 mx-auto"
            src="./block3/header.webp"
          />
          <img
            onClick={onPhotoClick}
            className=" w-5/12 md:w-4/12 lg:w-2/12 pb-8 cursor-pointer mx-auto"
            src="./block3/photo-button.webp"
          />
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-16 justify-center">
          <FloatingSharkgirl y={y} />
          <FloatingSharkboy y={y} />
          <img
            className="w-full md:w-2/3 lg:w-1/3 select-none"
            src="./block3/image.webp"
          />
          <img
            className="w-full md:w-2/3 lg:w-1/3 select-none"
            src="./block3/image.webp"
          />
          <img
            className="w-full md:w-2/3 lg:w-1/3 select-none"
            src="./block3/image.webp"
          />
          <FloatingGun y={y} />
        </div>
        <div className="relative h-1/3">
          <p
            ref={ref}
            className="text-2xl p-8 pt-16 font-bold z-40 relative select-none text-center"
          >
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
