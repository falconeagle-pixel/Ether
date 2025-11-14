"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, ArrowLeft, Eye, EyeOff, AlertTriangle } from "lucide-react";

export default function PrivateKeyAccess() {
  const router = useRouter();
  const [privateKey, setPrivateKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleAccessWallet = () => {
    console.log("Accessing with private key");
    router.push("/dashboard");
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

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Access Wallet with Private Key
        </h1>

        {/* Content */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Enter your private key
          </h2>

          {/* Private Key Input */}
          <div className="relative mb-6">
            <input
              type={showKey ? "text" : "password"}
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
              placeholder="Private Key"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 pr-12 focus:border-teal-500 focus:outline-none"
            />
            <button
              onClick={() => setShowKey(!showKey)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showKey ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-3 mb-6">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
            />
            <label htmlFor="terms" className="text-gray-700">
              To access my wallet, I accept{" "}
              <a href="#" className="text-teal-600 hover:underline">
                Terms
              </a>
            </label>
          </div>

          {/* Access Button */}
          <button
            onClick={handleAccessWallet}
            disabled={!privateKey || !acceptedTerms}
            className="w-full bg-gray-300 text-gray-600 py-4 rounded-lg font-semibold mb-6 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition"
          >
            Access Wallet
          </button>

          {/* Warning Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  NOT RECOMMENDED
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  This information is sensitive, and these options should only
                  be used in offline settings by experienced crypto users.
                </p>
                <a href="#" className="text-sm text-teal-600 hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Need help?{" "}
          <a href="#" className="text-teal-600 hover:underline">
            Contact support
          </a>
        </div>
      </div>
    </div>
  );
}
