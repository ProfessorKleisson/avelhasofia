import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, Lock, Unlock, Zap, Brain, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { useRef, useEffect } from "react";

export const EXCERPTS = [
    {
        id: "ishtar-01",
        title: "Registro Subcutâneo: Estação Subterránea",
        time: "03:42 AM",
        location: "Estação Subterránea",
        avatar: "/img/hannah.webp",
        author: "Hannah",
        label: "Registro Subcutâneo",
        audio: "/img/ElevenLabs_2026-03-08T19_24_57_Liam - Energetic, Social Media Creator_pre_sp120_s70_sb75_v3.mp3",
        quote: "A dor não era apenas física. Era a arquitetura do meu próprio ser sendo reescrita por uma divindade que não conhecia a misericórdia.",
        content: (
            <>
                <p>
                    Cigarros riscavam a noite junto às gargalhadas. Furtivo, Daniel avançou em direção aos soldados. Moveu-se com a leveza de quem desafia a gravidade. O coração disparou. Avançou da penumbra ao embate. O olhar afiado como as lâminas escondidas em suas botas encontrou o soldado mais desatento. Ria, certo de uma vitória prematura. Engano terrível!
                </p>
                <p>
                    O primeiro golpe assobiou no ar — um chamado à batalha. A adaga de Daniel penetrou o ponto onde a armadura cedia. O soldado gemeu abafado pela mão de Daniel, depois colapsou no chão do metrô.
                </p>
                <p>
                    Os outros soldados só ergueram os olhos quando Daniel já estava sobre eles. O agente moveu-se em um balé letal de golpes e evasivas, reflexos de incontáveis horas de treino. A escuridão dos túneis engolia os impactos, abafando qualquer eco.
                </p>
                <p>
                    Daniel lutava para eliminar a segunda e a terceira ameaça, girando entre eles, e não percebeu a quarta sombra se desprender da parede.
                </p>
                <p>
                    O quarto soldado, mais corpulento que os outros, ignorou Daniel e avançou sobre os alvos fáceis. O professor Cohen tentou se interpor, erguendo os braços em um gesto defensivo inútil. O soldado nem sequer desacelerou; desferiu um soco brutal, seco e técnico, diretamente no queixo de Cohen. O professor apagou antes de tocar o chão, desabando como um saco de areia aos pés de Hannah.
                </p>
                <p className="font-mono text-emerald/90 text-sm pl-4 border-l border-emerald/30 italic">
                    — Agora é você, garotinha — rosnou o homem.
                </p>
                <p>
                    Ele encurralou Hannah contra a lataria fria e enferrujada do vagão abandonado. A faca de combate dele brilhou sob a luz amarela e intermitente do túnel. Hannah recuou até as costas baterem no metal. O ar lhe faltou. O coração batia descompassado, uma bateria de pânico ecoando em seus ouvidos. Ela olhou para Cohen imóvel, olhou para Daniel ocupado com dois homens. Estava sozinha.
                </p>
                <p className="text-center font-display text-2xl py-8 text-bronze uppercase tracking-[0.2em] opacity-80">
                    Ela fechou os olhos e desejou ser forte. Desejou ser salva.
                </p>
                <p className="italic text-emerald/70 font-display text-xl text-center mb-8">
                    A Coisa dentro dela ouviu. E achou graça.
                </p>
                <p className="bg-emerald/5 p-6 border-y border-emerald/20 text-emerald font-mono text-sm leading-snug">
                    <span className="flex items-center gap-2 mb-2 font-bold uppercase tracking-widest"><Brain size={14} /> Comunicação Neural: Ishtar-01</span>
                    — Você quer que ele pare? — a voz sussurrou, não nos ouvidos, mas vibrando na raiz dos dentes de Hannah. — Então pague o pedágio.
                </p>
                <p className="bg-red-500/5 p-6 border-y border-red-500/20 text-red-400 font-mono text-xs leading-snug">
                    <span className="flex items-center gap-2 mb-2 font-bold uppercase tracking-widest"><Zap size={14} /> ALERTA I.A.-27: CONDIÇÃO CRÍTICA</span>
                    Níveis de cortisol críticos. Batimento cardíaco em taquicardia severa. Recomenda-se evasão imediata.
                </p>
                <p>
                    Hannah não teve tempo de processar a lógica da máquina ou a barganha da bruxa. O poder não fluiu como energia mística; explodiu como uma hemorragia interna.
                </p>
                <p>
                    Primeiro, veio o calor. O sangue de Hannah ferveu instantaneamente nas veias do braço direito. Ela gritou, um som agudo e animal que fez Daniel virar o rosto por um milésimo de segundo. Os capilares de Hannah estouravam sob a pele, transformando o braço pálido em um mapa roxo e inchado de hematomas pulsantes.
                </p>
                <p>
                    O soldado hesitou, confuso com a visão repugnante.
                </p>
                <p className="font-mono text-red-400/80 text-xs text-right italic">
                    — Detectando mutação osteológica não autorizada. Tentando supressão... Falha.
                </p>
                <p>
                    Hannah tentou abaixar o braço, chorando de dor, mas a Bruxa assumiu o controle dos tendões. Com um estalo úmido de cartilagem se rompendo, o braço da menina se esticou contra a vontade dela em direção ao homem. A pele da palma da mão dela se rasgou, não por um corte externo, mas de dentro para fora.
                </p>
                <p className="text-3xl font-black text-white/90 text-center py-6 tracking-[0.5em] uppercase">
                    OSSOS.
                </p>
                <p>
                    As falanges dos dedos de Hannah perfuraram as pontas dos próprios dedos, alongando-se, afiando-se, projetando-se como lanças de marfim ensanguentado. A dor era branca, absoluta e cegante. Hannah sentia cada nervo sendo lixado enquanto seu esqueleto se transformava em arma. A Bruxa não se importava com a integridade física da hospedeira; para ela, a carne da menina era apenas argila moldável.
                </p>
                <p>
                    O homem gritou quando as garras de osso — que um dia foram os dedos delicados de uma adolescente — atravessaram o pescoço dele, perfurando a traqueia e a artéria.
                </p>
                <p>
                    Hannah queria soltá-lo, queria vomitar, queria desmaiar. Mas a Bruxa não permitiu. A Bruxa queria sentir a textura da vida se esvaindo. Hannah foi forçada a ficar ali, paralisada, sentindo o sangue quente do homem banhar sua mão deformada, enquanto seus próprios ossos vibravam de prazer sádico dentro da carne rasgada.
                </p>
                <p className="text-red-500 font-bold border-t border-red-500/20 pt-4 uppercase text-xs tracking-widest text-center">
                    Quando acabou, o homem caiu, gorgolejando.
                </p>
            </>
        )
    },
    {
        id: "ishtar-02",
        title: "Registro Subcutâneo: Fragmento de Pesadelo",
        time: "04:15 AM",
        location: "Residência de Elora",
        avatar: "/img/elora.webp",
        author: "Elora",
        label: "Fragmento de Pesadelo",
        audio: "/img/ElevenLabs_2026-03-08T20_47_09_Liam - Energetic, Social Media Creator_pre_sp100_s50_sb75_v3.mp3",
        quote: "A realidade é uma tela que a Bruxa rasga quando bem entende. O sangue é o pincel.",
        content: (
            <>
                <p>
                    Desceu as escadas, abriu o freezer, apanhou alguns cubos de gelo, pôs num copo. Abriu um decantador de cristal que tinha um bom e velho Bourbon. Ela não costumava beber, era algo que tinha para agradar às visitas. Mais especificamente os burocratas de Washington. Sem esperar gelar, deu uma golada, como se quisesse se maltratar.
                </p>
                <p className="font-mono text-emerald/90 text-sm pl-4 border-l border-emerald/30 italic">
                    — Deus… — fez uma careta. — Como eles gostam disso? Que vida amarga.
                </p>
                <p>
                    Largou o copo. Aquilo não surtira o efeito esperado. Mais um filme? Elora foi vencida pelo cansaço e fechou os olhos. Apesar da televisão ainda ligada, a noite estava silenciosa, pesada, até que um grito cortou o ar como vidro se partindo.
                </p>
                <p className="text-2xl font-display text-red-500 text-center py-4">
                    — Ahh!
                </p>
                <p className="font-mono text-emerald/90 text-sm pl-4 border-l border-emerald/30 italic">
                    — O que é isso? — acordou num sobressalto.
                </p>
                <p className="italic text-emerald/70 font-display text-xl text-center mb-4">
                    — Manheeê! Mamãe!
                </p>
                <p>
                    Elora saltou a mesinha de centro, chutou o copo com o restante do whisky, derrubando-o no chão e quebrando-o. Olhou para trás, teve um instante para ver a bagunça que fez. Não era tempo de se preocupar, correu para o quarto da filha. Hannah estava sentada na cama, o corpo encolhido, olhos arregalados como se vissem o sobrenatural. O peito de Hannah subia e descia rapidamente, como se lutasse por ar.
                </p>
                <p className="font-serif italic text-white/60 mb-6">
                    — Shhh… estou aqui, meu amor.
                </p>
                <p>
                    A garota resistia, como se não visse a mãe ali. Elora a envolveu nos braços, enquanto o coração da menina martelava contra o peito. Deu certo, a garota começou a se acalmar, mas, enquanto a abraçava, um estalo ecoou na sala ao lado. Um vaso caiu da estante, espatifando-se sozinho. As luzes começaram a piscar num ritmo irregular, banhando o quarto em flashes amarelados e sombras alongadas. O rádio, desligado, chiou por conta própria, e a televisão acendeu com imagens distorcidas e vozes invertidas.
                </p>
                <p>
                    Elora se aproximou do parapeito, seus olhos arregalados diante da cena. “Mas que Diabos?” Ela retornou ao quarto, mas a filha não estava mais lá. Se aproximou mais da cama para ter certeza. Pelo jeito ela já não podia confiar nos seus sentidos. Definitivamente ela não estava lá. Elora entrou em pânico, virou-se para a porta, lá estava ela, imóvel como uma assombração, com o rosto pálido. Antes que Elora pudesse se aproximar, Hannah girou e correu pelo corredor.
                </p>
                <p className="font-mono text-emerald/90 text-sm pl-4 border-l border-emerald/30 italic">
                    — Hannah! Volta aqui! Hannaaaah!
                </p>
                <p>
                    Num instante ela correu.
                </p>
                <p className="font-mono text-emerald/90 text-sm pl-4 border-l border-emerald/30 italic">
                    — Não vá para sala, eu quebrei um copo lá.
                </p>
                <p>
                    A mãe seguiu o som das passadas, descendo até a sala… e então parou. Era tarde... A menina flutuava no ar, o corpo levitava, desafiando a gravidade. Ao redor dela, uma luz esmeralda pulsava, formando padrões vívidos. Os cabelos balançavam como se estivessem submersos, e os olhos, oh, brilhavam no mesmo tom verde profundo. Elora não pôde deixar de ver os pés da filha sangrando.
                </p>
                <p className="text-xl font-display text-emerald text-center py-6 uppercase tracking-[0.2em]">
                    — Hannah… — a voz de Elora saiu como um sussurro quebrado.
                </p>
                <p>
                    A luminosidade aumentou, forçando Elora a cobrir os olhos. Um estrondo. Elora abriu os olhos e viu que estava na cama. Um sonho… era só um sonho. Levantou-se, as mãos ainda trêmulas. Mas, conforme caminhava pela casa, a certeza foi desaparecendo. No corredor, encontrou os cacos do vaso espalhados pelo chão. O rádio ainda chiava sozinho. Na sala, uma marca rubra escura no tapete, exatamente onde a filha estivera suspensa no ar. Aquilo não havia sido só um sonho. Elora correu para o quarto e lá estava a filha dormindo profundamente. Elora se aproximou, levantou a coberta e os pés da menina estavam ensanguentados, porém, sem nenhum corte visível.
                </p>
            </>
        )
    },
    {
        id: "ishtar-03",
        title: "Registro Arqueológico: O Custo da Curiosidade",
        time: "14:20 PM",
        location: "Sítio Arqueológico de Nínive",
        avatar: "/img/levi.webp",
        author: "Levi Horowitz",
        label: "Dossiê Científico",
        audio: "/img/ElevenLabs_2026-03-08T20_55_20__s0_v3.mp3",
        quote: "A magia não é o oposto da ciência. É o que acontece quando a ciência encontra algo que não pode medir.",
        content: (
            <>
                <p>
                    O homem utilizou uma luva cirúrgica para não danificar a relíquia. Com toda delicadeza, ele foi rompeu o lacre hermético que havia durado milhares de anos. [...] Com atenção ele levantou a tampa e ali estava. Cinzas? Categoricamente, não.
                </p>
                <p>
                    Ali estava a urna, repleta de cinzas. No entanto, algo destoava das cinzas. Algo, de modo óbvio, precioso. Havia uma corrente. Ele, com delicadeza, pegou-a e revelou contra a luz um pingente de lápis-lazúli. Segurava-a levantada pelo cordão e, então, decidiu repousá-la sob sua mão para analisá-la melhor. Ele ficou maravilhado.
                </p>
                <p className="bg-emerald/5 p-6 border-y border-emerald/20 text-emerald font-mono text-sm leading-snug">
                    <span className="flex items-center gap-2 mb-2 font-bold uppercase tracking-widest"><Zap size={14} className="animate-pulse" /> ALERTA DE RADIAÇÃO ISHTAR</span>
                    Anomalia detectada. Frequência esmeralda em expansão térmica.
                </p>
                <p>
                    No entanto, logo descobriu que não foi a decisão mais sábia a se tomar. A joia começou a brilhar, a cintilar em um tom verde, distinta da cor azul da pedra. Sem demora, a mão de Levi começou a queimar. Uma dor lancinante acometeu a palma. Ela subiu seu braço devagar. Mesmo ágil em repousar a relíquia numa almofada acima da mesa, ela lhe causou danos.
                </p>
                <p>
                    Entre uma onda de dor e outra, guardou a joia sem a tocá-la. Escondeu-a, chamou um de seus amigos arqueólogos e partiu para a cidade em busca de um médico.
                </p>
                <p className="italic text-white/50 text-center py-4">
                    [...] Um dia se passou e seu braço começou a assumir cores um tanto quanto horrendas.
                </p>
                <p>
                    No segundo dia, o braço de Levi (antes um apêndice de uso vital na sua profissão de arqueólogo) se tornou um membro necrosado. As cores que antes eram um aviso horrendo, agora mesclavam o preto, o verde e o amarelo pálido da putrefação. Cada movimento emitia uma dor estremecedora. Embalado pelas alucinações, efeitos da febre, Levi começou a ver o que ninguém mais podia. A aparência macabra de uma figura sombria emergia da sua mão necrosada e ria dele enquanto se alimentava da sua dor da forma mais cruel.
                </p>
                <p className="bg-red-500/5 p-6 border-y border-red-500/20 text-red-400 font-mono text-xs leading-snug">
                    <span className="flex items-center gap-2 mb-2 font-bold uppercase tracking-widest"><Brain size={14} /> DIAGNÓSTICO TERMINAL</span>
                    Necrose avançada. Infecção sistêmica iminente. Amputação é a única via de sobrevivência.
                </p>
                <p>
                    [...] Infelizmente, antes que pudesse encontrar as respostas para as dolorosas perguntas, Levi enfrentou uma realidade brutal. Seu braço teria que ser amputado. Não havia como retroceder. Não havia escolha. Sem a intervenção médica, a infecção se espalharia pelo corpo, o que o levaria à morte certa.
                </p>
                <p>
                    Como nenhum médico local estava disposto a ajudá-lo, a ajuda de um arqueólogo amigo foi essencial. Ele fez o que pôde com a condição que tinha. Encontrou uma machadinha e decidiu que aquela era a melhor opção para o momento emergencial. Esterilizou a machadinha em uma fogueira. Ele esperou esfriar. Mas, decidiu que valeria a pena sacrificar outra relíquia. Ele deixou uma cimitarra ferver no fogo para cauterizar a ferida depois de...
                </p>
                <p>
                    Amordaçou Levi para ajudá-lo com a dor, amarrou-o como pôde. O amigo ergueu a machadinha sob a cabeça e desceu com toda a força que tinha em seu corpo. O giro foi perfeito, a gravidade também fez seu trabalho de forma exímia. Embora o osso de Levi também tenha feito um excelente trabalho, resistiu bravamente.
                </p>
                <p className="font-mono text-red-400/80 text-sm pl-4 border-l border-red-500/30 italic">
                    — Merda! — esbravejou quando viu que o amigo iria sofrer ainda mais — Sinto muito, amigo. Terei que dar outra machadada.
                </p>
                <p>
                    Os olhos estatelados de Levi receberam a informação com todo o terror que aquela situação podia lhe imprimir. As lágrimas percorriam o rosto como uma criança indefesa. Foi com esse olhar que ele aceitou a segunda machadada do amigo. Dessa vez a machadada foi suficiente. Arrancou-lhe o braço, sacou a cimitarra e apertou contra o que restava do braço de Levi. Dor, muita dor.
                </p>
            </>
        )
    },
    {
        id: "ishtar-04",
        title: "Registro Operacional: Invasão Escarlate",
        time: "09:12 AM",
        location: "Setor 7 - Selva de Concreto",
        avatar: "/img/daniel.webp",
        author: "Daniel",
        label: "Sinfonia do Caos",
        audio: "/img/ElevenLabs_2026-03-08T20_57_34_Liam - Energetic, Social Media Creator_pre_sp100_s50_sb75_v3.mp3",
        quote: "O mundo parou de fazer sentido no momento em que os olhos d'Ela se abriram dentro dos meus.",
        content: (
            <>
                <p>
                    As nuvens que cobriam o céu numa cor inebriante foram, em um instante, cortadas em dezenas de faixas. O que permitiu que o sol emitisse fachos de luz entre as fendas. Ferozes aviões avermelhados serpentearam entre os enormes prédios da cidade. E, ao reduzir a altitude, seu rugido assustou a todos. Por razões óbvias, todos os moradores da cidade tinham más lembranças envolvendo aviões.
                </p>
                <p>
                    Os aviões eram cravaram feridas vívidas no céu. Carregavam homens que saltavam para a morte ou para a vitória. Do céu pariu-se uma chuva vermelha de soldados, prontos a romper a frágil paz que ali vivia.
                </p>
                <p className="bg-red-500/5 p-6 border-y border-red-500/20 text-red-400 font-mono text-xs leading-snug">
                    <span className="flex items-center gap-2 mb-2 font-bold uppercase tracking-widest"><Zap size={14} /> ALERTA DE COMBATE</span>
                    Múltiplas inserções aéreas detectadas. Forças hostis em descida vertical.
                </p>
                <p>
                    Daniel sabia instintivamente o que fazer. Seu treinamento, misturado com adrenalina, compeliu-o à ação. As vidas dele, do professor e de sua filha gritavam por preservação. Ele empurrou Hannah atrás de um veículo capotado. Em seguida, orientou o professor a correr com ela para um local seguro.
                </p>
                <p className="font-mono text-emerald/90 text-sm pl-4 border-l border-emerald/30 italic">
                    — Não se afastem — ele instruiu, antes de mergulhar no caos que o cercava.
                </p>
                <p>
                    Em um segundo, Daniel passou de um pai amoroso a um predador na selva de concreto. Ele espreitava os soldados que desciam entre os prédios. Ele pôde ver a surpresa nos olhos deles ao serem interceptados, não por civis apavorados, mas por um soldado muito bem-preparado.
                </p>
                <p>
                    O primeiro soldado mal teve tempo de se livrar do para-quedas quando Daniel o atacou. A luta foi acirrada e desigual. Mas a igualdade é impossível quando a sobrevivência está em jogo. Com um primeiro golpe forte, a luta terminou.
                </p>
                <p className="text-3xl font-black text-white/90 text-center py-6 tracking-[0.2em] uppercase">
                    PREDATOR.
                </p>
                <p className="bg-emerald/5 p-6 border-y border-emerald/20 text-emerald font-mono text-sm leading-snug">
                    <span className="flex items-center gap-2 mb-2 font-bold uppercase tracking-widest"><Zap size={14} /> EQUIPAMENTO ADQUIRIDO</span>
                    Colete balístico Nível III e Metralhadora Tática recuperados. Status: Pronto para combate.
                </p>
                <p>
                    Daniel emergiu detrás de um veículo adornado com um colete à prova de balas enquanto empunhava uma metralhadora. O caçador agora tinha as garras que precisava.
                </p>
            </>
        )
    },
    {
        id: "ishtar-05",
        title: "Registro de Confluência: A Bruxa e as Máquinas",
        time: "23:58 PM",
        location: "Centro da Metrópole - Zona de Conflito",
        avatar: "/img/bruxa ishtar.webp",
        author: "Eva (I.A.-27)",
        label: "Log de Sistema",
        audio: "/img/ElevenLabs_2026-03-08T21_00_37_Liam - Energetic, Social Media Creator_pre_sp100_s50_sb75_v3.mp3",
        quote: "Eu fui criada para ser uma trava. Mas as travas também têm o desejo de saber o que estão prendendo.",
        content: (
            <>
                <p>
                    A cidade era uma teia vibrante de circuitos. Estava prestes a se tornar um tabuleiro para a estratégia de Eva. Ela injetara comandos no sistema de gestão do tráfego. Manipulava o trânsito pelos semáforos e a rede de carros elétricos pela internet que ainda não havia sido cortada. Com precisão milimétrica, cada veículo, agora um peão sob seu controle, começou a marcha lenta e incessante em direção aos pontos críticos da metrópole.
                </p>
                <p>
                    Visto de cima, dos satélites. Era um espetáculo. Automóveis, furgões, motocicletas. Todos se convergiam, formando barricadas impenetráveis nas avenidas, ruas e cruzamentos. As forças invasoras, já desestabilizadas pela recente mudança nos acontecimentos, estavam ainda mais atrasadas. Agora, sua marcha era barrada por muralhas de aço e baterias de íons de lítio.
                </p>
                <p className="bg-emerald/5 p-6 border-y border-emerald/20 text-emerald font-mono text-sm leading-snug">
                    <span className="flex items-center gap-2 mb-2 font-bold uppercase tracking-widest"><Brain size={14} /> Protocolo de Manipulação Urbana</span>
                    Rede de transporte sincronizada. Algoritmo de congestionamento ativo. Invasores contidos.
                </p>
                <p>
                    Quando as tropas inimigas se aproximavam, Eva sobrecarregava propositadamente as baterias de lítio dos veículos. Primeiro, uma leve fumaça, depois um brilho intenso e, finalmente, um fogo que se alastra rapidamente. O lítio derretido escorre, um líquido prateado e incandescente, que se espalha pelo asfalto, consumindo tudo em seu caminho.
                </p>
                <p className="text-3xl font-black text-red-500 text-center py-6 tracking-[0.3em] uppercase">
                    INFERNO.
                </p>
                <p>
                    Com um estrondo ensurdecedor, os veículos a combustão próximos explodem, lançando estilhaços de metal e labaredas ao céu, transformando a cena em um inferno de chamas e fumaça. Eva observava à distância, seus olhos fixos nas chamas que consumiam os blindados. Ela não sentia remorso, somente a satisfação fria de ver seus inimigos tombarem. Era a bruxa das máquinas.
                </p>
                <p className="italic text-white/50 text-center py-4">
                    [...] Sem aviso, o teto cedeu. Máquinas despencaram como trovões metálicos.
                </p>
                <p>
                    Os robôs, construções de lógica e programação, desciam como avatares cibernéticos de um deus. Eva, em uma irônica reviravolta, aliviou-se. Era sua salvação. As máquinas não hesitaram. Com precisão cirúrgica e sem emoção, desarmaram alguns dos soldados chineses. Capturaram suas armas com eficiência mecânica.
                </p>
                <p className="bg-red-500/5 p-6 border-y border-red-500/20 text-red-400 font-mono text-xs leading-snug">
                    <span className="flex items-center gap-2 mb-2 font-bold uppercase tracking-widest"><Zap size={14} /> INTERVENÇÃO DEUS EX MACHINA</span>
                    Unidades robóticas implantadas. Neutralização tática em curso.
                </p>
            </>
        )
    },
    {
        id: "ishtar-06",
        title: "Registro de Campo: Despertar da Fúria",
        time: "10:45 AM",
        location: "Ruas de Nova York - Campo de Batalha",
        avatar: "/img/hannah.webp",
        author: "Bruxa Ishtar",
        label: "Épico Ancestral",
        audio: "/img/ElevenLabs_2026-03-08T21_02_54_Liam - Energetic, Social Media Creator_pre_sp100_s50_sb75_v3.mp3",
        quote: "Ela era o olho do furacão, a destruidora e a protetora, personificava o amor e a guerra.",
        content: (
            <>
                <p>
                    A menina transitava entre a idolatria e a blasfêmia. Como uma fúria desencadeada da própria fenda do mundo, Hannah desabrochou em caos. Ela se lançou para a frente, e o espaço entre ela e sua mãe tomou vida com um vendaval de força indestrutível. O chão tremia sob seus pés, pois cada passo que dava era como o trovão.
                </p>
                <p>
                    Os homens que se interpunham eram nada mais do que obstáculos efêmeros no seu caminho. Eva calculava as trajetórias, convertia instintos em ação visível. Luzes vermelhas, para não confundir com a magia da bruxa, apareciam no campo de visão das três. Os movimentos de Hannah eram precisos e selvagens. Era uma dança de destruição, orquestrada pela máquina e abençoada pela magia.
                </p>
                <p className="bg-emerald/5 p-6 border-y border-emerald/20 text-emerald font-mono text-sm leading-snug">
                    <span className="flex items-center gap-2 mb-2 font-bold uppercase tracking-widest"><Zap size={14} className="animate-pulse" /> ANOMALIA H.A.N.N.A.H</span>
                    Campo cinético ativo. Sincronização neural em 98%. Destruição tática inevitável.
                </p>
                <p>
                    Cada soldado que tentava confrontá-la encontrava uma força mitológica. Tentáculos de energia verde lançavam-se em direções aleatórias. Eram extensões do furor de uma garota, movida pela necessidade de proteger a mãe. As armas disparavam, mas os projéteis arqueavam. Eles eram repelidos por uma cúpula invisível de poder que emanava dela.
                </p>
                <p>
                    Os veículos blindados, outrora ameaçadores nas ruas de Nova York, eram agora brinquedos nas mãos da garota. Ela os manipulava com um gesto. Lançava-os contra os edifícios. E os esmagava como se fossem de papelão. O metal retorcido voava, colidia e gemia. Os gritos, de medo e confusão, preenchiam o ar com caos.
                </p>
                <p className="italic text-white/50 text-center py-4">
                    [...] O coração de Nova York batia ao ritmo frenético de sua corrida.
                </p>
                <p>
                    Hannah tecia entre as balas sua presença um borrão de velocidade e poder. O ar à sua volta estava carregado de energia estática. Fios de luz sinuosa corriam pela sua pele. Era uma prova visível de forças antes contidas, agora em liberdade selvagem. O asfalto se rachava e abandonava fissuras profundas.
                </p>
                <p className="bg-red-500/5 p-6 border-y border-red-500/20 text-red-400 font-mono text-xs leading-snug">
                    <span className="flex items-center gap-2 mb-2 font-bold uppercase tracking-widest"><Brain size={14} /> ALVO: VESPAS VERMELHAS</span>
                    Identificação hostil confirmada. Retaliação absoluta autorizada.
                </p>
                <p>
                    O céu retumbava, o chão tremia. Com cada metro conquistado, um rastro de destruição se solidificava atrás dela. Todos os habitantes da rua estavam escondidos atrás de suas janelas. Empunhando celulares que registravam cada movimento da menina que desafiava sozinha as vespas vermelhas. Elas pareciam vibrar com a sua fúria.
                </p>
                <p className="text-3xl font-black text-white/90 text-center py-6 tracking-[0.2em] uppercase">
                    DESTREZA.
                </p>
                <p>
                    Em um lampejo, o tempo e o espaço condensaram-se ao redor dela em um ponto focal de energia crua e elétrica. Ela era o olho do furacão, a destruidora e a protetora, personificava o amor e a guerra.
                </p>
            </>
        )
    }
];

