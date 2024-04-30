import { BigText } from "../../common/text/big-text";
import { RegularText } from "../../common/text/regular-text";

export const SectionThree = (props: any) => {
  return (
    <div className="relative w-full mb-2 ">
      <img src={"/section-3/topscr.png"} alt="Top Screen" className="w-full" />
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <img
          src={"/section-3/hand2.png"}
          alt="Hand"
          className="w-[20%] absolute left-0 bottom-1/2 translate-y-1/2"
        />
        <div className="flex flex-col justify-center items-center gap-14">
          <BigText text={"Augmented Reality"} />
          <img src={"/section-3/button.png"} alt="Button" className="w-[40%]" />
          <div className="flex flex-col items-center lg:flex-row gap-16 justify-center">
            <img
              className="w-full md:w-2/3 lg:w-1/3 select-none rounded-lg "
              src={"/section-3/example.png"}
              alt="image1"
            />
            <img
              className="w-full md:w-2/3 lg:w-1/3 select-none rounded-lg "
              src={"/section-3/example.png"}
              alt="image2"
            />
            <img
              className="w-full md:w-2/3 lg:w-1/3 select-none rounded-lg "
              src={"/section-3/example.png"}
              alt="image3"
            />
            <img
              className="w-full md:w-2/3 lg:w-1/3 select-none rounded-lg "
              src={"/section-3/example.png"}
              alt="image4"
            />
          </div>
        </div>
        <img
          src={"/section-3/hand1.png"}
          alt="Hand"
          className="w-[20%] absolute right-0 bottom-1/2 translate-y-1/2"
        />
      </div>
      <img
        src={"/section-3/btmscr.png"}
        alt="Bottom Screen"
        className="w-full"
      />
    </div>
  );
};
