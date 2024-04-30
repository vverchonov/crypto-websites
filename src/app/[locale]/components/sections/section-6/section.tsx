import { useTranslations } from "next-intl";
import { HeaderText } from "../../common/text/header-text";
import { Wrapper } from "../../common/wrappers/wrapper";
import { RegularText } from "../../common/text/regular-text";
import { Links } from "../../common/links";
import { AppearWrapper } from "../../common/wrappers/appear-wrapper";

export const SectionSix = (props: any) => {
  const t = useTranslations("SectionSix");
  return (
    <>
      <div className="min-h-screen w-full relative max-w-screen-2xl">
        <AppearWrapper>
          <Wrapper>
            <div className="flex flex-col gap-16">
              <HeaderText customClass={"uppercase"} text={t("1")} />
              <div className="w-full flex justify-center">
                <img src={"./section-6/dev.webp"} />
              </div>
              <RegularText customClass={"text-center mb-16 "} text={t("2")} />
              <Links />
            </div>
          </Wrapper>
        </AppearWrapper>
      </div>
    </>
  );
};
