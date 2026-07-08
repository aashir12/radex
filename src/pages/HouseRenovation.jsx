import ServicePageTemplate from '../components/ServicePageTemplate';

export default function HouseRenovation() {
  const heroData = {
    title: "Haussanierung im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Häuser sinnvoll modernisieren – Einfamilienhäuser, Reihenhäuser und Bestandsimmobilien.",
    text: "Radex fungiert als Generalunternehmer für die Haussanierung im Rhein-Main-Gebiet und koordiniert Projekte von Rödermark und Rodgau bis Dreieich, Langen und Frankfurt am Main. Bernd Knoop bringt als SHK-Meister & Betriebsleiter Fachkompetenz in Heizung, Sanitär und Gebäudetechnik ein.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Typische Anlässe für eine Haussanierung",
    subtitle: "Wann sich die Sanierung Ihres Hauses lohnt.",
    list: [
      { title: "Haussanierung nach dem Kauf", desc: "Käufer von Bestandshäusern sanieren vor dem Einzug: Bad, Heizung, Elektrik und Bodenbeläge lassen sich ohne Mobiliar leichter und günstiger erneuern." },
      { title: "Haussanierung zur Werterhaltung", desc: "Eine erneuerte Heizanlage, ein saniertes Bad und eine zuverlässige Elektroinstallation sichern den Wert der Immobilie langfristig." },
      { title: "Energetische Modernisierung", desc: "Häuser aus den 1960er bis 1980er Jahren lassen sich mit moderner Heizung und besserer Dämmung erheblich effizienter betreiben und verbessern den Energieausweis." },
      { title: "Kernsanierung oder Teilsanierung", desc: "Nicht jede Haussanierung muss eine Kernsanierung sein. Eine Teilsanierung ist oft wirtschaftlich sinnvoller – wir beraten ehrlich." }
    ]
  };

  const typicalProjectsData = {
    title: "Gewerke & Leistungen der Haussanierung",
    subtitle: "Radex koordiniert alle Gewerke aus einer Hand – die SHK-Meisterkompetenz für Heizung, Sanitär und Gebäudetechnik bringt Bernd Knoop direkt ein.",
    projects: [
      { title: "Heizung & Sanitär", desc: "Heizungsaustausch, neue Heizkörper, Fußbodenheizung, Warmwasserbereitung und Sanitärinstallation – mit direkter SHK-Meisterkompetenz.", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" },
      { title: "Elektroinstallation", desc: "Erneuerung von Leitungen, Unterverteilungen, Steckdosen, Beleuchtung und Absicherung – im Gesamtablauf koordiniert.", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" },
      { title: "Badsanierung", desc: "Kompletter Badumbau inklusive Demontage, Neuinstallation, Fliesen und Sanitärobjekten, abgestimmt auf den Gesamtablauf.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
      { title: "Innenausbau & Trockenbau", desc: "Raumaufteilung, Trennwände, abgehängte Decken, Bodenaufbau und Estrich bilden die strukturelle Grundlage.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" },
      { title: "Energetische Sanierung", desc: "Dämmmaßnahmen, neue Fenster, Lüftungsanlagen und Wärmepumpen als Teil der Gesamtsanierung.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
      { title: "Rückbau & Schadstoffe", desc: "Fachgerechter Rückbau, Schadstofferkennung und -entfernung (z. B. Asbest in alten Bodenbelägen), sachlich durchgeführt und dokumentiert.", img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Was kostet eine Haussanierung?",
    subtitle: "Die Kosten hängen stark vom Sanierungsstau und Ihren Wünschen ab. Wir erstellen ein transparentes Festpreisangebot nach der Bestandsprüfung.",
    items: [
      { title: "Kosmetische Sanierung", price: "€400 - €600 / m²", img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800" },
      { title: "Standard Sanierung", price: "€800 - €1.200 / m²", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
      { title: "Kernsanierung", price: "€1.500 - €2.500 / m²", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Wann sollte ein Haus saniert werden?", a: "Ein Haus sollte saniert werden, wenn technische Anlagen das Ende ihrer wirtschaftlichen Nutzungsdauer erreichen. Heizungen halten typischerweise 15 bis 25 Jahre, Elektroinstallationen sollten nach 30 bis 40 Jahren überprüft werden. Typische Anlässe sind ein Eigentümerwechsel, Mieterwechsel, sichtbare Mängel oder der Wunsch, die Energieeffizienz zu verbessern." },
    { q: "Welche Gewerke sind bei einer Haussanierung wichtig?", a: "Eine umfassende Haussanierung umfasst Heizung und Sanitär, Elektroinstallation, Badsanierung, Innenausbau und Trockenbau, Bodenbeläge und Fliesen, Malerarbeiten sowie bei Bedarf energetische Maßnahmen und Rückbau." },
    { q: "Kann ein Haus in Etappen saniert werden?", a: "Ja. Eine Haussanierung muss nicht zwingend als Komplettsanierung in einem Zug erfolgen. Viele Eigentümer priorisieren bestimmte Bereiche. Radex plant auch schrittweise Sanierungskonzepte, wobei die Reihenfolge der Gewerke sinnvoll aufeinander abgestimmt wird." },
    { q: "Wann sollten Heizung und Elektrik bei einer Haussanierung mitgeplant werden?", a: "Heizung und Elektrik sollten immer dann mitgeplant werden, wenn ohnehin größere Öffnungs- oder Innenausbauarbeiten stattfinden. Das spart Zeit und Kosten, da Wände, die für Trockenbau oder Fliesen geöffnet werden, die günstigste Gelegenheit bieten, Leitungen zu erneuern oder neu zu verlegen." },
    { q: "Wie unterstützt Radex bei einer Haussanierung konkret?", a: "Radex begleitet Haussanierungen im Rhein-Main-Gebiet von der Bestandsaufnahme bis zur Abnahme. Als Generalunternehmer übernimmt Radex die Gesamtkoordination: Planung, Terminierung, Steuerung der Gewerke und Kommunikation. Für Eigentümer bedeutet das: ein Ansprechpartner statt ein Dutzend Einzelhandwerker, strukturierter Ablauf statt Koordinationschaos." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Was eine Haussanierung ausmacht</h3>
        <p className="mb-4 text-gray-600">Eine Haussanierung unterscheidet sich grundlegend von einer Wohnungsrenovierung. Sie umfasst mehrere Etagen, einen Keller, ein Dachgeschoss, eine oft jahrzehntealte Heizanlage, veraltete Elektroleitungen und ein Bad, das dreißig Jahre seinen Dienst getan hat.</p>
        <p className="mb-4 text-gray-600">Häuser aus den 1960er bis 1980er Jahren haben typischerweise überholte Heizungstechnik, Elektroleitungen, die modernen Standards nicht entsprechen, ältere Badausstattungen sowie feuchte Keller und ungedämmte Dachgeschosse. Der Unterschied zwischen einer erfolgreichen und einer problematischen Sanierung liegt darin, ob jemand das Gesamtbild im Blick hat und die Gewerke sinnvoll aufeinander abstimmt.</p>
        <p className="text-gray-600"><strong>Wichtiger Hinweis:</strong> Radex koordiniert alle Gewerke als Generalunternehmer. Die SHK-Meisterkompetenz durch Bernd Knoop gilt für Heizung, Sanitär und Gebäudetechnik. Andere Gewerke wie Elektro, Trockenbau, Fliesen und Malerarbeiten werden durch qualifizierte Partner ausgeführt und von Radex koordiniert.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Ablauf einer Haussanierung mit Radex</h3>
        <p className="mb-4 text-gray-600"><strong>1. Erstgespräch und Bestandsaufnahme:</strong> Radex bespricht den Zustand des Hauses, die Anforderungen und Prioritäten mit dem Auftraggeber. Wo gibt es den größten Handlungsbedarf? Was soll jetzt angegangen werden, was kann warten?</p>
        <p className="mb-4 text-gray-600"><strong>2. Bestandsprüfung und technische Analyse:</strong> Vor einem Angebot werden Heizungsanlage, Elektroinstallation, Leitungsführung, Badausstattung und der Zustand von Keller und Dachgeschoss geprüft. Erst wer weiß, was vorhanden ist, kann seriös planen.</p>
        <p className="mb-4 text-gray-600"><strong>3. Projektplanung und Angebotserstellung:</strong> Radex erarbeitet ein klares Konzept mit Gewerkereihenfolge, Zeitplanung und Kalkulation. Das Angebot ist transparent und nachvollziehbar.</p>
        <p className="mb-4 text-gray-600"><strong>4. Koordination der Gewerke und Bauausführung:</strong> Alle Gewerke werden im abgestimmten Zeitplan koordiniert. Sie haben einen festen Ansprechpartner und müssen nicht selbst Handwerker terminieren, mahnen oder kontrollieren.</p>
        <p className="text-gray-600"><strong>5. Abnahme und Übergabe:</strong> Eine strukturierte Abnahme dokumentiert alle ausgeführten Leistungen, Mängel werden behoben und relevante Unterlagen (Schaltpläne, Heizungsunterlagen, Garantienachweise) werden übergeben.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Haussanierung im Bestand</h3>
        <p className="mb-4 text-gray-600">Der Großteil der Häuser im Rhein-Main-Gebiet stammt aus der Nachkriegszeit bis in die frühen 1980er Jahre. Diese Gebäude wurden solide gebaut, aber mit einer Haustechnik, die auf die Anforderungen von heute nicht ausgelegt war: Heizöl-Kesselanlagen, Aluminium- oder einadrige Elektroleitungen, einfachverglaste Fenster und nicht gedämmte Außenwände.</p>
        <p className="mb-4 text-gray-600">Viele dieser Immobilien haben eine Bausubstanz, die deutlich langlebiger ist als viele jüngere Bauten. Genau das macht die Sanierung im Bestand so lohnenswert.</p>
        <p className="text-gray-600">Zum Thema Schadstoffe empfiehlt Radex eine Vorabprüfung. Wird Asbest festgestellt, wird er fachgerecht entfernt und entsorgt. Das ist Standardprozedur, kein außergewöhnlicher Befund.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Warum Radex als Partner für Ihre Haussanierung</h3>
        <p className="mb-4 text-gray-600"><strong>Generalunternehmer mit SHK-Meisterkompetenz:</strong> Radex koordiniert alle Gewerke aus einer Hand. Im Bereich Heizung, Sanitär und Gebäudetechnik ist Bernd Knoop als SHK-Meister & Betriebsleiter direkt eingebunden – nicht nur als Auftraggeber anderer Firmen, sondern als fachlicher Verantwortlicher.</p>
        <p className="mb-4 text-gray-600"><strong>Regionale Präsenz im Rhein-Main-Gebiet:</strong> Radex ist in der Region verwurzelt – mit eigenem Standort in Rödermark und einem Netzwerk aus bewährten Partnerbetrieben in der gesamten Rhein-Main-Region.</p>
        <p className="mb-4 text-gray-600"><strong>Ehrliche Bestandsaufnahme vor dem Angebot:</strong> Kein Angebot ohne vorherige Analyse des Ist-Zustands. Das schützt beide Seiten vor Überraschungen. Radex bleibt flexibel für Teil- und Komplettsanierung und passt den Leistungsumfang an Ihre Situation an, nicht umgekehrt.</p>
        <p className="text-gray-600"><strong>Feste Ansprechpartner und transparente Kommunikation:</strong> Während des gesamten Projekts haben Sie einen festen Ansprechpartner bei Radex. Keine wechselnden Gesichter, keine Informationslücken.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Haussanierung im Rhein-Main-Gebiet – unsere Einsatzgebiete</h3>
        <p className="text-gray-600">Radex bietet Haussanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Der Standort in Rödermark ist der Ausgangspunkt für Projekte von Frankfurt am Main im Norden bis Darmstadt im Süden, von Aschaffenburg im Osten bis Dreieich und Langen im Westen. Typische Einsatzorte sind Rodgau, Seligenstadt, Hanau, Egelsbach und Langen – alles Regionen mit einem hohen Anteil an Einfamilienhäusern und Reihenhäusern aus den 1960er bis 1980er Jahren.</p>
      </div>
    </>
  );

  const seo = {
    title: "Haussanierung Rhein-Main | Modernisierung aus einer Hand | Radex",
    description: "Haussanierung im Rhein-Main-Gebiet: Heizung, Sanitär, Elektro, Bad, Innenausbau & energetische Modernisierung vom Generalunternehmer mit SHK-Meisterkompetenz. Jetzt anfragen!",
    path: "/sanierung/haussanierung",
    serviceName: "Haussanierung"
  };

  return (
    <ServicePageTemplate
      seo={seo}
      heroData={heroData}
      whoIsForData={whoIsForData}
      typicalProjectsData={typicalProjectsData}
      costsData={costsData}
      faqsData={faqsData}
      calculatorType="altbau"
      seoContent={seoContent}
    />
  );
}
