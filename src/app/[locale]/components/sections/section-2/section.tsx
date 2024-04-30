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

export const SectionTwo = (props: any) => {
  useCompensateScrollbar();
  const [mounted, setMounted] = useState(false);

  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ConnectionProvider
      endpoint={RPC_ENDPOINT}
      config={{ commitment: "confirmed" }}
    >
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {mounted && (
            <AppearWrapper>
              <div className="min-h-screen w-full content-center relative ">
                <MovingImg
                  customClassWrapper={"top-[50%] left-[10%]"}
                  imgPath={"./section-4/floating-item.png"}
                />
                <MovingImg
                  customClassWrapper={"right-[5%] bottom-0"}
                  imgPath={"./section-4/floating-item.png"}
                />
                <MovingImg
                  customClassWrapper={"right-[5%] top-0"}
                  imgPath={"./section-4/floating-item.png"}
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
  );
};
