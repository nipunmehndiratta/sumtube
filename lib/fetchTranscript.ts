import { YoutubeTranscript } from "youtube-transcript";
import moment from "moment";

export type Transcript = {
    timestamp: string,
    text: string
}

export const fetchTranscript = async (videoUrl: string): Promise<Transcript[] | null> => {
    try {
        const transcript = await YoutubeTranscript.fetchTranscript(videoUrl);
        if(!transcript) return null;
        const updatedTranscript: Transcript[] = [];
        transcript.forEach((item) => {
          updatedTranscript.push({
            timestamp: moment.utc(item.offset * 1000).format("mm:ss"),
            text: item.text,
          })
        });
        return updatedTranscript;
    } catch (error) {
        console.error("Error fetching transcript:", error);
        return null;
    }
};