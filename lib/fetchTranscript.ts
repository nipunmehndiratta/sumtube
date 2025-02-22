import { YoutubeTranscript } from "youtube-transcript";

export const fetchTranscript = async (videoUrl: string): Promise<string | null> => {
    try {
        const transcript = await YoutubeTranscript.fetchTranscript(videoUrl);
        if(!transcript) return null;
        
        return transcript.map((t) => t.text).join(" ");
    } catch (error) {
        console.error("Error fetching transcript:", error);
        return null;
    }
};