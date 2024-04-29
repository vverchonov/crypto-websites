"use client";

import { useState } from "react";

const imgClass = "cursor-pointer w-64 h-auto";

export const WelcomeBanner = (props: any) => {
  const [showBanner, setShowBanner] = useState(true);

  const onClick = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner ? (
        <div className="sticky top-0 left-0 w-full h-[100vh] z-20 bg-black p-36 justify-center align-center">
          <div className="div-fw z-50 flex">
            <div className="flex gap-16 h-fit">
              <img
                onClick={onClick}
                className={imgClass}
                src={"./banner/yes.png"}
              />
              <img className={imgClass} src={"./banner/no.png"} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
