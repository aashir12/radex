import { useState } from 'react';
import { ChevronDown, ArrowRight, MessageSquare, Phone } from 'lucide-react';

export default function FaqContactSplit() {
  const [openItem, setOpenItem] = useState(0);

  const faqs = [
    {
      q: "Was kostet eine Sanierung?",
      a: "Die Kosten variieren je nach Umfang, Zustand der Immobilie und gewählten Materialien. Nach einer Vor-Ort-Besichtigung erhalten Sie ein verbindliches Festpreisangebot."
    },
    {
      q: "Wie lange dauert eine Sanierung?",
      a: "Je nach Projektumfang dauert eine Badsanierung ca. 2-3 Wochen, eine Wohnungssanierung 4-8 Wochen und eine Komplettsanierung eines Hauses mehrere Monate."
    },
    {
      q: "Wann lohnt sich eine Komplettsanierung?",
      a: "Wenn Leitungen (Strom, Wasser) veraltet sind und der Grundriss angepasst werden soll, ist eine Kernsanierung oft wirtschaftlicher als viele kleine Einzelreparaturen."
    },
    {
      q: "Arbeitet Radex als Generalunternehmer?",
      a: "Ja, wir übernehmen die Koordination aller Gewerke. Sie haben nur einen Ansprechpartner für das gesamte Projekt."
    },
    {
      q: "In welchen Städten ist Radex tätig?",
      a: "Wir arbeiten im gesamten Rhein-Main-Gebiet, unter anderem in Frankfurt, Offenbach, Darmstadt, Hanau, Wiesbaden und Umgebung."
    }
  ];

  return (
    <section id="faq" className="home-section bg-gray-50">
      <div className="container">
        <div className="home-grid-2">
          
          {/* Left Column: FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-navy" style={{marginBottom: '32px'}}>Häufige Fragen zur Sanierung</h2>
            
            <div style={{marginBottom: '24px'}}>
              {faqs.map((faq, index) => (
                <div key={index} className="home-faq-item">
                  <button 
                    className="home-faq-btn"
                    onClick={() => setOpenItem(openItem === index ? null : index)}
                  >
                    <span className="font-bold text-navy text-sm">{faq.q}</span>
                    <ChevronDown 
                      color="#9ca3af" 
                      style={{ transform: openItem === index ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} 
                      size={18} 
                    />
                  </button>
                  <div 
                    className="home-faq-answer" 
                    style={{
                      display: 'grid', 
                      gridTemplateRows: openItem === index ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.3s ease',
                      padding: 0
                    }}
                  >
                    <div style={{overflow: 'hidden'}}>
                      <div style={{borderTop: '1px solid #f9fafb', paddingTop: '16px', paddingBottom: '16px', paddingLeft: '16px', paddingRight: '16px', color: '#4b5563', fontSize: '14px'}}>
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#kontakt" className="home-link-orange" style={{fontSize: '14px'}}>
              Weitere Fragen? Kontaktieren Sie uns <span style={{fontSize: '18px', lineHeight: 1}}>&rarr;</span>
            </a>
          </div>

          {/* Right Column: Contact Box */}
          <div className="home-contact-box">
            <div className="home-contact-content">
              <h3 className="text-2xl font-bold text-navy" style={{marginBottom: '16px'}}>Sanierungsprojekt unverbindlich anfragen</h3>
              <p className="text-gray-600 text-sm" style={{lineHeight: 1.6, marginBottom: '32px'}}>
                Sie planen eine Wohnungs-, Haus- oder Altbausanierung? Senden Sie uns Bilder per WhatsApp oder vereinbaren Sie einen Vor-Ort-Termin mit unserem Team.
              </p>
              
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
                <a href="#kontakt" className="home-btn-orange" style={{padding: '10px 20px', fontSize: '14px'}}>
                  Projekt anfragen <ArrowRight size={14} />
                </a>
                <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="home-btn-white" style={{padding: '10px 20px', fontSize: '14px'}}>
                  WhatsApp schreiben <MessageSquare size={14} color="#25D366" />
                </a>
                <a href="tel:+496074960620" className="home-btn-white" style={{padding: '10px 20px', fontSize: '14px'}}>
                  Jetzt anrufen <Phone size={14} />
                </a>
              </div>
            </div>

            {/* Renovation Image */}
            <div className="home-contact-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800"
                alt="Radex Sanierung im Einsatz"
                className="home-contact-img"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
