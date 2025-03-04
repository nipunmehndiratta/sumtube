'use client'

export function WhyChooseUs() {
  const features = [
    {
      title: "100% Free",
      desc: "Summarize YouTube videos without any cost. No hidden fees or premium features.",
    },
    {
      title: "No Login Required",
      desc: "Start summarizing videos instantly. No need to create an account or sign up.",
    },
    {
      title: "AI-Powered Accuracy",
      desc: "Get high-quality summaries using advanced AI technology for precise results.",
    },
  ];

  return (
    <section className="py-20 px-5 bg-gray-900/50">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-cyan-400 mb-16">
        Effortless Summarization
      </h2>
      <h3 className="text-2xl md:text-3xl text-center text-white mb-12">
        Why Choose Our YouTube Video Summarizer?
      </h3>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map(({ title, desc }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all"
          >
            <h4 className="text-xl font-semibold text-cyan-300 mb-4">{title}</h4>
            <p className="text-gray-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}