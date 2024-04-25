import { useState } from "react";
import { AppearWrapper } from "../../common/appear-wrapper";
import { FloatingCow } from "../../common/floating-items/floating-cow";
import { FloatingPlanet } from "../../common/floating-items/floating-planet";

export const FourthSection = (props: any) => {
  const { y } = props;

  const [off, setOff] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/block4/m1.png",
    "/block4/m2.png",
    "/block4/m3.png",
    "/block4/m4.png",
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="flex min-h-screen w-full relative bg-[#1B2327] blurred-border-top overflow-x-clip">
      <AppearWrapper>
        <img
          src="/block4/table.png"
          alt="table"
          className="w-full absolute bottom-0"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[25%] z-50 w-full">
          <div className="relative flex items-center justify-center">
            <img src="/block4/pc.png" alt="pc" className="w-[30%] z-30"></img>
            <div className="screen-content absolute crt z-20"></div>
            <div className="screen-content absolute z-10 scan-bar">
              <div className="bg-blue-600 h-[20px] w-full"></div>
            </div>
            <img
              className="screen-content absolute"
              src={off ? "/block4/m5.png" : slides[currentSlide]}
              alt="Screen Content"
            />
            <button
              className="button1 absolute z-40 p-8 w-6 h-6"
              onClick={nextSlide}
            >
              Next
            </button>
            <button
              className="button2 absolute z-40 p-8 w-6 h-6"
              onClick={prevSlide}
            >
              Prev
            </button>
            <button
              className="button3 absolute z-40 p-8 w-6 h-6"
              onClick={() => setOff(!off)}
            >
              On
            </button>
          </div>
        </div>
        <FloatingPlanet />
        <img
          src="/sticker.png"
          alt="sticker1"
          className="w-[15%] absolute top-0 left-0 transform translate-x-[70%] translate-y-[60%]"
        />
        <img
          src="/sticker.png"
          alt="sticker1"
          className="w-[15%] absolute top-0 right-24 transform -translate-x-[50%] translate-y-[10%] img-hor"
        />
        <FloatingCow />
      </AppearWrapper>
    </div>
  );
};
