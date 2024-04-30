import { Wrapper } from "../../common/wrappers/wrapper";
import { BigText } from "../../common/text/big-text";
import { MovingImg } from "../../moving-img";
import { useTranslations } from "next-intl";
import { AppearWrapper } from "../../common/wrappers/appear-wrapper";

export const SectionFour = (props: any) => {
  const t = useTranslations("SectionFour");
  return (
    <>
      <div className="min-h-screen w-full content-center relative overflow-hidden max-w-screen-2xl">
        <Wrapper>
          <AppearWrapper>
            <div className="flex flex-col gap-8 lg:flex-row content-center min-h-screen py-16 justify-center relative">
              <MovingImg
                customClassWrapper={"top-[50%] left-[40%]"}
                imgPath={"./section-4/floating-item.png"}
              />
              <div className="flex content-center items-center lg:w-5/12">
                <img className="" src="./section-4/bear.png" />
              </div>
              <div className="lg:w-5/12 flex flex-col gap-8 justify-center">
                <BigText customClass={"text-center"} text={t("1")} />
                <BigText customClass={"text-center"} text={t("2")} />
                <BigText customClass={"text-center"} text={t("3")} />
                <BigText customClass={"text-center"} text={t("4")} />
              </div>
            </div>
          </AppearWrapper>
          <AppearWrapper>
            <div className="flex flex-col-reverse gap-8 lg:flex-row content-center min-h-screen py-16 justify-center relative">
              <MovingImg
                customClassWrapper={"left-[10%]"}
                imgPath={"./section-4/floating-item.png"}
              />
              <img
                className="absolute bottom-0 left-[0%] h-[12vh] md:h-[24vh]"
                src="./section-4/bear-side.png"
              />
              <img
                className="absolute mirror-y bottom-0 right-[0%] h-[12vh] md:h-[24vh]"
                src="./section-4/bear-side.png"
              />
              <div className="flex items-center lg:w-5/12">
                <BigText
                  customClass={"md:text-left text-center"}
                  extra={
                    <MovingImg
                      y={150}
                      customClassWrapper={"bottom-0 left-[50%] "}
                      imgPath={"./section-4/floating-item.png"}
                    />
                  }
                  text={t("5")}
                />
              </div>
              <div className="lg:w-5/12 flex flex-col gap-8">
                <div className="h-[80vh] relative" id="dexscreener-embed">
                  <img
                    className="absolute top-0 w-32 left-[50%] mt-[-30%] md:mt-[-15%]"
                    src={"./section-4/sitting.webp"}
                  />
                  <iframe
                    className="w-full h-full rounded-xl shadow-2xl"
                    src="https://dexscreener.com/solana/CSUbFtooSRsNs1HfAreVnG42fwef234gD6AUZ3Mt6deYtAcv3uQjp?embed=1&theme=dark"
                  ></iframe>
                </div>
              </div>
            </div>
          </AppearWrapper>
        </Wrapper>
      </div>
    </>
  );
};
