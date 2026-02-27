import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheckCircle, FiLoader, FiAlertCircle } from 'react-icons/fi';

const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aldrian-meneses-72ab73197/', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' },
    { name: 'GitHub', url: 'https://github.com/Meneneeeee', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Email', url: 'mailto:menesesaldrian@gmail.com', img: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Circle-icons-mail.svg' },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:5055/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 min-h-screen relative flex items-center bg-white dark:bg-[#0f1016]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-16 items-center z-10">

                {/* Left Side: Info & Socials */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            Let's <span className="text-gradient">Connect</span>
                        </h2>
                        <div className="h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded w-24 mb-6" />
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                    </div>

                    <div className="flex gap-6 mt-8">
                        {socials.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_self"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="w-14 h-14 rounded-full glass flex items-center justify-center border border-gray-200/50 dark:border-white/5 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all bg-gray-50 dark:bg-[#151720]"
                                title={social.name}
                            >
                                <img src={social.img} alt={social.name} className="w-7 h-7 object-contain" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-8 md:p-10 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-violet-500" />

                    <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Send me a message</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder=" "
                                className="block px-0 py-3 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-colors"
                            />
                            <label
                                htmlFor="name"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Your Name
                            </label>
                        </div>

                        <div className="relative group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder=" "
                                className="block px-0 py-3 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-colors"
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Your Email
                            </label>
                        </div>

                        <div className="relative group">
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                placeholder=" "
                                className="block px-0 py-3 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer transition-colors resize-none"
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Your Message
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className="w-full relative py-3.5 px-6 overflow-hidden rounded-lg group bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>

                            <AnimatePresence mode="wait">
                                {status === 'idle' || status === 'error' ? (
                                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 relative">
                                        <span>Send Message</span> <FiSend />
                                    </motion.div>
                                ) : status === 'loading' ? (
                                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 relative">
                                        <span>Processing</span> <FiLoader className="animate-spin" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 relative">
                                        <span>Sent Successfully</span> <FiCheckCircle />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                        <AnimatePresence>
                            {status === 'error' && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-red-400 flex items-center gap-2 text-sm mt-4 justify-center"
                                >
                                    <FiAlertCircle /> Failed to send message. Please try again.
                                </motion.p>
                            )}
                        </AnimatePresence>

                    </form >
                </motion.div >
            </div >

            <div className="absolute bottom-0 w-full text-center py-6 border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#07090E]">
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Aldrian Meneses. All rights reserved. Let's build something amazing.
                </p>
            </div>
        </section >
    );
};

export default Contact;
