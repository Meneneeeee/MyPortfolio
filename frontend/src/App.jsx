import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Components
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';

// Sections
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Theme State
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Run on mount to check local storage or system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        } else {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(prevDark => {
            const newDark = !prevDark;
            if (newDark) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
            return newDark;
        });
    };

    return (
        <>
            <CustomCursor />
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-blue-500 to-violet-500 z-50 rounded-r-full"
                style={{ scaleX }}
            />

            <main className="relative min-h-screen overflow-hidden">
                <Home />
                <About />
                <Skills />
                <Certifications />
                <Contact />
            </main>
        </>
    );
}

export default App;
