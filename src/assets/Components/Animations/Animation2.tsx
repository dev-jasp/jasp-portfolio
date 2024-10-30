import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface Animation2Props {
    children: ReactNode; 
}

const Animation2: React.FC<Animation2Props> = ({ children }) => {
    return (
        <motion.div
            initial={{x: -100, opacity: 0}}
            animate= {{x:0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.8}}
            className="text-start text-xl flex space-x-8 py-6 lg:text-2xl"
        >
            {children}
        </motion.div>
    );
};

export default Animation2;
