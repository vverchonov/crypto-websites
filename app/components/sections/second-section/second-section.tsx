"use client";

import { FloatingAlien } from "../../common/floating-items/floating-alien";
import { FloatingBanana } from "../../common/floating-items/floating-banana";
import { FloatingDildo } from "../../common/floating-items/floating-dildo";
import { FloatingDrink } from "../../common/floating-items/floating-drink";
import { Circle } from "../../common/circle";

import { AppearWrapper } from "../../common/appear-wrapper";
import { useMoveOnScrollHook } from "../../useMoveOnScrollHook";
import { Langs, useGetWordsHook } from "../../useGetWordsHook";

export const SecondSection = (props: any) => {
  const { y, ref } = useMoveOnScrollHook(100);
  const { word } = useGetWordsHook();

  return (
    <div className="flex flex-col bg-[#EBFCFF] min-h-screen w-full p-4 lg:p-28 max-w-screen-2xl">
      <AppearWrapper>
        <div className="flex flex-col justify-center align-center items-center">
          <div className="flex flex-col lg:flex-row h-full w-full border-black">
            <div className="flex flex-col w-full lg:w-1/2 items-center relative">
              <div className="relative ms-auto">
                <img
                  ref={ref}
                  className="z-40 relative"
                  src="./block2/text.webp"
                />
                <FloatingBanana
                  customClass={"absolute right-12 w-fit top-0 z-0 select-none"}
                  y={y}
                />
              </div>
              <Circle customClass={"mirror-y mt-64 w-[55%]"} fill="#FF4A4A" />
              <FloatingAlien
                imgPath={"./block2/alien2.webp"}
                customClass={"w-48 md:w-72"}
                y={y}
                customTranslate={"translate-y-[80%]"}
              />
              <div className="relative w-full justify-center">
                <div className="mx-auto lg:w-3/4 text-center">
                  <p className="text-2xl font-bold text-center">
                    {word("2", props.lang)}
                  </p>
                </div>
                <FloatingDildo y={y} />
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 p-4 lg:ps-24">
              <div className="ms-auto flex justify-center">
                <img
                  className="w-3/4 mt-12 rounded-2xl drop-shadow-2xl"
                  src="./block2/alien.gif"
                  alt="alien"
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
