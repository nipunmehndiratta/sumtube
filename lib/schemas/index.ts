import { z } from "zod";

export const validVideoUrl = z
  .string()
  .nonempty("URL cannot be empty")
  .url("Must be a valid URL")
  .refine(
    (value) => {
      try {
        const urlObj = new URL(value);
        return (
          urlObj.hostname === "youtube.com" ||
          urlObj.hostname === "www.youtube.com" ||
          urlObj.hostname === "youtu.be" ||
          urlObj.hostname === "m.youtube.com"
        );
      } catch {
        return false;
      }
    },
    { message: "Must be a YouTube URL" })
  .transform((value, ctx) => {
      try {
        const urlObj = new URL(value);
        let videoId;

        if (urlObj.hostname === "youtu.be") {
          videoId = urlObj.pathname.split("/")[1];
        } else {
          videoId = urlObj.searchParams.get("v");
        }

        if (!videoId) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Invalid YouTube video URL - No video ID found",
          });
          return z.NEVER;
        }

        return videoId;
      } catch {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Failed to process YouTube URL",
        });
        return z.NEVER;
      }
  });