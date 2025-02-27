import { NextResponse } from "next/server";
import { fetchTranscript } from "@/lib/fetchTranscript";
import { summarizeText } from "@/lib/summarizeText";
import { handleError } from "@/utils/errorHandler";

export const POST = async (request: Request) => {
  try {
    const { videoId } = await request.json();
    if(!videoId){
      return handleError("Video URL is required", 400);
    }

    const transcript = await fetchTranscript(videoId);
    if(!transcript){
      return handleError("Failed to fetch transcript", 502);
    }

    const summary = await summarizeText(transcript);
    if(!summary){
      return handleError("An unexpected error occurred", 500);
    }
    return NextResponse.json({ status: true, data: JSON.parse(summary) });
  } catch (error) {
    console.error(error);
    return handleError("An unexpected error occurred", 500);
  }
};