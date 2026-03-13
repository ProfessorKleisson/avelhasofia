import { motion } from "motion/react";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Book, Gamepad, GraduationCap, Code, Youtube, Instagram, Twitter } from "lucide-react";
import { AnimatedGrid } from "../components/AnimatedGrid";

export function SobrePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const skills = [
        { icon: <Book size={20} />, label: "Escritor" },
        { icon: <GraduationCap size={20} />, label: "Professor" },
        { icon: <Gamepad size={20} />, label: "Game Designer" },
        { icon: <Code size={20} />, label: "Desenvolvedor" },
        { icon: <Youtube size={20} />, label: "YouTuber" },
    ];

    return (
        <div className="min-h-screen bg-[#060608] font-sofia-sans text-white/90 selection:bg-cyan-500/30 overflow-x-hidden">
            <AnimatedGrid
                numSquares={40}
                maxOpacity={0.1}
                fillColor="rgba(34, 211, 238, 0.08)"
                strokeColor="rgba(34, 211, 238, 0.04)"
            />

            {/* Hero Section */}
            <section className="relative pt-48 pb-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative mb-12"
                        >
                            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_50px_rgba(34,211,238,0.3)] p-2">
                                <img
                                    src="/img/autor2.webp"
                                    alt="GARVES K. B."
                                    className="w-full h-full object-cover rounded-full"
                                    style={{ objectPosition: 'center 20%' }}
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-[#060608] border border-cyan-500/30 px-6 py-2 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-widest shadow-xl">
                                GARVES K. B.
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-sofia-serif font-black mb-8 uppercase italic tracking-tighter"
                        >
                            O <span className="text-cyan-500">Arquiteto</span> de Mundos
                        </motion.h1>

                        <div className="flex flex-wrap justify-center gap-4 mb-20">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">
                                    <span className="text-cyan-500">{skill.icon}</span>
                                    {skill.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Bio Content */}
            <section className="pb-32 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-12 text-lg md:text-xl font-light leading-relaxed text-white/70">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="relative"
                        >
                            <span className="absolute -left-8 top-0 text-6xl text-cyan-500/20 font-serif">"</span>
                            <p>
                                GARVES K. B. nasceu em 04 de março de 1994 numa cidade do interior do Paraná, chamada Astorga. Viveu sua infância ao lado de sua família em Pitangueiras, uma cidade vizinha à que nasceu.
                            </p>
                        </motion.div>

                        <p>
                            Desde a mais tenra idade, Kleisson foi criativo e comunicativo. Quando adolescente, descobriu o mundo dos livros e não o largou mais. Vivia fugindo das aulas de geografia para ler — às vezes, a professora o buscava pela orelha. Amante de livros e bibliotecas empoeiradas, sua imaginação se alimenta de fantasia, mitologia e ficção científica.
                        </p>

                        <div className="p-10 bg-white/[0.02] border-l-4 border-cyan-500 border-y border-r border-white/5 italic">
                            Desde cedo, se afeiçoou ao pensamento crítico e isso o levou a cursar filosofia na PUC-PR ao completar 18 anos. Na época, já escrevia ficções como "Entre Deuses e Homens".
                        </div>

                        <p>
                            Após o curso, lecionou para jovens e adultos com entusiasmo e dedicação. Enquanto lecionava, iniciou o mestrado em Filosofia na UEM e escreveu o livro "A bruxa das máquinas".
                        </p>

                        <p>
                            Em uma jornada de autoconhecimento, descobriu que o que ardia sua chama era a criatividade. Isso incluía escrever, criar livros e jogos e até desenvolver aplicativos para celular.
                        </p>

                        <p className="text-white font-black uppercase text-2xl tracking-tighter">
                            Hoje, GARVES K. B. tem uma vida multifacetada. Ele é escritor, professor, designer de jogos, desenvolvedor de aplicativos e youtuber educacional.
                        </p>
                    </div>
                </div>
            </section>

            {/* Social Links Section */}
            <section className="py-32 border-t border-white/5 bg-black/40">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-sm font-black uppercase tracking-[0.5em] text-cyan-500 mb-12">Conecte-se com o Autor</h2>
                    <div className="flex justify-center gap-8">
                        <a href="https://www.instagram.com/prof.kleissonfilosofia/" target="_blank" className="hover:text-cyan-500 transition-colors duration-300">
                            <Instagram size={32} />
                        </a>
                        <a href="https://twitter.com/GarvesKleisson" target="_blank" className="hover:text-cyan-500 transition-colors duration-300">
                            <Twitter size={32} />
                        </a>
                        <a href="https://www.youtube.com/channel/UC5E2LQsvqIVzhpZEDTBXcmg" target="_blank" className="hover:text-cyan-500 transition-colors duration-300">
                            <Youtube size={32} />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
