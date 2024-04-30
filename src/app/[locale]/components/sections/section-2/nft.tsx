import { CANDY_MACHINE } from "@/app/[locale]/urls";
import {
  CandyMachineV2,
  guestIdentity,
  Metaplex,
  walletAdapterIdentity,
} from "@metaplex-foundation/js";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MovingImg } from "../../moving-img";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { BigText } from "../../common/text/big-text";

export const NFT = (props: any) => {
  const [metaplex, setMetaplex] = useState<Metaplex | null>(null);
  const [candyState, setCandyState] = useState<CandyMachineV2 | null>();
  const [candyStateErr, setCandyStateErr] = useState<string | null>();
  const [candyStateLoading, setCandyStateLoading] = useState(true);
  const [txErr, setTxErr] = useState<string | null>();
  const [txLoading, setTxLoading] = useState(false);
  //   const [nfts, setNfts] = useState([]);
  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  useEffect(() => {
    setMetaplex(
      Metaplex.make(connection).use(
        wallet ? walletAdapterIdentity(wallet) : guestIdentity()
      )
    );
  }, [connection, wallet]);

  useEffect(() => {
    if (!metaplex) return;
    const updateState = async () => {
      try {
        const state = await metaplex
          .candyMachinesV2()
          .findByAddress({ address: CANDY_MACHINE });
        setCandyState(state);
        // setNfts(state.items);
        setCandyStateErr(null);
      } catch (e: any) {
        setCandyStateErr("Failed to get NFT information");
      } finally {
        setCandyStateLoading(false);
      }
    };
    updateState();
    const intervalId = setInterval(updateState, 30_000);
    return () => clearInterval(intervalId);
  }, [metaplex]);

  const mint = async () => {
    if(!metaplex || !candyState) return;

    setTxLoading(true);
    setTxErr(null);

    try {
        const mintResult = await metaplex.candyMachinesV2().mint({
            candyMachine: candyState,
        }); 
    } catch (e) {
        setTxErr("Failed to claim NFT");
        toast.error("Failed to claim NFT, try again...");
    } finally {
        setTxLoading(false);
        toast.success("NFT claimed, congrats!");
    }
  };

  const soldOut = candyState?.itemsRemaining.eqn(0)

  return (
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
        <img src="/section-2/chel.png" alt="chel" className="w-[40%]" />
      </div>
      <div className="flex flex-col w-full justify-center items-center h-full mr-24 pr-48">
        <WalletMultiButton />
        <BigText text={"Claim your NFT"} />
        <div className="text-4xl text-center mb-12">
          {candyStateLoading ? (
            <p>Loading...</p>
          ) : candyStateErr ? (
            <p>{candyStateErr}</p>
          ) : (
            candyState && (
              <>
                <p>
                  {soldOut
                    ? "SOLD OUT"
                    : `${candyState.itemsRemaining.toString()} out of ${candyState.itemsAvailable.toString()} left`}
                </p>
                <p>
                  {(candyState.price ? candyState.price : 0).toString()} SOL per
                  NFT
                </p>
              </>
            )
          )}
        </div>
        <button className="text-4xl rounded-xl w-1/2 border p-4 border-black" onClick={mint} disabled={txLoading || !candyState || !wallet}>
          {soldOut ? "Sold Out" : txLoading ? "Claiming..." : "Claim NFT"}
        </button>
        <div className="text-4xl text-center mt-12">
          {txErr && <p>{txErr}</p>}
        </div>
      </div>
    </div>
  );
};
