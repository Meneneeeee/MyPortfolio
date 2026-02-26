import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiAward, FiCheckCircle } from 'react-icons/fi';

const CertificationCard = ({ cert, onClick }) => {
    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full rounded-2xl bg-white/5 dark:bg-[#151720]/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none"
        >
            {/* Animated Achievement Ribbon Overlay */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-full blur-3xl group-hover:bg-gradient-to-br group-hover:from-blue-500/40 group-hover:to-violet-500/40 transition-all duration-700 pointer-events-none"></div>

            {/* Left/Top: Thumbnail (Hover Zoom Effect) */}
            <div
                className="relative w-full md:w-56 h-36 rounded-xl overflow-hidden shadow-md flex-shrink-0 cursor-pointer group/image"
                onClick={() => onClick(cert)}
            >
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 animate-pulse absolute inset-0 -z-10" />
                <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover/image:scale-105 p-2"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FiAward className="text-white text-4xl opacity-90 drop-shadow-lg" />
                </div>
            </div>

            {/* Center Content: Details */}
            <div className="flex-1 text-center md:text-left z-10 w-full space-y-1">
                <h3 className="text-lg md:text-xl font-bold font-poppins text-gray-900 dark:text-white flex items-center justify-center md:justify-start gap-2">
                    {cert.title}
                    {/* Verification Badge Icon */}
                    <FiCheckCircle className="text-blue-500 text-lg flex-shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" title="Verified Credential" />
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-500 text-xs">{cert.date}</p>
            </div>

            {/* Right/Bottom: Action Button */}
            <div className="mt-2 md:mt-0 w-full md:w-auto z-10 flex justify-center md:flex-shrink-0">
                <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                        e.preventDefault();
                        onClick(cert);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold flex flex-1 w-full justify-center md:w-auto items-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 relative overflow-hidden group/btn text-sm"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        View <span className="hidden sm:inline">Certificate</span> <FiExternalLink />
                    </span>
                    {/* Glowing exact border pulse overlay */}
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                </a>
            </div>
        </motion.div>
    );
};

export default CertificationCard;
