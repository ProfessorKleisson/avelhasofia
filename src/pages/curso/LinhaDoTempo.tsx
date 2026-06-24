import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
    Clock, 
    ArrowLeft, 
    PlayCircle,
    CheckCircle2,
    BookOpen,
    Search,
    Filter,
    Layers,
    Move
} from 'lucide-react';
import ForceGraph2D from 'react-force-graph-2d';
import * as d3 from 'd3-force';

// --- DATA DEFINITIONS ---
const AREA_COLORS = {
    epistemologia: '#ef4444', 
    etica: '#22c55e',       
    politica: '#3b82f6',    
    estetica: '#f59e0b',    
    logica: '#8b5cf6',      
    antropologia: '#ec4899',
    historia: '#06b6d4'     
};

// Data Structure (mock for now, will expand later based on user's actual content)
const TIMELINE_DATA = [
    {
        id: 'antiga',
        title: 'Filosofia Antiga',
        period: 'Séc. VI a.C. - Séc. VI d.C.',
        image: '/img/periodos/parthenon.png',
        authors: [
            {
                id: 'tales-de-mileto',
                name: 'Tales de Mileto',
                period: 'c. 624 – 546 a.C.',
                link: '/curso/filosofia/antiga/tales-de-mileto',
                image: '/img/filosofia/antiga/autores/Tales de Mileto.webp',
                topics: [
                    { id: 'tales-de-mileto-agua', title: 'A Água (Hydor) como Arché', area: 'epistemologia', color: AREA_COLORS.epistemologia },
                    { id: 'tales-de-mileto-ciencia', title: 'Contribuições Científicas', area: 'historia', color: AREA_COLORS.historia }
                ]
            },
            {
                id: 'anaximandro-de-mileto',
                name: 'Anaximandro de Mileto',
                period: 'c. 610 – 546 a.C.',
                link: '/curso/filosofia/antiga/anaximandro-de-mileto',
                image: '/img/filosofia/antiga/autores/Anaximandro.webp',
                topics: [
                    { id: 'anaximandro-apeiron', title: 'O Ápeiron (Infinito)', area: 'epistemologia', color: AREA_COLORS.epistemologia }
                ]
            },
            {
                id: 'anaximenes-de-mileto',
                name: 'Anaxímenes de Mileto',
                period: 'c. 585 – 528 a.C.',
                link: '/curso/filosofia/antiga/anaximenes-de-mileto',
                image: '/img/filosofia/antiga/autores/Anaxímenes.webp',
                topics: [
                    { id: 'anaximenes-pneuma', title: 'O Pneuma (Ar)', area: 'epistemologia', color: AREA_COLORS.epistemologia }
                ]
            },
            {
                id: 'pitagoras-de-samos',
                name: 'Pitágoras de Samos',
                period: 'c. 570 – 495 a.C.',
                link: '/curso/filosofia/antiga/pitagoras-de-samos',
                image: '/img/filosofia/antiga/autores/Pitágoras.webp',
                topics: [
                    { id: 'pitagoras-numeros', title: 'O Número como Arché', area: 'epistemologia', color: AREA_COLORS.epistemologia },
                    { id: 'pitagoras-alma', title: 'Transmigração das Almas', area: 'antropologia', color: AREA_COLORS.antropologia }
                ]
            },
            {
                id: 'heraclito-de-efeso',
                name: 'Heráclito de Éfeso',
                period: 'c. 535 – 475 a.C.',
                link: '/curso/filosofia/antiga/heraclito-de-efeso',
                image: '/img/filosofia/antiga/autores/Heráclito.webp',
                topics: [
                    { id: 'heraclito-logos', title: 'O Logos e o Devir', area: 'epistemologia', color: AREA_COLORS.epistemologia }
                ]
            },
            {
                id: 'parmenides-de-eleia',
                name: 'Parmênides de Eleia',
                period: 'c. 515 – 450 a.C.',
                link: '/curso/filosofia/antiga/parmenides-de-eleia',
                image: '/img/filosofia/antiga/autores/Parmenides.webp',
                topics: [
                    { id: 'parmenides-ser', title: 'A Ontologia do Ser', area: 'epistemologia', color: AREA_COLORS.epistemologia }
                ]
            },
            {
                id: 'zenao-de-eleia',
                name: 'Zenão de Eleia',
                period: 'c. 490 – 430 a.C.',
                link: '/curso/filosofia/antiga/zenao-de-eleia',
                image: '/img/filosofia/antiga/autores/Zenão de Eleia.webp',
                topics: [
                    { id: 'zenao-paradoxos', title: 'Os Paradoxos do Movimento', area: 'logica', color: AREA_COLORS.logica }
                ]
            },
            {
                id: 'empedocles-de-agrigento',
                name: 'Empédocles de Agrigento',
                period: 'c. 490 – 430 a.C.',
                link: '/curso/filosofia/antiga/empedocles-de-agrigento',
                image: '/img/filosofia/antiga/autores/Empédocles de Agrigento.webp',
                topics: [
                    { id: 'empedocles-elementos', title: 'As Quatro Raízes', area: 'historia', color: AREA_COLORS.historia }
                ]
            },
            {
                id: 'democrito-de-abdera',
                name: 'Demócrito de Abdera',
                period: 'c. 460 – 370 a.C.',
                link: '/curso/filosofia/antiga/democrito-de-abdera',
                image: '/img/filosofia/antiga/autores/Demócrito de Abdera.webp',
                topics: [
                    { id: 'democrito-atomos', title: 'O Atomismo', area: 'epistemologia', color: AREA_COLORS.epistemologia }
                ]
            },
            {
                id: 'socrates-de-atenas',
                name: 'Sócrates de Atenas',
                period: '469 – 399 a.C.',
                link: '/curso/filosofia/antiga/socrates-de-atenas',
                image: '/img/socrates_neon.png',
                topics: [
                    { id: 'socrates-maiêutica', title: 'O Método Socrático', area: 'logica', color: AREA_COLORS.logica },
                    { id: 'socrates-etica', title: 'A Virtude é Conhecimento', area: 'etica', color: AREA_COLORS.etica }
                ]
            },
            {
                id: 'platao-de-atenas',
                name: 'Platão de Atenas',
                period: '427 – 347 a.C.',
                link: '/curso/filosofia/antiga/platao-de-atenas',
                image: '/img/filosofia/antiga/autores/Platão de Atenas.webp',
                topics: [
                    { id: 'platao-ideias', title: 'Teoria das Ideias', area: 'epistemologia', color: AREA_COLORS.epistemologia },
                    { id: 'platao-republica', title: 'A República', area: 'politica', color: AREA_COLORS.politica }
                ]
            },
            {
                id: 'aristoteles-de-estagira',
                name: 'Aristóteles de Estagira',
                period: '384 – 322 a.C.',
                link: '/curso/filosofia/antiga/aristoteles-de-estagira',
                image: '/img/filosofia/antiga/autores/Aristóteles de Estagira.webp',
                topics: [
                    { id: 'aristoteles-metafisica', title: 'Metafísica e Causas', area: 'epistemologia', color: AREA_COLORS.epistemologia },
                    { id: 'aristoteles-etica', title: 'Ética a Nicômaco', area: 'etica', color: AREA_COLORS.etica }
                ]
            },
            {
                id: 'epicuro-de-samos',
                name: 'Epicuro de Samos',
                period: '341 – 270 a.C.',
                link: '/curso/filosofia/antiga/epicuro-de-samos',
                image: '/img/filosofia/antiga/autores/Epicuro de Samos.webp',
                topics: [
                    { id: 'epicuro-prazer', title: 'O Prazer (Ataraxia)', area: 'etica', color: AREA_COLORS.etica }
                ]
            },
            {
                id: 'seneca-epicteto-e-marco-aurelio',
                name: 'Sêneca, Epicteto e Marco Aurélio',
                period: 'Séc. I a.C. – II d.C.',
                link: '/curso/filosofia/antiga/seneca-epicteto-e-marco-aurelio',
                image: '/img/filosofia/antiga/autores/Sêneca Epicteto e Marco Aurélio.webp',
                topics: [
                    { id: 'estoicismo-virtude', title: 'Viver Conforme a Natureza', area: 'etica', color: AREA_COLORS.etica }
                ]
            },
            {
                id: 'plotino-de-roma',
                name: 'Plotino de Roma',
                period: '204 – 270 d.C.',
                link: '/curso/filosofia/antiga/plotino-de-roma',
                image: '/img/filosofia/antiga/autores/Plotino de Roma.webp',
                topics: [
                    { id: 'plotino-uno', title: 'O Uno e as Emanações', area: 'epistemologia', color: AREA_COLORS.epistemologia }
                ]
            }
        ]
    },
    {
        id: 'medieval',
        title: 'Filosofia Medieval',
        period: 'Séc. V d.C. - Séc. XV d.C.',
        image: '/img/periodos/medieval.png',
        authors: [
            {
                id: 'santo-agostinho',
                name: 'Santo Agostinho',
                period: '354 – 430 d.C.',
                link: '/curso/filosofia/medieval/santo-agostinho',
                image: `https://ui-avatars.com/api/?name=${encodeURIComponent('Santo Agostinho')}&background=1e1b4b&color=fff`,
                topics: [
                    { id: 'agostinho-fe-razao', title: 'Fé e Razão (Credo ut intelligam)', area: 'epistemologia', color: AREA_COLORS.epistemologia },
                    { id: 'agostinho-tempo', title: 'A Natureza do Tempo', area: 'antropologia', color: AREA_COLORS.antropologia }
                ]
            },
            {
                id: 'sao-tomas-de-aquino',
                name: 'São Tomás de Aquino',
                period: '1225 – 1274 d.C.',
                link: '/curso/filosofia/medieval/sao-tomas-de-aquino',
                image: `https://ui-avatars.com/api/?name=${encodeURIComponent('São Tomás de Aquino')}&background=1e1b4b&color=fff`,
                topics: [
                    { id: 'aquino-cinco-vias', title: 'As Cinco Vias da Existência de Deus', area: 'epistemologia', color: AREA_COLORS.epistemologia },
                    { id: 'aquino-escolastica', title: 'O Apogeu da Escolástica', area: 'logica', color: AREA_COLORS.logica }
                ]
            }
        ]
    }
];

