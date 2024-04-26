"use client";

import { useState } from "react";
import { MainSection } from "./components/sections/main-section/main-section";
import { SecondSection } from "./components/sections/second-section/second-section";
import { FooterSection } from "./components/footer-section";
import { ThirdSection } from "./components/sections/third-section/third-section";
import { FourthSection } from "./components/sections/fourth-section/fourth-section";
import { SeventhSection } from "./components/sections/seventh-section/seventh-section";
import { SixthSection } from "./components/sections/sixth-section/sixth-section";
import { FifthSection } from "./components/sections/fifth-section/fifth-section";
import { Banner } from "./components/banner";
import { Langs } from "./components/useGetWordsHook";

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);
  const [lang, setLang] = useState(Langs.ENG);

  return (
    <>
      {showBanner ? (
        <Banner close={setShowBanner} />
      ) : (
        <>
          <main className="relative flex flex-col items-center">
            <MainSection lang={lang} setLang={setLang} />
            <SecondSection lang={lang} />
            <ThirdSection lang={lang} />
            <FourthSection />
            <FifthSection lang={lang} />
            <SixthSection />
            <SeventhSection lang={lang} />
          </main>
          <FooterSection />
        </>
      )}
    </>
  );
}
