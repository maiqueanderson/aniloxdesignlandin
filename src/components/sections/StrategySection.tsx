'use client';

import { XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StrategySection() {
    return (
        <section id="cenario" className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
                            O problema do <span className="text-anilox">Alcance Orgânico</span> atual.
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Sua empresa possui um excelente nível de profissionalismo, mas se a sua presença digital está inativa ou dependendo apenas de alcance gratuito (orgânico), você está perdendo <strong>Market Share</strong> para a concorrência.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start">
                                <XCircle className="text-red-500 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                                <span className="text-gray-700">O alcance orgânico do Instagram é praticamente nulo para aquisição de novos clientes em grande escala.</span>
                            </li>
                            <li className="flex items-start">
                                <XCircle className="text-red-500 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                                <span className="text-gray-700">Ter um perfil decorativo e não alimentá-lo estrategicamente é desperdiçar o ativo de marca da sua empresa.</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 2 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-anilox-light to-anilox rounded-2xl blur-lg opacity-30"></div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Gráficos de análise" className="relative rounded-2xl shadow-2xl border border-gray-100 hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}