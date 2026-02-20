'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function FinalCtaSection() {
    return (
        <section id="contato" className="py-32 relative overflow-hidden bg-purple-700 dark:bg-purple-900 border-b border-purple-800">
            {/* Background Patterns */}
            <div className="absolute inset-0 opacity-[0.03] text-white">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-purple-500 blur-[140px] rounded-full mix-blend-screen opacity-50" />

            <div className="container mx-auto px-4 relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto flex flex-col items-center"
                >
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                        <Play className="w-8 h-8 text-white fill-white" />
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold font-outfit mb-6 tracking-tight leading-[1.1]">
                        Está precisando de <span className="text-purple-200">Marketing Digital?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-purple-100/80 mb-12 font-light max-w-2xl">
                        Solicite um orçamento para seu projeto de Marketing Digital clicando no botão abaixo. Nossa equipe entrará em contato com a melhor estratégia.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="https://api.whatsapp.com/send/?phone=5571997284970&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-white text-purple-800 hover:bg-zinc-100 hover:text-purple-950 font-bold text-lg h-16 px-10 rounded-full shadow-2xl shadow-purple-900/50 group border-0" asChild>

                                Solicite um Orçamento
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />

                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
