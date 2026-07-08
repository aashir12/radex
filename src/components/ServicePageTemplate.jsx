import { useEffect, useState } from 'react';
import { Camera, CheckCircle2, Users, ShieldCheck, Wrench, ArrowRight, MessageSquare, Home, FileText, Check, ChevronDown, MapPin, Award, Phone } from 'lucide-react';
import '../badsanierung.css';
import useSeo, { buildFaqSchema, buildServiceSchema } from '../useSeo';
import SanierungskostenRechner from './SanierungskostenRechner';

export default function ServicePageTemplate({
  heroData,
  whoIsForData,
  whyRadexData,
  typicalProjectsData,
  projectsData, // optional
  costsData,
  processData,
  faqsData,
  seoContent,
  calculatorType = 'bad',
  seo // optional: { title, description, path }
}) {
  useSeo({
    title: seo?.title,
    description: seo?.description,
    path: seo?.path,
    image: heroData?.image,
    jsonLd: [
      seo ? buildServiceSchema({ name: seo.serviceName || heroData?.title, description: seo.description, path: seo.path }) : null,
      buildFaqSchema(faqsData)
    ]
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState(null);
  const [activeProjectTab, setActiveProjectTab] = useState('aktuelle');
  const [seoOpen, setSeoOpen] = useState(false);

  const projectTabs = {
    aktuelle: [
      {
        img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800',
        badge: { text: 'Live', className: 'live' },
        title: 'Aktuelles Projekt',
        location: 'Oberursel'
      },
      {
        img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800',
        badge: { text: 'Live', className: 'live' },
        title: 'Aktuelles Projekt',
        location: 'Bad Homburg'
      }
    ],
    abgeschlossen: [
      {
        img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
        title: 'Abgeschlossenes Projekt',
        location: 'Frankfurt'
      },
      {
        img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800',
        title: 'Abgeschlossenes Projekt',
        location: 'Bad Homburg'
      }
    ],
    vorherNachher: [
      {
        img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
        badge: { text: 'Vorher & Nachher', className: 'before-after' },
        title: 'Vorher & Nachher',
        location: 'Wiesbaden'
      },
      {
        img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
        badge: { text: 'Vorher & Nachher', className: 'before-after' },
        title: 'Vorher & Nachher',
        location: 'Frankfurt'
      }
    ]
  };

  // Global CTA Block
  const SharedCTABlock = ({ isHero = false }) => (
    <div className={`br-hero-actions ${isHero ? '' : 'mt-8'}`} style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: isHero ? 'flex-start' : 'center'}}>
      <a href="#kontakt" className="btn br-btn-orange">Kostenlose Beratung &rarr;</a>
      <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
        Fotos über WhatsApp senden <MessageSquare size={18} color="#25D366" style={{marginLeft: '8px'}} />
      </a>
      <a href="tel:+496074960620" className="btn" style={{display: 'flex', alignItems: 'center', gap: '8px', background: isHero ? 'transparent' : '#fff', border: isHero ? '1px solid #111827' : '1px solid #d1d5db', color: '#111827', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none'}}>
        <Phone size={18} /> Jetzt anrufen
      </a>
    </div>
  );

  // Fallbacks
  const defaultProcess = [
    { number: 1, icon: <MessageSquare size={32} />, title: "Erste Anfrage" },
    { number: 2, icon: <Home size={32} />, title: "Vor-Ort-Beratung" },
    { number: 3, icon: <FileText size={32} />, title: "Festpreis-Angebot" },
    { number: 4, icon: <Wrench size={32} />, title: "Projektausführung" },
    { number: 5, icon: <Check size={32} />, title: "Schlüsselfertige Übergabe" }
  ];
  
  const processSteps = processData?.steps || defaultProcess;

  return (
    <main className="badsanierung-page">
      {/* 1. HERO */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              {heroData.title} <br/>
              <span>{heroData.titleSpan || "Rhein-Main-Gebiet"}</span>
            </h1>
            <p className="br-hero-subtitle">{heroData.subtitle}</p>
            <p className="br-hero-text">{heroData.text}</p>
            <SharedCTABlock isHero={true} />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${heroData.image})` }}>
        </div>
      </section>

      {/* 2. WHO IS THIS SERVICE FOR? */}
      {whoIsForData && (
        <section className="br-section br-bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="br-section-title">{whoIsForData.title}</h2>
              {whoIsForData.subtitle && <p className="br-section-subtitle">{whoIsForData.subtitle}</p>}
            </div>
            <div className="br-benefits-grid" style={{gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`}}>
              {whoIsForData.list.map((item, idx) => (
                <div key={idx} className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
                  <div className="br-benefit-icon" style={{background: '#f9fafb', borderRadius: '50%', padding: '12px', width: 'auto', height: 'auto', marginBottom: '16px'}}>
                    <CheckCircle2 size={32} color="#f97316" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. WHY RADEX */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">{whyRadexData?.title || "Warum Eigentümer Radex wählen"}</h2>
          </div>
          <div className="br-benefits-grid">
            <div className="br-benefit-card">
              <div className="br-benefit-icon"><Award size={40} color="#f97316" /></div>
              <h3>Eingetragener<br/>SHK-Meisterbetrieb</h3>
              <p>Zertifizierter Handwerksbetrieb, der fachgerechte Arbeit nach aktuellen deutschen Normen und Vorschriften liefert.</p>
            </div>
            <div className="br-benefit-card">
              <div className="br-benefit-icon"><Users size={40} color="#f97316" /></div>
              <h3>Alles aus<br/>einer Hand</h3>
              <p>Ein zentraler Ansprechpartner für Planung, Koordination und Ausführung.</p>
            </div>
            <div className="br-benefit-card">
              <div className="br-benefit-icon"><CheckCircle2 size={40} color="#f97316" /></div>
              <h3>Saubere<br/>Sanierung</h3>
              <p>Professionelle Staubschutzsysteme sorgen für einen sauberen Ablauf.</p>
            </div>
            <div className="br-benefit-card">
              <div className="br-benefit-icon"><ShieldCheck size={40} color="#f97316" /></div>
              <h3>Festpreis-<br/>Garantie</h3>
              <p>Transparente Angebote ohne versteckte Kosten oder unerwartete Extras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TYPICAL PROJECTS */}
      {typicalProjectsData && (
        <section className="br-section br-bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="br-section-title">{typicalProjectsData.title}</h2>
              {typicalProjectsData.subtitle && <p className="br-section-subtitle">{typicalProjectsData.subtitle}</p>}
            </div>
            <div className="br-projects-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
              {typicalProjectsData.projects.map((proj, idx) => (
                <div key={idx} className="br-project-card" style={{border: '1px solid #e5e7eb'}}>
                  <div className="br-project-img" style={{ backgroundImage: `url(${proj.img})`, height: '200px' }}></div>
                  <div className="br-project-info" style={{background: '#fff', padding: '24px'}}>
                    <h4 style={{fontSize: '20px', marginBottom: '8px'}}>{proj.title}</h4>
                    <p style={{color: '#4b5563', fontSize: '15px'}}>{proj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. PROJECTS & REFERENCES */}
      {projectsData !== false && (
        <section className="br-section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="br-section-title">Aktuelle Projekte und Referenzen</h2>
              <p className="br-section-subtitle">
                Entdecken Sie laufende Projekte und abgeschlossene Sanierungen im gesamten Rhein-Main-Gebiet.
              </p>
              <div className="br-tabs">
                <div
                  className={`br-tab ${activeProjectTab === 'aktuelle' ? 'active' : ''}`}
                  onClick={() => setActiveProjectTab('aktuelle')}
                  role="button"
                  tabIndex={0}
                >
                  Aktuelle Projekte
                </div>
                <div
                  className={`br-tab ${activeProjectTab === 'abgeschlossen' ? 'active' : ''}`}
                  onClick={() => setActiveProjectTab('abgeschlossen')}
                  role="button"
                  tabIndex={0}
                >
                  Abgeschlossene Projekte
                </div>
                <div
                  className={`br-tab ${activeProjectTab === 'vorherNachher' ? 'active' : ''}`}
                  onClick={() => setActiveProjectTab('vorherNachher')}
                  role="button"
                  tabIndex={0}
                >
                  Vorher & Nachher
                </div>
              </div>
            </div>

            <div className="br-projects-grid">
              {projectTabs[activeProjectTab].map((project, index) => (
                <div className="br-project-card" key={`${activeProjectTab}-${index}`}>
                  <div className="br-project-img" style={{ backgroundImage: `url(${project.img})` }}>
                    {project.badge && (
                      <span className={`br-project-badge ${project.badge.className}`}>{project.badge.text}</span>
                    )}
                  </div>
                  <div className="br-project-info">
                    <h4>{project.title}</h4>
                    <p>{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button className="br-btn-outline-orange mb-8">Alle Projekte ansehen</button>
            </div>
            
            {/* Mid-Page CTA */}
            <div className="text-center mt-12 p-8" style={{background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
              <h3 style={{fontSize: '24px', marginBottom: '16px', color: '#111827'}}>Haben Sie Fragen zu Ihrem Projekt?</h3>
              <p style={{color: '#4b5563', marginBottom: '24px'}}>Senden Sie uns Fotos und erhalten Sie eine professionelle Ersteinschätzung.</p>
              <SharedCTABlock />
            </div>

          </div>
        </section>
      )}

      {/* 6. COSTS */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">{costsData.title}</h2>
            <p className="br-section-subtitle">{costsData.subtitle}</p>
          </div>
          
          <div className="br-costs-grid">
            {costsData.items.map((cost, idx) => (
              <div key={idx} className="br-cost-card">
                <div className="br-cost-header">
                  <h3>{cost.title}</h3>
                  <div className="br-cost-price">ab <span>{cost.price}</span></div>
                </div>
                <div className="br-cost-img" style={{ backgroundImage: `url(${cost.img})` }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SanierungskostenRechner defaultType={calculatorType} compact />

      {/* 7. PROCESS */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="br-section-title">Wie Ihr Projekt abläuft</h2>
          </div>
          
          <div className="br-process-flow">
            {processSteps.map((step, idx) => (
              <div key={idx} style={{display: 'flex', alignItems: 'center'}}>
                <div className="br-process-step">
                  <div className="br-step-number">{step.number}</div>
                  <div className="br-step-icon">{step.icon}</div>
                  <h4>{step.title}</h4>
                </div>
                {idx < processSteps.length - 1 && <ArrowRight className="br-step-arrow" size={24} />}
              </div>
            ))}
          </div>

          {/* Before FAQ CTA */}
          <div className="text-center mt-16 p-8" style={{background: '#fff3ea', borderRadius: '8px', border: '1px solid #fdba74'}}>
            <h3 style={{fontSize: '24px', marginBottom: '16px', color: '#ea580c'}}>Starten Sie jetzt Ihr Projekt mit uns</h3>
            <p style={{color: '#4b5563', marginBottom: '24px'}}>Kontaktieren Sie unser Expertenteam für eine kostenlose Beratung vor Ort.</p>
            <SharedCTABlock />
          </div>

        </div>
      </section>

      {/* 8. FAQ */}
      <section className="br-section br-bg-light">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-12">
            <h2 className="br-section-title">Häufig gestellte Fragen</h2>
          </div>
          <div className="br-faq-grid">
            {faqsData.map((faq, i) => (
              <div key={i} className="home-faq-item">
                <button 
                  className="home-faq-btn" 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span style={{fontWeight: 600, color: '#1f2937', fontSize: '16px', textAlign: 'left'}}>{faq.q}</span>
                  <ChevronDown 
                    style={{
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                    color="#9ca3af" 
                    size={18} 
                  />
                </button>
                <div 
                  className="home-faq-answer" 
                  style={{
                    display: 'grid', 
                    gridTemplateRows: openFaq === i ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s ease',
                    padding: 0
                  }}
                >
                  <div style={{overflow: 'hidden'}}>
                    <div style={{borderTop: '1px solid #f9fafb', paddingTop: '16px', paddingBottom: '16px', paddingLeft: '16px', paddingRight: '16px', color: '#4b5563', fontSize: '15px', lineHeight: '1.6'}}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT / CTA */}
      <section id="kontakt" className="br-section">
        <div className="container">
          <div className="br-contact-grid">
            <div className="br-contact-left">
              <h2 className="br-section-title" style={{textAlign: 'left'}}>Fragen Sie Ihr Projekt an</h2>
              <p className="br-section-subtitle" style={{textAlign: 'left', marginBottom: '30px'}}>
                Sprechen Sie mit unserem Team, senden Sie Fotos per WhatsApp oder vereinbaren Sie eine Beratung.
              </p>
              
              <div className="br-contact-options">
                <div className="br-contact-option">
                  <div className="br-contact-icon-wrapper"><Phone size={24} color="#f97316" /></div>
                  <div>
                    <strong>Jetzt anrufen</strong>
                    <p>06074 960620</p>
                  </div>
                </div>
                <div className="br-contact-option">
                  <div className="br-contact-icon-wrapper"><MessageSquare size={24} color="#25D366" /></div>
                  <div>
                    <strong>WhatsApp Chat</strong>
                    <p>Fotos direkt senden</p>
                  </div>
                </div>
                <div className="br-contact-option">
                  <div className="br-contact-icon-wrapper"><MessageSquare size={24} color="#f97316" /></div>
                  <div>
                    <strong>E-Mail</strong>
                    <p>info@radex.de</p>
                  </div>
                </div>
                <div className="br-contact-option">
                  <div className="br-contact-icon-wrapper"><FileText size={24} color="#f97316" /></div>
                  <div>
                    <strong>Kontaktformular</strong>
                    <p>Nutzen Sie unser Formular</p>
                  </div>
                </div>
              </div>
              <p className="br-hero-micro mt-6">
                <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
              </p>
            </div>
            
            <div className="br-contact-form-wrapper">
              <form className="br-form">
                <div className="br-form-row">
                  <div className="br-input-group">
                    <label>Vorname *</label>
                    <input type="text" />
                  </div>
                  <div className="br-input-group">
                    <label>Nachname *</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="br-form-row">
                  <div className="br-input-group">
                    <label>Telefon *</label>
                    <input type="tel" />
                  </div>
                  <div className="br-input-group">
                    <label>E-Mail *</label>
                    <input type="email" />
                  </div>
                </div>
                <div className="br-input-group">
                  <label>Ihr Projekt / Nachricht *</label>
                  <textarea rows="4" placeholder="Bitte beschreiben Sie Ihr Projekt..."></textarea>
                </div>
                <button type="button" className="br-btn-orange w-full" style={{marginTop: '10px'}}>Kostenlose Beratung anfordern &rarr;</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ADDITIONAL INFORMATION (SEO CONTENT) */}
      <section className="br-section br-bg-light">
        <div className="container">
          {/* Always rendered in the DOM (indexable); only visually collapsed,
              so search engines and prerendering capture the full content. */}
          <div className="br-seo-dropdown">
            <button
              type="button"
              className="br-seo-summary"
              aria-expanded={seoOpen}
              onClick={() => setSeoOpen((v) => !v)}
            >
              {seoOpen ? 'Weitere Informationen ausblenden' : 'Weitere Informationen anzeigen'}
              <ChevronDown size={20} style={{ transform: seoOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
            </button>
            <div className={`br-seo-content ${seoOpen ? 'open' : ''}`}>
              {seoContent}
            </div>
          </div>

          <div className="br-trust-footer">
            <div className="br-trust-item">
              <Award size={32} color="#aaa" />
              <div>
                <strong>500+</strong>
                <span>Abgeschlossene Projekte</span>
              </div>
            </div>
            <div className="br-trust-item">
              <MapPin size={32} color="#aaa" />
              <div>
                <strong>60+</strong>
                <span>Betreute Städte</span>
              </div>
            </div>
            <div className="br-trust-item">
              <ShieldCheck size={32} color="#aaa" />
              <div>
                <strong>100%</strong>
                <span>Festpreisgarantie</span>
              </div>
            </div>
            <div className="br-trust-item">
              <Users size={32} color="#aaa" />
              <div>
                <strong>SHK-Meister</strong>
                <span>Zugelassener Fachbetrieb</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
