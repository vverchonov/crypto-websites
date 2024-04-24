import { Links } from "./links";
import { CopyCa } from "./copy-ca";
import { ToastContainer } from "react-toastify";
import { FloatingAlien } from "../common/floating-alien";
import { FloatingSilica } from "./floating-silica";
import { Circle } from "../common/circle";

export const MainSection = (props: any) => {
    return (
        <div className="flex bg-white min-h-screen w-full relative">
            <div className="absolute top-0">
                <img src="/block1/bluetop.png" alt="header" />
            </div>
            <ToastContainer />
            <div className="flex flex-col justify-center align-center items-center p-28">
                <div className="flex flex-col md:flex-row h-full w-full justify-center align-center gap-6 items-center">
                    <div className="object-scale-down w-full md:w-1/4 p-6">
                        <video
                            src="/block1/alien.mp4"
                            autoPlay
                            loop
                            controls={false}
                            className="rounded-2xl w-full h-full"></video>
                    </div>
                    <div className="flex flex-col h-full gap-6 text-center items-center justify-between relative w-1/2 p-6">
                        <FloatingAlien />
                        <FloatingSilica
                            itemClass="absolute right-1/2 -top-10"
                            imageClass="rotate(12deg)"
                        />
                        <FloatingSilica
                            itemClass="absolute right-0 top-64"
                            imageClass="rotate(36deg)"
                        />
                        <FloatingSilica
                            itemClass="absolute left-0 top-48"
                            imageClass="rotate(124deg)"
                        />
                        <Circle />
                        <h1 className="flex mt-auto text-xl uppercase font-bold">
                            In 2023 I animated some silly IKEA aliens! This
                            series of animations went very viral. The project is
                            not in association with IKEA, but they did reach out
                            with approval!
                        </h1>
                        <CopyCa copyLink="test" />
                        <div className="flex w-full justify-center">
                            <Links />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
