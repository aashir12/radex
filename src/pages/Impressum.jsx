import { useEffect } from 'react';
import '../badsanierung.css';
import useSeo from '../useSeo';

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: "Impressum | Radex Objektmanagement GmbH",
    description: "Impressum der Radex Objektmanagement GmbH, Odenwaldstraße 61, 63322 Rödermark.",
    path: "/impressum"
  });

  return (
    <main className="badsanierung-page">
      <section className="br-section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="br-section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>Impressum</h1>

          <div style={{ color: '#374151', fontSize: '15px', lineHeight: 1.7 }}>
            <h3 style={{ marginTop: '24px', marginBottom: '8px', color: '#111827' }}>Angaben gemäß § 5 TMG</h3>
            <p>
              Radex Objektmanagement GmbH<br />
              Odenwaldstraße 61<br />
              63322 Rödermark
            </p>

            <h3 style={{ marginTop: '24px', marginBottom: '8px', color: '#111827' }}>Vertreten durch</h3>
            <p>Geschäftsführer: Hakim Rafoud</p>

            <h3 style={{ marginTop: '24px', marginBottom: '8px', color: '#111827' }}>Kontakt</h3>
            <p>
              Telefon: <a href="tel:+496074960620" style={{ color: '#f97316' }}>06074 960620</a><br />
              Fax: 06074-922928<br />
              E-Mail: <a href="mailto:info@radex-objektmanagement.de" style={{ color: '#f97316' }}>info@radex-objektmanagement.de</a>
            </p>

            <h3 style={{ marginTop: '24px', marginBottom: '8px', color: '#111827' }}>Registereintrag</h3>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Offenbach am Main<br />
              Registernummer: HRB 51405
            </p>

            <h3 style={{ marginTop: '24px', marginBottom: '8px', color: '#111827' }}>Umsatzsteuer-ID</h3>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE321530035</p>

            <h3 style={{ marginTop: '24px', marginBottom: '8px', color: '#111827' }}>Zuständige Aufsichtsbehörde</h3>
            <p>
              Handwerkskammer Frankfurt am Main<br />
              Bockenheimer Landstraße 21<br />
              60325 Frankfurt am Main
            </p>

            <h3 style={{ marginTop: '24px', marginBottom: '8px', color: '#111827' }}>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
