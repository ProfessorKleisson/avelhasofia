import { motion, useScroll, useSpring } from "motion/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { ChevronRight, Star, Clock, Globe, Zap, Shield, BookOpen } from "lucide-react";
import { AnimatedGrid } from "../components/AnimatedGrid";

export function OsHomensDeusesPage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#060608] font-sofia-sans text-white/90 selection:bg-[#DE863B]/30 overflow-x-hidden">
            <AnimatedGrid
                numSquares={40}
                maxOpacity={0.1}
                fillColor="rgba(222, 134, 59, 0.08)"
                strokeColor="rgba(222, 134, 59, 0.04)"
            />

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#DE863B] z-[60] origin-left"
                style={{ scaleX }}
            />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#060608] via-[#060608]/80 to-transparent z-10" />
                    <img
                        src="/img/homens-deuses/disco_voador.webp"
                        alt="Disco Voador Lore"
                        className="w-full h-full object-cover opacity-40 scale-110 blur-[3px]"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-block px-4 py-1 border border-[#DE863B]/30 bg-[#DE863B]/10 rounded-full text-[#DE863B] text-[10px] uppercase tracking-[0.3em] font-black mb-6">
                                    Odisseia Espacial & Mitologia Antiga
                                </div>
                                <h1 className="text-6xl md:text-8xl font-sofia-serif font-black text-white leading-[0.9] tracking-tighter mb-8 drop-shadow-[0_0_30px_rgba(222,134,59,0.3)]">
                                    OS HOMENS <br /> <span className="text-[#DE863B]">DEUSES</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-orange-100/60 font-light italic leading-relaxed max-w-2xl mb-10">
                                    "Doze estranhos, uma festa interrompida e o destino da humanidade nas mãos de quem desafia falsos deuses."
                                </p>

                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 mb-10">
                                    {/* Amazon Style Price Box */}
                                    <div className="relative group overflow-hidden bg-white/[0.03] border border-white/10 rounded-xl p-5 pr-12 transition-all hover:border-[#DE863B]/50 hover:bg-white/[0.05]">
                                        <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Formato Kindle</div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-4xl font-black text-white italic">R$ 0,00</span>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black text-[#DE863B] italic leading-none">kindle</span>
                                                <span className="text-[10px] font-black text-[#DE863B] italic leading-none">unlimited</span>
                                            </div>
                                        </div>
                                        <div className="text-[11px] text-white/60 font-medium">
                                            ou <span className="text-[#DE863B] font-bold">R$ 10,00</span> para comprar
                                        </div>
                                        {/* Prime-like Tick Icon (Decorative) */}
                                        <div className="absolute top-4 right-4 text-[#DE863B]/20">
                                            <Star size={32} fill="currentColor" stroke="none" className="opacity-10" />
                                        </div>
                                    </div>

                                    <a
                                        href="https://www.amazon.com.br/dp/B018J4FFTO/ref=cm_cr_arp_d_btm?ie=UTF8"
                                        target="_blank"
                                        className="px-10 py-5 bg-[#DE863B] text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-[0_0_40px_rgba(222,134,59,0.3)] flex items-center justify-center group"
                                    >
                                        <span className="group-hover:scale-110 transition-transform">Ler de Graça</span>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex-1 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative z-10"
                            >
                                <img
                                    src="/img/homens-deuses/capa.webp"
                                    alt="Os Homens Deuses Capa"
                                    className="w-full max-w-lg mx-auto drop-shadow-[0_0_80px_rgba(222,134,59,0.2)]"
                                />
                            </motion.div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#DE863B]/5 blur-[120px] rounded-full -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Infographic Section */}
            <section className="py-32 bg-white/[0.02] relative border-y border-white/5 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-sofia-serif font-black text-white uppercase tracking-tighter mb-6"
                        >
                            A Jornada Através do <span className="text-[#DE863B]">Tempo</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100px" }}
                            className="h-1 bg-[#DE863B] mx-auto"
                        />
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Temporal Distortion Line (Curvy/Crooked) */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-12 hidden md:block pointer-events-none opacity-30">
                            <svg className="w-full h-full" viewBox="0 0 40 1000" preserveAspectRatio="none">
                                <motion.path
                                    d="M20,0 Q35,50 20,100 T20,200 T20,300 T20,400 T20,500 T20,600 T20,700 T20,800 T20,900 T20,1000"
                                    fill="none"
                                    stroke="#DE863B"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 4, ease: "linear" }}
                                />
                            </svg>
                        </div>

                        {/* Timeline Item 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-12 mb-32 relative group">
                            <div className="flex-1 md:text-right">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-2xl font-black text-[#DE863B] uppercase italic">O Presente Interrompido</h3>
                                    <p className="text-lg text-white/60 font-light leading-relaxed">
                                        Charlie e onze outros estavam prestes a viver a festa mais incrível de suas vidas, mas o destino tinha outros planos.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-[#DE863B] border-4 border-[#060608] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(222,134,59,0.5)] group-hover:scale-125 transition-transform">
                                <Clock className="text-black" size={20} />
                            </div>
                            <div className="flex-1">
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    src="/img/homens-deuses/babilonia_fogo.webp"
                                    className="w-full h-48 object-cover rounded-2xl opacity-40 md:grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                />
                            </div>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-32 relative group text-right md:text-left">
                            <div className="flex-1">
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-2xl font-black text-[#DE863B] uppercase italic">O Salto Temporal</h3>
                                    <p className="text-lg text-white/60 font-light leading-relaxed">
                                        Um ser misterioso desce do céu, brandindo um cajado e ofuscando a visão de todos. Uma fenda no espaço-tempo se abre.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white border-4 border-[#DE863B] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:scale-125 transition-transform">
                                <Zap className="text-[#DE863B]" size={20} />
                            </div>
                            <div className="flex-1">
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    src="/img/homens-deuses/disco_voador.webp"
                                    className="w-full h-48 object-cover rounded-2xl opacity-40 md:grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                />
                            </div>
                        </div>

                        {/* Timeline Item 3 */}
                        <div className="flex flex-col md:flex-row items-center gap-12 relative group">
                            <div className="flex-1 md:text-right">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-2xl font-black text-[#DE863B] uppercase italic">A Era dos Falsos Deuses</h3>
                                    <p className="text-lg text-white/60 font-light leading-relaxed">
                                        Transportados para um passado distante onde a humanidade é escravizada por alienígenas. É hora de lutar pela alma da espécie.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-[#DE863B] border-4 border-[#060608] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(222,134,59,0.5)] group-hover:scale-125 transition-transform">
                                <Shield className="text-black" size={20} />
                            </div>
                            <div className="flex-1">
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    src="/img/homens-deuses/deus_mesopotamico.webp"
                                    className="w-full h-48 object-cover rounded-2xl opacity-40 md:grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features/Themes Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <h2 className="text-center text-4xl font-sofia-serif font-black mb-24 uppercase">Por que ler este livro?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Zap className="text-[#DE863B]" size={32} />,
                                title: "Pensamento Crítico",
                                desc: "Desafie sua percepção da realidade. A ficção científica expande nossa criatividade e nos incentiva a questionar 'e se?' diante do futuro."
                            },
                            {
                                icon: <Globe className="text-[#DE863B]" size={32} />,
                                title: "Questões Sociais",
                                desc: "Aborda temas profundos como ética, impacto tecnológico e o papel da humanidade no universo sob uma ótica filosófica única."
                            },
                            {
                                icon: <Shield className="text-[#DE863B]" size={32} />,
                                title: "Repertório Cultural",
                                desc: "Explore o que significa ser humano e livre. Uma perspectiva instigante sobre a opressão e a luta pela liberdade absoluta."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-10 bg-black/40 border border-white/5 rounded-2xl hover:border-[#DE863B]/30 transition-all group"
                            >
                                <div className="mb-6 bg-[#DE863B]/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-[#DE863B]/20 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-4 uppercase italic">{item.title}</h3>
                                <p className="text-white/40 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lore Section - Mesopotamian God & Aliens */}
            <section className="py-64 relative overflow-hidden bg-black/60">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/img/homens-deuses/deus_mesopotamico.webp"
                        alt="Deus Mesopotâmico"
                        className="w-full h-full object-cover opacity-25 object-top"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-sofia-serif font-black text-white mb-12 tracking-tighter">OS ANUNNAKIS</h2>
                        <p className="text-2xl text-[#DE863B] font-black uppercase tracking-[0.3em] mb-12 italic">Falsos Deuses de Nibiru</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                            <div className="p-8 border-l border-[#DE863B]/30 bg-white/5 space-y-4">
                                <h4 className="text-xl font-bold uppercase tracking-widest text-white">A Origem</h4>
                                <p className="text-white/50 leading-relaxed">
                                    Uma raça de alienígenas do planeta Nibiru vem à Terra, cria a humanidade e a escraviza através de uma religião disfarçada.
                                </p>
                            </div>
                            <div className="p-8 border-l border-[#DE863B]/30 bg-white/5 space-y-4">
                                <h4 className="text-xl font-bold uppercase tracking-widest text-white">O Governo</h4>
                                <p className="text-white/50 leading-relaxed">
                                    Sociedades e cidades-estado erguidas no Oriente Médio, governadas por "deuses" que nada mais são do que tiranos intergalácticos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* For Whom Section */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/3 space-y-8">
                            <h2 className="text-5xl font-sofia-serif font-black uppercase tracking-tight">Para quem é <br /> destinado?</h2>
                            <p className="text-white/40 italic text-lg">"Para aqueles que buscam a verdade entre as estrelas e o passado."</p>
                            <div className="relative group perspective-1000">
                                <img
                                    src="/img/homens-deuses/mockup.webp"
                                    alt="Os Homens Deuses Mockup"
                                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(222,134,59,0.15)] group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Fãs de Sci-Fi Clássico", desc: "Leitores de Asimov e H.G. Wells que apreciam viagens no tempo e conflitos épicos." },
                                { title: "Busca por Aventura", desc: "Trama emocionante com tensão, reviravoltas e heróis enfrentando deuses invencíveis." },
                                { title: "Amantes de Mitologia", desc: "Fascinados por reinterpretações de mitos e a teoria dos antigos astronautas." },
                                { title: "Leitores de Distopias", desc: "Pessoas que questionam estruturas de poder e buscam o significado da liberdade." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.06] transition-all">
                                    <div className="text-[#DE863B] mb-4 tracking-[0.2em] font-black uppercase text-xs italic">Perfil Literário</div>
                                    <h4 className="text-2xl font-black mb-5 uppercase tracking-normal">{item.title}</h4>
                                    <p className="text-white/50 text-base leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section (Amazon Style) */}
            <section className="py-24 bg-[#060608] relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-left mb-16 border-b border-white/5 pb-8">
                        <h2 className="text-3xl font-sofia-serif font-black mb-2 uppercase tracking-tighter">AVALIAÇÕES DE CLIENTES</h2>
                        <div className="flex items-center gap-4">
                            <div className="flex text-[#DE863B]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" stroke="none" />
                                ))}
                            </div>
                            <span className="text-white/60 text-sm font-bold">5 de 5 estrelas</span>
                        </div>
                        <p className="text-[#DE863B]/40 text-[10px] mt-2 uppercase font-black tracking-[0.3em]">Baseado em leitores da Amazon</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                id: 1,
                                user: "LORRAN CONSTANTIN RUFFO",
                                title: "Muito bom!",
                                date: "13 de setembro de 2024",
                                content: "O livro é incrível! A história prende você desde o começo, com personagens super bem construídos e uma trama cheia de emoções e reviravoltas inesperadas. A escrita do autor é leve e fácil de ler, e a cada capítulo você quer saber mais o que vai acontecer. Vale muito a pena ler.",
                                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lorran"
                            },
                            {
                                id: 2,
                                user: "Henrique Ribeiro",
                                title: "Leitura rápida e agradável",
                                date: "13 de setembro de 2024",
                                content: "Leitura boa e rápida para passar o tempo, tem muita ficção e viagem no tempo. Recomendo demais.",
                                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Henrique"
                            },
                            {
                                id: 3,
                                user: "Ana",
                                title: "Bom livro de leitura rápida",
                                date: "12 de setembro de 2024",
                                content: "Leitura boa, para passar uma tarde. Envolve ficção e um pouco de mitologia. Recomendo.",
                                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana"
                            }
                        ].map((review) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-5"
                            >
                                {/* User Identity */}
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/5 overflow-hidden ring-1 ring-white/10">
                                        <img src={review.avatar} alt={review.user} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-[12px] font-bold text-white/90 uppercase tracking-tighter">{review.user}</span>
                                </div>

                                {/* Rating & Title */}
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-center gap-2">
                                        <div className="flex text-[#DE863B]">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill="currentColor" stroke="none" />
                                            ))}
                                        </div>
                                        <h3 className="text-[13px] font-black text-white leading-tight uppercase italic">{review.title}</h3>
                                    </div>
                                    <div className="text-[11px] text-white/40">
                                        Avaliado no Brasil em {review.date}
                                    </div>
                                    <div className="text-[10px] text-[#DE863B] font-bold uppercase tracking-widest mt-1">Compra Verificada</div>
                                </div>

                                {/* Review Body */}
                                <p className="text-[13px] leading-relaxed text-white/70 text-justify font-light">
                                    {review.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-48 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/img/homens-deuses/capa.webp"
                        alt="Os Homens Deuses Background"
                        className="w-full h-full object-cover opacity-20 blur-xl"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-5xl md:text-8xl font-sofia-serif font-black text-white mb-12 tracking-tighter">
                            LIBERTE A <br /> <span className="text-[#DE863B]">HUMANIDADE</span>
                        </h2>
                        <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
                            Embarque agora nesta odisseia épica que mudará sua visão sobre o passado e o futuro.
                        </p>
                        <div className="flex flex-col items-center gap-8">
                            {/* Amazon Style Price Box - Centered for Footer */}
                            <div className="relative group overflow-hidden bg-white/[0.05] border border-white/10 rounded-xl p-6 transition-all hover:border-[#DE863B]/50 hover:bg-white/[0.08] backdrop-blur-sm max-w-sm w-full mx-auto">
                                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Formato Kindle</div>
                                <div className="flex items-center justify-center gap-3 mb-1">
                                    <span className="text-4xl font-black text-white italic">R$ 0,00</span>
                                    <div className="flex flex-col text-left">
                                        <span className="text-[10px] font-black text-[#DE863B] italic leading-none">kindle</span>
                                        <span className="text-[10px] font-black text-[#DE863B] italic leading-none">unlimited</span>
                                    </div>
                                </div>
                                <div className="text-[11px] text-white/60 font-medium">
                                    ou <span className="text-[#DE863B] font-bold">R$ 10,00</span> para comprar
                                </div>
                            </div>

                            <a
                                href="https://www.amazon.com.br/dp/B018J4FFTO/ref=cm_cr_arp_d_btm?ie=UTF8"
                                target="_blank"
                                className="inline-block px-12 py-6 bg-[#DE863B] text-black font-black uppercase text-sm tracking-[0.3em] hover:bg-white transition-all shadow-[0_0_50px_rgba(222,134,59,0.2)] group"
                            >
                                <span className="group-hover:scale-110 transition-transform">Ler Agora Gratuitamente</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
