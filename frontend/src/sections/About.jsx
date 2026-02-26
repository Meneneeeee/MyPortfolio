import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Spring Boot', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'SharePoint', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Microsoft_Office_SharePoint_%282019%E2%80%932025%29.svg/500px-Microsoft_Office_SharePoint_%282019%E2%80%932025%29.svg.png' },
    { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

const About = () => {
    return (
        <section id="about" className="relative py-24 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#07090E]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

                <div className="mb-16 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                    >
                        About <span className="text-gradient">Me</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100px" }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded mx-auto md:mx-0"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 text-gray-400 text-lg leading-relaxed"
                    >
                        <p>
                            Hello! I'm <span className="text-gray-900 dark:text-white font-medium">Aldrian Meneses</span>, a passionate Software Engineer with over <span className="text-blue-600 dark:text-blue-400 font-semibold">6 years of experience</span> developing scalable and efficient digital solutions.
                        </p>
                        <p>
                            My journey began with functional frontends, and evolved into a full-stack specialization. I have a strong focus on <span className="text-gray-900 dark:text-white font-medium">Mobile & Web Development</span>, specifically using React ecosystems on the front, and robust Java Spring Boot APIs on the back.
                        </p>
                        <p>
                            I thrive on building scalable systems architecture from the ground up, writing clean and maintainable code, and constantly learning new technologies to solve complex problems elegantly.
                        </p>
                    </motion.div>

                    {/* Right Icons */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, translateY: -5 }}
                                className="group relative glass rounded-2xl p-6 flex flex-col items-center justify-center gap-4 border border-gray-200/50 dark:border-white/5 hover:border-blue-500/30 transition-all shadow-lg hover:shadow-blue-500/20 bg-white dark:bg-[#151720]"
                            >
                                <div className="w-16 h-16 relative flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gray-200/50 dark:bg-white/5 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
                                    <img src={tech.img} alt={tech.name} className="w-12 h-12 object-contain relative z-10" />
                                </div>

                                {/* Tooltip */}
                                <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform origin-bottom bg-gray-800 dark:bg-[#1f2233] text-white text-xs py-1.5 px-3 rounded shadow-xl whitespace-nowrap border border-gray-700 dark:border-white/10">
                                    {tech.name}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-gray-800 dark:border-t-[#1f2233]"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
