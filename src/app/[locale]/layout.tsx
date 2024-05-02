import type { Metadata } from "next";
import { Permanent_Marker } from "next/font/google";
import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "SMOB",
  description: "SMOKING & BEARING",
};

const PermanentMarker = Permanent_Marker({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SMOB" />
        <meta property="og:url" content="https://smobsolana.com/" />
        <meta property="og:title" content="Solana Token" />
        <meta property="og:description" content="SMOKING & BEARING" />
        <meta property="og:image" content="http://smobsolana.com/header.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@smobsolana" />
        <meta name="twitter:url" content="http://smobsolana.com/" />
        <meta name="twitter:title" content="Solana Token" />
        <meta name="twitter:description" content="SMOKING & BEARING" />
        <meta
          name="twitter:image"
          content="http://smobsolana.com/header.webp"
        />
      </head>
      <body className={PermanentMarker.className}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        {children}
      </body>
    </html>
  );
}
