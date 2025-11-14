import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import LayoutClientWrapper from "../components/LayoutClientWrapper";
import FooterWrapper from "../components/FooterWrapper";
import WagmiRainbowKitProvider from "./wallet/_components/WagmiRainbowKitProvider";
import ReffererProvider from "../components/ReffererProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "500",
});
const satoshi = localFont({
  src: "../public/fonts/satoshi/Satoshi-Variable.woff",
  variable: "--font-satoshi",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "500",
});

const inter = Inter({
  display: "swap",
  variable: "--inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MyEtherWallet (MEW) | Secure Ethereum & Web3 Wallet for Crypto Users",
  description:
    "Access Ethereum and Web3 safely with MyEtherWallet (MEW). Create a free wallet, buy, swap, stake, and explore dApps — trusted by millions since 2015",
  icons: {
    icon: "/brand/mew.ico",
    shortcut: "/brand/mew.ico",
    apple: "/brand/mew.ico",
    other: [
      {
        rel: "mask-icon",
        url: "/brand/mew.ico",
        color: "#0091ff",
      },
    ],
  },
  keywords:
    "myetherwallet, eth wallet, my ether wallet, my ethereum wallet, my eth wallet, Ethereum, eth wallet lookup, good ethereum wallet",
  openGraph: {
    title:
      "MyEtherWallet (MEW) | Secure Ethereum & Web3 Wallet for Crypto Users",
    description:
      "Access Ethereum and Web3 safely with MyEtherWallet (MEW). Create a free wallet, buy, swap, stake, and explore dApps — trusted by millions since 2015",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MyEtherWallet (MEW) | Secure Ethereum & Web3 Wallet for Crypto Users",
    description:
      "Access Ethereum and Web3 safely with MyEtherWallet (MEW). Create a free wallet, buy, swap, stake, and explore dApps — trusted by millions since 2015",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable} ${inter.variable} antialiased`}
      >
        <WagmiRainbowKitProvider>
          {/* <ReffererProvider> */}
          <ToastContainer
            autoClose={2000}
            hideProgressBar={true}
            theme="colored"
          />
          <LayoutClientWrapper>
            {children}
            <FooterWrapper />
          </LayoutClientWrapper>
          {/* </ReffererProvider> */}
        </WagmiRainbowKitProvider>
      </body>
    </html>
  );
}
