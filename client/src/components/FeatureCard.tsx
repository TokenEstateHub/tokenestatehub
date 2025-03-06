import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function FeatureCard({
                                        icon: Icon,
                                        title,
                                        description,
                                    }: FeatureCardProps) {
    return (
        <div className="p-6 rounded-xl bg-white shadow-[8px_8px_16px_0px_rgba(0,0,0,0.1),-8px_-8px_16px_0px_rgba(255,255,255,0.9)]">
            <Icon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}