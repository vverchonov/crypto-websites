import { DevIcon } from "../../common/icons/dev-icon";
import { RaydiumIcon } from "../../common/icons/raydium-icon";
import { TgIcon } from "../../common/icons/tg-icon";
import { XIcon } from "../../common/icons/x-icon";
import { JupiterIcon } from "../../common/icons/jupiter-icon";
import { DexscreenerIcon } from "../../common/icons/dexscreener-icon";
import { DextoolsIcon } from "../../common/icons/dextools-icon";
import {
  DEXSCREENER,
  JUPITER,
  RAYDIUM,
  TELEGRAM,
  TWITTER,
  DEXTOOLS,
} from "@/app/[locale]/urls";

const buttonClass =
  " select-none orange-link font-bold cursor-pointer rounded-full flex flex-row content-center items-center transform transition duration-500 hover:scale-105";

const iconClass = "w-12 h-12 fill-[#111827] 2xl:h-24 2xl:w-24";

export const Links = (props: any) => {
  return (
    <div className=" w-full z-50 top-24 flex justify-center gap-12 lg:gap-24 flex-row flex-wrap max-w-screen-2xl">
      <a target="_blank" href={TWITTER} className={buttonClass}>
        <XIcon iconClass={iconClass} />
      </a>
      <a target="_blank" href={TELEGRAM} className={buttonClass}>
        <TgIcon iconClass={iconClass} />
      </a>

      <a target="_blank" href={RAYDIUM} className={buttonClass}>
        <RaydiumIcon iconClass={iconClass} />
      </a>
      <a target="_blank" href={JUPITER} className={buttonClass}>
        <JupiterIcon iconClass={iconClass} />
      </a>
      <a target="_blank" href={DEXSCREENER} className={buttonClass}>
        <DexscreenerIcon iconClass={iconClass} />
      </a>
      <a target="_blank" href={DEXTOOLS} className={buttonClass}>
        <DextoolsIcon iconClass={iconClass} />
      </a>
    </div>
  );
};
