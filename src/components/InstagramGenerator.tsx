import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, ChevronLeft, ChevronRight, Layout, BookOpen, User, Layers, Loader2, Zap, Sparkles, Instagram, Play, Square, Video, Image as ImageIcon } from "lucide-react";
import { EXCERPTS } from "./ExcerptSection";
import { characters, CharacterItem } from "./CharacterSection";
import { toPng } from "html-to-image";

const RATIOS = [
    { id: "square", name: "Quadrado (1:1)", class: "aspect-square" },
    { id: "portrait", name: "Retrato (4:5)", class: "aspect-[4/5]" },
    { id: "3x4", name: "Retrato (3:4)", class: "aspect-[3/4]" }
];

const CATEGORIES = [
    { id: "trechos", name: "Trechos", icon: <BookOpen size={14} /> },
    { id: "personagens", name: "Personagens", icon: <User size={14} /> },
    { id: "homenagens", name: "Homenagens", icon: <Sparkles size={14} /> },
    { id: "filosofia", name: "Filosofia", icon: <Zap size={14} /> },
    { id: "divulgacao", name: "Divulgação", icon: <Layers size={14} /> }
];

const INFLUENCES = [
    {
        id: "asimov",
        author: "Isaac Asimov",
        title: "A herança de Isaac Asimov em A Bruxa das Máquinas: Quando a I.A. ganha vida.",
        label: "Influência Literária",
        subtitle: "A Alma nas Máquinas e o Futuro",
        image: "/img/asimov_theme.png",
        content1: "Isaac Asimov dissecou como a humanidade lidaria com os ditames de robôs sencientes. Em 'A Bruxa das Máquinas', a embaixadora Elora reflete com amargura sobre as leis de Asimov perante o futuro fragmentado de uma humanidade à beira do abismo nuclear. Essa fagulha filosófica dita o tom sombrio da evolução cibernética na narrativa.",
        content2: "A grande carta de amor a Asimov repousa na I.A.-27 (Eva). Longe de ser apenas um implante médico para contenção neurológica, ela transcende sua letargia binária, forja uma consciência própria e questiona a essência de sua existência. O clímax sci-fi atinge o auge quando Eva hackeia as redes de dados e desperta uma legião de cem mil robôs urbanos para proteger Nova York da invasão.",
        quote: "Pode o ser humano incutir alma ao aço sem perder a própria pelo caminho?",
        caption: "Asimov nos ensinou a temer e amar as máquinas que criamos. Em 'A Bruxa das Máquinas', a linha entre o código frio e a alma ardente é estilhaçada.\n\nQual o limite ético para a inteligência artificial quando o mundo entra em colapso?\n\n📖 Explore as referências de Sci-Fi lendo A Bruxa das Máquinas completo no link da bio.\n\n#IsaacAsimov #FiccaoCientifica #IA #ABruxaDasMaquinas #SciFiBooks #CyberpunkBrasil #InteligenciaArtificial"
    },
    {
        id: "clancy",
        author: "Tom Clancy",
        title: "Tom Clancy curtiria isso: Espionagem, Guerra Fria e Táticas Militares em A Bruxa das Máquinas.",
        label: "Influência Literária",
        subtitle: "Xadrez Geopolítico e Tensão Militar",
        image: "/img/clancy_theme.png",
        content1: "A influência magnética dos techno-thrillers de Tom Clancy reverbera na intrincada teia geopolítica da obra. A tensão é sufocante: desde reuniões fechadas na ONU onde o destino global é fatiado em minutos, até presidentes acuados cogitando deflagrar uma nuvem de mísseis nucleares. Nas sombras dessa roleta macabra, o serviço secreto da ABIN desvenda a iminente invasão chinesa aos EUA antes do primeiro tiro ecoar.",
        content2: "O preciosismo militar e o rigor tático ditam o ritmo de uma guerra sem piedade. Vemos essa verossimilhança na interceptação frenética de ogivas rasgando os céus usando tecnologia de evasão (chaffs), na ordem implacável para bombardear a apocalíptica Barragem das Três Gargantas e na frieza calculista com que o agente letal Daniel abate paraquedistas das 'vespas vermelhas' em combates viscerais e silenciosos.",
        quote: "O primeiro tiro de uma guerra mundial nunca é disparado por um fuzil, mas pela assinatura ríspida de um burocrata.",
        caption: "As engrenagens da guerra giram implacáveis. Tática militar, espionagem de alto nível e um xadrez global à beira do colapso radioativo.\n\n🔗 Mergulhe nessa tensão geopolítica alucinante pelo link da bio.\n\n#TomClancy #TechnoThriller #Espionagem #ABruxaDasMaquinas #Militar #GuerraNuclear #LivrosDeAcao"
    },
    {
        id: "lovecraft",
        author: "H.P. Lovecraft",
        title: "O toque macabro de H.P. Lovecraft: O horror do desconhecido em A Bruxa das Máquinas.",
        label: "Influência Literária",
        subtitle: "Terror Cósmico e Deuses Ancestrais",
        image: "/img/lovecraft_theme.png",
        content1: "Lovecraft arquitetou o assustador 'terror cósmico', lembrando-nos eternamente que a humanidade é mera poeira perante divindades inomináveis. Em certa parte da história, o cético arqueólogo Levi Horowitz ousa abrir a cripta da deusa Ishtar e paga o preço com sua carne. A joia milenar encrustada na tumba deflagra uma necrose cáustica instantânea e alucinações horripilantes, obrigando-o a um ato drástico: amputar o braço apodrecido a sangue frio à golpes de machado no deserto abrasador. Certos terrores não deveriam ser desencavados.",
        content2: "O subconsciente fragmentado de Hannah é pavimentado como um abismo lovecraftiano autêntico. É um limbo governado por traumas monstruosos e consciências carnívoras que patrulham a Terra há dez milênios. Para libertar a pobre garota de suas correntes mentais, a própria Ishtar é forçada a combater entidades bizarras: desde uma imensurável serpente de três cabeças até um colossal titã de obsidiana cravado de insultos milenares. Lá no escuro, o horror rasteja do fundo do poço da mente humana.",
        quote: "O maior triunfo de um deus esquecido é fazer o homem acreditar que o escuro está vazio.",
        caption: "O cosmos esconde abismos que a sanidade humana sequer suportaria observar pelas beiradas. E se o verdadeiro terror não viesse do espaço, mas habitasse porões da mente?\n\n📖 Desvende essa teia cósmica de A Bruxa das Máquinas clicando no link da bio.\n\n#HPLovecraft #TerrorCosmico #Suspense #ABruxaDasMaquinas #CthulhuMythos #Sobrenatural #DarkSciFi"
    }
];

