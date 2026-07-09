import "../home.css";
import Hero from "../components/Hero";
import MainDecisionSection from "../components/MainDecisionSection";
import ServicesOverview from "../components/ServicesOverview";
import ProjectHub from "../components/ProjectHub";
import SanierungskostenRechner from "../components/SanierungskostenRechner";
import UrgentHelpSection from "../components/UrgentHelpSection";
import VideoSection from "../components/VideoSection";
import Examples from "../components/Examples";
import ReviewsMarquee from "../components/ReviewsMarquee";
import FaqContactSplit from "../components/FaqContactSplit";
import ContactForm from "../components/ContactForm";
import SeoAccordion from "../components/SeoAccordion";
import useSeo from "../useSeo";

export default function Home() {
  useSeo({
    title:
      "Radex Objektmanagement | Sanierung & Badsanierung im Rhein-Main-Gebiet",
    description:
      "Sanierung, Badsanierung & Modernisierung im Rhein-Main-Gebiet aus einer Hand. Zugelassener SHK-Meisterbetrieb & Generalunternehmer aus Rödermark. Jetzt kostenlose Beratung sichern!",
    path: "/",
  });

  return (
    <main style={{ flexGrow: 1 }}>
      <Hero />
      <MainDecisionSection />
      <ServicesOverview />
      <ProjectHub />
      <SanierungskostenRechner />
      <UrgentHelpSection />
      <VideoSection />
      <Examples />
      <ReviewsMarquee />
      <FaqContactSplit />
      <ContactForm />
      <SeoAccordion />
    </main>
  );
}
