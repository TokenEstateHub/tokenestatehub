import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="w-full p-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-900">TokenEstate</div>
            <div className="hidden md:flex gap-8">
                <button className="px-4 py-2 rounded-lg bg-white shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[inset_4px_4px_10px_0px_rgba(0,0,0,0.1),inset_-4px_-4px_10px_0px_rgba(255,255,255,0.9)] transition-all">
                    How it Works
                </button>
                <button className="px-4 py-2 rounded-lg bg-white shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[inset_4px_4px_10px_0px_rgba(0,0,0,0.1),inset_-4px_-4px_10px_0px_rgba(255,255,255,0.9)] transition-all">
                    Benefits
                </button>
                <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all">
                    Get Started
                </button>
            </div>
            <button className="md:hidden">
                <Menu />
            </button>
        </nav>
    );
}