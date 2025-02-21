

export function Hero() {
    return (
        <div className="h-full flex flex-col justify-center items-center gap-y-5">
            <h1 className="text-5xl text-center">
                Summarize & Extract Key Moments
            </h1>
            <h2 className="text-xl">Get the most important points and timestamps in seconds</h2>
            <input className="p-2 rounded-xl w-96 h-16 bg-inherit border border-cyan-500 outline-none" placeholder="Paste YouTube link here"/>
            <button className="p-2 rounded-xl w-64 border border-white bg-cyan-500">Try now</button>
        </div>
    )
}