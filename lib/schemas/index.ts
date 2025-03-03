import { z } from "zod";

export const validVideoUrl = z.string().nonempty("").url("Must be a valid URL").refine((value) => value.includes("youtube.com"), {message: "Please enter a valid youtube video URL"});
