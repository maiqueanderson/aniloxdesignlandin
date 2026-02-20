'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, BarChart3 } from 'lucide-react';
import { Button } from '../ui/Button';
import Link from 'next/link';

export default function PaidTrafficSection() {
    const stats = [
        { icon: <TrendingUp className="w-8 h-8" />, label: "Aumento de Vendas", value: "+150%" },
        { icon: <Users className="w-8 h-8" />, label: "Leads Qualificados", value: "10k+" },
        { icon: <Target className="w-8 h-8" />, label: "Taxa de Conversão", value: "3.5x" },
        { icon: <BarChart3 className="w-8 h-8" />, label: "ROI Médio", value: "400%" },
    ];

    return (
        <section id="trafego-pago" className="relative py-24 overflow-hidden bg-purple-950 text-white">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-800/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-purple-400 font-semibold tracking-wider uppercase mb-4 text-sm">Tráfego Pago Especializado</h2>
                        <h3 className="text-4xl md:text-6xl font-bold font-outfit mb-8 leading-tight">
                            Atinga resultados reais com o <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">TRÁFEGO PAGO</span>.
                        </h3>

                        <p className="text-purple-100 text-lg md:text-xl leading-relaxed mb-6 font-light">
                            Confira alguns dos nossos melhores trabalhos! Investir em tráfego pago é essencial para o crescimento da sua empresa.
                        </p>

                        <p className="text-purple-200 text-lg leading-relaxed mb-10 font-light">
                            Aqui, potencializamos seus resultados de forma estratégica e eficaz, colocando sua marca na frente de quem realmente quer comprar.
                        </p>

                        <Button variant="secondary" size="lg">
                            <Link href="https://api.whatsapp.com/send/?phone=5571997284970&text&type=phone_number&app_absent=0">Quero Vender Mais</Link>
                        </Button>
                    </motion.div>

                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/10 transition-colors"
                                >
                                    <div className="text-purple-400 mb-4">{stat.icon}</div>
                                    <div className="text-3xl md:text-5xl font-bold font-outfit mb-2">{stat.value}</div>
                                    <div className="text-purple-200 text-sm md:text-base">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
