import { Link } from "react-router-dom";
import { ChevronLeft, Landmark, GraduationCap } from "lucide-react";
import { Footer } from "../../../../components/Footer";
import { InfographicZoom } from "../../../../components/InfographicZoom";
import { AnimatedGrid } from "../../../../components/AnimatedGrid";

export function TalesDeMiletoPage() {
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
                                            src="/img/filosofia/antiga/autores/Tales de Mileto.webp"
                                            alt="TALES DE MILETO"
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
                                    TALES DE MILETO
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                    
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-violet-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📅 c. 624 – c. 546 a.C.</span>
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">📍 Mileto (Jônia - atual Turquia)</span>
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">🎓 Metafísica •</span>
                                </div>
                                <blockquote className="border-l-4 border-violet-500/50 pl-5 py-1 italic text-white/50 font-light">
                                    "O Pai da Filosofia"
                                </blockquote>
                            </div>
                        </div>
                    </header>

                    {/* ─── CONTENT BODY ─── */}
                    <div
                        className="philosophy-content space-y-10 text-white/70 font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: `<section class="space-y-8">


<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8"><strong>"O Pai da Filosofia"</strong> | <strong>Escola Jônica</strong><br />> <strong>Período:</strong> c. 624 – c. 546 a.C.<br />> <strong>Local:</strong> Mileto (Jônia - atual Turquia)<br />> <strong>Área:</strong> Metafísica<br />> <strong>Abordagem:</strong> Monismo</blockquote>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">1. Biografia e Contexto</h2>

<strong>Tales de Mileto</strong> (c. 624 – 546 a.C.) nasceu na cidade jônica de Mileto, na Ásia Menor (costa da atual Turquia). De provável origem fenícia nobre, viveu em um centro comercial cosmopolita, o que lhe permitiu contato com a astronomia babilônica e a matemática egípcia.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">O Contexto Histórico: O Período Arcaico</h3>
Durante o período arcaico (meados do século VIII-VI a.C.), os povos da península grega gradualmente se estabeleceram em um grupo de cidades-estados e desenvolveram um sistema de escrita alfabético, bem como os primórdios do que hoje é reconhecido como filosofia ocidental. As civilizações anteriores se valiam da <strong>religião</strong> para explicar os fenômenos do mundo ao seu redor. Agora, uma nova estirpe de pensadores surgia e tentava encontrar <strong>explicações naturais e racionais</strong>.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">O Nascimento da Filosofia</h3>
Tales é tradicionalmente apontado como o fundador da Escola Jônica e o <strong>primeiro filósofo</strong> do Ocidente por ter sido o primeiro a buscar uma explicação racional e natural (<em>logos</em>) para a origem do universo, rompendo com as narrativas míticas.

Essa maneira prática de pensar levou-o a acreditar que os acontecimentos no mundo <strong>não se deviam à intervenção sobrenatural</strong>, mas tinham causas naturais que a razão e a observação revelariam.

Não deixou escritos; conhecemos seu pensamento somente por meio de testemunhos deixados por outros filósofos. Entre esses, destaca-se <strong>Aristóteles</strong>, que dedicou as primeiras páginas da <em>Metafísica</em> a um breve resumo sobre os pensadores que o precederam.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">Anedotas Célebres</h3>

<div class="my-12 flex justify-center"><img src="/img/filosofia/antiga/autores/Pasted image 20251211151730.webp" class="max-w-full h-auto border border-white/5" alt="Ilustração" /></div>

<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>O Poço:</strong> Teria caído em um poço enquanto caminhava olhando para as estrelas, levando uma serva trácia a zombar dele por querer conhecer o céu sem ver o que estava aos seus pés (a imagem do filósofo "no mundo da lua").</li></ul>

<div class="my-12 flex justify-center"><img src="/img/filosofia/antiga/autores/Pasted image 20251211151749.webp" class="max-w-full h-auto border border-white/5" alt="Ilustração" /></div>

<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>As Prensas de Azeitona:</strong> A partir da observação, Tales deduziu que condições específicas de tempo, e não súplicas aos deuses, levavam a uma boa colheita. Prevendo uma alta produção das oliveiras em certo ano, comprou as moendas de azeitonas da região, obtendo grandes lucros ao alugá-las para satisfazer a demanda crescente — provando que os filósofos podem ser ricos se quiserem, mas que sua <strong>ambição é o conhecimento</strong>.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">Perfil Intelectual</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>Pai da Filosofia:</strong> Título atribuído por Aristóteles ("O primeiro a buscar a causa material das coisas").</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Um dos Sete Sábios:</strong> Figura lendária de sabedoria prática e política na Grécia Antiga.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Polímata:</strong> Atuou como filósofo, astrônomo, matemático, engenheiro e estadista.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Influências:</strong> Viagens ao Egito (geometria) e Babilônia (astronomia).</li></ul>



</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">3. A Água (Hydor) como Arché</h2>

Para Tales, <strong>"Tudo é água"</strong>.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">A. O Testemunho de Aristóteles</h3>
<blockquote class="border-l-4 border-violet-500 pl-8 my-12 py-4 italic text-white/70 text-xl font-light leading-relaxed bg-white/[0.02] pr-8">"Tales diz que esse princípio é a <strong>água</strong> (por isso, afirma que a Terra flutua sobre a água), extraindo sem dúvida essa convicção da constatação de que o alimento de todas as coisas é úmido, e de que até mesmo o quente é gerado do úmido e vive úmido. Ora, aquilo do qual todas as coisas são geradas é, justamente, o princípio de tudo, e <strong>a água é o princípio da natureza das coisas úmidas</strong>."</blockquote>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">B. Justificativas Empíricas</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">A nutrição de todas as coisas é úmida.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">O calor vital nasce da umidade e dela se sustenta.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">As sementes de todas as coisas têm natureza úmida.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">A vida não existe sem água ("Onde há água, há vida; onde não há, há morte/deserto").</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">C. Significado Filosófico</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">A água não é apenas o líquido físico, mas o princípio de <strong>vida</strong>, <strong>movimento</strong> e <strong>transformação</strong>.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">A água tem a capacidade de assumir os três estados (sólido, líquido, gasoso/vapor), sugerindo <strong>versatilidade ontológica</strong>.</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">D. A Terra Flutuante</h3>

<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Imaginava a Terra como um disco plano que flutua sobre um oceano infinito (tal qual um pedaço de madeira).</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Isso explicava terremotos como "agitações" dessa água primordial, e não como ira de Poseidon (<strong>naturalização dos fenômenos</strong>).</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><div class="my-12 flex justify-center"><img src="/img/filosofia/antiga/autores/Pasted image 20251211151559.webp" class="max-w-full h-auto border border-white/5" alt="Ilustração" /></div></li></ul>


</section><section class="space-y-8"><h2 class="text-4xl font-sofia-serif font-black text-white uppercase italic tracking-tighter border-b border-white/5 pb-4 mb-8">5. Contribuições Científicas e Práticas</h2>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">Astronomia</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>Eclipse de 585 a.C.:</strong> Previu um eclipse solar (provavelmente usando tabelas babilônicas), paralisando uma batalha entre Medos e Lídios.</li>
<li class="text-white/60 font-light leading-relaxed mb-2">Determinação dos solstícios e da duração do ano (365 dias).</li></ul>

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">Matemática (Geometria)</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2">Introduziu a geometria egípcia na Grécia, focando na abstração.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Teorema de Tales:</strong> Proporcionalidade de segmentos de reta.</li>
<li class="text-white/60 font-light leading-relaxed mb-2"><strong>Aplicações Práticas:</strong></li></ul>
    *   Mediu a altura das pirâmides do Egito medindo a própria sombra no momento em que ela igualava sua altura.
    *   Calculou a distância de navios no mar usando triangulação.

<h3 class="text-2xl font-sofia-serif font-black text-violet-400 uppercase italic tracking-wider mt-12 mb-6">Engenharia</h3>
<ul class="list-disc list-inside my-8"><li class="text-white/60 font-light leading-relaxed mb-2"><strong>Desvio do Rio Hális:</strong> Teria desviado o curso de um rio para permitir a passagem do exército do rei Creso.</li></ul>

 | :--- |
| <strong>Arché</strong> | <strong>Água</strong>. Substância única, eterna e móvel de onde tudo vem e para onde tudo retorna. |
| <strong>Physis</strong> | A natureza é <strong>compreensível</strong> pela razão humana (não por mitos). |
| <strong>Método</strong> | Observação + Raciocínio. |
| <strong>Naturalismo</strong> | A <em>arché</em> é de ordem material. Causas naturais, não sobrenaturais. |
| <strong>Divindade</strong> | Imanente à matéria ("Tudo cheio de deuses"). |
| <strong>Mudança</strong> | Passagem de um estado a outro da Água (substrato permanente). |
| <strong>Legado</strong> | Abertura do caminho para a investigação científica e racional (<em>Logos</em>). |
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
                            <img src="/img/filosofia/antiga/infograficos/Tales de Mileto.png" alt="Infográfico Tales" class="w-full h-auto hover:scale-[1.02] transition-transform duration-700" />
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
