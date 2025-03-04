import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
    <header className="h-[80px] sticky top-0 w-full px-5 py-3 flex justify-center bg-opacity-90 z-50 bg-gradient-to-b from-gray-900/95 to-transparent">
      <div className="flex justify-between items-center border border-gray-700/50 rounded-2xl w-full max-w-5xl p-3 bg-gray-800/30 backdrop-blur-lg shadow-lg hover:shadow-cyan-500/20 transition-all">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="SumTube Logo"
            width={120}
            height={120}
            className="hover:scale-105 transition-transform duration-300"
          />
                </Link>
            </div>
    </header>
    );
}