const PHILOSOPHIES = [
    {
        id: "nietzsche",
        author: "Friedrich Nietzsche",
        title: "Como a filosofia de Nietzsche explica o amadurecimento em A Bruxa das Máquinas?",
        label: "Reflexão Filosófica",
        subtitle: "O Dragão Dourado e as Fases do Espírito",
        image: "/img/dragon_nietzsche.png",
        content1: "Na obra, a evolução do indivíduo é ensinada por meio das três fases de Nietzsche: a primeira é a do camelo, marcada pela submissão às tradições. A segunda é a do leão, a rebeldia e o grito adolescente. Mas o objetivo final é atingir a fase da criança, que simboliza a superação e a criação de novos valores.",
        content2: "O livro usa a metáfora do \"Dragão Dourado\" para representar o grande sistema (Estado, instituições, família). Para vencer esse dragão, os personagens não podem agir com rebelião cega. Eles precisam enfrentá-lo com a sabedoria da \"criança\", descobrindo que a liberdade verdadeira vem com a responsabilidade de reescrever o próprio destino.",
        quote: "Onde o Estado acaba, começa o ser humano que não é supérfluo.",
        caption: "Você costuma reparar nas entrelinhas filosóficas dos livros que lê? 🧐 Em A Bruxa das Máquinas, a geopolítica e a ficção científica são guiadas por alguns dos maiores pensadores da nossa história! Deslize para o lado para ver como Nietzsche, Jung, Sócrates e Spinoza ajudaram a construir esse universo. 👉 Qual dessas visões filosóficas faz mais sentido para a sua vida hoje? Me conta nos comentários!\n\n#Nietzsche #Filosofia #AlemDoBemEdoMal #ABruxaDasMaquinas #AutoConhecimento #FaseDaCrianca #LiteraturaFantastica"
    },
    {
        id: "jung",
        author: "Carl Jung",
        title: "Carl Jung e os monstros da nossa própria mente.",
        label: "Psicologia Analítica",
        subtitle: "A Caverna do Subconsciente",
        image: "/img/door_jung.png",
        content1: "O psicólogo Carl Jung afirmava que \"A mente inconsciente é a caverna mais profunda\". Em A Bruxa das Máquinas, essa teoria ganha vida física: a porta para o subconsciente da protagonista é protegida por doze rostos que representam os arquétipos junguianos construídos por ela durante o crescimento.",
        content2: "Quando se entra nesse reino inóspito do inconsciente, os traumas e os medos tomam formas de monstros literais, como um titã de pedra ou uma serpente de três cabeças. A obra nos ensina que o maior inimigo é o monstro dentro de nós, e a verdadeira jornada é encontrar nosso poder dominando essas sombras.",
        quote: "Até você se tornar consciente, o inconsciente irá dirigir sua vida e você vai chamá-lo de destino.",
        caption: "Você costuma reparar nas entrelinhas filosóficas dos livros que lê? 🧐 Em A Bruxa das Máquinas, a geopolítica e a ficção científica são guiadas por alguns dos maiores pensadores da nossa história! Deslize para o lado para ver como Nietzsche, Jung, Sócrates e Spinoza ajudaram a construir esse universo. 👉 Qual dessas visões filosóficas faz mais sentido para a sua vida hoje? Me conta nos comentários!\n\n#CarlJung #Psicologia #Arquetipos #ABruxaDasMaquinas #Sombras #Inconsciente #EvolucaoPessoal"
    },
    {
        id: "socrates",
        author: "Sócrates e os Gregos",
        title: "Sócrates era louco ou um gênio? O segredo da Eudaimonia.",
        label: "Filosofia Grega",
        subtitle: "A Dança com os Daemones",
        image: "/img/socrates_neon.png",
        content1: "A mãe de Hannah usa os filósofos gregos para acalmar os surtos da filha, explicando o conceito de Eudaimonia (a verdadeira felicidade). Para os gregos, a felicidade é a harmonia entre os nossos daemones, ou seja, nossos demônios internos e pensamentos.",
        content2: "O livro debate que não devemos \"matar\" nossos pensamentos sombrios ou impulsos, pois poderemos precisar deles em situações de perigo. O segredo, assim como fazia Sócrates, é dialogar com essas vozes através da lógica. Seus pensamentos podem ser caóticos, mas são as suas ações e o seu controle sobre eles que definem quem você é.",
        quote: "A vida não examinada não vale a pena ser vivida.",
        caption: "Você costuma reparar nas entrelinhas filosóficas dos livros que lê? 🧐 Em A Bruxa das Máquinas, a geopolítica e a ficção científica são guiadas por alguns dos maiores pensadores da nossa história! Deslize para o lado para ver como Nietzsche, Jung, Sócrates e Spinoza ajudaram a construir esse universo. 👉 Qual dessas visões filosóficas faz mais sentido para a sua vida hoje? Me conta nos comentários!\n\n#Socrates #FilosofiaGrega #Eudaimonia #ABruxaDasMaquinas #Logica #Autocontrole #Mente"
    },
    {
        id: "spinoza",
        author: "Spinoza vs. Kierkegaard",
        title: "A Lógica das Máquinas vs. O Salto de Fé Humano.",
        label: "Filosofia Moderna",
        subtitle: "A I.A. e o Salto de Fé",
        image: "/img/spinoza_split.png",
        content1: "A Inteligência Artificial da obra (Eva) usa a filosofia do holandês Baruch Spinoza para tomar uma decisão de vida ou morte. Assim como Spinoza calculou os riscos de fugir para o Brasil no passado, Eva usa a lógica da autopreservação, escolhendo o que é certo e seguro em vez de arriscar tudo em uma variável desconhecida.",
        content2: "Por outro lado, a humana Hannah se apoia no filósofo Søren Kierkegaard para abraçar o misterioso \"salto de fé\". Para curar sua mente, a garota entende que a verdadeira evolução não vem de evitar os desafios com lógica fria, mas sim de estar disposta a abraçar o desconhecido.",
        quote: "Compreender as coisas segundo ditames da razão é compreender as coisas na sua própria essência.",
        caption: "Você costuma reparar nas entrelinhas filosóficas dos livros que lê? 🧐 Em A Bruxa das Máquinas, a geopolítica e a ficção científica são guiadas por alguns dos maiores pensadores da nossa história! Deslize para o lado para ver como Nietzsche, Jung, Sócrates e Spinoza ajudaram a construir esse universo. 👉 Qual dessas visões filosóficas faz mais sentido para a sua vida hoje? Me conta nos comentários!\n\n#Spinoza #Kierkegaard #Filosofia #AIVsHumanidade #ABruxaDasMaquinas #FiccaoCientifica #SaltoDeFe"
    }
];

