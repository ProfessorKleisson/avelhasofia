import { Link } from "react-router-dom";
import { ChevronLeft, Landmark, GraduationCap } from "lucide-react";
import { Footer } from "../../../../components/Footer";
import { AnimatedGrid } from "../../../../components/AnimatedGrid";
import { InfographicZoom } from "../../../../components/InfographicZoom";

export function EmpédoclesDeAgrigentoPage() {
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
                                            src="/img/filosofia/antiga/autores/Empédocles de Agrigento.webp"
                                            alt="EMPÉDOCLES DE AGRIGENTO"
                                            className="w-full h-full object-cover md:grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Meta info */}
                            <div className="flex-1 space-y-5 text-center md:text-left">
                                <div className="inline-flex items-center gap-3 text-violet-400 bg-violet-500/10 border border-violet-500/20 px-4 py-2 rounded-full">
                                    <Landmark size={16} />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Pluralismo Elementar</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-sofia-serif font-black text-white italic uppercase tracking-tighter leading-none">
                                    EMPÉDOCLES DE AGRIGENTO
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                    
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-violet-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📅 c. 490 – c. 430 a.C.</span>
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📍 Agrigento (Sicília - Magna Grécia)</span>
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">🎓 Metafísica •</span>
                                </div>
                                <blockquote className="border-l-4 border-violet-500/50 pl-5 py-1 italic text-white/50 font-light">
                                    "O Poeta-Filósofo"
                                </blockquote>
                            </div>
                        </div>
                    </header>

                    {/* ─── CONTENT BODY ─── */}
                    <div
                        className="philosophy-content space-y-10 text-white/70 font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: `<section class="space-y-8">
# Empédocles de Agrigento

<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><strong>"O Poeta-Filósofo"</strong> | <strong>Pluralismo Elementar</strong><br />> <strong>Período:</strong> c. 490 – c. 430 a.C.<br />> <strong>Local:</strong> Agrigento (Sicília - Magna Grécia)<br />> <strong>Área:</strong> Metafísica<br />> <strong>Abordagem:</strong> Multielementar</blockquote>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">2. O Problema Filosófico: Ser vs. Devir</h2>

<div class="bg-violet-600/10 border border-violet-500/20 p-8 my-12 relative overflow-hidden group"><div class="relative z-10 text-violet-200 font-light leading-relaxed">O Problema e a Tese<br />> <strong>O problema:</strong> Como conciliar Parmênides (o Ser é imutável) com Heráclito (tudo muda)?<br />> <br />> <strong>A tese:</strong> Empédocles propõe uma solução <strong>pluralista</strong>. Não há um único princípio (<em>arché</em>), mas <strong>quatro elementos</strong> (raízes) eternos e imutáveis. A mudança que vemos é apenas <strong>mistura</strong> e <strong>separação</strong> desses elementos.</div></div>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A Solução Pluralista</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Parmênides estava certo: <strong>nada nasce do nada</strong> e nada perece absolutamente.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Heráclito também estava certo: o mundo sensível <strong>parece mudar</strong>.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Conciliação:</strong> O que chamamos de "nascimento" é apenas combinação de elementos preexistentes; o que chamamos de "morte" é apenas separação.</li></ul>

 | : |
| <strong>Fogo</strong> | Zeus | Quente e Seco |
| <strong>Ar</strong> | Hera | Quente e Úmido |
| <strong>Terra</strong> | Aidoneu (Hades) | Frio e Seco |
| <strong>Água</strong> | Nêstis (Perséfone) | Frio e Úmido |

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">Características das Raízes</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">São <strong>eternas</strong> e <strong>imutáveis</strong> (como o Ser de Parmênides).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">São <strong>qualitativamente distintas</strong> (cada uma tem natureza própria).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">São <strong>quantitativamente iguais</strong> (nenhuma domina sobre as outras).</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Não se transformam</strong> umas nas outras (contra os jônicos).</li></ul>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">5. O Ciclo Cósmico</h2>

O universo oscila eternamente entre quatro fases:

\`\`\`
        ┌──────────────────────────────────────┐
        │           (1) ESFERA                 │
        │     Amor máximo, Ódio mínimo         │
        │  Todos os elementos unidos em        │
        │  harmonia perfeita (o "Sphairos")    │
        └───────────────┬──────────────────────┘
                        │ Ódio começa a entrar
                        ▼
        ┌──────────────────────────────────────┐
        │     (2) SEPARAÇÃO CRESCENTE          │
        │   Ódio vai separando os elementos    │
        │   Surgem os seres vivos mistos       │
        │   (NOSSO MUNDO ATUAL)                │
        └───────────────┬──────────────────────┘
                        │ Ódio atinge máximo
                        ▼
        ┌──────────────────────────────────────┐
        │        (3) SEPARAÇÃO TOTAL           │
        │    Ódio máximo, Amor mínimo          │
        │  Cada elemento isolado em seu lugar  │
        │  (Não há seres compostos)            │
        └───────────────┬──────────────────────┘
                        │ Amor começa a reunir
                        ▼
        ┌──────────────────────────────────────┐
        │       (4) REUNIÃO CRESCENTE          │
        │   Amor vai reunindo os elementos     │
        │   Surgem novamente seres mistos      │
        └───────────────┬──────────────────────┘
                        │ Volta à Esfera
                        ▼
                   (Ciclo Eterno)
\`\`\`



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">7. Doutrina da Alma e Purificação (<em>Purificações</em>)</h2>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">Metempsicose</h3>
<em>   A alma é um <strong>demônio</strong> (</em>daimon*) caído que transmigra por diversos corpos (humanos, animais, plantas).
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">A causa da queda foi um crime primordial: derramamento de sangue ou juramento falso.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">O ciclo de reencarnações dura <strong>30.000 estações</strong>.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">Vegetarianismo e Tabus</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Como as almas reencarnam em animais, comer carne é uma forma de <strong>canibalismo</strong> (podemos estar comendo um parente).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Empédocles pregava a abstinência de carne e sacrifícios sangrentos.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">Purificação</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Através da vida filosófica e da pureza ritual, a alma pode escapar do ciclo e retornar ao estado divino.</li></ul>

 | :--- |
| <strong>Arché</strong> | Não uma, mas <strong>Quatro Raízes</strong>: Fogo, Ar, Terra, Água. |
| <strong>Mudança</strong> | <strong>Mistura e Separação</strong> das raízes (não há geração nem destruição). |
| <strong>Forças</strong> | <strong>Amor</strong> (une) e <strong>Ódio</strong> (separa). |
| <strong>Cosmos</strong> | Ciclo eterno entre unidade (Esfera) e separação total. |
| <strong>Vida</strong> | Seres surgem por combinação aleatória; só os funcionais sobrevivem. |
| <strong>Percepção</strong> | "O semelhante conhece o semelhante." |
| <strong>Alma</strong> | Daimon caído, sujeito à transmigração. Purificação pela filosofia. |
| <strong>Legado</strong> | Base da teoria dos 4 elementos (Aristóteles → Idade Média → Alquimia). Precursor da seleção natural. |

</section>` }}
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
                            <img src="/img/filosofia/antiga/infograficos/Empédocles.png" alt="Infográfico Empédocles" class="w-full h-auto hover:scale-[1.02] transition-transform duration-700" />
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
