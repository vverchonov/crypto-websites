import { DevIcon } from "./icons/dev-icon";
import { RaydiumIcon } from "./icons/raydium-icon";
import { TgIcon } from "./icons/tg-icon";
import { XIcon } from "./icons/x-icon";
import { JupiterIcon } from "./icons/jupiter-icon";
import { DexscreenerIcon } from "./icons/dexscreener-icon";
import { DextoolsIcon } from "./icons/dextools-icon";

const buttonClass =
    "w-full select-none text-white font-bold py-4 px-4 cursor-pointer rounded-full flex flex-row content-center items-center transform transition duration-500 hover:scale-105";

const iconClass = "w-12 h-12 fill-black";

const Xlink = "https://twitter.com/ELONAMARSY";

const TelegramLink = "https://t.me/elonamarsy";

const TelegramDEVLink = "https://t.me/lettodev";

const WebLink = "https://home.elonamarsy.com/";

// const PumpLink = "";

const DexsrcreenerLink =
    "https://dexscreener.com/solana/A8ERP72GYZZEtoF4qH8rjHdHtkxKBCncr49Jow3NQdZZ";

const DextoolsLink =
    "https://www.dextools.io/app/en/solana/pair-explorer/A8ERP72GYZZEtoF4qH8rjHdHtkxKBCncr49Jow3NQdZZ?t=1713755434326";

const JupiterLink =
    "https://jup.ag/swap/So11111111111111111111111111111111111111112-HyU6jehd9G4W2uDMcuQbwFBmNKgEmvuDuwhgAwvSx2B2?inAmount=";

const RaydiumLink =
    "https://raydium.io/swap/?inputCurrency=HyU6jehd9G4W2uDMcuQbwFBmNKgEmvuDuwhgAwvSx2B2&outputCurrency=sol&outputSymbol=HyU6je&inputAmount=0&fixed=in";

export const Links = () => {
    return (
        <div className="flex flex-row gap-8 justify-center z-50">
            <a target="_blank" href={Xlink} className={buttonClass}>
                <XIcon iconClass={iconClass} />
            </a>
            <a target="_blank" href={TelegramLink} className={buttonClass}>
                <TgIcon iconClass={iconClass} />
            </a>
            <a target="_blank" href={TelegramDEVLink} className={buttonClass}>
                <DevIcon iconClass={iconClass} />
            </a>
            <a target="_blank" href={RaydiumLink} className={buttonClass}>
                <RaydiumIcon iconClass={iconClass} />
            </a>
            <a target="_blank" href={JupiterLink} className={buttonClass}>
                <JupiterIcon iconClass={iconClass} />
            </a>
            <a target="_blank" href={DexsrcreenerLink} className={buttonClass}>
                <DexscreenerIcon iconClass={iconClass} />
            </a>
            <a target="_blank" href={DextoolsLink} className={buttonClass}>
                <DextoolsIcon iconClass={iconClass} />
            </a>
        </div>
    );
};
