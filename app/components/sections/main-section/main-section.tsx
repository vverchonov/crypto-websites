"use client";

import { Links } from "./links";
import { CopyCa } from "./copy-ca";
import { ToastContainer } from "react-toastify";
import { FloatingAlien } from "../../common/floating-items/floating-alien";
import { FloatingSilica } from "../../common/floating-items/floating-silica";
import { Circle } from "../../common/circle";

import { AppearWrapper } from "../../common/appear-wrapper";
import { useMoveOnScrollHook } from "../../useMoveOnScrollHook";
import { FloatingSolid } from "../../common/floating-items/floating-solid";
import { FloatingSputnik } from "../../common/floating-items/floating-sputnik";

export const MainSection = (props: any) => {
  const { y, ref } = useMoveOnScrollHook(100);

  return (
    <div className="flex min-h-screen w-full relative">
      <AppearWrapper>
        <div className="absolute top-0">
          <img src="/block1/bluetop.webp" alt="header" />
        </div>
        <ToastContainer />
        <div className="flex flex-col justify-center align-center items-center p-4 lg:p-28">
          <div className="flex flex-col-reverse lg:flex-row h-full w-full justify-center align-center gap-6 items-center relative">
            <FloatingSilica
              y={y}
              itemClass="left-0 bottom-48 md:top-48 z-50"
              imageClass="rotate(124deg)"
            />
            <div className="object-scale-down flex justify-center w-full lg:w-1/4 p-6">
              <img
                src="/block1/alien.gif"
                alt="dancing alien"
                className="rounded-2xl w-2/3 lg:w-full h-full drop-shadow-2xl border-black"
              ></img>
            </div>
            <div className="flex flex-col h-full gap-6 text-center items-center justify-between relative w-full lg:w-1/2 p-6">
              <img
                src="/block1/header.webp"
                alt="header"
                className="w-1/2 absolute top-6 md:-top-16 md:right-36"
              />
              <FloatingSolid
                y={y}
                itemClass="right-0 md:top-32 bottom-[30%] z-50"
                imageClass="rotate(36deg)"
              />
              <FloatingAlien
                imgPath={"./alien.webp"}
                y={y}
                customTranslate={"md:translate-y-[10%] translate-y-[50%]"}
              />
              <FloatingSputnik
                y={y}
                itemClass="left-0 md:-top-32 top-16"
                imageClass="rotate(12deg)"
              />

              <Circle customClass={"mt-64 w-[60%] md:w-[45%]"} fill="#ffb700" />
              <h1
                className="flex text-xl uppercase font-bold mt-24 z-50"
                ref={ref}
              >
                In 2023 I animated some silly IKEA aliens! This series of
                animations went very viral. The project is not in association
                with IKEA, but they did reach out with approval!
              </h1>
              <CopyCa copyLink="test" />
              <div className="flex w-full justify-center">
                <Links />
              </div>
            </div>
          </div>
        </div>
      </AppearWrapper>
    </div>
  );
};
