import { XIcon } from "./icons/x-icon";
import { TWITTER, TELEGRAM, TELEGRAM_DEV } from "../urls";
import { TgIcon } from "./icons/tg-icon";
import { DevIcon } from "./icons/dev-icon";

const iconClass = "w-6 h-6 fill-white";

export const FooterSection = () => {
    return (
        <footer className="bg-black py-2 text-center text-white backdrop-blur transition-colors duration-500">
            <p className="flex flex-row items-center justify-center gap-2">
                <span className="text-sm font-bold sm:text-xl">
                    $DAPUSS &copy; 2024
                </span>
                <span className="inline-flex">
                    <a
                        href={TWITTER}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-[2px] rounded p-2 font-bold">
                        <XIcon iconClass={iconClass} />
                    </a>
                    <a
                        href={TELEGRAM}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="mx-[2px] rounded p-2 font-bold">
                        <TgIcon iconClass={iconClass} />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={TELEGRAM_DEV}
                        className="mx-[2px] rounded p-2 font-bold">
                        <DevIcon iconClass={iconClass} />
                    </a>
                </span>
            </p>
            <p className="px-2 text-sm">
                $DAPUSS is a memecoin with no intrinsic value, and is not a
                investment and simply a community/culture token similar to
                $DAPUSS. No Promises, No Utility, Purely For Entertainment
                Purposes
            </p>
        </footer>
    );
};
