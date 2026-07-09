import { Link } from '../router';

export default function UrgentHelpSection() {
  return (
    <section className="home-section bg-white">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h2 className="text-3xl font-bold text-navy" style={{ marginBottom: '16px' }}>
            Schnelle Hilfe im Sanierungsfall
          </h2>
          <p className="text-gray-600 text-lg">
            Für dringende Fälle bieten wir schnelle Termine, Priorität und klare Schritte.
          </p>
        </div>

        <div className="home-urgent-grid">
          <Link to="/badsanierung-rhein-main" className="home-urgent-card">
            <h3>Notfall-Badservice</h3>
            <p>Akute Sanitärstörung, Wasserschaden oder dringende Badreparaturen.</p>
            <span className="home-link-orange">Jetzt anrufen</span>
          </Link>

          <Link to="/sanierung-rhein-main" className="home-urgent-card">
            <h3>Express-Sanierung</h3>
            <p>Schnelle Planung und Umsetzung für dringende Modernisierungen.</p>
            <span className="home-link-orange">Termin anfragen</span>
          </Link>

          <Link to="/schadstoffsanierung-rhein-main" className="home-urgent-card">
            <h3>Schadstoff-Sofortbefundung</h3>
            <p>Schnelle Bewertung bei Schimmel, Asbest oder anderen Schadstoffen.</p>
            <span className="home-link-orange">Befundung anfragen</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
