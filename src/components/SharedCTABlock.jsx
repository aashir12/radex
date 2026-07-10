import { MessageSquare, ArrowRight } from "lucide-react";

const SharedCTABlock = () => (
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
  );


export default SharedCTABlock