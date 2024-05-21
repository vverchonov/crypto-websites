"use client";

import { FloatingSharkboy } from "../../common/floating-items/floating-sharkboy";
import { FloatingSharkgirl } from "../../common/floating-items/floating-sharkgirl";
import { FloatingMeteor } from "../../common/floating-items/floating-meteor";
import { FloatingGun } from "../../common/floating-items/floating-gun";
import { AppearWrapper } from "../../common/appear-wrapper";
import { useMoveOnScrollHook } from "../../useMoveOnScrollHook";
import { Langs, useGetWordsHook } from "../../useGetWordsHook";
import Marquee from "react-fast-marquee";
import { useCallback } from "react";

function createArrayFromNtoM(n: number, m: number) {
  let array = [];
  for (let i = n; i <= m; i++) {
    array.push(i);
  }
  return array;
}

export const ThirdSection = (props: any) => {
  const { y, ref } = useMoveOnScrollHook(100);
  const { word } = useGetWordsHook();
  const onPhotoClick = () => {
    alert("cheese!");
  };

  const arr1 = useCallback(() => {
    return createArrayFromNtoM(1, 20);
  }, []);

  return (
    <div className="relative flex-col bg-[#ccf7ff] min-h-screen w-full p-4 pt-28 lg:px-64 max-w-screen-2xl mb-24">
      <AppearWrapper>
        <div className="relative flex-col flex items-center justify-center w-full pt-0 h-1/4">
          <img
            className="w-6/12 md:w-4/12 lg:w-6/12 pb-8"
            src="./block3/header.webp"
            alt="header"
          />
          <button
            onClick={onPhotoClick}
            disabled={true}
            className=" w-5/12 md:w-5/12 lg:w-3/12 cursor-not-allowed pb-8 hover:scale-110 transition-all duration-300"
          >
            <img src="./block3/knopka.webp" alt="photo" />
          </button>
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-16 justify-center">
          <FloatingSharkgirl y={y} />
          <FloatingSharkboy y={y} />
          <Marquee speed={40} autoFill direction={"right"}>
            <div className="flex flex-row gap-8 h-[25vh] ms-8 w-full z-0">
              {arr1().map((val: number, index: any) => {
                return (
                  <img
                    className={
                      "w-auto h-auto rounded-2xl select-none object-contain z-0"
                    }
                    src={`./block3/mom${val}.webp`}
                    key={index}
                  />
                );
              })}
            </div>
          </Marquee>
          <FloatingGun y={y} />
        </div>
        <div className="relative h-1/3">
          <p
            ref={ref}
            className="text-2xl p-8 pt-16 font-bold z-40 relative select-none text-center"
          >
            {word("3", props.lang)}
          </p>
        </div>
        <FloatingMeteor y={y} />
      </AppearWrapper>
    </div>
  );
};
