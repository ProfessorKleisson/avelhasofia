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
  { icon: <Swords size={16} />, text: "Leitores de Distopias e Guerras" },
  { icon: <Rocket size={16} />, text: "Fãs de Ficção Científica e Fantasia" },
  { icon: <BookOpen size={16} />, text: "Amantes de Aventura e Ação" },
  { icon: <Landmark size={16} />, text: "Entusiastas por Mitologia" }
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
          <div className="flex flex-wrap justify-center gap-6">
            {targetAudience.map((target, idx) => (
              <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-white/[0.03] border border-white/5 rounded-full text-sm font-mono text-bronze/80">
                <span className="text-emerald">{target.icon}</span>
                {target.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
