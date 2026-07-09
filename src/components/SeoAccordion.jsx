import { useState } from 'react';
import { ChevronDown, Shield } from 'lucide-react';

export default function SeoAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="ratgeber" className="home-section bg-white" style={{padding: '48px 0', borderTop: '1px solid #f3f4f6'}}>
      <div className="container">
        
        <div style={{background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'}}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="seo-accordion-content"
            style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', background: 'none', border: 'none', cursor: 'pointer', outline: 'none'}}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
              <div style={{width: '48px', height: '48px', background: '#f9fafb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Shield size={24} color="#6b7280" />
              </div>
              <div style={{textAlign: 'left'}}>
                <h3 className="font-bold text-navy text-lg" style={{marginBottom: '4px'}}>Alle Informationen anzeigen</h3>
                <p className="text-gray-500 text-sm">Ablauf, Förderungen, Sanierung im Detail und mehr.</p>
              </div>
            </div>
            <ChevronDown 
              color="#9ca3af" 
              style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} 
              size={24} 
            />
          </button>
          
          <div 
            style={{
              display: 'grid', 
              gridTemplateRows: isOpen ? '1fr' : '0fr',
              transition: 'grid-template-rows 0.3s ease',
            }}
          >
            <div style={{overflow: 'hidden'}}>
              <div style={{padding: '0 24px 24px', color: '#4b5563', fontSize: '14px', lineHeight: 1.6}}>
                <div style={{borderTop: '1px solid #f3f4f6', paddingTop: '16px'}}>
                  <p style={{marginBottom: '16px'}}>
                    <strong>Fachgerechte Sanierung im Rhein-Main-Gebiet:</strong> Als eingetragener Handwerksbetrieb legen wir größten Wert auf Qualität und Normgerechtigkeit. Wir informieren Sie gerne im Detail über spezifische Bauphasen, rechtliche Rahmenbedingungen bei Altbausanierungen und Möglichkeiten der energetischen Optimierung.
                  </p>
                  <p>
                    <strong>Zuschüsse und Förderungen:</strong> Bund und Länder bieten diverse Förderprogramme für Sanierungen an. Besonders beim barrierefreien Umbau oder der energetischen Dach- und Fassadensanierung gibt es lukrative Fördermöglichkeiten, über die wir Sie in einem persönlichen Gespräch umfassend aufklären.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