// Helper to get completed status mapping
const getCompletedStatus = () => {
    const str = localStorage.getItem('completedTopics');
    if (!str) return {};
    try {
        return JSON.parse(str);
    } catch {
        return {};
    }
};

export function LinhaDoTempoPage() {
    const navigate = useNavigate();
    const fgRef = useRef<any>(null);
    const [currentTime, setCurrentTime] = useState(Date.now());
    const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({});
    const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['antiga']));
    const [hoverNode, setHoverNode] = useState<any>(null);
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    // Handle screen resize
    useEffect(() => {
        const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setCompletedTopics(getCompletedStatus());
        const handleCompletionUpdate = () => {
            setCompletedTopics(getCompletedStatus());
        };
        window.addEventListener('topicCompleted', handleCompletionUpdate);
        return () => window.removeEventListener('topicCompleted', handleCompletionUpdate);
    }, []);

    // Update current time for animation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 50); // Update every 50ms for smooth pulse
        return () => clearInterval(interval);
    }, []);

    // Find the next author to study
    const nextAuthorId = useMemo(() => {
        const allAuthors = TIMELINE_DATA.flatMap(p => p.authors);
        return allAuthors.find(author => 
            !author.topics.some(t => completedTopics[t.id])
        )?.id;
    }, [completedTopics]);

    // Helper to get author status color
    const getAuthorStatusColor = (authorId: string) => {
        const author = TIMELINE_DATA.flatMap(p => p.authors).find(a => a.id === authorId);
        if (!author) return null;
        const total = author.topics.length;
        const completed = author.topics.filter(t => completedTopics[t.id]).length;
        
        if (completed === total && total > 0) return '#22c55e'; // Green
        if (completed > 0) return '#f59e0b'; // Yellow
        return '#8b5cf6'; // Default Violet
    };

    // Transform data for force-directed graph
    const graphData = useMemo(() => {
        const nodes: any[] = [];
        const links: any[] = [];

        TIMELINE_DATA.forEach((period, idx) => {
            const periodY = idx * 800 - 400; // Antiga at -400, Medieval at 400
            
            nodes.push({
                id: period.id,
                name: period.title,
                type: 'period',
                image: period.image,
                val: 50,
                color: '#8b5cf6',
                fx: 0,
                fy: periodY,
                anchorY: periodY // Store target for authors
            });

            if (idx < TIMELINE_DATA.length - 1) {
                links.push({
                    source: period.id,
                    target: TIMELINE_DATA[idx + 1].id,
                    type: 'chain'
                });
            }

            if (expandedIds.has(period.id)) {
                period.authors.forEach(author => {
                    const statusColor = getAuthorStatusColor(author.id);
                    nodes.push({
                        id: author.id,
                        name: author.name,
                        type: 'author',
                        image: author.image,
                        link: author.link,
                        val: 32,
                        anchorY: periodY, // Authors gravitate towards their period's Y level
                        statusColor,
                        isNext: author.id === nextAuthorId
                    });
                    links.push({ 
                        source: period.id, 
                        target: author.id, 
                        type: 'author',
                        color: statusColor + '44' // Transparent version for links
                    });

                    if (expandedIds.has(author.id)) {
                        author.topics.forEach(topic => {
                            nodes.push({
                                id: topic.id,
                                name: topic.title,
                                type: 'topic',
                                color: completedTopics[topic.id] ? '#22c55e' : topic.color,
                                fullLink: `${author.link}#${topic.id}`,
                                val: 20,
                                anchorY: periodY // Topics stay near author
                            });
                            links.push({ source: author.id, target: topic.id, type: 'topic' });
                        });
                    }
                });
            }
        });

        return { nodes, links };
    }, [expandedIds, completedTopics, nextAuthorId]);

    // Access internal d3 engine to set forces
    useEffect(() => {
        if (fgRef.current) {
            // Strong negative charge for 'cloud' effect
            fgRef.current.d3Force('charge').strength(-1500);
            
            // Set specific distances
            fgRef.current.d3Force('link').distance((link: any) => {
                if (link.type === 'chain') return 800; // Large gap between periods
                if (link.type === 'author') return 250;
                return 150;
            });

            // Prevent overlapping
            fgRef.current.d3Force('collide', d3.forceCollide((n: any) => n.val + 30));

            // Pull each group to its own vertical center - but LIGHTLY so they can spread radially
            fgRef.current.d3Force('y', d3.forceY((n: any) => n.anchorY || 0).strength(0.15));
            
            // Keep centered horizontally
            fgRef.current.d3Force('x', d3.forceX(0).strength(0.05));
            
            // Disable global centering that pulls everything to 0,0
            fgRef.current.d3Force('center', null);
        }
    }, [graphData]);

    const toggleExpand = (node: any) => {
        const newExpanded = new Set(expandedIds);
        if (newExpanded.has(node.id)) {
            newExpanded.delete(node.id);
        } else {
            newExpanded.add(node.id);
        }
        setExpandedIds(newExpanded);
    };

    const handleNodeClick = (node: any) => {
        if (node.type === 'topic') {
            navigate(node.fullLink);
        } else {
            toggleExpand(node);
        }
    };

    // Pre-load images
    const imgCache = useRef<Record<string, HTMLImageElement>>({});
    useEffect(() => {
        const allItems = [...TIMELINE_DATA, ...TIMELINE_DATA.flatMap(p => p.authors)];
        allItems.forEach(item => {
            if (item.image && !imgCache.current[item.image]) {
                const img = new Image();
                img.src = item.image;
                imgCache.current[item.image] = img;
            }
        });
    }, []);

    return (
        <div className="min-h-screen bg-[#070709] font-sofia-sans text-white/90 selection:bg-violet-500/30 overflow-hidden relative">

            <header className="fixed top-0 inset-x-0 z-[100] bg-black/40 backdrop-blur-md border-b border-white/5 py-4">
                <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex flex-col">
                        <span className="font-sofia-serif font-black text-xl tracking-tighter text-white">
                            A VELHA <span className="text-violet-400">SOFIA</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hidden md:inline">
                            Mova e arraste os pontos para explorar o cérebro
                        </span>
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-violet-400 hover:text-violet-300 transition-colors border border-violet-500/20 px-4 py-2 rounded-full"
                        >
                            <ArrowLeft size={14} /> Voltar ao Início
                        </Link>
                    </div>
                 </div>
            </header>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-10 left-10 z-[50] pointer-events-none"
            >
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl max-w-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
                            <Move size={16} className="text-violet-400" />
                        </div>
                        <h3 className="font-sofia-serif font-black uppercase italic tracking-widest text-white/80">Interface Neural</h3>
                    </div>
                    <ul className="space-y-3 text-xs text-white/50 font-medium">
                        <li className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                             Arraste os nós para reorganizar o cérebro.
                        </li>
                        <li className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                             Clique em um autor para abrir suas áreas.
                        </li>
                        <li className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                             Clique em um tópico para iniciar o estudo.
                        </li>
                    </ul>
                </div>
            </motion.div>

            <div className="w-full h-full cursor-grab active:cursor-grabbing">
                <ForceGraph2D
                    ref={fgRef}
                    width={dimensions.width}
                    height={dimensions.height}
                    graphData={graphData}
                    backgroundColor="#070709"
                    onNodeClick={handleNodeClick}
                    onNodeHover={setHoverNode}
                    linkColor={(link: any) => link.color || (link.type === 'chain' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.08)')}
                    linkWidth={(link: any) => link.type === 'chain' ? 4 : (link.color ? 2.5 : 1.5)}
                    linkDirectionalParticles={2}
                    linkDirectionalParticleSpeed={0.005}
                    linkDirectionalParticleWidth={1.5}
                    linkDirectionalParticleColor={(link: any) => link.color ? link.color.replace('44', 'ff') : '#8b5cf6'}
                    d3AlphaDecay={0.02}
                    d3VelocityDecay={0.3}
                    cooldownTicks={100}
                    nodeCanvasObject={(node: any, ctx, globalScale) => {
                        const label = node.name;
                        const fontSize = node.type === 'period' ? 18 : node.type === 'author' ? 14 : 11;
                        const size = node.val / 2;
                        const isHovered = hoverNode && hoverNode.id === node.id;
                        const isExpanded = expandedIds.has(node.id);

                        // Pulsing for Next Author
                        let pulseRadius = 0;
                        if (node.isNext) {
                            pulseRadius = size + 5 + Math.sin(currentTime / 200) * 5;
                        }

                        ctx.save();
                        
                        // Draw pulsing ring
                        if (node.isNext) {
                            ctx.beginPath();
                            ctx.arc(node.x, node.y, pulseRadius, 0, 2 * Math.PI, false);
                            ctx.strokeStyle = '#8b5cf6';
                            ctx.lineWidth = 2 / globalScale;
                            ctx.globalAlpha = 0.4 + Math.sin(currentTime / 200) * 0.2;
                            ctx.stroke();
                        }

                        // Node Glow
                        if (isHovered || isExpanded || node.isNext) {
                            ctx.shadowBlur = node.isNext ? 30 : 20;
                            ctx.shadowColor = node.statusColor || node.color || '#8b5cf6';
                        }
                        
                        // Circle Base
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
                        ctx.fillStyle = '#0a0a0c';
                        ctx.fill();
                        
                        // Border
                        ctx.strokeStyle = isHovered ? '#fff' : (node.statusColor || node.color || '#8b5cf6');
                        ctx.lineWidth = node.isNext ? 3 : 2;
                        ctx.stroke();

                        // Image
                        if (node.image && imgCache.current[node.image]) {
                            ctx.save();
                            ctx.beginPath();
                            ctx.arc(node.x, node.y, size * 0.9, 0, 2 * Math.PI, false);
                            ctx.clip();
                            ctx.drawImage(imgCache.current[node.image], node.x - size * 0.9, node.y - size * 0.9, size * 1.8, size * 1.8);
                            ctx.restore();
                            
                            // Checkmark overlay if completed
                            if (node.type === 'author' && node.statusColor === '#22c55e') {
                                ctx.fillStyle = 'rgba(34, 197, 94, 0.2)';
                                ctx.fill();
                            }
                        } else {
                            ctx.beginPath();
                            ctx.arc(node.x, node.y, size * 0.4, 0, 2 * Math.PI, false);
                            ctx.fillStyle = node.color || '#8b5cf6';
                            ctx.fill();
                        }

                        // Labels
                        ctx.font = `${node.type === 'period' ? 'bold italic' : (node.isNext ? 'bold' : 'normal')} ${fontSize}px Sofia Sans`;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.shadowBlur = 6;
                        ctx.shadowColor = 'black';
                        ctx.fillStyle = isHovered ? '#fff' : (node.type === 'topic' ? 'rgba(255,255,255,0.7)' : '#fff');
                        
                        const labelOffset = size + 16;
                        ctx.fillText(label, node.x, node.y + labelOffset);

                        if (node.type === 'period') {
                            ctx.font = `italic bold ${fontSize * 0.5}px Sofia Sans`;
                            ctx.fillStyle = 'rgba(255,255,255,0.4)';
                            ctx.fillText('CLIQUE PARA EXPLORAR', node.x, node.y + labelOffset + 18);
                        } else if (node.isNext) {
                             ctx.font = `bold ${fontSize * 0.6}px Sofia Sans`;
                             ctx.fillStyle = '#8b5cf6';
                             ctx.fillText('PRÓXIMO OBJETIVO', node.x, node.y - size - 12);
                        }
                        
                        ctx.restore();
                    }}
                />
            </div>

        </div>
    );
}

