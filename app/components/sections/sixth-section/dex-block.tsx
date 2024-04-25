import { useRef } from "react";
import { FloatingUfo } from "../../common/floating-items/floating-ufo";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import { FLoatingFire } from "../../common/floating-items/floating-fire";
import { FloatingKluch } from "../../common/floating-items/floating-kluch";
import { FloatingBigUfo } from "../../common/floating-items/floating-bigufo";
import { useMoveOnScrollHook } from "../../useMoveOnScrollHook";

export const DexBlock = (props: any) => {
  const { y, ref } = useMoveOnScrollHook(100);

  return (
    <>
      <div className="min-h-screen flex flex-row lg:flex-col justify-center h-full items-center content-center w-full lg:gap-8 pt-28 p-4 lg:px-24 pb-28 max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row w-full items-center">
          <div className="ms-auto w-full lg:w-2/4 h-full">
            <div className="w-full h-full relative" id="dexscreener-embed">
              <FLoatingFire y={y} />
              <FloatingBigUfo y={y} />
            </div>
          </div>
          <div className="ms-auto w-full lg:w-2/4 h-full relative">
            <div className="w-full h-full relative" id="dexscreener-embed">
              <iframe
                className="w-full h-[80vh] z-50 relative rounded-xl"
                src="https://dexscreener.com/solana/ERCD6qtvn4sWhmNBLyPXfoKghjFRM3gxAYKxNzcw9a5x?embed=1&theme=dark&trades=0"
              ></iframe>
              <div ref={ref}></div>
              <FloatingUfo y={y} />
            </div>
          </div>
        </div>
        <div className="lg:w-full relative">
          <FloatingKluch y={y} />
        </div>
      </div>
    </>
  );
};
