import { Innertube } from 'youtubei.js/web';
import { Duration } from 'luxon';

export type Transcript = {
    timestamp: string,
    text: string
}

const youtube = await Innertube.create({
  lang: 'en',
  location: 'US',
  retrieve_player: false,
});

export const fetchTranscript = async (videoId: string): Promise<Transcript[] | null> => {
    try {
        const info = await youtube.getInfo(videoId);
        const transcriptData = await info.getTranscript();
        if(!transcriptData) return null;
        const updatedTranscript: Transcript[] = [];
        transcriptData?.transcript?.content?.body?.initial_segments.forEach((item) => {
          updatedTranscript.push({
            timestamp: Duration.fromMillis(Number(item.start_ms)).toFormat("mm:ss"),
            text: item.snippet.text || "",
          })
        });
        return updatedTranscript;
    } catch (error) {
        console.error("Error fetching transcript:", error);
        return null;
    }
};