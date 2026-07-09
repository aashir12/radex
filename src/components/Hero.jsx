import { Link } from "../router";
import {
  Camera,
  MessageSquare,
  ArrowRight,
  Bath,
  Building2,
  Home as HomeIcon,
  Briefcase,
} from "lucide-react";

export default function Hero() {
  const quickLinks = [
    {
      icon: <Bath size={20} color="#f97316" />,
      label: "Badsanierung",
      to: "/badsanierung-rhein-main",
    },
    {
      icon: <Building2 size={20} color="#f97316" />,
      label: "Wohnung",
      to: "/sanierung/wohnungssanierung",
    },
    {
      icon: <HomeIcon size={20} color="#f97316" />,
      label: "Haus",
      to: "/sanierung/haussanierung",
    },
    {
      icon: <Briefcase size={20} color="#f97316" />,
      label: "Gewerbe",
      to: "/gewerbe-objektsanierung-rhein-main",
    },
  ];

  return (
    <section className="home-hero">
      {/* Background Image */}
      <div
        className="home-hero-bg"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000)",
        }}
      ></div>

      {/* White Gradient Overlay */}
      <div className="home-hero-overlay"></div>

      <div className="container relative z-20">
        <div className="home-hero-content">
          <h1 className="home-hero-title">
            Was möchten Sie <br />
            sanieren?
          </h1>

          <h2 className="home-hero-subtitle">
            Radex – Ihr lizenzierter SHK-Meisterbetrieb und Generalunternehmer
            für Badsanierungen, Immobiliensanierungen und
            Modernisierungsprojekte im Rhein-Main-Gebiet.
          </h2>

          <div className="home-hero-quicklinks">
            {quickLinks.map((item, idx) => (
              <Link key={idx} to={item.to} className="home-hero-quicklink">
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="home-hero-actions">
            <a
              href="#kontakt"
              className="home-btn-orange"
              style={{ boxShadow: "0 10px 15px -3px rgba(249,115,22,0.3)" }}
            >
              Kostenlose Beratung <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/496074960620"
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn-navy"
            >
              WhatsApp schreiben <MessageSquare size={18} color="#fff" />
            </a>
            <a href="tel:+496074960620" className="home-btn-white">
              Jetzt anrufen
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              color: "#4b5563",
              fontWeight: "500",
              marginTop: "24px",
              marginBottom: "32px",
            }}
          >
            <Camera size={16} />
            <span>Fotos senden. Erste Einschätzung erhalten.</span>
          </div>

          <div className="home-hero-trust">
            <div className="home-hero-trust-item">
              <strong>500+</strong>
              <span>Projekte abgeschlossen</span>
            </div>
            <div className="home-hero-trust-item">
              <strong>60+</strong>
              <span>Betreute Städte</span>
            </div>
            <div className="home-hero-trust-item">
              <strong>100%</strong>
              <span>Festpreisgarantie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
