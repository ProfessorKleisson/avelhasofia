import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function PrisonSection() {
    return (
        <section className="py-24 bg-charcoal/30 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="relative group" style={{ perspective: "1000px" }}>
                            <motion.div
                                whileHover={{ rotateY: 10, rotateX: -5, z: 50 }}
                                className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl"
                            >
                                <img
                                    src="/img/prisão da bruxa.webp"
                                    alt="A Prisão da Bruxa Ishtar"
                                    className="w-full h-auto object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-bronze/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                            {/* Decorative elements */}
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-bronze/10 blur-3xl rounded-full" />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald/10 blur-3xl rounded-full" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze/10 border border-bronze/20 mb-6">
                            <Sparkles size={14} className="text-bronze" />
                            <span className="text-[10px] uppercase tracking-widest text-bronze font-bold">Mitologia Ancestral</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                            A PRISÃO DA <br />
                            <span className="text-bronze">BRUXA</span>
                        </h2>
                        <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed text-left">
                            <p>
                                Ishtar, outrora uma poderosa deusa babilônica, foi condenada a um destino singular: a prisão em corpos humanos através das eras. Essa punição, decretada por Deus, visava ensiná-la a compreender a humanidade, a vivenciar as nuances da fragilidade mortal.
                            </p>
                            <p>
                                Sua primeira prisão de carne e osso se deu no corpo de uma jovem babilônica, limitando seu poder divino e a condenando a vagar pela história através de diferentes gerações.
                            </p>
                            <div className="pt-6 border-t border-white/5 flex items-start gap-4">
                                <div className="p-3 bg-white/5 border border-bronze/30 rounded-full flex-shrink-0">
                                    <Sparkles size={18} className="text-bronze animate-pulse" />
                                </div>
                                <p className="text-sm italic text-white/50">
                                    "Na porta de sua cela, um símbolo místico, religioso, sela o poder da deusa."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
