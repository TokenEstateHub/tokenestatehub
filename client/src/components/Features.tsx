import { Building2, Coins, Shield, Users } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
    {
        icon: Building2,
        title: "Premium Properties",
        description:
            "Access high-value real estate investments with minimal capital",
    },
    {
        icon: Coins,
        title: "Tokenization",
        description: "Own fractional shares through blockchain-backed tokens",
    },
    {
        icon: Shield,
        title: "Secure & Transparent",
        description: "Smart contracts ensure secure and transparent transactions",
    },
    {
        icon: Users,
        title: "Community",
        description: "Join a community of forward-thinking real estate investors",
    },
];

export default function Features() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
            ))}
        </div>
    );
}