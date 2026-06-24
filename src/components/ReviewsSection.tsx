import { motion } from "motion/react";
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const reviews = [
    {
        id: 2,
        user: "Ana Carla Nogarotto",
        avatar: "/img/Ana Carla Nogarotto.webp",
        rating: 5,
        title: "Ishtar e Eva: Duas faces de uma mesma moeda tecnológica",
        date: "10 de Fevereiro de 2026",
        content: "Não conseguia parar de ler! O embate entre a divindade ancestral e a consciência artificial é fascinante. O livro levanta questões filosóficas profundas sobre o que nos torna humanos na era das máquinas.",
        verified: true
    },
    {
        id: 3,
        user: "Nelci Nogarotto",
        avatar: "/img/Nelci Nogarotto.webp",
        rating: 5,
        title: "Uma narrativa eletrizante e futurística!",
        date: "02 de Março de 2026",
        content: "A Bruxa das Máquinas é simplesmente eletrizante! A forma como o autor constrói a tensão e o suspense em torno da IA e do destino da humanidade me manteve presa do início ao fim. Uma jornada intensa que redefine o gênero.",
        verified: true
    },
    {
        id: 4,
        user: "Elivelton Carvalho",
        avatar: "/img/Elivelton.webp",
        rating: 5,
        title: "Uma experiência de identificação e aventura",
        date: "04 de Março de 2026",
        content: "Ler esse livro, foi sem duvidas, uma experiência que mistura identificação e aventura. Amarrados em uma trama cativante que te leva de um passado longínquo a um futuro próximo de ficção cientifica, onde antigos artefatos místicos se misturam com programações de inteligência artificial, estão personagem que te convidam a se aprofundar cada vez mais no intimo da humanidade. Seja na mãe atarefada, na jovem cheia de questões internas, no pai protetor ainda que distante, todos podem se identificar com uma dessas pessoas tão bem desenvolvidas no decorrer dessa obra, a conexão que é construída com cada personagem nos faz sentir parte dessa história emocionante e filosófica, fazendo com que o leitor cresça junto com a narrativa, até o desfecho que surpreende e emociona a qualquer um que embarca nessa narrativa tão única.",
        verified: true
    },
    {
        id: 5,
        user: "Carlinha",
        avatar: "/img/carlinha.png",
        rating: 5,
        title: "Super recomendo",
        date: "13 de Maio de 2026",
        content: "Conforme avancei na trama fui completamente envolvida por acontecimentos cada vez mais intensos, cada novo capítulo me deixou profundamente imersa na narrativa, como se eu estivesse vivenciando tudo ao lado dos personagens.\n\nEva, a inteligência artificial implantada na mente de Hannah, foi um dos elementos mais fascinantes da obra. A forma como essa consciência grandiosa se desenvolve e busca proteger Hannah, inclusive da própria bruxa Ishtar, torna a narrativa ainda mais impactante. Cada cena foi descrita de maneira tão intensa que senti como se estivesse vivendo todos aqueles acontecimentos, tornando essa leitura extremamente envolvente e inesquecível.\n\nCom o cenário da terceira guerra mundial, Hannah enfrenta momentos profundamente dolorosos, especialmente ao se ver distante de sua mãe. Essas cenas são carregadas de intensidade, tensão e emoção, proporcionando uma visão arrebatadora de um mundo devastado pela guerra.\n\nA combinação entre geopolítica, fantasia urbana, filosofia e ficção científica foi simplesmente grandiosa. O autor construiu uma narrativa rica em reflexões, utilizando acontecimentos históricos, conflitos globais e questões sobre o futuro da humanidade de forma extremamente inteligente. É o tipo de leitura que não apenas proporciona uma fuga da realidade, mas também leva o leitor a refletir profundamente sobre ela.",
        verified: true
    },
    {
        id: 6,
        user: "Pietra Seráfico",
        avatar: "/img/Pietra.png",
        rating: 5,
        title: "Resenha @pietraserafico",
        date: "13 de Abril de 2026",
        format: "Kindle",
        content: "A obra entrega uma mistura eletrizante de ficção científica, fantasia e mitologia em um cenário caótico, onde a Terceira Guerra Mundial explode e transforma tudo ao redor em destruição.\n\nA história acompanha Elora Borges, uma embaixadora brasileira desesperada em busca da filha desaparecida. Mas enquanto luta contra o colapso do mundo, Hannah (sua filha) enfrenta algo ainda maior: dentro dela habitam uma inteligência artificial e uma deusa ancestral.\n\nHannah se torna o centro de um conflito que vai muito além da guerra física. Entre tecnologia e misticismo, ela precisa lidar com forças que não entende completamente, e aprender a controlá-las antes que seja tarde demais.\n\nTudo isso cria uma narrativa intensa, cheia de ação, mas também carregada de reflexões sobre propósito, identidade e poder.",
        verified: true
    },
    {
        id: 7,
        user: "Lidiane",
        avatar: "/img/Lidiane.png",
        rating: 5,
        title: "Cinco estrelas",
        date: "13 de Maio de 2026",
        format: "Mercado Livre",
        content: "Ainda não li inteiro, mas a arte da capa é muito bonita e espero que a leitura surpreenda. A entrega foi excelente.",
        verified: true
    },
    {
        id: 8,
        user: "Jhonatan Nascimento",
        avatar: "/img/Jhonatan Nascimento.webp",
        rating: 5,
        title: "Livro fenomenal!",
        date: "13 de Maio de 2026",
        format: "Amazon",
        content: "Livro fenomenal! A narrativa é envolvente e mantém o ritmo do início ao fim. Além do enredo impactante, o capricho visual do autor é surreal; as ilustrações são de uma qualidade absurda e funcionam como um mergulho profundo na jornada da Hannah. É uma experiência literária e visual completa.",
        verified: true
    }
];

