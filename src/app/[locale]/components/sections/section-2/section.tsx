"use client";

import { AppearWrapper } from "../../common/wrappers/appear-wrapper";
import { MovingImg } from "../../moving-img";
import { useCompensateScrollbar } from "../../hooks/useCompensateScrollbar";
import { RPC_ENDPOINT } from "../../../urls";

import { useEffect, useMemo, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";
import { NFT } from "./nft";
import { MarqueeCustom } from "./marquee";
import { HeaderText } from "../../common/text/header-text";
import { BigText } from "../../common/text/big-text";

export const SectionTwo = (props: any) => {
  useCompensateScrollbar();
  const [mounted, setMounted] = useState(false);

  const wallets = useMemo(() => [new SolflareWalletAdapter()], []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="w-full">
        <MarqueeCustom />
        <div className="flex flex-col justify-center items-center w-full">
          <BigText
            customClass={" max-w-screen-2xl text-center lg:text-4xl"}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
          />
          <a
            href="https://google.com"
            className="text-3xl mt-6 btn-google hover:scale-105 transition-transform duration-150 ease-in-out"
          >
            <p className="lg:text-4xl p-16 pt-6 cursor-pointer text-center select-none">
              Memes
            </p>
          </a>
        </div>
      </div>
      <ConnectionProvider
        endpoint={RPC_ENDPOINT}
        config={{ commitment: "confirmed" }}
      >
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider className="text-black">
            {mounted && (
              <AppearWrapper
                customClass={
                  " min-h-screen flex justify-center items-center relative align-center w-full overflow-x-clip"
                }
              >
                <img
                  src="/section-2/chel.png"
                  alt="chel"
                  className="w-[40%] md:w-[30%] bottom-1 left-[-15%] mt-28 absolute select-none"
                />
                <img
                  src="/section-2/chel.png"
                  alt="chel"
                  className="w-[40%] md:w-[30%] bottom-1 right-[-15%] mt-28 absolute mirror-y select-none"
                />
                <div className=" w-full content-center relative max-w-screen-2xl overflow-hidden m-auto">
                  <MovingImg
                    tz={3}
                    ty={5}
                    tx={1}
                    customClassImg={"w-5/12 md:w-2/12"}
                    customClassWrapper={"top-[30%] left-[70%] md:left-[0%]"}
                    imgPath={"./common/pack.webp"}
                  />
                  <MovingImg
                    tz={10}
                    ty={4}
                    tx={1}
                    customClassImg={"w-[10%] md:w-[7%] rotate-[12deg]"}
                    customClassWrapper={"right-[5%] bottom-[5%]"}
                    imgPath={"./common/card.webp"}
                  />
                  <MovingImg
                    tz={1}
                    ty={5}
                    tx={10}
                    customClassImg={" w-7/12 md:w-5/12 -rotate-[26deg] "}
                    customClassWrapper={"md:right-[15%] top-[5%] right-[80%]"}
                    imgPath={"./common/glock.webp"}
                  />
                  <div className="flex flex-col">
                    <NFT />
                  </div>
                </div>
              </AppearWrapper>
            )}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};
