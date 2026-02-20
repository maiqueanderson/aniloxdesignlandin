'use client';

import { motion, Variants } from 'framer-motion';
import { Palette, Share2, PenTool, LayoutTemplate, MonitorPlay, Presentation } from 'lucide-react';

const services = [
    {
        category: "Design Gráfico",
        description: "Criamos a identidade visual perfeita para destacar sua marca no mercado.",
        items: [
            {
                icon: <Palette className="w-6 h-6" />,
                title: "Identidade Visual",
                desc: "Criação de logotipos, paleta de cores e tipografia exclusiva."
            },
            {
                icon: <PenTool className="w-6 h-6" />,
                title: "Artes Gráficas",
                desc: "Banners, flyers digitais, outdoors e material promocional."
            },
            {
                icon: <LayoutTemplate className="w-6 h-6" />,
                title: "Artes para Impressos",
                desc: "Cartões de visita, panfletos, pastas e papelaria corporativa."
            }
        ]
    },
    {
        category: "Marketing Digital",
        description: "Estratégias inteligentes para conectar sua marca com seu público-alvo.",
        items: [
            {
                icon: <Share2 className="w-6 h-6" />,
                title: "Gestão de Redes Sociais",
                desc: "Planejamento e gerenciamento estratégico para Facebook e Instagram."
            },
            {
                icon: <Presentation className="w-6 h-6" />,
                title: "Posts, Feed e Stories",
                desc: "Criação de linha editorial e artes atrativas que geram engajamento."
            },
            {
                icon: <MonitorPlay className="w-6 h-6" />,
                title: "Criação de REELS",
                desc: "Edição e produção de vídeos curtos alinhados às tendências."
            }
        ]
    }
];

export default function ServicesSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="servicos" className="py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-purple-100 dark:border-zinc-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-sm font-semibold text-purple-600 tracking-wider uppercase mb-3">Nossos Serviços</h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-outfit text-zinc-900 dark:text-white mb-6">
                        Soluções completas para <span className="text-purple-600">elevar sua marca</span>
                    </h3>
                </motion.div>

                <div className="space-y-24">
                    {services.map((category, idx) => (
                        <div key={idx} className="flex flex-col lg:flex-row gap-12 items-start">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="lg:w-1/3 lg:sticky lg:top-32"
                            >
                                <h4 className="text-3xl font-bold font-outfit text-zinc-900 dark:text-white mb-4">
                                    {category.category}
                                </h4>
                                <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                                    {category.description}
                                </p>
                            </motion.div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {category.items.map((item, itemIdx) => (
                                    <motion.div
                                        key={itemIdx}
                                        variants={itemVariants}
                                        className="bg-white dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-300 dark:hover:border-purple-800 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group"
                                    >
                                        <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <h5 className="text-xl font-bold font-outfit text-zinc-900 dark:text-white mb-3">
                                            {item.title}
                                        </h5>
                                        <p className="text-zinc-600 dark:text-zinc-400">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
