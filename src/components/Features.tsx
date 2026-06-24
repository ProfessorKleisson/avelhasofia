import { motion } from "motion/react";
import { Brain, Users, Globe, BookOpen, Rocket, Swords, Landmark } from "lucide-react";

const whyRead = [
  {
    icon: <Brain className="text-emerald" />,
    title: "Pensamento Crítico",
    description: "Desafia nossa percepção da realidade e expande a criatividade ao questionar os limites do mundo atual."
  },
  {
    icon: <Users className="text-emerald" />,
    title: "Questões Sociais",
    description: "Aborda temas como ética, impacto da tecnologia e a luta pela liberdade e dignidade humana."
  },
  {
    icon: <Globe className="text-emerald" />,
    title: "Repertório Cultural",
    description: "Uma perspectiva instigante sobre opressão, poder e o que significa ser verdadeiramente livre."
  }
];

const targetAudience = [
  { icon: <Swords size={16} />, text: "Leitores de Distopias e Guerras", img: "/img/Gemini_Generated_Image_d3ci3ud3ci3ud3ci.webp" },
  { icon: <Rocket size={16} />, text: "Fãs de Ficção Científica e Fantasia", img: "/img/Gemini_Generated_Image_uigakruigakruiga.webp" },
  { icon: <BookOpen size={16} />, text: "Amantes de Aventura e Ação", img: "/img/Gemini_Generated_Image_sduwpzsduwpzsduw.webp" },
  { icon: <Landmark size={16} />, text: "Entusiastas por Mitologia", img: "/img/Gemini_Generated_Image_bo91gcbo91gcbo91.webp" }
];

export function Features() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full cuneiform-bg opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">POR QUE LER <span className="text-emerald">O LIVRO</span>?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {whyRead.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-white/5 bg-white/[0.02] hover:border-emerald/30 transition-all group"
            >
              <div className="mb-6 p-3 w-fit border border-emerald/20 rounded-lg group-hover:border-emerald/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-bronze">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-16">
          <h3 className="text-center text-xs uppercase tracking-[0.3em] text-white/40 mb-10">Este livro é destinado a:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {targetAudience.map((target, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center gap-4 group text-center"
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden border border-white/10 group-hover:border-emerald/50 transition-all duration-500 shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={target.img} 
                    alt={target.text} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/5 rounded-full text-[10px] md:text-xs font-mono text-bronze/80 w-fit">
                  <span className="text-emerald shrink-0">{target.icon}</span>
                  <span className="line-clamp-1">{target.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
