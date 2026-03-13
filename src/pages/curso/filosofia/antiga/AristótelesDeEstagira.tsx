import { Link } from "react-router-dom";
import { ChevronLeft, Landmark, GraduationCap } from "lucide-react";
import { Footer } from "../../../../components/Footer";
import { AnimatedGrid } from "../../../../components/AnimatedGrid";

export function AristótelesDeEstagiraPage() {
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
                                            src="/img/filosofia/antiga/autores/Aristóteles de Estagira.webp"
                                            alt="ARISTÓTELES DE ESTAGIRA"
                                            className="w-full h-full object-cover md:grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Meta info */}
                            <div className="flex-1 space-y-5 text-center md:text-left">
                                <h1 className="text-4xl md:text-6xl font-sofia-serif font-black text-white italic uppercase tracking-tighter leading-none">
                                    ARISTÓTELES DE ESTAGIRA
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                    
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-violet-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📅 Antiguidade</span>
                                </div>
                                <blockquote className="border-l-4 border-violet-500/50 pl-5 py-1 italic text-white/50 font-light">
                                    "O Estagirita / O Filósofo"
                                </blockquote>
                            </div>
                        </div>
                    </header>

                    {/* ─── CONTENT BODY ─── */}
                    <div
                        className="philosophy-content space-y-10 text-white/70 font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: `<section class="space-y-8">
# Aristóteles

<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><strong>"O Estagirita" / "O Filósofo"</strong> | <strong>O Liceu (Peripatéticos)</strong><br />> <strong>Período:</strong> 384 – 322 a.C.<br />> <strong>Local:</strong> Atenas (Vindo de Estagira, Macedônia)</blockquote>


</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">2. Metafísica: A Ciência do Ser Enquanto Ser</h2>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A. Crítica às Ideias de Platão</h3>
Aristóteles rejeita o dualismo platônico.
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>Argumento do Terceiro Homem:</strong> Se Sócrates se parece com a Ideia de Homem, deve haver uma terceira Ideia para explicar essa semelhança, num regresso infinito.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">As Ideias separadas não explicam o movimento nem a geração das coisas.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Solução:</strong> As "formas" não estão em outro mundo, mas <strong>nas próprias coisas</strong>.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">B. Hileformismo (Matéria e Forma)</h3>
Toda substância concreta é um <strong>sínolo</strong> (composto) de:
<em>   <strong>Matéria (</em>Hyle*):</strong> Princípio de indeterminação e potencialidade. Aquilo <strong>de que</strong> a coisa é feita.
<em>   <strong>Forma (</em>Morphe*):</strong> Princípio de determinação e atualidade. Aquilo <strong>que</strong> a coisa é (sua essência/definição).
<em>   </em>Exemplo:* Uma estátua de bronze = Bronze (matéria) + Figura de Apolo (forma). Um homem = Corpo (matéria) + Alma racional (forma).

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">C. Potência e Ato</h3>
Como explicar a mudança (grande problema desde Parmênides)?
<em>   <strong>Potência (</em>Dynamis*):</strong> A capacidade de vir a ser algo que ainda não é em ato.
<em>   <strong>Ato (</em>Energeia/Entelecheia*):</strong> A realização dessa capacidade.
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>Movimento:</strong> É a passagem da potência ao ato.</li></ul>
<em>   </em>Exemplo:<em> A semente é uma árvore </em>em potência<em>. A árvore adulta é a árvore </em>em ato*.
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">O Ato é sempre <strong>anterior</strong> e <strong>superior</strong> à Potência (o ovo vem da galinha, não o contrário).</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">D. A Teoria das Quatro Causas</h3>
Para conhecer cientificamente uma coisa, devemos conhecer suas causas. Há quatro tipos:

<div class="overflow-x-auto my-12 border border-white/5 bg-white/[0.02] p-4"><table class="w-full text-left text-sm border-collapse"><thead><tr class="border-b border-white/10"><th class="p-4 font-black text-white uppercase tracking-widest">Causa</th><th class="p-4 font-black text-white uppercase tracking-widest">Pergunta</th><th class="p-4 font-black text-white uppercase tracking-widest">Exemplo (Estátua)</th><th class="p-4 font-black text-white uppercase tracking-widest">Exemplo (Homem)</th></tr></thead><tbody><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Material</strong></td><td class="p-4 text-white/60 font-light">De que é feito?</td><td class="p-4 text-white/60 font-light">Bronze</td><td class="p-4 text-white/60 font-light">Carne, osso</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Formal</strong></td><td class="p-4 text-white/60 font-light">O que é? (Essência)</td><td class="p-4 text-white/60 font-light">Figura de Apolo</td><td class="p-4 text-white/60 font-light">Alma racional</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Eficiente</strong></td><td class="p-4 text-white/60 font-light">Quem/o que fez?</td><td class="p-4 text-white/60 font-light">O escultor</td><td class="p-4 text-white/60 font-light">Os pais</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Final</strong></td><td class="p-4 text-white/60 font-light">Para que? (<em>Télos</em>)</td><td class="p-4 text-white/60 font-light">Decorar o templo</td><td class="p-4 text-white/60 font-light">Viver bem / Felicidade</td></tr></tbody></table></div>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">A <strong>Causa Final</strong> é a mais importante ("A natureza não faz nada em vão"). Tudo tende para um fim.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">E. O Primeiro Motor Imóvel (Deus)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Tudo que se move é movido por outro. Mas não pode haver regresso infinito de motores.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Deve haver um <strong>Primeiro Motor</strong> que move sem ser movido.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Esse ser é <strong>Ato Puro</strong> (nenhuma potência, nenhuma matéria), perfeito e eterno.</li></ul>
<em>   <strong>Deus:</strong> É </em>"Noesis Noeseos"* (Pensamento que pensa a si mesmo). Atrai o universo como Causa Final (objeto de desejo e amor), não como causa eficiente (ele não "empurra" o mundo).


</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">4. Física e Cosmologia</h2>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">O Mundo Sublunar (Terrestre)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Composto por 4 elementos: <strong>Terra</strong> (baixo, seco), <strong>Água</strong> (baixo, úmido), <strong>Ar</strong> (alto, úmido), <strong>Fogo</strong> (alto, seco).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Os elementos tendem para seu "lugar natural" (pedras caem, fogo sobe).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Há geração, corrupção e mudança.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">O Mundo Supralunar (Celestial)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Composto por um quinto elemento: o <strong>Éter</strong> (substância perfeita, imutável).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Os astros (lua, sol, planetas, estrelas fixas) movem-se em esferas concêntricas perfeitas (círculos).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Movimento eterno e circular. Nenhuma geração ou corrupção.</li></ul>


</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">6. Ética: A Ética a Nicômaco</h2>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A. O Fim Último: Eudaimonia</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Toda ação visa um bem. Há um <strong>Sumo Bem</strong> (fim último) buscado por si mesmo: a <strong>Eudaimonia</strong> (felicidade, florescimento, vida bem-sucedida).</li></ul>
<em>   </em>O que é Eudaimonia?<em> Realizar bem a <strong>função própria</strong> (</em>ergon*) do homem. E qual é ela? Agir conforme a <strong>razão</strong>.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">B. A Virtude (<em>Areté</em>)</h3>
<em>   Não é um conhecimento teórico (contra Sócrates), mas um <strong>hábito</strong> (</em>hexis*) adquirido pela prática.
<em>   </em>"Tornamo-nos justos praticando atos justos."*
<em>   <strong>O Justo Meio (</em>Mesotes<em>):</strong> A virtude é o meio-termo entre dois vícios (excesso e falta), determinado pela razão prudente (</em>phronesis*).

| Vício (Falta) | Virtude (Meio) | Vício (Excesso) |
| : | :
</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">7. Política: O Animal Político</h2>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A. O Homem é um <em>Zoon Politikon</em></h3>
<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><em>"O homem é, por natureza, um animal político."</em></blockquote>

<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Só deuses ou bestas podem viver isolados. O ser humano só realiza seu potencial na <strong>pólis</strong>.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">A cidade não existe apenas para sobreviver (comércio, defesa), mas para <strong>viver bem</strong> (vida virtuosa).</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">B. Formas de Governo (Tipos e Degenerações)</h3>

| Nº de Governantes | Forma Reta (Bem Comum) | Forma Degenerada (Interesse Próprio) |
| : | :

</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">8. Síntese Esquematizada</h2>

<div class="overflow-x-auto my-12 border border-white/5 bg-white/[0.02] p-4"><table class="w-full text-left text-sm border-collapse"><thead><tr class="border-b border-white/10"><th class="p-4 font-black text-white uppercase tracking-widest">Conceito</th><th class="p-4 font-black text-white uppercase tracking-widest">Definição Aristotélica</th></tr></thead><tbody><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Realidade</strong></td><td class="p-4 text-white/60 font-light"><strong>Substância</strong> individual concreta (Sínolo de Matéria + Forma).</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Mudança</strong></td><td class="p-4 text-white/60 font-light">Passagem da Potência ao Ato.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Causas</strong></td><td class="p-4 text-white/60 font-light">Material, Formal, Eficiente, <strong>Final</strong> (a mais importante).</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Deus</strong></td><td class="p-4 text-white/60 font-light"><strong>Primeiro Motor Imóvel</strong> / Ato Puro / Pensamento de Pensamento.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Lógica</strong></td><td class="p-4 text-white/60 font-light">Fundador do <strong>Silogismo</strong>. A lógica como Organon.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Ética</strong></td><td class="p-4 text-white/60 font-light">A virtude está no <strong>Justo Meio</strong>. Felicidade = agir racionalmente.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Política</strong></td><td class="p-4 text-white/60 font-light">O homem é <strong>Animal Político</strong>. A cidade visa o bem viver.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>Legado</strong></td><td class="p-4 text-white/60 font-light">O maior enciclopedista da Antiguidade. Base da filosofia escolástica.</td></tr></tbody></table></div></section>` }}
                    />
                    

                </article>
            </main>

            <Footer />
        </div>
    );
}
