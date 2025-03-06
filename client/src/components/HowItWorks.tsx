import { StepCard } from "./StepCard";

export default function HowItWorks() {
    const steps = [
        { title: "Sign Up", description: "Create your Tokenestate account" },
        { title: "Link Wallet", description: "Connect your crypto wallet" },
        { title: "Choose an asset", description: "Select your house or building to invest in" },
        { title: "Make Payment", description: "Pay the investment amount in your preferred cryptocurrency" },
    ];

    return (
        <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
                    How TokenEstate Works
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
                    {steps.map((step, index) => (
                        <StepCard key={index} index={index} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
};
