import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Head } from "next/document";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alien",
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
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
          as="style"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Da Puss" />
        <meta property="og:url" content="https://dapuss.com/" />
        <meta property="og:title" content="Solana Token" />
        <meta
          property="og:description"
          content="The best cat site on the internet!"
        />
        <meta property="og:image" content="https://dapuss.com/header.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DAPUSS" />
        <meta name="twitter:url" content="https://dapuss.com/" />
        <meta name="twitter:title" content="Solana Token" />
        <meta
          name="twitter:description"
          content="The best cat site on the internet!"
        />
        <meta name="twitter:image" content="https://dapuss.com/header.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
