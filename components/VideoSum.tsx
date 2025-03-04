"use client";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Suspense, useEffect, useState, useMemo } from "react";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { GridLoader } from "react-spinners";
import { motion } from "framer-motion";

type Summary = {
  timestamp: string;
  heading: string;
  description: string;
  subhead: string;
  pointsArray: string[];
};

export default function VideoSum() {
  const searchParams = useSearchParams();
  const videoId = useMemo(() => searchParams.get("vid"), [searchParams]);

  const [summary, setSummary] = useState<Summary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.post("/api/summarize", { videoId });
        if (response.data && Array.isArray(response.data.data)) {
          setSummary(response.data.data);
          setLoading(false);
        } else {
          setError("Invalid summary data received.");
          setLoading(false);
        }
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.error("Error fetching summary:", error);
        setError("Failed to load summary. Please try again.");
        setLoading(false);
      }
    };
    fetchSummary();
  }, [videoId]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="p-5 flex flex-col md:flex-row justify-center gap-6 max-w-7xl mx-auto max-h-[calc(100vh-80px)]">
      <Suspense
        fallback={<div className="w-full lg:w-1/2 h-64 bg-gray-800/30 rounded-xl animate-pulse" />}
      >
        <VideoPlayer timestamp={timestamp} videoId={videoId} />
      </Suspense>
      {loading ? (
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-y-6">
          <GridLoader size={10} color="#22D3EE" />
          <span className="text-lg md:text-xl text-cyan-400 animate-pulse">
            Generating your summary...
          </span>
        </div>
      ) : error ? (
        <div className="w-full lg:w-1/2 flex justify-center items-center text-red-400 text-lg">
          {error}
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 bg-gray-800/20 backdrop-blur-md p-6 rounded-2xl shadow-lg max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-gray-900"
        >
          {summary.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-y-3 text-sm md:text-base mb-6 last:mb-0"
            >
              <button
                type="button"
                className="p-3 flex items-center gap-x-3 rounded-xl bg-gray-700/30 hover:bg-cyan-500/20 transition-all text-left"
                onClick={() => {
                  const time = item.timestamp
                    ? moment.duration(`00:${item.timestamp}`).asSeconds()
                    : 0;
                  setTimestamp(isNaN(time) ? 0 : time);
                }}
                aria-label={`Jump to ${item.timestamp} - ${item.heading}`}
              >
                <span className="border border-cyan-500/50 px-3 py-1 rounded-full text-cyan-300 font-medium">
                  {item.timestamp}
                </span>
                <span className="font-bold text-white">{item.heading}</span>
              </button>
              <p className="text-gray-300 px-3">{item.description}</p>
              <p className="font-semibold text-cyan-300 px-3">{item.subhead}</p>
              <ul className="list-disc pl-8 text-gray-300">
                {item.pointsArray.map((p, index) => (
                  <li key={index} className="py-1">
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}