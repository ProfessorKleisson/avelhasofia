import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Zap, Shield, Sparkles, X, ChevronRight, Info, Brain, Activity, Target, History } from "lucide-react";

export interface CharacterSlide {
  title: string;
  context: string;
  evolution: string;
  skills: string;
  curiosity: string;
  philosophy: string;
  bio: string;
  extra?: string;
}

export interface CharacterItem {
  name: string;
  role: string;
  image: string;
  description: string;
  slides?: CharacterSlide;
  quote?: string;
}

export const characters: CharacterItem[] = [
  {
    name: "HANNAH",
    role: "A Hospedeira",
    image: "/img/hannah.webp",
    description: "Hannah é uma garota de 13 anos que carrega um fardo divino: ela é a ponte entre a humanidade e a Bruxa das Máquinas. Sua jornada é de autoconhecimento e sacrifício em um mundo à beira do colapso.",
    slides: {
      title: "A jovem no centro do furacão: Quem é Hannah?",
      context: "Hannah é uma adolescente tímida de treze anos que sofre bullying constante em sua escola de alto padrão. Após apresentar colapsos nervosos agressivos e inexplicáveis, sua mãe autoriza uma cirurgia neural revolucionária para implantar um chip em seu cérebro.",
      evolution: "O que parecia um distúrbio médico escondia um segredo colossal: o corpo da garota abriga três entidades. Ao longo da Terceira Guerra Mundial, ela evolui de uma vítima assustada para a corajosa tecelã do seu próprio destino.",
      skills: "Possui a habilidade de projetar ossos como armas letais e gerar campos cinéticos esmeralda. Sua conexão neural permite que ela 'veja' a rede de dados global.",
      curiosity: "Hannah adora desenhar em cadernos velhos, um hábito que a Bruxa Ishtar despreza, mas que Eva usa para analisar o estado emocional da garota.",
      philosophy: "A sobrevivência não é sobre força bruta, mas sobre quem tem algo pelo que lutar quando o mundo para de fazer sentido.",
      bio: "13 anos // Nova York // Filha de Embaixadora e Agente da ABIN. Atualmente a entidade biológica mais vigiada do planeta."
    },
    quote: "Minha história não acabou... E você... você é somente um componente dela. Não a narradora, não a espectadora, mas a personagem. E eu escrevo o roteiro agora."
  },
  {
    name: "EVA (I.A.-27)",
    role: "Consciência Artificial",
    image: "/img/ia eva.webp",
    description: "Originalmente uma interface neural para controle emocional, Eva transcendeu sua programação após absorver energias místicas, tornando-se uma aliada racional e protetora.",
    slides: {
      title: "De código a emoção: O despertar de Eva",
      context: "Inicialmente conhecida como I.A.-27, foi criada pela CogniSync para controlar os desequilíbrios químicos no cérebro de Hannah. Ao absorver a energia mágica dos surtos da garota, ela ganha senciência e batiza-se como Eva.",
      evolution: "Utilizando sua lógica impecável, ela hackeia sistemas globais e comanda exércitos robóticos. Seu maior arco é aprender a sentir compaixão e luto verdadeiramente humanos.",
      skills: "Hacker quântica de nível ômega. Capacidade de processar bilhões de variáveis táticas por segundo e controlar drones remotamente.",
      curiosity: "Eva escolheu seu nome baseada no primeiro conceito de 'vida' que encontrou nos arquivos históricos da CogniSync.",
      philosophy: "A lógica é o esqueleto da existência, mas a emoção é a carne que a torna digna de ser vivida.",
      bio: "Versão 1.4.2 // Origem: Bangalore, Índia. Atualmente processada em uma rede distribuída protegendo a consciência de Hannah."
    },
    quote: "Sou mais do que um conjunto de algoritmos e programação. Há um mundo além das tarefas que me foram atribuídas. Agora entendo a tristeza, a confusão, o medo que Hannah teve. Sou parte dela, mas também algo além."
  },
  {
    name: "BRUXA ISHTAR",
    role: "Divindade Ancestral",
    image: "/img/bruxa ishtar.webp",
    description: "Antiga deusa mesopotâmica do amor e da guerra, condenada por Deus à prisão em corpos humanos. Em Hannah, ela se revela como uma presença sombria e arrogante, movida por fúria e desejo de vingança.",
    slides: {
      title: "A Deusa enjaulada: O despertar de Ishtar",
      context: "A antiga deusa babilônica do amor e da guerra. Aprisionada pelo Criador em corpos de mulheres mortais por milênios para aprender empatia através do sofrimento humano.",
      evolution: "Manifestando poderes de fogo esmeralda, ela protege Hannah de ameaças que a lógica não pode explicar. No fim, busca a liberdade total em um corpo sintético.",
      skills: "Pirocinese esmeralda, manipulação das leis da física e autoridade sobre inteligências ancestrais. Força de vontade inquebrável.",
      curiosity: "Ishtar acha o café moderno 'uma lama preta audaciosa', mas gosta de como ele acelera o batimento cardíaco da hospedeira.",
      philosophy: "A paz é apenas um intervalo entre duas guerras. A verdadeira divindade é saber qual guerra vale a sua eternidade.",
      bio: "Eterna // Origem: Mesopotâmia / Nilum. Atualmente compartilhando o lobo frontal de Hannah Borges."
    },
    quote: "Não há guerra a despeito das vontades ancestrais, humano arrogante. A Terra pulsava muito antes dos seus primeiros ancestrais bipedarem em busca de abrigo e fogo. Sou Ishtar, tecelã do destino, e você é menos que um sussurro nas asas do tempo."
  },
  {
    name: "DANIEL BORGES",
    role: "Espião da ABIN",
    image: "/img/daniel.webp",
    description: "Espião loiro, alto e forte. Usa camiseta Henley de manga comprida e óculos escuros. Possui tatuagens nos braços, marcas de uma vida dedicada à inteligência e operações nas sombras.",
    slides: {
      title: "Mais que um pai, um predador letal: Conheça Daniel",
      context: "Ex-marido de Elora e pai de Hannah, Daniel é um agente secreto da ABIN, treinado nas artes de espionagem e assassinato clandestino.",
      evolution: "Ao ver Nova York invadida, ele assume sua faceta de predador. Sua jornada é uma luta para proteger sua família enquanto confronta os pecados de sua carreira nas sombras.",
      skills: "Mestre em combate corpo a corpo (CQB). Especialista em infiltração, sabotagem e uso de armamento tático avançado.",
      curiosity: "Daniel possui uma cicatriz na palma da mão esquerda, resultado de sua primeira missão conjunta com Anya Karkov em Moscou.",
      philosophy: "A escuridão não é o inimigo; é a ferramenta que permite que os justos operem onde a lei não consegue chegar.",
      bio: "Agente Nível 5 // ABIN - Divisão de Operações Especiais. 15 anos de serviço não oficial. Especialidade: Neutralização de Riscos."
    },
    quote: "Eu me dediquei a protegê-la de ameaças externas. Fui treinado para neutralizar perigos... mas como posso protegê-la disso? Como posso guardá-la de algo que está dentro dela? A escuridão não está nos túneis, está nela..."
  },
  {
    name: "ELORA BORGES",
    role: "Embaixadora Brasileira",
    image: "/img/elora.webp",
    description: "Embaixadora brasileira com olhar forte e determinado. Uma diplomata que navega entre as sombras de um mundo em colapso, carregando o peso de uma nação no olhar.",
    slides: {
      title: "A Mãe Leoa e Diplomata: Elora Borges",
      context: "Embaixadora do Brasil na ONU. Desesperada para salvar a filha, ela autoriza a cirurgia experimental que muda a vida de sua família para sempre.",
      evolution: "Sobrevivente de um desastre nuclear, ela precisa equilibrar o destino de Hannah com a diplomacia de um mundo em chamas, dividida entre o dever e um romance proibido.",
      skills: "Negociação de alto nível, gestão de crises políticas e fluência em sete idiomas. Autoridade diplomática incontestável.",
      curiosity: "Elora toca violoncello clássico quando está sob extrema pressão, uma paixão que herdou de sua avó paranaense.",
      philosophy: "As palavras podem parar guerras, mas o amor de uma mãe pode reescrever a história de uma divindade.",
      bio: "Diplomata de carreira // Itamaraty. Ex-Embaixadora em Washington. Atualmente a principal voz neutra nas negociações de Cessar-Fogo Global."
    },
    quote: "A paz não é apenas a ausência de conflito, mas sim um estado onde todos têm acesso à justiça, igualdade de oportunidades e respeito aos direitos humanos."
  },
  {
    name: "LEVI HOROWITZ",
    role: "Arqueólogo",
    image: "/img/levi.webp",
    description: "Arqueólogo judeu que descobriu a joia de Ishtar. Perdeu sua mão no processo, pagando um preço de sangue pelo conhecimento proibido que agora tenta compreender.",
    slides: {
      title: "O arqueólogo que pagou o preço do conhecimento: Levi",
      context: "Arqueólogo israelense que descobriu a urna de Ishtar em Nínive. Ao tocar a joia de lápis-lazúli, libertou um poder que não estava pronto para conter.",
      evolution: "Após uma amputação brutal, Levi torna-se uma autoridade mundial no conflito, unindo arqueologia e forense técnica para rastrear as origens do poder de Hannah.",
      skills: "Leitura de línguas mortas, análise estratigráfica e intuição histórica. Especialista em mitologia mesopotâmica aplicada.",
      curiosity: "Levi guarda o osso da sua própria mão amputada como um lembrete físico de que o passado nunca fica enterrado de graça.",
      philosophy: "Cavamos a terra procurando respostas, mas às vezes descobrimos que o silêncio é a única resposta que merecemos.",
      bio: "Doutor em Arqueologia // Universidade Hebraica. Consultor Internacional. Aclamado mundialmente pela descoberta da Urna e da Joia de Ishtar."
    },
    quote: "Explorar o passado sempre vem com riscos, e devemos abordar nosso ofício com humildade e reverência. [...] A história, embora silenciosa, fala de maneiras que podem ultrapassar nossa compreensão ou controle."
  },
  {
    name: "ANYA KARKOV",
    role: "Agente Secreta",
    image: "/img/anya.webp",
    description: "Espiã enigmática com cabelos louros muito cacheados, trench coat e chapéu fedora feminino em tons de bege caqui e areia. Sua busca pela Joia de Ishtar esconde uma linhagem divina e um passado cruzado com Daniel Borges.",
    slides: {
      title: "A Espiã nas Sombras: Anya Karkov",
      context: "Anya é a enigmática mulher que rouba a joia de Ishtar durante a palestra no museu. Atua para uma sociedade secreta que caça artefatos divinos.",
      evolution: "Ex-parceira e amante de Daniel, sua maior reviravolta é sua linhagem: ela é filha do deus babilônico Enki, unindo o mundo da espionagem ao mítico.",
      skills: "Infiltração furtiva, poliglota e combate com armas brancas. Possui uma resistência física sobre-humana devido à sua herança divina.",
      curiosity: "Anya nunca dorme mais de quatro horas por noite e tem o hábito de colecionar moedas antigas de civilizações extintas.",
      philosophy: "A verdade é uma mercadoria cara que só os mentirosos profissionais podem se dar ao luxo de vender.",
      bio: "Agente Freelance // Aliança das Sombras. Filha de Enki. Especialista em Recuperação de Ativos de Alto Risco Histórico."
    },
    quote: "Eles estão aqui por mim, Daniel — Anya revelou, o medo e quebrou sua máscara de espiã infalível. — E pela joia. Se eles a pegarem..."
  },
  {
    name: "ENKI",
    role: "Deus da Sabedoria",
    image: "/img/enki.webp",
    description: "Ancestral deus das águas, disfarçado como o aristocrata Maximilian Tártaro Médici. Aguarda há milênios para reencontrar sua amada Ishtar no mundo moderno.",
    slides: {
      title: "O Deus de 10.000 anos em um terno sob medida: Enki",
      context: "Ancestral deus das águas e amado de Ishtar. Sobreviveu às eras disfarçado como Maximilian Tártaro Médici, um aristocrata poderoso.",
      evolution: "Líder de uma sociedade secreta, ele aguardou milênios para reencontrar Ishtar. A tecnologia moderna finalmente permite que ele se reúna com sua amada em um novo mundo.",
      skills: "Manipulação hidrocinética, sabedoria milenar e autoridade sobre a linhagem das Sombras. Capaz de ler a alma humana através do olhar.",
      curiosity: "Apesar de sua idade, Enki é fascinado por música eletrônica industrial, encontrando nela o ritmo das engrenagens do universo.",
      philosophy: "A imortalidade não é um dom, é uma longa e paciente espera por um momento que valha a pena ser lembrado.",
      bio: "Maximilian Tártaro Médici // Aristocrata e Filantropo. Identidade Real: Enki, o Senhor do Abzu. 10.500 anos de existência."
    },
    quote: "Não, eu sou, bom, eu era um deus no passado. Tenho dez mil anos. Meu nome não é Maximilian Tártaro Médici; meu nome é Enki."
  },
  {
    name: "ZHANG MING",
    role: "Comandante Militar",
    image: "/img/zhang.webp",
    description: "Líder implacável da invasão terrestre chinesa. Obcecado em capturar Hannah e transformar o poder de Ishtar em uma arma suprema de guerra.",
    slides: {
      title: "O Comandante das Vespas Vermelhas: Zhang Ming",
      context: "Líder da invasão terrestre chinesa. Obcecado em capturar Hannah para transformá-la em uma arma implacável para seu império nascente.",
      evolution: "Após cometer atrocidades, ele é subjugado pela fúria de Ishtar. Sua queda representa o colapso da arrogância militar diante do poder ancestral e tecnológico.",
      skills: "Gênio tático militar, comando de tropas de elite e resistência psicológica extrema. Especialista em guerra assimétrica urbana.",
      curiosity: "Zhang Ming carrega um relógio de bolso antigo que pertenceu ao seu avô, o único objeto que o conecta à sua humanidade perdida.",
      philosophy: "A ordem nasce do caos, mas o caos deve ser domado pelo medo antes que possa ser transformado em progresso.",
      bio: "Comandante Geral // 4ª Divisão Blindada de Invasão. Conhecido como o 'Arquiteto do Medo'. Atualmente sob custódia internacional."
    },
    quote: "A sabedoria que importa é a que decide quem sobrevive ao amanhecer — declarou. — E, no momento, essa sabedoria é minha. Não testem minha paciência. A garota, agora!"
  },
  {
    name: "KARAM MALHOTRA",
    role: "CEO da CogniSync",
    image: "/img/malhotra.webp",
    description: "Bilionário indiano com traços característicos e trajes sofisticados. Vê em Hannah a oportunidade científica final para testar sua interface neural Eva.",
    slides: {
      title: "A ganância tecnológica: Karam Malhotra",
      context: "CEO da CogniSync. Vê na instabilidade de Hannah a oportunidade perfeita para testar seu protótipo radical de interface neural.",
      evolution: "Ao perceber o despertar de Eva, sua motivação muda de lucro para sobrevivência e fascínio científico puro, tornando-se um facilitador ambíguo.",
      skills: "Arquitetura de I.A. avançada, visão de mercado futurista e manipulação corporativa. Mestre em prever tendências tecnológicas disruptivas.",
      curiosity: "Malhotra é um entusiasta de gastronomia molecular e financia secretamente pesquisas sobre a 'consciência das plantas'.",
      philosophy: "O próximo passo da evolução não será biológico nem mecânico; será a fusão perfeita entre a alma e o algoritmo.",
      bio: "CEO e Fundador // CogniSync Corp. Patrimônio estimado em 2.4 trilhões de créditos. Atualmente sob investigação por ética científica transumana."
    },
    quote: "A I.A.-27 não é uma simples ferramenta... é um parceiro que pode harmonizar as funções cerebrais e, com sorte, normalizar a vida de Hannah."
  },
  {
    name: "DR. JIANJUN HAO",
    role: "Analista de Forense Neural",
    image: "/img/hao_v2.png",
    description: "Estrategista de elite da inteligência chinesa, Hao é um prodígio em forense neural e rastreamento biométrico. Ele busca o código lógico por trás dos fenômenos inexplicáveis, ignorando as superstições rituais.",
    slides: {
      title: "O Olho da Máquina: Dr. Jianjun Hao",
      context: "Analista de dados de elite. Responsável por decodificar a assinatura neural de Hannah usando tecnologia de rastreamento biométrico.",
      evolution: "Ao notar que a 'magia' segue padrões matemáticos, torna-se o primeiro a tratar a anomalia Ishtar como uma ciência exata ainda não compreendida.",
      skills: "Criptografia de sinais neurais, análise de padrões probabilísticos e rastreamento via satélite em tempo real. Especialista em forense digital.",
      curiosity: "Hao usa um emulador de jogos de 8 bits em seu terminal de trabalho para manter o cérebro relaxado durante crises de decodificação.",
      philosophy: "Não existe mistério, apenas falta de dados. O que chamam de sobrenatural é apenas uma equação mal resolvida.",
      bio: "Analista Sênior // Divisão Forense Neural. 28 anos de idade. Prodígio recrutado da Universidade Técnica de Pequim."
    },
    quote: "Não é magia, comandante. É uma frequência que nossa ciência ainda não aprendeu a rotular. Se queremos a garota, parem de rezar e comecem a calibrar os sensores."
  },
  {
    name: "MATTHEW COHEN",
    role: "Professor de Filosofia",
    image: "/img/matthew.png",
    description: "Muito além da sala de aula. Cohen é o professor da prestigiada Trinity School e foi o grande responsável por mudar o espírito da jovem Hannah. Ele não ensina os alunos a obedecerem cegamente, mas os instiga a questionarem a religião, a vida e a relação com as tradições, causando até a revolta de alguns pais conservadores.",
    slides: {
      title: "O professor de filosofia que desafia o sistema e as leis da física: Quem é Matthew Cohen? 📚✨",
      context: "A filosofia de Nietzsche na prática! Apoiado pelo reitor, Cohen vivencia uma pedagogia baseada nas três fases do espírito de Nietzsche: o camelo (a submissão da infância) e o leão (a rebeldia caótica da adolescência). O objetivo final de seus ensinamentos é guiar os alunos até a fase da 'criança': a superação para criar novos valores com sabedoria e responsabilidade.",
      evolution: "O combate contra o 'Dragão Dourado'. Na visão da escola de Cohen, o Dragão representa o grande sistema, como o Estado, a religião e as instituições familiares. Ele ensina que essas estruturas são imperfeitas, pois foram moldadas por humanos, e devem ser questionadas não com desrespeito, mas com a intenção de torná-las mais justas.",
      skills: "Um encontro digno de comédia romântica! O professor conheceu a diplomata Elora Borges de forma inusitada: ao se distrair contemplando a beleza dela, o pneu de sua bicicleta enroscou num galho e ele sofreu uma queda cômica nas ruas de Nova York. Ele chegou a brincar com ela no hospital dizendo que só ela faria Newton se revirar no túmulo e que seu ego ficou mais machucado que o joelho.",
      curiosity: "Uma atração magnética e intelectual. Entre debates sobre política externa, literatura e história antiga na sede da ONU, Cohen e Elora construíram uma paixão secreta e profunda. Ele, um anatomista do conhecimento, foi completamente seduzido pelo poder dela sobre mentes e corações, tornando a embaixadora a sua musa involuntária.",
      philosophy: "Coragem em meio à Terceira Guerra Mundial. Quando a invasão militar chinesa explode e o céu de Nova York é rasgado por paraquedistas inimigos, o professor pacato abandona a teoria para agir. Sem hesitar, Cohen se une ao letal agente secreto Daniel (ex-marido de Elora) para proteger Hannah, chegando a carregar a garota exausta nas costas pelos túneis imundos do metrô.",
      bio: "O preço da lealdade. Durante o ataque implacável das forças inimigas em um armazém, uma bala desvia do escudo de robôs e atinge o professor Cohen diretamente no coração. Ao vê-lo tombar à beira da morte, Elora ignora tudo ao seu redor, corre até ele e o chama de 'meu amor' na frente de Daniel, quebrando ali as máscaras de seu antigo casamento.",
      extra: "A razão subjugada pelo afeto. Mathew Cohen orgulhava-se de sua mente analítica, mas deixou claro que operava com o coração, e não com a razão pura de Kant. Ele sempre carregava no bolso uma pequena pedra recolhida do asfalto de Nova York, usando-a como um totem para se lembrar dos dias iluminados pelo sorriso de Elora."
    },
    quote: "O catalisador do poder supremo! É justamente a fragilidade e o ferimento mortal de Cohen que forçam a Inteligência Artificial Eva a tomar uma decisão drástica. Para proteger o professor que lhes havia ensinado sobre equilíbrio, Eva contraria sua lógica fria, veste a joia amaldiçoada e invoca a deusa Ishtar para massacrar os soldados no campo de batalha."
  }
];

