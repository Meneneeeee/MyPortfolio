import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';

const CertificationModal = ({ isOpen, onClose, cert }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && cert && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl bg-white dark:bg-[#0f1016] rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-white/10 flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-white/10 shrink-0">
                            <h3 className="text-xl md:text-2xl font-bold font-poppins text-gray-900 dark:text-white truncate pr-4">
                                {cert.title}
                            </h3>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 transition-colors"
                            >
                                <FiX size={24} />
                            </button>
                        </div>

                        {/* Image Viewer */}
                        <div className="relative w-full flex-1 bg-gray-50 dark:bg-[#151720] flex items-center justify-center overflow-auto p-4 md:p-8 min-h-[40vh]">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                                src={cert.image}
                                alt={cert.title}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-lg border border-gray-200 dark:border-white/5"
                            />
                        </div>

                        {/* Footer */}
                        <div className="flex flex-col sm:flex-row items-center justify-between p-5 sm:p-6 bg-white dark:bg-[#0f1016] border-t border-gray-200 dark:border-white/10 gap-4 shrink-0">
                            <div className="text-center sm:text-left">
                                <p className="font-semibold text-gray-900 dark:text-white text-lg">{cert.issuer}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Issued: {cert.date}</p>
                            </div>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:shadow-lg hover:shadow-violet-500/30 text-white font-medium flex items-center justify-center gap-2 transition-all duration-300"
                            >
                                Verify Origin <FiExternalLink />
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CertificationModal;
