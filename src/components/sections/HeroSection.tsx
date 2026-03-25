'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-anilox-dark text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-anilox-dark via-anilox to-transparent opacity-90"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium tracking-wider mb-6"
                    >
                        MUITO ALÉM DE POSTS BONITOS
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-heading"
                    >
                        Transforme sua presença digital em uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white">Máquina de Vendas</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-lg md:text-xl text-purple-100 mb-10 leading-relaxed"
                    >
                        Da construção de autoridade da sua marca à captação ativa de novos clientes através de estratégias avançadas de Marketing e Tráfego Pago.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="#planos" className="bg-white text-anilox-dark hover:bg-gray-50 px-8 py-4 rounded-full font-bold text-lg transition shadow-xl">
                            Ver Planos e Valores
                        </Link>
                        <Link href="#solucao" className="bg-anilox-dark/50 border border-purple-400/30 hover:bg-anilox-dark text-white px-8 py-4 rounded-full font-bold text-lg transition backdrop-blur-sm">
                            Entender o Método
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}