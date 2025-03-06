import { AnimatePresence, motion } from "framer-motion";
import { RiArrowDropDownLine } from "react-icons/ri";
import * as React from "react";

interface FaqItemProps {
    index: number;
    question: string;
    answer: string;
    isActive: boolean;
    toggleAccordion: (index: number) => void;
}

export const FaqItem: React.FC<FaqItemProps> = ({ index, question, answer, isActive, toggleAccordion }) => {
    return (
        <motion.div
            className="border-b border-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
        >
            <button type="button"
                    className="flex justify-between items-center w-full text-left p-4 focus:outline-none text-gray-700 font-medium"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isActive}
            >
                <span>{question}</span>
                <RiArrowDropDownLine
                    className={`text-2xl transition-transform ${isActive ? "rotate-180 text-blue-600" : "text-gray-600"}`}
                />
            </button>
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 text-gray-600"
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};