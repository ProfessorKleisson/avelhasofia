import { motion } from "motion/react";
import { Footer } from "../components/Footer";
import { ChevronRight, Gamepad2, ExternalLink } from "lucide-react";
import { AnimatedGrid } from "../components/AnimatedGrid";

export function JogosDigitaisPage() {
    const games = [
        {
            title: "Nada Trivial",
            description: "Um desafio de conhecimento que foge do comum. Teste seus limites intelectuais em uma experiência minimalista e instigante.",
            image: "/img/Mockup Nada Trivial sem fundo.png",
            link: "https://nadatrivial.vercel.app/",
            color: "from-amber-500/20 to-orange-500/20",
            borderColor: "border-amber-500/30",
            hoverColor: "hover:bg-amber-500",
            shadowColor: "shadow-amber-500/20"
        },
        {
            title: "Diarquia Cardgame",
            description: "A versão digital do aclamado jogo de cartas. Estratégia, filosofia e poder em confrontos rápidos e profundos.",
            image: "/img/MOCKUP COM CARTAS 2 COM MOEDAS sem fundo.png",
            link: "https://diarquia-cardgame.onrender.com/",
            color: "from-cyan-500/20 to-blue-500/20",
            borderColor: "border-cyan-500/30",
            hoverColor: "hover:bg-cyan-500",
            shadowColor: "shadow-cyan-500/20"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0c] font-sofia-sans text-white/90 selection:bg-cyan-500/30">
            <AnimatedGrid
                numSquares={40}
                maxOpacity={0.1}
                fillColor="rgba(34, 211, 238, 0.1)"
                strokeColor="rgba(34, 211, 238, 0.05)"
            />

            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center mb-24"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                            <Gamepad2 size={16} className="text-cyan-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Entretenimento Inteligente</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-sofia-serif font-black text-white mb-8 leading-none tracking-tighter">
                            Jogos <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digitais</span>
                        </h1>
                        <p className="text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
                            Experiências interativas que unem filosofia, estratégia e conhecimento em um ambiente digital imersivo.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {games.map((game, index) => (
                            <motion.div
                                key={game.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className={`group relative p-8 rounded-3xl border ${game.borderColor} bg-gradient-to-br ${game.color} backdrop-blur-sm overflow-hidden flex flex-col`}
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <Gamepad2 size={40} className="text-white" />
                                </div>

                                <div className="relative z-10 mb-8 aspect-video flex items-center justify-center">
                                    <motion.img
                                        whileHover={{ scale: 1.05, rotate: -2 }}
                                        src={game.image}
                                        alt={game.title}
                                        className={`max-h-full w-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_30px_60px_${game.shadowColor}]`}
                                    />
                                </div>

                                <div className="mt-auto relative z-10">
                                    <h2 className="text-3xl font-sofia-serif font-black text-white mb-4">{game.title}</h2>
                                    <p className="text-white/60 text-lg mb-8 font-light leading-relaxed">
                                        {game.description}
                                    </p>
                                    <a
                                        href={game.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 ${game.hoverColor} hover:text-black transition-all font-black uppercase text-xs tracking-[0.2em] rounded-xl group/btn`}
                                    >
                                        Jogar Agora 
                                        <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
