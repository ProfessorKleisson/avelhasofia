import { Link } from "react-router-dom";
import { ChevronLeft, Landmark, GraduationCap } from "lucide-react";
import { Footer } from "../../../../components/Footer";
import { AnimatedGrid } from "../../../../components/AnimatedGrid";

export function SênecaEpictetoEMarcoAurélioPage() {
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
                                            src="/img/filosofia/antiga/autores/Sêneca Epicteto e Marco Aurélio.webp"
                                            alt="SÊNECA, EPICTETO E MARCO AURÉLIO"
                                            className="w-full h-full object-cover md:grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Meta info */}
                            <div className="flex-1 space-y-5 text-center md:text-left">
                                <h1 className="text-4xl md:text-6xl font-sofia-serif font-black text-white italic uppercase tracking-tighter leading-none">
                                    SÊNECA, EPICTETO E MARCO AURÉLIO
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                    
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-violet-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📅 Antiguidade</span>
                                </div>
                                <blockquote className="border-l-4 border-violet-500/50 pl-5 py-1 italic text-white/50 font-light">
                                    "O Pórtico"
                                </blockquote>
                            </div>
                        </div>
                    </header>

                    {/* ─── CONTENT BODY ─── */}
                    <div
                        className="philosophy-content space-y-10 text-white/70 font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: `<section class="space-y-8">
# Estoicismo: Sêneca, Epicteto e Marco Aurélio

<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><strong>"O Pórtico"</strong> | <strong>Filosofia Helenística / Imperial Romana</strong><br />> <strong>Período:</strong> c. 300 a.C. (Zenão de Cítio) – 180 d.C. (Marco Aurélio)<br />> <strong>Local:</strong> Atenas (fundação) / Roma (florescimento)</blockquote>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">2. Física: O Logos e o Cosmos Vivo</h2>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A. O Materialismo Estoico</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Só existem <strong>corpos</strong>. Até a alma, Deus e as virtudes são corpos sutis (pneuma).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">O universo é um <strong>organismo vivo</strong>, permeado pelo <strong>Logos</strong> (Razão, Fogo artífice, Providência).</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">B. Deus/Natureza</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>Panteísmo:</strong> Deus não é transcendente; Ele é a alma imanente do mundo, a lei racional que ordena todas as coisas.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">"Viver conforme a Natureza" significa viver conforme o Logos, a ordem racional do universo.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">C. Determinismo (Destino)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Tudo acontece por <strong>necessidade</strong>. Os eventos estão encadeados numa grande teia causal (Destino = Providência).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Não há acaso. O que parece mal, visto do todo, contribui para o bem do Cosmos.</li></ul>

 | :

</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">4. Ética: A Virtude como Único Bem</h2>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A. Bem, Mal e Indiferentes</h3>
<em>   <strong>O Único Bem:</strong> A Virtude (</em>Areté*) = viver conforme a razão.
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>O Único Mal:</strong> O Vício = viver contra a razão.</li></ul>
<em>   <strong>Indiferentes (</em>Adiaphora*):</strong> Saúde, riqueza, fama, morte. Não são bens nem males em si.
    *   <strong>Indiferentes Preferíveis:</strong> Saúde, riqueza (prefere-se, mas não se depende).
    *   <strong>Indiferentes Reprováveis:</strong> Doença, pobreza.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">B. As Quatro Virtudes Cardinais</h3>
1.  <strong>Sabedoria</strong> (<em>Sophia</em>): Saber o que é bom, mau e indiferente.
2.  <strong>Coragem</strong> (<em>Andreia</em>): Enfrentar dificuldades.
3.  <strong>Justiça</strong> (<em>Dikaiosyne</em>): Dar a cada um o que lhe é devido.
4.  <strong>Temperança</strong> (<em>Sophrosyne</em>): Moderar os impulsos.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">C. Apatheia (Ausência de Paixões)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">As <strong>paixões</strong> (medo, ira, tristeza, desejo excessivo) são <strong>doenças da alma</strong>, juízos falsos sobre o que é bom ou mau.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">O objetivo é a <strong>apatheia</strong>: não a insensibilidade, mas a liberdade das paixões irracionais.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">O sábio sente emoções, mas elas são consonantes com a razão (alegria serena, não euforia; cautela, não medo).</li></ul>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">6. A Morte e o Suicídio</h2>

<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">A morte é um <strong>indiferente</strong>. Não é um mal; é apenas a dissolução natural do composto.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">O medo da morte é um juízo falso.</li></ul>
<em>   O suicídio é permitido em circunstâncias extremas (tortura, tirania, doença incurável) como "saída racional" (</em>exagoge*).

 | : | :

</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">8. Síntese Esquematizada</h2>

<div class="overflow-x-auto my-12 border border-white/5 bg-white/[0.02] p-4"><table class="w-full text-left text-sm border-collapse"><thead><tr class="border-b border-white/10"><th class="p-4 font-black text-white uppercase tracking-widest">Conceito</th><th class="p-4 font-black text-white uppercase tracking-widest">Definição Estoica</th></tr></thead><tbody><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Física</strong></td><td class="p-4 text-white/60 font-light">Materialismo. <strong>Logos</strong> (Deus/Natureza) permeia o cosmos.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Destino</strong></td><td class="p-4 text-white/60 font-light">Determinismo. Tudo é necessário e providencial.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Ética</strong></td><td class="p-4 text-white/60 font-light">A virtude (razão) é o único bem. Controle das opiniões.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Dicotomia</strong></td><td class="p-4 text-white/60 font-light">Separar o que está em nosso poder do que não está.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Paixões</strong></td><td class="p-4 text-white/60 font-light">Juízos falsos que devem ser eliminados (Apatheia).</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Cosmopolitismo</strong></td><td class="p-4 text-white/60 font-light">Todos os humanos são cidadãos do mundo.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Legado</strong></td><td class="p-4 text-white/60 font-light">Cristianismo (Providência), Renascimento, Terapia Cognitiva (CBT).</td></tr></tbody></table></div></section>` }}
                    />
                    

                </article>
            </main>

            <Footer />
        </div>
    );
}
