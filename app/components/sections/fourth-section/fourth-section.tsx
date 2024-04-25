import { useRef, useState } from "react";
import { AppearWrapper } from "../../common/appear-wrapper";
import { FloatingCow } from "../../common/floating-items/floating-cow";
import { FloatingPlanet } from "../../common/floating-items/floating-planet";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useMoveOnScrollHook } from "../../useMoveOnScrollHook";

export const FourthSection = (props: any) => {
  const { y, ref } = useMoveOnScrollHook(100);

  const audioPcRef = useRef();
  const [slideDirection, setSlideDirection] = useState("right");
  const audioClickRef = useRef();

  const play = (ref: any) => {
    if (ref.current) {
      // @ts-ignore
      ref.current.currentTime = 0;
      // @ts-ignore
      ref.current.play();
    }
  };

  const stop = (ref: any) => {
    if (ref.current) {
      // @ts-ignore
      ref.current.pause();
    }
  };

  const turn = () => {
    if (off) {
      // @ts-ignore
      audioPcRef.current.src = "/block4/start.mp3";
      play(audioPcRef);
      setTimeout(() => {
        // @ts-ignore
        audioPcRef.current.src = "/block4/working.mp3";
        play(audioPcRef);
      }, 700);
    } else {
      stop(audioPcRef);
      // @ts-ignore
      audioPcRef.current.src = "/block4/stop.mp3";
      play(audioPcRef);
    }
    setOff(!off);
  };

  const [off, setOff] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/block4/m1.webp",
    "/block4/m2.webp",
    "/block4/m3.webp",
    "/block4/m4.webp",
  ];

  const nextSlide = () => {
    if (off) return;
    play(audioClickRef);
    setSlideDirection("right");
    setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 100);
  };

  const prevSlide = () => {
    if (off) return;
    play(audioClickRef);
    setSlideDirection("left");
    setTimeout(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
      );
    }, 100);
  };

  return (
    <div className="flex min-h-screen w-full relative bg-[#1B2327] blurred-border-top overflow-x-clip">
      <audio hidden ref={audioPcRef as any} src="" />
      <audio hidden ref={audioClickRef as any} src="/block4/click.mp3" />
      <img
        src="/block4/table.webp"
        alt="table"
        className="w-full absolute bottom-0"
      />
      <AppearWrapper>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[5%] lg:-translate-y-[25%] z-50 w-full select-none">
          <div className="relative flex items-center justify-center">
            <img
              src="/block4/pc.webp"
              alt="pc"
              className="w-full lg:w-[30%] z-30"
            ></img>
            <div className="pc-content absolute crt z-20"></div>
            <div className="pc-content absolute z-10 scan-bar">
              <div className="bg-[#3b86e98b] h-[20px] w-full"></div>
            </div>
            {off ? (
              <img
                className="pc-content absolute transition-transform duration-300 ease-in-out"
                src="/block4/m5.webp"
                alt="Screen Content"
              />
            ) : (
              <TransitionGroup className="pc-content absolute overflow-hidden">
                <CSSTransition
                  key={currentSlide}
                  timeout={200}
                  classNames={`slide-${slideDirection}`}
                >
                  <img
                    className="w-full absolute transition-transform duration-200 ease-in-out"
                    src={slides[currentSlide]}
                    alt="Screen Content"
                  />
                </CSSTransition>
              </TransitionGroup>
            )}
            <button
              className="next-btn absolute z-40 p-8 w-6 h-6"
              onClick={nextSlide}
            >
              Next
            </button>
            <button
              className="prev-btn absolute z-40 p-8 w-6 h-6"
              onClick={prevSlide}
            >
              Prev
            </button>
            <button
              className="on-btn absolute z-40 p-8 w-6 h-6"
              onClick={() => turn()}
            >
              On
            </button>
          </div>
        </div>
        <FloatingPlanet y={y} />
        <img
          ref={ref}
          src="/sticker.webp"
          alt="sticker1"
          className="lg:w-[15%] w-[25%] absolute top-0 left-0 transform translate-x-[30%] lg:translate-x-[70%] translate-y-[60%]"
        />
        <img
          src="/sticker.webp"
          alt="sticker1"
          className="lg:w-[15%] w-[30%] absolute top-0 right-0 transform -translate-x-[50%] translate-y-[10%] mirror-y"
        />
        <FloatingCow y={y} />
      </AppearWrapper>
    </div>
  );
};