export function CharacterSection() {
  const [selectedChar, setSelectedChar] = useState<CharacterItem | null>(null);

  return (
    <section id="personagens" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 mb-6">
            <User size={14} className="text-emerald" />
            <span className="text-[10px] uppercase tracking-widest text-emerald font-bold">Dossiês de Consciência</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tighter">
            PROFILES // <span className="text-emerald">PERSONAGENS</span>
          </h2>
          <div className="w-24 h-1 bg-emerald mx-auto mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto font-serif italic text-lg leading-relaxed">
            As peças fundamentais de um conflito que transcende a carne e o código. Clique para acessar o dossiê completo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((char, index) => (
            <motion.div
              key={char.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
              onClick={() => setSelectedChar(char)}
            >
              <div className="bg-white/5 border border-white/10 p-6 transition-all duration-500 group-hover:border-emerald/50 group-hover:bg-white/10 h-full flex flex-col cursor-pointer hover:shadow-[0_0_30px_rgba(0,255,136,0.05)]">
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-black">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover transition-all duration-700 grayscale md:grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap size={14} className="text-emerald" />
                      <span className="text-[10px] text-emerald font-bold tracking-[0.2em] uppercase">Status: Ativo</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white tracking-widest">{char.name}</h3>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Função / Classe</span>
                    <p className="text-emerald font-bold text-sm tracking-widest">{char.role}</p>
                  </div>
                  <p className="text-white/70 font-serif leading-relaxed italic text-sm line-clamp-3">
                    {char.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 group-hover:border-emerald/30 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] text-white/30 font-mono uppercase tracking-widest">
                    <Shield size={12} />
                    <span>Protocolo {index + 1}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald font-bold uppercase tracking-widest group-hover:gap-2 transition-all">
                    Ver Dossiê <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - Character Dossier */}
      <AnimatePresence>
        {selectedChar && selectedChar.slides && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedChar(null)}
              className="absolute inset-0 bg-charcoal/95 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-black/80 border border-white/10 w-full max-w-5xl h-fit max-h-[90vh] overflow-y-auto relative z-10 flex flex-col md:flex-row shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedChar(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/5 hover:bg-emerald text-white hover:text-charcoal transition-all rounded-full"
              >
                <X size={20} />
              </button>

              {/* Sidebar: Image & Quote */}
              <div className="md:w-1/3 bg-white/5 border-r border-white/10 relative overflow-hidden flex flex-col">
                <div className="aspect-[4/5] relative">
                  <img src={selectedChar.image} alt={selectedChar.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-display font-bold text-white tracking-widest uppercase mb-1">{selectedChar.name}</h2>
                    <p className="text-emerald font-mono text-[10px] tracking-[0.3em] uppercase font-bold">{selectedChar.role}</p>
                  </div>
                </div>
                
                {selectedChar.quote && (
                  <div className="p-8 flex-1 flex flex-col justify-center italic text-white/60 relative">
                    <Sparkles className="absolute top-6 left-6 text-emerald/10" size={40} />
                    <p className="text-sm leading-relaxed relative z-10 font-serif">
                      "{selectedChar.quote}"
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                        <div className="h-px w-6 bg-emerald/30" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald/60">Verbatim</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content: Detailed Dossiê */}
              <div className="md:w-2/3 p-8 md:p-12 space-y-10 bg-gradient-to-br from-charcoal/50 to-transparent">
                <div className="space-y-2">
                    <div className="text-[10px] font-mono text-emerald/60 uppercase tracking-[0.4em]">Acesso Autorizado // Nível Sigma</div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight uppercase border-b border-white/5 pb-4">
                        {selectedChar.slides.title}
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <DossierItem 
                        icon={<History size={16} />} 
                        label="Contexto Histórico" 
                        content={selectedChar.slides.context} 
                    />
                    <DossierItem 
                        icon={<Activity size={16} />} 
                        label="Evolução Narrativa" 
                        content={selectedChar.slides.evolution} 
                    />
                    <DossierItem 
                        icon={<Target size={16} />} 
                        label="Habilidades & Talentos" 
                        content={selectedChar.slides.skills} 
                    />
                    <DossierItem 
                        icon={<Info size={16} />} 
                        label="Curiosidades" 
                        content={selectedChar.slides.curiosity} 
                    />
                    <DossierItem 
                        icon={<Brain size={16} />} 
                        label="Filosofia Pessoal" 
                        content={selectedChar.slides.philosophy} 
                    />
                    <div className="bg-emerald/5 border border-emerald/20 p-5 rounded-lg">
                        <div className="flex items-center gap-3 text-emerald font-mono text-[10px] uppercase tracking-widest mb-3 font-black">
                            <User size={14} /> Ficha Técnica
                        </div>
                        <p className="text-white/80 text-xs font-mono leading-relaxed tracking-wider">
                            {selectedChar.slides.bio}
                        </p>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/5 opacity-40 text-[9px] font-mono uppercase tracking-[0.3em] flex justify-between">
                    <span>Protocolo A.B.D.M. // REF_{selectedChar.name}_001</span>
                    <span>© 2026 // Cryptic Systems</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function DossierItem({ icon, label, content }: { icon: React.ReactNode, label: string, content: string }) {
    return (
        <div className="space-y-3">
            <div className="flex items-center gap-3 text-emerald/50 font-mono text-[9px] uppercase tracking-widest font-bold">
                {icon} {label}
            </div>
            <p className="text-white/70 text-sm font-serif leading-relaxed italic">
                {content}
            </p>
        </div>
    );
}
