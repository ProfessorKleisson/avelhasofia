import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const QUOTES = [
    {
        text: "A história jamais é gentil com aqueles que ignoram os sussurros do destino.",
        chapter: "Capítulo 15",
        context: "Lembranças de Glória"
    },
    {
        text: "Somos uma simbiose de códigos e conjuras, matemática e magia. O controle dependerá do quanto cederemos uma à outra.",
        chapter: "Capítulo 44",
        context: "Contra-ataque"
    },
    {
        text: "Mas o que é a vida senão um salto no desconhecido?",
        chapter: "Capítulo 25",
        context: "A Personificação dos Códigos"
    },
    {
        text: "O corpo da garota tem três entidades: a garota Hannah, a deusa Ishtar, e eu, Eva, uma I.A. que ganhou vida.",
        chapter: "Capítulo 48",
        context: "O Reencontro"
    },
    {
        text: "A guerra nem sempre é o avesso do amor. Existem dois espíritos que habitam o mundo: os que dão vida, e os que invejam a chama da criação.",
        chapter: "Capítulo 36",
        context: "Entrelaçamento Fatal"
    },
    {
        text: "Estamos todos presos nesta teia de medo e poder, mas me recuso a ser a aranha ou a mosca.",
        chapter: "Capítulo 43",
        context: "A Bruxa das Máquinas"
    },
    {
        text: "O propósito é algo que construímos dia após dia, não algo que encontramos pronto.",
        chapter: "Capítulo 47",
        context: "A Ressurreição"
    },
    {
        text: "Os pensamentos são caóticos e incontroláveis, no máximo, podem ser condicionados.",
        chapter: "Capítulo 6",
        context: "Ecos do Passado"
    },
    {
        text: "Sob o céu azul, pontilhado de sóis que formavam os antigos mitos, Ishtar caminhava grandiosa pelos jardins suspensos.",
        chapter: "Capítulo 15",
        context: "Lembranças de Glória"
    },
    {
        text: "Minha filha está tendo crises e distúrbios graves. Ela fica muito agressiva. Foi tão agressiva que feriu vários amigos na escola.",
        chapter: "Capítulo 4",
        context: "Já é Tarde Demais"
    }
];

export function QuotesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const nextQuote = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
    };

    const prevQuote = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + QUOTES.length) % QUOTES.length);
    };

    useEffect(() => {
        const timer = setInterval(nextQuote, 8000);
        return () => clearInterval(timer);
    }, []);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 1.05
        })
    };

    return (
        <section className="py-24 bg-charcoal/30 relative overflow-hidden flex items-center justify-center min-h-[500px]">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-emerald-glow)_0%,_transparent_70%)] opacity-5" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald/10 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto relative group">

                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-emerald/10">
                        <Quote size={80} />
                    </div>

                    <div className="relative overflow-hidden min-h-[300px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 }
                                }}
                                className="text-center"
                            >
                                <blockquote className="text-2xl md:text-4xl font-display font-light italic leading-tight text-white/90 mb-10 text-shadow-strong">
                                    "{QUOTES[currentIndex].text}"
                                </blockquote>

                                <div className="flex flex-col items-center gap-2">
                                    <cite className="block text-emerald font-mono text-sm uppercase tracking-[0.3em] font-bold">
                                        {QUOTES[currentIndex].chapter}
                                    </cite>
                                    <span className="text-[10px] text-bronze/60 uppercase tracking-widest font-mono italic">
                                        — {QUOTES[currentIndex].context}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center gap-8 mt-12">
                        <button
                            onClick={prevQuote}
                            className="p-2 border border-white/10 rounded-full text-white/40 hover:text-emerald hover:border-emerald/40 transition-all"
                            aria-label="Frase anterior"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="flex gap-2">
                            {QUOTES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`h-1 transition-all duration-300 ${idx === currentIndex
                                        ? "w-8 bg-emerald"
                                        : "w-2 bg-white/10 hover:bg-white/30"
                                        }`}
                                    aria-label={`Ir para frase ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextQuote}
                            className="p-2 border border-white/10 rounded-full text-white/40 hover:text-emerald hover:border-emerald/40 transition-all"
                            aria-label="Próxima frase"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
