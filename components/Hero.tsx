"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaYoutube, FaCopy } from "react-icons/fa";
import { validVideoUrl } from "@/lib/schemas";

export function Hero() {
  const [videoUrl, setVideoUrl] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const demoVideoUrl = "https://www.youtube.com/watch?v=j63bBK_ct-M";

  const handleSubmit = () => {
    const result = validVideoUrl.safeParse(videoUrl);
    
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
  
    try {
      router.push(`/video/summary?vid=${result.data}`);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  const handleCopy = () => {
    setVideoUrl(demoVideoUrl);
    navigator.clipboard.writeText(demoVideoUrl); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 sm:p-5 flex flex-col justify-center items-center gap-y-8 sm:gap-y-10 pt-16 sm:pt-20 max-w-5xl mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white leading-tight">
        AI YouTube Video Summarizer
      </h1>
      <h2 className="text-base sm:text-lg md:text-xl text-center text-gray-300 px-2">
        Overwhelmed by Endless Content? <br />
        Get the key points of any online content and focus on what matters.
      </h2>
      <div className="flex flex-col items-center gap-y-4 sm:gap-y-6 w-full">
        {/* Highlighted Feature */}
        <div className="flex items-center justify-center gap-x-2 bg-cyan-500/10 p-2 sm:p-3 rounded-full border border-cyan-400/50 shadow-md animate-pulse-slow w-full sm:w-auto">
          <span className="text-cyan-300 font-semibold text-xs sm:text-sm md:text-base text-center px-2">
            ✨ Try a max 15-minute video for free now - bigger summaries coming soon!
          </span>
        </div>
        {/* Input Section */}
        <div className="flex items-center bg-gray-800/50 backdrop-blur-md gap-2 p-3 rounded-full border border-cyan-500 shadow-lg hover:shadow-cyan-500/20 transition-all w-full sm:w-auto">
          <div className="flex items-center gap-x-2 w-full sm:w-auto">
            <FaYoutube className="text-red-500 w-8 h-8 sm:w-10 md:w-12 flex-shrink-0" />
            <input
              type="text"
              className="w-full sm:w-48 md:w-64 lg:w-96 h-10 sm:h-12 text-white bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base"
              placeholder="Paste YouTube URL here"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="p-2 sm:p-3 rounded-full w-32 md:w-40 bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 transition-all text-white font-semibold text-sm sm:text-base sm:mt-0"
            onClick={handleSubmit}
          >
            Try Now
          </button>
        </div>
        {error && (
          <p className="text-xs sm:text-sm text-red-400 animate-pulse text-center">
            {error}
          </p>
        )}
        {/* Demo Link with Copy Button */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-x-3 w-full sm:w-auto">
          <p className="text-xs sm:text-sm text-gray-400 text-center">
            Try a sample video: <span className="text-cyan-300">{demoVideoUrl}</span>
          </p>
          <button
            type="button"
            className="flex items-center gap-x-1 p-2 rounded-full bg-gray-700/50 hover:bg-cyan-500/20 text-cyan-300 text-xs sm:text-sm transition-all"
            onClick={handleCopy}
          >
            <FaCopy className="w-4 h-4" />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <Image
        className="mt-12 sm:mt-16 border-4 border-cyan-500 rounded-2xl shadow-2xl hover:scale-105 transition-transform"
        src="/sample.png"
        alt="sampleImage"
        width={1200}
        height={1200}
      />
    </div>
  );
}