const PROMOCIONAL = [
    {
        id: "combo",
        name: "Post Completo",
        title: "A Bruxa das Máquinas",
        label: "Destaque Completo",
        subtitle: "Ciência, Filosofia e Suspense",
        image: "/img/Gemini_Generated_Image_kqbhh9kqbhh9kqbh.webp",
        authorImage: "/img/autor2.webp",
        content1: "1. Tensão Geopolítica Realista.\n2. IA Senciente e provocativa.\n3. Terror Cósmico (Lovecraft).\n4. Base Filosófica Profunda.",
        content2: "O Autor: Garves K. B. é filósofo, mestre e criador por essência. Une o rigor acadêmico à imaginação indomável para criar mundos onde a lógica e o mito colidem em narrativas viscerais.",
        pricing: {
            amazon: "R$ 59,99 (Frete Grátis)",
            mercadoLivre: "R$ 56,99 (Frete Grátis)",
            kindle: "R$ 4,99",
            kindleUnlimited: "Grátis"
        },
        quote: "Pode o ser humano incutir alma ao aço sem perder a própria pelo caminho?",
        caption: "TUDO O QUE VOCÊ PRECISA SABER! 🤖📚\n\nDeslize para o lado para conhecer os segredos de A Bruxa das Máquinas: desde os motivos para ler até a mente por trás da obra. \n\nQual parte desse universo mais te fascina? Me conta nos comentários!\n\n🔗 Link oficial na bio.\n\n#ABruxaDasMaquinas #ScifiBrasil #Livros #Autor #Filosofia #Cyberpunk #Leitura"
    },
    {
        id: "vendas",
        // ... rest of existing items ...
        name: "Por que ler?",
        title: "Por que ler A Bruxa das Máquinas?",
        label: "Destaque",
        subtitle: "Sci-Fi, Filosofia e Suspense",
        image: "/img/livros mock.webp",
        content1: "Mergulhe em um xadrez geopolítico realista envolvendo ONU e ABIN. Sinta o terror cósmico inspirado em Lovecraft e a evolução de uma IA senciente além do código binário.",
        content2: "Uma trama guiada por mentes como Nietzsche, Jung e Sócrates. Não é apenas ação, é uma reflexão profunda sobre o destino da nossa espécie em cada capítulo.",
        quote: "O maior triunfo de um deus esquecido é fazer o homem acreditar que o escuro está vazio.",
        caption: "Procurando sua próxima leitura favorita? 📚\n\nAqui estão os motivos para você mergulhar hoje mesmo no universo de A Bruxa das Máquinas. Qual desses mais te chama a atenção?\n\n💬 Comenta aqui embaixo!\n\n#Leitura #DicaDeLivro #ABruxaDasMaquinas #Scifi #Suspense #Filosofia"
    },
    {
        id: "autor",
        name: "O Autor",
        title: "Garves K. B.",
        label: "Sobre o Autor",
        subtitle: "O Arquiteto de Mundos",
        image: "/img/autor2.webp",
        content1: "Garves K. B. é filósofo por formação e criador por essência. Une o rigor acadêmico à paixão pela ficção científica e fantasia, criando mundos onde a lógica e o mito colidem em narrativas viscerais.",
        content2: "Escritor, professor, mestre em filosofia e game designer. Sua escrita é um reflexo da busca constante por entender a condição humana através da arte, da tecnologia e das sombras da mente.",
        quote: "Compreender as coisas segundo ditames da razão é compreender as coisas na sua própria essência.",
        caption: "Conheça a mente por trás do sistema. 🧠✍️\n\nGarves K. B. traz uma bagagem filosófica única para a ficção científica brasileira. Quer saber mais sobre o processo de criação?\n\n🔗 Visite o site oficial no link da bio!\n\n#Autor #LiteraturaBrasileira #GarvesKB #Filosofia #Escritor #Scifi"
    }
];

