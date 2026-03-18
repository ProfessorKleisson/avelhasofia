import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Instagram, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function HeaderVelhaSofia() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getPageColor = () => {
        switch (location.pathname) {
            case "/livros/homens-deuses":
                return "#DE863B";
            case "/livros/bruxa-das-maquinas":
                return "#00FF88";
            case "/jogos/diarquia":
                return "#0A0A0A";
            case "/livros/mestrado":
                return "#6366f1";
            case "/artigos/michelangelo":
                return "#f59e0b";
            default:
                return "#00D3F3";
        }
    };

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const activeColor = getPageColor();

    return (
        <header
            className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${isScrolled
                ? "bg-black/95 backdrop-blur-2xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                : "bg-transparent py-6 md:py-8"
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-10 flex justify-between items-center relative">
                {/* Logo/Title */}
                <Link to="/" className="group flex flex-col min-w-0 pr-4 z-[110]">
                    <span className="font-sofia-serif font-black text-lg sm:text-2xl tracking-tighter text-white transition-colors duration-300 truncate">
                        A VELHA <span style={{ color: activeColor }} className="transition-colors duration-500">SOFIA</span>
                    </span>
                    <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-white/60 transition-colors">Portal Literário</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-10">
                    <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-cyan-400 transition-colors">Início</Link>

                    {/* Livros Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-cyan-400 transition-colors py-2">
                            Livros <ChevronDown size={12} strokeWidth={3} />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-black/95 backdrop-blur-2xl border border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                            <Link to="/livros/bruxa-das-maquinas" className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all text-white/70 border-b border-white/5">A Bruxa das Máquinas</Link>
                            <Link to="/livros/homens-deuses" className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all text-white/70 border-b border-white/5">Os Homens-Deuses</Link>
                            <Link to="/livros/mestrado" className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-[#6366f1] hover:text-white transition-all text-white/70">Liberdade em Spinoza</Link>
                        </div>
                    </div>

                    {/* Filosofia Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-violet-500 transition-colors py-2">
                            Filosofia <ChevronDown size={12} strokeWidth={3} />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-black/95 backdrop-blur-2xl border border-violet-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                            <Link to="/curso/filosofia/antiga" className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:text-white transition-all text-white/70 border-b border-white/5 whitespace-nowrap">1. Filosofia Antiga</Link>
                            <Link to="/curso/filosofia/medieval" className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:text-white transition-all text-white/70 border-b border-white/5 whitespace-nowrap">2. Filosofia Medieval</Link>
                            <Link to="/curso/filosofia/moderna" className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:text-white transition-all text-white/70 border-b border-white/5 whitespace-nowrap">3. Filosofia Moderna</Link>
                            <Link to="/curso/filosofia/seculo-xix" className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:text-white transition-all text-white/70 border-b border-white/5 whitespace-nowrap">4. Filo. do Século XIX</Link>
                            <Link to="/curso/filosofia/seculo-xx" className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:text-white transition-all text-white/70 border-b border-white/5 whitespace-nowrap">5. Filo. do Século XX</Link>
                            <Link to="/curso/filosofia/contemporanea" className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:text-white transition-all text-white/70 whitespace-nowrap">6. Filo. Contemporânea</Link>
                        </div>
                    </div>

                    {/* Jogos Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-cyan-400 transition-colors py-2">
                            Jogos <ChevronDown size={12} strokeWidth={3} />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-black/95 backdrop-blur-2xl border border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                            <Link to="/jogos/digitais" className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all text-white/70 border-b border-white/5">Jogos Digitais</Link>
                            <Link to="/jogos/diarquia" className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all text-white/70">Diarquia (Cardgame)</Link>
                        </div>
                    </div>

                    {/* Artigos Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-amber-500 transition-colors py-2">
                            Artigos <ChevronDown size={12} strokeWidth={3} />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-black/95 backdrop-blur-2xl border border-amber-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                            <Link to="/artigos/michelangelo" className="block px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all text-white/70">Michelangelo: A Criação de Adão</Link>
                        </div>
                    </div>

                    <Link to="/sobre" className="text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-cyan-400 transition-colors">O Autor</Link>

                    {location.pathname === "/livros/bruxa-das-maquinas" && (
                        <motion.a 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            href="#personagens" 
                            className="bg-emerald/10 border border-emerald/50 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-emerald hover:bg-emerald hover:text-charcoal transition-all shadow-[0_0_15px_rgba(0,255,136,0.2)]"
                        >
                            Personagens
                        </motion.a>
                    )}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden flex-shrink-0 p-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all active:scale-90 flex items-center justify-center z-[110] relative"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Abrir Menu"
                >
                    {mobileMenuOpen ? (
                        <X size={24} className="text-white" />
                    ) : (
                        <Menu size={24} className="text-white" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-[105] lg:hidden flex flex-col p-8 pt-28 gap-8 overflow-y-auto"
                    >
                        <Link to="/" className="text-2xl font-black uppercase tracking-widest border-b border-white/5 pb-4">Início</Link>

                        <div className="space-y-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-500/60">Obras & Conteúdo</span>
                            <div className="grid gap-3">
                                <Link to="/livros/bruxa-das-maquinas" className="block text-xl font-bold hover:text-cyan-400 transition-colors">A Bruxa das Máquinas</Link>
                                <Link to="/livros/homens-deuses" className="block text-xl font-bold hover:text-cyan-400 transition-colors">Os Homens-Deuses</Link>
                                <Link to="/livros/mestrado" className="block text-xl font-bold hover:text-[#6366f1] transition-colors">Liberdade em Spinoza</Link>
                                <Link to="/jogos/digitais" className="block text-xl font-bold hover:text-cyan-400 transition-colors">Jogos Digitais</Link>
                                <Link to="/jogos/diarquia" className="block text-xl font-bold hover:text-cyan-400 transition-colors">Diarquia Game</Link>
                                <Link to="/artigos/michelangelo" className="block text-xl font-bold hover:text-amber-500 transition-colors">Artigo: Michelangelo</Link>
                                <Link to="/sobre" className="block text-xl font-bold hover:text-cyan-400 transition-colors">Sobre o Autor</Link>
                                {location.pathname === "/livros/bruxa-das-maquinas" && (
                                    <a href="#personagens" onClick={() => setMobileMenuOpen(false)} className="block text-xl font-extrabold text-emerald tracking-tighter">
                                        // PERSONAGENS
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-violet-500/60 transition-colors">Curso de Filosofia</span>
                            <div className="grid gap-3">
                                <Link to="/curso/filosofia/antiga" className="block text-lg font-bold hover:text-violet-400 transition-colors">1. Filosofia Antiga</Link>
                                <Link to="/curso/filosofia/medieval" className="block text-lg font-bold hover:text-violet-400 transition-colors">2. Filosofia Medieval</Link>
                                <Link to="/curso/filosofia/moderna" className="block text-lg font-bold hover:text-violet-400 transition-colors">3. Filosofia Moderna</Link>
                                <Link to="/curso/filosofia/seculo-xix" className="block text-lg font-bold hover:text-violet-400 transition-colors">4. Filosofia do Século XIX</Link>
                                <Link to="/curso/filosofia/seculo-xx" className="block text-lg font-bold hover:text-violet-400 transition-colors">5. Filosofia do Século XX</Link>
                                <Link to="/curso/filosofia/contemporanea" className="block text-lg font-bold hover:text-violet-400 transition-colors">6. Filosofia Contemporânea</Link>
                            </div>
                        </div>

                        <div className="mt-auto pt-8 border-t border-white/5 flex gap-8 justify-center">
                            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Instagram size={24} className="text-white/60" /></a>
                            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Youtube size={24} className="text-white/60" /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
