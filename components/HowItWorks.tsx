'use client'


export function HowItWorks() {
  const steps = [
    { step: 1, title: "Paste URL", desc: "Enter the YouTube video URL you want to summarize." },
    { step: 2, title: "AI Analysis", desc: "Our AI analyzes the video content and transcript." },
    { step: 3, title: "Generate Summary", desc: "Get a concise summary with key points in seconds." },
    { step: 4, title: "Save Time", desc: "Quickly grasp video content without watching the full video." },
  ];

  return (
    <section className="py-20 px-5">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-cyan-400 mb-16">
        Get an AI YouTube Summary in 4 Easy Steps
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {steps.map(({ step, title, desc }) => (
          <div
            key={step}
            className="flex items-start gap-4 bg-gray-800/30 p-6 rounded-xl hover:bg-gray-800/50 transition-all"
          >
            <span className="text-3xl font-bold text-cyan-500">{step}</span>
            <div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}