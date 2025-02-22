import { HfInference } from "@huggingface/inference";

const API_KEY = process.env.HUGGINGFACE_API_KEY || "";

const hf = new HfInference(API_KEY);

export const summarizeText = async (transcript: string) => {
    try{
        if(!API_KEY){
            throw new Error("Missing Hugging Face API Key");
        }

        const prompt = `
            Given this transcript, perform the following steps:
            1. Summarize this YouTube video in 5 key points.
            2. Extract these sentences verbatim from the original text.
            3. Translate each extracted sentence into English if it’s in another language.
            4. Return only these 5 sentences, numbered, in ENGLISH, with no additional text.
      
            Transcript:
            ${transcript}
        `;

        const output = await hf.textGeneration({
            model: "deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
            inputs: prompt,
            provider: "hf-inference",
        });
        return output?.generated_text?.split("</think>")[1] || null;
    } catch (error) {
        console.error(`Error in summarizing text:`, error);
        return null;
    }
};