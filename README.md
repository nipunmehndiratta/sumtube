# SumTube - AI YouTube Video Summarizer

<div align="center">
  <img src="https://raw.githubusercontent.com/nipunmehndiratta/sumtube/main/public/logo.png" alt="SumTube Logo" width="180"/>
  <h3>Get the key points of any YouTube video in seconds</h3>
  <div style="border: 1px solid #e1e4e8; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden; max-width: 80%;">
    <img src="https://i.postimg.cc/NF7P35wF/Screenshot-2025-03-07-at-8-56-30-PM.png" alt="SumTube Hero Screenshot" style="width: 100%; display: block;"/>
  </div>
</div>
</br>
<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=for-the-badge&logo=typescript)
  ![HuggingFace](https://img.shields.io/badge/HuggingFace-API-yellow?style=for-the-badge&logo=huggingface)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)
  
</div>

## 🚀 Features

- **Quick Summaries**: Get concise, structured summaries of YouTube videos
- **Timestamp Navigation**: Jump directly to specific parts of the video from the summary
- **AI-Powered**: Advanced LLM summarization with DeepSeek R1 Distill Qwen 32B
- **Time-Efficient**: Save time by getting the key points instead of watching entire videos
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🎬 Demo

![SumTube Demo](https://raw.githubusercontent.com/nipunmehndiratta/sumtube/main/public/sample.png)

Try it now at: [https://sumtube-ai.nipunm.com](https://sumtube-ai.nipunm.com)

## 💻 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Video Processing**: youtubei.js for transcript extraction
- **AI**: Hugging Face Inference API with DeepSeek-R1-Distill-Qwen-32B
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS with custom animations
- **Date Handling**: Moment.js, Luxon
- **Form Validation**: Zod
- **API Requests**: Axios

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nipunmehndiratta/sumtube.git
   cd sumtube
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   HUGGINGFACE_API_KEY=your_huggingface_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔍 How It Works

1. **Input YouTube URL**: Users paste a YouTube video URL into the input field
2. **Extract Video ID**: The app extracts the video ID and validates the URL
3. **Fetch Transcript**: The app retrieves the video transcript using youtubei.js
4. **Generate Summary**: The transcript is processed by the DeepSeek AI model
5. **Display Summary**: The summary is presented with timestamps and key points
6. **Interactive Navigation**: Users can click on timestamps to jump to specific video sections

## 📝 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

Nipun - [nipun2k.m@gmail.com](mailto:nipun2k.m@gmail.com)

Project Link: [https://github.com/nipunmehndiratta/sumtube](https://github.com/nipunmehndiratta/sumtube)

---

<div align="center">
  <p>Made with ❤️ in 2025</p>
</div>
