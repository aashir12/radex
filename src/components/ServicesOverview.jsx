import { Link } from '../router';
import { Building2, Home, Landmark, Wrench, UserCog, Check, Flame, Zap, Hammer, Leaf, ArrowRight } from 'lucide-react';

export default function ServicesOverview() {
  const services = [
    {
      img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=600',
      icon: <Building2 size={20} color="#fff" />,
      title: 'Wohnungssanierung',
      desc: 'Modernisierung von Eigentumswohnungen, Kapitalanlagen und Bestandswohnungen.',
      bullets: ['Wohnung renovieren', 'Wohnung modernisieren', 'Eigentumswohnung sanieren'],
      link: '/sanierung/wohnungssanierung'
    },
    {
      img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=600',
      icon: <Home size={20} color="#fff" />,
      title: 'Haussanierung',
      desc: 'Komplette Modernisierung von Einfamilienhäusern, Reihenhäusern und Bestandsimmobilien.',
      bullets: ['Haus sanieren', 'Haus modernisieren', 'Bestandsimmobilie sanieren'],
      link: '/sanierung/haussanierung'
    },
    {
      img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=600',
      icon: <Landmark size={20} color="#fff" />,
      title: 'Altbausanierung',
      desc: 'Fachgerechte Modernisierung historischer Gebäude und älterer Bausubstanz.',
      bullets: ['Altbau sanieren', 'Altbau modernisieren', 'Altbau renovieren'],
      link: '/sanierung/altbausanierung'
    },
    {
      img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600',
      icon: <Wrench size={20} color="#fff" />,
      title: 'Komplettsanierung',
      desc: 'Alle Gewerke aus einer Hand - von der Planung bis zur schlüsselfertigen Übergabe.',
      bullets: ['Alles aus einer Hand', 'Generalunternehmer', 'Koordination aller Gewerke'],
      link: '/komplettsanierung-rhein-main'
    },
    {
      img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600',
      icon: <UserCog size={20} color="#fff" />,
      title: 'Generalunternehmer',
      desc: 'Ein Ansprechpartner für Planung, Koordination und Umsetzung.',
      bullets: ['Projektsteuerung', 'Bauleitung', 'Festpreis & Transparenz'],
      link: '/generalunternehmer-rhein-main'
    }
  ];

  const additionalServices = [
    { icon: <Flame size={18} color="#f97316" />, title: 'Heizung & Sanitär', link: '/heizung-sanitaer-rhein-main' },
    { icon: <Zap size={18} color="#f97316" />, title: 'Elektrotechnik', link: '/elektroinstallation-rhein-main' },
    { icon: <Hammer size={18} color="#f97316" />, title: 'Innenausbau & Umbau', link: '/innenausbau-umbau-rhein-main' },
    { icon: <Leaf size={18} color="#f97316" />, title: 'Energetische Sanierung', link: '/energetische-sanierung-rhein-main' }
  ];

  const FALLBACK_IMG = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600';

  return (
    <section className="home-section bg-white">
      <div className="container">
        <div className="text-center" style={{marginBottom: '64px'}}>
          <h2 className="text-3xl font-bold text-navy" style={{marginBottom: '16px'}}>Was möchten Sie sanieren?</h2>
          <p className="text-gray-600 text-lg">Wählen Sie den Bereich, der zu Ihrem Projekt passt.</p>
        </div>

        <div className="home-grid-5" style={{marginBottom: '48px'}}>
          {services.map((service, idx) => (
            <div key={idx} className="home-service-card">
              <div className="home-service-img-wrapper">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  onError={(e) => {
                    if (e.currentTarget.src !== FALLBACK_IMG) {
                      e.currentTarget.src = FALLBACK_IMG;
                    }
                  }}
                />
                <div className="home-service-icon">
                  {service.icon}
                </div>
              </div>
              <div className="home-service-content">
                <h3 className="text-xl font-bold text-navy" style={{marginBottom: '12px'}}>{service.title}</h3>
                <p className="text-sm text-gray-600" style={{marginBottom: '24px', flex: 1, lineHeight: '1.6'}}>
                  {service.desc}
                </p>
                <ul style={{listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  {service.bullets.map((bullet, i) => (
                    <li key={i} style={{display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: '#374151'}}>
                      <Check size={16} color="#1E3A8A" style={{flexShrink: 0, marginTop: '2px'}} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="home-link-orange">
                  Mehr erfahren <span style={{fontSize: '18px', lineHeight: 1}}>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{borderTop: '1px solid #f3f4f6', paddingTop: '40px'}}>
          <div className="text-center" style={{marginBottom: '24px'}}>
            <h3 className="text-xl font-bold text-navy">Weitere Leistungen</h3>
          </div>
          <div className="home-grid-4" style={{marginBottom: '40px'}}>
            {additionalServices.map((service, idx) => (
              <Link key={idx} to={service.link} className="home-hero-quicklink" style={{justifyContent: 'center'}}>
                {service.icon}
                <span>{service.title}</span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/leistungen" className="home-btn-orange" style={{display: 'inline-flex'}}>
              Alle Leistungen ansehen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
