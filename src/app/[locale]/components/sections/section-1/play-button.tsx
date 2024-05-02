"use client";
import game from "../../../../../../public/game/start.webp";
import Image from "next/image";

export const PlayButton = (props: any) => {
  const play = () => {
    window.open(window.location.href + "/game", "_blank");
  };

  return (
    <>
      <button onClick={play} className="flex justify-center items-center">
        <Image
          src={game}
          alt="game"
          className="md:w-[40%] mb-32 md:mb-16 z-50 hover:scale-[1.02] transform ease-in-out duration-300 select-none"
          fetchPriority="high"
          priority
        />
      </button>
    </>
  );
};
