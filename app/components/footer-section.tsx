import { XIcon } from "./icons/x-icon";
import { TWITTER, TELEGRAM } from "../urls";
import { TgIcon } from "./icons/tg-icon";
import { DevIcon } from "./icons/dev-icon";

const iconClass = "w-6 h-6 fill-black";

export const FooterSection = () => {
  return (
    <footer className="py-2 text-center text-black backdrop-blur transition-colors duration-500">
      <p className="flex flex-row items-center justify-center gap-2">
        <span className="text-sm font-bold sm:text-xl">
          $LOLIEN &copy; 2024
        </span>
        <span className="inline-flex">
          <a
            href={TWITTER}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-[2px] rounded p-2 font-bold"
          >
            <XIcon iconClass={iconClass} />
          </a>
          <a
            href={TELEGRAM}
            rel="noopener noreferrer"
            target="_blank"
            className="mx-[2px] rounded p-2 font-bold"
          >
            <TgIcon iconClass={iconClass} />
          </a>
        </span>
      </p>
    </footer>
  );
};
