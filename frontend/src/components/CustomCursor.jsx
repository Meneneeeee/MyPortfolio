import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if hovering over clickable elements
            if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(e.target.tagName) || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Hide custom cursor on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-400 rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen hidden md:block"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 0.8,
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
            />
            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-violet-400 rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_10px_#8b5cf6]"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 2 : 1,
                    opacity: 1,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;
