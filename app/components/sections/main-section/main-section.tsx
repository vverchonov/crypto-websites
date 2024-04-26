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
import { Langs, useGetWordsHook } from "../../useGetWordsHook";

export const MainSection = (props: any) => {
  const { y, ref } = useMoveOnScrollHook(100);
  const { word } = useGetWordsHook();

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
            <div className="object-scale-down flex-col flex content-center items-center justify-center w-full lg:w-1/4 p-6">
              <p className="text-2xl text-center font-bold">Choose language:</p>
              <div className="flex flex-row justify-center gap-4 mb-8 mt-4">
                <button
                  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  onClick={() => {
                    props.setLang(Langs.ENG);
                  }}
                >
                  English
                </button>
                <button
                  className={
                    "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  }
                  onClick={() => {
                    props.setLang(Langs.CHINESE);
                  }}
                >
                  Chinese
                </button>
              </div>
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
                {word("1", props.lang)}
              </h1>
              <CopyCa copyLink="CKvHs1gAdyJUw3GoWQmmQ3fRVWxMqiKv841L7hmfFHyy" />
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
