import { Link } from "react-router-dom";
import { ChevronLeft, Landmark, GraduationCap } from "lucide-react";
import { Footer } from "../../../../components/Footer";
import { AnimatedGrid } from "../../../../components/AnimatedGrid";
import { InfographicZoom } from "../../../../components/InfographicZoom";

export function PlatãoDeAtenasPage() {
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
                                            src="/img/filosofia/antiga/autores/Platão de Atenas.webp"
                                            alt="PLATÃO DE ATENAS"
                                            className="w-full h-full object-cover md:grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Meta info */}
                            <div className="flex-1 space-y-5 text-center md:text-left">
                                <div className="inline-flex items-center gap-3 text-violet-400 bg-violet-500/10 border border-violet-500/20 px-4 py-2 rounded-full">
                                    <Landmark size={16} />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Academia de Atenas</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-sofia-serif font-black text-white italic uppercase tracking-tighter leading-none">
                                    PLATÃO DE ATENAS
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                    
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-violet-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📅 427 – 347 a.C.</span>
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📍 Atenas (Grécia)</span>
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">🎓 Epistemologia •</span>
                                </div>
                                <blockquote className="border-l-4 border-violet-500/50 pl-5 py-1 italic text-white/50 font-light">
                                    "O Idealista"
                                </blockquote>
                            </div>
                        </div>
                    </header>

                    {/* ─── CONTENT BODY ─── */}
                    <div
                        className="philosophy-content space-y-10 text-white/70 font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: `<section class="space-y-8">


<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><strong>"O Idealista"</strong> | <strong>Academia de Atenas</strong><br />> <strong>Período:</strong> 427 – 347 a.C.<br />> <strong>Local:</strong> Atenas (Grécia)<br />> <strong>Área:</strong> Epistemologia<br />> <strong>Abordagem:</strong> Racionalismo</blockquote>


</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">2. A Teoria das Ideias (Formas)</h2>

O cerne do Platonismo. Platão tenta responder ao desafio de Heráclito (tudo muda) e Parmênides (o ser é imutável), estabelecendo um <strong>Dualismo Ontológico</strong>.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A. O Problema</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">O mundo sensível está em constante mudança e é relativo (a mesma comida é doce para um, amarga para outro).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Mas usamos conceitos universais (Beleza, Justiça, Triângulo) que parecem estáveis.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Se tudo muda, como o conhecimento é possível?</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">B. A Solução: Os Dois Mundos</h3>
1.  <strong>Mundo Sensível (<em>Kosmos Horatos</em>):</strong> Acessível pelos sentidos. Mutável, múltiplo, imperfeito. É o mundo das cópias e aparências.
2.  <strong>Mundo Inteligível (<em>Kosmos Noetos</em>):</strong> Acessível apenas pela razão. Imutável, eterno, perfeito. É o mundo das <strong>Ideias</strong> (<em>Eidos</em> ou <em>Formas</em>).

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">C. O que são as Ideias?</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Não são pensamentos subjetivos, mas <strong>realidades ontologicamente superiores</strong>.</li></ul>
<em>   São os modelos (</em>paradeigma*) perfeitos dos quais as coisas sensíveis são cópias imperfeitas.
<em>   <strong>Exemplo:</strong> Vemos muitos cavalos bonitos no mundo. Todos eles "participam" (</em>methexis<em>) ou "imitam" (</em>mimesis*) a <strong>Ideia de Beleza em si</strong>, que é única, eterna e imaterial.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">D. A Hierarquia das Ideias</h3>
No topo do Mundo Inteligível está a <strong>Ideia do Bem</strong> (<em>Agathon</em>).
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">É a Ideia das Ideias, a causa última de toda realidade e verdade.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Assim como o Sol ilumina o mundo sensível e dá vida, o Bem ilumina o mundo inteligível, dando inteligibilidade (verdade) e ser (existência) às outras Ideias.</li></ul>

<div class="my-12 flex justify-center"><img src="/img/filosofia/antiga/autores/Pasted image 20251211140350.webp" class="max-w-full h-auto border border-white/5" alt="Ilustração" /></div>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">4. Epistemologia: A Linha Dividida e a Anamnese</h2>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A Linha Dividida (<em>República</em>, Livro VI)</h3>
Platão divide os graus de conhecimento e de realidade numa linha:

| Mundo Sensível (Inferior) | Mundo Inteligível (Superior) |
| : | :

</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">5. Psicologia: A Alma Tripartite</h2>

A alma humana não é uma unidade simples, mas um composto de três partes em conflito (<em>República</em>, Livro IV).

| Parte | Localização | Objeto de Desejo | Virtude Correspondente | Analogia Política |
| : | : | :

</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">6. Política: A Cidade Ideal (<em>Kallipolis</em>)</h2>

Em <em>A República</em>, Platão não busca a cidade existente, mas a <strong>cidade perfeitamente justa</strong> (utopia). A cidade é a alma "escrita em letras maiúsculas".

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A Estrutura Tripartite</h3>
A cidade justa é dividida em três classes, análogas às partes da alma:

<div class="overflow-x-auto my-12 border border-white/5 bg-white/[0.02] p-4"><table class="w-full text-left text-sm border-collapse"><thead><tr class="border-b border-white/10"><th class="p-4 font-black text-white uppercase tracking-widest">Classe</th><th class="p-4 font-black text-white uppercase tracking-widest">Metal (Mito)</th><th class="p-4 font-black text-white uppercase tracking-widest">Função</th><th class="p-4 font-black text-white uppercase tracking-widest">Virtude</th></tr></thead><tbody><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Governantes</strong></td><td class="p-4 text-white/60 font-light">Ouro</td><td class="p-4 text-white/60 font-light">Deliberar e governar</td><td class="p-4 text-white/60 font-light">Sabedoria</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Guardiões</strong></td><td class="p-4 text-white/60 font-light">Prata</td><td class="p-4 text-white/60 font-light">Defender a cidade</td><td class="p-4 text-white/60 font-light">Coragem</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Produtores</strong></td><td class="p-4 text-white/60 font-light">Bronze/Ferro</td><td class="p-4 text-white/60 font-light">Produzir bens</td><td class="p-4 text-white/60 font-light">Temperança</td></tr></tbody></table></div>
<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">O Rei-Filósofo</h3>
<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><em>"Os males não cessarão para as cidades... enquanto os filósofos não se tornarem reis, ou os reis não se tornarem filósofos."</em></blockquote>

<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Só quem contemplou a Ideia do Bem pode governar com justiça.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Os reis-filósofos não desejarão o poder (o que os torna confiáveis) e viverão em comunismo (sem propriedade privada ou família).</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A Justiça (<em>Dikaiosyne</em>)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Na alma: Cada parte cumprindo sua função sob a Razão.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Na cidade: Cada classe cumprindo sua função sem usurpar a outra.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Injustiça:</strong> Quando uma parte assume o comando que não lhe cabe (ex: o trabalhador quer governar; o tirano é o apetite comandando).</li></ul>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">8. Síntese Esquematizada</h2>

<div class="overflow-x-auto my-12 border border-white/5 bg-white/[0.02] p-4"><table class="w-full text-left text-sm border-collapse"><thead><tr class="border-b border-white/10"><th class="p-4 font-black text-white uppercase tracking-widest">Conceito</th><th class="p-4 font-black text-white uppercase tracking-widest">Definição Platônica</th></tr></thead><tbody><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Metafísica</strong></td><td class="p-4 text-white/60 font-light"><strong>Dualismo</strong>. Mundo Sensível (cópia) vs. Mundo Inteligível (modelo).</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Ideia Suprema</strong></td><td class="p-4 text-white/60 font-light">A <strong>Ideia do Bem</strong> (Sol, causa de toda verdade e ser).</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Epistemologia</strong></td><td class="p-4 text-white/60 font-light"><strong>Anamnese</strong>. Conhecer é recordar.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Antropologia</strong></td><td class="p-4 text-white/60 font-light"><strong>Dualismo</strong>. Corpo (prisão) vs. Alma (imortal, tripartite).</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Ética</strong></td><td class="p-4 text-white/60 font-light">Justiça = Harmonia hierárquica das partes da alma sob a Razão.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Política</strong></td><td class="p-4 text-white/60 font-light"><strong>Sofocracia</strong>. A cidade ideal exige o <strong>Rei-Filósofo</strong>.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Dialética</strong></td><td class="p-4 text-white/60 font-light">Método filosófico de ascensão às Ideias.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Legado</strong></td><td class="p-4 text-white/60 font-light">Fundador do Idealismo Filosófico. "A filosofia são notas de rodapé a Platão" (Whitehead).</td></tr></tbody></table></div>
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
                            <img src="/img/filosofia/antiga/infograficos/Platão.png" alt="Infográfico Platão" class="w-full h-auto hover:scale-[1.02] transition-transform duration-700" />
                        </div>
                    </section>
                    <section class="mt-8">
                        <div class="bg-white/[0.02] border border-white/5 p-4 rounded-xl overflow-hidden group">
                            <img src="/img/filosofia/antiga/infograficos/Platão 2.png" alt="Infográfico Platão (Parte 2)" class="w-full h-auto hover:scale-[1.02] transition-transform duration-700" />
                        </div>
                    </section>
                    <section class="mt-8">
                        <div class="bg-white/[0.02] border border-white/5 p-4 rounded-xl overflow-hidden group">
                            <img src="/img/filosofia/antiga/infograficos/A alegoria da Caverna.png" alt="Alegoria da Caverna" class="w-full h-auto hover:scale-[1.02] transition-transform duration-700" />
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
