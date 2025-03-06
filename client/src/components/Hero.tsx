import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
                Revolutionizing Real Estate Investment
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Transform the way you invest in real estate through blockchain
                technology. Own fractional shares of premium properties with complete
                transparency and liquidity.
            </p>
            <button className="px-8 py-4 text-lg rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all flex items-center gap-2">
                Start Investing <ArrowRight size={20} />
            </button>
        </div>
    );
}