import { ArrowRight } from 'lucide-react';
import imgBadsanierung from '../assets/walk_in_shower.png';
import imgSanierung from '../assets/bathroom_renovation_work.png';

export default function CoreHighlights() {
  const handleActionClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId.substring(1));
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="leistungen-fokus" className="core-hl reveal">
      <div className="container">
        <div className="core-hl-bento">
          {/* Primary — Badsanierung */}
          <a
            href="#kontakt"
            className="core-hl-card core-hl-card--primary"
            onClick={(e) => handleActionClick(e, '#kontakt')}
          >
            <img
              src={imgBadsanierung}
              alt="Badsanierung"
              className="core-hl-card-img"
            />
            <div className="core-hl-card-gradient"></div>
            <div className="core-hl-card-content">
              <span className="core-hl-chip">Fokus</span>
              <h3 className="core-hl-card-heading">Badsanierung</h3>
              <p className="core-hl-card-desc">
                Komplettbäder, Badmodernisierung und Umgestaltung für Ihr neues Wohlfühlbad — schlüsselfertig aus einer Hand.
              </p>
              <span className="core-hl-card-cta">
                Mehr erfahren <ArrowRight size={15} />
              </span>
            </div>
          </a>

          {/* Secondary — Sanierung */}
          <a
            href="#kontakt"
            className="core-hl-card core-hl-card--secondary"
            onClick={(e) => handleActionClick(e, '#kontakt')}
          >
            <img
              src={imgSanierung}
              alt="Sanierung"
              className="core-hl-card-img"
            />
            <div className="core-hl-card-gradient"></div>
            <div className="core-hl-card-content">
              <span className="core-hl-chip">Fokus</span>
              <h3 className="core-hl-card-heading">Sanierung</h3>
              <p className="core-hl-card-desc">
                Wohnungssanierung, Haussanierung, Altbausanierung und Modernisierungen im Rhein-Main-Gebiet.
              </p>
              <span className="core-hl-card-cta">
                Mehr erfahren <ArrowRight size={15} />
              </span>
            </div>
          </a>

          {/* Stat / Trust bar */}
          <div className="core-hl-stats">
            <div className="core-hl-stat">
              <span className="core-hl-stat-num">500+</span>
              <span className="core-hl-stat-label">Projekte realisiert</span>
            </div>
            <div className="core-hl-stat-divider"></div>
            <div className="core-hl-stat">
              <span className="core-hl-stat-num">60+</span>
              <span className="core-hl-stat-label">Städte im Einsatz</span>
            </div>
            <div className="core-hl-stat-divider"></div>
            <div className="core-hl-stat">
              <span className="core-hl-stat-num">100%</span>
              <span className="core-hl-stat-label">Festpreisgarantie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
