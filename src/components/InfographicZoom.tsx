import { useState, useRef, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface InfographicZoomProps {
    html: string;
    title?: string;
}

const LENS_SIZE = 220;      // diameter of the magnifier circle in px
const ZOOM_FACTOR = 2.8;    // how much to zoom inside the lens

export function InfographicZoom({ html, title = "Síntese Visual" }: InfographicZoomProps) {
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [imgNatW, setImgNatW] = useState(0);
    const [imgNatH, setImgNatH] = useState(0);

    // Magnifier state
    const [hovering, setHovering] = useState(false);
    const [lensPos, setLensPos] = useState({ x: 0, y: 0 });   // cursor relative to container
    const [bgPos, setBgPos] = useState({ x: 0, y: 0 });        // background-position of lens
    const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

    // Lightbox state
    const [isOpen, setIsOpen] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    // Find the image inside the rendered HTML
    useEffect(() => {
        if (!containerRef.current) return;
        const img = containerRef.current.querySelector("img") as HTMLImageElement | null;
        if (!img) return;

        const measure = () => {
            setImgSrc(img.src);
            setImgNatW(img.naturalWidth || img.width);
            setImgNatH(img.naturalHeight || img.height);
        };

        if (img.complete) {
            measure();
        } else {
            img.addEventListener("load", measure);
            return () => img.removeEventListener("load", measure);
        }
    }, [html]);

    // Update container size on resize
    useEffect(() => {
        if (!containerRef.current) return;
        const el = containerRef.current;
        const obs = new ResizeObserver(() => {
            setContainerSize({ w: el.offsetWidth, h: el.offsetHeight });
        });
        obs.observe(el);
        setContainerSize({ w: el.offsetWidth, h: el.offsetHeight });
        return () => obs.disconnect();
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        // Cursor position relative to container
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Lens center position (clamp so lens stays inside container)
        const half = LENS_SIZE / 2;
        const clampedX = Math.max(half, Math.min(rect.width - half, x));
        const clampedY = Math.max(half, Math.min(rect.height - half, y));

        setLensPos({ x: clampedX, y: clampedY });

        // How much the rendered image is scaled vs natural size
        const scaleX = containerSize.w / (imgNatW || containerSize.w);
        const scaleY = containerSize.h / (imgNatH || containerSize.h);

        // Background-position: we want the lens to show the area under cursor,
        // zoomed ZOOM_FACTOR times. The background-size will be container-size * ZOOM_FACTOR.
        // bg-pos-x = -(cursorX * ZOOM_FACTOR - LENS_SIZE/2)
        const bgX = -(x * ZOOM_FACTOR - half);
        const bgY = -(y * ZOOM_FACTOR - half);

        setBgPos({ x: bgX, y: bgY });
    }, [containerSize, imgNatW, imgNatH]);

    const canShowLens = imgSrc && containerSize.w > 0 && hovering;

    return (
        <>
            {/* ── Infographic with magnifier ── */}
            <div
                ref={containerRef}
                className="relative select-none"
                style={{ cursor: hovering ? "none" : "default" }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                {/* The HTML content (image etc.) */}
                <div
                    dangerouslySetInnerHTML={{ __html: html }}
                    className="pointer-events-none"
                />

                {/* Magnifier Lens */}
                {canShowLens && (
                    <div
                        style={{
                            position: "absolute",
                            left: lensPos.x - LENS_SIZE / 2,
                            top: lensPos.y - LENS_SIZE / 2,
                            width: LENS_SIZE,
                            height: LENS_SIZE,
                            borderRadius: "50%",
                            backgroundImage: `url(${imgSrc})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: `${containerSize.w * ZOOM_FACTOR}px ${containerSize.h * ZOOM_FACTOR}px`,
                            backgroundPosition: `${bgPos.x}px ${bgPos.y}px`,
                            border: "3px solid rgba(139, 92, 246, 0.8)",
                            boxShadow: "0 0 0 1px rgba(139,92,246,0.2), 0 8px 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.1)",
                            pointerEvents: "none",
                            zIndex: 50,
                        }}
                    >
                        {/* Crosshair */}
                        <div style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: 0.3,
                            pointerEvents: "none",
                        }}>
                            <div style={{ position: "absolute", width: 1, height: "100%", background: "rgba(139,92,246,0.6)" }} />
                            <div style={{ position: "absolute", height: 1, width: "100%", background: "rgba(139,92,246,0.6)" }} />
                        </div>
                    </div>
                )}

                {/* Static hint when not hovering */}
                {!hovering && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/60 border border-violet-500/20 rounded-full px-3 py-1.5 pointer-events-none">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-violet-400">
                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                        </svg>
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Passe o mouse para ampliar</span>
                    </div>
                )}

                {/* Click to open full lightbox */}
                {hovering && (
                    <div
                        style={{
                            position: "absolute",
                            left: lensPos.x - LENS_SIZE / 2,
                            top: lensPos.y + LENS_SIZE / 2 + 8,
                            pointerEvents: "none",
                            zIndex: 51,
                        }}
                    >
                        <span className="text-[9px] font-black uppercase tracking-widest text-violet-400/70">
                            Clique para tela cheia
                        </span>
                    </div>
                )}

                {/* Invisible click overlay */}
                <div
                    className="absolute inset-0 z-40"
                    onClick={() => setIsOpen(true)}
                    style={{ cursor: "none" }}
                />
            </div>

            {/* ── Full-screen Lightbox ── */}
            <AnimatePresence>
                {isOpen && imgSrc && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex flex-col"
                        onClick={() => setIsOpen(false)}
                    >
                        {/* Top bar */}
                        <div
                            className="flex items-center justify-between px-6 py-4 border-b border-white/5 flex-shrink-0"
                            onClick={e => e.stopPropagation()}
                        >
                            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-violet-400">{title}</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 flex items-center justify-center transition-colors"
                            >
                                <X size={16} className="text-white/70" />
                            </button>
                        </div>
                        {/* Scrollable image */}
                        <div
                            className="flex-1 overflow-auto p-6 flex items-start justify-center"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={imgSrc}
                                alt={title}
                                className="max-w-none rounded-xl shadow-2xl"
                                style={{ width: "max(100%, 1200px)" }}
                            />
                        </div>
                        <p className="text-center py-3 text-white/20 text-[10px] uppercase tracking-widest flex-shrink-0">
                            Clique fora para fechar · Role para navegar
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
