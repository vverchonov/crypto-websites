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
import { BigText } from "../../common/text/big-text";
import { MarqueeCustom } from "../section-1/marquee";

export const SectionTwo = (props: any) => {
  useCompensateScrollbar();
  const [mounted, setMounted] = useState(false);

  const wallets = useMemo(() => [new SolflareWalletAdapter()], []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden">
        <MarqueeCustom />
      </div>
      <ConnectionProvider
        endpoint={RPC_ENDPOINT}
        config={{ commitment: "confirmed" }}
      >
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            {mounted && (
              <AppearWrapper
                customClass={
                  "overflow-hidden min-h-screen flex justify-center items-center relative align-center w-full"
                }
              >
                <img
                  src="/section-2/chel.png"
                  alt="chel"
                  className="w-[30%] left-[-15%] mt-28  absolute"
                />
                <img
                  src="/section-2/chel.png"
                  alt="chel"
                  className="w-[30%] right-[-15%] mt-28 absolute mirror-y"
                />
                <div className=" w-full content-center relative max-w-screen-2xl overflow-hidden m-0 m-auto">
                  <MovingImg
                    tz={3}
                    ty={5}
                    tx={1}
                    customClassImg={"w-1/12 md:w-2/12"}
                    customClassWrapper={"top-[30%] left-[70%] md:left-[0%]"}
                    imgPath={"./common/pack.webp"}
                  />
                  <MovingImg
                    tz={10}
                    ty={4}
                    tx={1}
                    customClassImg={"w-3/12 md:w-7/12 "}
                    customClassWrapper={
                      "right-[20%] bottom-[25%] md:bottom-[5%] "
                    }
                    imgPath={"./common/money.webp"}
                  />
                  <MovingImg
                    tz={1}
                    ty={10}
                    tx={10}
                    customClassImg={" w-2/12 md:w-5/12 "}
                    customClassWrapper={"right-[5%] top-[0%] "}
                    imgPath={"./common/glock.webp"}
                  />
                  <div className="flex flex-col">
                    <div className="flex flex-col justify-center items-center w-full">
                      <BigText
                        customClass={" max-w-screen-2xl text-center"}
                        text={
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit"
                        }
                      />
                      <a href="https://google.com" className="text-2xl mt-6">
                        Google Disk
                      </a>
                    </div>
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
