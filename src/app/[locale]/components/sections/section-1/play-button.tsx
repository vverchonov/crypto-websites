"use client";
import { Button } from "./button";

export const PlayButton = (props: any) => {
  const play = () => {
    window.open(window.location.href + "/game", "_blank");
  };

  return <Button txt={props.txt} play={play} />;
};
