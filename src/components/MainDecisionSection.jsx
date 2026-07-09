import { Link } from '../router';
import { Bath, Building2 } from 'lucide-react';

export default function MainDecisionSection() {
  return (
    <section className="home-section bg-gray-50">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '44px' }}>
          <h2 className="text-3xl font-bold text-navy" style={{ marginBottom: '16px' }}>
            Die wichtigsten Leistungen
          </h2>
          <p className="text-gray-600 text-lg">
            Wählen Sie Ihre Hauptsanierung: ob Badmodernisierung oder umfassende Immobiliensanierung.
          </p>
        </div>

        <div className="home-main-decision-grid">
          <Link to="/badsanierung-rhein-main" className="home-main-card">
            <div className="home-main-card-icon">
              <Bath size={24} />
            </div>
            <h3>Badsanierung</h3>
            <p>
              Modernisierung, barrierefreie Duschen und hochwertiges Baddesign mit verlässlicher Projektsteuerung.
            </p>
            <span className="home-link-orange">Zur Badsanierung</span>
          </Link>

          <Link to="/sanierung-rhein-main" className="home-main-card">
            <div className="home-main-card-icon">
              <Building2 size={24} />
            </div>
            <h3>Sanierung</h3>
            <p>
              Komplette Wohnungs- und Haussanierung mit Ausbau, Technik, Koordination und Festpreisgarantie.
            </p>
            <span className="home-link-orange">Zur Sanierung</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
