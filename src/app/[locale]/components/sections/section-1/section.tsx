import { useTranslations } from "next-intl";
import { Links } from "./links";
import { Wrapper } from "../../common/wrappers/wrapper";
import { RegularText } from "../../common/text/regular-text";

import { AppearWrapper } from "../../common/wrappers/appear-wrapper";
import { MarqueeCustom } from "./marquee";
// import { SwitchLang } from "../../switch-lang";
import { CopyCa } from "../../common/copy-ca";
import Image from "next/image";

import dorogaImg from "../../../../../../public/section-1/doroga.webp";

function Doroga() {
  return (
    <Image
      src={dorogaImg}
      alt="Doroga"
      className="w-full h-16 md:h-32"
      fetchPriority="high"
      priority
    />
  );
}

export const SectionOne = (props: any) => {
  const t = useTranslations("SectionOne");
  return (
    <>
      <AppearWrapper>
        <div className="min-h-screen w-full relative ">
          <Wrapper>
            <div className="flex flex-col gap-8 items-center">
              <Links />

              <RegularText customClass={"text-center"} text={t("1")} />
              <CopyCa copyLink="" />

              <img
                className="md:w-[50%] mb-32 md:mb-16"
                src={"./section-1/game.webp"}
              />
            </div>
          </Wrapper>
          <div className="w-full absolute bottom-0 left-0">
            <div className="flex">
              <img
                className="ml-16 h-32 md:h-64 w-auto"
                src="./section-1/bear-1.webp"
              />
              <img
                className="mr-16 h-32 md:h-64 w-auto ms-auto mirror-y"
                src="./section-1/bear-2.webp"
              />
            </div>
            <Doroga />
          </div>
        </div>
      </AppearWrapper>
    </>
  );
};
