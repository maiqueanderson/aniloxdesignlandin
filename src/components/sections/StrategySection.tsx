'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StrategySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Texto completo para exibição e cálculo
    const text = "A importância de uma Estratégia inteligente. No cenário competitivo do Meta Ads, adotar uma estratégia de marketing eficiente é essencial para atingir o público ideal. Com a expertise da ANILOX DESIGN, especializada em tráfego pago, sua empresa pode conquistar leads qualificados e aumentar as conversões. Com experiência em diversos segmentos, a agência entrega resultados consistentes e de alto impacto.";

    // Divide o texto em palavras
    const words = text.split(" ");

    return (
        <section
            id="estrategia"
            ref={containerRef}
            className="py-32 md:py-48 bg-white dark:bg-zinc-950 min-h-screen flex items-center justify-center relative"
        >
            <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
                <h2 className="text-sm font-semibold text-purple-600 tracking-wider uppercase mb-12">Nossa Abordagem</h2>

                <div className="text-3xl md:text-5xl lg:text-6xl font-bold font-outfit leading-[1.2] md:leading-[1.4] flex flex-wrap justify-center gap-x-3 md:gap-x-4 gap-y-2">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);

                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const color = useTransform(scrollYProgress, [start, end], ["#d8b4fe", "#581c87"]);

                        // Highlight words
                        const highlightWords = ["Estratégia", "ANILOX", "DESIGN", "conversões", "resultados", "Meta", "Ads"];
                        const isHighlight = highlightWords.some(hw => word.includes(hw));

                        return (
                            <motion.span
                                key={i}
                                style={{
                                    opacity,
                                    color: isHighlight ? color : 'inherit'
                                }}
                                className={`transition-colors duration-100 ${isHighlight ? 'text-purple-600 dark:text-purple-400' : 'text-zinc-900 dark:text-white'}`}
                            >
                                {word}
                            </motion.span>
                        );
                    })}
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-gradient-to-tr from-purple-100/50 via-transparent to-purple-50/20 dark:from-purple-900/10 dark:to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        </section>
    );
}
