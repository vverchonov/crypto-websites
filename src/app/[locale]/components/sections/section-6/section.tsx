import { useTranslations } from "next-intl";
import { HeaderText } from "../../common/text/header-text";
import { Wrapper } from "../../common/wrappers/wrapper";
import { RegularText } from "../../common/text/regular-text";
import { Links } from "../../common/links";
import { AppearWrapper } from "../../common/wrappers/appear-wrapper";
import { BigText } from "../../common/text/big-text";

export const SectionSix = (props: any) => {
  const t = useTranslations("SectionSix");
  return (
    <>
      <div className="min-h-screen w-full relative max-w-screen-2xl">
        <AppearWrapper>
          <Wrapper>
            <div className="flex flex-col gap-16">
              <HeaderText
                customClass={"uppercase text-center mb-16"}
                text={t("1")}
              />
              <div className="flex flex-col md:flex-row content-center justify-center">
                <div className="w-full flex justify-center md:w-1/3 w-full">
                  <img src={"./section-6/dev.webp"} />
                </div>
                <div className="md:w-1/2 w-full flex justify-center align-center">
                  <BigText
                    customWrapper={
                      " flex justify-center align-center items-center "
                    }
                    customClass={" md:text-left text-center mb-16 md:mb-0 "}
                    text={t("2")}
                  />
                </div>
              </div>
              <Links customWrapper={"mt-auto max-w-screen-2xl"} />
            </div>
          </Wrapper>
        </AppearWrapper>
      </div>
    </>
  );
};
