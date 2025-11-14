"use client";

import "./globals.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import FeaturesCarousel from "../components/FeaturesCarousel";
import Image from "next/image";
import Link from "next/link";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Email submitted:", email);
  };

  return (
    <section className="py-20 px-6 bg-inherit">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-16 lg:p-20 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Get better at crypto
              </h2>
              <p className="text-xl md:text-2xl text-white mb-8 opacity-90">
                Level up your skills with security tips, industry insights, news
                and more!
              </p>

              {/* Email Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-lg bg-white bg-opacity-20 border-2 border-white text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:bg-opacity-30 transition"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:bg-gray-100 transition shadow-lg whitespace-nowrap"
                >
                  Sign me up!
                </button>
              </form>
            </div>

            {/* Right side - Astronaut Image */}
            <div className="hidden lg:flex justify-center items-center relative z-10">
              <img
                src="data:image/webp;base64,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"
                alt="Astronaut"
                className="w-48 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-grey-900">
      {/* Hero Section with Gradient Background */}
      <div className="bg-linear-to-b from-cyan-200 to-white relative overflow-hidden">
        {/* Floating triangular shapes background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 border-l-48px border-l-transparent border-r-48px border-r-transparent border-b-80px border-b-white"
              initial={{
                x:
                  Math.random() *
                  (typeof window !== "undefined" ? window.innerWidth : 1200),
                y:
                  Math.random() *
                  (typeof window !== "undefined" ? window.innerHeight : 800),
                rotate: Math.random() * 360,
              }}
              animate={{
                y: [
                  null,
                  Math.random() *
                    (typeof window !== "undefined" ? window.innerHeight : 800),
                ],
                rotate: [null, Math.random() * 360],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
              {/* Brand Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-8 mb-16"
              >
                <h2 className="text-[#1A535C] text-xl md:text-3xl font-bold mt-10">
                  MyEtherWallet
                </h2>
                <div className="flex items-center justify-center gap-2">
                  {/* Left image */}
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_18x50/images/misc/leaf.svg"
                    alt="Left Leaf"
                    className="h-12 w-auto"
                  />

                  {/* Middle stars and text */}
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_114x22/images/misc/stars.svg"
                      alt="Star Rating"
                      className="h-3 w-auto mb-2"
                    />
                    <p className="text-sm text-gray-700">
                      Trusted by millions worldwide.
                    </p>
                    <p className="text-sm text-gray-700">Since 2015.</p>
                  </div>

                  {/* Right image (mirrored) */}
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_40x112/images/misc/leaf.svg"
                    alt="Right Leaf"
                    className="h-12 w-auto scale-x-[-1]"
                  />
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12 relative"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  The most reputable, friendly,
                  <br />
                  and secure crypto wallet.
                </h1>

                {/* Astronaut illustration */}
                <div className="absolute -left-32 top-15 hidden lg:block">
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_ipx/w_384&f_webp/images/misc/peggy.webp"
                    alt="Astronaut Illustration"
                    className="w-37 h-40 object-contain"
                  />
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center gap-4"
              >
                <button className="bg-blue-700 text-[24px] text-white px-12 py-4 rounded-3xl text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
                  Create a new wallet
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">or</span>
                  <a
                    href="/wallet"
                    className="text-[21px] text-gray-900 underline hover:text-teal-600 transition font-medium"
                  >
                    Access my wallet
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Products Section */}
      <section className="py-20 px-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our products make crypto easy
            </h2>
            <p className="text-[24px] text-gray-600">
              Available on mobile and on desktop in your browser
            </p>
          </div>

          {/* MEW Mobile App */}
          <div className="mb-20 bg-linear-to-br from-blue-50 to-purple-50 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl overflow-hidden">
                    <img
                      src="https://www.myetherwallet.com/mew-landing-page/_ipx/w_128/images/products/mewweb-logo.svg"
                      alt="MyEtherWallet Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold text-gray-900">
                      MEW Mobile App
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600">13k+ ratings</span>
                    </div>
                  </div>
                </div>

                <p className="text-2xl text-gray-800 mb-6 font-medium">
                  Stake, swap and manage you crypto on the go.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl">•</span>
                    <span className="text-[21px] text-gray-700">
                      Protect your mobile crypto with security rivaling hardware
                      wallets.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl">•</span>
                    <span className=" text-[21px] text-gray-700">
                      Robust NFT management, onchain browser and more.
                    </span>
                  </li>
                </ul>

                <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg inline-flex items-center gap-2">
                  Get MEW Mobile App
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex  justify-center">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_nuxt/mewwallet_2x.w5zytgzf.webp"
                  alt="MyEtherWallet Preview"
                  className="rounded-3xl shadow-2xl w-full max-w-2xl"
                />
              </div>
            </div>
          </div>

          {/* Enkrypt Browser Wallet */}
          <div className="mb-20 bg-linear-to-br from-purple-50 to-pink-50 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex gap-4 justify-center">
                <div className="rounded-3xl shadow-2xl w-full max-w-2xl">
                  <div className="flex justify-center">
                    <img
                      src="https://www.myetherwallet.com/mew-landing-page/_nuxt/enkrypt_2x.BjfXgkDO.webp"
                      alt="Enkrypt Browser Wallet"
                      className="rounded-3xl shadow-2xl w-full max-w-2xl"
                    />
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl overflow-hidden">
                    <img
                      src="https://www.myetherwallet.com/mew-landing-page/_ipx/w_128&f_webp/images/products/enkrypt-logo.webp"
                      alt="Enkrypt Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold text-gray-900">
                      Enkrypt Browser Wallet
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600">145,000+ users</span>
                    </div>
                  </div>
                </div>

                <p className="text-2xl text-gray-800 mb-6 font-medium">
                  Manage your crypto across multiple blockchains with one
                  wallet.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl">•</span>
                    <span className="text-gray-700 text-[21px]">
                      Built-in decentralized swaps for power traders.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl">•</span>
                    <span className="text-gray-700  text-[21px]">
                      Bridge your crypto from one chain to another.
                    </span>
                  </li>
                </ul>

                <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition shadow-lg inline-flex items-center gap-2">
                  Get Enkrypt Browser Wallet
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* MEW Portfolio Manager */}
          <div className="bg-linear-to-br from-cyan-50 to-teal-50 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center bg-white">
                    <img
                      src="https://www.myetherwallet.com/mew-landing-page/_ipx/w_128/images/products/portfolio.svg"
                      alt="Portfolio Icon"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold text-gray-900">MEW</h3>
                    <p className="text-xl text-gray-600">Portfolio Manager</p>
                  </div>
                </div>

                <p className="text-2xl text-gray-800 mb-6 font-medium">
                  View and manage your crypto portfolio on the big screen.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className=" text-gray-400 text-xl">•</span>
                    <span className=" text-[21px] text-gray-700">
                      Available to all MEW Mobile App and Enkrypt users.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 text-xl">•</span>
                    <span className="text-[21px] text-gray-700">
                      Works with most hardware and 3rd party wallets.
                    </span>
                  </li>
                </ul>

                <button className="bg-white border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-50 transition shadow-lg inline-flex items-center gap-2">
                  Access my portfolio
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
                <br />
                <br />
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_72x72/icons/heart.svg"
                    alt="Heart Icon"
                    className="w-8 h-10"
                  />
                  <p className="text-l text-gray-600 font-medium">
                    Works with most hardware and 3rd party wallets.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_nuxt/portfolio_2x.CSEFP7-G.webp"
                  alt="MEW Portfolio Preview"
                  className="rounded-3xl shadow-2xl w-full max-w-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="relative py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Want to get into crypto?
                <br />
                MEW is the way to do it
              </h2>
              <ul className="space-y-4 text-left mb-12 lg:mb-0">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl shrink-0">•</span>
                  <span className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold">
                    The Ethereum ecosystem has the biggest development community
                    in all of web3.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl shrink-0">•</span>
                  <span className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold">
                    MEW is the most trusted and battle tested Ethereum wallet.
                  </span>
                </li>
              </ul>
            </div>

            {/* Ethereum Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl p-6 w-full max-w-[340px] shadow-lg border border-gray-100">
                <div className="flex items-center mb-4 gap-3 flex-wrap">
                  <img
                    src="https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_ethereum_eth_logo_fe7073d75c.png&format=webp"
                    alt="Ethereum"
                    width={32}
                    height={32}
                    loading="lazy"
                    className="object-contain"
                  />
                  <p className="font-bold text-gray-900 text-lg">Ethereum</p>
                  <p className="text-gray-800 text-lg ml-auto">$4041.33</p>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  Not investment advice. All decisions are made at the
                  user`&apos;`s own risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self Custody Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Truly own your crypto assets.
              </h2>
              <p className="text-2xl text-gray-700 leading-relaxed">
                MEW is a self-custody wallet, which means that you hold your
                keys and nobody except you (not even the MEW team) can access
                your crypto.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_1692x2008/images/custody/self-custody.svg"
                alt="Self Custody Illustration"
                className="w-124 h-124 object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Token Features Section */}
      <section className="py-20 px-6 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-6">
            Buy, store, send,
            <br />
            and swap tokens
          </h2>

          <FeaturesCarousel />
        </div>
      </section>

      {/* Token Support Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-12">
            MEW supports ETH and all ERC-20 tokens!
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              {
                name: "Ethereum (ETH)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_ethereum_eth_logo_fe7073d75c.png&format=webp",
              },
              {
                name: "Artificial Superintelligence Alliance (FET)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_Artificial_Superintelligence_b3dac8375c.png&format=webp",
              },
              {
                name: "Kelp DAO Restaked ETH (RSETH)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_Kelp_DAO_Restaked_ETH_2bb04cded8.png&format=webp",
              },
              {
                name: "EigenLayer (EIGEN)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_Eigen_Layer_f1e19b84b7.png&format=webp",
              },
              {
                name: "Balancer (BAL)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_balancer_bal_logo_ecaf2af4e7.png&format=webp",
              },
              {
                name: "Usual USD (USDO)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_Usual_USD_e9d7c90b6e.png&format=webp", // placeholder
              },
              {
                name: "Tether Gold(XAUT)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_tether_gold_7de2d6bb70.png&format=webp",
              },
              {
                name: "Render (RENDER)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_rendertokens_cc4df879a2.png&format=webp",
              },
              {
                name: "Renzo Restaked ETH (EZETH)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_Renzo_Restaking_ETH_db96b0d43c.png&format=webp",
              },
              {
                name: "Movement (MOVE)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_movement_6eec15eabf.png&format=webp", // placeholder
              },
              {
                name: "Fantom (FTM)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_fantom_ftm_logo_a0f3ebb68a.png&format=webp",
              },
              {
                name: "Cosplay (COT)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_cosplay_3bcf387104.png&format=webp",
              },
              {
                name: "Cornucopias (COPI)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_image_1654_49ba28dfb8.png&format=webp",
              },
              {
                name: "Ether.fi (ETHFI)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_Ether_fi_82e4e9cefa.png&format=webp",
              },
              {
                name: "Onyxcoin (XCN)",
                image:
                  "https://img.mewapi.io/?image=https://strapi.mewapi.io/uploads/thumbnail_Onyxcoin_28e6176b4f.png&format=webp",
              },
            ].map((token, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-200 rounded-full px-6 py-3 flex items-center gap-3 hover:border-blue-500 transition"
              >
                <img
                  src={token.image}
                  alt={token.name}
                  className="w-7 h-7 rounded-full object-contain"
                />
                <span className="font-medium">{token.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staking Section */}
      <section className="py-20 px-6 bg-inherit">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Make your crypto
                <br />
                make crypto.
              </h2>
              <p className="text-2xl text-gray-700">
                Stake your ETH and get rewarded by the Ethereum blockchain.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_872x592/images/staking/percent-numbers.svg"
                alt="Self Custody Illustration"
                className="w-124 h-124 object-contain rounded-3xl"
              />
            </div>
          </div>
          <br />
          <br />

          <div className="grid md:grid-cols-3 gap-8 text-[21px]">
            {/* Be your own bank */}
            <div className="bg-white  rounded-2xl p-8 shadow-lg">
              <div className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/f_webp&s_186x192/images/staking/bank-pic.webp"
                  alt="Be your own bank"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Be your own bank</h3>
              <p className="text-gray-700">
                Unlike big finance banks that lend your money out, in crypto,
                you are the lender.
              </p>
            </div>

            {/* Staking made easy */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">Staking made easy</h3>
                <div className="flex gap-2 mb-4 items-center">
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_ipx/f_webp&s_120x120/images/staking/process-buy.webp"
                    alt="Buy"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <span className="text-2xl">→</span>
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_ipx/f_webp&s_120x120/images/staking/process-stake.webp"
                    alt="Stake"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <span className="text-2xl">→</span>
                  <img
                    src="https://www.myetherwallet.com/mew-landing-page/_ipx/f_webp&s_120x120/images/staking/process-earn.webp"
                    alt="Earn"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
                <p className="text-gray-700">
                  At MEW we make it easy to stake your crypto right from your
                  wallet and start earning rewards right away.
                </p>
              </div>
            </div>

            {/* 32 ETH Staking */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/f_webp&s_120x120/images/staking/ETHLido.webp"
                  alt="ETH"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_120x120/images/staking/ETHStaked.svg"
                  alt="Staking"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">32 ETH Staking</h3>
              <p className="text-blue-600 font-semibold mb-4">Up to 4.0% APR</p>
              <p className="text-2xl font-bold mb-2">
                No minimum liquid staking
              </p>
              <p className="text-blue-600 font-semibold mb-4">Up to 3.6% APR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Wallet Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-16">
            A powerful wallet for
            <br />
            all your crypto needs.
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left side - Feature cards */}
            <div className="space-y-6">
              {/* All your NFTs Card */}
              <div className="bg-blue-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl  mb-4">
                  All your NFTs.
                  <span className="text-blue-200">
                    Safely keep all your NFTs from various chains in one place
                    on mobile or desktop.
                  </span>
                </h3>
              </div>

              {/* Access web3 apps */}
              <div className="bg-white rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Access web3 apps.
                </h3>
                <p className="text-gray-700 text-lg">
                  Use your favorite web3 apps on desktop with Enkrypt or on
                  mobile with MEW Mobile App.
                </p>
              </div>

              {/* Multiple chains */}
              <div className="bg-white rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Multiple chains.
                </h3>
                <p className="text-gray-700 text-lg">
                  Access decentralized networks and bridge assets between
                  popular blockchains. From Ethereum, to BNB Chain, to Polygon.
                </p>
              </div>
            </div>

            {/* Right side - Phone mockup image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_1532x1040/images/nfts/all-nfts.webp"
                alt="NFT Collection"
                className="w-full max-w-2xl h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Data Section */}
      <section className="py-20 px-6 bg-inherit">
        <div className="max-w-7xl mx-auto">
          {/* Heading at top */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16">
            Trusted data, from
            <br />
            the source
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-linear-to-br from-blue-500 to-blue-700 rounded-3xl p-8 md:p-10 shadow-2xl max-w-lg w-full">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_614x400/images/ethvm/hero-group.webp"
                  alt="EthVM Block Explorer"
                  className="w-48 h-auto object-contain"
                />
                <div className="mt-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    eth<span className="text-blue-400">VM</span>
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-3">
                    block explorer
                  </p>
                  <p className="text-white text-base md:text-lg opacity-90">
                    Track, analyze, and explore on the Ethereum blockchain.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Text content */}
            <div>
              <ul className="space-y-6 text-[28px]">
                <li className="flex items-start">
                  <span className="text-gray-900 text-2xl mr-4 mt-1">•</span>
                  <span className="text-[30px] md:text-2xl text-gray-900 font-bold">
                    Based on our open-sourced blockchain explorer technology.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 text-2xl mr-4 mt-1">•</span>
                  <span className="text-[30px] md:text-2xl text-gray-900 font-bold">
                    Fast.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 text-2xl mr-4 mt-1">•</span>
                  <span className="text-[30px] md:text-2xl text-gray-900 font-bold">
                    Scalable for new ecosystems.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 text-2xl mr-4 mt-1">•</span>
                  <span className="text-[30px] md:text-2xl text-gray-900 font-bold">
                    Beautifully designed.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* What makes MEW a good choice Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 text-center mb-16">
            What makes MEW a<br />
            good choice?
          </h2>

          {/* First Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Crypto veterans since 2015 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="mb-6">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_96x96/icons/feature/veterans.svg"
                  alt="Crypto veterans"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Crypto veterans since 2015
              </h3>
              <p className="text-gray-600 text-lg">
                MEW is the world`&apos;`s first and one of the most trusted
                Ethereum and L2 wallets.
              </p>
            </div>

            {/* Private */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="mb-6">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_96x96/icons/feature/private.svg"
                  alt="Private"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Private</h3>
              <p className="text-gray-600 text-lg">
                We don`&apos;`t track any personally identifiable information,
                account addresses, or asset balances.
              </p>
            </div>

            {/* Hardware wallet support */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="mb-6">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_96x96/icons/feature/hardware-support.svg"
                  alt="Hardware wallet"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Hardware wallet support
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                We support all major hardware wallets including Ledger and
                Trezor in MEW web portfolio and Enkrypt.
              </p>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition">
                Buy a hardware wallet
              </button>
            </div>
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Secure and transparent */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="mb-6">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_96x96/icons/feature/audited.svg"
                  alt="Secure"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Secure and transparent
              </h3>
              <p className="text-gray-600 text-lg">
                Independently audited in Bug Bounty program on HackenProof and,
                previously, HackerOne.
              </p>
            </div>

            {/* Self-custody */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="mb-6">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_96x96/icons/feature/non-custodial.svg"
                  alt="Self-custody"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Self-custody
              </h3>
              <p className="text-gray-600 text-lg">
                You and only you are in control of your assets. Your keys, your
                crypto.
              </p>
            </div>

            {/* Easy to use */}
            <div className="bg-white-900 rounded-3xl p-8 shadow-sm">
              <div className="mb-6">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_96x96/icons/feature/easy.svg"
                  alt="Easy to use"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Easy to use
              </h3>
              <p className="text-gray-600 text-lg">
                Get started in minutes, no prior knowledge needed.
              </p>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/ledger.svg"
                alt="Ledger"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/coinbase.svg"
                alt="Coinbase"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/web3foundation.svg"
                alt="Web3 Foundation"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/trezor.svg"
                alt="Trezor"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/moonpay.svg"
                alt="MoonPay"
                className="h-8 transition"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mt-8">
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/topper.svg"
                alt="Topper"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/changelly.svg"
                alt="Changelly"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/simplex.svg"
                alt="Simplex"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x168/images/partners/1inch.svg"
                alt="1inch Network"
                className="h-8 transition"
              />
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_288x188/images/partners/rivet1.svg"
                alt="Rivet"
                className="h-8 transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Arm yourself with knowledge Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-16">
            Arm yourself with
            <br />
            knowledge.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* New to crypto */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 relative overflow-hidden">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                New to crypto? Explore MEWtopia!
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Learn how to get the most out of Ethereum with our free library
                of resources!
              </p>
              {/* Decorative dots - blue */}
              <div className="absolute bottom-0 left-0 right-0 h-16">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL33Hyg8IOYWYIvA6OxGzI5WPPIlbxi70Anw&s"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Help Center */}
            <div className="bg-gray-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Help Center
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                How to use MEW products and stay safe in web3.
              </p>
              {/* Decorative dots - purple */}
              <div className="absolute bottom-0 left-0 right-0 h-16">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/067/969/489/small/vibrant-abstract-gradient-dot-pattern-in-green-orange-and-blue-vector.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 relative overflow-hidden">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Most common questions about crypto
              </p>
              {/* Decorative dots - teal */}
              <div className="absolute bottom-0 left-0 right-0 h-16">
                <img
                  src="https://media.istockphoto.com/id/855295276/photo/halftone-effect-background.jpg?s=612x612&w=0&k=20&c=BFZTvSp3HP2TUFzBOs5Lenra3Jcc1p50rJRiBAiEnko="
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Chat with support */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 relative overflow-hidden">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Chat with support
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Get help from actual humans.
              </p>
              {/* Decorative dots - blue */}
              <div className="absolute bottom-0 left-0 right-0 h-16">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/036/032/867/small/abstract-background-with-dots-wavy-pattern-on-blue-color-gradient-vector.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading with inline astronaut */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 inline-flex flex-col items-center">
            <span className="relative inline-block">
              {/* Astronaut Image - Hugging the G */}
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_ipx/s_96x96/images/misc/peggy-love.svg"
                alt="Peggy"
                className="absolute -top-10 -left-8 md:-left-10 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              />
              Grab control
            </span>
            <span>of your future</span>
          </h2>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-5 rounded-full transition shadow-lg">
              Create a new wallet
            </button>
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
  );
}
