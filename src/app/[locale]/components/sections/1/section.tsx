import { useTranslations } from "next-intl";
import { Links } from "../../common/links";
import { Wrapper } from "../../common/wrappers/wrapper";
import { RegularText } from "../../common/text/regular-text";
import { MarqueeCustom } from "./marquee";

export const SectionOne = (props: any) => {
  const t = useTranslations("SectionOne");
  return (
    <>
      <div className="min-h-screen w-full relative">
        <Links />
        <Wrapper>
          <div className="flex flex-col gap-8 items-center">
            <RegularText customClass={"text-center"} text={t("1")} />
            <img className="md:w-[50%]" src={"./1/game.png"} />
          </div>
        </Wrapper>
        <div className="w-full absolute bottom-0 left-0">
          <div className="flex">
            <img className="ml-16 h-32 md:h-64 w-auto" src="./1/bear-1.png" />
            <img
              className="mr-16 h-32 md:h-64 w-auto ms-auto mirror-y"
              src="./1/bear-2.png"
            />
          </div>
          <img className="w-full" src={"./1/doroga.png"} />
        </div>
      </div>
      <div className="w-full">
        <MarqueeCustom />
      </div>
    </>
  );
};
