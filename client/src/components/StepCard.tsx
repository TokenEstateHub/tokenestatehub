import { motion } from "framer-motion";

interface StepCardProps {
    index: number;
    title: string;
    description: string;
}

export const StepCard = ({ index, title, description }: StepCardProps) => {
    return (
        <motion.div
            className="rounded-lg p-6 text-center mb-6 md:mb-0 text-blue-900"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="text-3xl font-bold text-blue-500 mb-2">{index + 1}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};