export function ReviewsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showControls, setShowControls] = useState(false);

    useEffect(() => {
        const checkControls = () => {
            if (scrollRef.current) {
                setShowControls(scrollRef.current.scrollWidth > scrollRef.current.clientWidth);
            }
        };

        checkControls();
        const resizeObserver = new ResizeObserver(checkControls);
        if (scrollRef.current) resizeObserver.observe(scrollRef.current);

        return () => resizeObserver.disconnect();
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-24 bg-charcoal relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/5 pb-8 gap-6">
                    <div>
                        <h2 className="text-3xl font-display font-bold mb-2">AVALIAÇÕES DE CLIENTES</h2>
                        <div className="flex items-center gap-4">
                            <div className="flex text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" stroke="none" />
                                ))}
                            </div>
                            <span className="text-white/60 text-sm font-bold">5 de 5 estrelas</span>
                        </div>
                        <p className="text-white/30 text-xs mt-2 uppercase tracking-widest">Baseado em leitores da pré-venda</p>
                    </div>

                    {showControls && (
                        <div className="flex gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="p-3 rounded-full border border-white/10 text-white/40 hover:text-emerald hover:border-emerald/50 transition-all bg-white/5 cursor-pointer"
                                aria-label="Anterior"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-3 rounded-full border border-white/10 text-white/40 hover:text-emerald hover:border-emerald/50 transition-all bg-white/5 cursor-pointer"
                                aria-label="Próximo"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </div>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-8 scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0"
                >
                    {reviews.map((review) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: review.id * 0.1 }}
                            className="flex-none w-[85%] md:w-[calc(33.333%-1.35rem)] snap-start flex flex-col gap-4"
                        >
                            {/* User Identity */}
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-white/10 overflow-hidden ring-1 ring-white/20">
                                    <img src={review.avatar} alt={review.user} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <span className="text-sm font-medium text-white/90">{review.user}</span>
                                    {review.verified && (
                                        <div className="flex items-center gap-1.5 text-[10px] text-emerald/60 font-bold">
                                            <CheckCircle2 size={10} strokeWidth={3} />
                                            Compra Verificada
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Rating & Title */}
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                fill={i < review.rating ? "currentColor" : "none"}
                                                stroke={i < review.rating ? "none" : "currentColor"}
                                                className={i < review.rating ? "" : "text-white/20"}
                                            />
                                        ))}
                                    </div>
                                    <h3 className="text-sm font-bold text-white leading-tight">{review.title}</h3>
                                </div>
                                <div className="text-[11px] text-white/40">
                                    Avaliado no Brasil em {review.date} {review.format && <span className="opacity-60"> • Formato: {review.format}</span>}
                                </div>
                            </div>

                            {/* Review Body */}
                            <p className="text-[13px] leading-relaxed text-white/70 text-justify">
                                {review.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
