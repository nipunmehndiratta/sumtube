import { HfInference } from "@huggingface/inference";
import { Transcript } from "@/lib/fetchTranscript";
import { videoSummaryPrompt } from "./prompts";

const API_KEY = process.env.HUGGINGFACE_API_KEY || "";

const hf = new HfInference(API_KEY);

export const summarizeText = async (transcript: Transcript[]) => {

    try{
        if(!API_KEY){
            throw new Error("Missing Hugging Face API Key");
        }

        const prompt = videoSummaryPrompt(transcript);

        const output = await hf.textGeneration({
            model: "deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
            inputs: prompt,
            provider: "hf-inference",
        });

        const rawOutput = output?.generated_text?.split("</think>")[1] || "";
        const jsonStart = rawOutput.indexOf("[");
        const jsonEnd = rawOutput.lastIndexOf("]");

        if(jsonStart !== -1 && jsonEnd !== -1){
            const jsonString = rawOutput.substring(jsonStart,jsonEnd + 1);
            return JSON.parse(jsonString);
        }
        return null;
    } catch (error) {
        console.error(`Error in summarizing text:`, error);
        return null;
    }
};