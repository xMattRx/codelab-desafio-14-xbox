import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
    const [active, setActive] = useState('VISÃO GERAL');

    const buttons = ['VISÃO GERAL', 'JOGOS', 'GALERIA', 'UNBOX'];

    return (
        <ul className="flex max-w-[361px] md:max-w-[312px] lg:max-w-[421px] w-full md:ml-12 lg:ml-16 justify-between">
            {buttons.map((btn) => (
                <li key={btn}>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            backgroundColor: active === btn ? '#374151' : 'transparent', // bg-gray-700
                            scale: active === btn ? 1.05 : 1
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="text-white px-4 py-2 md:py-[6px] md:px-[10px] rounded-full font-semibold text-[8px] leading-none lg:text-[14px] tracking-[0.01em] uppercase hover:bg-gray-600 transition"
                        onClick={() => setActive(btn)}
                    >
                        {btn}
                    </motion.button>
                </li>
            ))}
        </ul>
    );
}
