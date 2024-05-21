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
        <meta property="og:url" content="https://www.loliensolana.com/" />
        <meta property="og:title" content="$LOLIEN$" />
        <meta
          property="og:description"
          content="Inspired by an IKEA toy, $LOLIEN was created as a meme coin capable of not only hit the moon but also venturing to the edge of the universe. If the community falls in love with Lolien, we will launch a series and NFTs about it."
        />
        <meta
          property="og:image"
          content="https://www.loliensolana.com/header.png"
        />
        <link rel="preload" as="image" href="/block4/table.webp" />
        <link rel="preload" as="image" href="/block4/pc.webp" />
        <link rel="preload" as="image" href="/block4/m5.webp" />
      </head>
      <body className={inter.className + " scroll-smooth"}>{children}</body>
    </html>
  );
}
