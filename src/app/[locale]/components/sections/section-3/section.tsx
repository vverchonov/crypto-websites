import { useTranslations } from "next-intl";
import { BigText } from "../../common/text/big-text";
import Image from "next/image";

import topScrImg from "../../../../../../public/section-3/topscr.png";
import btmScrImg from "../../../../../../public/section-3/btmscr.png";

function TopScreen() {
  return (
    <Image
      src={topScrImg}
      alt="Top Screen"
      className="w-full h-8 md:h-16"
      fetchPriority="high"
      priority
    />
  );
}

function BotScreen() {
  return (
    <Image
      src={btmScrImg}
      alt="Bottom Screen"
      className="w-full"
      fetchPriority="high"
      priority
    />
  );
}

export const SectionThree = (props: any) => {
  const t = useTranslations("SectionThree");
  return (
    <div className="relative w-full mb-2 ">
      <TopScreen />
      <div className="min-h-[80vh] flex items-center justify-center relative z-10">
        <img
          src={"/section-3/hand2.png"}
          alt="Hand"
          className="w-[20%] absolute left-0 bottom-1/2 translate-y-1/2"
        />
        <div className="flex flex-col justify-center items-center gap-24">
          <BigText text={"Augmented Reality"} />
          <a
            className="inline-flex justify-center items-center"
            href="https://bear-ar.sigma.zalupa.ca"
            target="_blank"
            rel="noreferrer"
          >
            <img src={"/section-3/button.png"} alt="Button" className="w-2/3" />
          </a>
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
      <BotScreen />
    </div>
  );
};
