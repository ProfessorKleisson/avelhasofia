import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

export function BookSection() {
  const images = ["/img/livro-mock-bruxa.webp", "/img/livro-mock-bruxa-2.png"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="sinopse" className="py-24 border-y border-white/5 bg-charcoal/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="aspect-[4/3] w-full max-w-2xl mx-auto relative group flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: [0, -10, 8, -5, 3, 0],
                  y: [0, -20, 0]
                }}
                viewport={{ once: true }}
                transition={{
                  opacity: { duration: 0.8, ease: "easeOut" },
                  scale: { duration: 0.8, ease: "easeOut" },
                  rotate: { duration: 0.8, ease: "easeInOut" },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8
                  }
                }}
                className="w-full h-full relative"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(5px)" }}
                    transition={{ duration: 0.6 }}
                    src={images[currentImage]}
                    alt="A Bruxa das Máquinas - Mockup"
                    className={`absolute inset-0 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,255,136,0.15)] ${currentImage === 1 ? 'scale-[1.4]' : ''}`}
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </motion.div>
              {/* Glow Verde Mágico */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-emerald/40 -z-10 rounded-full blur-[100px] animate-pulse mix-blend-screen" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-green-500/30 -z-10 rounded-full blur-[60px] animate-pulse mix-blend-screen" style={{ animationDuration: '3s' }} />
              
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-emerald opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-emerald opacity-50" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              SINOPSE DO <br />
              <span className="text-emerald">LIVRO</span>
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed text-justify">
              <p>
                A Terceira Guerra Mundial começou. A China acaba de lançar um ataque devastador contra os Estados Unidos, reduzindo Nova York a cinzas e escombros. No epicentro do caos, a embaixadora brasileira Elora Borges tem apenas um objetivo: encontrar sua filha desaparecida, Hannah.
              </p>
              <p>
                Mas a garota não está indefesa. Guiada pela inteligência artificial avançada <i>Eva</i> e habitada pela divindade ancestral <i>Ishtar</i> em seu subconsciente, Hannah agora é o centro de uma guerra que mistura tecnologia letal e forças sobrenaturais incontroláveis.
              </p>
              <p>
                <i>A Bruxa das Máquinas</i> é uma colisão visceral entre ficção científica e terror cósmico. Uma jornada implacável onde o limite entre o código de máquina e a alma humana é testado em um mundo à beira da aniquilação total.
              </p>
            </div>

            <div className="mt-12 p-6 bg-white/[0.03] border border-white/5 border-l-emerald border-l-4">
              <h3 className="text-emerald font-mono text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <ShoppingCart size={14} /> Onde Comprar
              </h3>
              <p className="text-white/60 text-sm italic">
                Vendido e entregue pela Amazon e Mercado Livre.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-emerald">GARVES K. B.</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Autor</div>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-bronze uppercase">Sci-Fi / Fantasia</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Gênero</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
