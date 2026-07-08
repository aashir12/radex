import { Link } from '../router';
import { ArrowRight } from 'lucide-react';

export default function Examples() {
  const projects = [
    {
      img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=600',
      title: 'Wohnungssanierung',
      location: 'Offenbach',
      badge: 'live'
    },
    {
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600',
      title: 'Haussanierung',
      location: 'Darmstadt',
      badge: null
    },
    {
      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600',
      title: 'Altbausanierung',
      location: 'Frankfurt',
      badge: 'before-after'
    },
    {
      img: 'https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?auto=format&fit=crop&q=80&w=600',
      title: 'Komplettsanierung',
      location: 'Rödermark',
      badge: null
    }
  ];

  return (
    <section id="beispiele" className="home-section bg-white">
      <div className="container">
        <div className="home-split">
          {/* Left Text Column */}
          <div className="home-split-left" style={{ paddingTop: "16px" }}>
            <h2
              className="text-3xl font-bold text-navy"
              style={{ marginBottom: "16px", lineHeight: 1.2 }}
            >
              Aktuelle Projekte & Referenzen
            </h2>
            <p
              className="text-gray-600"
              style={{
                marginBottom: "32px",
                fontSize: "15px",
                lineHeight: 1.6,
              }}
            >
              Verfolgen Sie laufende Baustellen, entdecken Sie abgeschlossene
              Sanierungen und Vorher/Nachher-Vergleiche aus dem
              Rhein-Main-Gebiet.
            </p>
            <Link
              to="/sanierung-rhein-main"
              className="home-btn-orange"
              style={{ fontSize: "14px", padding: "10px 20px" }}
            >
              Alle Projekte ansehen <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Images Column */}
          <div className="home-split-right">
            <div className="home-grid-4">
              {projects.map((project, idx) => (
                <div key={idx} className="home-project-card">
                  <div
                    className="home-project-img-wrapper"
                    style={{ position: "relative" }}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="home-project-img"
                    />

                    {project.badge === "live" && (
                      <span className="br-project-badge live">Radex Live</span>
                    )}

                    {project.badge === "before-after" && (
                      <span className="br-project-badge before-after">
                        Vorher/Nachher
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-navy text-sm">
                    {project.title}
                  </h4>
                  <p className="text-xs text-gray-500">{project.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
