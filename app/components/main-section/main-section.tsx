import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cat } from "./cat";
import { Links } from "./links";
import { CopyCa } from "./copy-ca";
import { ToastContainer } from "react-toastify";

export const MainSection = (props: any) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      <div className="flex w-full h-fit p-12 justify-center z-50">
        <Links />
      </div>
      <div
        className="absolute top-0 z-0"
        style={{ width: "100%", height: "100vh" }}
      >
        <Canvas className="z-0">
          <OrbitControls enablePan={false} enableZoom={false} />
          <ambientLight intensity={2} color={"white"} />
          <Cat play={props.play} />
        </Canvas>
      </div>
      <div className="flex flex-col gap-4 text-center z-50 mt-auto p-12 items-center z-0">
        <h1 className="mt-auto text-5xl uppercase font-bold select-none z-0">
          Da Puss
        </h1>
        <CopyCa copyLink="test" />
      </div>
    </div>
  );
};
