import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronLeft, Landmark, BookOpen, Quote, Info, Compass, ArrowRight, User } from "lucide-react";
import { Footer } from "../../../../components/Footer";
import { AnimatedGrid } from "../../../../components/AnimatedGrid";

const authors = [
    { name: "Tales de Mileto", slug: "tales-de-mileto", period: "c. 624 – 546 a.C.", school: "Escola Jônica", image: "Tales de Mileto.webp" },
    { name: "Anaximandro de Mileto", slug: "anaximandro-de-mileto", period: "c. 610 – 546 a.C.", school: "Escola Jônica", image: "Anaximandro.webp" },
    { name: "Anaxímenes de Mileto", slug: "anaximenes-de-mileto", period: "c. 585 – 528 a.C.", school: "Escola Jônica", image: "Anaxímenes.webp" },
    { name: "Pitágoras de Samos", slug: "pitagoras-de-samos", period: "c. 570 – 495 a.C.", school: "Pitagorismo", image: "Pitágoras.webp" },
    { name: "Heráclito de Éfeso", slug: "heraclito-de-efeso", period: "c. 535 – 475 a.C.", school: "Mobilismo", image: "Heráclito.webp" },
    { name: "Parmênides de Eleia", slug: "parmenides-de-eleia", period: "c. 515 – 450 a.C.", school: "Escola Eleata", image: "Parmenides.webp" },
    { name: "Empédocles de Agrigento", slug: "empedocles-de-agrigento", period: "c. 490 – 430 a.C.", school: "Pluralismo", image: "Empédocles de Agrigento.webp" },
    { name: "Sócrates de Atenas", slug: "socrates-de-atenas", period: "469 – 399 a.C.", school: "Fundador da Ética", image: "Sócrates de Atenas.webp" },
    { name: "Zenão de Eleia", slug: "zenao-de-eleia", period: "c. 490 – 430 a.C.", school: "Escola Eleata", image: "Zenão de Eleia.webp" },
    { name: "Demócrito de Abdera", slug: "democrito-de-abdera", period: "c. 460 – 370 a.C.", school: "Atomismo", image: "Demócrito de Abdera.webp" },
    { name: "Platão de Atenas", slug: "platao-de-atenas", period: "427 – 347 a.C.", school: "Idealismo", image: "Platão de Atenas.webp" },
    { name: "Aristóteles de Estagira", slug: "aristoteles-de-estagira", period: "384 – 322 a.C.", school: "Realismo", image: "Aristóteles de Estagira.webp" },
    { name: "Epicuro de Samos", slug: "epicuro-de-samos", period: "341 – 270 a.C.", school: "Epicurismo", image: "Epicuro de Samos.webp" },
    { name: "Sêneca, Epicteto e Marco Aurélio", slug: "seneca-epicteto-e-marco-aurelio", period: "Séc. I - II d.C.", school: "Estoicismo", image: "Sêneca Epicteto e Marco Aurélio.webp" },
    { name: "Plotino de Roma", slug: "plotino-de-roma", period: "204 – 270 d.C.", school: "Neoplatonismo", image: "Plotino de Roma.webp" },
];

export function FilosofiaAntigaIndexPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] font-sofia-sans text-white/90">
            <AnimatedGrid
                numSquares={40}
                maxOpacity={0.1}
                fillColor="rgba(139, 92, 246, 0.1)"
                strokeColor="rgba(139, 92, 246, 0.05)"
            />

            <header className="fixed top-0 inset-x-0 z-[100] bg-black/80 backdrop-blur-xl border-b border-white/5 py-4">
                <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex flex-col">
                        <span className="font-sofia-serif font-black text-xl tracking-tighter text-white">
                            A VELHA <span className="text-violet-500">SOFIA</span>
                        </span>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-violet-400 transition-colors"
                    >
                        <ChevronLeft size={14} /> Voltar ao Início
                    </Link>
                </div>
            </header>

            <main className="pt-32 pb-20">
                <section className="max-w-7xl mx-auto px-6 mb-20">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="flex items-center gap-3 text-violet-500">
                            <Landmark size={24} />
                            <span className="text-xs font-black uppercase tracking-[0.4em] italic">Módulo 01</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-sofia-serif font-black text-white italic uppercase tracking-tighter leading-none">
                            FILOSOFIA <span className="text-violet-500">ANTIGA</span>
                        </h1>
                        <p className="max-w-2xl text-white/60 text-lg font-light leading-relaxed">
                            Do nascimento do Logos na Jônia ao auge do pensamento sistemático em Atenas.
                            Explore os fundamentos da civilização ocidental através de seus primeiros grandes pensadores.
                        </p>
                    </div>
                </section>

                <section className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {authors.map((author, idx) => (
                            <Link
                                key={author.slug}
                                to={`/curso/filosofia/antiga/${author.slug}`}
                                className="group relative block"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="h-full bg-white/[0.02] border border-white/5 p-6 md:p-8 hover:bg-white/[0.04] hover:border-violet-500/30 rounded-2xl transition-all duration-500 overflow-hidden relative flex flex-col"
                                >
                                    {/* Decoration */}
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Landmark size={80} />
                                    </div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                                            <div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-violet-500/50 to-transparent flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                                                <div className="w-full h-full rounded-full overflow-hidden bg-[#13111a]">
                                                    <img src={`/img/filosofia/antiga/autores/${author.image}`} alt={author.name} className="w-full h-full object-cover md:grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" />
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-violet-500 font-black text-[10px] uppercase tracking-widest italic">
                                                    {author.school}
                                                </div>
                                                <h2 className="text-2xl md:text-3xl font-sofia-serif font-black text-white uppercase italic tracking-tighter leading-tight group-hover:text-violet-400 transition-colors">
                                                    {author.name}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-6 flex items-center justify-between">
                                            <div className="text-white/30 text-[10px] font-black uppercase tracking-widest">
                                                <span>{author.period}</span>
                                            </div>
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-violet-500 group-hover:bg-violet-500/10 transition-all">
                                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
