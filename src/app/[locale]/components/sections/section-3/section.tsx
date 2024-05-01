import { useTranslations } from "next-intl";
import { BigText } from "../../common/text/big-text";
import Image from "next/image";

import topScrImg from "../../../../../../public/section-3/topscr.webp";
import btmScrImg from "../../../../../../public/section-3/btmscr.webp";
import Preview from "./preview";
import { HeaderText } from "../../common/text/header-text";
import { Wrapper } from "../../common/wrappers/wrapper";

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
    <div className="relative w-full mb-2">
      <TopScreen />
      <div className="min-h-[80vh] flex items-center justify-center relative z-10">
        <img
          src={"/section-3/hand2.png"}
          alt="Hand"
          className="w-[20%] absolute left-0 bottom-1/2 translate-y-1/2"
        />
        <Wrapper>
          <div className="flex flex-col justify-center items-center gap-24">
            <BigText customClass={"mt-4"} text={"Augmented Reality"} />
            <a
              className="inline-flex justify-center items-center"
              href="https://bear-ar.sigma.zalupa.ca"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={"/section-3/vr/qrcode.svg"}
                alt="Button"
                className="w-11/12"
              />
            </a>
            <Preview />
          </div>
        </Wrapper>
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
