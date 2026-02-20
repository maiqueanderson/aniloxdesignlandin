'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-purple-50 to-transparent dark:from-purple-900/20 dark:to-transparent -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/20 dark:bg-purple-600/10 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto py-5 px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium text-sm mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                        </span>
                        Agência Especialista com 10+ anos de experiência
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold font-outfit text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-8">
                        Criamos projetos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">Branding</span>, Mídias Sociais, Criação de Sites e Marketing Digital.
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto"
                    >
                        Transforme sua presença online com soluções criativas e estratégias focadas em resultados reais para sua empresa.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="https://api.whatsapp.com/send/?phone=5571997284970&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="w-full sm:w-auto group">
                                Solicitar Orçamento
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="https://api.whatsapp.com/send/?phone=5571997284970&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                                Conheça Nossos Serviços
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >

                <div className="w-[1px] h-12 bg-gradient-to-b from-purple-400/50 to-transparent" />
            </motion.div>
        </section>
    );
}
