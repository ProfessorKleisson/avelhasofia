import { Link } from "react-router-dom";
import { ChevronLeft, Landmark, GraduationCap } from "lucide-react";
import { Footer } from "../../../../components/Footer";
import { AnimatedGrid } from "../../../../components/AnimatedGrid";

export function PlotinoDeRomaPage() {
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
                                            src="/img/filosofia/antiga/autores/Plotino de Roma.webp"
                                            alt="PLOTINO DE ROMA"
                                            className="w-full h-full object-cover md:grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Meta info */}
                            <div className="flex-1 space-y-5 text-center md:text-left">
                                <h1 className="text-4xl md:text-6xl font-sofia-serif font-black text-white italic uppercase tracking-tighter leading-none">
                                    PLOTINO DE ROMA
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                    
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-violet-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📅 Antiguidade</span>
                                </div>
                                <blockquote className="border-l-4 border-violet-500/50 pl-5 py-1 italic text-white/50 font-light">
                                    "O Fundador do Neoplatonismo"
                                </blockquote>
                            </div>
                        </div>
                    </header>

                    {/* ─── CONTENT BODY ─── */}
                    <div
                        className="philosophy-content space-y-10 text-white/70 font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: `<section class="space-y-8">
# Plotino

<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><strong>"O Fundador do Neoplatonismo"</strong> | <strong>Neoplatonismo</strong><br />> <strong>Período:</strong> 204 – 270 d.C.<br />> <strong>Local:</strong> Roma (Vindo do Egito)</blockquote>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">2. A Metafísica da Emanação: As Três Hipóstases</h2>

O universo é uma hierarquia de níveis de realidade, emanando de um único Princípio.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A. O Uno (<em>To Hen</em>)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">O Princípio Absoluto, anterior a todas as distinções.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Além do Ser:</strong> O Uno não é uma "coisa"; é a <strong>fonte</strong> de todo ser, mas Ele mesmo está "além do ser".</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Inefável:</strong> Não podemos predicar nada Dele positivamente (nem Bondade, nem Pensamento, nem Existência). Tudo o que dissermos será "menos" do que Ele é.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>O Bem:</strong> É a fonte de toda perfeição, o objeto de todo desejo.  ("Deus não é belo, mas a Beleza.")</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Analogia do Sol:</strong> Assim como o Sol irradia luz sem esforço nem diminuição, o Uno "emana" eternamente de si.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">B. A Emanação (<em>Proodos</em>)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Não é criação voluntária (como na Bíblia). É um <strong>transbordar</strong> necessário da plenitude do Princípio.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">O Uno não perde nada ao emanar, assim como o Sol não perde luz ao iluminar.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">A emanação gera níveis cada vez mais "distantes" da perfeição; portanto, cada vez mais múltiplos e deficientes.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">C. A Segunda Hipóstase: O Intelecto (<em>Nous</em>)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">A primeira emanação do Uno.</li></ul>
<em>   É o mundo das <strong>Ideias Platônicas</strong> (em Plotino, as Ideias não estão num "lugar", mas são pensamentos do </em>Nous*).
<em>   No </em>Nous*, há uma unidade entre o <strong>Pensar</strong> e o <strong>Ser</strong>: o intelecto pensa a si mesmo ao pensar as Ideias.
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">É múltiplo (muitas Ideias), portanto inferior ao Uno (absolutamente simples).</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">D. A Terceira Hipóstase: A Alma (<em>Psyché</em>)</h3>
<em>   Emana do </em>Nous*.
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">É o princípio de <strong>vida e movimento</strong>.</li></ul>
<em>   Tem uma face voltada para cima (contemplando o </em>Nous*) e uma face voltada para baixo (animando a matéria).
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>Alma do Mundo:</strong> Anima o Cosmos como um todo, tornando-o um ser vivo ordenado.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Almas individuais:</strong> Fragmentos da Alma do Mundo que animam corpos particulares.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">E. A Matéria (<em>Hyle</em>)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">É o limite extremo da emanação, a última "borda" do real.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">A matéria é <strong>não-ser</strong> relativo (privação de forma), <strong>escuridão</strong> (ausência de luz do Uno), <strong>mal</strong> (não como força, mas como falta).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">A matéria não foi "criada"; é a sombra projetada pela luz do Uno quando Ele "brilha" no nada.</li></ul>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">4. A Influência do Neoplatonismo</h2>

<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>Cristianismo:</strong> Agostinho, Pseudo-Dionísio, mística medieval.</li></ul>
<em>   <strong>Islã:</strong> Filosofia islâmica (</em>falsafa*), Avicena, Sufismo.
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>Judaísmo:</strong> Cabala.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Renascimento:</strong> Marsílio Ficino, Academia Florentina.</li></ul>

 | :--- |
| <strong>O Uno</strong> | Princípio Absoluto, além do Ser, inefável, fonte de tudo. |
| <strong>Nous (Intelecto)</strong> | Mundo das Ideias. Pensamento que pensa a si mesmo. |
| <strong>Alma</strong> | Princípio de vida. Ponte entre o inteligível e o sensível. |
| <strong>Matéria</strong> | Limite inferior da emanação. Não-ser relativo, mal. |
| <strong>Emanação</strong> | Transbordar necessário e eterno do Uno. Não é criação. |
| <strong>Retorno</strong> | Purificação, contemplação e união mística com o Uno. |
| <strong>Legado</strong> | Base da mística cristã, islâmica e judaica. |
</section>` }}
                    />
                    

                </article>
            </main>

            <Footer />
        </div>
    );
}
