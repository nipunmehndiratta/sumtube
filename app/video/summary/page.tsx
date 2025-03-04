import { Suspense } from "react";
import VideoSum from "@/components/VideoSum";

export default function VideoSummaryPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center">
          <span className="text-xl text-cyan-400 animate-pulse">
            Loading...
          </span>
        </div>
      }
    >
      <VideoSum />
    </Suspense>
  );
}