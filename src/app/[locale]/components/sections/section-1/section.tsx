import { useTranslations } from "next-intl";
import { Links } from "./links";
import { Wrapper } from "../../common/wrappers/wrapper";
import { RegularText } from "../../common/text/regular-text";

import { AppearWrapper } from "../../common/wrappers/appear-wrapper";

// import { SwitchLang } from "../../switch-lang";
import { CopyCa } from "../../common/copy-ca";
import Image from "next/image";

import dorogaImg from "../../../../../../public/section-1/doroga.webp";
import city from "../../../../../../public/section-1/city.webp";
import game from "../../../../../../public/section-1/game.webp";
import Marquee from "react-fast-marquee";
import { MovingImg } from "../../moving-img";
import { Game } from "./game";

function Doroga() {
  return (
    <AppearWrapper>
      <div className="w-full relative overflow-hidden">
        <Marquee
          className="relative bottom-[-15px]"
          speed={5}
          autoFill
          direction={"left"}
        >
          <Image
            src={city}
            alt="city"
            className="w-full h-96 z-10 select-none"
            fetchPriority="high"
            priority
          />
        </Marquee>
        <Marquee
          className="relative bottom-[-5px] overflow-hidden"
          speed={15}
          autoFill
          direction={"right"}
        >
          <div className="flex flex-row h-auto">
            <Image
              src={dorogaImg}
              alt="Doroga"
              className="w-full h-24 md:h-36 select-none"
              fetchPriority="high"
              priority
            />
          </div>
        </Marquee>
      </div>
    </AppearWrapper>
  );
}

function Clouds() {
  return (
    <AppearWrapper>
      <div className="w-full absolute top-3 left-0 flex flex-col gap-4">
        <Marquee className="relative " speed={15} autoFill direction={"left"}>
          <div className="flex flew-row mr-12 gap-24">
            {[...Array(10)].map((_, index) => (
              <img
                key={index}
                src={`/section-1/clouds/cl${index + 1}.webp`}
                alt={`Image ${index}`}
                className="w-full h-16 w-auto select-none"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </AppearWrapper>
  );
}

export const SectionOne = (props: any) => {
  const t = useTranslations("SectionOne");
  return (
    <>
      <AppearWrapper customClass={"w-full"}>
        <div className="min-h-screen w-full flex justify-center align-center items-center overflow-x-clip relative bg-[#d9e8f8]">
          <Clouds />
          <Wrapper>
            <div className="flex flex-col gap-8 items-center mt-14 md:mt-12">
              <Links />
              <RegularText customClass={"text-center z-[100]"} text={t("1")} />
              <CopyCa />

              {/* <Game /> */}
            </div>
          </Wrapper>
          <div className="w-full absolute bottom-0 left-0 ">
            <div className="flex">
              <MovingImg
                tx={7}
                ty={2}
                tz={5}
                customClassWrapper={"absolute z-50 bottom-14 md:bottom-5"}
                customClassImg={
                  "md:ml-64 h-32 md:h-64  w-auto z-50 relative select-none"
                }
                imgPath={"./section-1/bear-1.webp"}
              />
              <MovingImg
                tx={10}
                ty={2}
                tz={5}
                customClassWrapper={"right-0 z-50 bottom-14 md:bottom-5"}
                customClassImg={
                  "md:mr-64 h-32 md:h-64 w-auto ms-auto mirror-y z-50 relative select-none"
                }
                imgPath={"./section-1/bear-2.webp"}
              />
            </div>
            <Doroga />
          </div>
        </div>
      </AppearWrapper>
    </>
  );
};
