import { Star } from 'lucide-react';

export default function ReviewsMarquee() {
  const row1 = [
    {
      name: "Sabine M.",
      city: "Rödermark",
      initials: "SM",
      bg: "#E8945A",
      text: "Aus einem gruseligen Kachelalptraum wurde eine Wellnessoase. Absolut fachmännische Arbeit, zuverlässig und schnell."
    },
    {
      name: "Dieter H.",
      city: "Dreieich",
      initials: "DH",
      bg: "#4A90A4",
      text: "Die neue Wärmepumpe läuft flüsterleise. Sehr kompetente Beratung und reibungslose Montage."
    },
    {
      name: "Karin B.",
      city: "Frankfurt",
      initials: "KB",
      bg: "#5B7EC9",
      text: "Hervorragende Altbausanierung. Die Abstimmung als Generalunternehmer war perfekt."
    },
    {
      name: "Thomas S.",
      city: "Offenbach",
      initials: "TS",
      bg: "#C07FB5",
      text: "Komplettbadsanierung im vereinbarten Zeitrahmen und zum Festpreis abgeschlossen. Sehr sauber gearbeitet!"
    },
    {
      name: "Maria L.",
      city: "Hanau",
      initials: "ML",
      bg: "#7CB57C",
      text: "Super Fliesenlegerarbeiten im Flur und Bad. Qualität ist top, Team sehr nett."
    }
  ];

  const row2 = [
    {
      name: "Nina W.",
      city: "Frankfurt am Main",
      initials: "NW",
      bg: "#4A90A4",
      text: "Alle Arbeiten wurden zeitlich und fachgerecht eingehalten und zu unserer vollsten Zufriedenheit ausgeführt."
    },
    {
      name: "Andreas K.",
      city: "Langen",
      initials: "AK",
      bg: "#5B7EC9",
      text: "Zuverlässiger SHK-Betrieb. Der Heizungsaustausch ging super schnell und sauber."
    },
    {
      name: "Corinna A.",
      city: "Offenbach am Main",
      initials: "CA",
      bg: "#5B7EC9",
      text: "Vielen Dank für die schnelle und kompetente Hilfe. Großartige Arbeit – klare Empfehlung."
    },
    {
      name: "Stefan M.",
      city: "Neu-Isenburg",
      initials: "SM",
      bg: "#E8945A",
      text: "Sehr gute Elektroinstallationen im ganzen Haus. Sicherungskasten komplett erneuert."
    },
    {
      name: "Julia F.",
      city: "Darmstadt",
      initials: "JF",
      bg: "#C07FB5",
      text: "Wir haben unser Gäste-WC sanieren lassen. Tolle Beratung vorab, schickes Endergebnis!"
    }
  ];

  const row3 = [
    {
      name: "Michael R.",
      city: "Seligenstadt",
      initials: "MR",
      bg: "#7CB57C",
      text: "Kompetente Altbausanierung inklusive Schadstoffsanierung. Sehr professionell und sicher."
    },
    {
      name: "Gaby T.",
      city: "Rödermark",
      initials: "GT",
      bg: "#E8945A",
      text: "Von der Badplanung bis zur Übergabe alles aus einer Hand. Kein Stress, tolles Ergebnis."
    },
    {
      name: "Uwe B.",
      city: "Heusenstamm",
      initials: "UB",
      bg: "#4A90A4",
      text: "Trockenbau und Malerarbeiten im Wohnzimmer perfekt ausgeführt. Sehr zu empfehlen!"
    },
    {
      name: "Sandra P.",
      city: "Obertshausen",
      initials: "SP",
      bg: "#5B7EC9",
      text: "Unser barrierefreies Bad ist ein Traum geworden. Sehr rücksichtsvolles und sauberes Team."
    },
    {
      name: "Christian V.",
      city: "Hanau",
      initials: "CV",
      bg: "#7CB57C",
      text: "Schnelle Soforthilfe bei unserem Rohrbruch. Super Service, fairer Preis."
    }
  ];

  const renderCard = (item, index) => (
    <div className="review-marquee-card" key={index}>
      <div className="review-marquee-card-header">
        <div className="review-marquee-avatar" style={{ backgroundColor: item.bg }}>
          {item.initials}
        </div>
        <div className="review-marquee-meta">
          <div className="review-marquee-name-row">
            <span className="review-marquee-name">{item.name}</span>
            <span className="review-marquee-verified" title="Verifizierter Kauf">✓</span>
          </div>
          <span className="review-marquee-city">{item.city}</span>
        </div>
      </div>
      <div className="review-marquee-stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />
        ))}
      </div>
      <p className="review-marquee-text">
        &bdquo;{item.text}&ldquo;
      </p>
      <div className="review-marquee-footer">
        <svg className="google-g-logo" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.28 10.08c0-.78-.07-1.53-.2-2.25H12v4.26h4.67c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 21c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 18.53 7.7 21 12 21z" fill="#34A853"/>
          <path d="M5.84 12.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V5.07H2.18C1.43 6.55 1 8.22 1 10s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span>Google-Bewertung</span>
      </div>
    </div>
  );

  return (
    <section id="bewertungen" className="reviews-marquee-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Referenzen</span>
          <h2>Was unsere Kunden sagen</h2>
          <p className="section-subtitle">
            Hervorragende Qualität und Zuverlässigkeit, bestätigt durch echte Google-Bewertungen aus dem gesamten Rhein-Main-Gebiet.
          </p>
        </div>

        {/* Rating summary */}
        <div className="reviews-rating-summary" style={{display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center', alignItems: 'center', margin: '0 auto 8px', padding: '20px 28px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', maxWidth: '760px', boxShadow: 'var(--shadow-md)'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.28 10.08c0-.78-.07-1.53-.2-2.25H12v4.26h4.67c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 21c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 18.53 7.7 21 12 21z" fill="#34A853"/>
              <path d="M5.84 12.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V5.07H2.18C1.43 6.55 1 8.22 1 10s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span style={{fontWeight: 600, color: '#374151'}}>Google-Bewertungen</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <span style={{fontSize: '28px', fontWeight: 800, color: '#111827', lineHeight: 1}}>4,5</span>
            <span style={{display: 'flex', gap: '1px'}}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="var(--gold)" color="var(--gold)" style={{opacity: i < 4 ? 1 : 0.5}} />
              ))}
            </span>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '20px', fontWeight: 800, color: '#111827', lineHeight: 1}}>17</div>
            <div style={{fontSize: '13px', color: '#6b7280'}}>Bewertungen</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '20px', fontWeight: 800, color: '#16a34a', lineHeight: 1}}>100%</div>
            <div style={{fontSize: '13px', color: '#6b7280'}}>Weiterempfehlung</div>
          </div>
        </div>
      </div>

      <div className="reviews-marquee-container">
        {/* Row 1: Left to Right */}
        <div className="marquee-track-wrapper">
          <div className="marquee-track ltr">
            <div className="marquee-group">
              {row1.map((item, idx) => renderCard(item, idx))}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {row1.map((item, idx) => renderCard(item, `dup-${idx}`))}
            </div>
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="marquee-track-wrapper">
          <div className="marquee-track rtl">
            <div className="marquee-group">
              {row2.map((item, idx) => renderCard(item, idx))}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {row2.map((item, idx) => renderCard(item, `dup-${idx}`))}
            </div>
          </div>
        </div>

        {/* Row 3: Left to Right */}
        <div className="marquee-track-wrapper">
          <div className="marquee-track ltr-slow">
            <div className="marquee-group">
              {row3.map((item, idx) => renderCard(item, idx))}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {row3.map((item, idx) => renderCard(item, `dup-${idx}`))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-12 text-center">
        <a href="#bewertungen" className="btn btn--secondary inline-block">Alle Bewertungen ansehen</a>
      </div>
    </section>
  );
}
