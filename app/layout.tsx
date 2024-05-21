import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOLIEN THE ALIEN",
  description:
    "Inspired by an IKEA toy, $LOLIEN was created as a meme coin capable of not only hit the moon but also venturing to the edge of the universe. If the community falls in love with Lolien, we will launch a series and NFTs about it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LOLIEN THE ALIEN" />
        {/* <meta property="og:url" content="http://alonthealien.com/" /> */}
        <meta property="og:title" content="Solana Token" />
        <meta
          property="og:description"
          content="Inspired by an IKEA toy, $LOLIEN was created as a meme coin capable of not only hit the moon but also venturing to the edge of the universe. If the community falls in love with Lolien, we will launch a series and NFTs about it. 
          Made wif love by Letto Dev Team"
        />
        {/* <meta
          property="og:image"
          content="http://alonthealien.com/header.png"
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content="@ALONDEALIEN" />
        <meta name="twitter:url" content="http://alonthealien.com/" /> */}
        <meta name="twitter:title" content="Solana Token" />
        <meta
          name="twitter:description"
          content="Inspired by an IKEA toy, $LOLIEN was created as a meme coin capable of not only hit the moon but also venturing to the edge of the universe. If the community falls in love with Lolien, we will launch a series and NFTs about it. 
          Made wif love by Letto Dev Team"
        />
        {/* <meta
          name="twitter:image"
          content="http://alonthealien.com/header.png"
        /> */}
        <link rel="preload" as="image" href="/block4/table.webp" />
        <link rel="preload" as="image" href="/block4/pc.webp" />
        <link rel="preload" as="image" href="/block4/m5.webp" />
      </head>
      <body className={inter.className + " scroll-smooth"}>{children}</body>
    </html>
  );
}
