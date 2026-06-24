import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";

export function BookSection() {
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
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -20, 0]
                }}
                viewport={{ once: true }}
                transition={{
                  opacity: { duration: 0.8, ease: "easeOut" },
                  scale: { duration: 0.8, ease: "easeOut" },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                src="/img/livro-mock-bruxa.webp"
                alt="A Bruxa das Máquinas - Mockup"
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,255,136,0.15)]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-t-2 border-l-2 border-emerald/20 -z-10 rounded-full blur-3xl opacity-20 animate-pulse" />
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
                Em um mundo à beira da Terceira Guerra Mundial, a China lança um ataque surpresa aos Estados Unidos, espalhando o caos e a destruição por Nova York. Em meio a esse cenário apocalíptico, a embaixadora brasileira, Elora Borges, enfrenta a desesperadora missão de encontrar sua filha, Hannah, desaparecida no turbilhão da guerra. O que Elora não sabe é que Hannah guarda um segredo: ela abriga uma bruxa, a lendária deusa Ishtar dentro de si.
              </p>
              <p>
                Enquanto Elora luta para encontrar Hannah, a jovem se vê no centro de uma batalha sobrenatural. Influenciada pela IA-27, ou Eva, e pela deusa Ishtar, que reside em seu subconsciente, Hannah precisa aprender a controlar seus poderes e enfrentar as forças chinesas que a perseguem.
              </p>
              <p>
                "A Bruxa das Máquinas" é uma aventura épica que mistura ficção científica, fantasia e mitologia, criando um universo rico em ação, suspense e reflexões sobre a natureza humana e o papel da tecnologia em um mundo à beira do colapso.
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
