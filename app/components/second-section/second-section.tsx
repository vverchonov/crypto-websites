"use client";

import { useRef } from "react";
import { FloatingAlien } from "../common/floating-alien";
import { FloatingBanana } from "./floating-banana";
import { FloatingDildo } from "./floating-dildo";
import { FloatingDrink } from "./floating-drink";

import { MotionValue, useScroll, useTransform } from "framer-motion";
import { Circle } from "../common/circle";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

export const SecondSection = (props: any) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 100);

    return (
        <div className="flex flex-col bg-white min-h-screen w-full p-28 max-w-screen-2xl">
            <div className="flex flex-col justify-center align-center items-center">
                <div className="flex flex-col md:flex-row h-full w-full  border-black">
                    <div className="flex flex-col w-full md:w-1/2 relative items-center">
                        <div className="relative ms-auto">
                            <img
                                className="z-40 relative"
                                src="./block2/text.webp"
                            />
                            <FloatingBanana y={y} />
                        </div>
                        <FloatingAlien y={y} />
                        <Circle />
                        <div className="relative w-full pt-16 justify-center">
                            <div className="mx-auto w-2/4 text-center">
                                <p className="text-2xl">
                                    These animations use the same 3D to 2d
                                    pipeline as ''GAMBACAT''!
                                </p>
                            </div>
                            <FloatingDildo y={y} />
                        </div>
                    </div>
                    <div className="relative w-full md:w-1/2 p-8 ps-24">
                        <div className="ms-auto rounded">
                            <video
                                className="w-3/4 mt-12 rounded-lg border"
                                controls={false}
                                autoPlay
                                loop
                                src="./block2/dancing.mp4"
                            />
                            <FloatingDrink y={y} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
