import { useTranslations } from "next-intl";
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
      className="w-full h-8 md:h-16 select-none"
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
      className="w-full select-none"
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
          className="w-[20%] absolute left-0 bottom-1/2 translate-y-1/2 select-none"
        />
        <Wrapper>
          <div className="flex flex-col justify-center items-center gap-24">
            <HeaderText
              customClass={"mt-4 text-center"}
              text={"Augmented Reality"}
            />
            <a
              className="inline-flex justify-center items-center"
              href="http://ar.smobsolana.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={"/section-3/vr/qrcode.svg"}
                alt="Button"
                className="w-7/12 rounded-2xl select-none"
              />
            </a>
            <Preview />
          </div>
        </Wrapper>
        <img
          src={"/section-3/hand1.png"}
          alt="Hand"
          className="w-[20%] absolute right-0 bottom-1/2 translate-y-1/2 select-none"
        />
      </div>
      <BotScreen />
    </div>
  );
};
