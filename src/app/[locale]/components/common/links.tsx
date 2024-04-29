import { DevIcon } from "./icons/dev-icon";
import { RaydiumIcon } from "./icons/raydium-icon";
import { TgIcon } from "./icons/tg-icon";
import { XIcon } from "./icons/x-icon";
import { JupiterIcon } from "./icons/jupiter-icon";
import { DexscreenerIcon } from "./icons/dexscreener-icon";
import { DextoolsIcon } from "./icons/dextools-icon";
import {
  DEXSCREENER,
  JUPITER,
  RAYDIUM,
  TELEGRAM_DEV,
  TELEGRAM,
  TWITTER,
  DEXTOOLS,
} from "@/app/[locale]/urls";

const buttonClass =
  " select-none text-white font-bold cursor-pointer rounded-full flex flex-row content-center items-center transform transition duration-500 hover:scale-105";

const iconClass = "w-12 h-12 fill-black";

export const Links = () => {
  return (
    <div className="flex gap-2 flex-row justify-center z-50 flex-wrap">
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
