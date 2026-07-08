import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Redirect, useLocation } from './router';
import { resolveLegacyRedirect } from './legacyRedirects';

function LegacyRedirect() {
  const { pathname } = useLocation();
  return <Redirect to={resolveLegacyRedirect(pathname)} />;
}
import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import SanierungHub from './pages/SanierungHub';
import LeistungenHub from './pages/LeistungenHub';
import EinsatzgebieteHub from './pages/EinsatzgebieteHub';
import CityPage from './pages/CityPage';
import BathroomRenovation from './pages/BathroomRenovation';
import ApartmentRenovation from './pages/ApartmentRenovation';
import HouseRenovation from './pages/HouseRenovation';
import HistoricBuildingRenovation from './pages/HistoricBuildingRenovation';
import CompleteRenovation from './pages/CompleteRenovation';
import GeneralContractor from './pages/GeneralContractor';
import EnergyEfficientRenovation from './pages/EnergyEfficientRenovation';
import CommercialRenovation from './pages/CommercialRenovation';
import MoldRemediation from './pages/MoldRemediation';
import AsbestosRemoval from './pages/AsbestosRemoval';
import HeatingPlumbing from './pages/HeatingPlumbing';
import ElectricalServices from './pages/ElectricalServices';
import InteriorConstruction from './pages/InteriorConstruction';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import UeberUns from './pages/UeberUns';
import Karriere from './pages/Karriere';
import SanierungskostenRechnerPage from './pages/SanierungskostenRechnerPage';

function ScrollAndAnimationManager() {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo(0, 0);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          entry.target.__revealed = true;
        }
      });
    }, observerOptions);

    // Track all elements marked for scroll animations
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // MutationObserver to prevent React from stripping 'revealed' on re-render
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target;
          if (target.__revealed && !target.classList.contains('revealed')) {
            target.classList.add('revealed');
          }
        }
      });
    });

    mutationObserver.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['class']
    });

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return null;
}

