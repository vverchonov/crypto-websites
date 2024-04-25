import { AppearWrapper } from "../../common/appear-wrapper";
import { FloatingCow } from "./floating-cow";
import { FloatingPlanet } from "./floating-planet";

export const FourthSection = (props: any) => {
  //use this y for flying on scroll elements
  const { y } = props;

  return (
    <div className="flex min-h-screen w-full relative bg-[#1B2327] blurred-border-top overflow-x-clip">
      <AppearWrapper>
        <img
          src="/block4/table.png"
          alt="table"
          className="w-full absolute bottom-0"
        ></img>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[25%] z-50 w-full">
          <div className="relative flex items-center justify-center">
            <img src="/block4/pc.png" alt="pc" className="w-[30%]"></img>
            <img
              className="screen-content absolute"
              src="/block4/meme.jpg"
              alt="Screen Content"
            ></img>
            <button className="button1 absolute">Next</button>
            <button className="button2 absolute">Prev</button>
          </div>
        </div>
        <FloatingPlanet />
        <img
          src="/sticker.png"
          alt="sticker1"
          className="w-[15%] absolute top-0 left-0 transform translate-x-[70%] translate-y-[60%]"
        ></img>
        <img
          src="/sticker.png"
          alt="sticker1"
          className="w-[15%] absolute top-0 right-24 transform -translate-x-[50%] translate-y-[10%] img-hor"
        ></img>
        <FloatingCow />
      </AppearWrapper>
    </div>
  );
};
