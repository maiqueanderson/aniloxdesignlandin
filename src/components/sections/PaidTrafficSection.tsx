'use client';

import Link from 'next/link';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PaidTrafficSection() {
    return (
        <section id="planos" className="py-24 bg-gray-900 text-white relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-anilox-dark opacity-50"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        Planos de <span className="text-anilox-light">Investimento</span>
                    </h2>
                    <p className="text-lg text-gray-300">
                        Opções estruturadas para o momento da sua empresa, sem exigência de contrato de longo prazo para que você comprove o nosso ROI.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Plano Básico */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-800 rounded-3xl p-8 lg:p-10 border border-gray-700 flex flex-col hover:border-gray-500 transition-colors"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2 font-heading">Plano Básico</h3>
                        <p className="text-gray-400 mb-6">Manutenção estratégica da sua presença on-line e captação base.</p>
                        <div className="mb-8">
                            <span className="text-4xl font-bold">R$ 119,90</span><span className="text-gray-400">/mês</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-start"><Check className="text-anilox-light mt-1 mr-3 w-5 h-5 flex-shrink-0" /><span className="text-gray-300">8 artes estáticas para Feed</span></li>
                            <li className="flex items-start"><Check className="text-anilox-light mt-1 mr-3 w-5 h-5 flex-shrink-0" /><span className="text-gray-300">8 artes adaptadas para Stories</span></li>
                            <li className="flex items-start"><Check className="text-anilox-light mt-1 mr-3 w-5 h-5 flex-shrink-0" /><span className="text-gray-300">Automação do calendário de postagens</span></li>
                            <li className="flex items-start"><Check className="text-anilox-light mt-1 mr-3 w-5 h-5 flex-shrink-0" /><span className="text-gray-300">Gerenciamento de Campanhas (Tráfego Pago)</span></li>
                            <li className="flex items-start"><Check className="text-anilox-light mt-1 mr-3 w-5 h-5 flex-shrink-0" /><span className="text-gray-300">Relatório Mensal de Métricas</span></li>
                        </ul>
                        <Link href="https://api.whatsapp.com/send?phone=5571997284970&text=Ol%C3%A1%2C+gostaria+de+saber+mais+detalhes+sobre+o+plano+b%C3%A1sico+de+Marketing+Digital+da+Anilox+Design." className="w-full block text-center bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-medium transition">
                            Selecionar Básico
                        </Link>
                    </motion.div>

                    {/* Plano Profissional */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -10 }}
                        className="bg-anilox-dark rounded-3xl p-8 lg:p-10 border-2 border-anilox-light flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-anilox/20"
                    >
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span className="bg-anilox-light text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full animate-pulse">
                                Recomendado
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-heading">Plano Profissional</h3>
                        <p className="text-purple-200 mb-6">Agressividade de mercado, foco máximo em engajamento e retenção.</p>
                        <div className="mb-8">
                            <span className="text-4xl font-bold">R$ 169,90</span><span className="text-purple-200">/mês</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-start"><Star className="text-yellow-400 mt-1 mr-3 w-5 h-5 flex-shrink-0 fill-yellow-400" /><span className="text-gray-100 font-medium">Tudo do Plano Básico, mais:</span></li>
                            <li className="flex items-start"><Check className="text-anilox-light mt-1 mr-3 w-5 h-5 flex-shrink-0" /><span className="text-gray-300"><strong>1 Reel editado</strong> c/ Inteligência Artificial</span></li>
                            <li className="flex items-start"><Check className="text-anilox-light mt-1 mr-3 w-5 h-5 flex-shrink-0" /><span className="text-gray-300"><strong>1 Post Carrossel</strong> (Aumenta a retenção)</span></li>
                            <li className="flex items-start"><Check className="text-anilox-light mt-1 mr-3 w-5 h-5 flex-shrink-0" /><span className="text-gray-300">Tratamento avançado de <strong>12 fotografias reais</strong></span></li>
                            <li className="flex items-start"><Check className="text-anilox-light mt-1 mr-3 w-5 h-5 flex-shrink-0" /><span className="text-gray-300">Copywriting avançado para conversão</span></li>
                        </ul>
                        <Link href="https://api.whatsapp.com/send?phone=5571997284970&text=Ol%C3%A1%2C+tenho+interesse+em+saber+mais+detalhes+sobre+o+plano+profissional+de+Marketing+Digital+da+Anilox+Design" className="w-full block text-center bg-white text-anilox-dark hover:bg-gray-100 py-3 rounded-xl font-bold transition shadow-lg">
                            Selecionar Profissional
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 max-w-3xl mx-auto text-center bg-gray-800/50 p-6 rounded-2xl border border-gray-700 text-sm text-gray-300"
                >
                    <p><strong>Nota importante sobre Tráfego Pago:</strong> O valor dos planos refere-se aos honorários técnicos da Anilox Design. O orçamento de mídia é pago diretamente à plataforma (Meta/Instagram).</p>
                </motion.div>
            </div>
        </section>
    );
}