"use client";

import { AppearWrapper } from "../../common/wrappers/appear-wrapper";
import { MovingImg } from "../../moving-img";

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
import { useEffect, useMemo, useState } from "react";
import { RPC_ENDPOINT } from "../../../urls";

export const SectionTwo = (props: any) => {
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
              <div className="min-h-screen w-full content-center relative">
                <MovingImg
                  customClassWrapper={"top-[50%] left-[40%]"}
                  imgPath={"./section-4/floating-item.png"}
                />
                <div className="flex flex-col">
                  <div className="flex flex-col justify-center items-center w-full">
                    <h2 className="text-3xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </h2>
                    <a href="https://google.com" className="text-2xl mt-6">
                      Google Disk
                    </a>
                  </div>
                  <div className="flex flex-row justify-between items-center relative">
                    <MovingImg
                      customClassWrapper={"right-[5%] bottom-0"}
                      imgPath={"./section-4/floating-item.png"}
                    />
                    <MovingImg
                      customClassWrapper={"right-[5%] top-0"}
                      imgPath={"./section-4/floating-item.png"}
                    />
                    <div>
                      <img
                        src="/section-2/chel.png"
                        alt="chel"
                        className="w-[40%]"
                      />
                    </div>
                    <div className="flex flex-col w-full justify-center items-center h-full mr-24 pr-48">
                      <h3 className="text-4xl text-center mb-12">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Itaque, error! Similique error libero nobis ad
                        iusto repellat ipsum assumenda, quibusdam nulla
                        provident asperiores id dignissimos quis illo
                        necessitatibus, rem eum!
                      </h3>
                      <h2 className="text-4xl text-center mb-12">
                        Supply: 1000
                        <br />
                        Left: 100
                        <br />
                        Price: 0.1
                      </h2>
                      <button className="text-4xl rounded-xl w-1/2 border p-4 border-black">
                        Claim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AppearWrapper>
          )}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
