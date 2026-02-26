import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const skills = [
    {
        items: [
            // Frontend Core
            { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 90 },
            { name: 'Angular', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', level: 85 },
            { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 95 },
            { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95 },
            { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90 },
            { name: 'Tailwind CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 90 },

            // UI Libraries / Component frameworks (kept per your note)
            { name: 'PrimeFaces', img: 'https://www.primefaces.org/wp-content/uploads/2016/10/prime_logo_new.png', level: 90 },

            // Mobile
            { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', level: 95 },
            { name: 'Swift', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', level: 85 },
            { name: 'Kotlin', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', level: 85 },

            // Backend: Java / .NET / PHP
            { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 98 },
            { name: 'Spring Boot', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', level: 85 },
            { name: 'C#', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', level: 80 },
            { name: 'PHP', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 85 },

            // APIs & Patterns
            { name: 'REST APIs', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 95 },

            // Cloud & BaaS
            { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', level: 90 },

            // Databases
            { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 95 },
            { name: 'SQL Server', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', level: 95 },
            { name: 'IBM Db2', img: 'https://avatars.githubusercontent.com/u/1459110?s=200&v=4', level: 95 },

            // Testing (added per your note)
            { name: 'JUnit', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 90 },

            // DevOps & Tooling
            { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 85 },
            { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 90 },
            { name: 'Postman', img: 'https://voyager.postman.com/logo/postman-logo-icon-orange.svg', level: 98 }
        ]
    }
];

const SkillCard = ({ item }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{ rotateX, rotateY, z: 100 }}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="relative w-full glass-card p-6 flex flex-col gap-4 overflow-hidden group perspective-1000 transform-style-3d bg-white dark:bg-[#151720]"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-violet-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center p-2 shadow-inner border border-gray-200 dark:border-white/10 group-hover:border-blue-500/50 transition-colors">
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 group-hover:dark:text-white transition-colors">{item.name}</h3>
            </div>

            <div className="relative z-10 mt-2">
                <div className="flex justify-between text-sm mb-1 text-gray-600 dark:text-gray-400">
                    <span>Proficiency</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{item.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-[#0a0c13] rounded-full overflow-hidden border border-gray-300 dark:border-white/5">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full relative"
                    >
                        <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px] rounded-full animate-pulse"></div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 min-h-screen bg-gray-50 dark:bg-[#07090E] relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">

                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                    >
                        Tools & <span className="text-gradient">Technologies</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100px" }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded mx-auto"
                    />
                </div>

                <div className="mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {skills.flatMap((category) => category.items).map((item) => (
                                <SkillCard key={item.name} item={item} />
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
