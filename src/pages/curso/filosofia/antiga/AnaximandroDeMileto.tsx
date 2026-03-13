import { Link } from "react-router-dom";
import { ChevronLeft, Landmark, GraduationCap } from "lucide-react";
import { Footer } from "../../../../components/Footer";
import { AnimatedGrid } from "../../../../components/AnimatedGrid";
import { InfographicZoom } from "../../../../components/InfographicZoom";

export function AnaximandroDeMiletoPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] font-sofia-sans text-white/90 selection:bg-violet-500/30">
            <AnimatedGrid
                numSquares={40}
                maxOpacity={0.1}
                fillColor="rgba(139, 92, 246, 0.08)"
                strokeColor="rgba(139, 92, 246, 0.04)"
            />

            {/* Fixed Header */}
            <header className="fixed top-0 inset-x-0 z-[100] bg-black/60 backdrop-blur-2xl border-b border-white/5 py-4">
                <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex flex-col">
                        <span className="font-sofia-serif font-black text-xl tracking-tighter text-white">
                            A VELHA <span className="text-violet-400">SOFIA</span>
                        </span>
                    </Link>
                    <Link
                        to="/curso/filosofia/antiga"
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-violet-400 transition-colors border border-white/10 hover:border-violet-500/30 px-4 py-2 rounded-full"
                    >
                        <ChevronLeft size={14} /> Filosofia Antiga
                    </Link>
                </div>
            </header>

            <main className="pt-32 pb-28">
                <article className="max-w-4xl mx-auto px-6">

                    {/* ─── HERO SECTION ─── */}
                    <header className="mb-24">
                        <div className="flex flex-col md:flex-row gap-12 items-center">

                            {/* Portrait — Rounded Circle with Glow Ring */}
                            <div className="relative flex-shrink-0 w-52 h-52 md:w-64 md:h-64">
                                {/* Outer glow */}
                                <div className="absolute inset-0 bg-violet-600/30 blur-3xl rounded-full scale-110" />
                                {/* Gradient ring */}
                                <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-violet-500 via-purple-600 to-transparent shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-[#13111a] group">
                                        <img
                                            src="/img/filosofia/antiga/autores/Anaximandro.webp"
                                            alt="ANAXIMANDRO DE MILETO"
                                            className="w-full h-full object-cover md:grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Meta info */}
                            <div className="flex-1 space-y-5 text-center md:text-left">
                                <div className="inline-flex items-center gap-3 text-violet-400 bg-violet-500/10 border border-violet-500/20 px-4 py-2 rounded-full">
                                    <Landmark size={16} />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Escola Jônica</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-sofia-serif font-black text-white italic uppercase tracking-tighter leading-none">
                                    ANAXIMANDRO DE MILETO
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">

                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-violet-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📅 c. 610 – c. 546 a.C.</span>
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📍 Mileto (Jônia - atual Turquia)</span>
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">🎓 Metafísica •</span>
                                </div>
                                <blockquote className="border-l-4 border-violet-500/50 pl-5 py-1 italic text-white/50 font-light">
                                    "O Primeiro Metafísico"
                                </blockquote>
                            </div>
                        </div>
                    </header>

                    {/* ─── CONTENT BODY ─── */}
                    <div
                        className="philosophy-content space-y-10 text-white/70 font-light leading-relaxed"
                        dangerouslySetInnerHTML={{
                            __html: `<section class="space-y-8">


<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><strong>"O Primeiro Metafísico"</strong> | <strong>Escola Jônica</strong><br />> <strong>Período:</strong> c. 610 – c. 546 a.C.<br />> <strong>Local:</strong> Mileto (Jônia - atual Turquia)<br />> <strong>Área:</strong> Metafísica<br />> <strong>Abordagem:</strong> Monismo</blockquote>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">1. Biografia e Contexto</h2>

<strong>Anaximandro</strong> (c. 610 – 546 a.C.) foi concidadão, companheiro e discípulo de Tales. É considerado o primeiro filósofo a escrever sua obra em prosa (tratado <em>Sobre a Natureza</em>, do qual resta apenas um fragmento). Figura de inteligência ousada, expandiu as investigações de seu mestre para além dos limites da observação direta, introduzindo conceitos abstratos profundos.

Como testemunha <strong>Simplício</strong>:
<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8">"Anaximandro — filho de Praxíades, sucessor e discípulo de Tales — <strong>utiliza pela primeira vez o termo 'princípio'</strong> e afirma que o infinito é o princípio e o elemento dos seres."</blockquote>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">Perfil Intelectual e Feitos</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>Geografia:</strong> Credita-se a ele a criação do <strong>primeiro mapa geográfico</strong> do mundo conhecido (uma tábua de bronze).</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Astronomia:</strong> Introduziu na Grécia o uso do <strong>gnômon</strong> (relógio de sol) para marcar solstícios e equinócios.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Política:</strong> Liderou uma colônia milésia em Apolônia, mostrando engajamento político.</li></ul>
<em>   <strong>Primeiro Tratado:</strong> Autor de </em>Sobre a Natureza* — primeiro texto filosófico em prosa.



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">3. A Justiça Cósmica</h2>

<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><em>"...princípio e elemento dos seres é o ilimitado [...] De onde vem o nascimento dos seres, para aí também vai a sua corrupção, segundo a necessidade; pois pagam uns aos outros a pena e a expiação pela injustiça, segundo a ordem do tempo."</em><br />> — Fragmento D-K 12 B1</blockquote>

<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Anaximandro vê a existência individual como uma <strong>"injustiça" (hybris)</strong> contra o todo (a unidade do Ápeiron).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">A luta entre os opostos (verão/calor vs. inverno/frio) é um ciclo de <strong>invasão e retribuição</strong> regulado pelo <strong>Tempo</strong>.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">O nascimento é uma "separação" do Ápeiron; a morte é o "retorno" a ele — uma reparação da injustiça cósmica.</li></ul>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">5. Síntese Esquematizada</h2>

<div class="overflow-x-auto my-12 border border-white/5 bg-white/[0.02] p-4"><table class="w-full text-left text-sm border-collapse"><thead><tr class="border-b border-white/10"><th class="p-4 font-black text-white uppercase tracking-widest">Conceito</th><th class="p-4 font-black text-white uppercase tracking-widest">Definição em Anaximandro</th></tr></thead><tbody><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Arché</strong></td><td class="p-4 text-white/60 font-light"><strong>Ápeiron</strong> (O Ilimitado/Indeterminado).</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Natureza do Princípio</strong></td><td class="p-4 text-white/60 font-light">Abstrato, divino, não é nenhum dos 4 elementos.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Raciocínio</strong></td><td class="p-4 text-white/60 font-light">Se o universo é limitado, seu princípio deve ser o oposto: ilimitado.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Justiça Cósmica</strong></td><td class="p-4 text-white/60 font-light">Nascimento = injustiça; morte = expiação. Regulado pelo Tempo.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Cosmologia</strong></td><td class="p-4 text-white/60 font-light">Terra cilíndrica suspensa no centro por equilíbrio geométrico.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Origem da Vida</strong></td><td class="p-4 text-white/60 font-light">Evolutiva; humanos descendem de criaturas aquáticas.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Legado Principal</strong></td><td class="p-4 text-white/60 font-light">O salto da matéria visível para a <strong>abstração metafísica</strong>. Primeiro uso do termo "princípio" (<em>arché</em>).</td></tr></tbody></table></div></section>` }}
                    />


                
                    {/* Infographic Section */}
                    <div className="mt-20 p-1 rounded-3xl bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/10">
                        <div className="bg-[#0a0a0c]/80 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
                                    <GraduationCap size={16} className="text-violet-400" />
                                </div>
                                <h2 className="text-lg font-sofia-serif font-black text-violet-400 uppercase tracking-widest italic">Síntese Visual</h2>
                            </div>
                            <InfographicZoom html={`
                    <section class="mt-8">
                        <div class="bg-white/[0.02] border border-white/5 p-4 rounded-xl overflow-hidden group">
                            <img src="/img/filosofia/antiga/infograficos/Anaximandro Apeiron.png" alt="Infográfico Anaximandro" class="w-full h-auto hover:scale-[1.02] transition-transform duration-700" />
                        </div>
                    </section>`} title="Síntese Visual" />
                        </div>
                    </div>

</article>
            </main>

            <Footer />
        </div>
    );
}
