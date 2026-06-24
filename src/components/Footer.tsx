import { motion } from "motion/react";
import { useLocation } from "react-router-dom";
import { Github, Twitter, Instagram, Mail, ExternalLink, CreditCard, Facebook, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const location = useLocation();

  const getPageConfig = () => {
    switch (location.pathname) {
      case "/livros/homens-deuses":
        return {
          color: "#DE863B",
          showPricing: true,
          amazonUrl: "https://www.amazon.com.br/dp/B018J4FFTO/ref=cm_cr_arp_d_btm?ie=UTF8",
          prices: [
            { label: "Livro Digital (Kindle)", value: "R$ 10,00" },
            { label: "Preço Original", value: "R$ 18,00", original: true }
          ]
        };
      case "/livros/mestrado":
        return {
          color: "#6366f1",
          showPricing: true,
          amazonUrl: "https://pgf.uem.br/dissertacoes/liberdade-em-baruch-spinoza-da-construcao-do-sujeito-sua-acao-etica-e-sua-expressao-politica-kleisson-borges-garves.pdf",
          prices: [
            { label: "Acesso Digital", value: "Grátis" },
            { label: "Formato", value: "Dissertação" }
          ]
        };
      case "/artigos/michelangelo":
        return {
          color: "#f59e0b",
          showPricing: false, // Artigos são gratuitos por padrão
          amazonUrl: "https://www.todamateria.com.br/a-criacao-de-adao-michelangelo/",
          prices: []
        };
      case "/livros/bruxa-das-maquinas":
        return {
          color: "#00FF88",
          showPricing: true,
          amazonUrl: "https://www.amazon.com.br/dp/6501804051",
          amazonDigitalUrl: "https://www.amazon.com.br/Bruxa-M%C3%A1quinas-Kleisson-Borges-Garves-ebook/dp/B0GQR811NV/",
          mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-6594644528-a-bruxa-das-maquinas-_JM",
          prices: [
            { label: "Físico Amazon (Capa Dura)", value: "R$ 59,99 (Frete Grátis)" },
            { label: "Físico Mercado Livre", value: "R$ 56,99 (Frete Grátis)" },
            { label: "Livro Digital (Kindle)", value: "R$ 4,99" }
          ]
        };
      case "/jogos/diarquia":
        return {
          color: "#FFB701",
          showPricing: true,
          amazonUrl: "https://www.amazon.com.br/Diarquia-Filos%C3%B3fico-Hist%C3%B3rico-Racioc%C3%ADnio-Estrat%C3%A9gico/dp/B0DNNFZG5M",
          prices: [
            { label: "Jogo de Cartas", value: "R$ 77,99" }
          ]
        };
      default:
        return {
          color: "#00D3F3",
          showPricing: false
        };
    }
  };

  const config = getPageConfig();

  return (
    <footer id="autor" className="py-24 border-t border-white/10 bg-[#060608] overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          {/* Author Section */}
          <div className="flex-1">
            <h3 className="text-3xl font-sofia-serif font-black mb-10 flex items-center gap-3 tracking-tighter uppercase italic text-white">
              <span style={{ color: config.color }}>SOBRE</span> <span className="text-white/90">O</span> <span className="text-white">AUTOR</span>
            </h3>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div
                className="w-32 h-32 flex-shrink-0 border-2 rounded-full overflow-hidden transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                style={{
                  borderColor: config.color,
                  boxShadow: `0 0 20px ${config.color}33`
                }}
              >
                <img
                  src="/img/autor2.webp"
                  alt="GARVES K. B."
                  className="w-full h-full object-cover scale-100"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              <div className="space-y-4 max-w-2xl">
                <h4 className="text-xl font-black text-white uppercase italic tracking-tighter mb-2">GARVES K. B.</h4>
                <div className="text-white/70 text-base leading-relaxed space-y-4 font-normal">
                  <p>
                    GARVES K. B. nasceu em 1994 no interior do Paraná. Amante de livros e bibliotecas empoeiradas, sua imaginação se alimenta de fantasia, mitologia e ficção científica.
                  </p>
                  <p>
                    Formado em Filosofia pela PUC-PR e Mestre pela UEM, GARVES K. B. é escritor, professor, designer de jogos e desenvolvedor. Membro essencial do multiverso "A Velha Sofia".
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          {config.showPricing && (
            <div className="lg:w-96 flex flex-col gap-4">
              <h3 className="text-sm uppercase tracking-[0.3em] mb-4 font-black flex items-center gap-2" style={{ color: config.color }}>
                <CreditCard size={14} /> Investimento
              </h3>

              {/* Special Amazon KU Layout for Homens Deuses */}
              {location.pathname === "/livros/homens-deuses" ? (
                <div className="space-y-6">
                  <div className="relative group overflow-hidden bg-white/[0.03] border border-white/10 rounded-xl p-6 pr-12 transition-all hover:border-[#DE863B]/50 hover:bg-white/[0.05]">
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Formato Kindle</div>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-4xl font-black text-white italic">R$ 0,00</span>
                      <img src="/img/kindle-unlimited.webp" alt="Kindle Unlimited" className="h-6 w-auto" />
                    </div>
                    <div className="text-[11px] text-white/60 font-medium">
                      ou <span className="text-[#DE863B] font-bold">R$ 10,00</span> para comprar
                    </div>
                  </div>

                  <a
                    href={config.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 text-[11px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-2 bg-[#DE863B] text-black hover:bg-white shadow-[0_0_30px_rgba(222,134,59,0.2)]"
                  >
                    Ler de Graça na Amazon <ExternalLink size={14} />
                  </a>
                </div>
              ) : (
                <div className="p-8 bg-white/[0.03] border border-white/10 space-y-6 relative overflow-hidden">
                  {config.prices?.map((price: any, idx) => {
                    return (
                      <div key={idx} className="space-y-2">
                        {idx > 0 && <div className="h-px bg-white/10 mb-6" />}
                        <div className="flex justify-between items-center gap-4">
                          <span className="text-white/60 text-[10px] uppercase font-black tracking-widest">{price.label}</span>
                          <div className="flex flex-col items-end gap-1">
                            {price.originalValue && (
                              <span className="text-white/20 line-through text-[11px] font-black tracking-tighter">
                                {price.originalValue}
                              </span>
                            )}
                            <span
                              className="font-black tracking-tighter text-2xl"
                              style={{ color: config.color }}
                            >
                              {price.value}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="pt-4 flex flex-col gap-3">
                    {config.amazonUrl && (
                      <a
                        href={config.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                        style={{
                          backgroundColor: `${config.color}15`,
                          border: `1px solid ${config.color}77`,
                          color: config.color
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = config.color;
                          e.currentTarget.style.color = "#000";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = `${config.color}15`;
                          e.currentTarget.style.color = config.color;
                        }}
                      >
                        {location.pathname === "/livros/mestrado" ? "Acessar (PDF)" : "Comprar na Amazon"} <ExternalLink size={12} />
                      </a>
                    )}
                    
                    {config.amazonDigitalUrl && (
                      <a
                        href={config.amazonDigitalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#fff'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#fff';
                          e.currentTarget.style.color = '#000';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                          e.currentTarget.style.color = '#fff';
                        }}
                      >
                        Ler com Kindle Unlimited ou comprar <ExternalLink size={12} />
                      </a>
                    )}

                    {(config as any).mercadoLivreUrl && (
                      <a
                        href={(config as any).mercadoLivreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                        style={{
                          backgroundColor: 'rgba(255, 183, 1, 0.1)',
                          border: '1px solid rgba(255, 183, 1, 0.4)',
                          color: '#FFB701'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#FFB701';
                          e.currentTarget.style.color = '#000';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 183, 1, 0.1)';
                          e.currentTarget.style.color = '#FFB701';
                        }}
                      >
                        Comprar no Mercado Livre <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-col mb-8">
              <span className="font-sofia-serif font-black text-2xl tracking-tighter text-white">
                A VELHA <span style={{ color: config.color }}>SOFIA</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mt-1">Portal Literário</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Uma exploração da intersecção entre mitologia antiga e tecnologia futurista.
              Gênero: Ficção Especulativa, Distopia e Realismo Fantástico.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] mb-8 font-black text-white/50">Contato</h4>
            <a href="mailto:kleissongarves@gmail.com" className="text-base text-white/60 hover:text-white transition-colors flex items-center gap-2 lowercase italic group">
              <Mail size={16} style={{ color: config.color }} className="group-hover:scale-110 transition-transform" />
              kleissongarves@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] mb-8 font-black text-white/50">Redes Sociais</h4>
            <div className="flex gap-6">
              {[
                { icon: <Instagram size={24} />, url: "https://www.instagram.com/prof.kleissonfilosofia/" },
                { icon: <Twitter size={24} />, url: "https://twitter.com/GarvesKleisson" },
                { icon: <Facebook size={24} />, url: "https://www.facebook.com/Kleissongarves" },
                { icon: <Linkedin size={24} />, url: "https://br.linkedin.com/in/kleisson-borges-garves-95349611a" },
                { icon: <Youtube size={24} />, url: "https://www.youtube.com/channel/UC5E2LQsvqIVzhpZEDTBXcmg?sub_confirmation=1" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-all transform hover:-translate-y-1"
                  onMouseEnter={(e) => e.currentTarget.style.color = config.color}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-black">
            © 2026 K.B. GARVES. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-8 text-[10px] text-white/30 uppercase tracking-widest font-black">
            <span>Desenvolvido no Multiverso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
