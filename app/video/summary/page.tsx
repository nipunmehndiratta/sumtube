import { Suspense } from "react";
import VideoSum from "@/components/VideoSum";

export default function VideoSummaryPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
      <VideoSum />
    </Suspense>
  );
}