export default function App({ location }) {
  return (
    <BrowserRouter initialPath={location}>
      <ScrollAndAnimationManager />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Routes fallback={<LegacyRedirect />}>
          <Route path="/" element={<Home />} />
          <Route path="/sanierung-rhein-main" element={<SanierungHub />} />
          <Route path="/leistungen" element={<LeistungenHub />} />
          <Route path="/einsatzgebiete-rhein-main" element={<EinsatzgebieteHub />} />
          <Route path="/sanierung-frankfurt-am-main" element={<CityPage cityId="frankfurt" />} />
          <Route path="/haus-wohnung-bad-modernisieren-darmstadt" element={<CityPage cityId="darmstadt" />} />
          <Route path="/sanierung-offenbach-am-main" element={<CityPage cityId="offenbach" />} />
          <Route path="/sanierung-hanau" element={<CityPage cityId="hanau" />} />
          <Route path="/sanierung-wiesbaden" element={<CityPage cityId="wiesbaden" />} />
          <Route path="/sanierung-mainz" element={<CityPage cityId="mainz" />} />
          <Route path="/sanierung-aschaffenburg" element={<CityPage cityId="aschaffenburg" />} />
          <Route path="/sanierung-roedermark" element={<CityPage cityId="roedermark" />} />
          <Route path="/sanierung-babenhausen" element={<CityPage cityId="babenhausen" />} />
          <Route path="/sanierung-bad-homburg-vor-der-hoehe" element={<CityPage cityId="badhomburg" />} />
          <Route path="/sanierung-bad-nauheim" element={<CityPage cityId="badnauheim" />} />
          <Route path="/villa-haus-modernisieren-bad-soden-am-taunus" element={<CityPage cityId="badsoden" />} />
          <Route path="/haus-wohnung-modernisieren-bad-vilbel" element={<CityPage cityId="badvilbel" />} />
          <Route path="/sanierung-bruchkoebel" element={<CityPage cityId="bruchkoebel" />} />
          <Route path="/sanierung-buettelborn" element={<CityPage cityId="buettelborn" />} />
          <Route path="/sanierung-dieburg" element={<CityPage cityId="dieburg" />} />
          <Route path="/wohnung-modernisieren-dietzenbach" element={<CityPage cityId="dietzenbach" />} />
          <Route path="/sanierung-egelsbach" element={<CityPage cityId="egelsbach" />} />
          <Route path="/sanierung-erzhausen" element={<CityPage cityId="erzhausen" />} />
          <Route path="/wohnung-haus-modernisieren-eschborn" element={<CityPage cityId="eschborn" />} />
          <Route path="/sanierung-floersheim-am-main" element={<CityPage cityId="floersheim" />} />
          <Route path="/sanierung-friedberg-hessen" element={<CityPage cityId="friedberg" />} />
          <Route path="/einfamilienhaus-wohnung-sanieren-friedrichsdorf" element={<CityPage cityId="friedrichsdorf" />} />
          <Route path="/sanierung-ginsheim-gustavsburg" element={<CityPage cityId="ginsheimgustavsburg" />} />
          <Route path="/sanierung-griesheim" element={<CityPage cityId="griesheim" />} />
          <Route path="/immobilie-modernisieren-gross-gerau" element={<CityPage cityId="grossgerau" />} />
          <Route path="/sanierung-grosskrotzenburg" element={<CityPage cityId="grosskrotzenburg" />} />
          <Route path="/sanierung-gross-umstadt" element={<CityPage cityId="grossumstadt" />} />
          <Route path="/sanierung-hainburg" element={<CityPage cityId="hainburg" />} />
          <Route path="/wohneigentum-modernisieren-hattersheim-am-main" element={<CityPage cityId="hattersheim" />} />
          <Route path="/haus-modernisieren-heusenstamm" element={<CityPage cityId="heusenstamm" />} />
          <Route path="/haus-modernisieren-hofheim-am-taunus" element={<CityPage cityId="hofheim" />} />
          <Route path="/haus-wohnung-modernisieren-karben" element={<CityPage cityId="karben" />} />
          <Route path="/haus-modernisierung-kelkheim-taunus" element={<CityPage cityId="kelkheim" />} />
          <Route path="/eigentumswohnung-haus-modernisieren-kelsterbach" element={<CityPage cityId="kelsterbach" />} />
          <Route path="/haus-wohnung-sanieren-maintal" element={<CityPage cityId="maintal" />} />
          <Route path="/immobilie-modernisieren-moerfelden-walldorf" element={<CityPage cityId="moerfeldenwalldorf" />} />
          <Route path="/haus-wohnung-modernisieren-muehlheim-am-main" element={<CityPage cityId="muehlheim" />} />
          <Route path="/sanierung-neu-isenburg" element={<CityPage cityId="neuisenburg" />} />
          <Route path="/sanierung-nidderau" element={<CityPage cityId="nidderau" />} />
          <Route path="/reihenhaus-modernisieren-obertshausen" element={<CityPage cityId="obertshausen" />} />
          <Route path="/sanierung-raunheim" element={<CityPage cityId="raunheim" />} />
          <Route path="/einfamilienhaus-modernisieren-rodgau" element={<CityPage cityId="rodgau" />} />
          <Route path="/sanierung-schwalbach-am-taunus" element={<CityPage cityId="schwalbach" />} />
          <Route path="/altbau-haus-sanieren-seligenstadt" element={<CityPage cityId="seligenstadt" />} />
          <Route path="/sanierung-sulzbach-taunus" element={<CityPage cityId="sulzbach" />} />
          <Route path="/sanierung-weiterstadt" element={<CityPage cityId="weiterstadt" />} />
          <Route path="/badsanierung-rhein-main" element={<BathroomRenovation />} />
          <Route path="/sanierung/wohnungssanierung" element={<ApartmentRenovation />} />
          <Route path="/sanierung/haussanierung" element={<HouseRenovation />} />
          <Route path="/sanierung/altbausanierung" element={<HistoricBuildingRenovation />} />
          <Route path="/komplettsanierung-rhein-main" element={<CompleteRenovation />} />
          <Route path="/generalunternehmer-rhein-main" element={<GeneralContractor />} />
          <Route path="/energetische-sanierung-rhein-main" element={<EnergyEfficientRenovation />} />
          <Route path="/gewerbe-objektsanierung-rhein-main" element={<CommercialRenovation />} />
          <Route path="/schimmelsanierung-rhein-main" element={<MoldRemediation />} />
          <Route path="/schadstoffsanierung-rhein-main" element={<MoldRemediation />} />
          <Route path="/asbestsanierung-rhein-main" element={<AsbestosRemoval />} />
          <Route path="/heizung-sanitaer-rhein-main" element={<HeatingPlumbing />} />
          <Route path="/elektroinstallation-rhein-main" element={<ElectricalServices />} />
          <Route path="/innenausbau-umbau-rhein-main" element={<InteriorConstruction />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/karriere" element={<Karriere />} />
          <Route path="/sanierungskosten-rechner" element={<SanierungskostenRechnerPage />} />
          <Route path="/badsanierung-kosten" element={<SanierungskostenRechnerPage defaultType="bad" metaType="bad" />} />
          <Route path="/wohnungssanierung-kosten" element={<SanierungskostenRechnerPage defaultType="wohnung" metaType="wohnung" />} />
          <Route path="/altbausanierung-kosten" element={<SanierungskostenRechnerPage defaultType="altbau" metaType="altbau" />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
        <Footer />
        <MobileStickyCTA />
        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
