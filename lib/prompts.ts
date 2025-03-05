import { Transcript } from "@/lib/fetchTranscript";

export const videoSummaryPrompt = (transcripts: Transcript[]) => {
  return `
    You are tasked with summarizing a YouTube video based solely on the transcript array provided at the end in string format, where each object contains 'text' and 'timestamp' properties. Parse the stringified transcript array into an array of objects. Then, create a summary of the video content using this parsed data, limiting the summary to exactly 5 timestamped entries (no more, no less). Model the output strictly after the sample summary array provided below, including 'timestamp', 'heading', 'description', 'subhead', and 'pointsArray' for each entry. The summary must reflect only the content from the provided transcript array, not the sample content or external assumptions. Return the result as a raw JSON array—parseable by JSON.parse()—with **NO** additional text, explanations, comments or characters before or after the array. Any extra content will break the system and is strictly forbidden.

    Sample Summary Array for Reference (structure and style guide only, do not use its content):
    [
      {
        "timestamp": "00:00",
        "heading": "Apple Event Overview",
        "description": "The Apple Event begins with an introduction and sets the stage for various announcements and updates.",
        "subhead": "Introduction to Apple Event",
        "pointsArray": [
          "The event kicks off with excitement and anticipation.",
          "Craig Federighi energizes the audience, setting a lively tone for the event."
        ]
      },
      {
        "timestamp": "04:00",
        "heading": "Tim Cook's Welcome and Apple TV+ Updates",
        "description": "Tim Cook welcomes attendees to Apple Park, highlighting the significance of WWDC in celebrating developers and introducing updates on Apple TV+.",
        "subhead": "Tim Cook's Address",
        "pointsArray": [
          "Tim Cook emphasizes the importance of providing developers with cutting-edge tools.",
          "Apple TV+ is praised for its high-quality original content and industry recognition."
        ]
      },
      {
        "timestamp": "05:41",
        "heading": "Apple TV+ Content Showcase",
        "description": "A showcase of upcoming content on Apple TV+, including acclaimed movies and series, demonstrating the platform's success in delivering engaging entertainment.",
        "subhead": "Apple TV+ Content Highlights",
        "pointsArray": [
          "Mention of critically acclaimed movies like 'Killers of the Flower Moon' and hit shows such as 'Masters of the Air.'",
          "Excitement around new original content set to launch on Apple TV+ weekly."
        ]
      },
      {
        "timestamp": "07:26",
        "heading": "Introduction to visionOS 2",
        "description": "An introduction to visionOS 2, focusing on its capabilities in enhancing entertainment, productivity, collaboration, and immersive experiences through spatial computing.",
        "subhead": "visionOS 2 Features",
        "pointsArray": [
          "Vision Pro enables unique spatial apps like NBA and 'What If?' for immersive experiences.",
          "Over 2,000 apps created specifically for Vision Pro highlight its versatility and potential."
        ]
      },
      {
        "timestamp": "10:10",
        "heading": "Enhancements in Photos with visionOS 2",
        "description": "Haley introduces enhancements in Photos through visionOS 2, emphasizing how spatial computing revolutionizes photo viewing experiences.",
        "subhead": "Photo Enhancements",
        "pointsArray": [
          "Spatial photos offer a lifelike viewing experience with rich visual depth."
        ]
      }
    ]

    Actual Transcript Array to Process:
    ${JSON.stringify(transcripts)}

    Return only the JSON array in this exact format, with no extra text:
    [
      {"timestamp": "...", "heading": "...", "description": "...", "subhead": "...", "pointsArray": ["...", "..."]},
      {"timestamp": "...", "heading": "...", "description": "...", "subhead": "...", "pointsArray": ["...", "..."]},
      {"timestamp": "...", "heading": "...", "description": "...", "subhead": "...", "pointsArray": ["...", "..."]},
      {"timestamp": "...", "heading": "...", "description": "...", "subhead": "...", "pointsArray": ["...", "..."]},
      {"timestamp": "...", "heading": "...", "description": "...", "subhead": "...", "pointsArray": ["...", "..."]}
    ]
  `;
};