"use client";

import { FloatingAlien } from "../../common/floating-items/floating-alien";
import { FloatingBanana } from "../../common/floating-items/floating-banana";
import { FloatingDildo } from "../../common/floating-items/floating-dildo";
import { FloatingDrink } from "../../common/floating-items/floating-drink";
import { Circle } from "../../common/circle";

import { AppearWrapper } from "../../common/appear-wrapper";
import { useMoveOnScrollHook } from "../../useMoveOnScrollHook";

export const SecondSection = (props: any) => {
  const { y, ref } = useMoveOnScrollHook();

  return (
    <div
      ref={ref}
      className="flex flex-col bg-white min-h-screen w-full p-4 lg:p-28 max-w-screen-2xl"
    >
      <AppearWrapper>
        <div className="flex flex-col justify-center align-center items-center">
          <div className="flex flex-col lg:flex-row h-full w-full border-black">
            <div className="flex flex-col w-full lg:w-1/2 items-center relative">
              <div className="relative ms-auto">
                <img className="z-40 relative" src="./block2/text.webp" />
                <FloatingBanana y={y} />
              </div>
              <Circle customClass={"img-hor mt-64"} />
              <FloatingAlien
                customClass={"img-hor"}
                y={y}
                customTranslate={"translate-y-[80%]"}
              />
              <div className="relative w-full justify-center">
                <div className="mx-auto lg:w-2/4 text-center">
                  <p className="text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <FloatingDildo y={y} />
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 p-4 lg:ps-24">
              <div className="ms-auto flex justify-center">
                <video
                  className="w-3/4 mt-12 rounded-2xl"
                  controls={false}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  src="./block2/dancing.mp4"
                />
                <FloatingDrink y={y} />
              </div>
            </div>
          </div>
        </div>
      </AppearWrapper>
    </div>
  );
};
