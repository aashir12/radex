import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from '../router';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import radexLogo from '../assets/header-logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      // Navigate to home page with hash
      navigate(`/#${id}`);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileSubMenu = (menuName) => {
    if (mobileSubMenu === menuName) {
      setMobileSubMenu('');
    } else {
      setMobileSubMenu(menuName);
    }
  };

  return (
    <>
      <header className="header" style={{
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)'
      }}>
        <div className="header-container">
          <Link to="/" className="logo-link" onClick={() => window.scrollTo(0, 0)}>
            <img src={radexLogo} alt="Radex Objektmanagement GmbH" style={{ height: '150px', width: 'auto' , marginTop : "8px" }} />
          </Link>

          <nav>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link" onClick={() => window.scrollTo(0, 0)}>Startseite</Link></li>
              
              <li><Link to="/badsanierung-rhein-main" className="nav-link" onClick={() => setIsOpen(false)}>Badsanierung</Link></li>
              
              <li><Link to="/sanierung-rhein-main" className="nav-link" onClick={() => setIsOpen(false)}>Sanierung</Link></li>

              {/* Leistungen Dropdown (Mega Menu) */}
              <li className="nav-item-dropdown">
                <Link to="/leistungen" className="nav-link nav-link-with-icon" onClick={() => setIsOpen(false)}>
                  Leistungen <ChevronDown size={12} />
                </Link>
                <div className="mega-menu mega-menu--large" style={{width: '900px', left: '50%', transform: 'translateX(-50%) translateY(10px)', padding: 0}}>
                  <div style={{padding: '20px 30px', borderBottom: '1px solid #e5e7eb', background: '#f9fafb', borderTopLeftRadius: '8px', borderTopRightRadius: '8px'}}>
                    <h3 style={{margin: 0, fontSize: '18px', color: '#111827'}}>Was möchten Sie tun?</h3>
                  </div>
                  
                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', padding: '30px'}}>
                    
                    <div>
                      <h4 style={{fontSize: '15px', color: '#111827', marginBottom: '8px'}}>Komplettsanierung</h4>
                      <p style={{fontSize: '13px', color: '#6b7280', marginBottom: '12px', lineHeight: 1.4}}>Für Kunden, die ein Projekt aus einer Hand suchen.</p>
                      <Link to="/komplettsanierung-rhein-main" className="dropdown-item" style={{padding: '6px 0', color: '#f97316'}}>Zur Komplettsanierung &rarr;</Link>
                    </div>

                    <div>
                      <h4 style={{fontSize: '15px', color: '#111827', marginBottom: '8px'}}>Heizung & Sanitär</h4>
                      <p style={{fontSize: '13px', color: '#6b7280', marginBottom: '12px', lineHeight: 1.4}}>Für Heizungs-Modernisierung, Wärmepumpen und Sanitär.</p>
                      <Link to="/heizung-sanitaer-rhein-main" className="dropdown-item" style={{padding: '6px 0', color: '#f97316'}}>Zur Haustechnik &rarr;</Link>
                    </div>

                    <div>
                      <h4 style={{fontSize: '15px', color: '#111827', marginBottom: '8px'}}>Elektrotechnik</h4>
                      <p style={{fontSize: '13px', color: '#6b7280', marginBottom: '12px', lineHeight: 1.4}}>Für elektrische Aufwertungen und Gebäudetechnik.</p>
                      <Link to="/elektroinstallation-rhein-main" className="dropdown-item" style={{padding: '6px 0', color: '#f97316'}}>Zur Elektrotechnik &rarr;</Link>
                    </div>

                    <div>
                      <h4 style={{fontSize: '15px', color: '#111827', marginBottom: '8px'}}>Innenausbau</h4>
                      <p style={{fontSize: '13px', color: '#6b7280', marginBottom: '12px', lineHeight: 1.4}}>Für Raumumbauten, Trockenbau und Aufwertungen.</p>
                      <Link to="/innenausbau-umbau-rhein-main" className="dropdown-item" style={{padding: '6px 0', color: '#f97316'}}>Zum Innenausbau &rarr;</Link>
                    </div>

                    <div>
                      <h4 style={{fontSize: '15px', color: '#111827', marginBottom: '8px'}}>Energie & Förderung</h4>
                      <p style={{fontSize: '13px', color: '#6b7280', marginBottom: '12px', lineHeight: 1.4}}>Für energetische Sanierung und Zuschüsse.</p>
                      <Link to="/energetische-sanierung-rhein-main" className="dropdown-item" style={{padding: '6px 0', color: '#f97316'}}>Zur Energieberatung &rarr;</Link>
                    </div>

                    <div>
                      <h4 style={{fontSize: '15px', color: '#111827', marginBottom: '8px'}}>Schimmel & Asbest</h4>
                      <p style={{fontSize: '13px', color: '#6b7280', marginBottom: '12px', lineHeight: 1.4}}>Für Sanierung und Gefahrstoffbeseitigung.</p>
                      <Link to="/schadstoffsanierung-rhein-main" className="dropdown-item" style={{padding: '6px 0', color: '#f97316'}}>Zur Schadstoffsanierung &rarr;</Link>
                    </div>

                    <div>
                      <h4 style={{fontSize: '15px', color: '#111827', marginBottom: '8px'}}>Gewerbeobjekte</h4>
                      <p style={{fontSize: '13px', color: '#6b7280', marginBottom: '12px', lineHeight: 1.4}}>Für Bürorenovierungen und Mieterausbau.</p>
                      <Link to="/gewerbe-objektsanierung-rhein-main" className="dropdown-item" style={{padding: '6px 0', color: '#f97316'}}>Zur Gewerbesanierung &rarr;</Link>
                    </div>

                  </div>
                  
                  <div style={{background: '#fff3ea', padding: '20px 30px', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', textAlign: 'center'}}>
                    <Link to="/leistungen" className="btn br-btn-orange" style={{display: 'inline-block'}}>Alle Leistungen ansehen</Link>
                  </div>
                </div>
              </li>

              {/* Projekte */}
              <li><a href="#beispiele" className="nav-link" onClick={(e) => handleScrollToSection(e, 'beispiele')}>Projekte</a></li>

              {/* FAQ */}
              <li><a href="#faq" className="nav-link" onClick={(e) => handleScrollToSection(e, 'faq')}>FAQ</a></li>

              {/* Ratgeber */}
              <li><a href="#ratgeber" className="nav-link" onClick={(e) => handleScrollToSection(e, 'ratgeber')}>Ratgeber</a></li>

              {/* Einsatzgebiete */}
              <li className="nav-item-dropdown">
                <Link to="/einsatzgebiete-rhein-main" className="nav-link nav-link-with-icon" onClick={() => setIsOpen(false)}>
                  Einsatzgebiete <ChevronDown size={12} />
                </Link>
                <div className="dropdown-menu" style={{ right: 0, left: 'auto', transform: 'translateX(0) translateY(10px)' }}>
                  <Link to="/sanierung-frankfurt-am-main" className="dropdown-item" onClick={() => setIsOpen(false)}>Frankfurt</Link>
                  <Link to="/sanierung-offenbach-am-main" className="dropdown-item" onClick={() => setIsOpen(false)}>Offenbach</Link>
                  <Link to="/haus-wohnung-bad-modernisieren-darmstadt" className="dropdown-item" onClick={() => setIsOpen(false)}>Darmstadt</Link>
                  <Link to="/sanierung-hanau" className="dropdown-item" onClick={() => setIsOpen(false)}>Hanau</Link>
                  <Link to="/einsatzgebiete-rhein-main" className="dropdown-item" onClick={() => setIsOpen(false)} style={{ fontWeight: '700', color: 'var(--gold-dark)', borderTop: '1px solid var(--border)', marginTop: '4px', paddingTop: '10px' }}>Alle Einsatzgebiete &rarr;</Link>
                </div>
              </li>
              
              {/* Über uns */}
              <li><Link to="/ueber-uns" className="nav-link" onClick={() => setIsOpen(false)}>Über uns</Link></li>

              {/* Kontakt */}
              <li><a href="#kontakt" className="nav-link" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Kontakt</a></li>

            </ul>
          </nav>

          <div className="header-actions">
            <a href="tel:+496074960620" className="phone-action">
              <Phone size={18} />
              06074 960620
            </a>
            <a href="#kontakt" className="btn btn--primary" onClick={(e) => handleScrollToSection(e, 'kontakt')}>
              Projekt anfragen
            </a>
          </div>

          <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Menü öffnen">
            {isOpen ? <X size={26} color="var(--navy)" /> : <Menu size={26} color="var(--navy)" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <img src={radexLogo} alt="Radex Objektmanagement GmbH" style={{ height: '42px', width: 'auto' }} />
          <button className="mobile-drawer-close" onClick={() => setIsOpen(false)} aria-label="Menü schließen">
            <X size={24} color="var(--navy)" />
          </button>
        </div>

        <ul className="mobile-drawer-links">
          <li><Link to="/" className="mobile-drawer-link" onClick={() => setIsOpen(false)}>Startseite</Link></li>
          <li><Link to="/badsanierung-rhein-main" className="mobile-drawer-link" onClick={() => setIsOpen(false)}>Badsanierung</Link></li>
          <li><Link to="/sanierung-rhein-main" className="mobile-drawer-link" onClick={() => setIsOpen(false)}>Sanierung</Link></li>
          
          {/* Leistungen Mobile Dropdown */}
          <li>
            <button className="mobile-drawer-link" onClick={() => toggleMobileSubMenu('leistungen')} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: 0, textAlign: 'left', fontWeight: 'inherit', fontFamily: 'inherit', cursor: 'pointer' }}>
              <span>Leistungen</span>
              <ChevronDown size={18} style={{ transform: mobileSubMenu === 'leistungen' ? 'rotate(180deg)' : 'none', transition: 'var(--transition)' }} />
            </button>
            {mobileSubMenu === 'leistungen' && (
              <div className="mobile-drawer-dropdown">
                <Link to="/komplettsanierung-rhein-main" className="mobile-drawer-dropdown-item" onClick={() => setIsOpen(false)}>Komplettsanierung</Link>
                <Link to="/heizung-sanitaer-rhein-main" className="mobile-drawer-dropdown-item" onClick={() => setIsOpen(false)}>Heizung & Sanitär</Link>
                <Link to="/elektroinstallation-rhein-main" className="mobile-drawer-dropdown-item" onClick={() => setIsOpen(false)}>Elektrotechnik</Link>
                <Link to="/innenausbau-umbau-rhein-main" className="mobile-drawer-dropdown-item" onClick={() => setIsOpen(false)}>Innenausbau</Link>
                <Link to="/energetische-sanierung-rhein-main" className="mobile-drawer-dropdown-item" onClick={() => setIsOpen(false)}>Energie & Förderung</Link>
                <Link to="/schadstoffsanierung-rhein-main" className="mobile-drawer-dropdown-item" onClick={() => setIsOpen(false)}>Schimmel & Asbest</Link>
                <Link to="/gewerbe-objektsanierung-rhein-main" className="mobile-drawer-dropdown-item" onClick={() => setIsOpen(false)}>Gewerbeobjekte</Link>
                <Link to="/leistungen" className="mobile-drawer-dropdown-item" onClick={() => setIsOpen(false)} style={{fontWeight: 'bold', color: '#f97316'}}>Alle Leistungen ansehen</Link>
              </div>
            )}
          </li>

          <li><a href="#beispiele" className="mobile-drawer-link" onClick={(e) => handleScrollToSection(e, 'beispiele')}>Projekte</a></li>
          <li><a href="#faq" className="mobile-drawer-link" onClick={(e) => handleScrollToSection(e, 'faq')}>FAQ</a></li>
          <li><a href="#ratgeber" className="mobile-drawer-link" onClick={(e) => handleScrollToSection(e, 'ratgeber')}>Ratgeber</a></li>
          <li><Link to="/ueber-uns" className="mobile-drawer-link" onClick={() => setIsOpen(false)}>Über uns</Link></li>
          <li><Link to="/karriere" className="mobile-drawer-link" onClick={() => setIsOpen(false)}>Karriere</Link></li>
          <li><a href="#kontakt" className="mobile-drawer-link" onClick={(e) => handleScrollToSection(e, 'kontakt')}>Kontakt</a></li>
        </ul>
        
        <div className="mobile-drawer-actions">
          <a href="tel:+496074960620" className="btn btn--secondary" onClick={() => setIsOpen(false)} style={{ width: '100%' }}>
            <Phone size={16} />
            <span>06074 960620 Anrufen</span>
          </a>
          <a href="#kontakt" className="btn btn--primary" onClick={(e) => handleScrollToSection(e, 'kontakt')} style={{ width: '100%' }}>
            Projekt anfragen
          </a>
        </div>
      </div>

      {/* Backdrop overlay */}
      <div className={`nav-mobile-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />
    </>
  );
}
