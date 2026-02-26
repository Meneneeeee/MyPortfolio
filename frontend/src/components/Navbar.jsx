import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
];

const Navbar = ({ isDark, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-[#0f1016]/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-white/5 py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="home" smooth={true} duration={500} className="text-2xl font-bold font-poppins cursor-pointer text-gray-900 dark:text-white">
                    Aldrian<span className="text-blue-500 text-3xl">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer font-medium text-sm transition-colors relative group"
                            activeClass="text-blue-500 dark:text-blue-400 font-semibold"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-violet-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                </div>

                {/* Mobile Menu Toggle & Theme */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                    <div className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 dark:bg-[#151720]/95 backdrop-blur-lg border-t border-gray-200/50 dark:border-white/5"
                    >
                        <div className="flex flex-col items-center py-6 gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer font-medium text-lg"
                                    activeClass="text-blue-500 dark:text-blue-400"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