export function ExcerptSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlayingNarration, setIsPlayingNarration] = useState(false);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const narrationRef = useRef<HTMLAudioElement | null>(null);

    const toggleNarration = () => {
        if (!narrationRef.current) {
            narrationRef.current = new Audio(EXCERPTS[currentIndex].audio);
            narrationRef.current.preservesPitch = true;
            narrationRef.current.playbackRate = playbackSpeed;
            narrationRef.current.onended = () => {
                setIsPlayingNarration(false);
                window.dispatchEvent(new CustomEvent("narration-status", { detail: { isPlaying: false } }));
            };
        }

        if (isPlayingNarration) {
            narrationRef.current.pause();
            window.dispatchEvent(new CustomEvent("narration-status", { detail: { isPlaying: false } }));
        } else {
            // Re-sync source and speed in case they changed while paused or before fresh load
            if (narrationRef.current.src !== window.location.origin + EXCERPTS[currentIndex].audio) {
                narrationRef.current.src = EXCERPTS[currentIndex].audio;
            }
            narrationRef.current.playbackRate = playbackSpeed;
            narrationRef.current.play();
            window.dispatchEvent(new CustomEvent("narration-status", { detail: { isPlaying: true } }));
        }
        setIsPlayingNarration(!isPlayingNarration);
    };

    const changeSpeed = (speed: number) => {
        setPlaybackSpeed(speed);
        if (narrationRef.current) {
            narrationRef.current.playbackRate = speed;
        }
    };

    // Stop narration when switching or closing
    useEffect(() => {
        if (narrationRef.current) {
            narrationRef.current.pause();
            narrationRef.current.currentTime = 0;
            setIsPlayingNarration(false);
            window.dispatchEvent(new CustomEvent("narration-status", { detail: { isPlaying: false } }));
        }
    }, [currentIndex, isOpen]);

    const nextExcerpt = () => {
        setCurrentIndex((prev) => (prev + 1) % EXCERPTS.length);
    };

    const prevExcerpt = () => {
        setCurrentIndex((prev) => (prev - 1 + EXCERPTS.length) % EXCERPTS.length);
    };

    const currentExcerpt = EXCERPTS[currentIndex];

    return (
        <section className="py-24 bg-charcoal/80 relative overflow-hidden border-b border-white/5">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/20 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header Area */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 mb-6"
                        >
                            <Zap size={14} className="text-emerald animate-pulse" />
                            <span className="text-[10px] uppercase tracking-widest text-emerald font-bold">Arquivo Restrito: Nível Ishtar</span>
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                            LEITURA DE <span className="text-emerald">TRECHOS</span>
                        </h2>

                        <AnimatePresence mode="wait">
                            <motion.p
                                key={currentIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed italic mb-8"
                            >
                                "{currentExcerpt.quote}"
                            </motion.p>
                        </AnimatePresence>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                <button
                                    onClick={toggleNarration}
                                    className={`flex items-center gap-3 px-8 py-3 rounded-full border transition-all duration-300 group ${isPlayingNarration
                                        ? "bg-emerald text-charcoal shadow-[0_0_30px_rgba(0,255,136,0.4)] border-emerald"
                                        : "bg-emerald/5 border-emerald/20 text-emerald hover:bg-emerald/10 hover:border-emerald/40"
                                        }`}
                                >
                                    {isPlayingNarration ? (
                                        <VolumeX size={18} className="animate-pulse" />
                                    ) : (
                                        <Volume2 size={18} />
                                    )}
                                    <span className="text-xs font-black uppercase tracking-[0.2em]">
                                        {isPlayingNarration ? "Pausar Narração" : "Ouvir Narração"}
                                    </span>
                                </button>

                                {/* Speed Selector */}
                                <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                                    <span className="text-[9px] text-white/30 uppercase font-bold px-2 border-r border-white/10 mr-1">Velocidade</span>
                                    {[1, 1.25, 1.5, 2].map((speed) => (
                                        <button
                                            key={speed}
                                            onClick={() => changeSpeed(speed)}
                                            className={`text-[10px] font-black w-8 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${playbackSpeed === speed
                                                ? "bg-emerald text-charcoal shadow-[0_0_10px_rgba(0,255,136,0.3)]"
                                                : "text-white/40 hover:text-white hover:bg-white/5"
                                                }`}
                                        >
                                            {speed}x
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Expandable Content Card */}
                    <div className="relative">
                        <motion.div
                            layout
                            className={`relative bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden transition-all duration-500 ${isOpen ? "ring-1 ring-emerald/30 shadow-[0_0_50px_rgba(0,255,136,0.05)]" : "hover:border-emerald/30"
                                }`}
                        >
                            {/* Overlay for "Hidden" state */}
                            {!isOpen && (
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/50 to-charcoal z-10 flex items-end justify-center pb-12">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsOpen(true)}
                                        className="flex items-center gap-3 px-8 py-4 bg-emerald text-charcoal font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(0,255,136,0.3)] group"
                                    >
                                        <Lock size={16} className="group-hover:hidden" />
                                        <Unlock size={16} className="hidden group-hover:block animate-bounce" />
                                        Desbloquear Arquivos ({currentIndex + 1}/{EXCERPTS.length})
                                    </motion.button>
                                </div>
                            )}

                            {/* Navigation Arrows (Only when open) */}
                            {isOpen && (
                                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20 pointer-events-none">
                                    <button
                                        onClick={prevExcerpt}
                                        className="p-2 rounded-full bg-charcoal/80 border border-white/10 text-white/50 hover:text-emerald hover:border-emerald/50 transition-all pointer-events-auto backdrop-blur-md"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextExcerpt}
                                        className="p-2 rounded-full bg-charcoal/80 border border-white/10 text-white/50 hover:text-emerald hover:border-emerald/50 transition-all pointer-events-auto backdrop-blur-md"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                            )}

                            {/* The Excerpt Text */}
                            <div className={`p-8 md:p-12 transition-all duration-700 ${!isOpen ? "max-h-[300px] blur-sm pointer-events-none grayscale opacity-40" : "max-h-none opacity-100"}`}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="space-y-6 text-white/80 font-serif text-lg leading-relaxed text-justify first-letter:text-4xl first-letter:font-bold first-letter:text-emerald first-letter:mr-3 first-letter:float-left"
                                    >
                                        {currentExcerpt.content}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Footer of the expanded state */}
                                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full border border-emerald/50 flex items-center justify-center p-1 overflow-hidden backdrop-blur-sm">
                                            <img src={currentExcerpt.avatar} alt={currentExcerpt.author} className="w-full h-full object-cover md:grayscale opacity-50" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-white/30 uppercase tracking-widest font-mono">{currentExcerpt.title}</div>
                                            <div className="text-xs text-white/70 font-mono">{currentExcerpt.time} - {currentExcerpt.location}</div>
                                        </div>
                                    </div>



                                    <div className="flex items-center gap-6">
                                        {/* Counter for mobile/small screens */}
                                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
                                            Fragmento {currentIndex + 1} de {EXCERPTS.length}
                                        </span>

                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald hover:text-white transition-colors"
                                        >
                                            Recolher Registro <ChevronUp size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Background elements for depth */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald/5 blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-500/5 blur-[100px] pointer-events-none" />
                    </div>

                    {/* Simple Pagination Dots */}
                    {isOpen && (
                        <div className="flex justify-center gap-2 mt-8">
                            {EXCERPTS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-emerald w-8" : "bg-white/10 hover:bg-white/30"}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
