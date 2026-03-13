import { Link } from "react-router-dom";
import { ChevronLeft, Landmark, GraduationCap } from "lucide-react";
import { Footer } from "../../../../components/Footer";
import { AnimatedGrid } from "../../../../components/AnimatedGrid";

export function EpicuroDeSamosPage() {
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
                                            src="/img/filosofia/antiga/autores/Epicuro de Samos.webp"
                                            alt="EPICURO DE SAMOS"
                                            className="w-full h-full object-cover md:grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Meta info */}
                            <div className="flex-1 space-y-5 text-center md:text-left">
                                <h1 className="text-4xl md:text-6xl font-sofia-serif font-black text-white italic uppercase tracking-tighter leading-none">
                                    EPICURO DE SAMOS
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                    
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-violet-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📅 Antiguidade</span>
                                </div>
                                <blockquote className="border-l-4 border-violet-500/50 pl-5 py-1 italic text-white/50 font-light">
                                    "O Filósofo do Jardim"
                                </blockquote>
                            </div>
                        </div>
                    </header>

                    {/* ─── CONTENT BODY ─── */}
                    <div
                        className="philosophy-content space-y-10 text-white/70 font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: `<section class="space-y-8">
# Epicuro de Samos

<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><strong>"O Filósofo do Jardim"</strong> | <strong>Epicurismo</strong><br />> <strong>Período:</strong> 341 – 270 a.C.<br />> <strong>Local:</strong> Samos (origem) / Atenas (O Jardim)</blockquote>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">2. Física Atomista</h2>

Epicuro adota e adapta o atomismo de <strong>Demócrito</strong>.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A. Átomos e Vazio</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">A realidade é composta apenas de <strong>Átomos</strong> (partículas indivisíveis, eternas, em movimento) e <strong>Vazio</strong> (o espaço onde se movem).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Não há criação nem destruição, apenas <strong>rearranjo de átomos</strong>.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">A alma também é feita de átomos (sutis e rápidos); ao morrer, dispersam-se.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">B. O Clinamen (Desvio)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Diferente de Demócrito (que era determinista), Epicuro introduz o <strong>clinamen</strong>: um pequeno <strong>desvio espontâneo</strong> e imprevisível no movimento dos átomos.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Isso garante a <strong>liberdade humana</strong> (nossa vontade não é mero resultado mecânico) e a criação de mundos variados.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">C. Os Mundos Infinitos</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">O universo é infinito. Há infinitos mundos surgindo e perecendo.</li></ul>
<em>   Os deuses existem, mas vivem nos "intermundos" (</em>metakosmia*), em perfeita beatitude, sem se importar com os humanos.



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">4. Ética Hedonista</h2>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A. O Fim Supremo: O Prazer (<em>Hedoné</em>)</h3>
<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><em>"O prazer é o começo e o fim da vida feliz."</em></blockquote>

<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">O <strong>bem</strong> é o prazer; o <strong>mal</strong> é a dor.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">MAS: Epicuro não é um hedonista vulgar.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">B. Tipos de Prazer</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>Prazer Cinético (em movimento):</strong> A satisfação de uma carência (comer quando faminto). É instável.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Prazer Catastemático (em repouso):</strong> A ausência de dor e perturbação. É o prazer <strong>superior e durável</strong>.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">O objetivo é a <strong>Ataraxia</strong>: a serenidade imperturbável da alma, livre de medos e desejos desnecessários.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">C. Os Três Tipos de Desejo</h3>
1.  <strong>Naturais e Necessários:</strong> Comer (fome), beber (sede), abrigar-se. Devem ser satisfeitos.
2.  <strong>Naturais e Não-Necessários:</strong> Comer comida requintada, sexo. Podem ser satisfeitos com moderação.
3.  <strong>Nem Naturais Nem Necessários:</strong> Riqueza, fama, poder. Devem ser <strong>rejeitados</strong> (são fontes de ansiedade infinita).

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">D. O Cálculo dos Prazeres</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">O sábio pondera: um prazer agora pode trazer dor depois (ressaca). Uma dor agora pode trazer prazer depois (exercício).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">A razão serve para calcular o que gera a maior quantidade de prazer estável e duradouro.</li></ul>

 | :

</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">6. Política: Viver Escondido (<em>Lathe Biosas</em>)</h2>

<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">A política é fonte de perturbação (ambição, inimigos).</li></ul>
<em>   O sábio deve <strong>viver escondido</strong> (</em>lathe biosas*), em pequenas comunidades de amigos.
<em>   A amizade (</em>Philia*) é o maior dos bens: "Comer e beber sem um amigo é vida de leão ou de lobo."

 | :--- |
| <strong>Física</strong> | <strong>Atomismo</strong> materialista + <strong>Clinamen</strong> (liberdade). |
| <strong>Teologia</strong> | Deuses existem, mas não interferem no mundo. Não temê-los. |
| <strong>Ética</strong> | <strong>Hedonismo racional</strong>. Prazer catastemático = Ataraxia. |
| <strong>Morte</strong> | A morte é o nada. Não sentiremos nada. Não temê-la. |
| <strong>Felicidade</strong> | Acessível via prazeres simples, autossuficiência e amizade. |
| <strong>Política</strong> | Afastar-se dela. "Viver escondido". |
| <strong>Legado</strong> | Lucrecio (<em>De Rerum Natura</em>), Iluminismo radical, Utilitarismo. |
</section>` }}
                    />
                    

                </article>
            </main>

            <Footer />
        </div>
    );
}
