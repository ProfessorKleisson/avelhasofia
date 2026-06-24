import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HomeSofia } from "./pages/HomeSofia";
import { BruxaDasMaquinasPage } from "./pages/BruxaDasMaquinas";
import { DiarquiaPage } from "./pages/Diarquia";
import { OsHomensDeusesPage } from "./pages/OsHomensDeuses";
import { MestradoPage } from "./pages/Mestrado";
import { ArtigoMichelangeloPage } from "./pages/ArtigoMichelangelo";
import { SobrePage } from "./pages/Sobre";
import { JogosDigitaisPage } from "./pages/JogosDigitais";
import { AlocacaoPage } from "./pages/Alocacao";
import { HeaderVelhaSofia } from "./components/HeaderVelhaSofia";
import { useEffect } from "react";

// Filosofia Antiga
import { TalesDeMiletoPage } from "./pages/curso/filosofia/antiga/TalesDeMileto";
import { AnaximandroDeMiletoPage } from "./pages/curso/filosofia/antiga/AnaximandroDeMileto";
import { AnaxímenesDeMiletoPage } from "./pages/curso/filosofia/antiga/AnaxímenesDeMileto";
import { PitágorasDeSamosPage } from "./pages/curso/filosofia/antiga/PitágorasDeSamos";
import { HeráclitoDeÉfesoPage } from "./pages/curso/filosofia/antiga/HeráclitoDeÉfeso";
import { ParmênidesDeEleiaPage } from "./pages/curso/filosofia/antiga/ParmênidesDeEleia";
import { EmpédoclesDeAgrigentoPage } from "./pages/curso/filosofia/antiga/EmpédoclesDeAgrigento";
import { SócratesDeAtenasPage } from "./pages/curso/filosofia/antiga/SócratesDeAtenas";
import { ZenãoDeEleiaPage } from "./pages/curso/filosofia/antiga/ZenãoDeEleia";
import { DemócritoDeAbderaPage } from "./pages/curso/filosofia/antiga/DemócritoDeAbdera";
import { PlatãoDeAtenasPage } from "./pages/curso/filosofia/antiga/PlatãoDeAtenas";
import { AristótelesDeEstagiraPage } from "./pages/curso/filosofia/antiga/AristótelesDeEstagira";
import { EpicuroDeSamosPage } from "./pages/curso/filosofia/antiga/EpicuroDeSamos";
import { SênecaEpictetoEMarcoAurélioPage } from "./pages/curso/filosofia/antiga/SênecaEpictetoEMarcoAurélio";
import { PlotinoDeRomaPage } from "./pages/curso/filosofia/antiga/PlotinoDeRoma";
import { FilosofiaAntigaIndexPage } from "./pages/curso/filosofia/antiga/FilosofiaAntigaIndex";
import { LinhaDoTempoPage } from "./pages/curso/LinhaDoTempo";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen">
        <HeaderVelhaSofia />

        <Routes>
          <Route path="/" element={<HomeSofia />} />
          <Route path="/apps/alocacao" element={<AlocacaoPage />} />
          <Route path="/livros/bruxa-das-maquinas" element={<BruxaDasMaquinasPage />} />
          <Route path="/jogos/diarquia" element={<DiarquiaPage />} />
          <Route path="/jogos/digitais" element={<JogosDigitaisPage />} />
          <Route path="/livros/homens-deuses" element={<OsHomensDeusesPage />} />
          <Route path="/livros/mestrado" element={<MestradoPage />} />
          <Route path="/artigos/michelangelo" element={<ArtigoMichelangeloPage />} />
          <Route path="/sobre" element={<SobrePage />} />

          {/* Rotas de Filosofia Antiga */}
          <Route path="/curso/linha-do-tempo" element={<LinhaDoTempoPage />} />
          <Route path="/curso/filosofia/antiga" element={<FilosofiaAntigaIndexPage />} />
          <Route path="/curso/filosofia/antiga/tales-de-mileto" element={<TalesDeMiletoPage />} />
          <Route path="/curso/filosofia/antiga/anaximandro-de-mileto" element={<AnaximandroDeMiletoPage />} />
          <Route path="/curso/filosofia/antiga/anaximenes-de-mileto" element={<AnaxímenesDeMiletoPage />} />
          <Route path="/curso/filosofia/antiga/pitagoras-de-samos" element={<PitágorasDeSamosPage />} />
          <Route path="/curso/filosofia/antiga/heraclito-de-efeso" element={<HeráclitoDeÉfesoPage />} />
          <Route path="/curso/filosofia/antiga/parmenides-de-eleia" element={<ParmênidesDeEleiaPage />} />
          <Route path="/curso/filosofia/antiga/empedocles-de-agrigento" element={<EmpédoclesDeAgrigentoPage />} />
          <Route path="/curso/filosofia/antiga/socrates-de-atenas" element={<SócratesDeAtenasPage />} />
          <Route path="/curso/filosofia/antiga/zenao-de-eleia" element={<ZenãoDeEleiaPage />} />
          <Route path="/curso/filosofia/antiga/democrito-de-abdera" element={<DemócritoDeAbderaPage />} />
          <Route path="/curso/filosofia/antiga/platao-de-atenas" element={<PlatãoDeAtenasPage />} />
          <Route path="/curso/filosofia/antiga/aristoteles-de-estagira" element={<AristótelesDeEstagiraPage />} />
          <Route path="/curso/filosofia/antiga/epicuro-de-samos" element={<EpicuroDeSamosPage />} />
          <Route path="/curso/filosofia/antiga/seneca-epicteto-e-marco-aurelio" element={<SênecaEpictetoEMarcoAurélioPage />} />
          <Route path="/curso/filosofia/antiga/plotino-de-roma" element={<PlotinoDeRomaPage />} />
        </Routes>
      </div>
    </Router>
  );
}
