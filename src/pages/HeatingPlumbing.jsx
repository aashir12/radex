import ServicePageTemplate from '../components/ServicePageTemplate';

export default function HeatingPlumbing() {
  const heroData = {
    title: "Heizung & Sanitär im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Zukunftssichere Haustechnik vom zugelassenen SHK-Meisterbetrieb.",
    text: "Heizung und Sanitär gehören zu den wichtigsten technischen Grundlagen einer Sanierung und sollten – besonders bei Bestandsimmobilien – früh geplant werden, bevor sichtbare Oberflächen entstehen. Radex ist im Bereich Heizung, Sanitär und Gebäudetechnik durch Bernd Knoop SHK-meistergeführt.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Für wen ist diese Leistung?",
    subtitle: "Heizung und Sanitär als Teil des gesamten Sanierungsprojekts gedacht.",
    list: [
      { title: "Bauherren", desc: "Komplette Heizungs- und Sanitärtechnik für Neubauten – effizient geplant und sauber installiert." },
      { title: "Modernisierer", desc: "Austausch der alten Öl- oder Gasheizung gegen eine förderfähige Wärmepumpe inkl. Wärmeverteilung und Heizkörpern." },
      { title: "Eigentümer & Vermieter", desc: "Erneuerung veralteter Leitungen, Sicherung der Trinkwasserhygiene und Wartung der Anlagen." },
      { title: "Sanierungsprojekte", desc: "Integration der Haustechnik in eine Bad-, Wohnungs- oder Komplettsanierung – früh abgestimmt mit Elektro und Trockenbau." }
    ]
  };

  const typicalProjectsData = {
    title: "Unsere SHK-Leistungen",
    subtitle: "Heizung, Sanitär und Warmwasser aus einer Hand – unter Meisterverantwortung.",
    projects: [
      { title: "Sanitärinstallation im Bad", desc: "Wasserleitungen, Abwasser, Abdichtung, Vorwandinstallation und Warmwasser – fachgerecht nach Norm.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
      { title: "Heizungsmodernisierung", desc: "Nicht nur ein neues Heizgerät, sondern Wärmeverteilung, Heizkörper und energetische Maßnahmen im Zusammenspiel.", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" },
      { title: "Wärmepumpe", desc: "Luft-Wasser- und Sole-Wasser-Wärmepumpen inkl. hydraulischem Abgleich, Auslegung und Förderabwicklung.", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" },
      { title: "Fußbodenheizung", desc: "Nachträgliches Einfräsen im Bestand oder klassische Verlegung im Neubau – ideal für niedrige Vorlauftemperaturen.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten für Heizung & Sanitär",
    subtitle: "Preise sind Richtwerte und abhängig von Gebäude, Technik und Aufwand – nach Bestandsaufnahme erstellen wir ein konkretes Angebot.",
    items: [
      { title: "Wärmepumpe (inkl. Einbau)", price: "ab €25.000", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" },
      { title: "Fußbodenheizung", price: "ab €50 / m²", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
      { title: "Heizkörper-Austausch", price: "ab €600 / Stück", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Warum sind Heizung und Sanitär bei einer Sanierung so wichtig?", a: "Heizung und Sanitär gehören zu den wichtigsten technischen Grundlagen einer Sanierung. Sie liegen in Wänden, Böden und Schächten und müssen geplant sein, bevor Fliesen, Estrich und Oberflächen fertig sind. Wer diese Gewerke zu spät berücksichtigt, riskiert teure Nacharbeiten. Deshalb betrachtet Radex Heizung und Sanitär nicht isoliert, sondern als Teil des gesamten Sanierungsprojekts." },
    { q: "Ist Radex ein zertifizierter SHK-Betrieb?", a: "Ja. Radex ist ein eingetragener SHK-Meisterbetrieb. Bernd Knoop ist als SHK-Meister & Betriebsleiter für Sanitär, Heizung, Klima und Gebäudetechnik fachlich verantwortlich. Alle Heizungs- und Sanitärarbeiten werden unter dieser Meisterverantwortung ausgeführt." },
    { q: "Ist eine Wärmepumpe im Altbau sinnvoll?", a: "Oft ja. Entscheidend ist eine möglichst niedrige Vorlauftemperatur, die wir durch große Heizflächen (Fußboden- oder Niedertemperaturheizkörper) und verbesserte Dämmung erreichen. Im Rahmen einer Vor-Ort-Analyse prüfen wir die Heizlast Ihres Gebäudes und sagen Ihnen verbindlich, ob sich eine Wärmepumpe lohnt." },
    { q: "Welche Förderungen gibt es für den Heizungstausch?", a: "Über die Bundesförderung für effiziente Gebäude (BEG) sind aktuell Zuschüsse von bis zu 70 % für den Einbau einer Wärmepumpe möglich (Grundförderung, Klimageschwindigkeits- und Einkommensbonus). Wir übernehmen auf Wunsch die komplette Förderabwicklung mit Energie-Effizienz-Experten." },
    { q: "Müssen die Wasserleitungen bei einer Sanierung erneuert werden?", a: "Alte verzinkte Stahl- oder Bleileitungen sollten dringend ersetzt werden, da sie verkalken und die Trinkwasserqualität beeinträchtigen. Bei einer Bad- oder Komplettsanierung erneuern wir die Leitungen direkt mit, solange die Wände ohnehin geöffnet sind." },
    { q: "Bieten Sie auch Wartung an?", a: "Ja. Als SHK-Meisterbetrieb warten wir Ihre Heizungs- und Sanitäranlagen und stehen bei Störungen wie Heizungsausfall oder Wasserschäden zur Verfügung." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">SHK-Handwerk auf höchstem Niveau</h3>
        <p className="mb-4 text-gray-600">Als eingetragener SHK-Meisterbetrieb (Sanitär, Heizung, Klima) sind wir Ihr zertifizierter Partner für die fachgerechte Heizungsinstallation und die Sicherung der Trinkwasserhygiene im gesamten Rhein-Main-Gebiet. Vom ersten Planungsgespräch über die Wärmebedarfsberechnung bis zur Inbetriebnahme und Wartung erhalten Sie alle Leistungen aus einer Hand – ohne Schnittstellenprobleme zwischen verschiedenen Firmen. Bernd Knoop steht als eingetragener Meister für die fachliche Verantwortung.</p>
        <p className="text-gray-600">Heizung und Sanitär werden bei Radex nicht isoliert, sondern als Teil des gesamten Sanierungsprojekts betrachtet. Die Besonderheit liegt in der frühzeitigen Planung der technischen Grundlagen, lange bevor sichtbare Oberflächen entstehen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Sanitärinstallation im Bad</h3>
        <p className="text-gray-600">Zur Sanitärinstallation gehören die Verlegung neuer Wasserleitungen, der Anschluss von Dusche, Wanne, WC und Waschtisch, die Überprüfung und Erneuerung von Entwässerungsleitungen, die fachgerechte Abdichtung aller Nassbereiche sowie die Vorwandinstallation. Auch in Küche und Gäste-WC erneuern wir Wasser-, Warmwasser- und Abwasserleitungen. Veraltete Leitungen sind ein Hygiene- und Gesundheitsrisiko – wir installieren normgerecht nach DIN 1988 und der Trinkwasserverordnung und realisieren auf Wunsch barrierefreie Sanitärlösungen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Heizungsmodernisierung & Wärmepumpe</h3>
        <p className="mb-4 text-gray-600">Eine Heizungsmodernisierung ist mehr als ein neues Heizgerät. Entscheidend ist das Zusammenspiel aus Wärmeerzeuger, Wärmeverteilung, Heizkörpern bzw. Flächenheizung und dem energetischen Zustand des Gebäudes. Wir analysieren die Heizlast, führen einen hydraulischen Abgleich durch und sorgen dafür, dass Vorlauftemperaturen und Heizflächen optimal aufeinander abgestimmt sind.</p>
        <p className="text-gray-600">Der Umstieg von fossilen Brennstoffen auf eine Wärmepumpe ist einer der wichtigsten Schritte zu einem zukunftssicheren Heizsystem. Auch hybride Lösungen oder die Anbindung an eine Photovoltaikanlage realisieren wir zuverlässig.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Fördermittel & Beratung</h3>
        <p className="text-gray-600">Die Beantragung von Fördermitteln über BAFA und KfW ist komplex und an Fristen gebunden. Wir arbeiten eng mit zertifizierten Energie-Effizienz-Experten zusammen, die Sie durch den Förderdschungel begleiten – damit Sie keine Zuschüsse verschenken. Sprechen Sie uns frühzeitig an, denn die Förderung muss in der Regel vor Auftragsvergabe beantragt werden.</p>
      </div>
    </>
  );

  const seo = {
    title: "Heizung & Sanitär Rhein-Main | Wärmepumpe vom SHK-Meister | Radex",
    description: "Heizung & Sanitär im Rhein-Main-Gebiet vom SHK-Meisterbetrieb: Wärmepumpe, Heizungstausch, Fußbodenheizung & Sanitärinstallation inkl. Förderung. Jetzt Beratung sichern!",
    path: "/heizung-sanitaer-rhein-main",
    serviceName: "Heizung & Sanitär"
  };

  return <ServicePageTemplate seo={seo} heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
