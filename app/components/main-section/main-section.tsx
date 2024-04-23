import { Links } from "./links";
import { CopyCa } from "./copy-ca";
import { ToastContainer } from "react-toastify";

export const MainSection = (props: any) => {
    return (
        <div className="min-h-screen relative w-full flex justify-center items-center">
            <div className="absolute top-0">
                <img src="/bluetop.png" alt="header" />
            </div>
            <ToastContainer />
            <div className="w-8/12 flex flex-row justify-center items-center gap-6">
                <div className="object-cover w-auto h-full">
                    <video
                        src="/alien.mp4"
                        autoPlay
                        loop
                        controls={false}
                        className="rounded-2xl"></video>
                </div>
                <div className="flex flex-col gap-6 text-center items-center justify-between w-[55%] relative">
                    <div className="absolute transform translate-1/2 z-50">
                        <img className="w-12" src="/alien-main.png"></img>
                    </div>
                    <div className="flex w-full justify-center">
                        <Links />
                    </div>
                    <div className="flex w-[80%] transform -rotate-[16deg] flex-grow">
                        <svg
                            viewBox="0 0 180 90"
                            fill="#ffb700"
                            className="w-full h-full"
                            xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="90" cy="45" rx="90" ry="45" />
                        </svg>
                    </div>
                    <h1 className="flex mt-auto text-xl uppercase font-bold">
                        In 2023 I animated some silly IKEA aliens! This series
                        of animations went very viral. The project is not in
                        association with IKEA, but they did reach out with
                        approval!
                    </h1>
                    <CopyCa copyLink="test" />
                </div>
                <div></div>
            </div>
        </div>
    );
};
