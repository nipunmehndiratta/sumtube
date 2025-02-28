import { Suspense } from "react";
import VideoSum from "@/components/VideoSum";

export default function VideoSummaryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VideoSum />
    </Suspense>
  );
}
