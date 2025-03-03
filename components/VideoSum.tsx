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
        const response = await axios.post(
          "/api/summarize",
          { videoId },
        );
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
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="p-5 h-full flex flex-col lg:flex-row justify-center gap-4">
    <Suspense>
      <VideoPlayer timestamp={timestamp} videoId={videoId} />
    </Suspense>
      {loading ? (
        <div
          className="h-1/2 w-full flex flex-col justify-center items-center gap-y-5"
          role="status"
        >
          <GridLoader size={8} color="white" />
          <span className="text-xl">Generating summary...</span>
        </div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 2xl:max-w-4xl overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-black"
        >
          {summary.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-y-1 text-sm md:text-lg"
              variants={itemVariants}
            >
              <button
                type="button"
                className="p-2 flex gap-x-2 rounded hover:bg-[#282B2E]"
                onClick={() => {
                  const time = item.timestamp
                    ? moment.duration(`00:${item.timestamp}`).asSeconds()
                    : 0;
                  setTimestamp(isNaN(time) ? 0 : time);
                }}
                aria-label={`Jump to ${item.timestamp} - ${item.heading}`}
              >
                <span className="border border-gray-600 pl-2 pr-2 rounded">
                  {item.timestamp}
                </span>
                <span className="font-bold">{item.heading}</span>
              </button>
              <span className="rounded hover:bg-[#282B2E] py-1 px-2">
                {item.description}
              </span>
              <span className="font-semibold rounded hover:bg-[#282B2E] py-1 px-2">
                {item.subhead}
              </span>
              <ul className="list-disc pl-6">
                {item.pointsArray.map((p, index) => (
                  <li
                    className="rounded hover:bg-[#282B2E] py-1 px-2"
                    key={index}
                  >
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