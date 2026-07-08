import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from '../router';

export default function FAQ() {
  const [openItem, setOpenItem] = useState(0);

  const faqs = [
    {
      category: "Badsanierung",
      q: "Wie lange dauert eine komplette Badsanierung?",
      a: "Eine komplette Badsanierung dauert in der Regel zwischen 2 und 3 Wochen, je nach Umfang der Arbeiten, Raumgröße und Materialverfügbarkeit."
    },
    {
      category: "Wohnungssanierung",
      q: "Bieten Sie auch Teilrenovierungen an?",
      a: "Ja, wir übernehmen sowohl Komplettsanierungen als auch gezielte Teilrenovierungen einzelner Räume wie Küche, Flur oder Badezimmer."
    },
    {
      category: "Haussanierung",
      q: "Übernehmen Sie als Generalunternehmer alle Gewerke?",
      a: "Absolut. Wir koordinieren alle Gewerke (Sanitär, Elektro, Fliesenleger, Trockenbau, Maler) zentral, sodass Sie nur einen festen Ansprechpartner haben."
    },
    {
      category: "Kosten",
      q: "Wie funktioniert die Festpreis-Garantie?",
      a: "Nach unserer Vor-Ort-Besichtigung und Bemusterung erhalten Sie ein detailliertes Angebot. Dieser Preis ist bindend – ohne versteckte Kosten oder böse Überraschungen."
    },
    {
      category: "Ablauf",
      q: "Wird bei der Sanierung viel Staub und Schmutz entstehen?",
      a: "Wir arbeiten sehr sauber. Durch professionelles Abkleben der Wege und den Einsatz von Staubfressern bleibt der Schmutz auf die eigentliche Bauzone beschränkt."
    },
    {
      category: "Förderung & Zuschüsse",
      q: "Beraten Sie auch zu KfW-Fördermitteln?",
      a: "Ja, besonders bei altersgerechten Badumbauten (barrierefrei) und energetischen Sanierungen informieren wir Sie gerne über mögliche staatliche Förderungen wie KfW-Zuschüsse."
    }
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="br-section bg-gray-50">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="br-section-title">Häufig gestellte Fragen</h2>
          <p className="br-section-subtitle">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um Ihr Sanierungsprojekt im Rhein-Main-Gebiet.
          </p>
        </div>

        <div className="br-faq-list bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`br-faq-item border-b border-gray-100 py-5 ${openItem === index ? 'is-open' : ''}`}
            >
              <button 
                className="br-faq-question w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <div>
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1 block">{faq.category}</span>
                  <span className="font-bold text-navy text-lg">{faq.q}</span>
                </div>
                <ChevronDown 
                  className={`text-orange-500 transition-transform duration-300 flex-shrink-0 ${openItem === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <div 
                className={`br-faq-answer text-gray-600 overflow-hidden transition-all duration-300 ${openItem === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/#kontakt" className="br-btn-outline-orange inline-block">Weitere Fragen? Kontaktieren Sie uns</Link>
        </div>
      </div>
    </section>
  );
}
