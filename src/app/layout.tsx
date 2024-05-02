import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMOB AR",
  description: "Augmented Reality for SMOB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SMOB AR" />
        <meta property="og:url" content="https://ar.smobsolana.com/" />
        <meta property="og:title" content="SMOB Token AR" />
        <meta
          property="og:description"
          content="This is an Augmented Reality experience for SMOB Token."
        />
        <meta
          property="og:image"
          content="https://ar.smobsolana.com/header.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@smobsolana" />
        <meta name="twitter:url" content="https://smobsolana.com" />
        <meta name="twitter:title" content="Solana Token" />
        <meta name="twitter:description" content="Smoking Depressed Bear" />
        <meta
          name="twitter:image"
          content="https://ar.smobsolana.com/header.webp"
        />
        <script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
