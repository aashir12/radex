import { useEffect } from 'react';
import '../badsanierung.css';
import useSeo from '../useSeo';

export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: "Datenschutz | Radex Objektmanagement GmbH",
    description: "Datenschutzerklärung der Radex Objektmanagement GmbH gemäß DSGVO.",
    path: "/datenschutz"
  });

  const sectionStyle = { marginTop: '24px', marginBottom: '8px', color: '#111827' };
  const textStyle = { color: '#374151', fontSize: '15px', lineHeight: 1.7 };

  return (
    <main className="badsanierung-page">
      <section className="br-section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="br-section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>Datenschutzerklärung</h1>

          <div style={textStyle}>
            <h3 style={sectionStyle}>1. Verantwortlicher</h3>
            <p>
              Verantwortlicher im Sinne der Datenschutzgrundverordnung (DSGVO) ist:<br /><br />
              Radex Objektmanagement GmbH<br />
              Odenwaldstraße 61<br />
              63322 Rödermark<br />
              E-Mail: <a href="mailto:info@radex-objektmanagement.de" style={{ color: '#f97316' }}>info@radex-objektmanagement.de</a><br />
              Telefon: <a href="tel:+496074960620" style={{ color: '#f97316' }}>06074 960620</a>
            </p>

            <h3 style={sectionStyle}>2. Erhebung und Verarbeitung personenbezogener Daten</h3>
            <p>
              Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen einer Kontaktaufnahme (z. B. über unser Kontaktformular,
              per WhatsApp oder E-Mail) freiwillig mitteilen. Zudem werden beim Besuch unserer Website automatisch technische
              Informationen (z. B. IP-Adresse, Browsertyp, Zugriffszeit) erfasst. Diese Daten werden zur Bereitstellung und
              Verbesserung unseres Angebots sowie zur Bearbeitung Ihrer Anfragen verwendet.
            </p>

            <h3 style={sectionStyle}>3. Cookies und Analyse-Tools</h3>
            <p>
              Unsere Website verwendet Cookies, um die Nutzung bestimmter Funktionen zu ermöglichen und die Nutzererfahrung zu
              verbessern. Soweit technisch nicht notwendige Cookies oder Analysetools (z. B. Google Analytics) eingesetzt werden,
              erfolgt dies nur auf Grundlage Ihrer Einwilligung über unser Consent-Management-Tool. Sie können Ihre Einwilligung
              jederzeit widerrufen.
            </p>

            <h3 style={sectionStyle}>4. Externe Dienste und Drittanbieter</h3>
            <p>
              Zur Bereitstellung bestimmter Funktionen nutzen wir Dienste von Drittanbietern, unter anderem für Hosting,
              Webanalyse (z. B. Google Analytics), Online-Werbung (z. B. Google Ads, Meta/Facebook, Instagram), Kommunikation
              (z. B. WhatsApp) sowie Social-Media-Einbindungen (z. B. LinkedIn, TikTok). Hierbei kann es zu einer Übermittlung
              personenbezogener Daten in Länder außerhalb der EU/EWR (insbesondere die USA) kommen, die auf Grundlage von
              Standardvertragsklauseln bzw. des EU-US Data Privacy Frameworks abgesichert wird.
            </p>

            <h3 style={sectionStyle}>5. Speicherdauer</h3>
            <p>
              Personenbezogene Daten werden grundsätzlich nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich
              ist, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Bewerbungsunterlagen werden spätestens sechs
              Monate nach Abschluss des Bewerbungsverfahrens gelöscht.
            </p>

            <h3 style={sectionStyle}>6. Ihre Rechte</h3>
            <p>
              Sie haben das Recht, jederzeit Auskunft über die zu Ihrer Person gespeicherten Daten zu erhalten sowie deren
              Berichtigung, Löschung oder Einschränkung der Verarbeitung zu verlangen. Soweit die Verarbeitung auf Ihrer
              Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Ihnen steht außerdem ein
              Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu.
            </p>

            <h3 style={sectionStyle}>7. Kontakt für Datenschutzanfragen</h3>
            <p>
              Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten oder zur Ausübung Ihrer Rechte können Sie sich jederzeit
              unter den oben genannten Kontaktdaten an uns wenden.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
