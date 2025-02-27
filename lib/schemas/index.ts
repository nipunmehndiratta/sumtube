import { z } from "zod";

export const validVideoUrl = z.string().nonempty("").url("Must be a valid URL").refine((value) => value.includes("https://www.youtube.com/watch?v="), {message: "Please enter a valid youtube video URL"});
