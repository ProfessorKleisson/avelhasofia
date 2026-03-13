import { motion } from "motion/react";
import { Users, BookOpen, Quote } from "lucide-react";

const readers = [
    {
        name: "Pedro Bicaletti",
        image: "/img/Pedro.webp",
        role: "Leitor"
    },
    {
        name: "Jhonatan Nascimento",
        image: "/img/Jhonatan Nascimento.webp",
        role: "Leitor"
    },
    {
        name: "Felipe Bassaco",
        image: "/img/Felipe Bassaco.webp",
        role: "Leitor"
    },
    {
        name: "Elivelton Carvalho",
        image: "/img/Elivelton 2.webp",
        role: "Leitor"
    },
    {
        name: "Cristieli Moura",
        image: "/img/Cristieli Moura.webp",
        role: "Leitora"
    }
];

export function ReaderGallery() {
    return (
        <section className="py-24 bg-charcoal relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-[10px] uppercase tracking-widest font-bold mb-6"
                    >
                        <Users size={12} />
                        COMUNIDADE DE LEITORES
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        QUEM JÁ DESPERTOU A <span className="text-emerald">BRUXA</span>
                    </h2>
                    <p className="text-white/40 font-mono text-xs uppercase tracking-widest max-w-xl">
                        Junte-se àqueles que já mergulharam na dualidade entre a magia e a máquina.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {readers.map((reader, index) => (
                        <motion.div
                            key={reader.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="aspect-[3/4] overflow-hidden rounded-sm border border-white/10 bg-white/5 relative">
                                <img
                                    src={reader.image}
                                    alt={reader.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <div className="text-[10px] text-emerald font-black uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {reader.role}
                                    </div>
                                    <div className="text-xs font-bold text-white uppercase tracking-tight">
                                        {reader.name}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col items-center">
                    <div className="flex -space-x-4 mb-6">
                        {readers.slice(0, 4).map((reader, i) => (
                            <div key={i} className="w-12 h-12 rounded-full border-2 border-charcoal overflow-hidden relative">
                                <img src={reader.image} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                        <div className="w-12 h-12 rounded-full bg-emerald text-charcoal flex items-center justify-center text-xs font-black border-2 border-charcoal relative z-10">
                            +50
                        </div>
                    </div>
                    <p className="text-white/30 text-[11px] uppercase tracking-[0.2em] font-bold">
                        Mais de 50 leitores na primeira tiragem exclusiva
                    </p>
                </div>
            </div>
        </section>
    );
}
