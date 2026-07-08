import { useState } from 'react';
import { Phone, Mail, MessageSquare, Send, Camera, CheckCircle } from 'lucide-react';
import { Link } from '../router';

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  fontSize: '15px',
  color: '#1f2937',
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
};

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  fontWeight: 600,
  color: '#374151',
  marginBottom: '8px',
};

const contactItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '14px',
  borderRadius: '12px',
  border: '1px solid transparent',
  transition: 'background 0.2s ease, border-color 0.2s ease',
};

const iconCircleStyle = (bg) => ({
  width: '48px',
  height: '48px',
  minWidth: '48px',
  background: bg,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const vorname = form.vorname.value.trim();
    const nachname = form.nachname.value.trim();
    const telefon = form.telefon.value.trim();
    const email = form.email.value.trim();
    const nachricht = form.nachricht.value.trim();

    const subject = `Projektanfrage von ${vorname} ${nachname}`;
    const body =
      `Name: ${vorname} ${nachname}\n` +
      `Telefon: ${telefon}\n` +
      `E-Mail: ${email}\n\n` +
      `Projektbeschreibung:\n${nachricht}`;

    // Open the visitor's email client with a pre-filled message.
    window.location.href =
      `mailto:info@radex-objektmanagement.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  const focusOn = (e) => {
    e.target.style.borderColor = '#f97316';
    e.target.style.boxShadow = '0 0 0 3px rgba(249,115,22,0.15)';
  };
  const focusOff = (e) => {
    e.target.style.borderColor = '#e5e7eb';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section
      id="kontakt"
      className="home-section bg-white"
      style={{ borderTop: "1px solid #f3f4f6" }}
    >
      <div className="container">
        <div className="home-grid-2" style={{ alignItems: "start" }}>
          {/* Left Column: Contact Info */}
          <div>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#f97316",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                display: "block",
                marginBottom: "12px",
              }}
            >
              Kontakt aufnehmen
            </span>
            <h2
              className="text-3xl font-bold text-navy"
              style={{ marginBottom: "20px" }}
            >
              Projekt anfragen
            </h2>
            <p
              className="text-gray-600 text-lg"
              style={{ lineHeight: 1.6, marginBottom: "32px" }}
            >
              Planen Sie ein Sanierungsprojekt im Rhein-Main-Gebiet?
              Kontaktieren Sie uns für eine erste Einschätzung oder vereinbaren
              Sie direkt einen Vor-Ort-Termin.
            </p>

            <div
              style={{
                background: "#fff7ed",
                borderRadius: "16px",
                padding: "24px",
                marginBottom: "32px",
                border: "1px solid #ffedd5",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <Camera size={24} color="navy" />
                <h3
                  className="font-bold text-navy"
                  style={{ fontSize: "18px", margin: 0 }}
                >
                  Fotos senden. Erste Einschätzung erhalten.
                </h3>
              </div>
              <p
                className="text-gray-600 text-sm"
                style={{ margin: 0, lineHeight: 1.6 }}
              >
                Senden Sie uns Bilder Ihres aktuellen Bads oder der zu
                sanierenden Räume bequem per WhatsApp.
              </p>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <a
                href="tel:+496074960620"
                style={contactItemStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f9fafb";
                  e.currentTarget.style.borderColor = "#f3f4f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }}
              >
                <div style={iconCircleStyle("#f3f4f6")}>
                  <Phone color="var(--navy)" size={22} />
                </div>
                <div>
                  <div
                    className="text-sm text-gray-500"
                    style={{ marginBottom: "2px" }}
                  >
                    Rufen Sie uns an
                  </div>
                  <div
                    className="font-bold text-navy"
                    style={{ fontSize: "18px" }}
                  >
                    +49 6074 9606 20
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/496074960620"
                target="_blank"
                rel="noopener noreferrer"
                style={contactItemStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f9fafb";
                  e.currentTarget.style.borderColor = "#f3f4f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }}
              >
                <div style={iconCircleStyle("rgba(211, 159, 37, 0.1)")}>
                  <MessageSquare color="#f97316" size={22} />
                </div>
                <div>
                  <div
                    className="text-sm text-gray-500"
                    style={{ marginBottom: "2px" }}
                  >
                    Schreiben Sie uns
                  </div>
                  <div
                    className="font-bold text-navy"
                    style={{ fontSize: "18px" }}
                  >
                    WhatsApp Chat starten
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@radex-objektmanagement.de"
                style={contactItemStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f9fafb";
                  e.currentTarget.style.borderColor = "#f3f4f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }}
              >
                <div style={iconCircleStyle("#f3f4f6")}>
                  <Mail color="var(--navy)" size={22} />
                </div>
                <div>
                  <div
                    className="text-sm text-gray-500"
                    style={{ marginBottom: "2px" }}
                  >
                    Schreiben Sie eine E-Mail
                  </div>
                  <div
                    className="font-bold text-navy"
                    style={{ fontSize: "18px", wordBreak: "break-all" }}
                  >
                    info@radex-objektmanagement.de
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              border: "1px solid #f3f4f6",
            }}
          >
            <h3
              className="text-2xl font-bold text-navy"
              style={{ marginBottom: "24px" }}
            >
              Nachricht senden
            </h3>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className="contact-name-row">
                <div>
                  <label htmlFor="vorname" style={labelStyle}>
                    Vorname *
                  </label>
                  <input
                    type="text"
                    id="vorname"
                    name="vorname"
                    required
                    placeholder="Max"
                    style={inputStyle}
                    onFocus={focusOn}
                    onBlur={focusOff}
                  />
                </div>
                <div>
                  <label htmlFor="nachname" style={labelStyle}>
                    Nachname *
                  </label>
                  <input
                    type="text"
                    id="nachname"
                    name="nachname"
                    required
                    placeholder="Mustermann"
                    style={inputStyle}
                    onFocus={focusOn}
                    onBlur={focusOff}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="telefon" style={labelStyle}>
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  required
                  placeholder="+49 123 4567890"
                  style={inputStyle}
                  onFocus={focusOn}
                  onBlur={focusOff}
                />
              </div>

              <div>
                <label htmlFor="email" style={labelStyle}>
                  E-Mail Adresse *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="max@beispiel.de"
                  style={inputStyle}
                  onFocus={focusOn}
                  onBlur={focusOff}
                />
              </div>

              <div>
                <label htmlFor="nachricht" style={labelStyle}>
                  Projektbeschreibung *
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows="4"
                  required
                  placeholder="Bitte beschreiben Sie kurz Ihr Projekt (z.B. Badsanierung, 8qm, Komplettumbau)..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={focusOn}
                  onBlur={focusOff}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn br-btn-orange"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "16px",
                  fontSize: "16px",
                }}
              >
                Projekt anfragen <Send size={18} />
              </button>

              {sent && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "16px",
                    borderRadius: "12px",
                    background: "#ecfdf5",
                    border: "1px solid #a7f3d0",
                  }}
                >
                  <CheckCircle
                    size={20}
                    color="#059669"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#065f46",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    Vielen Dank! Ihr E-Mail-Programm wurde mit Ihrer Anfrage
                    geöffnet. Alternativ erreichen Sie uns telefonisch unter{" "}
                    <strong>06074 960620</strong> oder per WhatsApp.
                  </p>
                </div>
              )}

              <p
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                Mit dem Absenden erklären Sie sich mit unserer{" "}
                <Link to="/datenschutz" style={{ color: "#f97316" }}>
                  Datenschutzerklärung
                </Link>{" "}
                einverstanden.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
