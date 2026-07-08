import { useEffect } from 'react';
import { Camera, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { Link } from '../router';
import '../badsanierung.css';
import useSeo from '../useSeo';

export default function LeistungenHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: "Leistungen | Sanierung & Modernisierung im Rhein-Main-Gebiet | Radex",
    description: "Alle Leistungen von Radex im Rhein-Main-Gebiet: Komplettsanierung, Heizung & Sanitär, Elektrotechnik, Innenausbau, Energie & Förderung, Schimmel & Asbest, Gewerbe.",
    path: "/leistungen"
  });

  return (
    <main className="badsanierung-page">
      {/* 1. HERO */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Leistungen für Sanierung, Modernisierung<br/>
              <span>und Immobilienaufwertung</span>
            </h1>
            <p className="br-hero-subtitle">
              Von der Komplettsanierung bis zur technischen Gebäudeausrüstung im Rhein-Main-Gebiet.
            </p>
            <p className="br-hero-text">
              Radex unterstützt Eigentümer, Hausverwaltungen und Gewerbekunden bei jedem Schritt – mit einem zentralen Ansprechpartner und Festpreisgarantie.
            </p>
            <div className="br-hero-actions">
              <a href="#kontakt" className="btn br-btn-orange">Projekt anfragen &rarr;</a>
              <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
                WhatsApp uns <MessageSquare size={18} color="#25D366" style={{marginLeft: '8px'}} />
              </a>
            </div>
            <p className="br-hero-micro">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1600)' }}>
        </div>
      </section>

      {/* 2. WHAT WOULD YOU LIKE TO DO? (7 CARDS) */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was möchten Sie tun?</h2>
            <p className="br-section-subtitle">
              Wählen Sie die passende Leistung für Ihr Projekt aus.
            </p>
          </div>
          
          <div className="br-projects-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
            
            {/* Card 1 */}
            <Link to="/komplettsanierung-rhein-main" className="br-project-card" style={{textDecoration: 'none', color: 'inherit', border: '1px solid #e5e7eb'}}>
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800)', height: '200px' }}></div>
              <div className="br-project-info" style={{background: '#fff', padding: '24px'}}>
                <h4 style={{fontSize: '20px', marginBottom: '8px', color: '#111827'}}>Komplettsanierung</h4>
                <p style={{color: '#4b5563', fontSize: '15px', marginBottom: '16px', minHeight: '60px'}}>
                  Sanierungsprojekte komplett aus einer Hand gesteuert. Von der Planung bis zur Schlüsselübergabe.
                </p>
                <div style={{marginBottom: '16px', fontSize: '14px', color: '#6b7280'}}>
                  <strong>Beinhaltet:</strong> Generalunternehmer • Komplettsanierung • Kernsanierung • Teilsanierung
                </div>
                <span style={{color: '#f97316', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px'}}>
                  Mehr erfahren <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/heizung-sanitaer-rhein-main" className="br-project-card" style={{textDecoration: 'none', color: 'inherit', border: '1px solid #e5e7eb'}}>
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800)', height: '200px' }}></div>
              <div className="br-project-info" style={{background: '#fff', padding: '24px'}}>
                <h4 style={{fontSize: '20px', marginBottom: '8px', color: '#111827'}}>Heizung & Sanitär</h4>
                <p style={{color: '#4b5563', fontSize: '15px', marginBottom: '16px', minHeight: '60px'}}>
                  Moderne Heizsysteme, Wärmepumpen und fachgerechte Sanitärinstallationen.
                </p>
                <div style={{marginBottom: '16px', fontSize: '14px', color: '#6b7280'}}>
                  <strong>Beinhaltet:</strong> Heizungsmodernisierung • Wärmepumpen • Sanitärinstallation
                </div>
                <span style={{color: '#f97316', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px'}}>
                  Mehr erfahren <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/elektroinstallation-rhein-main" className="br-project-card" style={{textDecoration: 'none', color: 'inherit', border: '1px solid #e5e7eb'}}>
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800)', height: '200px' }}></div>
              <div className="br-project-info" style={{background: '#fff', padding: '24px'}}>
                <h4 style={{fontSize: '20px', marginBottom: '8px', color: '#111827'}}>Elektrotechnik</h4>
                <p style={{color: '#4b5563', fontSize: '15px', marginBottom: '16px', minHeight: '60px'}}>
                  Elektrische Aufwertungen, Sicherheit und intelligente Gebäudetechnik.
                </p>
                <div style={{marginBottom: '16px', fontSize: '14px', color: '#6b7280'}}>
                  <strong>Beinhaltet:</strong> Elektroinstallation • Elektrik im Altbau erneuern • Zählerschrank
                </div>
                <span style={{color: '#f97316', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px'}}>
                  Mehr erfahren <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link to="/innenausbau-umbau-rhein-main" className="br-project-card" style={{textDecoration: 'none', color: 'inherit', border: '1px solid #e5e7eb'}}>
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800)', height: '200px' }}></div>
              <div className="br-project-info" style={{background: '#fff', padding: '24px'}}>
                <h4 style={{fontSize: '20px', marginBottom: '8px', color: '#111827'}}>Innenausbau & Umbau</h4>
                <p style={{color: '#4b5563', fontSize: '15px', marginBottom: '16px', minHeight: '60px'}}>
                  Räume umgestalten, Wände versetzen und moderne Wohnkonzepte umsetzen.
                </p>
                <div style={{marginBottom: '16px', fontSize: '14px', color: '#6b7280'}}>
                  <strong>Beinhaltet:</strong> Trockenbau • Grundrissänderung • Innenausbau Wohnung
                </div>
                <span style={{color: '#f97316', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px'}}>
                  Mehr erfahren <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card 5 */}
            <Link to="/energetische-sanierung-rhein-main" className="br-project-card" style={{textDecoration: 'none', color: 'inherit', border: '1px solid #e5e7eb'}}>
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800)', height: '200px' }}></div>
              <div className="br-project-info" style={{background: '#fff', padding: '24px'}}>
                <h4 style={{fontSize: '20px', marginBottom: '8px', color: '#111827'}}>Energie & Förderung</h4>
                <p style={{color: '#4b5563', fontSize: '15px', marginBottom: '16px', minHeight: '60px'}}>
                  Effizienz steigern, Energiekosten senken und staatliche Förderungen nutzen.
                </p>
                <div style={{marginBottom: '16px', fontSize: '14px', color: '#6b7280'}}>
                  <strong>Beinhaltet:</strong> Energetische Sanierung • Energieeffizienz • Fördermittel
                </div>
                <span style={{color: '#f97316', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px'}}>
                  Mehr erfahren <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card 6 */}
            <Link to="/schadstoffsanierung-rhein-main" className="br-project-card" style={{textDecoration: 'none', color: 'inherit', border: '1px solid #e5e7eb'}}>
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800)', height: '200px' }}></div>
              <div className="br-project-info" style={{background: '#fff', padding: '24px'}}>
                <h4 style={{fontSize: '20px', marginBottom: '8px', color: '#111827'}}>Schimmel & Asbest</h4>
                <p style={{color: '#4b5563', fontSize: '15px', marginBottom: '16px', minHeight: '60px'}}>
                  Professionelle Beseitigung und Gefahrstoffsanierung nach TRGS 519.
                </p>
                <div style={{marginBottom: '16px', fontSize: '14px', color: '#6b7280'}}>
                  <strong>Beinhaltet:</strong> Schimmelsanierung • Asbestsanierung • Schadstoffsanierung
                </div>
                <span style={{color: '#f97316', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px'}}>
                  Mehr erfahren <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card 7 */}
            <Link to="/gewerbe-objektsanierung-rhein-main" className="br-project-card" style={{textDecoration: 'none', color: 'inherit', border: '1px solid #e5e7eb'}}>
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800)', height: '200px' }}></div>
              <div className="br-project-info" style={{background: '#fff', padding: '24px'}}>
                <h4 style={{fontSize: '20px', marginBottom: '8px', color: '#111827'}}>Gewerbeimmobilien</h4>
                <p style={{color: '#4b5563', fontSize: '15px', marginBottom: '16px', minHeight: '60px'}}>
                  Sanierung und Modernisierung von Büros, Praxen und Gewerbeflächen.
                </p>
                <div style={{marginBottom: '16px', fontSize: '14px', color: '#6b7280'}}>
                  <strong>Beinhaltet:</strong> Gewerbesanierung • Büroumbau • Mieterausbau
                </div>
                <span style={{color: '#f97316', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px'}}>
                  Mehr erfahren <ArrowRight size={16} />
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 3. NOT SURE WHICH SERVICE YOU NEED? */}
      <section id="kontakt" className="br-section">
        <div className="container" style={{maxWidth: '800px', textAlign: 'center'}}>
          <h2 className="br-section-title">Unsicher, welche Leistung Sie benötigen?</h2>
          <p className="br-section-subtitle" style={{marginBottom: '30px'}}>
            Jedes Projekt ist einzigartig. Senden Sie uns Fotos per WhatsApp oder beschreiben Sie Ihr Vorhaben über das Kontaktformular. Unser Team prüft Ihre Anfrage und empfiehlt Ihnen die passendste Lösung.
          </p>
          
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px'}}>
            <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
              WhatsApp uns <MessageSquare size={18} color="#25D366" style={{marginLeft: '8px'}} />
            </a>
            <button className="btn br-btn-orange">Projekt anfragen &rarr;</button>
          </div>
          <p className="br-hero-micro" style={{justifyContent: 'center'}}>
            <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
          </p>
        </div>
      </section>

    </main>
  );
}
