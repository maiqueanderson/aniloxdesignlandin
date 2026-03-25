'use client';

import { Target, PenTool, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesSection() {
    return (
        <section id="solucao" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
                        Nossa Proposta de <span className="text-anilox">Valor</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Não vamos apenas &quot;fazer posts&quot;. Na Anilox Design, implementamos uma infraestrutura de Marketing Digital voltada para <strong>conversão</strong>.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { icon: Target, title: "Tráfego Pago Especializado", desc: "Estruturamos campanhas utilizando o Gerenciador de Anúncios. Aplicamos segmentação por geolocalização e interesses, direcionando anúncios para o seu cliente ideal nos momentos de maior intenção de compra." },
                        { icon: PenTool, title: "Design e Copywriting", desc: "Aliamos o design de alto padrão da Anilox com legendas persuasivas (Copywriting) focadas em gatilhos mentais. Tornamos seu produto ou serviço comercialmente irresistível." },
                        { icon: TrendingUp, title: "Métricas e Otimização", desc: "Gestão amadora foca em curtidas. Nós focamos em inteligência de dados. Analisamos taxas de conversão (CPC, CTR) para garantir que seu orçamento não seja desperdiçado." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-anilox-light/50 transition duration-300 group"
                        >
                            <div className="w-14 h-14 bg-anilox/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-anilox transition">
                                <item.icon className="w-7 h-7 text-anilox group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}