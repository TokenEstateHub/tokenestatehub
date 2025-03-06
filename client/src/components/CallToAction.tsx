import { motion } from 'framer-motion';

const CallToAction = () => {
    return (
        <section className="py-20 rounded-lg">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4 text-blue-900">Ready to revolutionize your real estate investments?</h2>
                <p className="text-xl mb-8 text-gray-600">Join TokenEstate today and experience the future of real estate investments.</p>
                <a href="">
                    <motion.a
                        className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-800 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Investing
                    </motion.a>
                </a>
            </div>
        </section>
    );
};

export default CallToAction;