import { useTranslations } from "next-intl";

import { MarqueeCustom } from "./marquee";

import { BigText } from "../../common/text/big-text";
import { WalletNFT } from "./useWalletHook";

export const SectionTwo = (props: any) => {
  const t = useTranslations("SectionTwo");

  return (
    <>
      <div className="w-full">
        <MarqueeCustom />
        <div className="flex flex-col justify-center items-center w-full">
          <BigText
            customClass={" max-w-screen-2xl text-center lg:text-4xl"}
            text={t("1")}
          />
          <a
            href="https://google.com"
            className="text-3xl mt-6 btn-google hover:scale-105 transition-transform duration-150 ease-in-out"
          >
            <p className="lg:text-4xl p-16 pt-6 cursor-pointer text-center select-none">
              {t("2")}
            </p>
          </a>
        </div>
        <WalletNFT
          failedTxt={t("3")}
          failedClaimTxt={t("4")}
          failedCalimTryTxt={t("5")}
          claimedTxt={t("6")}
          loadingTxt={t("8")}
          claimTxt={t("7")}
          soldOutTxt={t("9")}
          soldOutTxt2={t("10")}
          claimingTxt={t("11")}
          claimNFTTxt={t("12")}
        />
      </div>
    </>
  );
};
