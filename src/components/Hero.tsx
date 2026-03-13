import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useIshtarImage } from "../services/imageService";
import { MagicAura } from "./MagicAura";
import { ChevronRight, Zap, BookOpen, Volume2, VolumeX, ShoppingCart } from "lucide-react";

export function Hero() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDucked, setIsDucked] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          // Attempt to play on load
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.log("Autoplay blocked, waiting for interaction:", err);
          // Fallback: play on first user interaction
          const handleFirstClick = () => {
            if (audioRef.current && !isPlaying) {
              audioRef.current.play().then(() => {
                setIsPlaying(true);
              }).catch(e => console.log("Final playback failed:", e));
            }
            window.removeEventListener("click", handleFirstClick);
            window.removeEventListener("touchstart", handleFirstClick);
          };
          window.addEventListener("click", handleFirstClick);
          window.addEventListener("touchstart", handleFirstClick);
        }
      }
    };

    playAudio();

    // Listen for narration status to duck music volume
    const handleNarrationStatus = (e: any) => {
      setIsDucked(!!e.detail.isPlaying);
    };

    window.addEventListener("narration-status", handleNarrationStatus);
    return () => window.removeEventListener("narration-status", handleNarrationStatus);
  }, []);

  // Sync volume with ducking state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isDucked ? 0.025 : 0.3;
    }
  }, [isDucked]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
      <audio
        ref={audioRef}
        autoPlay
        loop
        src="/img/Whispers_of_the_Ziggurat.mp3"
        onCanPlay={(e) => (e.currentTarget.volume = isDucked ? 0.025 : 0.3)}
      />

      {/* Audio Toggle (Floating) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={(e) => {
          e.stopPropagation();
          toggleMute();
        }}
        className="fixed top-24 right-6 z-50 p-3 bg-charcoal/40 backdrop-blur-md border border-white/10 rounded-full text-emerald hover:bg-emerald/10 transition-all group"
        title={isMuted ? "Ativar Áudio" : "Mutar Áudio"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="animate-pulse" />}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-charcoal/80 border border-white/5 text-[9px] uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Trilha Sonora: {isMuted ? "Desligado" : "Ligado"}
        </span>
      </motion.button>

      {/* Background Video with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        >
          <source src="/img/Magical_Animation_With_Mathematical_Elements.mp4" type="video/mp4" />
        </video>

        {/* Dark Gradient overlay: clear at top, dark at bottom */}
        <div className="absolute inset-0 video-gradient-overlay pointer-events-none" />
      </div>

      {/* Content: Firmly anchored to the absolute bottom to clear the center */}
      <div className="absolute inset-x-0 bottom-0 z-10 container mx-auto px-6 pb-8 flex flex-col items-center text-center">
        <div className="flex flex-col items-center max-w-3xl w-full translate-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 border border-emerald/30 bg-emerald/5 rounded-full mb-4 text-shadow-strong"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-emerald font-mono">
              Lançamento físico e digital em Abril
            </span>
          </motion.div>

          <h1 className="sr-only">A Bruxa das Máquinas - GARVES K. B.</h1>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            src="/img/Título.webp"
            alt="A Bruxa das Máquinas"
            className="h-20 md:h-28 lg:h-36 w-auto mb-4 object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="max-w-xl text-[10px] md:text-xs text-white/70 mb-6 font-light leading-relaxed px-4 text-shadow-strong"
          >
            Em um mundo à beira da Terceira Guerra Mundial, a jovem Hannah desperta um poder ancestral.
            Entre a IA-27 e a deusa Ishtar, o destino da humanidade repousa em suas mãos.
          </motion.p>
        </div>

        {/* Buttons moved lower (pushed towards the bottom red area) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-3 mb-2"
        >
          <button
            onClick={() => document.getElementById('pre-venda')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-6 py-2.5 bg-emerald text-charcoal font-black rounded-sm overflow-hidden transition-all hover:pr-10 border-glow-emerald flex items-center justify-center gap-2 text-xs"
          >
            <ShoppingCart size={16} />
            GARANTIR EXEMPLAR
            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={16} />
          </button>

          <a
            href="#sinopse"
            className="px-6 py-2.5 border border-white/20 text-white font-bold rounded-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-xs"
          >
            <BookOpen size={16} />
            LER SINOPSE
          </a>
        </motion.div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex flex-col gap-2 font-mono text-[10px] text-bronze/50 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-emerald rounded-full animate-pulse shadow-[0_0_8px_var(--color-emerald)]" />
            Sistema: Ativo
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-bronze rounded-full" />
            Protocolo: Ishtar-01
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent" />
    </section>
  );
}
