import { useEffect } from 'react';
import { ShieldCheck, Layers, Users, Wallet, Wrench, TrendingUp, Phone, Mail, Zap, HardHat, ClipboardList, Hammer, MessageSquare } from 'lucide-react';
import '../badsanierung.css';
import useSeo from '../useSeo';

export default function Karriere() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: "Karriere bei Radex | Jobs im Handwerk im Rhein-Main-Gebiet",
    description: "Jobs bei Radex im Rhein-Main-Gebiet: Elektriker, Bauhelfer, Bauleiter & Allrounder (m/w/d). Sicherer Arbeitsplatz, faire Bezahlung, starkes Team. Jetzt unkompliziert bewerben!",
    path: "/karriere"
  });

  const benefits = [
    { icon: <ShieldCheck size={28} color="#f97316" />, title: "Sicherer Arbeitsplatz", desc: "Unbefristete Anstellung in einem etablierten Meisterbetrieb mit über 40 Jahren Erfahrung." },
    { icon: <Layers size={28} color="#f97316" />, title: "Abwechslungsreiche Projekte", desc: "Echte Sanierungsprojekte statt monotoner Aufgaben – Badsanierung, Modernisierung, Innenausbau und mehr." },
    { icon: <Users size={28} color="#f97316" />, title: "Starkes Team", desc: "Kollegiales Miteinander, klare Abläufe und feste Ansprechpartner." },
    { icon: <Wallet size={28} color="#f97316" />, title: "Faire Bezahlung", desc: "Leistungsgerechte Vergütung und pünktliche Auszahlung." },
    { icon: <Wrench size={28} color="#f97316" />, title: "Moderne Ausstattung", desc: "Hochwertiges Werkzeug und gut ausgestattete Fahrzeuge." },
    { icon: <TrendingUp size={28} color="#f97316" />, title: "Entwicklungsmöglichkeiten", desc: "Weiterbildung und Aufstiegschancen in einem wachsenden Unternehmen." }
  ];

  const positions = [
    { icon: <Zap size={32} color="#f97316" />, title: "Elektriker (m/w/d)", desc: "Installationen, Modernisierung und Störungssuche in Wohn- und Gewerbeobjekten." },
    { icon: <HardHat size={32} color="#f97316" />, title: "Bauhelfer (m/w/d)", desc: "Materialvorbereitung, Baustellenunterstützung und Zuarbeit für die Gewerke." },
    { icon: <ClipboardList size={32} color="#f97316" />, title: "Bauleiter (m/w/d)", desc: "Koordination, Terminplanung und Qualitätssicherung auf unseren Baustellen." },
    { icon: <Hammer size={32} color="#f97316" />, title: "Allrounder / Handwerker (m/w/d)", desc: "Vielseitige Sanierungsarbeiten – auch Quereinsteiger sind willkommen." }
  ];

  const steps = [
    { number: 1, title: "Kurz melden", desc: "Per Telefon oder E-Mail – ganz unkompliziert." },
    { number: 2, title: "Position nennen", desc: "Sagen Sie uns, für welche Stelle Sie sich interessieren." },
    { number: 3, title: "Erfahrung schildern", desc: "Erzählen Sie uns von Ihrer Erfahrung und Verfügbarkeit." },
    { number: 4, title: "Kennenlernen", desc: "Wir besprechen die nächsten Schritte in einem persönlichen Gespräch." }
  ];

  return (
    <main className="badsanierung-page">
      {/* HERO */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Karriere bei Radex <br/>
              <span>Handwerk mit Perspektive im Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-subtitle">Werden Sie Teil eines starken Teams.</p>
            <p className="br-hero-text">
              Bei Radex arbeiten Sie an echten Sanierungsprojekten statt an monotonen Aufgaben – von der Badsanierung
              über die Wohnungsmodernisierung bis zum Innenausbau und der Heizungs- und Sanitärinstallation.
            </p>
            <div className="br-hero-actions" style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
              <a href="#bewerben" className="btn br-btn-orange">Jetzt bewerben &rarr;</a>
              <a href="tel:+496074960620" className="btn" style={{display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid #d1d5db', color: '#111827', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none'}}>
                <Phone size={18} /> 06074 960620
              </a>
            </div>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600)` }}>
        </div>
      </section>

      {/* WHY WORK HERE */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Radex?</h2>
            <p className="br-section-subtitle">Was Sie als Teil unseres Teams erwartet.</p>
          </div>
          <div className="br-benefits-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'}}>
            {benefits.map((item, idx) => (
              <div key={idx} className="br-benefit-card" style={{background: '#fff', border: '1px solid #e5e7eb'}}>
                <div className="br-benefit-icon" style={{marginBottom: '12px'}}>{item.icon}</div>
                <h3 style={{fontSize: '18px'}}>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Offene Stellen</h2>
            <p className="br-section-subtitle">Wir suchen Verstärkung in mehreren Bereichen.</p>
          </div>
          <div className="br-projects-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
            {positions.map((pos, idx) => (
              <div key={idx} className="br-benefit-card" style={{border: '1px solid #e5e7eb', background: '#fff'}}>
                <div className="br-benefit-icon" style={{marginBottom: '12px'}}>{pos.icon}</div>
                <h3 style={{fontSize: '20px'}}>{pos.title}</h3>
                <p>{pos.desc}</p>
                <a href="#bewerben" className="dropdown-item" style={{color: '#f97316', fontWeight: 600, marginTop: '12px', display: 'inline-block'}}>Jetzt bewerben &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION STEPS */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="br-section-title">So einfach bewerben Sie sich</h2>
            <p className="br-section-subtitle">Vollständige Unterlagen sind zunächst nicht nötig.</p>
          </div>
          <div className="br-process-flow">
            {steps.map((step, idx) => (
              <div key={idx} style={{display: 'flex', alignItems: 'center'}}>
                <div className="br-process-step">
                  <div className="br-step-number">{step.number}</div>
                  <h4>{step.title}</h4>
                  <p style={{fontSize: '14px', color: '#6b7280', marginTop: '8px', maxWidth: '180px'}}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY CTA */}
      <section id="bewerben" className="br-section">
        <div className="container text-center" style={{maxWidth: '800px'}}>
          <h2 className="br-section-title">Jetzt Teil des Teams werden</h2>
          <p className="br-section-subtitle" style={{marginBottom: '32px'}}>
            Melden Sie sich kurz telefonisch oder per E-Mail. Sagen Sie uns, welche Position Sie interessiert und
            wann Sie verfügbar sind – den Rest besprechen wir persönlich.
          </p>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <a href="tel:+496074960620" className="btn br-btn-orange" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Phone size={18} /> 06074 960620
            </a>
            <a href="mailto:info@radex-objektmanagement.de?subject=Bewerbung%20bei%20Radex" className="btn" style={{display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid #d1d5db', color: '#111827', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none'}}>
              <Mail size={18} /> Per E-Mail bewerben
            </a>
            <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
              WhatsApp <MessageSquare size={18} color="#25D366" style={{marginLeft: '8px'}} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
