"use client";

import { Links } from "./links";
import { CopyCa } from "./copy-ca";
import { ToastContainer } from "react-toastify";
import { FloatingAlien } from "../../common/floating-items/floating-alien";
import { FloatingSilica } from "../../common/floating-items/floating-silica";
import { Circle } from "../../common/circle";

import { AppearWrapper } from "../../common/appear-wrapper";

export const MainSection = (props: any) => {
  const { y } = props;

  return (
    <div className="flex min-h-screen w-full relative">
      <AppearWrapper>
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
                controls={false}
                autoPlay={true}
                muted={true}
                loop={true}
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
