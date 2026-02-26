import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ isDark, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full glass hover:bg-gray-100 dark:hover:bg-white/10 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label="Toggle Dark Mode"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? 0 : 180,
                    scale: isDark ? 1 : 0,
                    opacity: isDark ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'backOut' }}
                className="absolute"
            >
                <FiMoon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? -180 : 0,
                    scale: isDark ? 0 : 1,
                    opacity: isDark ? 0 : 1
                }}
                transition={{ duration: 0.3, ease: 'backOut' }}
                className={`absolute ${isDark ? 'invisible' : 'visible'}`}
            >
                <FiSun className="w-5 h-5 text-amber-500" />
            </motion.div>

            {/* Invisible placeholder to maintain button size */}
            <div className="w-5 h-5 invisible"></div>
        </button>
    );
};

export default ThemeToggle;
