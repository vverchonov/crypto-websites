import { useTranslations } from "next-intl";
import { HeaderText } from "../../common/text/header-text";
import { Wrapper } from "../../common/wrappers/wrapper";
import { Links } from "./links";
import { AppearWrapper } from "../../common/wrappers/appear-wrapper";
import { BigText } from "../../common/text/big-text";
import { CopyCa } from "../../common/copy-ca";
import Image from "next/image";

import DevImg from "../../../../../../public/section-6/dev.webp";

function Dev() {
  return (
    <Image
      src={DevImg}
      alt="Developer"
      priority
      fetchPriority="high"
      className="rounded-2xl shadow-xl select-none "
    />
  );
}

export const SectionSix = (props: any) => {
  const t = useTranslations("SectionSix");
  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center content-center max-w-screen-2xl">
        <AppearWrapper>
          <Wrapper>
            <div className="flex flex-col gap-16">
              <HeaderText
                customClass={"uppercase text-center mb-2"}
                text={t("1")}
              />
              <Dev />
              <div className="flex flex-col items-center justify-center gap-8">
                <BigText
                  customWrapper={
                    " flex justify-center align-center items-center "
                  }
                  customClass={"text-center mb-16 md:mb-0 "}
                  text={t("2")}
                />
                <Links />
                <CopyCa />
              </div>
            </div>
          </Wrapper>
        </AppearWrapper>
      </div>
    </>
  );
};
