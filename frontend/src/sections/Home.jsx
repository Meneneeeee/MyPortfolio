import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import ParticleBackground from '../components/ParticleBackground';

const roles = ['Java Developer', 'Web Developer', 'Mobile Developer'];

const Home = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <ParticleBackground />

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="inline-block px-4 py-2 glass rounded-full w-max border-blue-500/30"
                    >
                        <span className="text-sm font-medium tracking-wide text-blue-600 dark:text-blue-300">👋 Welcome to my portfolio</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">Aldrian Meneses</span>
                    </h1>

                    <div className="h-12 md:h-16 flex items-center">
                        <h2 className="text-2xl md:text-4xl font-light text-gray-600 dark:text-gray-300">
                            Software Engineer |{' '}
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roles[roleIndex]}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="font-semibold text-gray-900 dark:text-white inline-block"
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </h2>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg leading-relaxed mt-2">
                        Experienced Software Engineer hands-on experience in both mobile and web development. Skilled in front-end and back-end technologies, using various programming languages to build innovative, reliable, and scalable software solutions across different projects.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white rounded-xl font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
                        >
                            Contact Me
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#skills"
                            className="px-8 py-3.5 glass hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-xl font-medium transition-all"
                        >
                            See My Stack
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://drive.google.com/uc?export=view&id=1PwjsWMT4RJJY0bTIYh_anPoq9Ok4YG5t"
                            target="_blank"
                            className="px-6 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            <FiDownload size={18} /> Resume
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="relative flex justify-center hidden md:flex"
                >
                    {/* Glowing gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 to-violet-500/40 blur-3xl rounded-full scale-75" />

                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                        className="relative w-80 h-80 rounded-full p-2 bg-gradient-to-tr from-blue-500 to-violet-500"
                    >
                        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-[#0f1016] flex items-center justify-center border-4 border-white dark:border-[#0f1016]">
                            {/* Fallback image if user doesn't have it */}
                            <img
                                src="/assets/profile.jpg"
                                alt="Aldrian Meneses Profile"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://res.cloudinary.com/digbh0psb/image/upload/v1772090600/download1_zv4qib.jpg';
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-gray-500 text-sm tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
                />
            </motion.div>
        </section>
    );
};

export default Home;
