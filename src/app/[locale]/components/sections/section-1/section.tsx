import { useTranslations } from "next-intl";
import { Links } from "../../common/links";
import { Wrapper } from "../../common/wrappers/wrapper";
import { RegularText } from "../../common/text/regular-text";

import { AppearWrapper } from "../../common/wrappers/appear-wrapper";
import { MarqueeCustom } from "./marquee";

export const SectionOne = (props: any) => {
  const t = useTranslations("SectionOne");
  return (
    <>
      <AppearWrapper>
        <div className="min-h-screen w-full relative ">
          <Wrapper>
            <div className="flex flex-col gap-8 items-center">
              <RegularText customClass={"text-center"} text={t("1")} />
              <img
                className="w-[50%] md:w-[15%]"
                src={"./section-1/change-lang.png"}
              />
              <img className="md:w-[50%]" src={"./section-1/game.png"} />
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
            <img className="w-full" src={"./section-1/doroga.webp"} />
          </div>
        </div>
      </AppearWrapper>
      <div className="w-full">
        <MarqueeCustom />
      </div>
    </>
  );
};
