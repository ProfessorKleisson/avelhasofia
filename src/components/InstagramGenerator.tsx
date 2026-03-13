import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, ChevronLeft, ChevronRight, Layout, BookOpen, User, Layers, Loader2, Zap, Sparkles, Instagram } from "lucide-react";
import { EXCERPTS } from "./ExcerptSection";
import { characters, CharacterItem } from "./CharacterSection";
import { toPng } from "html-to-image";

const RATIOS = [
    { id: "square", name: "Quadrado (1:1)", class: "aspect-square" },
    { id: "portrait", name: "Retrato (4:5)", class: "aspect-[4/5]" }
];

const CATEGORIES = [
    { id: "trechos", name: "Trechos", icon: <BookOpen size={14} /> },
    { id: "personagens", name: "Personagens", icon: <User size={14} /> }
];

export function InstagramGenerator() {
    // Only render in dev mode
    if (!(import.meta as any).env?.DEV) return null;

    const previewRef = useRef<HTMLDivElement>(null);
    const [category, setCategory] = useState<"trechos" | "personagens">("trechos");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ratio, setRatio] = useState("portrait");
    const [fontSize, setFontSize] = useState(22);
    const [showUI, setShowUI] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [isExporting, setIsExporting] = useState(false);
    const [exportProgress, setExportProgress] = useState<{ current: number, total: number } | null>(null);

    const currentItem = category === "trechos" ? EXCERPTS[currentIndex] : characters[currentIndex];

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

    const bgImage = category === "personagens"
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
        } else {
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
        } else {
            const char = currentItem as CharacterItem;
            return `DOSSIÊ: ${char.name} — ${char.role.toUpperCase()}\n\n${char.description}\n\nConheça as peças desse tabuleiro divino e tecnológico. Em um mundo à beira do colapso, quem você escolheria para lutar ao seu lado?\n\n🔗 Descubra mais sobre ${char.name} no link da bio.\n\n#ABruxaDasMaquinas #Personagens #Dossie #Lore #ScifiBrasil #FiccaoEspeculativa #Cyberpunk #PersonagemLiterario`;
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
                                <button onClick={() => { setCurrentIndex(p => Math.max(0, p - 1)); setPageIndex(0); }} className="p-2 bg-white/5 border border-white/10 text-white" disabled={currentIndex === 0}><ChevronLeft size={16} /></button>
                                <div className="flex-1 text-center text-[10px] font-mono border-y border-white/10 py-2 truncate uppercase">{category === "trechos" ? (currentItem as any).id : (currentItem as any).name}</div>
                                <button onClick={() => { setCurrentIndex(p => p + 1); setPageIndex(0); }} className="p-2 bg-white/5 border border-white/10 text-white" disabled={currentIndex >= (category === "trechos" ? EXCERPTS.length - 1 : characters.length - 1)}><ChevronRight size={16} /></button>
                            </div>
                        </div>

                        <div className="space-y-2">
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
                    </div>

                    {/* Preview Area */}
                    <div className="flex-1 p-8 flex items-center justify-center overflow-auto bg-black/20">
                        <div
                            ref={previewRef}
                            id="instagram-preview"
                            className={`bg-charcoal border border-white/10 shadow-2xl overflow-hidden relative ${ratio === "square" ? "w-[500px] h-[500px]" : "w-[500px] h-[625px]"}`}
                        >
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

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
                                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[120%] opacity-20 blur-xl grayscale pointer-events-none">
                                                <img src={bgImage} className="w-full h-full object-cover scale-150" />
                                            </div>
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
                                        </motion.div>
                                    )}

                                    {activeSlide.type === "content" && (
                                        <motion.div
                                            key={`content-${category}-${currentIndex}-${pageIndex}`}
                                            initial={isExporting ? { opacity: 1 } : { opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={isExporting ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: isExporting ? 0 : 0.4 }}
                                            className="flex-1 flex flex-col"
                                        >
                                            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                                                <div className="w-10 h-10 rounded-full border-2 border-emerald shadow-[0_0_10px_rgba(0,255,136,0.3)] flex-shrink-0 relative overflow-hidden">
                                                    <img src={bgImage} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 font-mono uppercase tracking-widest text-emerald/60 text-[8px]">
                                                    {activeSlide.slideTitle}
                                                </div>
                                                <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                                                    Slide {pageIndex + 1}/{slides.length}
                                                </div>
                                            </div>

                                            <div
                                                className="flex-1 text-white/95 font-serif leading-relaxed italic"
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

                                            <div className="mt-8 flex justify-between items-end border-t border-white/5 pt-4 opacity-50">
                                                <div className="text-[8px] text-white/40 font-mono uppercase tracking-[0.2em]">
                                                    {category === "trechos" ? (currentItem as any).time : `BIO-SIG: ${(currentItem as any).name}`}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[8px] text-white/30 uppercase font-mono">{pageIndex + 1}</span>
                                                    <Instagram size={16} className="text-emerald/40" />
                                                </div>
                                            </div>
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
                                            <div className="text-6xl text-emerald/20 font-serif leading-none mb-2">“</div>
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
                                            <div className="relative group cross-branding">
                                                <div className="absolute -inset-4 bg-emerald/20 rounded-full blur-xl group-hover:bg-emerald/30 transition-all animate-pulse" />
                                                <img src="/img/Título.webp" alt="Logo Livro" className="w-32 relative z-10 drop-shadow-[0_0_20px_rgba(0,255,136,0.4)]" />
                                            </div>

                                            <div className="space-y-4">
                                                <h2 className="text-3xl font-display font-bold text-white tracking-tighter uppercase">
                                                    Gostou desse <span className="text-emerald">{category === "trechos" ? "Fragmento" : "Dossiê"}</span>?
                                                </h2>
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

                            {/* Seamless Carousel Border at bottom */}
                            <div className="absolute bottom-0 left-0 h-[3px] bg-white/5 w-full" />
                            <div
                                className="absolute bottom-0 left-0 h-[3px] bg-emerald transition-all duration-700"
                                style={{ width: `${((pageIndex + 1) / slides.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
