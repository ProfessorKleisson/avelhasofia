import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Zap, Activity, ShieldAlert, Cpu, Heart } from "lucide-react";

const arcs = [
    {
        name: "Hannah",
        start: "Passiva",
        end: "Ativa",
        color: "emerald",
        icon: <Activity size={16} />,
        description: "De hospedeira relutante a protagonista do próprio destino."
    },
    {
        name: "Eva",
        start: "Robótica / Sem Liberdade",
        end: "Autonomia / Caráter",
        color: "blue-500",
        icon: <Cpu size={16} />,
        description: "Do algoritmo de controle à consciência com vontade própria."
    },
    {
        name: "Ishtar",
        start: "Ranzinza / Má",
        end: "Protetora / Sacrifício",
        color: "bronze",
        icon: <ShieldAlert size={16} />,
        description: "Da fúria vingativa ao ato supremo de redenção."
    }
];

export function CharacterArcs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end center"]
    });

    return (
        <section ref={containerRef} className="py-32 bg-charcoal relative overflow-hidden">
            {/* Background Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 mb-6"
                    >
                        <Zap size={14} className="text-emerald" />
                        <span className="text-[10px] uppercase tracking-widest text-emerald font-bold">Progressão Narrativa</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        A <span className="text-emerald">TRANSMUTAÇÃO</span> DAS ALMAS
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base">
                        O arco dramático das três consciências que habitam o mesmo corpo. Uma jornada da servidão à redenção.
                    </p>
                </div>

                <div className="space-y-16 max-w-4xl mx-auto">
                    {arcs.map((arc, index) => {
                        // Individual progress for each line with offset
                        const start = index * 0.1;
                        const end = 0.6 + index * 0.1;
                        const progress = useTransform(scrollYProgress, [start, end], [0, 100]);

                        return (
                            <motion.div
                                key={arc.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-2 rounded-sm bg-${arc.color === 'blue-500' ? 'blue-500/10' : arc.color + '/10'} border border-${arc.color === 'blue-500' ? 'blue-500/20' : arc.color + '/20'} text-${arc.color === 'blue-500' ? 'blue-400' : arc.color}`}>
                                        {arc.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">{arc.name}</h3>
                                        <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono">{arc.description}</p>
                                    </div>
                                </div>

                                {/* The Arc Track */}
                                <div className="relative h-20 flex items-center">
                                    {/* Path Background */}
                                    <div className="absolute inset-x-0 h-[2px] bg-white/5 top-1/2 -translate-y-1/2" />

                                    {/* Animated Path */}
                                    <motion.div
                                        className={`absolute left-0 h-[2px] bg-gradient-to-r from-transparent via-${arc.color === 'blue-500' ? 'blue-500' : arc.color} to-${arc.color === 'blue-500' ? 'blue-400' : arc.color} top-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(0,255,136,0.5)]`}
                                        style={{ width: progress.get() + "%", boxShadow: arc.color === 'emerald' ? '0 0 15px rgba(0,255,136,0.5)' : arc.color === 'blue-500' ? '0 0 15px rgba(59,130,246,0.5)' : '0 0 15px rgba(205,127,50,0.5)' }}
                                    />

                                    {/* Start State */}
                                    <div className="absolute left-0 top-0 -translate-y-1/2">
                                        <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">Início</div>
                                        <div className="bg-charcoal px-3 py-1 border border-white/10 rounded-sm text-xs text-white/70 whitespace-nowrap shadow-xl">
                                            {arc.start}
                                        </div>
                                    </div>

                                    {/* End State */}
                                    <div className="absolute right-0 top-0 -translate-y-1/2 text-right">
                                        <div className="text-[10px] font-mono text-emerald uppercase tracking-widest mb-1">Destino</div>
                                        <div className={`bg-charcoal px-3 py-1 border border-${arc.color === 'blue-500' ? 'blue-500/30' : arc.color + '/30'} rounded-sm text-xs font-bold text-white whitespace-nowrap shadow-[0_0_20px_rgba(0,255,136,0.1)]`}>
                                            {arc.end}
                                        </div>
                                    </div>

                                    {/* Moving Indicator */}
                                    <motion.div
                                        className="absolute top-1/2 -translate-y-1/2 z-10"
                                        style={{ left: progress.get() + "%" }}
                                    >
                                        <div className={`w-3 h-3 rounded-full bg-${arc.color === 'blue-500' ? 'blue-500' : arc.color} shadow-[0_0_15px_var(--color-${arc.color})]`} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Decorative gradient at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-charcoal to-transparent" />
        </section>
    );
}
