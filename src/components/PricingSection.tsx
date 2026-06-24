import { motion } from "motion/react";
import { ShoppingCart, CreditCard, Zap, CheckCircle2, ExternalLink } from "lucide-react";

export function PricingSection() {
    return (
        <section className="py-24 bg-charcoal relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-emerald-glow)_0%,_transparent_50%)] opacity-5" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative mb-8"
                    >
                        <div className="absolute inset-0 bg-emerald blur-3xl opacity-20 animate-pulse" />
                        <h2 className="text-5xl md:text-8xl font-display font-black text-emerald tracking-tighter italic uppercase relative z-10">
                            DISPONÍVEL AGORA
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-xs uppercase tracking-[0.3em] font-bold mb-12 shadow-[0_0_30px_rgba(0,255,136,0.1)]"
                    >
                        <CheckCircle2 size={14} />
                        FRETE GRÁTIS NAS EDIÇÕES FÍSICAS
                    </motion.div>

                    <h3 className="text-4xl md:text-6xl font-display font-bold mb-4">
                        GARANTA SEU <span className="text-emerald">EXEMPLAR</span>
                    </h3>
                    <p className="text-white/40 font-mono text-sm uppercase tracking-widest max-w-lg">
                        Escolha sua forma de despertar. Compra segura pela Amazon, Mercado Livre ou Kindle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Physical Book Card - Amazon */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/[0.02] border border-white/10 p-8 rounded-sm hover:border-emerald/40 transition-all flex flex-col"
                    >
                        <div className="flex items-start justify-between mb-8">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-white mb-2">Edição Física</h3>
                                <p className="text-emerald font-bold text-xs uppercase tracking-widest mb-1">Amazon</p>
                                <p className="text-white/50 text-xs">Capa dura, papel premium, autografado.</p>
                            </div>
                            <div className="p-3 bg-white/5 rounded-lg text-emerald">
                                <ShoppingCart size={24} />
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-4xl font-black text-emerald font-display tracking-tight">R$ 59,99</span>
                                <span className="bg-emerald/10 text-emerald text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest border border-emerald/20">Frete Grátis</span>
                            </div>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Investimento Único</p>
                        </div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {[
                                "Exemplar da 1ª Tiragem Limitada",
                                "Autógrafo do autor",
                                "Dois marcadores de página personalizados",
                                "Acesso ao grupo de WhatsApp para ser leitor beta dos próximos livros"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                                    <CheckCircle2 size={16} className="text-emerald shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col gap-3 mt-auto">
                            <a
                                href="https://www.amazon.com.br/dp/6501804051"
                                target="_blank"
                                className="w-full py-4 bg-emerald text-charcoal font-black text-[10px] uppercase tracking-[0.2em] text-center hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,136,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
                            >
                                Comprar na Amazon <ExternalLink size={14} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Physical Book Card - Mercado Livre */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/[0.02] border border-[#FFB701]/30 p-8 rounded-sm hover:border-[#FFB701]/80 transition-all flex flex-col"
                    >
                        <div className="absolute top-0 right-10 translate-y-[-50%] px-4 py-1 bg-[#FFB701] text-charcoal text-[10px] font-black uppercase tracking-widest">
                            Mais Vendido
                        </div>

                        <div className="flex items-start justify-between mb-8">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-white mb-2">Edição Física</h3>
                                <p className="text-[#FFB701] font-bold text-xs uppercase tracking-widest mb-1">Mercado Livre</p>
                                <p className="text-white/50 text-xs">Capa dura, papel premium, autografado.</p>
                            </div>
                            <div className="p-3 bg-[#FFB701]/10 rounded-lg text-[#FFB701]">
                                <ShoppingCart size={24} />
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-4xl font-black text-[#FFB701] font-display tracking-tight">R$ 56,99</span>
                                <span className="bg-[#FFB701]/10 text-[#FFB701] text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest border border-[#FFB701]/20">Frete Grátis</span>
                            </div>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Investimento Único</p>
                        </div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {[
                                "Exemplar da 1ª Tiragem Limitada",
                                "Autógrafo do autor",
                                "Dois marcadores de página personalizados",
                                "Acesso ao grupo de WhatsApp para ser leitor beta dos próximos livros"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                                    <CheckCircle2 size={16} className="text-[#FFB701] shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col gap-3 mt-auto">
                            <a
                                href="https://produto.mercadolivre.com.br/MLB-6594644528-a-bruxa-das-maquinas-_JM"
                                target="_blank"
                                className="w-full py-4 bg-[#FFB701] text-charcoal font-black text-[10px] uppercase tracking-[0.2em] text-center hover:bg-white transition-all shadow-[0_0_20px_rgba(255,183,1,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
                            >
                                Comprar no Mercado Livre <ExternalLink size={14} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Digital Book Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/[0.01] border border-white/5 p-8 rounded-sm hover:border-bronze/40 transition-all flex flex-col"
                    >
                        <div className="flex items-start justify-between mb-8">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-white mb-2">Edição Digital</h3>
                                <p className="text-white/50 text-xs">Formato Kindle (.mobi) e ePub.</p>
                            </div>
                            <div className="p-3 bg-white/5 rounded-lg text-bronze">
                                <CreditCard size={24} />
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-4xl font-black text-bronze font-display tracking-tight">R$ 4,99</span>
                            </div>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Download Imediato</p>
                        </div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {[
                                "Compatível com todos os e-readers",
                                "Sincronização entre dispositivos",
                                { text: "Disponível no", logo: true },
                                "Ilustrações digitais em alta resolução"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/50">
                                    <CheckCircle2 size={16} className="text-bronze shrink-0" />
                                    {typeof item === 'string' ? item : (
                                        <div className="flex items-center gap-2">
                                            {item.text}
                                            <img src="/img/kindle-unlimited.webp" alt="Kindle Unlimited" className="h-4 w-auto brightness-0 invert opacity-70" />
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://www.amazon.com.br/Bruxa-M%C3%A1quinas-Kleisson-Borges-Garves-ebook/dp/B0GQR811NV/"
                            target="_blank"
                            className="w-full py-4 border border-bronze/50 text-bronze font-black text-[10px] uppercase tracking-[0.2em] text-center hover:bg-bronze hover:text-charcoal transition-all"
                        >
                            Ler com Kindle Unlimited ou comprar
                        </a>
                    </motion.div>
                </div>

                <div className="mt-16 text-center">
                    <div className="flex items-center justify-center gap-2 text-white/30 text-[10px] uppercase tracking-[0.3em] font-mono">
                        <Zap size={14} className="text-emerald animate-pulse" />
                        Processamento seguro via Amazon e Mercado Livre
                    </div>
                </div>
            </div>

        </section>
    );
}
