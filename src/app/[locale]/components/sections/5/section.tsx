import { useTranslations } from "next-intl";
import { Wrapper } from "../../common/wrappers/wrapper";
import { HeaderText } from "../../common/text/header-text";
import { RegularText } from "../../common/text/regular-text";

export const SectionFive = (props: any) => {
  const t = useTranslations("SectionFive");
  return (
    <>
      <div className="min-h-screen w-full relative">
        <Wrapper>
          <div className="flex flex-col gap-16">
            <HeaderText customClass={"uppercase text-center"} text={t("1")} />
            <div className="flex flex-col gap-8 lg:flex-row content-center py-16 justify-center flex">
              <div className="flex content-center items-center lg:w-5/12">
                <RegularText text={t("2")} />
              </div>
              <div className="lg:w-5/12 flex flex-col gap-8 justify-center">
                <img className="h-[70vh]" src="./5/bear-gun.png" />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};
