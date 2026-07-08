import ServicePageTemplate from '../components/ServicePageTemplate';

export default function BathroomRenovation() {
  const heroData = {
    title: "Badsanierung im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Bad sanieren mit Radex – SHK-Meisterbetrieb mit Erfahrung in Badplanung, Sanitärinstallation und Generalunternehmerschaft.",
    text: "Radex plant und koordiniert Ihre Badsanierung im gesamten Rhein-Main-Gebiet – von der ersten Beratung über die Badplanung bis zur schlüsselfertigen Übergabe. Sanitär und Heizungstechnik führen wir als Meisterbetrieb selbst aus, weitere Gewerke werden durch eingespielte Fachbetriebe realisiert, die wir koordinieren und verantworten.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Was möchten Sie sanieren?",
    subtitle: "Badsanierung ist kein einheitliches Projekt – diese Vorhaben begleiten wir.",
    list: [
      { title: "Komplettbadsanierung", desc: "Das Bad wird vollständig entkernt und neu aufgebaut – von der Rohinstallation bis zur schlüsselfertigen Übergabe. Richtig, wenn Leitungen, Abdichtung und Grundsubstanz erneuert werden müssen." },
      { title: "Badmodernisierung", desc: "Mehr Komfort, bessere Optik und neue Funktionen mit weniger Bauaufwand – neue Armaturen, moderne Beleuchtung oder eine zeitgemäße Dusche." },
      { title: "Badrenovierung", desc: "Oberflächen erneuern, Sanitärobjekte ersetzen, Licht verbessern – ohne das Bad vollständig aufzureißen. Sinnvoll, wenn die Grundsubstanz noch in Ordnung ist." },
      { title: "Barrierefreies Bad", desc: "Bodengleiche Duschen, Haltegriffe und gut geplante Bewegungsflächen – mehr Komfort für alle und die langfristig sichere Nutzung der eigenen Wohnung." },
      { title: "Kleines Bad & Gäste-WC", desc: "Auf kleiner Fläche ein funktionales, helles Bad schaffen – Radex kennt die typischen Grundrisse im Rhein-Main-Gebiet und entwickelt passende Lösungen." },
      { title: "Dusche statt Badewanne", desc: "Der Umbau von Wanne zu Dusche – aus Komfort-, Platz- oder Altersgründen. Entwässerung, Abdichtung und Installationsführung werden sorgfältig geplant." }
    ]
  };

  const typicalProjectsData = {
    title: "Leistungsumfang: Was gehört zu einer Badsanierung?",
    subtitle: "Sanitär und Heizung führen wir als SHK-Meisterbetrieb selbst aus, die übrigen Gewerke koordinieren wir.",
    projects: [
      { title: "Sanitär & Heizungstechnik", desc: "Neue Wasserleitungen, Anschluss von Dusche, Wanne, WC und Waschtisch, Erneuerung der Entwässerung und Integration von Heizkörpern – als SHK-Meisterbetrieb selbst ausgeführt.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
      { title: "Rückbau & Abdichtung", desc: "Kontrollierter Rückbau von Fliesen und Sanitärobjekten, anschließend die Abdichtung aller Nass- und Spritzwasserbereiche – Grundvoraussetzung für ein dauerhaft dichtes Bad.", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800" },
      { title: "Elektro & Trockenbau", desc: "Beleuchtung, Schalter, Steckdosen, Lüftung und Vorwandinstallationen – koordiniert, damit keine Schnittstelle offen bleibt.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" },
      { title: "Fliesen & Oberflächen", desc: "Großformatige Bodenfliesen, Wandfliesen im Wunschformat oder Mosaik – durch routinierte Fliesenleger, die mit modernen Abdichtungssystemen vertraut sind.", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800" },
      { title: "Ausbau & Einrichtung", desc: "Montage von Badmöbeln, Armaturen, Spiegel, Accessoires und Beleuchtung – das Bad wird vollständig fertiggestellt übergeben.", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800" },
      { title: "Badplanung & Beratung", desc: "Vor dem ersten Handgriff steht die Planung: Bedarf, Grundriss, Materialwünsche und Budget – mit einem Angebot, das auf Ihrer konkreten Situation basiert.", img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Wie viel kostet eine Badsanierung?",
    subtitle: "Die tatsächlichen Kosten hängen von Größe, Zustand und gewünschter Ausstattung ab. Die folgenden Beispiele geben eine erste Preisorientierung.",
    items: [
      { title: "Gäste-WC", price: "€7.500", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800" },
      { title: "Komfortbad", price: "€17.500", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
      { title: "Premium-Wellnessbad", price: "€28.000", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Was gehört zu einer Badsanierung?", a: "Der Umfang hängt vom Ausgangszustand und Ihren Wünschen ab. Bei einer Komplettbadsanierung umfasst das typischerweise: Rückbau des Bestandsbades, Erneuerung oder Verlegung von Wasser- und Abwasserleitungen, Abdichtung aller Nass- und Spritzwasserbereiche, Trockenbau- und Vorwandinstallation, Elektroarbeiten (Licht, Steckdosen, Lüftung), Fliesenarbeiten sowie die abschließende Montage von Sanitärobjekten, Armaturen und Badmöbeln. Bei einer Badmodernisierung oder gezielten Badrenovierung kann der Umfang deutlich kleiner sein." },
    { q: "Wie läuft eine Badsanierung mit Radex ab?", a: "Am Anfang steht ein kostenloser Beratungstermin bei Ihnen vor Ort. Wir schauen uns das Bad an, klären Ihre Wünsche und die technische Ausgangslage. Danach erstellen wir ein konkretes Angebot. Nach Auftragserteilung koordiniert Radex alle Gewerke – von Rückbau und Rohinstallation bis zu Fliesen, Elektro und Ausbau – in einer abgestimmten Reihenfolge. Sie haben während der gesamten Badsanierung einen festen Ansprechpartner bei Radex." },
    { q: "Ist Radex ein SHK-Meisterbetrieb?", a: "Ja. Radex Objektmanagement GmbH ist ein eingetragener SHK-Meisterbetrieb. Betriebsleiter und eingetragener Meister ist Bernd Knoop – zugelassen für die Gewerke Sanitär, Heizung, Klimatechnik und Gebäudetechnik. Alle Sanitär- und Heizungsarbeiten führen wir als Meisterbetrieb selbst aus. Für weitere Gewerke – Elektro, Trockenbau, Fliesen, Innenausbau – koordinieren wir eingespielte Fachbetriebe, für deren Arbeit wir die Verantwortung tragen." },
    { q: "Was kostet eine Badsanierung im Rhein-Main-Gebiet?", a: "Die Kosten hängen von mehreren Faktoren ab: Badgröße, Umfang der Arbeiten (Komplettbadsanierung oder Teilmaßnahme), Zustand der vorhandenen Leitungen und Abdichtung, gewählte Materialien und Ausstattung sowie Aufwand für Rückbau und ggf. Grundrissänderungen. Pauschale Preisangaben ohne Bestandsaufnahme sind wenig verlässlich – Radex erstellt nach einem Ortstermin ein verbindliches Angebot auf Basis Ihrer konkreten Situation." },
    { q: "Kann Radex auch nur einzelne Teile des Bades sanieren?", a: "Ja. Nicht jede Badsanierung muss ein kompletter Neustart sein. Wenn der Grundzustand des Bades noch in Ordnung ist, können gezielte Teilmaßnahmen sinnvoller sein: eine neue bodengleiche Dusche anstelle der Badewanne, ein modernes Waschtischunterschrank, neue Armaturen oder eine zeitgemäße Beleuchtung. Radex berät Sie ehrlich, welche Maßnahmen in Ihrer Situation tatsächlich sinnvoll sind." },
    { q: "In welchen Städten bietet Radex Badsanierung an?", a: "Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Regelmäßig sind wir unter anderem in Rödermark, Frankfurt am Main, Offenbach am Main, Darmstadt, Hanau, Dreieich, Rodgau, Neu-Isenburg, Dietzenbach und Heusenstamm tätig – sowie in vielen weiteren Städten im Landkreis Offenbach, im Main-Kinzig-Kreis, im Wetteraukreis und im Raum Aschaffenburg." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Ein neues Bad – mehr als nur neue Fliesen</h3>
        <p className="mb-4 text-gray-600">Wenn Menschen über eine Badsanierung nachdenken, stellen sie sich meist zuerst das fertige Ergebnis vor: eine bodengleiche Dusche, helle Fliesen, vielleicht einen frei stehenden Waschtischunterschrank. Was dazwischen liegt – Planung, Koordination, Technik, Logistik – ist weniger sichtbar, aber entscheidend dafür, ob eine Badsanierung reibungslos verläuft oder zur Belastungsprobe wird.</p>
        <p className="mb-4 text-gray-600">Radex Objektmanagement GmbH übernimmt genau diesen Teil. Als Generalunternehmer und SHK-Meisterbetrieb mit Sitz in Rödermark koordinieren wir Badsanierungen im gesamten Rhein-Main-Gebiet – von der ersten Beratung über die Badplanung bis zur schlüsselfertigen Übergabe. Sanitär und Heizungstechnik führen wir als Meisterbetrieb selbst aus. Weitere Gewerke wie Elektro, Trockenbau, Fliesen und Innenausbau werden durch eingespielte Fachbetriebe realisiert, die wir koordinieren und verantworten.</p>
        <p className="text-gray-600">Ob Sie ein komplettes Bestandsbad entkernen und neu aufbauen möchten, Ihre Badmodernisierung gezielt auf mehr Komfort ausrichten wollen oder ein barrierefreies Bad für die nächste Lebensphase planen – Radex begleitet Ihr Projekt von Anfang bis Ende.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Badsanierung aus einer Hand – was das wirklich bedeutet</h3>
        <p className="mb-4 text-gray-600">Wer für eine Badsanierung selbst Handwerker koordiniert – Klempner, Elektriker, Fliesenleger, Trockenbauer – übernimmt de facto die Aufgabe eines Bauleiters. Terminkollisionen, Schnittstellen zwischen Gewerken und fehlende Zuarbeit sind die häufigsten Gründe, warum Badsanierungen länger dauern oder teurer werden als geplant.</p>
        <p className="mb-4 text-gray-600">Radex übernimmt diese Koordination vollständig. Als Generalunternehmer schließen Sie mit uns einen Vertrag – und wir stellen sicher, dass alle Beteiligten zum richtigen Zeitpunkt am richtigen Ort sind. Das gilt für unsere eigenen Sanitär- und Heizungsarbeiten als SHK-Meisterbetrieb ebenso wie für die koordinierten Fachbetriebe für Elektro, Trockenbau, Fliesen und Oberflächen.</p>
        <p className="text-gray-600">Was Sie davon haben: einen einzigen Ansprechpartner für alle Fragen, eine abgestimmte Planung und die Gewissheit, dass kein Gewerk auf das andere warten muss, weil die Koordination fehlt.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Von der Idee zum fertigen Bad – so arbeitet Radex</h3>
        <p className="mb-4 text-gray-600"><strong>1. Kostenlose Beratung & Bestandsaufnahme:</strong> Wir kommen zu Ihnen und schauen uns das Bad gemeinsam an. Dabei klären wir: Welche Leitungen liegen wo? Wie ist der Zustand von Abdichtung, Fliesen und Sanitärobjekten? Was möchten Sie verändern? Dieser Termin ist kostenlos und unverbindlich.</p>
        <p className="mb-4 text-gray-600"><strong>2. Planung & Materialauswahl:</strong> Auf Basis der Bestandsaufnahme entwickeln wir gemeinsam ein Konzept: Grundriss, Ausstattung, Materialien, Lichtführung. Eine gute Planung ist die Grundlage für eine verlässliche Kostenaussage.</p>
        <p className="mb-4 text-gray-600"><strong>3. Verbindliches Angebot:</strong> Sie erhalten ein konkretes, nachvollziehbares Angebot – aufgeschlüsselt nach Leistungsbereichen, ohne versteckte Positionen.</p>
        <p className="mb-4 text-gray-600"><strong>4. Ausführung & Koordination:</strong> Nach Auftragserteilung übernimmt Radex die komplette Steuerung. Rückbau, Rohinstallation, Abdichtung, Trockenbau, Elektro, Fliesen, Ausbau – alle Schritte werden in abgestimmter Reihenfolge ausgeführt.</p>
        <p className="text-gray-600"><strong>5. Übergabe:</strong> Das Bad wird vollständig fertiggestellt übergeben – sauber, geprüft, mit allen Anschlüssen in Betrieb. Wir stehen auch danach als Ansprechpartner zur Verfügung.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Badsanierung im Rhein-Main-Gebiet – wo Radex tätig ist</h3>
        <p className="mb-4 text-gray-600">Radex bietet Badsanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Der Ausgangspunkt ist Rödermark im südlichen Hessen – von dort aus sind wir regelmäßig in der gesamten Rhein-Main-Region aktiv, ohne lange Anfahrtszeiten und ohne Aufschläge für die Entfernung.</p>
        <p className="text-gray-600">Zu unseren typischen Einsatzgebieten gehören Frankfurt am Main, Offenbach am Main, Darmstadt und Hanau, aber auch die mittelgroßen Städte und Gemeinden im direkten Umland: Dreieich, Rodgau, Neu-Isenburg, Dietzenbach und Heusenstamm. Viele unserer Kunden kommen aus dem Landkreis Offenbach und den angrenzenden Landkreisen Darmstadt-Dieburg und Main-Kinzig. Wir sind aber auch regelmäßig im Wetteraukreis, im Rheingau-Taunus-Kreis und im Aschaffenburger Raum tätig.</p>
      </div>
    </>
  );

  const seo = {
    title: "Badsanierung Rhein-Main | Komplettbad zum Festpreis | Radex",
    description: "Badsanierung im Rhein-Main-Gebiet vom SHK-Meisterbetrieb: Komplettbäder, Badmodernisierung & barrierefreie Bäder aus einer Hand. Jetzt Festpreis-Beratung sichern!",
    path: "/badsanierung-rhein-main",
    serviceName: "Badsanierung"
  };

  return (
    <ServicePageTemplate
      seo={seo}
      heroData={heroData}
      whoIsForData={whoIsForData}
      typicalProjectsData={typicalProjectsData}
      costsData={costsData}
      faqsData={faqsData}
      calculatorType="bad"
      seoContent={seoContent}
    />
  );
}
