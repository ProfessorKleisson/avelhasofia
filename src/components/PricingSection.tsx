import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, CreditCard, Zap, CheckCircle2, AlertCircle, X, ExternalLink } from "lucide-react";

export function PricingSection() {
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const handleBuyClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsAlertOpen(true);
    };

    return (
        <section className="py-24 bg-charcoal relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-emerald-glow)_0%,_transparent_50%)] opacity-5" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] uppercase tracking-widest font-bold mb-6"
                    >
                        <AlertCircle size={12} />
                        Atenção: Apenas 50 exemplares na primeira tiragem
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                        GARANTA SEU <span className="text-emerald">EXEMPLAR</span>
                    </h2>
                    <p className="text-white/40 font-mono text-sm uppercase tracking-widest max-w-lg">
                        Escolha sua forma de despertar. Pré-venda exclusiva com valores promocionais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Physical Book Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/[0.02] border border-white/10 p-8 rounded-sm hover:border-emerald/40 transition-all flex flex-col"
                    >
                        <div className="absolute top-0 right-10 translate-y-[-50%] px-4 py-1 bg-emerald text-charcoal text-[10px] font-black uppercase tracking-widest">
                            Mais Vendido
                        </div>

                        <div className="flex items-start justify-between mb-8">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-white mb-2">Edição Física</h3>
                                <p className="text-white/50 text-xs">Capa comum, papel premium, autografado.</p>
                            </div>
                            <div className="p-3 bg-white/5 rounded-lg text-emerald">
                                <ShoppingCart size={24} />
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-3 mb-1">
                                <span className="text-white/30 text-sm line-through font-mono">R$ 65,00</span>
                                <span className="text-4xl font-black text-emerald font-display tracking-tight">R$ 49,99 <span className="text-sm font-mono opacity-50">+ frete</span></span>
                            </div>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Investimento Único</p>
                        </div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {[
                                "Exemplar da 1ª Tiragem Limitada",
                                "Autógrafo do autor",
                                "Acesso ao grupo de WhatsApp para ser leitor beta dos próximos livros"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                                    <CheckCircle2 size={16} className="text-emerald shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={handleBuyClick}
                            className="w-full py-4 bg-emerald text-charcoal font-black text-xs uppercase tracking-[0.2em] text-center hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,136,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        >
                            Comprar Versão Física
                        </button>
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
                            <div className="flex items-baseline gap-3 mb-1">
                                <span className="text-4xl font-black text-bronze font-display tracking-tight">R$ 18,99</span>
                            </div>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Download Imediato em Abril</p>
                        </div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {[
                                "Compatível com todos os e-readers",
                                "Sincronização entre dispositivos",
                                "Disponível no Kindle Unlimited",
                                "Ilustrações digitais em alta resolução"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/50">
                                    <CheckCircle2 size={16} className="text-bronze shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={handleBuyClick}
                            className="w-full py-4 border border-bronze/50 text-bronze font-black text-xs uppercase tracking-[0.2em] text-center hover:bg-bronze hover:text-charcoal transition-all"
                        >
                            Comprar E-Book
                        </button>
                    </motion.div>
                </div>

                <div className="mt-16 text-center">
                    <div className="flex items-center justify-center gap-2 text-white/30 text-[10px] uppercase tracking-[0.3em] font-mono">
                        <Zap size={14} className="text-emerald animate-pulse" />
                        Processamento seguro via Amazon.com.br
                    </div>
                </div>
            </div>

            {/* Launch Alert Modal */}
            <AnimatePresence>
                {isAlertOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsAlertOpen(false)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-charcoal border border-emerald/50 rounded-lg p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(0,255,136,0.2)]"
                        >
                            <button 
                                onClick={() => setIsAlertOpen(false)}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                            
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center text-emerald animate-pulse">
                                    <AlertCircle size={32} />
                                </div>
                            </div>

                            <h3 className="text-2xl font-display font-bold text-center text-white mb-4">
                                Quase lá!
                            </h3>
                            
                            <p className="text-white/70 text-center mb-6 leading-relaxed">
                                O livro <strong className="text-emerald font-bold uppercase tracking-wider">A Bruxa das Máquinas</strong> <br/> só será lançado oficialmente no dia <strong className="text-white">10 de Abril de 2026</strong>.
                            </p>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mb-2 text-center">
                                <p className="text-sm text-white/80 mb-6">
                                    Entre na nossa comunidade do WhatsApp <br/> <strong className="text-emerald font-black uppercase text-xs tracking-widest leading-loose">"Amantes da Velha Sofia"</strong> <br/> e não perca a data de lançamento.
                                </p>
                                <a 
                                    href="https://chat.whatsapp.com/EsvmoRXz5ExCBmLrJtSPsM" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full gap-2 py-4 bg-emerald text-charcoal font-black text-xs uppercase tracking-widest rounded-sm hover:bg-white transition-colors"
                                >
                                    Entrar na Comunidade <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
