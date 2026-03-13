import { Link } from "react-router-dom";
import { ChevronLeft, Landmark, GraduationCap } from "lucide-react";
import { Footer } from "../../../../components/Footer";
import { InfographicZoom } from "../../../../components/InfographicZoom";
import { AnimatedGrid } from "../../../../components/AnimatedGrid";

export function ParmênidesDeEleiaPage() {
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
                                            src="/img/filosofia/antiga/autores/Parmenides.webp"
                                            alt="PARMÊNIDES DE ELEIA"
                                            className="w-full h-full object-cover md:grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Meta info */}
                            <div className="flex-1 space-y-5 text-center md:text-left">
                                <h1 className="text-4xl md:text-6xl font-sofia-serif font-black text-white italic uppercase tracking-tighter leading-none">
                                    PARMÊNIDES DE ELEIA
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                    
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-violet-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📅 Antiguidade</span>
                                </div>
                                <blockquote className="border-l-4 border-violet-500/50 pl-5 py-1 italic text-white/50 font-light">
                                    "O Pai da Ontologia"
                                </blockquote>
                            </div>
                        </div>
                    </header>

                    {/* ─── CONTENT BODY ─── */}
                    <div
                        className="philosophy-content space-y-10 text-white/70 font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: `<section class="space-y-8">


<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><strong>"O Pai da Ontologia"</strong> | <strong>Escola Eleática</strong><br />> <strong>Período:</strong> c. 515 – c. 450 a.C.<br />> <strong>Local:</strong> Eleia (Magna Grécia - Sul da Itália)</blockquote>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">2. Os Dois Caminhos</h2>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">Caminho da Verdade (<em>Alétheia</em>)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">O único caminho que a razão pode seguir.</li></ul>
<em>   <strong>Premissa fundamental:</strong> </em>"O Ser é, e é impossível que não seja. O Não-Ser não é, e nem sequer pode ser pensado."*
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Tudo que existe participa do Ser. Falar do "Não-Ser" é uma contradição.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">Caminho da Opinião (<em>Doxa</em>)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">O caminho dos mortais que confiam nos sentidos.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Acreditam na pluralidade (muitas coisas), na mudança (nascer e morrer), no movimento.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">É um caminho de <strong>ilusão e erro</strong>, pois implica misturar o Ser com o Não-Ser.</li></ul>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">4. A Identidade entre Pensar e Ser</h2>

<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><em>"O mesmo é pensar e ser."</em> (<em>To gar auto noein estin te kai einai</em>)</blockquote>

<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">O pensamento só pode pensar <strong>o que é</strong> (o Ser).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Pensar o Não-Ser é impossível (é pensar em nada).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Há uma correspondência necessária entre a estrutura do pensamento (lógica) e a estrutura da realidade (ontologia).</li></ul>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">6. Síntese Esquematizada</h2>

<div class="overflow-x-auto my-12 border border-white/5 bg-white/[0.02] p-4"><table class="w-full text-left text-sm border-collapse"><thead><tr class="border-b border-white/10"><th class="p-4 font-black text-white uppercase tracking-widest">Conceito</th><th class="p-4 font-black text-white uppercase tracking-widest">Definição Parmenídica</th></tr></thead><tbody><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Ontologia</strong></td><td class="p-4 text-white/60 font-light">O <strong>Ser é</strong> (e é pensável). O <strong>Não-Ser não é</strong> (e é impensável).</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Atributos do Ser</strong></td><td class="p-4 text-white/60 font-light">Uno, Eterno, Imóvel, Contínuo, Esférico, Homogêneo.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Verdade (<em>Alétheia</em>)</strong></td><td class="p-4 text-white/60 font-light">Caminho da razão (Ser).</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Opinião (<em>Doxa</em>)</strong></td><td class="p-4 text-white/60 font-light">Caminho dos sentidos (ilusão de mudança e pluralidade).</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Método</strong></td><td class="p-4 text-white/60 font-light">Dedução lógica rigorosa a partir do princípio de não-contradição.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Legado</strong></td><td class="p-4 text-white/60 font-light">Pai da Metafísica (Ontologia) e da Lógica Formal.</td></tr></tbody></table></div></section>` }}
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
                            <img src="/img/filosofia/antiga/infograficos/Parmenides.png" alt="Infográfico Parmênides" class="w-full h-auto hover:scale-[1.02] transition-transform duration-700" />
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
