import { useTranslations } from "next-intl";
import { Wrapper } from "../../common/wrappers/wrapper";
import { BigText } from "../../common/text/big-text";

export const SectionFour = (props: any) => {
  const t = useTranslations("SectionFour");
  return (
    <>
      <div className="min-h-screen w-full content-center">
        <Wrapper>
          <div className="flex flex-col gap-8 lg:flex-row content-center min-h-screen py-16 justify-center flex">
            <div className="flex content-center items-center lg:w-5/12">
              <img className="" src="./4/bear.png" />
            </div>
            <div className="lg:w-5/12 flex flex-col gap-8 justify-center">
              <BigText customClass={"text-center"} text={t("1")} />
              <BigText customClass={"text-center"} text={t("2")} />
              <BigText customClass={"text-center"} text={t("3")} />
              <BigText customClass={"text-center"} text={t("4")} />
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row content-center min-h-screen py-16 justify-center flex">
            <div className="flex items-center lg:w-5/12">
              <BigText text={t("5")} />
            </div>
            <div className="lg:w-5/12 flex flex-col gap-8 ">
              <div className="h-96 h-[80vh]" id="dexscreener-embed">
                <iframe
                  className="w-full h-full"
                  src="https://dexscreener.com/solana/CSUbFtooSRsNs1HfAreVnG42fwef234gD6AUZ3Mt6deYtAcv3uQjp?embed=1&theme=dark"
                ></iframe>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      ;
    </>
  );
};
