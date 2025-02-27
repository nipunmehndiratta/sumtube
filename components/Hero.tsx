'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { FaYoutube } from "react-icons/fa";
import { validVideoUrl } from "@/lib/schemas";


export function Hero() {

    const [videoUrl, setVideoUrl] = useState("");
    const router = useRouter();
    const [error, setError] = useState("");

    const handleSubmit = () => {
        const isValidUrl = validVideoUrl.safeParse(videoUrl);
        if(isValidUrl.success){
            router.push(`/video/summary?vid=${videoUrl.split("v=")[1]}`);
        }
        else{
            setError(isValidUrl.error.errors[0].message);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center gap-y-10">
            <h1 className="mt-12 text-7xl text-center">
                AI YouTube Video Summarizer
            </h1>
            <h2 className="text-xl text-center">Overwhelmed by Endless Content? <br/>
                Get the key points of any online content and focus on what matters.
            </h2>
            <div className="flex flex-col items-center gap-y-2">
            <div className="flex items-center bg-white gap-x-2 p-2 rounded-3xl border border-cyan-500">
                <FaYoutube className="text-red-500 bg-white w-20 h-8"/>
                <input type="text" className="w-full h-full text-black bg-inherit outline-none" placeholder="Paste YouTube URL here" onChange={(e) => setVideoUrl(e.target.value)}/>
                <button type="button" className="p-2 rounded-xl w-64 border border-white bg-cyan-500" onClick={handleSubmit}>Try now</button>
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
            <Image className="mt-20 border-8 border-cyan-500 rounded-xl" src={"/sample.png"} alt="sampleImage" width={"1200"} height={"1200"}/>
        </div>
    )
}