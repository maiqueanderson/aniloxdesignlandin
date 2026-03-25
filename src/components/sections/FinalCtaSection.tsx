'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCtaSection() {
    return (
        <>
            {/* Processo */}
            <section id="processo" className="py-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Operação End-to-End <span className="text-anilox">(Ponta a Ponta)</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            &quot;Isso vai tomar muito do meu tempo?&quot; Não. A nossa equipe absorve a carga operacional do marketing para que você foque no seu negócio.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

                        {[
                            { num: 1, title: "Você fornece o material", desc: "Você nos envia as fotos brutas e informações das ofertas." },
                            { num: 2, title: "Nós produzimos", desc: "Nossa equipe aplica tratamento visual, cria textos e estrutura a campanha." },
                            { num: 3, title: "Você aprova", desc: "Sua única função gerencial: revisar e aprovar o cronograma." },
                            { num: 4, title: "Nós executamos", desc: "Edição final, programação, lançamento e otimização diária." }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative z-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
                            >
                                <div className={`w-12 h-12 mx-auto ${index % 2 === 0 ? 'bg-anilox shadow-lg shadow-anilox/30' : 'bg-gray-800'} text-white rounded-full flex items-center justify-center font-bold text-xl mb-4`}>
                                    {step.num}
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2 font-heading">{step.title}</h4>
                                <p className="text-sm text-gray-600">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center text-gray-900 mb-12 font-heading"
                    >
                        Dúvidas Frequentes
                    </motion.h2>

                    <div className="space-y-6">
                        {[
                            { q: "Por que contratar a Anilox e não postar eu mesmo?", a: "A gestão amadora foca apenas na publicação de imagens, o que não gera previsibilidade de vendas. Nossa gestão foca em métricas de conversão. Transformamos um perfil decorativo em um canal ativo de aquisição de clientes." },
                            { q: "Quanto tempo demora para ver o retorno em vendas?", a: "Campanhas pagas têm resposta rápida. Nos primeiros dias, a inteligência artificial da Meta passa por uma fase de aprendizado. O reconhecimento de marca é imediato, e as vendas tendem a crescer e estabilizar nas semanas seguintes." }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-anilox/30 transition-colors"
                            >
                                <h4 className="text-lg font-bold text-anilox-dark mb-2">{faq.q}</h4>
                                <p className="text-gray-600">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section id="contato" className="py-24 bg-anilox text-white text-center px-4 relative overflow-hidden">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="max-w-3xl mx-auto relative z-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Pronto para dominar seu mercado?</h2>
                    <p className="text-xl text-purple-100 mb-10">
                        Qual estratégia faz mais sentido para o seu momento atual: a estruturação básica ou uma inserção mais agressiva no mercado?
                    </p>
                    <Link href="https://api.whatsapp.com/send/?phone=5571997284970&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-anilox-dark hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl transition shadow-2xl hover:scale-105 duration-300">
                        <MessageCircle className="w-6 h-6 text-green-500" /> Falar com Especialista
                    </Link>
                    <p className="mt-6 text-sm text-purple-200">Sem compromisso. Vamos analisar o seu cenário atual.</p>
                </motion.div>
            </section>
        </>
    );
}