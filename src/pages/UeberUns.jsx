import { useEffect } from 'react';
import { Award, Users, ShieldCheck, GraduationCap, Building2, Wrench, CheckCircle2, MessageSquare, Phone, Camera } from 'lucide-react';
import '../badsanierung.css';
import useSeo from '../useSeo';

export default function UeberUns() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSeo({
    title: "Über Radex | SHK-Meisterbetrieb im Rhein-Main-Gebiet",
    description: "Radex Objektmanagement: SHK-Meisterbetrieb & Generalunternehmer mit über 40 Jahren Erfahrung. Lernen Sie unser Team, unsere Werte und Zertifizierungen kennen.",
    path: "/ueber-uns"
  });

  const team = [
    {
      name: "Hakim Rafoud",
      role: "Geschäftsführer",
      desc: "Leitet das Unternehmen und verantwortet die strategische Ausrichtung sowie die kaufmännische Abwicklung Ihrer Projekte."
    },
    {
      name: "Abdellah Rafoud",
      role: "Prokurist",
      desc: "Verantwortet Organisation, Einkauf und die zuverlässige Steuerung der Projektabläufe im Tagesgeschäft."
    },
    {
      name: "Bernd Knoop",
      role: "SHK-Meister & Betriebsleiter",
      desc: "Mit über 30 Jahren Erfahrung im SHK-Handwerk begleitet er jedes Projekt von der Planung bis zur Umsetzung – für klare Abläufe, saubere Ausführung und hochwertige Ergebnisse."
    }
  ];

  const credentials = [
    { icon: <Award size={28} color="#f97316" />, title: "SHK-Meisterbetrieb", desc: "Zugelassener Fachbetrieb für Sanitär, Heizung und Klima." },
    { icon: <Building2 size={28} color="#f97316" />, title: "Generalunternehmer", desc: "Alle Gewerke koordiniert aus einer Hand." },
    { icon: <Users size={28} color="#f97316" />, title: "Innungsmitglied", desc: "Mitglied der Handwerksinnung mit geprüften Qualitätsstandards." },
    { icon: <GraduationCap size={28} color="#f97316" />, title: "Ausbildungsbetrieb", desc: "Wir bilden den Handwerker-Nachwuchs von morgen aus." },
    { icon: <ShieldCheck size={28} color="#f97316" />, title: "Schimmel & Asbest", desc: "Zertifizierte Asbest-Sachkunde nach TRGS 519." },
    { icon: <Wrench size={28} color="#f97316" />, title: "40+ Jahre Erfahrung", desc: "Langjährige Expertise in Sanierung und Gebäudetechnik." }
  ];

  const values = [
    { title: "Alles aus einer Hand", desc: "Von der Planung über die Koordination bis zur Ausführung – ein zentraler Ansprechpartner für Ihr gesamtes Projekt. Kein Koordinationsaufwand für Sie, keine losen Enden." },
    { title: "Feste Ansprechpartner", desc: "Persönlich, erreichbar und zugewandt. Sie wissen immer, mit wem Sie es zu tun haben." },
    { title: "Transparente Planung", desc: "Klare Abläufe, feste Termine und verbindliche Festpreise – ohne versteckte Kosten." },
    { title: "Handwerkliche Qualität", desc: "Strukturierte Projektkoordination und saubere Ausführung nach aktuellen deutschen Normen." }
  ];

  return (
    <main className="badsanierung-page">
      {/* HERO */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Über Radex <br/>
              <span>Ihr Sanierungspartner im Rhein-Main-Gebiet</span>
            </h1>
            <p className="br-hero-subtitle">SHK-Meisterbetrieb und Generalunternehmer mit über 40 Jahren Erfahrung.</p>
            <p className="br-hero-text">
              Von Rödermark aus betreuen wir Sanierungs-, Badsanierungs- und Modernisierungsprojekte im gesamten
              Rhein-Main-Gebiet – von der Einzelmaßnahme bis zur Kernsanierung, immer mit strukturierter
              Projektkoordination und handwerklicher Qualität.
            </p>
            <div className="br-hero-actions" style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
              <a href="#kontakt" className="btn br-btn-orange">Kostenlose Beratung &rarr;</a>
              <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
                Fotos über WhatsApp senden <MessageSquare size={18} color="#25D366" style={{marginLeft: '8px'}} />
              </a>
            </div>
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1600)` }}>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="br-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-12">
            <h2 className="br-section-title">Über 40 Jahre Erfahrung in Sanierung & Gebäudetechnik</h2>
          </div>
          <div style={{ color: '#4b5563', fontSize: '17px', lineHeight: 1.8 }}>
            <p className="mb-4">
              Die Radex Objektmanagement GmbH ist ein zugelassener SHK-Meisterbetrieb mit Sitz in Rödermark. Als
              Generalunternehmer koordinieren wir Sanierungs- und Modernisierungsprojekte jeder Größenordnung –
              von einzelnen Maßnahmen über die Badsanierung bis hin zur kompletten Kernsanierung.
            </p>
            <p className="mb-4">
              Mit über 40 Jahren Erfahrung in den Bereichen Sanierung, Heizung, Sanitär und Gebäudetechnik kennen
              wir die Herausforderungen jedes Projekts. Unser Anspruch: strukturierte Projektkoordination,
              handwerkliche Qualität und eine zuverlässige Umsetzung. Sie haben einen zentralen Ansprechpartner für
              Ihr gesamtes Projekt – kein Koordinationsaufwand für Sie, keine losen Enden.
            </p>
            <p>
              Ob Privathaushalt, Kapitalanleger oder Gewerbekunde: Wir begleiten Ihr Vorhaben von der ersten Planung
              bis zur schlüsselfertigen Übergabe – persönlich, transparent und termintreu.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES / WHY RADEX */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Wofür Radex steht</h2>
          </div>
          <div className="br-benefits-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
            {values.map((item, idx) => (
              <div key={idx} className="br-benefit-card" style={{background: '#fff', border: '1px solid #e5e7eb'}}>
                <div className="br-benefit-icon" style={{background: '#fff3ea', borderRadius: '50%', padding: '12px', width: 'auto', height: 'auto', marginBottom: '16px'}}>
                  <CheckCircle2 size={32} color="#f97316" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Das Team hinter Radex</h2>
            <p className="br-section-subtitle">Erfahrene Köpfe, die Ihr Projekt persönlich begleiten.</p>
          </div>
          <div className="br-benefits-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
            {team.map((member, idx) => (
              <div key={idx} className="br-benefit-card" style={{border: '1px solid #e5e7eb', textAlign: 'center'}}>
                <div style={{width: '88px', height: '88px', borderRadius: '50%', background: '#fff3ea', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'}}>
                  <span style={{fontSize: '28px', fontWeight: 700, color: '#f97316'}}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 style={{marginBottom: '4px'}}>{member.name}</h3>
                <p style={{color: '#f97316', fontWeight: 600, marginBottom: '12px'}}>{member.role}</p>
                <p style={{color: '#4b5563'}}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Qualifikationen & Zertifizierungen</h2>
            <p className="br-section-subtitle">Auf diese Standards können Sie bauen.</p>
          </div>
          <div className="br-benefits-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'}}>
            {credentials.map((item, idx) => (
              <div key={idx} className="br-benefit-card" style={{background: '#fff', border: '1px solid #e5e7eb'}}>
                <div className="br-benefit-icon" style={{marginBottom: '12px'}}>{item.icon}</div>
                <h3 style={{fontSize: '18px'}}>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="br-section">
        <div className="container">
          <div className="br-trust-footer" style={{border: 'none'}}>
            <div className="br-trust-item">
              <Award size={32} color="#f97316" />
              <div><strong>500+</strong><span>Abgeschlossene Projekte</span></div>
            </div>
            <div className="br-trust-item">
              <Building2 size={32} color="#f97316" />
              <div><strong>60+</strong><span>Betreute Städte</span></div>
            </div>
            <div className="br-trust-item">
              <Wrench size={32} color="#f97316" />
              <div><strong>40+ Jahre</strong><span>Erfahrung</span></div>
            </div>
            <div className="br-trust-item">
              <Users size={32} color="#f97316" />
              <div><strong>SHK-Meister</strong><span>Zugelassener Fachbetrieb</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="kontakt" className="br-section br-bg-light">
        <div className="container text-center" style={{maxWidth: '800px'}}>
          <h2 className="br-section-title">Lernen Sie uns kennen</h2>
          <p className="br-section-subtitle" style={{marginBottom: '32px'}}>
            Sprechen Sie mit unserem Team, senden Sie Fotos per WhatsApp oder vereinbaren Sie eine kostenlose Beratung vor Ort.
          </p>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
              Fotos über WhatsApp senden <MessageSquare size={18} color="#25D366" style={{marginLeft: '8px'}} />
            </a>
            <a href="tel:+496074960620" className="btn br-btn-orange" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Phone size={18} /> 06074 960620
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
