"use client";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

export function VideoPlayer({ timestamp, videoId }: { timestamp: number; videoId: string | null }) {
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
        <div className="flex-1 w-full relative" style={{ paddingTop: "26.25%" }}>
            {videoId && (
                <ReactPlayer
                    ref={playerRef}
                    url={`http://youtube.com/watch?v=${videoId}`}
                    playing={true}
                    muted={true}
                    controls
                    width="100%"
                    className="absolute top-0 left-0"
                />
            )}
        </div>
    );
}

