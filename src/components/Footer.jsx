import { Shield, Wrench, ShieldAlert, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from '../router';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Google Maps Strip */}
      <div className="footer-map-wrapper">
        <iframe
          className="footer-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.6!2d8.8!3d49.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0b9a5a2e9999%3A0x0!2sOdenwaldstra%C3%9Fe%2061%2C%2063322%20R%C3%B6dermark!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Radex Objektmanagement Standort"
        ></iframe>
        <div className="footer-map-overlay">
          <div className="footer-map-badge">
            <MapPin size={16} />
            <span>Odenwaldstraße 61 · 63322 Rödermark</span>
          </div>
        </div>
      </div>

      <div className="container" style={{maxWidth: '1440px'}}>
        <div className="footer-grid">
          
          {/* COLUMN 1 - COMPANY */}
          <div className="footer-col">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{display: 'inline-block', marginBottom: '24px', background: '#fff', padding: '10px 14px', borderRadius: '12px'}}>
              <Logo height={40} />
            </a>
            <p className="footer-col-desc">
              Sanierungs-, Badsanierungs- und Modernisierungsleistungen im gesamten Rhein-Main-Gebiet. Als zugelassener SHK-Meisterbetrieb und Generalunternehmer begleitet Radex Wohn- und Gewerbesanierungen von der Planung bis zur Schlüsselübergabe.
            </p>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <MapPin size={18} />
                <span>Odenwaldstraße 61<br/>63322 Rödermark</span>
              </li>
              <li className="footer-contact-item" style={{marginTop: '8px'}}>
                <Phone size={18} />
                <a href="tel:+496074960620" className="footer-link">06074 960620</a>
              </li>
              <li className="footer-contact-item">
                <Mail size={18} />
                <a href="mailto:info@radex-objektmanagement.de" className="footer-link">info@radex-objektmanagement.de</a>
              </li>
            </ul>
          </div>

          {/* COLUMN 2 - BATHROOM RENOVATION */}
          <div className="footer-col">
            <h4>Badsanierung</h4>
            <p className="footer-col-desc">
              Von der Badmodernisierung bis zur Komplettbadsanierung bietet Radex Planung, Koordination und Ausführung aus einer Hand.
            </p>
            <ul className="footer-links">
              <li><a href="/badsanierung-rhein-main" className="footer-link">Badsanierung</a></li>
              <li><a href="/badsanierung-rhein-main" className="footer-link">Barrierefreies Bad</a></li>
              <li><a href="/badsanierung-rhein-main" className="footer-link">Badplanung</a></li>
              <li><a href="/#beispiele" className="footer-link">Aktuelle Badprojekte</a></li>
              <li><a href="/badsanierung-kosten" className="footer-link">Badsanierung Kosten</a></li>
            </ul>
          </div>

          {/* COLUMN 3 - RENOVATION */}
          <div className="footer-col">
            <h4>Sanierung</h4>
            <p className="footer-col-desc">
              Professionelle Sanierungslösungen für Wohnungen, Häuser, Altbauten und Kapitalanlagen im Rhein-Main-Gebiet.
            </p>
            <ul className="footer-links">
              <li><a href="/sanierung/wohnungssanierung" className="footer-link">Wohnungssanierung</a></li>
              <li><a href="/sanierung/haussanierung" className="footer-link">Haussanierung</a></li>
              <li><a href="/sanierung/altbausanierung" className="footer-link">Altbausanierung</a></li>
              <li><a href="/generalunternehmer-rhein-main" className="footer-link">Generalunternehmer</a></li>
              <li><a href="/komplettsanierung-rhein-main" className="footer-link">Komplettsanierung</a></li>
            </ul>
          </div>

          {/* COLUMN 4 - SPECIALIST SERVICES */}
          <div className="footer-col">
            <h4>Leistungen</h4>
            <p className="footer-col-desc">
              Spezialisierte Fachleistungen für Gebäudetechnik, Modernisierung, Innenausbau und Immobilienaufwertung.
            </p>
            <ul className="footer-links">
              <li><a href="/heizung-sanitaer-rhein-main" className="footer-link">Heizung & Sanitär</a></li>
              <li><a href="/elektroinstallation-rhein-main" className="footer-link">Elektrotechnik</a></li>
              <li><a href="/innenausbau-umbau-rhein-main" className="footer-link">Innenausbau & Umbau</a></li>
              <li><a href="/energetische-sanierung-rhein-main" className="footer-link">Energetische Sanierung</a></li>
              <li><a href="/schadstoffsanierung-rhein-main" className="footer-link">Schimmel- & Schadstoffsanierung</a></li>
              <li><a href="/gewerbe-objektsanierung-rhein-main" className="footer-link">Gewerbesanierung</a></li>
            </ul>
          </div>

          {/* COLUMN 5 - COSTS & PRICING */}
          <div className="footer-col">
            <h4>Kosten & Preise</h4>
            <p className="footer-col-desc">
              Kostenratgeber, Preisbeispiele und wichtige Budgetfaktoren für gängige Sanierungsprojekte.
            </p>
            <ul className="footer-links">
              <li><a href="/sanierungskosten-rechner" className="footer-link">Sanierungskosten Rechner</a></li>
              <li><a href="/badsanierung-kosten" className="footer-link">Badsanierung Kosten</a></li>
              <li><a href="/wohnungssanierung-kosten" className="footer-link">Wohnungssanierung Kosten</a></li>
              <li><a href="/sanierung/haussanierung" className="footer-link">Haussanierung Kosten</a></li>
              <li><a href="/altbausanierung-kosten" className="footer-link">Altbausanierung Kosten</a></li>
              <li><a href="/heizung-sanitaer-rhein-main" className="footer-link">Heizung erneuern Kosten</a></li>
            </ul>
          </div>

          {/* COLUMN 6 - PROJECTS */}
          <div className="footer-col">
            <h4>Projekte</h4>
            <p className="footer-col-desc">
              Entdecken Sie laufende Baustellen, abgeschlossene Sanierungen und echte Praxisbeispiele aus unserem Baualltag.
            </p>
            <ul className="footer-links">
              <li><a href="/#beispiele" className="footer-link">Aktuelle Projekte</a></li>
              <li><a href="/#beispiele" className="footer-link">Abgeschlossene Projekte</a></li>
              <li><a href="/#beispiele" className="footer-link">Vorher & Nachher</a></li>
              <li><a href="/#beispiele" className="footer-link">Radex Live</a></li>
            </ul>
          </div>

          {/* COLUMN 7 - SERVICE AREAS */}
          <div className="footer-col">
            <h4>Einsatzgebiete</h4>
            <p className="footer-col-desc">
              Radex betreut Sanierungs- und Modernisierungsprojekte in zahlreichen Städten im Rhein-Main-Gebiet.
            </p>
            <ul className="footer-links">
              <li><a href="/sanierung-frankfurt-am-main" className="footer-link">Frankfurt am Main</a></li>
              <li><a href="/sanierung-offenbach-am-main" className="footer-link">Offenbach am Main</a></li>
              <li><a href="/einsatzgebiete-rhein-main" className="footer-link">Rodgau</a></li>
              <li><a href="/sanierung-roedermark" className="footer-link">Rödermark</a></li>
              <li><a href="/haus-wohnung-bad-modernisieren-darmstadt" className="footer-link">Darmstadt</a></li>
              <li><a href="/einsatzgebiete-rhein-main" className="footer-link font-semibold">Alle Einsatzgebiete ansehen &rarr;</a></li>
            </ul>
          </div>

          {/* COLUMN 8 - GUIDES & RESOURCES */}
          <div className="footer-col">
            <h4>Ratgeber</h4>
            <p className="footer-col-desc">
              Hilfreiche Informationen zu Planung, Sanierungskosten, Modernisierungsstrategien und häufigen Projektfragen.
            </p>
            <ul className="footer-links">
              <li><a href="/badsanierung-rhein-main" className="footer-link">Badsanierung</a></li>
              <li><a href="/sanierung/wohnungssanierung" className="footer-link">Wohnungssanierung</a></li>
              <li><a href="/sanierung/haussanierung" className="footer-link">Haussanierung</a></li>
              <li><a href="/sanierung/altbausanierung" className="footer-link">Altbausanierung</a></li>
              <li><a href="/heizung-sanitaer-rhein-main" className="footer-link">Heizung</a></li>
              <li><a href="/schimmelsanierung-rhein-main" className="footer-link">Schimmelsanierung</a></li>
              <li><a href="/sanierung-rhein-main" className="footer-link font-semibold">Alle Ratgeber ansehen &rarr;</a></li>
            </ul>
          </div>

          {/* COLUMN 9 - COMPANY */}
          <div className="footer-col">
            <h4>Unternehmen</h4>
            <p className="footer-col-desc">
              Erfahren Sie mehr über Radex, Karrieremöglichkeiten und Unternehmensinformationen.
            </p>
            <ul className="footer-links">
              <li><Link to="/ueber-uns" className="footer-link">Über Radex</Link></li>
              <li><Link to="/karriere" className="footer-link">Karriere</Link></li>
              <li><a href="/#kontakt" className="footer-link">Kontakt</a></li>
              <li><Link to="/impressum" className="footer-link">Impressum</Link></li>
              <li><Link to="/datenschutz" className="footer-link">Datenschutz</Link></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
              <Wrench size={16} color="var(--gold)" />
              <span>Zugelassener SHK Meisterbetrieb</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
              <Shield size={16} color="var(--gold)" />
              <span>Geprüfter Generalunternehmer</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
              <ShieldAlert size={16} color="var(--gold)" />
              <span>TRGS 519 (Asbest-Sachkunde)</span>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)' }}>
              © {new Date().getFullYear()} RADEX Objektmanagement GmbH. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
