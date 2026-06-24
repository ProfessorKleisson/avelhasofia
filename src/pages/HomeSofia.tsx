import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Book, ChevronRight, Gamepad2, Star, ShieldCheck, Zap, Palette, BookOpen } from "lucide-react";
import { AnimatedGrid } from "../components/AnimatedGrid";
import { PhilosophyCourseSection } from "../components/PhilosophyCourseSection";

export function HomeSofia() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] font-sofia-sans text-white/90 selection:bg-cyan-500/30">
            <AnimatedGrid
                numSquares={40}
                maxOpacity={0.1}
                fillColor="rgba(34, 211, 238, 0.1)"
                strokeColor="rgba(34, 211, 238, 0.05)"
            />

            {/* Hero Section - Official Banner Based */}
            <section className="relative w-full bg-[#0a0a0c] pt-28">
                <div className="relative w-full">
                    <img
                        src="/img/banner_principal.webp"
                        alt="A Velha Sofia Banner"
                        className="w-full h-auto block opacity-100"
                    />
                    {/* Atmospheric Gradients to blend with page context */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c] pointer-events-none opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent pointer-events-none opacity-80" />
                </div>
            </section>



            {/* Diarquia Promotion Section - Dark Version */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            className="flex-1 w-full max-w-xl relative"
                        >
                            <div className="absolute -inset-10 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
                            <motion.img
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                src="/img/diarquia/BANNER MAN copiar.webp"
                                alt="Diarquia Card Game"
                                className="w-full h-auto drop-shadow-[0_0_50px_rgba(34,211,238,0.2)] relative z-10"
                            />
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 50 }}
                            className="flex-1 space-y-8"
                        >
                            <div className="text-cyan-400 font-black text-sm uppercase tracking-[0.4em]">
                                O Duelo das Mentes
                            </div>
                            <h2 className="text-5xl md:text-7xl font-sofia-serif font-black text-white leading-tight tracking-tighter">
                                Estratégia, <br /> <span className="text-cyan-400">Filosofia</span>, <br /> Conquista.
                            </h2>
                            <p className="text-white/50 text-xl leading-relaxed text-left font-light">
                                <strong>Diarquia</strong> não é apenas um jogo. É um campo de batalha ideológico onde figuras históricas e filósofos colidem. Teste sua inteligência contra o tempo e seus oponentes.
                            </p>
                            <div className="pt-4">
                                <Link
                                    to="/jogos/diarquia"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-cyan-600 text-black font-black uppercase text-xs tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                                >
                                    Saiba Mais <ChevronRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Books Catalog - Dark Grid */}
            <section className="py-32 bg-white/[0.02]">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-20 border-b border-white/5 pb-8">
                        <div>
                            <h2 className="text-5xl font-sofia-serif font-black text-white mb-4">A Biblioteca</h2>
                            <p className="text-cyan-500/60 uppercase tracking-widest text-xs font-black">Exploração Literária</p>
                        </div>
                        <Link to="/livros" className="hidden md:flex items-center gap-2 text-white/40 hover:text-cyan-400 transition-colors uppercase text-[10px] tracking-widest font-black">
                            Ver Catálogo Completo <ChevronRight size={14} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Book Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link to="/livros/bruxa-das-maquinas" className="block relative">
                                <motion.div
                                    initial={{ scale: 1.45, y: -20 }}
                                    animate={{ scale: 1.45, y: -20 }}
                                    whileHover={{ y: -45, scale: 1.50 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="aspect-[3/4.5] relative z-20"
                                >
                                    <img
                                        src="/img/livro-mock-bruxa.webp"
                                        alt="A Bruxa das Máquinas"
                                        className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(34,211,238,0.15)] group-hover:drop-shadow-[0_30px_60px_rgba(34,211,238,0.3)] transition-all duration-500"
                                    />
                                </motion.div>
                                <div className="absolute inset-x-0 bottom-0 h-2 bg-cyan-900/20 blur-xl rounded-full scale-x-75 group-hover:scale-x-90 group-hover:bg-cyan-900/40 transition-all duration-500 opacity-50" />
                            </Link>
                            <div className="mt-16">
                                <h3 className="text-xl font-black text-white mb-2 uppercase italic group-hover:text-cyan-400 transition-colors leading-tight">A Bruxa das Máquinas</h3>
                                <p className="text-white/40 text-[13px] leading-relaxed mb-6 line-clamp-3 italic font-light">
                                    "Ishtar não é apenas um mito. Ela é a frequência que as máquinas finalmente aprenderam a sintonizar."
                                </p>
                                <Link
                                    to="/livros/bruxa-das-maquinas"
                                    className="inline-flex items-center gap-2 text-cyan-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors"
                                >
                                    Ler Agora <ChevronRight size={12} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Book Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group"
                        >
                            <Link to="/livros/homens-deuses" className="block relative">
                                <motion.div
                                    initial={{ scale: 1.15 }}
                                    animate={{ scale: 1.15 }}
                                    whileHover={{ y: -15, scale: 1.20 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="aspect-[3/4.5] relative z-20"
                                >
                                    <img
                                        src="/img/os_homens_deuses.webp"
                                        alt="Os Homens-Deuses"
                                        className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(34,211,238,0.15)] group-hover:drop-shadow-[0_30px_60px_rgba(34,211,238,0.3)] transition-all duration-500"
                                    />
                                </motion.div>
                                <div className="absolute inset-x-0 bottom-0 h-2 bg-cyan-900/20 blur-xl rounded-full scale-x-75 group-hover:scale-x-90 group-hover:bg-cyan-900/40 transition-all duration-500 opacity-50" />
                            </Link>
                            <div className="mt-16">
                                <h3 className="text-xl font-black text-white mb-2 uppercase italic group-hover:text-cyan-400 transition-colors leading-tight">Os Homens-Deuses</h3>
                                <p className="text-white/40 text-[13px] leading-relaxed mb-6 line-clamp-3 font-light italic">
                                    Charlie e onze outros estavam prestes a viver a festa mais incrível de suas vidas, mas nunca imaginaram que seria uma jornada épica...
                                </p>
                                <Link
                                    to="/livros/homens-deuses"
                                    className="inline-flex items-center gap-2 text-cyan-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors"
                                >
                                    Explorar Obra <ChevronRight size={12} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Book Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group"
                        >
                            <div className="block relative">
                                <motion.div
                                    initial={{ scale: 1.30 }}
                                    animate={{ scale: 1.30 }}
                                    whileHover={{ y: -15, scale: 1.35 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="aspect-[3/4.5] relative z-20"
                                >
                                    <img
                                        src="/img/As cronicas do dragão dourado.webp"
                                        alt="As Crônicas do Dragão Dourado"
                                        className="w-full h-full object-contain lg:grayscale group-hover:grayscale-0 drop-shadow-[0_20px_50px_rgba(34,211,238,0.15)] group-hover:drop-shadow-[0_30px_60px_rgba(34,211,238,0.3)] transition-all duration-700"
                                    />
                                </motion.div>
                                <div className="absolute inset-x-0 bottom-0 h-2 bg-cyan-900/20 blur-xl rounded-full scale-x-75 group-hover:scale-x-90 group-hover:bg-cyan-900/40 transition-all duration-500 opacity-50" />
                            </div>
                            <div className="mt-16">
                                <h3 className="text-xl font-black text-white mb-2 uppercase italic group-hover:text-cyan-400 transition-colors leading-tight">As Crônicas do Dragão Dourado</h3>
                                <p className="text-white/40 text-[13px] leading-relaxed mb-6 line-clamp-2 font-light italic">Uma aventura épica através de reinos invisíveis e batalhas internas pela alma da tecnologia.</p>
                                <span className="text-white/20 text-[10px] font-black uppercase tracking-widest">Em Breve</span>
                            </div>
                        </motion.div>

                        {/* Book Card 4 (Mestrado) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group"
                        >
                            <Link to="/livros/mestrado" className="block relative">
                                <motion.div
                                    initial={{ scale: 1.40 }}
                                    animate={{ scale: 1.40 }}
                                    whileHover={{ y: -15, scale: 1.45 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="aspect-[3/4.5] relative z-20"
                                >
                                    <img
                                        src="/img/mestrado2.webp"
                                        alt="Dissertação de Mestrado"
                                        className="w-full h-full object-contain lg:grayscale group-hover:grayscale-0 drop-shadow-[0_20px_50px_rgba(99,102,241,0.15)] group-hover:drop-shadow-[0_30px_60px_rgba(99,102,241,0.3)] transition-all duration-700"
                                    />
                                </motion.div>
                                <div className="absolute inset-x-0 bottom-0 h-2 bg-indigo-900/20 blur-xl rounded-full scale-x-75 group-hover:scale-x-90 group-hover:bg-indigo-900/40 transition-all duration-500 opacity-50" />
                            </Link>
                            <div className="mt-16">
                                <h3 className="text-xl font-black text-white mb-2 uppercase italic group-hover:text-indigo-400 transition-colors leading-tight">Liberdade em Spinoza</h3>
                                <p className="text-white/40 text-[13px] leading-relaxed mb-6 line-clamp-2 font-light italic">Dissertação de Mestrado (2021) sobre a autonomia e o determinismo na ética spinozana.</p>
                                <Link
                                    to="/livros/mestrado"
                                    className="inline-flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors"
                                >
                                    Ver Trabalho <ChevronRight size={12} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Philosophy Course Section */}
            <PhilosophyCourseSection />

            {/* Articles & Essays Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-8">
                        <div>
                            <h2 className="text-5xl font-sofia-serif font-black text-white mb-4 italic uppercase">Artigos & <span className="text-amber-500">Ensaios</span></h2>
                            <p className="text-amber-500/60 uppercase tracking-widest text-[10px] font-black italic">Reflexões sobre Arte, Filosofia e Cultura</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Michelangelo Article Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link to="/artigos/michelangelo" className="block space-y-8">
                                <div className="relative aspect-video">
                                    <img
                                        src="/img/A criação de adão/obra completa.webp"
                                        alt="Michelangelo - A Criação de Adão"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-60" />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-amber-500">
                                        <Palette size={18} />
                                        <span className="text-xs font-black uppercase tracking-widest italic">Renascimento • Arte</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-sofia-serif font-black text-white uppercase tracking-tighter leading-none group-hover:text-amber-500 transition-colors italic">
                                        Michelangelo: <br /> A Criação de Adão
                                    </h3>
                                    <p className="text-white/50 text-xl font-light leading-relaxed transition-colors group-hover:text-white/80 max-w-2xl">
                                        Uma análise transversal sobre a harmonia, a anatomia e a racionalidade humana na Capela Sistina.
                                    </p>
                                    <div className="pt-4 flex items-center gap-4 text-amber-500 font-black uppercase text-xs tracking-[0.3em] transition-all group-hover:gap-6">
                                        Ler Artigo Completo <ChevronRight size={18} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Future Article Placeholder */}
                        <div className="relative h-[400px] overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center group">
                            <div className="text-center opacity-20 group-hover:opacity-40 transition-opacity">
                                <BookOpen size={48} className="mx-auto mb-4 text-white/50" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/50 italic">Novos artigos em breve</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section - Dark Minimalist */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="flex justify-center gap-4 text-cyan-500/30 mb-8">
                            <Zap size={32} />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-sofia-serif font-black text-white leading-tight">
                            "A máquina não teme a morte, mas o homem que a governa teme sua própria obsolescência."
                        </h2>
                        <div className="w-20 h-1 bg-cyan-600 mx-auto" />
                        <div className="space-y-4">
                            <p className="text-white/40 font-black uppercase tracking-[0.5em] text-xs">GARVES K. B.</p>
                            <p className="text-cyan-400/60 text-[10px] font-bold uppercase tracking-widest">Fundador da Velha Sofia</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
