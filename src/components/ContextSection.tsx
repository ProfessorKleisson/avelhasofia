import { motion } from "motion/react";
import { Shield } from "lucide-react";

export function ContextSection() {
    return (
        <section className="py-24 bg-charcoal relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 mb-6">
                            <Shield size={14} className="text-emerald" />
                            <span className="text-[10px] uppercase tracking-widest text-emerald font-bold">Panorama Político</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                            CONTEXTO DO <br />
                            <span className="text-emerald">LIVRO</span>
                        </h2>
                        <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed text-justify">
                            <p>
                                O arqueólogo Levi Horowitz descobre uma profecia sobre a deusa Ishtar e o destino de uma grande potência mundial. A narrativa se desenrola com perseguições, confrontos com o exército chinês e a revelação de segredos antigos.
                            </p>
                            <p>
                                Hannah, com a ajuda de Ishtar e da inteligência artificial Eva, enfrenta o comandante chinês Zhang Ming e seus soldados, que buscam o poder da deusa em meio ao caos de uma invasão tecnológica sem precedentes.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 order-1 lg:order-2"
                    >
                        <div className="relative group" style={{ perspective: "1000px" }}>
                            <motion.div
                                whileHover={{ rotateY: -10, rotateX: 5, z: 50 }}
                                className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl"
                            >
                                <img
                                    src="/img/guerra.webp"
                                    alt="Confronto e Guerra"
                                    className="w-full h-auto object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                            {/* Decorative elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald/10 blur-3xl rounded-full" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-bronze/10 blur-3xl rounded-full" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