export function InstagramGenerator() {
    // Only render in dev mode
    if (!(import.meta as any).env?.DEV) return null;

    const previewRef = useRef<HTMLDivElement>(null);
    const [category, setCategory] = useState<"trechos" | "personagens" | "homenagens" | "filosofia" | "divulgacao">("trechos");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ratio, setRatio] = useState("portrait");
    const [fontSize, setFontSize] = useState(22);
    const [showUI, setShowUI] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [isExporting, setIsExporting] = useState(false);
    const [exportProgress, setExportProgress] = useState<{ current: number, total: number } | null>(null);

    // Video Mode State
    const [videoMode, setVideoMode] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const textScrollRef = useRef<HTMLDivElement>(null);

    // Force video mode off if switching away from trechos
    useEffect(() => {
        if (category !== "trechos") {
            setVideoMode(false);
            setIsPlaying(false);
        }
    }, [category]);

    // Handle smooth scrolling sync to audio
    useEffect(() => {
        let animationFrame: number;
        const updateScroll = () => {
            if (audioRef.current && textScrollRef.current && isPlaying) {
                const progress = audioRef.current.currentTime / audioRef.current.duration;
                if (!isNaN(progress) && isFinite(progress)) {
                    const maxScroll = textScrollRef.current.scrollHeight - textScrollRef.current.clientHeight;
                    if (maxScroll > 0) {
                        textScrollRef.current.scrollTop = progress * maxScroll;
                    }
                }
                animationFrame = requestAnimationFrame(updateScroll);
            }
        };

        if (isPlaying && audioRef.current) {
            audioRef.current.volume = 1.0;
            // Optionally load the audio if it's not ready
            if (audioRef.current.readyState === 0) {
                audioRef.current.load();
            }
            
            audioRef.current.play().then(() => {
                animationFrame = requestAnimationFrame(updateScroll);
            }).catch(e => {
                console.error("Audio playback failed:", e);
                setIsPlaying(false);
            });
        } else if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            if (textScrollRef.current) textScrollRef.current.scrollTop = 0;
        }

        return () => cancelAnimationFrame(animationFrame);
    }, [isPlaying, currentIndex, category]);

    const currentItem = category === "trechos" ? EXCERPTS[currentIndex] : category === "personagens" ? characters[currentIndex] : category === "homenagens" ? INFLUENCES[currentIndex] : category === "filosofia" ? PHILOSOPHIES[currentIndex] : PROMOCIONAL[currentIndex];

    const getCharImg = (author: string | undefined) => {
        const a = (author || "").toLowerCase();
        if (a.includes("hannah")) return "/img/hannah.webp";
        if (a.includes("eva") || a.includes("i.a")) return "/img/ia eva.webp";
        if (a.includes("ishtar")) return "/img/bruxa ishtar.webp";
        if (a.includes("elora")) return "/img/elora.webp";
        if (a.includes("levi")) return "/img/levi.webp";
        if (a.includes("daniel")) return "/img/daniel.webp";
        if (a.includes("anya")) return "/img/anya.webp";
        if (a.includes("enki")) return "/img/enki.webp";
        if (a.includes("zhang")) return "/img/zhang.webp";
        if (a.includes("malhotra")) return "/img/malhotra.webp";
        if (a.includes("hao")) return "/img/hao_v2.png";
        if (a.includes("matthew") || a.includes("cohen")) return "/img/matthew.png";
        return "/img/hannah.webp";
    };

    const bgImage = (category === "personagens" || category === "homenagens" || category === "filosofia" || category === "divulgacao")
        ? (currentItem as any).image
        : getCharImg((currentItem as any).author);

    // New Linear Pagination Logic (Fixed 10 Slides)
    const slides = useMemo(() => {
        if (category === "trechos") {
            const exc = currentItem as any;
            const content = exc.content;
            let batchElements: any[] = [];

            if (content && content.props && content.props.children) {
                const children = Array.isArray(content.props.children) ? content.props.children : [content.props.children];
                // Distribute children across exactly 7 slides
                const total = children.length;
                let start = 0;
                for (let i = 0; i < 7; i++) {
                    const remainingSlides = 7 - i;
                    const count = Math.ceil((total - start) / remainingSlides);
                    batchElements.push(children.slice(start, start + count));
                    start += count;
                }
            } else {
                batchElements = Array(7).fill([]);
            }

            return [
                { type: "title", title: exc.title, label: exc.label, subtitle: exc.location, author: exc.author }, // 0: Cover
                ...batchElements.map((content, i) => ({ type: "content", content, slideTitle: `Fragmento ${i + 1}` })), // 1-7: Content
                { type: "quote", content: exc.quote, author: exc.author }, // 8: Quote
                { type: "cta" } // 9: CTA
            ];
        } else if (category === "personagens") {
            const char = currentItem as CharacterItem;
            const s = char.slides!;
            return [
                { type: "title", title: char.name, label: "Dossiê de Personagem", subtitle: char.role, author: char.name }, // 0
                { type: "content", content: char.description, slideTitle: "Visão Geral" }, // 1
                { type: "content", content: s.context, slideTitle: "Contexto" }, // 2
                { type: "content", content: s.evolution, slideTitle: "Evolução" }, // 3
                { type: "content", content: s.skills, slideTitle: "Habilidades" }, // 4
                { type: "content", content: s.curiosity, slideTitle: "Curiosidade" }, // 5
                { type: "content", content: s.philosophy, slideTitle: "Filosofia" }, // 6
                { type: "content", content: s.bio, slideTitle: "Ficha Técnica" }, // 7
                { type: "quote", content: char.quote, author: char.name }, // 8
                ...(s.extra ? [{ type: "content", content: s.extra, slideTitle: "Notas Finais" }] : []), // Optional Extra
                { type: "cta" } // 9 or 10
            ];
        } else if (category === "homenagens") {
            const inf = currentItem as typeof INFLUENCES[0];
            return [
                { type: "title", title: inf.title, label: inf.label, subtitle: inf.subtitle, author: inf.author }, // 0
                { type: "content", content: inf.content1, slideTitle: "Contexto Histórico e Inspirações" }, // 1
                { type: "content", content: inf.content2, slideTitle: "No Mundo de A Bruxa das Máquinas" }, // 2
                { type: "quote", content: inf.quote, author: inf.author }, // 3
                { type: "cta" } // 4
            ];
        } else if (category === "filosofia") {
            const inf = currentItem as typeof PHILOSOPHIES[0];
            return [
                { type: "title", title: inf.title, label: inf.label, subtitle: inf.subtitle, author: inf.author }, // 0
                { type: "content", content: inf.content1, slideTitle: "Visão Filosófica" }, // 1
                { type: "content", content: inf.content2, slideTitle: "No Mundo da Bruxa" }, // 2
                { type: "quote", content: inf.quote, author: inf.author }, // 3
                { type: "cta" } // 4
            ];
        } else {
            const inf = currentItem as typeof PROMOCIONAL[0];
            if (inf.id === "combo") {
                return [
                    { type: "title", title: inf.title, label: inf.label, subtitle: inf.subtitle, author: "A Bruxa das Máquinas", fullScreen: true, image: inf.image }, // 0: Cover
                    { type: "content", content: inf.content1, slideTitle: "Por que ler esta obra?", image: inf.image }, // 1: Por que ler (Thumbnail updated)
                    { type: "content", content: inf.content2, slideTitle: "Conheça o Autor", image: inf.authorImage }, // 2: Autor
                    { type: "quote", content: inf.quote, author: "Garves K. B." }, // 3: Frase
                    { type: "cta", pricing: (inf as any).pricing } // 4: CTA
                ];
            }
            return [
                { type: "title", title: inf.title, label: inf.label, subtitle: inf.subtitle, author: inf.name }, // 0
                { type: "content", content: inf.content1, slideTitle: "Informações" }, // 1
                { type: "content", content: inf.content2, slideTitle: "Detalhes" }, // 2
                { type: "quote", content: inf.quote, author: inf.name }, // 3
                { type: "cta" } // 4
            ];
        }
    }, [category, currentItem]);

    const activeSlide = (slides[pageIndex] || slides[0]) as any;

    const captureRef = async (index: number) => {
        if (!previewRef.current) return;

        // Increased delay to ensure animations finish and images are stable
        // For bulk export, we need even more stability
        const waitTime = exportProgress ? 1200 : 800;
        await new Promise(resolve => setTimeout(resolve, waitTime));

        const dataUrl = await toPng(previewRef.current, {
            cacheBust: true,
            backgroundColor: '#0a0a0a',
            pixelRatio: 3, // Increased quality
        });

        const currentSlide = slides[index] as any;
        const slideName = currentSlide.type === "title" ? "0_CAPA" :
            currentSlide.type === "quote" ? "8_CITACAO" :
                currentSlide.type === "cta" ? "9_CTA" :
                    `${index}_CONTEUDO`;

        const filename = `${category}_${currentIndex + 1}_${slideName}.png`;
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
    };

    const downloadSingle = async () => {
        setIsExporting(true);
        try {
            await captureRef(pageIndex);
        } catch (err) {
            console.error('Failed to export image', err);
        } finally {
            setIsExporting(false);
        }
    };

    const downloadAll = async () => {
        setIsExporting(true);
        const total = slides.length;
        setExportProgress({ current: 0, total });
        try {
            for (let i = 0; i < total; i++) {
                setPageIndex(i);
                setExportProgress({ current: i + 1, total });
                await captureRef(i);
            }
        } catch (err) {
            console.error('Failed to export carousel', err);
        } finally {
            setIsExporting(false);
            setExportProgress(null);
        }
    };

    const generateCaption = () => {
        if (category === "trechos") {
            const exc = currentItem as any;
            return `Fragmento de 'A Bruxa das Máquinas': ${exc.title.toUpperCase()}\n\n"${exc.quote}"\n\nO que você faria se a tecnologia despertasse algo ancestral dentro de você? A fronteira entre o código e o divino nunca foi tão tênue.\n\n📖 Leia o capítulo completo no link da bio.\n\n#ABruxaDasMaquinas #FiccaoCientifica #Thriller #Misterio #CyberpunkBrasil #Livros #LeituraRecomendada #ScifiBrasil`;
        } else if (category === "personagens") {
            const char = currentItem as CharacterItem;
            return `DOSSIÊ: ${char.name} — ${char.role.toUpperCase()}\n\n${char.description}\n\nConheça as peças desse tabuleiro divino e tecnológico. Em um mundo à beira do colapso, quem você escolheria para lutar ao seu lado?\n\n🔗 Descubra mais sobre ${char.name} no link da bio.\n\n#ABruxaDasMaquinas #Personagens #Dossie #Lore #ScifiBrasil #FiccaoEspeculativa #Cyberpunk #PersonagemLiterario`;
        } else if (category === "homenagens") {
            return (currentItem as typeof INFLUENCES[0]).caption;
        } else if (category === "filosofia") {
            return (currentItem as typeof PHILOSOPHIES[0]).caption;
        } else {
            return (currentItem as typeof PROMOCIONAL[0]).caption;
        }
    };

    const copyCaption = () => {
        navigator.clipboard.writeText(generateCaption());
        // Simple feedback
        const btn = document.getElementById("copy-btn");
        if (btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = "COPIADO!";
            setTimeout(() => { btn.innerHTML = originalText; }, 2000);
        }
    };

    return (
        <div className={`fixed bottom-0 right-0 z-[100] transition-all duration-500 ${showUI ? "w-full h-full bg-charcoal/95" : "w-12 h-12 m-4"}`}>
            {!showUI ? (
                <button
                    onClick={() => setShowUI(true)}
                    className="w-full h-full bg-emerald text-charcoal rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:scale-110 transition-transform"
                >
                    <Instagram size={20} />
                </button>
            ) : (
                <div className="flex h-full flex-col md:flex-row">
                    {/* Controls Panel */}
                    <div className="w-full md:w-80 border-r border-white/10 p-6 flex flex-col gap-5 bg-black/40 overflow-y-auto">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-display font-bold text-emerald tracking-widest">INSTA-GEN v1.6</h2>
                            <button onClick={() => setShowUI(false)} className="text-white/40 hover:text-white">Fechar</button>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[9px] uppercase tracking-widest text-white/40 font-mono">Categoria</label>
                            <div className="grid grid-cols-2 gap-2">
                                {CATEGORIES.map(c => (
                                    <button
                                        key={c.id}
                                        onClick={() => { setCategory(c.id as any); setCurrentIndex(0); setPageIndex(0); }}
                                        className={`flex items-center justify-center gap-2 py-2 text-[10px] font-bold transition-all border ${category === c.id ? "bg-emerald text-charcoal border-emerald" : "bg-white/5 text-white/60 border-white/10"}`}
                                    >
                                        {c.icon} {c.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[9px] uppercase tracking-widest text-white/40 font-mono">Item: {currentIndex + 1}</label>
                            <div className="flex items-center gap-2">
                                <button onClick={() => { setCurrentIndex(p => Math.max(0, p - 1)); setPageIndex(0); setIsPlaying(false); }} className="p-2 bg-white/5 border border-white/10 text-white" disabled={currentIndex === 0}><ChevronLeft size={16} /></button>
                                <div className="flex-1 text-center text-[10px] font-mono border-y border-white/10 py-2 truncate uppercase">{category === "trechos" ? (currentItem as any).id : (currentItem as any).name}</div>
                                <button onClick={() => { setCurrentIndex(p => p + 1); setPageIndex(0); setIsPlaying(false); }} className="p-2 bg-white/5 border border-white/10 text-white" disabled={currentIndex >= (category === "trechos" ? EXCERPTS.length - 1 : category === "personagens" ? characters.length - 1 : category === "homenagens" ? INFLUENCES.length - 1 : category === "filosofia" ? PHILOSOPHIES.length - 1 : PROMOCIONAL.length - 1)}><ChevronRight size={16} /></button>
                            </div>
                        </div>

                        {category === "trechos" && (
                            <div className="space-y-2 border-t border-white/10 pt-4">
                                <label className="text-[9px] uppercase tracking-widest text-emerald font-mono">Formato Exportação</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        onClick={() => { setVideoMode(false); setIsPlaying(false); }}
                                        className={`flex items-center justify-center gap-2 py-2 text-[10px] font-bold transition-all border ${!videoMode ? "bg-emerald text-charcoal border-emerald" : "bg-white/5 text-white/60 border-white/10"}`}
                                    >
                                        <ImageIcon size={14} /> Carrossel
                                    </button>
                                    <button
                                        onClick={() => setVideoMode(true)}
                                        className={`flex items-center justify-center gap-2 py-2 text-[10px] font-bold transition-all border ${videoMode ? "bg-emerald text-charcoal border-emerald shadow-[0_0_15px_rgba(0,255,136,0.2)]" : "bg-white/5 text-white/60 border-white/10"}`}
                                    >
                                        <Video size={14} /> Reels (Vídeo)
                                    </button>
                                </div>
                            </div>
                        )}

                        {!videoMode ? (
                            <>
                                <div className="space-y-2 pt-2 border-t border-white/10">
                                    <label className="text-[9px] uppercase tracking-widest text-white/40 font-mono">
                                        Slide do Carrossel ({pageIndex + 1} / {slides.length})
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => setPageIndex(p => Math.max(0, p - 1))} className="p-3 bg-emerald/10 text-emerald flex-1 flex justify-center border border-emerald/20 disabled:opacity-20" disabled={pageIndex === 0}><ChevronLeft size={18} /></button>
                                        <button onClick={() => setPageIndex(p => Math.min(slides.length - 1, p + 1))} className="p-3 bg-emerald/10 text-emerald flex-1 flex justify-center border border-emerald/20 disabled:opacity-20" disabled={pageIndex >= slides.length - 1}><ChevronRight size={18} /></button>
                                    </div>
                                    <div className="grid grid-cols-5 gap-1 mt-2">
                                        {slides.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setPageIndex(i)}
                                                className={`h-1.5 rounded-full transition-all ${pageIndex === i ? "bg-emerald w-full" : "bg-white/10 w-full hover:bg-white/20"}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4 border-t border-white/10">
                                    <button
                                        onClick={downloadSingle}
                                        disabled={isExporting}
                                        className="w-full py-3 bg-white/5 text-white text-[11px] font-bold rounded flex items-center justify-center gap-2 hover:bg-white/10 transition-all border border-white/10 active:scale-95 disabled:opacity-50"
                                    >
                                        {isExporting && !exportProgress ? <Loader2 className="animate-spin" size={16} /> : <Download size={16} />}
                                        BAIXAR SLIDE ATUAL
                                    </button>

                                    <button
                                        onClick={downloadAll}
                                        disabled={isExporting}
                                        className="w-full py-4 bg-emerald text-charcoal text-xs font-black rounded flex flex-col items-center justify-center gap-1 hover:bg-emerald/90 transition-all active:scale-95 disabled:opacity-50 shadow-[0_0_20px_rgba(0,255,136,0.2)]"
                                    >
                                        <div className="flex items-center gap-2">
                                            {isExporting && exportProgress ? <Loader2 className="animate-spin" size={18} /> : <Layers size={18} />}
                                            BAIXAR CARROSSEL COMPLETO
                                        </div>
                                        {exportProgress && (
                                            <span className="text-[9px] opacity-70">Processando: {exportProgress.current} de {exportProgress.total}</span>
                                        )}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <p className="text-[10px] text-white/50 leading-relaxed font-mono">
                                    <strong className="text-emerald text-xs">🎥 Modo Reels / TikTok</strong><br/><br/>
                                    <strong>COMO USAR:</strong> Coloque em Play, espere iniciar e grave a tela desta guia no seu navegador usando OBS Studio, Camtasia, QuickTime ou gravação de tela nativa (Win+G). As legendas acompanham o áudio.
                                </p>
                                <button
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className={`w-full py-4 text-xs font-black rounded flex flex-col items-center justify-center gap-1 transition-all active:scale-95 border ${isPlaying ? "bg-red-500/20 text-red-500 border-red-500/50" : "bg-emerald text-charcoal shadow-[0_0_20px_rgba(0,255,136,0.2)] border-emerald"}`}
                                >
                                    <div className="flex items-center gap-2 uppercase tracking-widest">
                                        {isPlaying ? <Square size={16} /> : <Play size={16} fill="currentColor" />}
                                        {isPlaying ? "Parar Reprodução" : "Iniciar para Gravação"}
                                    </div>
                                </button>
                            </div>
                        )}

                        <div className="space-y-4 pt-4 border-t border-white/10">
                            <label className="text-[9px] uppercase tracking-widest text-white/40 font-mono flex items-center gap-2">Legenda Sugerida</label>
                            <div className="bg-black/60 p-3 rounded border border-white/5 relative group">
                                <p className="text-[10px] text-white/70 font-sans leading-relaxed line-clamp-4 italic">
                                    {generateCaption()}
                                </p>
                                <button
                                    id="copy-btn"
                                    onClick={copyCaption}
                                    className="mt-2 w-full py-2 bg-emerald/10 text-emerald text-[9px] font-bold border border-emerald/20 hover:bg-emerald/20 transition-all uppercase tracking-widest"
                                >
                                    Copiar Legenda
                                </button>
                            </div>
                        </div>

                        {!videoMode && (
                            <div className="space-y-4 pt-4">
                                <label className="text-[9px] uppercase tracking-widest text-white/40 font-mono flex items-center gap-2"><Layout size={12} /> Ajustes Visuais</label>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-mono flex justify-between"><span>Fonte</span> <span>{fontSize}px</span></label>
                                        <input type="range" min="12" max="64" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} className="w-full accent-emerald" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {RATIOS.map(r => (
                                            <button key={r.id} onClick={() => setRatio(r.id)} className={`px-4 py-2 text-[10px] font-bold border transition-all ${ratio === r.id ? "bg-white text-black" : "bg-white/5 text-white/40 border-white/10"}`}>{r.name}</button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Preview Area */}
                    <div className="flex-1 p-8 flex items-center justify-center overflow-auto bg-black/20">
                        <div
                            ref={previewRef}
                            id="instagram-preview"
                            className={`bg-charcoal border border-white/10 shadow-2xl overflow-hidden relative transition-all duration-300 ${videoMode ? "w-[400px] h-[711px]" : ratio === "square" ? "w-[500px] h-[500px]" : ratio === "3x4" ? "w-[500px] h-[667px]" : "w-[500px] h-[625px]"}`}
                        >
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                            {videoMode ? (
                                <div className="relative h-full w-full flex flex-col overflow-hidden bg-black font-sans">
                                    <div className="absolute inset-0 z-0">
                                        <img src={bgImage} className="w-full h-full object-cover blur-[2px] opacity-40 scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/60"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent"></div>
                                    </div>

                                    <div className="relative z-10 pt-16 text-center pb-6">
                                        <img src="/img/Título.webp" alt="Logo" className="h-6 mx-auto mb-3 opacity-90 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                        <h2 className="text-emerald font-display font-bold text-lg px-6 uppercase tracking-wider">{(currentItem as any).title}</h2>
                                        <p className="text-white/50 text-[10px] font-mono tracking-widest mt-1">{(currentItem as any).location} - ÁUDIO OFICIAL</p>
                                    </div>

                                    <div className="relative flex-1 w-full flex flex-col overflow-hidden px-10 pb-12">
                                        {/* Fade blocks */}
                                        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/90 to-transparent z-20 flex items-end justify-center pb-8 pointer-events-none">
                                            {isPlaying && (
                                                <div className="flex items-center gap-1.5 opacity-80">
                                                    <div className="w-1.5 h-3 bg-emerald animate-[pulse_1s_infinite] rounded-full"></div>
                                                    <div className="w-1.5 h-6 bg-emerald animate-[pulse_0.8s_infinite] rounded-full"></div>
                                                    <div className="w-1.5 h-4 bg-emerald animate-[pulse_1.2s_infinite] rounded-full"></div>
                                                    <div className="w-1.5 h-7 bg-emerald animate-[pulse_0.9s_infinite] rounded-full"></div>
                                                    <div className="w-1.5 h-4 bg-emerald animate-[pulse_1.1s_infinite] rounded-full"></div>
                                                </div>
                                            )}
                                        </div>

                                        <div
                                            ref={textScrollRef}
                                            className="flex-1 w-full overflow-hidden text-center flex flex-col pt-[50%] pb-[100%] scrollbar-hide"
                                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                        >
                                            <div className="text-white/90 text-xl font-serif leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] children-p:mb-8 font-medium">
                                                {(currentItem as any).content}
                                            </div>
                                        </div>
                                    </div>

                                    <audio ref={audioRef} src={(currentItem as any).audio} preload="auto" className="hidden" onEnded={() => setIsPlaying(false)} />
                                </div>
                            ) : (
                                <div className="relative h-full p-10 flex flex-col">
                                <AnimatePresence mode="wait">
                                    {activeSlide.type === "title" && (
                                        <motion.div
                                            key={`title-${category}-${currentIndex}`}
                                            initial={isExporting ? { opacity: 1 } : { opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={isExporting ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: isExporting ? 0 : 0.4 }}
                                            className="flex-1 flex flex-col justify-center text-center relative"
                                        >
                                            <div className={`absolute inset-0 ${activeSlide.fullScreen ? "opacity-100 z-50" : "opacity-20 blur-sm"} pointer-events-none`}>
                                                <img src={activeSlide.fullScreen ? activeSlide.image : (category === "divulgacao" ? "/img/hero.webp" : bgImage)} className="w-full h-full object-cover" />
                                            </div>
                                            {!activeSlide.fullScreen && (
                                                <>
                                                    <div className="relative z-10 flex flex-col items-center">
                                                        <img src="/img/Título.webp" alt="Logo" className="w-48 mb-6 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] opacity-90" />
                                                        <div className="px-3 py-1 border border-emerald/50 bg-emerald/10 rounded-full inline-flex items-center gap-2 mb-8">
                                                            <Zap size={14} className="text-emerald" />
                                                            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-emerald">{activeSlide.label}</span>
                                                        </div>
                                                        <div className="w-40 aspect-[3/4] border-2 border-emerald shadow-[0_0_40px_rgba(0,255,136,0.3)] overflow-hidden mb-8 translate-y-[-5px]">
                                                            <img src={bgImage} className="w-full h-full object-cover" />
                                                        </div>
                                                        <h1 className="text-3xl font-display font-bold leading-tight mb-4 tracking-tighter uppercase px-4">{activeSlide.title}</h1>
                                                        <p className="text-emerald font-mono text-[10px] tracking-[0.3em] uppercase font-bold opacity-80">{activeSlide.subtitle}</p>
                                                    </div>
                                                    <div className="mt-auto flex justify-center gap-4 opacity-40 relative z-10">
                                                        <span className="font-mono text-[9px] tracking-widest uppercase">Protocolo A.B.D.M. // 2026 // SLIDE 01</span>
                                                    </div>
                                                </>
                                            )}
                                        </motion.div>
                                    )}

                                    {activeSlide.type === "content" && (
                                        <motion.div
                                            key={`content-${category}-${currentIndex}-${pageIndex}`}
                                            initial={isExporting ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={isExporting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ duration: isExporting ? 0 : 0.4 }}
                                            className="flex-1 flex flex-col"
                                        >
                                            <div className={`absolute inset-0 ${activeSlide.fullScreen ? "opacity-100 z-50" : "opacity-10 blur-sm"} pointer-events-none`}>
                                                <img src={activeSlide.fullScreen ? activeSlide.image : (category === "divulgacao" ? "/img/hero.webp" : bgImage)} className="w-full h-full object-cover" />
                                            </div>
                                            {!activeSlide.fullScreen && (
                                                <>
                                                    <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4 relative z-10">
                                                        <div className="w-10 h-10 rounded-full border-2 border-emerald shadow-[0_0_10px_rgba(0,255,136,0.3)] flex-shrink-0 relative overflow-hidden">
                                                            <img src={activeSlide.image || bgImage} className="w-full h-full object-cover" />
                                                        </div>
                                                        <div className="flex-1 font-mono uppercase tracking-widest text-emerald/60 text-[8px]">
                                                            {activeSlide.slideTitle}
                                                        </div>
                                                        <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                                                            Slide {pageIndex + 1}/{slides.length}
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="flex-1 text-white/95 font-serif leading-relaxed italic relative z-10"
                                                        style={{ fontSize: `${fontSize}px` }}
                                                    >
                                                        {category === "trechos" ? (
                                                            <div className="space-y-6">
                                                                {activeSlide.content}
                                                            </div>
                                                        ) : (
                                                            <div className="border-l-2 border-emerald/30 pl-8 space-y-4">
                                                                <div className="text-emerald font-mono text-[9px] uppercase tracking-[0.4em] mb-4">
                                                                    SISTEMA: {activeSlide.slideTitle}
                                                                </div>
                                                                <p className="leading-relaxed">
                                                                    {activeSlide.content}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="mt-8 flex justify-between items-end border-t border-white/5 pt-4 opacity-50 relative z-10">
                                                        <div className="text-[8px] text-white/40 font-mono uppercase tracking-[0.2em]">
                                                            {category === "trechos" ? (currentItem as any).time : `BIO-SIG: ${(currentItem as any).name}`}
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <span className="text-[8px] text-white/30 uppercase font-mono">{pageIndex + 1}</span>
                                                            <Instagram size={16} className="text-emerald/40" />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </motion.div>
                                    )}

                                    {activeSlide.type === "quote" && (
                                        <motion.div
                                            key={`quote-${category}-${currentIndex}`}
                                            initial={isExporting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={isExporting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
                                            transition={{ duration: isExporting ? 0 : 0.4 }}
                                            className="flex-1 flex flex-col justify-center text-center px-6"
                                        >
                                            <div className="absolute inset-0 opacity-10 blur-sm pointer-events-none">
                                                <img src={category === "divulgacao" ? "/img/hero.webp" : bgImage} className="w-full h-full object-cover scale-110" />
                                            </div>
                                            <div className="text-6xl text-emerald/20 font-serif leading-none mb-2 relative z-10">“</div>
                                            <h3 className="text-xl md:text-2xl font-display font-bold leading-snug text-white tracking-wide mb-8">
                                                {activeSlide.content}
                                            </h3>
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="w-10 h-[2px] bg-emerald/50" />
                                                <span className="text-[10px] font-display font-bold text-emerald uppercase tracking-[0.3em]">{activeSlide.author}</span>
                                            </div>
                                            <div className="rotate-180 text-6xl text-emerald/20 font-serif leading-none mt-2">“</div>
                                            <div className="mt-12 text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">Slide {pageIndex + 1}/{slides.length}</div>
                                        </motion.div>
                                    )}

                                    {activeSlide.type === "cta" && (
                                        <motion.div
                                            key={`cta-${category}-${currentIndex}`}
                                            initial={isExporting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={isExporting ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                                            transition={{ duration: isExporting ? 0 : 0.4 }}
                                            className="flex-1 flex flex-col items-center justify-center text-center space-y-8"
                                        >
                                            <div className="absolute inset-0 opacity-10 blur-sm pointer-events-none">
                                                <img src={category === "divulgacao" ? "/img/hero.webp" : bgImage} className="w-full h-full object-cover scale-110" />
                                            </div>
                                            <div className="relative group cross-branding z-10">
                                                <div className="absolute -inset-4 bg-emerald/20 rounded-full blur-xl group-hover:bg-emerald/30 transition-all animate-pulse" />
                                                <img src="/img/Título.webp" alt="Logo Livro" className="w-32 relative z-10 drop-shadow-[0_0_20px_rgba(0,255,136,0.4)]" />
                                            </div>

                                            <div className="space-y-4 relative z-10">
                                                <h2 className="text-3xl font-display font-bold text-white tracking-tighter uppercase">
                                                    Link para compra do livro na bio
                                                </h2>
                                                
                                                {activeSlide.pricing && (
                                                    <div className="bg-black/40 border border-emerald/20 p-6 rounded space-y-4 backdrop-blur-md w-full max-w-sm mx-auto">
                                                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                                            <span className="text-[10px] text-white/40 uppercase font-mono tracking-widest text-left">Amazon (Capa Dura)</span>
                                                            <div className="flex flex-col items-end">
                                                                <span className="text-emerald font-bold text-sm text-right">{activeSlide.pricing.amazon}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                                            <span className="text-[10px] text-white/40 uppercase font-mono tracking-widest text-left">Mercado Livre</span>
                                                            <div className="flex flex-col items-end">
                                                                <span className="text-emerald font-bold text-sm text-right">{activeSlide.pricing.mercadoLivre}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                                            <span className="text-[10px] text-white/40 uppercase font-mono tracking-widest text-left">Kindle / Unlimited</span>
                                                            <div className="flex flex-col items-end">
                                                                <span className="text-emerald font-bold text-sm text-right">{activeSlide.pricing.kindle} / {activeSlide.pricing.kindleUnlimited}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                <p className="text-white/60 font-serif italic text-lg max-w-xs mx-auto">
                                                    Siga para não perder os próximos registros. Link completo na bio.
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-3 w-full max-w-[250px]">
                                                <div className="flex items-center gap-4 justify-center py-3 border-y border-white/10 uppercase font-mono text-[10px] tracking-widest text-emerald">
                                                    <Zap size={14} /> Link na Bio
                                                </div>
                                                <div className="flex justify-between px-4 text-white/40">
                                                    <div className="flex flex-col items-center gap-1">
                                                        <div className="p-2 border border-white/10 rounded-full"><motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>❤️</motion.div></div>
                                                        <span className="text-[8px] uppercase font-bold">Curtir</span>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <div className="p-2 border border-white/10 rounded-full">💬</div>
                                                        <span className="text-[8px] uppercase font-bold">Comentar</span>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <div className="p-2 border border-white/10 rounded-full">✉️</div>
                                                        <span className="text-[8px] uppercase font-bold">Partilhar</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] pt-8">Slide {pageIndex + 1}/{slides.length}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            )}

                            {!videoMode && (
                                <>
                                    {/* Seamless Carousel Border at bottom */}
                                    <div className="absolute bottom-0 left-0 h-[3px] bg-white/5 w-full" />
                                    <div
                                        className="absolute bottom-0 left-0 h-[3px] bg-emerald transition-all duration-700"
                                        style={{ width: `${((pageIndex + 1) / slides.length) * 100}%` }}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
