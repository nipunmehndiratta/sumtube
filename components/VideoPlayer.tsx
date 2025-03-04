"use client";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

export function VideoPlayer({
  timestamp,
  videoId,
}: {
  timestamp: number;
  videoId: string | null;
}) {
  const playerRef = useRef<ReactPlayer>(null);

  const seekToTimestamp = (seconds: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(seconds, "seconds");
    }
  };

  useEffect(() => {
    seekToTimestamp(timestamp);
  }, [timestamp]);

  return (
    <div className="w-full h-full min-h-fit lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg border border-cyan-500/50">
      {videoId ? (
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <ReactPlayer
            ref={playerRef}
            url={`http://youtube.com/watch?v=${videoId}`}
            playing={true}
            muted={true}
            controls
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
          />
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-48 bg-gray-800/30 text-gray-400">
          No video selected
        </div>
      )}
    </div>
  );
}