import { Link } from "react-router-dom";
import { ChevronLeft, Landmark, GraduationCap } from "lucide-react";
import { Footer } from "../../../../components/Footer";
import { InfographicZoom } from "../../../../components/InfographicZoom";
import { AnimatedGrid } from "../../../../components/AnimatedGrid";

export function PitágorasDeSamosPage() {
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
                                            src="/img/filosofia/antiga/autores/Pitágoras.webp"
                                            alt="PITÁGORAS DE SAMOS"
                                            className="w-full h-full object-cover md:grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Meta info */}
                            <div className="flex-1 space-y-5 text-center md:text-left">
                                <h1 className="text-4xl md:text-6xl font-sofia-serif font-black text-white italic uppercase tracking-tighter leading-none">
                                    PITÁGORAS DE SAMOS
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                    
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-violet-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📅 Antiguidade</span>
                                </div>
                                <blockquote className="border-l-4 border-violet-500/50 pl-5 py-1 italic text-white/50 font-light">
                                    "O Místico dos Números"
                                </blockquote>
                            </div>
                        </div>
                    </header>

                    {/* ─── CONTENT BODY ─── */}
                    <div
                        className="philosophy-content space-y-10 text-white/70 font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: `<section class="space-y-8">


<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><strong>"O Místico dos Números"</strong> | <strong>Escola Pitagórica</strong><br />> <strong>Período:</strong> c. 570 – c. 495 a.C.<br />> <strong>Local:</strong> Samos (origem) / Crotona (Magna Grécia - Sul da Itália)<br />> <strong>Área:</strong> Metafísica | <strong>Abordagem:</strong> Pitagorismo</blockquote>


</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">1. Biografia e Contexto</h2>

<strong>Pitágoras de Samos</strong> é uma das figuras mais enigmáticas da Antiguidade. Pouco se conhece sobre sua vida, pois não deixou textos escritos. Tudo que se sabe sobre ele era por pequenas sentenças que escrevia como dogmas a serem seguidos. Praticamente todas suas ideias eram expressas dentro da seita da qual foi criador.

Como observou o filósofo grego <strong>Porfírio</strong> em sua <em>Vita Pythagorae</em>:
<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><em>"Ninguém sabe ao certo o que Pitágoras disse a seus colegas, já que eles observavam um silêncio incomum."</em></blockquote>

Estudiosos modernos acreditam que nasceu na ilha de Samos, na costa da atual Turquia. Quando jovem, viajou bastante — provavelmente estudando na <strong>Escola de Mileto</strong> (de Tales) e visitando o <strong>Egito</strong>, centro de ensino onde teria aprendido os rudimentos da geometria. Tal formação o influenciou a abordar o pensamento filosófico de forma científica e matemática.

Com cerca de quarenta anos, estabeleceu uma <strong>comunidade de cerca de trezentas pessoas</strong> em Crotona, no sul da Itália. Seus membros eram iniciados numa mistura de estudos místicos e acadêmicos. Aos sessenta anos, dizem que se casou com uma jovem, <strong>Teano de Crotona</strong>. Uma hostilidade crescente contra o culto pitagórico o forçou a deixar Crotona, e ele fugiu para Metaponto, onde morreu logo depois. Sua comunidade tinha virtualmente desaparecido no final do século IV a.C.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">Anedotas e Poderes Lendários</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Teria uma coxa de ouro.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Foi visto em duas cidades ao mesmo tempo.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Ouviu a "música das esferas" (a harmonia cósmica).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Lembrava-se de suas vidas passadas (como Euforbo, guerreiro de Troia).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Relacionava seus próprios pais a Apolo.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Às vezes conversava com algum animal, afirmando reconhecer nele a alma de um amigo falecido.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">O Filósofo: A Invenção do Termo</h3>
Atribui-se a Pitágoras a criação da palavra <strong>Filosofia</strong>. Ao ser chamado de "sábio" (<em>sophos</em>), teria respondido: "Não sou sábio; apenas Deus é sábio. Eu sou apenas um amante (<em>philos</em>) da sabedoria (<em>sophia</em>)."




</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">3. Filosofia: "Tudo é Número"</h2>


<div class="bg-violet-600/10 border border-violet-500/20 p-8 my-12 relative overflow-hidden group"><div class="relative z-10 text-violet-200 font-light leading-relaxed">O Problema e a Tese<br />> <strong>O problema:</strong> Qual é a estrutura do universo? Em que consiste a harmonia, em particular a harmonia musical? O que é o número?<br />> <br />> <strong>A tese:</strong> Enquanto a escola filosófica de Mileto identificava a <em>arché</em> em um elemento físico e Heráclito localizava-a no devir, Pitágoras acreditava que esse fundamento residia no <strong>número</strong>. No entanto, diferentemente dos modernos, com o termo "número" ele não indicava um ente abstrato, puro conteúdo da mente, mas um <strong>elemento essencial da realidade</strong>. Por isso, o número pitagórico possui também uma dimensão espacial, apresentando-se como um ente intermediário entre a aritmética e a geometria.</div></div>

Pitágoras rompe com os jônicos. O princípio fundamental (<em>Arché</em>) não é um elemento material (água, ar), mas algo <strong>formal</strong> e <strong>estrutural</strong>: o <strong>Número</strong>.

<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><em>"O número é o regente das formas e das ideias."</em> — Pitágoras</blockquote>

Na geometria e na matemática, Pitágoras encontrou verdades que julgou <strong>evidentes por si mesmas</strong>, como se ofertadas pelos deuses, e elaborou demonstrações matemáticas que tivessem o impacto de uma revelação divina.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A. O Número como Princípio Ordenador</h3>
Os Pitagóricos pensavam o número como <strong>matéria ou quantidade acidental e condição das coisas que são</strong>. Eles não consideravam o número separado das coisas, mas diziam que as substâncias perceptíveis dos números são compostas. De números, de fato, concebiam todo o céu — mas não de números formados por unidades sem grandeza, pois <strong>atribuíam grandezas às unidades</strong>.

A ciência dos números pode explicar cada aspecto da realidade:
<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8">"Os Pitagóricos foram os primeiros a dedicar-se às ciências matemáticas, fazendo-as progredir. Como encontraram nessas ciências o próprio nutrimento, foram de opinião de que elas existem e são geradas, e afirmavam que uma determinada propriedade dos números se identifica com a <strong>justiça</strong>, uma outra com a <strong>alma</strong> e com o <strong>intelecto</strong>..."</blockquote>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">B. O Teorema de Pitágoras</h3>

<div class="my-12 flex justify-center"><img src="/img/filosofia/antiga/autores/Pasted image 20251211132237.webp" class="max-w-full h-auto border border-white/5" alt="Ilustração" /></div>

Os egípcios haviam descoberto que um triângulo cujos lados têm a razão de 3:4:5 sempre tem um ângulo reto. Mas Pitágoras descobriu o <strong>princípio fundamental</strong> de todos os triângulos com ângulo reto:

<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><strong>"O quadrado da hipotenusa é igual à soma dos quadrados dos dois catetos."</strong> — Pitágoras</blockquote>

E verificou que isso era <strong>universalmente verdadeiro</strong>. Tal descoberta foi tão extraordinária, e tinha tanto potencial aplicativo, que os pitagóricos consideraram-na uma <strong>revelação divina</strong>.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">C. A Descoberta Musical</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Pitágoras percebeu que os sons harmoniosos dependem de <strong>proporções numéricas</strong> precisas.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Se uma corda vibrante produz uma nota, dividindo-a ao meio (proporção 2:1), produz a mesma nota uma oitava acima.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Outras proporções (3:2, 4:3) geram intervalos musicais agradáveis (quinta, quarta).</li></ul>

Identificaram nos números as propriedades e as relações das harmonias musicais e, finalmente, era evidente para eles que todas as outras coisas tinham nos números o seu fundamento e a sua inteira natureza.

<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><em>"Há geometria no som das cordas, há música no espaçamento das esferas."</em> — Pitágoras</blockquote>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">D. A Natureza dos Números</h3>



Os pitagóricos descobriram os <strong>números quadrados e cúbicos</strong>, mas também atribuíram a eles características simbólicas:

<div class="overflow-x-auto my-12 border border-white/5 bg-white/[0.02] p-4"><table class="w-full text-left text-sm border-collapse"><thead><tr class="border-b border-white/10"><th class="p-4 font-black text-white uppercase tracking-widest">Número</th><th class="p-4 font-black text-white uppercase tracking-widest">Significado Pitagórico</th></tr></thead><tbody><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>1 (Mônada)</strong></td><td class="p-4 text-white/60 font-light">O ponto único, a unidade. Não é par nem ímpar, é "parímpar".</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>2</strong></td><td class="p-4 text-white/60 font-light">A linha. Introduz distinção.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>3</strong></td><td class="p-4 text-white/60 font-light">A superfície ou plano.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>4</strong></td><td class="p-4 text-white/60 font-light">O sólido. Representa a <strong>justiça</strong>.</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light"><strong>10 (Década/Tetraktys)</strong></td><td class="p-4 text-white/60 font-light">Sagrado: 1+2+3+4 = 10. Forma triangular usada em rituais.</td></tr></tbody></table></div>
Elementais do número: supunham o <strong>par</strong> (infinito) e o <strong>ímpar</strong> (finito). Da unidade pensavam que nascesse o número, e que "os números consistem no mundo todo".



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">5. A Doutrina da Alma (Metempsicose)</h2>

Pitágoras foi o primeiro filósofo ocidental a sustentar a teoria da <strong>metempsicose</strong>: a transmigração da alma de um corpo para outro no momento da morte. Devido a uma culpa original, a alma é obrigada a reencarnar em sucessivas substâncias corpóreas (nem sempre humanas, mas também animais), em um ciclo que só é interrompido após a <strong>purificação</strong>. As regras de purificação são aquelas, exclusivamente matemáticas, da harmonia e da proporção.

<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><em>"A razão é imortal, todo o resto é mortal."</em> — Pitágoras</blockquote>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A. A Natureza da Alma (Éter)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">A alma é de origem <strong>divina</strong> e <strong>imortal</strong>.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Os pitagóricos afirmavam que a alma é uma partícula do <strong>éter</strong> frio e do éter quente — é imortal, porque imortal é aquilo do qual se desprendeu.</li></ul>
<em>   O corpo é o <strong>túmulo</strong> (</em>soma = sema*) ou a <strong>prisão</strong> da alma.
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Também o pensamento é constituído de éter: "Invisíveis são a alma e os raciocínios, porque o éter também é invisível."</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">B. A Alma Tripartite</h3>



Diziam que a alma começa no <strong>coração</strong> e chega ao <strong>cérebro</strong>:
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>Coração:</strong> Sede do ânimo (emoções).</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Cérebro:</strong> Sede do intelecto e da mente.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Os sentidos são como gotas que vêm de tais partes.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>A parte racional é imortal</strong>, enquanto as outras são mortais.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">C. A Transmigração</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Após a morte, a alma não desaparece; ela <strong>reencarna</strong> em outro corpo.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Quando a alma é expulsa do corpo, vaga sobre a terra, no ar, semelhante a um corpo.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Hermes</strong> é o guardião das almas, mandando-as para os lugares a elas destinados.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">As almas <strong>purificadas</strong> seguem em direção ao alto; as <strong>impuras</strong> são presas pelas Erínias.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">D. O Ar Cheio de Almas</h3>
Afirmavam que todo o ar está cheio de almas e que tais eram considerados os <strong>demônios e os heróis</strong>; e que por meio delas são mandados os sonhos e os sinais das doenças.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">E. A Purificação da Alma</h3>
1.  <strong>Modo de Vida Ascético:</strong> Dieta vegetariana, abstinência, rituais.
2.  <strong>Contemplação Filosófica:</strong> O estudo da matemática e da música purifica a razão.
3.  <strong>Harmonia Moral:</strong> Viver de acordo com a ordem cósmica (temperança, justiça).

<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8">"A maior realização do homem é levar uma alma para o bem, afastando-se do mal; o homem é feliz se tem uma alma boa, mas ele nunca está tranquilo, nem segue a mesma corrente."</blockquote>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">7. A Tábua dos Opostos (Dualismo)</h2>

O mundo é estruturado por 10 pares de opostos fundamentais:

<div class="overflow-x-auto my-12 border border-white/5 bg-white/[0.02] p-4"><table class="w-full text-left text-sm border-collapse"><thead><tr class="border-b border-white/10"><th class="p-4 font-black text-white uppercase tracking-widest">Positivo (Limitado)</th><th class="p-4 font-black text-white uppercase tracking-widest">Negativo (Ilimitado)</th></tr></thead><tbody><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light">Limite</td><td class="p-4 text-white/60 font-light">Ilimitado</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light">Ímpar</td><td class="p-4 text-white/60 font-light">Par</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light">Uno</td><td class="p-4 text-white/60 font-light">Múltiplo</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light">Direito</td><td class="p-4 text-white/60 font-light">Esquerdo</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light">Masculino</td><td class="p-4 text-white/60 font-light">Feminino</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light">Repouso</td><td class="p-4 text-white/60 font-light">Movimento</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light">Reto</td><td class="p-4 text-white/60 font-light">Curvo</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light">Luz</td><td class="p-4 text-white/60 font-light">Escuridão</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light">Bem</td><td class="p-4 text-white/60 font-light">Mal</td></tr><tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors"><td class="p-4 text-white/60 font-light">Quadrado</td><td class="p-4 text-white/60 font-light">Oblongo</td></tr></tbody></table></div>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">A harmonia resulta da união equilibrada dos opostos.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">A Justiça seria o "número quadrado" (4, 9...): a reciprocidade ("olho por olho").</li></ul>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">9. Legado Filosófico</h2>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A. O Raciocínio Dedutivo</h3>
Pitágoras estabeleceu o princípio do <strong>raciocínio dedutivo</strong>: o processo passo a passo que começa com axiomas evidentes para estabelecer novas conclusões. O raciocínio dedutivo foi mais tarde refinado por <strong>Euclides</strong>, formando a base do pensamento matemático.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">B. O Pensamento Abstrato Superior aos Sentidos</h3>
Uma das contribuições mais importantes de Pitágoras ao desenvolvimento da filosofia foi a ideia de que o <strong>pensamento abstrato é superior à evidência dos sentidos</strong>. Platão retomaria o conceito em sua <strong>Teoria das Formas</strong>, assim como os racionalistas do século XVII.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">C. A Tensão entre Razão e Religião</h3>
A tentativa pitagórica de combinar o racional com o religioso foi <strong>pioneira</strong> ao lidar com um problema que, sob certos aspectos, tem perseguido a filosofia e a religião desde então.

<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><em>"Se Pitágoras de fato foi ou não o criador dessas teorias não importa. O importante, sim, é o profundo efeito delas no pensamento filosófico."</em></blockquote>

 | :--- |
| <strong>Arché</strong> | O <strong>Número</strong>. Princípio formal, não abstrato, mas essencial à realidade. |
| <strong>Número</strong> | Intermediário entre aritmética e geometria. Tem dimensão espacial. |
| <strong>Cosmos</strong> | Universo ordenado, belo e matemático. "Céu inteiro como harmonia e número." |
| <strong>Harmonia</strong> | Expressão das proporções numéricas (música, astros, virtude, saúde). |
| <strong>Alma</strong> | <strong>Imortal</strong>, constituída de éter, sujeita à metempsicose. |
| <strong>Alma Tripartite</strong> | Ânimo (coração, mortal) + Intelecto/Mente (cérebro, imortal). |
| <strong>Corpo</strong> | Prisão/túmulo da alma. |
| <strong>Purificação</strong> | Pelo estudo (matemática/música), vida virtuosa e ritos. |
| <strong>Dualismo</strong> | 10 pares de opostos (Limite/Ilimitado, Bem/Mal, etc.). |
| <strong>Método</strong> | Raciocínio dedutivo. Pensamento abstrato > sentidos. |
| <strong>Legado</strong> | Fundador da tradição matemático-mística ocidental. Influenciou Platão, racionalistas, tabela periódica. |
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
                            <img src="/img/filosofia/antiga/infograficos/Pitágoras.png" alt="Infográfico Pitágoras" class="w-full h-auto hover:scale-[1.02] transition-transform duration-700" />
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
