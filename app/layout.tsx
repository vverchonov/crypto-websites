import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALOLIEN",
  description: "The cutest alien on the internet!",
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
        <meta property="og:site_name" content="ALOLIEN" />
        <meta property="og:url" content="https://ALOLIEN.com/" />
        <meta property="og:title" content="Solana Token" />
        <meta
          property="og:description"
          content="cutest alien on the internet!"
        />
        <meta property="og:image" content="https://alolien.com/header.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alolien" />
        <meta name="twitter:url" content="https://alolien.com/" />
        <meta name="twitter:title" content="Solana Token" />
        <meta
          name="twitter:description"
          content="cutest alien on the internet!"
        />
        <meta name="twitter:image" content="https://alolien.com/header.png" />
        <link rel="preload" as="image" href="/block4/table.webp" />
        <link rel="preload" as="image" href="/block4/pc.webp" />
      </head>
      <body className={inter.className + " scroll-smooth"}>{children}</body>
    </html>
  );
}
