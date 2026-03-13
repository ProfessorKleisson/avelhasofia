import { motion } from "motion/react";
import { Footer } from "../components/Footer";
import {
    Palette,
    BookOpen,
    ChevronRight,
    Image as ImageIcon,
    User,
    Brain,
    Brush,
    ExternalLink
} from "lucide-react";

export function ArtigoMichelangeloPage() {
    return (
        <div className="min-h-screen bg-[#060608] font-sofia-sans text-white/90 selection:bg-amber-500/30">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#060608]/40 via-[#060608]/80 to-[#060608] z-10" />
                    <img
                        src="/img/A criação de adão/obra completa.webp"
                        alt="A Criação de Adão - Michelangelo"
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-[10px] uppercase font-black tracking-widest mb-8"
                    >
                        <Palette size={12} /> Artigos de Arte & Filosofia
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-sofia-serif font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase"
                    >
                        A CRIAÇÃO <br /> DE <span className="text-amber-500 text-shadow-glow">ADÃO</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1 bg-amber-500 mx-auto mb-8"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light italic leading-relaxed"
                    >
                        Uma análise profunda sobre a harmonia, a anatomia e a racionalidade humana na obra-prima de Michelangelo.
                    </motion.p>
                </div>
            </section>

            {/* Intro Content */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-12 text-lg md:text-xl text-white/70 leading-relaxed font-light text-justify">
                        <p className="first-letter:text-7xl first-letter:font-black first-letter:text-amber-500 first-letter:mr-3 first-letter:float-left first-letter:leading-[1]">
                            A composição transmite harmonia ao criar dois planos que o expectador percorre visualmente a partir do chão. Adão, segundo o livro bíblico, foi criado à semelhança de Deus. Na pintura, podemos constatar tal paridade e simetria.
                        </p>
                        <p>
                            Os corpos de ambos são exibidos deitados de frente, com o mortal no ambiente terrestre, inicialmente sozinho; já o ser divino está envolto em um manto e rodeado de anjos. Selecionamos algumas áreas dessa grandiosa obra para uma análise mais detalhada.
                        </p>
                    </div>
                </div>
            </section>

            {/* O Gesto de Deus */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-sofia-serif font-black text-white uppercase tracking-tighter">
                                O GESTO <br /> <span className="text-amber-500">DE DEUS</span>
                            </h2>
                            <div className="w-16 h-1 bg-amber-500" />
                            <p className="text-xl text-white/80 font-medium italic">
                                "O toque da mão divina: o centro e o ponto culminante da pintura."
                            </p>
                            <p className="text-white/60 leading-relaxed font-light">
                                Os dedos das personagens, quase se tocando, são o ponto alto da composição. A mão de Adão ainda denota falta de vitalidade, que será conferida a ele através do toque de Deus. O criador exibe o dedo indicador esticado, em um gesto simples e direto, agraciando o homem com a vida.
                            </p>
                            <blockquote className="border-l-4 border-amber-500 pl-6 py-2 bg-amber-500/5 italic text-white/50 text-sm">
                                “Michelangelo conseguiu fazer do toque da mão divina o centro e o ponto culminante da pintura, e nos fez enxergar a ideia da onipotência por meio do poder de seu gesto criador.”
                                <footer className="mt-2 text-amber-500 font-bold tracking-widest uppercase text-[10px]">— Ernst Gombrich</footer>
                            </blockquote>
                        </div>
                        <div className="flex-1">
                            <div className="relative group">
                                <div className="absolute -inset-10 bg-amber-500/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img
                                    src="/img/A criação de adão/o gesto de deus.webp"
                                    alt="Detalhe: O Gesto de Deus"
                                    className="relative z-10 w-full h-auto transition-transform duration-700 group-hover:scale-[1.05]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* O Despertar de Adão */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 max-w-6xl mx-auto">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-sofia-serif font-black text-white uppercase tracking-tighter">
                                O DESPERTAR <br /> <span className="text-amber-500">DE ADÃO</span>
                            </h2>
                            <div className="w-16 h-1 bg-amber-500" />
                            <p className="text-white/60 leading-relaxed font-light">
                                Adão é apresentado como um homem que, preguiçosamente, desperta. Ele levanta o tronco na direção de Deus e apoia o cotovelo em seu joelho, a fim de aproximar-se do gesto divino. É como se ele acabasse de acordar de um sono profundo, pois podemos perceber seu corpo relaxado e sua feição acomodada.
                            </p>
                            <p className="text-white/60 leading-relaxed font-light">
                                A figura humana é muito bem representada anatomicamente em Adão, completamente nu e tem os músculos à mostra, valorizando a corporeidade característica da arte renascentista.
                            </p>
                        </div>
                        <div className="flex-1">
                            <div className="relative group">
                                <div className="absolute -inset-10 bg-white/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img
                                    src="/img/A criação de adão/o despertar de adão.webp"
                                    alt="Detalhe: O Despertar de Adão"
                                    className="relative z-10 w-full h-auto transition-transform duration-700 group-hover:scale-[1.05]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A Magnitude do Criador (Brain Theory) */}
            <section className="py-32 bg-[#0a0a0c] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <Brain size={300} strokeWidth={1} />
                </div>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-sofia-serif font-black text-white uppercase tracking-tighter mb-4">
                            A MAGNITUDE <br /> <span className="text-amber-500">DO CRIADOR</span>
                        </h2>
                        <div className="w-24 h-1 bg-amber-500 mx-auto" />
                    </div>

                    <div className="space-y-16 max-w-6xl mx-auto">
                        <div className="relative group">
                            <div className="absolute -inset-20 bg-amber-500/5 blur-[150px] pointer-events-none" />
                            <img
                                src="/img/A criação de adão/comparação com cerebro humano.webp"
                                alt="Delineamento do Cérebro em Michelangelo"
                                className="w-full h-auto relative z-10"
                            />
                        </div>
                        <div className="order-1 lg:order-2 space-y-6 text-white/70 font-light leading-relaxed">
                            <p>
                                Na década de 90, o pesquisador Frank Lynn Meshberger encontrou uma enorme semelhança entre o desenho da anatomia cerebral e a figura de Deus com anjos envoltos no manto vermelho.
                            </p>
                            <p>
                                As imagens são realmente muito similares e, segundo os estudos, Michelangelo representou inclusive algumas partes internas do órgão, como o lobo frontal, nervo ótico, glândula pituitária e o cerebelo.
                            </p>
                            <div className="p-6 bg-amber-500/5 rounded-xl border border-amber-500/10 italic">
                                "Michelangelo parece ter feito uma espécie de 'homenagem' à racionalidade humana, representada pelo órgão cerebral."
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* O Artista Section */}
            <section className="py-32 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-start gap-20 max-w-5xl mx-auto">
                        <div className="w-full lg:w-1/3 text-center lg:text-left">
                            <div className="relative inline-block group">
                                <div className="absolute -inset-1 bg-amber-500/30 rounded-full blur group-hover:blur-md transition-all" />
                                <img
                                    src="/img/A criação de adão/retrato michelangelo.webp"
                                    alt="Michelangelo Buonarroti"
                                    className="relative w-64 h-64 object-cover rounded-full border-4 border-[#060608]"
                                />
                                <div className="mt-6">
                                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">Michelangelo</h3>
                                    <p className="text-amber-500 text-[10px] uppercase font-black tracking-widest">1475 — 1564</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 space-y-6 text-white/60 leading-relaxed font-light">
                            <p>
                                Michelangelo di Lodovico Buonarroti Simoni nasceu em Caprese, na Itália. Foi um artista excepcional, contribuindo grandemente para a história da civilização do Ocidente no momento em que enormes transformações culturais e sociais ocorriam.
                            </p>
                            <p>
                                Vivia-se o período Renascentista e a Itália era considerada o centro da efervescência artística. Nesse cenário, Michelangelo destacou-se devido a sua genialidade, colocando sua arte como objeto de encantamento e também de confronto.
                            </p>
                            <p>
                                O artista fez de sua vida uma devoção à arte, trabalhando até os últimos dias. Falece em 18 de fevereiro 1564, em Roma, deixando um legado que ainda ecoa na alma da humanidade.
                            </p>

                            <div className="pt-8 flex items-center gap-4 border-t border-white/5">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Fonte:</span>
                                <a
                                    href="https://www.todamateria.com.br/a-criacao-de-adao-michelangelo/"
                                    target="_blank"
                                    className="text-[10px] font-bold text-amber-500/60 hover:text-amber-500 flex items-center gap-1 transition-colors"
                                >
                                    Laura Aldar • Toda Matéria <ExternalLink size={10} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
