"use client";

import { useState } from "react";

const imgClass = "cursor-pointer mb-4 h-16 md:mb-0 lg:h-18";

export const WelcomeBanner = (props: any) => {
  const [showBanner, setShowBanner] = useState(true);

  const onClick = () => {
    setShowBanner(false);
  };

  const onHover = (e: any) => {
    const noButton = document.querySelector("#noButton");
    if (!noButton) {
      return;
    }
    //@ts-ignore
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    //@ts-ignore
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    //@ts-ignore
    noButton.style.position = "absolute";
    //@ts-ignore
    noButton.style.left = `${x}px`;
    //@ts-ignore
    noButton.style.top = `${y}px`;
  };

  return (
    <>
      {showBanner ? (
        <div className="sticky top-0 left-0 w-full h-[100vh] z-20 bg-black justify-center align-center">
          <div className="div-fw h-fit w-full flex justify-center align-center">
            <div className="flex md:flex-row flex-col justify-end md:items-center mr-24">
              <img
                id="noButton"
                onMouseEnter={onHover}
                className={imgClass + " transition duration-300 ease-in-out"}
                src="./banner/no.png"
              />
              <img
                onClick={onClick}
                className={imgClass + " "}
                src="./banner/yes.png"
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
