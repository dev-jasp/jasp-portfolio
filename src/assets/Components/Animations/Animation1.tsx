import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface Animation1Props {
    children: ReactNode; 
}

const Animation1: React.FC<Animation1Props> = ({ children }) => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-start text-xl flex space-x-8 py-6 lg:text-2xl"
        >
            {children}
        </motion.div>
    );
};

export default Animation1;
