"use client";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

export function VideoPlayer({timestamp,videoId}: {timestamp: number,videoId: string | null}) {
    const playerRef = useRef<ReactPlayer>(null);

    const seekToTimestamp = (seconds: number) => {
        if (playerRef.current) {
            playerRef.current.seekTo(seconds, "seconds");
        }
    };

    useEffect(() => {
      seekToTimestamp(timestamp);
    },[timestamp])

    return (
        <div className="w-fit h-fit rounded overflow-hidden">
            {videoId && 
                <ReactPlayer ref={playerRef} url={`http://youtube.com/watch?v=${videoId}`} playing={true} muted={true} controls/>
            }
        </div>
    );
}
