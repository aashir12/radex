import { useState } from 'react';
import { Link } from '../router';
import { ShieldCheck, Users, Sparkles, BadgeCheck, ArrowRight, MessageSquare, Search, FileText, Hammer, KeyRound, Bath, Home as HomeIcon, Gem } from 'lucide-react';

export default function ProjectHub() {
  const [tab, setTab] = useState('why');

  const whyItems = [
    { icon: <ShieldCheck size={28} color="#f97316" strokeWidth={1.5} />, title: 'SHK-Meisterbetrieb', desc: 'Zugelassener Innungsbetrieb mit fachgerechter Ausführung nach aktuellen Normen.' },
    { icon: <Users size={28} color="#f97316" strokeWidth={1.5} />, title: 'Alles aus einer Hand', desc: 'Generalunternehmer für Planung, Koordination und Ausführung aller Gewerke.' },
    { icon: <Sparkles size={28} color="#f97316" strokeWidth={1.5} />, title: 'Staubarme Sanierung', desc: 'Professionelle Schutzmaßnahmen für eine saubere und sichere Bauphase.' },
    { icon: <BadgeCheck size={28} color="#f97316" strokeWidth={1.5} />, title: 'Festpreisgarantie', desc: 'Klare Angebote ohne versteckte Kosten - für maximale Planungssicherheit.' }
  ];

  const processSteps = [
    { number: '01', icon: <MessageSquare size={24} color="#f97316" />, title: 'Anfrage' },
    { number: '02', icon: <Search size={24} color="#f97316" />, title: 'Vor-Ort-Besichtigung' },
    { number: '03', icon: <FileText size={24} color="#f97316" />, title: 'Festpreisangebot' },
    { number: '04', icon: <Hammer size={24} color="#f97316" />, title: 'Umsetzung' },
    { number: '05', icon: <KeyRound size={24} color="#f97316" />, title: 'Projektübergabe' }
  ];

  const costItems = [
    { icon: <Bath size={24} color="#f97316" strokeWidth={1.5} />, title: 'Gäste-WC', price: '5.000 €' },
    { icon: <HomeIcon size={24} color="#f97316" strokeWidth={1.5} />, title: 'Komfortbad', price: '12.000 €' },
    { icon: <Gem size={24} color="#f97316" strokeWidth={1.5} />, title: 'Premium-Wellnessbad', price: '25.000 €' }
  ];

  return (
    <section className="home-section bg-gray-50 border-t border-b border-gray-100">
      <div className="container">
        <div className="text-center" style={{marginBottom: '40px'}}>
          <h2 className="text-3xl font-bold text-navy" style={{marginBottom: '16px'}}>Ihr Sanierungsprojekt im Überblick</h2>
          <p className="text-gray-600 text-lg">Erfahren Sie mehr über unseren Ablauf, die Planung und die Projektkosten.</p>
        </div>

        <div className="home-hub-tabs">
          <button className={`home-hub-tab ${tab === 'why' ? 'active' : ''}`} onClick={() => setTab('why')}>Warum Radex?</button>
          <button className={`home-hub-tab ${tab === 'process' ? 'active' : ''}`} onClick={() => setTab('process')}>Ablauf & Planung</button>
          <button className={`home-hub-tab ${tab === 'cost' ? 'active' : ''}`} onClick={() => setTab('cost')}>Kostenrechner</button>
        </div>

        <div className="home-hub-panel">
          {tab === 'why' && (
            <div>
              <div className="home-grid-4">
                {whyItems.map((item, idx) => (
                  <div key={idx} className="home-trust-item">
                    <div style={{flexShrink: 0, marginTop: '4px', width: '60px', height: '60px', backgroundColor: '#fff7ed', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(249, 115, 22, 0.1)'}}>
                      {item.icon}
                    </div>
                    <div style={{paddingTop: '6px'}}>
                      <h3 className="text-lg font-bold text-navy" style={{marginBottom: '8px'}}>{item.title}</h3>
                      <p className="text-sm text-gray-600" style={{lineHeight: 1.6}}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center" style={{marginTop: '40px'}}>
                <a href="#kontakt" className="home-btn-orange" style={{display: 'inline-flex'}}>
                  Beratung anfordern <ArrowRight size={16} />
                </a>
              </div>
            </div>
          )}

          {tab === 'process' && (
            <div>
              <div className="br-process-flow">
                {processSteps.map((step, idx) => (
                  <div key={idx} style={{display: 'flex', alignItems: 'center'}}>
                    <div className="br-process-step">
                      <div className="br-step-number">{step.number}</div>
                      <div className="br-step-icon">{step.icon}</div>
                      <h4>{step.title}</h4>
                    </div>
                    {idx < processSteps.length - 1 && <ArrowRight className="br-step-arrow" size={24} />}
                  </div>
                ))}
              </div>
              <div className="text-center" style={{marginTop: '40px'}}>
                <Link to="/sanierung-rhein-main" className="home-btn-orange" style={{display: 'inline-flex'}}>
                  Mehr über den Ablauf erfahren <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}

          {tab === 'cost' && (
            <div>
              <div className="home-grid-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))'}}>
                {costItems.map((item, idx) => (
                  <div key={idx} className="home-cost-card">
                    <div style={{marginBottom: '16px'}}>{item.icon}</div>
                    <h4 className="font-bold text-navy text-sm" style={{marginBottom: '8px'}}>{item.title}</h4>
                    <p className="text-gray-600 text-sm" style={{margin: 0}}>ab <strong className="text-navy">{item.price}</strong></p>
                  </div>
                ))}
              </div>
              <div className="text-center" style={{marginTop: '40px'}}>
                <Link to="/sanierungskosten-rechner" className="home-btn-orange" style={{display: 'inline-flex'}}>
                  Kosten berechnen <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
