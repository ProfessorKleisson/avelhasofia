import { Link } from "react-router-dom";
import { ChevronLeft, Landmark, GraduationCap } from "lucide-react";
import { Footer } from "../../../../components/Footer";
import { AnimatedGrid } from "../../../../components/AnimatedGrid";
import { InfographicZoom } from "../../../../components/InfographicZoom";

export function SócratesDeAtenasPage() {
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
                                            src="/img/filosofia/antiga/autores/Sócrates de Atenas.webp"
                                            alt="SÓCRATES DE ATENAS"
                                            className="w-full h-full object-cover md:grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Meta info */}
                            <div className="flex-1 space-y-5 text-center md:text-left">
                                <h1 className="text-4xl md:text-6xl font-sofia-serif font-black text-white italic uppercase tracking-tighter leading-none">
                                    SÓCRATES DE ATENAS
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                    
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-violet-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📅 Antiguidade</span>
                                </div>
                                <blockquote className="border-l-4 border-violet-500/50 pl-5 py-1 italic text-white/50 font-light">
                                    "O Pai da Filosofia Moral"
                                </blockquote>
                            </div>
                        </div>
                    </header>

                    {/* ─── CONTENT BODY ─── */}
                    <div
                        className="philosophy-content space-y-10 text-white/70 font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: `<section class="space-y-8">
# Sócrates

<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><strong>"O Pai da Filosofia Moral"</strong> | <strong>O Tábano de Atenas</strong><br />> <strong>Período:</strong> 470 – 399 a.C.<br />> <strong>Local:</strong> Atenas (Grécia)</blockquote>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">2. O Problema Socrático</h2>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">Sócrates não escreveu nada.</h3>
O que sabemos dele vem de fontes com interesses diferentes:
1.  <strong>Platão</strong> (discípulo devoto): O Sócrates dos diálogos platônicos é idealizado; nas obras tardias, fala doutrinas que provavelmente são de Platão.
2.  <strong>Xenofonte</strong> (discípulo prático): Um Sócrates mais moralista e menos especulativo.
3.  <strong>Aristófanes</strong> (comediante): Ridiculariza Sócrates em <em>As Nuvens</em> como sofista e ateu.
4.  <strong>Aristóteles</strong> (fonte indireta): Atribui a Sócrates a busca por definições universais e a lógica indutiva.

<strong>Consenso Mínimo:</strong> Sócrates focou no homem e na ética, usou o diálogo como método e morreu pela filosofia.



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">4. Filosofia Moral Socrática</h2>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A. "Conhece-te a ti mesmo" (<em>Gnothi Seauton</em>)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Inscrito no templo de Delfos.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">O exame de si mesmo é a tarefa suprema da vida.</li></ul>
<em>   </em>"Uma vida sem exame não vale a pena ser vivida."* (Apologia).

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">B. A Ignorância Socrática</h3>
<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><em>"Só sei que nada sei."</em> (<em>Hen oida hoti ouden oida</em>)</blockquote>

<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Não é falsa modéstia; é uma constatação sincera.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">O oráculo de Delfos declarou Sócrates o homem mais sábio. Ele ficou perturbado e foi testar os "sábios" (políticos, poetas, artesãos). Descobriu que <strong>eles não sabiam</strong>, mas <strong>achavam que sabiam</strong>.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Sócrates era o mais sábio porque era o único que <strong>sabia que não sabia</strong>.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Consequência:</strong> A consciência da própria ignorância é o pré-requisito para qualquer aprendizado.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">C. Cuidar da Alma (<em>Epimeleia Heautou</em>)</h3>
<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><em>"O corpo é a prisão da alma, e a morte é a libertação."</em></blockquote>

<em>   A essência do homem não é o corpo, a riqueza ou a fama, mas sua <strong>Alma</strong> (</em>Psyché*).
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">A alma é a sede da razão e da consciência moral.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">A tarefa mais importante da vida é <strong>cuidar da alma</strong>: torná-la o mais virtuosa possível.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">D. Intelectualismo Moral (ou Ético)</h3>
A tese mais marcante (e polêmica) de Sócrates:

1.  <strong>Virtude = Conhecimento:</strong> Quem <em>verdadeiramente</em> conhece o que é o Bem, <em>necessariamente</em> faz o Bem.
2.  <strong>Vício = Ignorância:</strong> Ninguém faz o mal <strong>voluntariamente</strong>. Todo malfeitor age por erro; ele acha que aquilo lhe trará um bem, mas está enganado.
3.  <strong>Consequência:</strong> A solução para o mal moral não é punição, mas <strong>educação</strong>. Se o criminoso soubesse realmente que o crime o prejudica, não o faria.

<em>   <strong>Crítica de Aristóteles (Akrasia/Fraqueza da Vontade):</strong> O alcoólatra sabe que beber lhe faz mal, mas bebe assim mesmo. Sócrates diria que ele </em>não sabe de verdade*; seu conhecimento é superficial, não convicção profunda.



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">6. As Escolas Socráticas Menores</h2>

Após a morte de Sócrates, surgem várias escolas que radicalizam aspectos de seu ensinamento:
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>Cínicos (Antístenes/Diógenes):</strong> Radicalizam a autossuficiência e desprezam as convenções sociais.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Cirenaicos (Aristipo):</strong> Radicalizam o prazer imediato como bem (hedonismo).</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Megáricos (Euclides de Mégara):</strong> Radicalizam a lógica e a dialética.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Academia (Platão):</strong> Radicalizam a busca pela definição universal (Teoria das Ideias).</li></ul>

 | :--- |
| <strong>Foco</strong> | <strong>Antropológico</strong> (Homem, Alma, Ética). |
| <strong>Método</strong> | <strong>Diálogo</strong> (Ironia + Maiêutica). Filosofia como conversa. |
| <strong>Objetivo</strong> | Alcançar a <strong>Definição Universal</strong> (o conceito/essência). |
| <strong>Epistemologia</strong> | A verdadeira sabedoria é saber que não sabe. |
| <strong>Ética</strong> | <strong>Intelectualismo Moral</strong>: Conhecer o Bem = fazer o Bem. |
| <strong>Vida</strong> | A filosofia não é academia, é <strong>modo de vida</strong> e exame constante. |
| <strong>Morte</strong> | Morrer pela verdade é preferível a viver na mentira. |
| <strong>Legado</strong> | Transformou a filosofia no exame da alma. |
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
                            <img src="/img/filosofia/antiga/infograficos/Sócrates.png" alt="Infográfico Sócrates" class="w-full h-auto hover:scale-[1.02] transition-transform duration-700" />
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
