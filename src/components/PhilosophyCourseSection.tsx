import { motion } from "motion/react";
import { BookOpen, ChevronRight, GraduationCap, History, Lightbulb, Library, Compass, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

const modules = [
    {
        id: 1,
        title: "Filosofia Antiga",
        description: "Dos pré-socráticos ao período helenístico. A busca pela arché e o nascimento da racionalidade ocidental.",
        icon: <Landmark className="w-6 h-6" />,
        link: "/curso/filosofia/antiga",
        color: "from-violet-500 to-purple-600"
    },
    {
        id: 2,
        title: "Filosofia Medieval",
        description: "A síntese entre fé e razão. Patrística e Escolástica, de Santo Agostinho a São Tomás de Aquino.",
        icon: <Library className="w-6 h-6" />,
        link: "/curso/filosofia/medieval",
        color: "from-purple-500 to-indigo-600"
    },
    {
        id: 3,
        title: "Filosofia Moderna",
        description: "O sujeito no centro do mundo. Racionalismo, empirismo e o idealismo transcendental de Kant.",
        icon: <Lightbulb className="w-6 h-6" />,
        link: "/curso/filosofia/moderna",
        color: "from-indigo-500 to-blue-600"
    },
    {
        id: 4,
        title: "Filosofia do Século XIX",
        description: "O colapso dos sistemas. Hegel, o materialismo histórico e a explosão do pensamento vitalista.",
        icon: <History className="w-6 h-6" />,
        link: "/curso/filosofia/seculo-xix",
        color: "from-blue-500 to-cyan-600"
    },
    {
        id: 5,
        title: "Filosofia do Século XX",
        description: "Linguagem, existência e poder. Da fenomenologia de Heidegger ao estruturalismo francês.",
        icon: <Compass className="w-6 h-6" />,
        link: "/curso/filosofia/seculo-xx",
        color: "from-cyan-500 to-teal-600"
    },
    {
        id: 6,
        title: "Filosofia Contemporânea",
        description: "Desafios do presente. Ética, tecnologia, pós-modernidade e as novas fronteiras do pensamento.",
        icon: <GraduationCap className="w-6 h-6" />,
        link: "/curso/filosofia/contemporanea",
        color: "from-teal-500 to-emerald-600"
    }
];

export function PhilosophyCourseSection() {
    return (
        <section id="curso-filosofia" className="py-32 relative overflow-hidden bg-black">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 text-violet-500 mb-4"
                        >
                            <BookOpen size={20} />
                            <span className="text-xs font-black uppercase tracking-[0.3em]">Formação Intelectual</span>
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-sofia-serif font-black text-white italic uppercase leading-none mb-6">
                            Curso de <span className="text-violet-500">Filosofia</span>
                        </h2>
                        <p className="text-white/50 text-xl font-light leading-relaxed">
                            Uma jornada sistemática através de 2.500 anos de pensamento ocidental. Organizado cronologicamente para uma compreensão profunda das raízes da nossa civilização.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module, index) => (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <Link to={module.link} className="block h-full">
                                <div className="h-full bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] hover:border-violet-500/30 transition-all duration-500 relative overflow-hidden group">
                                    {/* Hover gradient background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-xl group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-black transition-all duration-500">
                                                {module.icon}
                                            </div>
                                            <span className="text-4xl font-sofia-serif font-black text-white/5 group-hover:text-violet-500/20 transition-colors">
                                                0{module.id}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-sofia-serif font-black text-white mb-4 group-hover:text-violet-400 transition-colors uppercase italic">
                                            {module.title}
                                        </h3>

                                        <p className="text-white/40 text-sm leading-relaxed mb-10 group-hover:text-white/60 transition-colors font-light">
                                            {module.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-violet-500 text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                                            Explorar Módulo <ChevronRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <a
                            href="#matricula"
                            className="px-12 py-6 bg-violet-600 hover:bg-violet-500 text-black font-black uppercase text-xs tracking-[0.2em] transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] flex items-center gap-4"
                        >
                            Inscreva-se na Formação Completa <GraduationCap size={18} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
