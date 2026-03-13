import { motion } from "motion/react";
import { Footer } from "../components/Footer";
import {
    BookOpen,
    ChevronRight,
    Star,
    Shield,
    Zap,
    Clock,
    Globe,
    Download,
    Eye,
    CheckCircle2,
    BookMarked,
    Scale
} from "lucide-react";

export function MestradoPage() {
    return (
        <div className="min-h-screen bg-[#060608] font-sofia-sans text-white/90 selection:bg-indigo-500/30">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#060608] via-[#060608]/80 to-transparent z-10" />
                    <img
                        src="/img/mestrado.webp"
                        alt="Spinoza e a Liberdade"
                        className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-30 blur-[2px]"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] uppercase font-black tracking-widest mb-8"
                        >
                            <BookMarked size={12} /> Dissertação de Mestrado • 2021
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-sofia-serif font-black text-white leading-tight tracking-tighter mb-8"
                        >
                            A LIBERDADE <br /> EM <span className="text-indigo-500">SPINOZA</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-white/60 mb-10 font-light italic leading-relaxed"
                        >
                            Uma análise transversal sobre o determinismo, conatus e a autonomia política no pensamento spinozano.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6"
                        >
                            <a
                                href="https://pgf.uem.br/dissertacoes/liberdade-em-baruch-spinoza-da-construcao-do-sujeito-sua-acao-etica-e-sua-expressao-politica-kleisson-borges-garves.pdf"
                                target="_blank"
                                className="px-10 py-5 bg-indigo-600 text-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_40px_rgba(79,70,229,0.3)] flex items-center justify-center gap-3 group"
                            >
                                <Eye size={16} className="group-hover:scale-110 transition-transform" />
                                Ler Texto Completo
                            </a>
                            <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                                <CheckCircle2 className="text-indigo-400" size={20} />
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-black text-white/40 tracking-wider">Status Acadêmico</span>
                                    <span className="text-xs font-bold text-white">Concluída e Aprovada</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
                >
                    <span className="text-[9px] uppercase tracking-[0.3em] font-black">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </section>

            {/* Introduction Section */}
            <section className="py-32 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                        <div className="lg:col-span-5 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-sofia-serif font-black text-white uppercase tracking-tighter leading-none">
                                O Paradigma do <br /> <span className="text-indigo-500">Autoengano</span>
                            </h2>
                            <div className="w-20 h-1 bg-indigo-500" />
                            <p className="text-xl text-white/70 font-light italic leading-relaxed">
                                "O conceito de liberdade esteve atrelado ao de livre-arbítrio, constantemente reforçado pela religião. Spinoza altera esse paradigma por entender que as decisões são determinadas pelas experiências."
                            </p>
                            <div className="p-8 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl">
                                <h4 className="text-indigo-400 font-black uppercase text-xs tracking-widest mb-4 italic">Reflexão Singular</h4>
                                <p className="text-sm text-white/50 leading-relaxed font-light">
                                    Este trabalho demonstra como o sujeito, por meio da autorreflexão, compreende adequadamente a si e só assim se liberta dos seus vícios.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-7 space-y-8 text-lg text-white/60 leading-relaxed font-light text-justify">
                            <p>
                                Por muito tempo, o conceito de liberdade esteve atrelado ao de livre-arbítrio, constantemente reforçado pela religião. A contrapelo desse conceito crescia, especialmente no século XVI, a ideia de um determinismo. Trata-se de dois extremos inconciliáveis porque um anula o outro.
                            </p>
                            <p>
                                <strong className="text-indigo-400">Baruch Spinoza</strong> altera os paradigmas acerca da liberdade, por entender que as decisões não são livres, mas sim determinadas pelas experiências, pela educação, pela sociedade em que vive e, em primeira instância, pela natureza em si.
                            </p>
                            <p>
                                Porém, o sujeito é determinado também de maneira interna pelo <span className="italic text-white/80">conatus</span> e aí reside o fundamento para a liberdade do indivíduo. Embora essa liberdade não seja semelhante ao livre-arbítrio, ela é condizente com a realidade determinista.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infographic Timeline / Process Section */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-7xl font-sofia-serif font-black text-white uppercase tracking-tighter mb-4">A Senda da <span className="text-indigo-500">Autonomia</span></h2>
                        <p className="text-white/40 uppercase tracking-widest text-xs font-black">O Caminho da Passividade à Atividade</p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-indigo-500/20 hidden md:block" />

                        <div className="space-y-32">
                            {/* Step 1 */}
                            <div className="flex flex-col md:flex-row items-center gap-16 relative">
                                <div className="flex-1 md:text-right">
                                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
                                        <h3 className="text-2xl font-black text-white uppercase italic mb-4">Reconhecimento</h3>
                                        <p className="text-white/50 font-light leading-relaxed">
                                            Entender as causas externas que nos determinam: educação, sociedade e natureza. O primeiro passo contra o autoengano.
                                        </p>
                                    </motion.div>
                                </div>
                                <div className="w-16 h-16 rounded-full bg-indigo-600 border-4 border-[#060608] z-10 flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                                    <Zap size={24} className="text-white" />
                                </div>
                                <div className="flex-1 hidden md:block" />
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col md:flex-row-reverse items-center gap-16 relative">
                                <div className="flex-1 md:text-left">
                                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
                                        <h3 className="text-2xl font-black text-white uppercase italic mb-4">Autorreflexão</h3>
                                        <p className="text-white/50 font-light leading-relaxed">
                                            Internalizar o processo. Compreender o conatus como a força interna que nos impulsiona à preservação e expansão de si.
                                        </p>
                                    </motion.div>
                                </div>
                                <div className="w-16 h-16 rounded-full bg-white border-4 border-indigo-600 z-10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                    <Scale size={24} className="text-indigo-600" />
                                </div>
                                <div className="flex-1 hidden md:block" />
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col md:flex-row items-center gap-16 relative">
                                <div className="flex-1 md:text-right">
                                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
                                        <h3 className="text-2xl font-black text-white uppercase italic mb-4">Ação Política</h3>
                                        <p className="text-white/50 font-light leading-relaxed">
                                            A liberdade individual se desdobra em autonomia pública. Um Estado democrático e laico que serve de árbitro para a liberdade.
                                        </p>
                                    </motion.div>
                                </div>
                                <div className="w-16 h-16 rounded-full bg-indigo-600 border-4 border-[#060608] z-10 flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                                    <Globe size={24} className="text-white" />
                                </div>
                                <div className="flex-1 hidden md:block" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Quote Section */}
            <section className="py-48 bg-indigo-600/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto space-y-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-sofia-serif font-black text-white leading-tight">
                            "O sujeito entende que faz parte constitutiva de um Deus que o determina internamente, dando-lhe força e impelindo-o à atividade."
                        </h2>
                        <div className="w-24 h-1 bg-indigo-500 mx-auto" />
                        <p className="text-indigo-400 font-black uppercase tracking-[0.4em] text-sm">Fragmento da Tese</p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
            </section>

            {/* Conclusion CTA */}
            <section className="py-48 relative">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-5xl md:text-8xl font-sofia-serif font-black text-white mb-12 tracking-tighter uppercase">
                            EXPANDA SUA <br /> <span className="text-indigo-500">LIBERDADE</span>
                        </h2>
                        <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto font-light">
                            Ideal para quem busca compreender a filosofia clássica sob uma ótica moderna e rigorosa.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            <a
                                href="https://pgf.uem.br/dissertacoes/liberdade-em-baruch-spinoza-da-construcao-do-sujeito-sua-acao-etica-e-sua-expressao-politica-kleisson-borges-garves.pdf"
                                target="_blank"
                                className="px-12 py-6 bg-white text-black font-black uppercase text-sm tracking-[0.3em] hover:bg-indigo-600 hover:text-white transition-all shadow-[0_0_50px_rgba(79,70,229,0.2)]"
                            >
                                Acessar Dissertação
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
