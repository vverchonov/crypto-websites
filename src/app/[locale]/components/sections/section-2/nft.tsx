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
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { BigText } from "../../common/text/big-text";
import { HeaderText } from "../../common/text/header-text";

export const NFT = (props: any) => {
  const [metaplex, setMetaplex] = useState<Metaplex | null>(null);
  const [soldOut, setSoldOut] = useState(false);
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
        setSoldOut(state.itemsRemaining.eqn(0) || false);
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
    if (!metaplex || !candyState) return;

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

  const disabled = txLoading || !candyState || !wallet;

  return (
    <div className="flex flex-row justify-end items-center relative min-h-[60vh]">
      <div className="flex flex-col gap-6 w-full justify-center items-center h-full">
        <WalletMultiButton />
        <HeaderText
          customClass={"lg:text-6xl text-4xl text-center"}
          text={"Claim your NFT"}
        />
        <div className="lg:text-4xl text-3xl text-center mb-12">
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
        <div
          className={
            "w-full flex justify-center " +
            (disabled
              ? "opacity-65"
              : "hover:scale-105 transition-transform ease-in-out duration-150")
          }
        >
          <button
            className={
              "flex justify-center " +
              (soldOut ? "btn-red" : "btn-orange") +
              (disabled ? " cursor-not-allowed" : "cursor-pointer")
            }
            onClick={mint}
            disabled={disabled}
          >
            <p className="text-4xl p-16 pt-6  select-none">
              {soldOut ? "Sold Out" : txLoading ? "Claiming..." : "Claim NFT"}
            </p>
          </button>
        </div>
        <div className="text-4xl text-center mt-12">
          {txErr && <p>{txErr}</p>}
        </div>
      </div>
    </div>
  );
};
