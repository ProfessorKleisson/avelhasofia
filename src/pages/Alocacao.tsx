import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, Zap, Wand2, Clock, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AnimatedGrid } from "../components/AnimatedGrid";
import { Footer } from "../components/Footer";

const AlocaLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 300 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g transform="translate(10, 10)">
      <rect x="0" y="0" width="35" height="35" rx="8" fill="#E0E7FF" />
      <rect x="0" y="40" width="35" height="35" rx="8" fill="#C7D2FE" />
      <rect x="40" y="40" width="35" height="35" rx="8" fill="#818CF8" />
      <g style={{ filter: 'drop-shadow(0px 4px 6px rgba(79, 70, 229, 0.3))' }}>
        <rect
          x="45"
          y="-5"
          width="35"
          height="35"
          rx="8"
          fill="#4F46E5"
          transform="rotate(-12 62.5 12.5)"
        />
      </g>
    </g>
    <text
      x="100"
      y="62"
      fontFamily="Montserrat, sans-serif"
      fontSize="52"
      fontWeight="700"
      fill="currentColor"
      letterSpacing="-0.03em"
    >
      aloca
    </text>
  </svg>
);

const FeatureCard = ({ icon: Icon, title, description, color }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-indigo-500/30 transition-all group"
  >
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/10`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-sofia-sans font-black text-white mb-3 uppercase tracking-tighter">{title}</h3>
    <p className="text-white/40 leading-relaxed text-sm font-light">{description}</p>
  </motion.div>
);

export function AlocacaoPage() {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const benefits = ['sem conflitos', 'sem estresse', 'em minutos', 'com inteligência'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % benefits.length;
      const fullText = benefits[i];
      setCurrentText(isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1));
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleType, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum]);

  return (
    <div className="min-h-screen bg-[#0a0a0c] font-sofia-sans text-white/90 selection:bg-indigo-500/30 overflow-x-hidden">
      <AnimatedGrid
        numSquares={40}
        maxOpacity={0.1}
        fillColor="rgba(79, 70, 229, 0.1)"
        strokeColor="rgba(79, 70, 229, 0.05)"
      />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-black text-[10px] tracking-[0.3em] uppercase mb-12"
          >
            <Zap className="w-3 h-3" />
            Organizador de Horários Inteligente
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-sofia-sans font-black text-white mb-10 tracking-tighter leading-none uppercase"
          >
            Gestão escolar <br />
            <span className="text-indigo-500">
              {currentText}
            </span>
            <span className="inline-block w-[4px] h-[0.8em] bg-indigo-500 ml-4 animate-pulse" />
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/40 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            O <strong>aloca</strong> é a ferramenta definitiva para a criação de grades horárias complexas. 
            Detecta conflitos instantaneamente e sincroniza toda a sua instituição.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a 
              href="https://aloca-three.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-6 bg-indigo-600 text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-indigo-400 transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] flex items-center gap-4 group"
            >
              Acessar o WebApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* App Preview Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-24 relative max-w-5xl mx-auto"
          >
            <div className="absolute -inset-4 bg-indigo-500/10 blur-[80px] rounded-full -z-10" />
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.15)] bg-[#0a0a0c] group"
            >
              {/* Browser Header Mockup */}
              <div className="h-10 bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                <div className="w-3 h-3 rounded-full bg-green-500/30" />
              </div>
              <img 
                src="/img/aloca.png" 
                alt="Interface do aloca" 
                className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Logo Section */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <AlocaLogo className="h-24 w-auto text-white mb-20 opacity-90" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 w-full max-w-5xl">
            {[
              { label: 'Redução de Tempo', value: '90%' },
              { label: 'Conflitos Zero', value: '100%' },
              { label: 'Escolas Atendidas', value: '50+' },
              { label: 'Usuários Ativos', value: '10k+' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-4xl md:text-6xl font-sofia-sans font-black text-white mb-3 group-hover:text-indigo-500 transition-colors uppercase">{stat.value}</div>
                <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-40 px-6 relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/5 pb-10">
            <div>
              <h2 className="text-5xl md:text-6xl font-sofia-sans font-black text-white mb-4 uppercase">Sincronia <span className="text-indigo-500">Total</span></h2>
              <p className="text-indigo-500/60 uppercase tracking-widest text-[10px] font-black">Recursos de Alta Performance</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard 
              icon={Wand2}
              title="Geração Automática"
              description="Algoritmos inteligentes que resolvem grades complexas em segundos, respeitando todas as restrições pedagógicas."
              color="bg-indigo-600"
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Anti-Conflito"
              description="Bloqueio imediato de choques de horário, salas ou disciplinas. Sua grade sempre matematicamente consistente."
              color="bg-purple-600"
            />
            <FeatureCard 
              icon={Globe}
              title="Multi-Unidade"
              description="Gerencie diversas escolas simultaneamente. As restrições de professores cruzam todas as sedes automaticamente."
              color="bg-blue-600"
            />
            <FeatureCard 
              icon={Clock}
              title="Histórico de Versões"
              description="Crie backups e teste diferentes cenários hipotéticos sem perder o que já foi construído pela secretaria."
              color="bg-emerald-600"
            />
            <FeatureCard 
              icon={Users}
              title="Painel do Professor"
              description="Acesso individual para que cada docente informe suas disponibilidades e visualize sua grade em tempo real."
              color="bg-amber-600"
            />
            <FeatureCard 
              icon={Zap}
              title="Exportação Digital"
              description="Gere PDFs, planilhas Excel ou envie grades por WhatsApp com apenas um clique para toda a equipe."
              color="bg-rose-600"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 px-6 relative">
        <div className="max-w-5xl mx-auto bg-white/[0.02] border border-white/5 rounded-[2rem] p-16 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <h2 className="text-5xl md:text-7xl font-sofia-sans font-black text-white mb-10 tracking-tight uppercase">Revolucione sua <br /><span className="text-indigo-500">Coordenação</span></h2>
          <p className="text-white/40 text-xl mb-16 max-w-xl mx-auto font-light leading-relaxed">Junte-se a dezenas de instituições que já transformaram o caos das planilhas em um processo fluido e inteligente.</p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a 
              href="https://aloca-three.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-14 py-7 bg-indigo-600 text-black font-black uppercase text-sm tracking-[0.4em] hover:bg-indigo-400 transition-all shadow-[0_0_40px_rgba(79,70,229,0.4)]"
            >
              Criar Conta Grátis
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-10">
            {['Sem cartão de crédito', 'Teste gratuito de 14 dias', 'Suporte prioritário'].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-white/20 font-black uppercase text-[10px] tracking-widest">
                <CheckCircle2 className="w-4 h-4 text-indigo-500/50" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
