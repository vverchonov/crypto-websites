import { FloatingItems } from "./floating-alien";
import { FloatingBanana } from "./floating-banana";
import { FloatingDrink } from "./floating-drink";

export const SecondSection = (props: any) => {
  return (
    <div className="flex flex-col bg-white min-h-screen w-full p-28">
      <div className="flex flex-col justify-center align-center items-center">
        <div className="flex flex-col md:flex-row h-full w-full border-2 border-black">
          <div className="flex flex-col w-full md:w-1/2 border-2">
            <div className="relative ms-auto">
              <img className="z-40 relative" src="./block2/text.webp" />
              <FloatingBanana />
            </div>
            <FloatingItems />
          </div>
          <div className="relative w-full md:w-1/2 border-2 p-8">
            <div className="ms-auto rounded">
              <video
                className="w-2/4 mt-12 rounded-lg border"
                controls={false}
                autoPlay
                loop
                src="./block2/dancing.mp4"
              />
              <FloatingDrink />
            </div>
          </div>
        </div>
        <div className="w-2/4 text-center">
          <p className="text-3xl">
            These animations use the same 3D to 2d pipeline as ''GAMBACAT''!
          </p>
        </div>
      </div>
    </div>
  );
};

//  <div className="w-full md:w-1/2 border-2">
//           <img src="./block2/text.webp" />
//         </div>
//
