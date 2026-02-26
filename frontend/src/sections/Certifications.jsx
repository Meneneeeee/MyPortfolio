import React, { useState, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import CertificationModal from '../components/CertificationModal';

// Dynamically import CertificationCard for React.lazy + Suspense
const CertificationCard = React.lazy(() => import('../components/CertificationCard'));

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    // Memoize the certification list rendering
    const certificationList = useMemo(() => {
        return certifications.map((cert, index) => (
            <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="w-full"
            >
                <Suspense fallback={<div className="w-full h-40 md:h-48 bg-gray-200 dark:bg-[#151720]/40 animate-pulse rounded-2xl"></div>}>
                    <CertificationCard cert={cert} onClick={setSelectedCert} />
                </Suspense>
            </motion.div>
        ));
    }, []);

    return (
        <section id="certifications" className="relative w-full py-24 min-h-screen bg-gray-50 dark:bg-[#0b0c10] overflow-hidden flex flex-col items-center justify-center">
            {/* Parallax-like Background Mesh using Framer Motion */}
            <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-[120px] mix-blend-screen"
                ></motion.div>
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[40%] right-[10%] w-[25rem] h-[25rem] bg-violet-600/10 dark:bg-violet-600/5 rounded-full blur-[100px] mix-blend-screen"
                ></motion.div>
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-32 left-[30%] w-[40rem] h-[40rem] bg-cyan-600/10 dark:bg-cyan-600/5 rounded-full blur-[130px] mix-blend-screen"
                ></motion.div>
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 w-full">
                {/* Hero Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6 border border-blue-200 dark:border-blue-800/50"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Achievements & Credentials
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 dark:text-white mb-6 tracking-tight"
                    >
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Certifications</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        A showcase of continuous learning and validated expertise through industry-recognized credentials.
                    </motion.p>
                </div>

                {/* Certifications Grid */}
                <div className="flex flex-col gap-4 md:gap-6 items-center w-full max-w-4xl mx-auto">
                    {certificationList}
                </div>
            </div>

            {/* Certificate Modal Viewer */}
            <CertificationModal
                isOpen={!!selectedCert}
                onClose={() => setSelectedCert(null)}
                cert={selectedCert}
            />
        </section>
    );
};

export default Certifications;
