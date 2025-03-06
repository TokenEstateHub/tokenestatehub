import { useState } from "react";
import { FaqItem } from "./FaqItem";

const faqs = [
    { question: "What cryptocurrencies does Tokenestate support?", answer: "Tokenestate support list for cryptocurrencies will be available soon." },
    { question: "How long do transactions take to process?", answer: "Most transactions are processed within 15-30 minutes, depending on the cryptocurrency network." },
    { question: "Is Tokenestate available internationally?", answer: "No, Tokenestate is currently under development and still not available globally." },
    { question: "How secure is Tokenestate?", answer: "Tokenestate uses advanced blockchain technology and follows strict security protocols to ensure all transactions are secure." },
];

export default function Faqs() {
    const [activeAccordion, setActiveAccordion] = useState<{ [key: number]: boolean }>({});

    const toggleAccordion = (index: number) => {
        setActiveAccordion((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <section id="faq" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            index={index}
                            question={faq.question}
                            answer={faq.answer}
                            isActive={activeAccordion[index]}
                            toggleAccordion={toggleAccordion}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}