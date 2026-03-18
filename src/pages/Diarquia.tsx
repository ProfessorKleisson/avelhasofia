import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { AnimatedGrid } from "../components/AnimatedGrid";
import { Footer } from "../components/Footer";
import { ChevronRight, Play, Star } from "lucide-react";

export function DiarquiaPage() {
    const [titleText, setTitleText] = useState("");
    const fullTitle = "Bem-vindo à\nDiarquia!";

    useEffect(() => {
        window.scrollTo(0, 0);

        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullTitle.length) {
                setTitleText(fullTitle.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const faqItems = [
        {
            q: "O que é o jogo Diarquia?",
            a: "Diarquia é um jogo de cartas estratégico que combina elementos de filosofia e história. O jogo utiliza cartas baseadas em figuras históricas, filósofos e eventos importantes, proporcionando uma experiência educativa e divertida."
        },
        {
            q: "Qual é o objetivo do jogo?",
            a: "O objetivo do jogo é ser coroado o soberano, o que pode ser alcançado de duas maneiras: Conquistando cartas (3 das 4 cartas de qualquer uma das oito classes) ou Acumulando moedas (15 moedas)."
        },
        {
            q: "Como o jogo se conecta com filosofia e história?",
            a: "Através de cartas temáticas baseadas em personagens reais, mecânicas que refletem suas filosofias e classes que agrupam ideologias como Monarquia, Liberais Clássicos, Revolução e diversos tipos de Golpes históricos."
        }
    ];

    return (
        <div className="min-h-screen bg-[#FFB701] font-sofia-sans text-charcoal relative overflow-x-hidden">
            <AnimatedGrid
                numSquares={30}
                maxOpacity={0.15}
                fillColor="rgba(34, 34, 34, 0.1)"
                strokeColor="rgba(34, 34, 34, 0.08)"
            />

            {/* Hero Section */}
            <header className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-charcoal mb-8 whitespace-pre-line leading-[0.9]">
                                {titleText}
                                <span className="animate-pulse">|</span>
                            </h1>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: titleText.length >= fullTitle.length ? 1 : 0, y: titleText.length >= fullTitle.length ? 0 : 20 }}
                                className="space-y-6"
                            >
                                <p className="text-xl md:text-2xl font-bold text-charcoal/80">
                                    Use estratégia, conquiste!
                                </p>
                                <p className="text-lg text-charcoal/70 leading-relaxed max-w-xl">
                                    Educa e diverte! Um jogo para jogar com a galera. <br />
                                    Ideal para presentes de Aniversário e Natal.
                                </p>
                                <div className="pt-4">
                                    <div className="text-4xl font-black text-charcoal mb-1">R$ 77,99</div>
                                    <div className="text-lg font-bold text-charcoal/60 mb-8 uppercase tracking-widest">Frete Grátis</div>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="https://www.amazon.com.br/Diarquia-Filos%C3%B3fico-Hist%C3%B3rico-Racioc%C3%ADnio-Estrat%C3%A9gico/dp/B0DNNFZG5M"
                                            target="_blank"
                                            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-charcoal text-[#FFB701] font-black uppercase text-sm tracking-widest rounded-xl hover:scale-105 transition-transform shadow-2xl"
                                        >
                                            Comprar Agora <ChevronRight size={20} />
                                        </a>
                                        <a
                                            href="https://diarquia-cardgame.onrender.com/"
                                            target="_blank"
                                            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-transparent border-2 border-charcoal text-charcoal font-black uppercase text-sm tracking-widest rounded-xl hover:bg-charcoal hover:text-[#FFB701] transition-all shadow-xl"
                                        >
                                            Testar Digital
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="lg:w-1/2 flex justify-center">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: [0, -20, 0]
                                }}
                                transition={{
                                    opacity: { duration: 0.8, ease: "easeOut" },
                                    scale: { duration: 0.8, ease: "easeOut" },
                                    y: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                src="/img/diarquia/BANNER MAN copiar.webp"
                                alt="Diarquia Game"
                                className="w-full max-w-lg drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Video Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            className="lg:w-1/2 w-full aspect-video bg-charcoal rounded-3xl overflow-hidden shadow-2xl border-8 border-white group relative"
                        >
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/yjeOJW3HyHw"
                                title="Diarquia Manual"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 50 }}
                            className="lg:w-1/2 space-y-8"
                        >
                            <h2 className="text-4xl font-black text-charcoal leading-tight uppercase">
                                SOBRE O JOGO DE CARTAS "DIARQUIA"
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Combine aprendizado e diversão com temas históricos.",
                                    "Perfeito para reuniões familiares e eventos educativos.",
                                    "Cartas duráveis com design premium Ishtar-class.",
                                    "40 cartas de 88x63mm e 50 moedas metálicas inclusas."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-lg text-charcoal/70">
                                        <div className="mt-1.5 w-2 h-2 bg-sofia-vinho rounded-full flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cards Mechanics */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl font-black text-center mb-20 text-charcoal uppercase">Como funciona o jogo?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Ataque", img: "unnamed (1).webp", desc: "Ataque oponentes com cartas como Maquiavel. Inutilizável apenas por cartas de proteção." },
                            { title: "Benefício", img: "unnamed (2).webp", desc: "Use Adam Smith para sacar moedas ou cartas adicionais do baralho." },
                            { title: "Bloqueio", img: "unnamed (3).webp", desc: "Bloqueie ataques usando Hannah Arendt ou classes de Liberais Clássicos." },
                            { title: "Proteção", img: "unnamed (4).webp", desc: "Use os Templários para se defender a qualquer momento, mesmo fora do seu turno." }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center"
                            >
                                <img src={`/img/diarquia/${card.img}`} alt={card.title} className="w-full h-auto mb-6 rounded-xl shadow-lg" />
                                <h3 className="text-2xl font-black mb-4 text-charcoal uppercase italic">{card.title}</h3>
                                <p className="text-charcoal/60 leading-relaxed text-sm">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Acquire Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-black text-center mb-16 text-charcoal uppercase">POR QUE ADQUIRIR O JOGO "DIARQUIA"?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Combate ao Tédio", img: "unnamed.webp", desc: "Diarquia oferece uma atividade envolvente e desafiadora, perfeita para exercitar a mente de forma lúdica." },
                            { title: "Diversão Offline", img: "unnamed (2).webp", desc: "Um jogo analógico que não depende de conexão, ideal para viagens, acampamentos ou dias sem luz." },
                            { title: "Alivia a Mente", img: "unnamed (3).webp", desc: "Desvie a atenção das preocupações com um raciocínio estratégico e criativo em cada rodada." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 30 }}
                                className="bg-gray-50 p-8 rounded-3xl"
                            >
                                <img src={`/img/diarquia/${item.img}`} alt={item.title} className="w-full h-auto mb-6 rounded-2xl shadow-lg border-4 border-white" />
                                <h3 className="text-2xl font-black mb-4 uppercase italic">{item.title}</h3>
                                <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* For Whom Section */}
            <section className="py-24 bg-charcoal text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-black text-center mb-16 uppercase text-[#FFB701]">PARA QUEM É DESTINADO?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Estrategistas", img: "unnamed (8).webp" },
                            { title: "Professores", img: "unnamed (9).webp" },
                            { title: "Estudantes", img: "unnamed (4).webp" },
                            { title: "Amantes de História", img: "unnamed (10).webp" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center"
                            >
                                <img src={`/img/diarquia/${item.img}`} alt={item.title} className="w-full h-auto mb-4 rounded-xl md:grayscale hover:grayscale-0 transition-all" />
                                <h3 className="font-black text-sm uppercase tracking-widest">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About the Author Section */}
            <section className="py-24 bg-white/5 relative border-y border-charcoal/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 max-w-5xl mx-auto">
                        <div className="lg:w-1/3 flex justify-center">
                            <div className="relative">
                                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-charcoal shadow-[0_0_50px_rgba(0,0,0,0.2)] p-1.5 bg-charcoal">
                                    <img
                                        src="/img/autor2.webp"
                                        alt="GARVES K. B."
                                        className="w-full h-full object-cover rounded-full"
                                        style={{ objectPosition: 'center 20%' }}
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-charcoal text-[#FFB701] px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest shadow-xl border border-[#FFB701]/20">
                                    Criador
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/3 space-y-8">
                            <h2 className="text-4xl font-sofia-serif font-black text-charcoal uppercase italic tracking-tighter">
                                SOBRE O <span className="text-white bg-charcoal px-2">AUTOR</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "Formação", desc: "Mestre em Filosofia pela UEM, une rigor acadêmico ao entretenimento." },
                                    { title: "Propósito", desc: "Ideal para trabalhar FILOSOFIA, SOCIOLOGIA E HISTÓRIA de forma prática." },
                                    { title: "Validação", desc: "Testado e aprovado em sala de aula por centenas de estudantes reais." },
                                    { title: "Mecânica", desc: "Focado no desenvolvimento do pensamento crítico e estratégia política." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-charcoal/5 p-6 rounded-2xl border border-charcoal/10">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 mb-2">{item.title}</h4>
                                        <p className="text-charcoal font-bold text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section (Amazon Style) */}
            <section className="py-24 bg-charcoal relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-left mb-16 border-b border-white/5 pb-8">
                        <h2 className="text-3xl font-sofia-serif font-black mb-2 uppercase tracking-tighter text-white">AVALIAÇÕES DE CLIENTES</h2>
                        <div className="flex items-center gap-4">
                            <div className="flex text-[#FFB701]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" stroke="none" />
                                ))}
                            </div>
                            <span className="text-white/60 text-sm font-bold">5 de 5 estrelas</span>
                        </div>
                        <p className="text-[#FFB701]/40 text-[10px] mt-2 uppercase font-black tracking-[0.3em]">Baseado em jogadores reais da Amazon</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                id: 1,
                                user: "Felipe Bassaco",
                                title: "Estratégia pura e muita diversão!",
                                date: "15 de Janeiro de 2026",
                                content: "Muito estratégico. Me lembra um pouco uno ou pife, mas com poderes divertidos. As classes são bem equilibradas e as mecânicas de golpe são hilárias.",
                                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felipe"
                            },
                            {
                                id: 2,
                                user: "Rhaíssa Santos",
                                title: "Altíssima qualidade!",
                                date: "20 de Janeiro de 2026",
                                content: "Incrível, super recomendo. Tudo muito bem feito e inteligente. É visível o cuidado com a pesquisa histórica e filosófica por trás de cada carta.",
                                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rhaissa"
                            },
                            {
                                id: 3,
                                user: "Cecília Borges",
                                title: "Educativo e viciante",
                                date: "05 de Fevereiro de 2026",
                                content: "Recebi e gostei muito, jogo bem ilustrado e inteligente. Meus filhos adoraram e agora estão curiosos sobre os filósofos. Valeu!",
                                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cecilia"
                            }
                        ].map((review) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-5"
                            >
                                {/* User Identity */}
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/5 overflow-hidden ring-1 ring-white/10">
                                        <img src={review.avatar} alt={review.user} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-[12px] font-bold text-white/90 uppercase tracking-tighter">{review.user}</span>
                                </div>

                                {/* Rating & Title */}
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-center gap-2">
                                        <div className="flex text-[#FFB701]">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill="currentColor" stroke="none" />
                                            ))}
                                        </div>
                                        <h3 className="text-[13px] font-black text-white leading-tight uppercase italic">{review.title}</h3>
                                    </div>
                                    <div className="text-[11px] text-white/40">
                                        Avaliado no Brasil em {review.date}
                                    </div>
                                    <div className="text-[10px] text-[#FFB701] font-bold uppercase tracking-widest mt-1">Compra Verificada</div>
                                </div>

                                {/* Review Body */}
                                <p className="text-[13px] leading-relaxed text-white/70 text-justify font-light">
                                    "{review.content}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-32 bg-charcoal text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-sofia-vinho/20 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
                        <img
                            src="/img/diarquia/MOCKUP COM CARTAS 2 COM MOEDAS sem fundo.webp"
                            alt="Diarquia Full"
                            className="w-full max-w-2xl drop-shadow-[0_0_100px_rgba(255,183,1,0.2)]"
                        />
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase">Preparado para <br /> ser o soberano?</h2>
                            <p className="text-xl text-white/60 mb-8">O duelo filosófico definitivo espera por você.</p>
                            <a
                                href="https://www.amazon.com.br/Diarquia-Filos%C3%B3fico-Hist%C3%B3rico-Racioc%C3%ADnio-Estrat%C3%A9gico/dp/B0DNNFZG5M"
                                target="_blank"
                                className="inline-block px-12 py-6 bg-[#FFB701] text-charcoal font-black uppercase text-lg tracking-widest rounded-2xl hover:bg-white transition-colors shadow-2xl"
                            >
                                ADQUIRIR AGORA
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-[#FFB701]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-5xl font-black text-center mb-16 text-charcoal uppercase">FAQ ✨</h2>
                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <details key={i} className="group bg-white/30 rounded-2xl overflow-hidden border border-charcoal/5 transition-all outline-none">
                                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg list-none select-none">
                                    {item.q}
                                    <span className="transition-transform group-open:rotate-180 font-black">+</span>
                                </summary>
                                <div className="px-6 pb-6 text-charcoal/70 leading-relaxed font-medium">
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
