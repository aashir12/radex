import ServicePageTemplate from '../components/ServicePageTemplate';

export default function GeneralContractor() {
  const heroData = {
    title: 'Generalunternehmer im',
    titleSpan: 'Rhein-Main-Gebiet',
    subtitle: 'Ein Ansprechpartner für Sanierung, Umbau und Modernisierung aus einer Hand.',
    text: 'Radex koordiniert Badsanierung, Haussanierung, Wohnungssanierung, Innenausbau, Heizung, Sanitär und Gewerbeumbau im Rhein-Main-Gebiet. Im Bereich Heizung, Sanitär und Gebäudetechnik arbeitet der Betrieb als SHK-Meisterbetrieb mit Bernd Knoop als SHK-Meister und Betriebsleiter.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1600'
  };

  const whoIsForData = {
    title: 'Für wen ein Generalunternehmer sinnvoll ist',
    subtitle: 'Sobald mehrere Gewerke, Schnittstellen oder Termine zusammenkommen, wird zentrale Koordination wertvoll.',
    list: [
      {
        title: 'Private Eigentümer nach Kauf oder Erbschaft',
        desc: 'Wenn Bad, Böden, Leitungen, Innenausbau und Technik gleichzeitig geprüft werden müssen, hilft eine klare Reihenfolge statt Einzelbeauftragung.'
      },
      {
        title: 'Vermieter und Hausverwaltungen',
        desc: 'Bei Mieterwechsel, Leerstand, Schadenfällen oder wiederkehrenden Modernisierungen zählt ein sauber abgestimmter Ablauf mit einem festen Ansprechpartner.'
      },
      {
        title: 'Bestandshalter und Projektverantwortliche',
        desc: 'Wer mehrere Maßnahmen über Zeit, Objekt oder Nutzung hinweg steuern muss, braucht einen Partner, der Zuständigkeiten und Schnittstellen fachlich ordnet.'
      },
      {
        title: 'Gewerbekunden und Betreiber',
        desc: 'Büro, Praxis, Laden oder Dienstleistungsfläche müssen während des Umbaus möglichst planbar bleiben und am Ende technisch sauber funktionieren.'
      },
      {
        title: 'Eigentümer mit komplexem Umbau',
        desc: 'Wenn eine Wand entfernt, der Grundriss verändert oder ein Haus in Etappen modernisiert werden soll, ist die Gesamtkoordination entscheidend.'
      }
    ]
  };

  const typicalProjectsData = {
    title: 'Typische Projekte als Generalunternehmer',
    subtitle: 'Radex bündelt die Gewerke, damit aus vielen Einzelarbeiten ein schlüssiges Gesamtprojekt wird.',
    projects: [
      {
        title: 'Badsanierung und Sanitärtechnik',
        desc: 'Rückbau, Rohinstallation, Abdichtung, Fliesen, Elektrokoordination und Fertigmontage aus einer Planung.',
        img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Wohnungssanierung nach Kauf',
        desc: 'Böden, Wände, Türen, Bad, Elektro, Heizkörper und Innenausbau werden aufeinander abgestimmt.',
        img: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Haussanierung vor dem Einzug',
        desc: 'Wenn mehrere Bereiche gleichzeitig modernisiert werden müssen, sorgt Radex für die richtige Reihenfolge.',
        img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Innenausbau und Raumaufteilung',
        desc: 'Wanddurchbrüche, Trockenbau, Decken, Böden und Oberflächen werden technisch und optisch sauber koordiniert.',
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Energetische Sanierung',
        desc: 'Heizung, Dämmung, Fensteranschlüsse, Lüftung und Feuchtigkeitsschutz werden als Gesamtsystem betrachtet.',
        img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Gewerbe- und Objektsanierung',
        desc: 'Büro, Praxis, Ladenfläche oder Mieterausbau mit klaren Terminen und abgestimmten Fachpartnern.',
        img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800'
      }
    ]
  };

  const costsData = {
    title: 'Wie Radex die Kosten einordnet',
    subtitle: 'Die Kosten hängen vom Objekt, vom Umfang und von den Gewerken ab. Eine Begehung ist immer die Grundlage.',
    items: [
      { title: 'Teilsanierung', price: 'projektbezogen', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800' },
      { title: 'Komplettsanierung', price: 'nach Begehung', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800' },
      { title: 'Kernsanierung', price: 'nach Objektprüfung', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800' },
      { title: 'Generalunternehmerleistung', price: 'individuell kalkuliert', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' }
    ]
  };

  const processData = {
    steps: [
      { number: 1, title: 'Erstgespräch und Zielklärung', icon: <span>1</span> },
      { number: 2, title: 'Bestandsaufnahme vor Ort', icon: <span>2</span> },
      { number: 3, title: 'Maßnahmen und Gewerke ordnen', icon: <span>3</span> },
      { number: 4, title: 'Angebot und Zeitplanung', icon: <span>4</span> },
      { number: 5, title: 'Koordinierte Umsetzung und Übergabe', icon: <span>5</span> }
    ]
  };

  const faqsData = [
    {
      q: 'Was macht ein Generalunternehmer bei einer Sanierung?',
      a: 'Ein Generalunternehmer bündelt mehrere Gewerke in einem geordneten Ablauf. Radex übernimmt dafür Bestandsaufnahme, Planung, Angebotsphase, Koordination der Fachbetriebe, Terminsteuerung und Übergabe. Für Kunden bedeutet das: ein Ansprechpartner statt vieler einzelner Handwerkertermine.'
    },
    {
      q: 'Wann lohnt sich ein Generalunternehmer?',
      a: 'Sobald mehrere Gewerke zusammenkommen, ist ein Generalunternehmer meist sinnvoll. Das gilt etwa für Badsanierung, Wohnungssanierung, Haussanierung, Komplett- oder Kernsanierung, Altbauprojekte, Heizungsmodernisierung, Innenausbau oder Gewerbeumbau.'
    },
    {
      q: 'Ist Radex selbst ein SHK-Meisterbetrieb?',
      a: 'Ja. Im Bereich Heizung, Sanitär und Gebäudetechnik ist Radex meistergeführt durch Bernd Knoop als SHK-Meister und Betriebsleiter. Sanitärinstallation, Wasser, Abwasser, Heizung und technische Gebäudekomponenten werden fachlich verantwortet.'
    },
    {
      q: 'Führt Radex Elektroarbeiten selbst aus?',
      a: 'Elektroarbeiten werden durch qualifizierte Elektrofachpartner ausgeführt. Radex koordiniert diese Leistungen so, dass Steckdosen, Licht, Badtechnik, Küchenanschlüsse, Sicherungskasten und Netzwerktechnik rechtzeitig in die Sanierung eingeplant werden.'
    },
    {
      q: 'Kann Radex auch nur einen Teil eines Projekts koordinieren?',
      a: 'Ja. Wenn mehrere Gewerke oder technische Schnittstellen beteiligt sind, kann Radex auch eine Teilsanierung oder einen einzelnen Projektabschnitt koordinieren. Entscheidend ist immer, was zum Objekt und zum Ziel passt.'
    },
    {
      q: 'Was ist der Unterschied zwischen Komplettsanierung und Kernsanierung?',
      a: 'Eine Komplettsanierung umfasst mehrere zentrale Bereiche einer Immobilie, etwa Bad, Böden, Wände, Türen, Elektrokoordination und Innenausbau. Eine Kernsanierung geht tiefer und kann Rückbau, Leitungen, Installationen, Innenwände, Decken und energetische Bauteile betreffen.'
    },
    {
      q: 'Was passiert, wenn während der Sanierung Schadstoffe entdeckt werden?',
      a: 'Dann muss der Befund fachlich eingeordnet werden, bevor weitergearbeitet wird. Radex ist zertifiziert für Schimmel- und Asbestsanierung und verfügt über Sachkunde nach TRGS 519, sodass solche Themen in den Ablauf integriert werden können.'
    },
    {
      q: 'Wie früh sollte ich Radex kontaktieren?',
      a: 'Am besten vor der Beauftragung einzelner Gewerke. Je früher Radex das Objekt kennt, desto sauberer lassen sich Reihenfolge, Kostenrahmen, Fachpartner und technische Schnittstellen planen.'
    }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Generalunternehmer für Sanierung aus Rödermark</h3>
        <p className="mb-4 text-gray-600">Radex Objektmanagement GmbH begleitet Sanierungsprojekte im Rhein-Main-Gebiet als Generalunternehmer. Der Betrieb sitzt in Rödermark und arbeitet regional mit kurzen Abstimmungswegen, klaren Zuständigkeiten und viel Erfahrung im Bestand.</p>
        <p className="text-gray-600">Im Bereich Heizung, Sanitär und Gebäudetechnik ist Radex als SHK-Meisterbetrieb durch Bernd Knoop geführt. Weitere Gewerke wie Elektro, Trockenbau, Fliesen, Maler, Boden und Innenausbau werden über eingespielte Fachpartner koordiniert.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Warum die Koordination entscheidend ist</h3>
        <p className="mb-4 text-gray-600">Die meisten Sanierungsfehler entstehen nicht durch ein einzelnes Gewerk, sondern durch fehlende Abstimmung. Wenn Abdichtung, Leitungen, Boden, Elektro und Oberflächen nicht in der richtigen Reihenfolge laufen, entstehen Nacharbeiten und Verzögerungen.</p>
        <p className="text-gray-600">Radex sorgt dafür, dass technische und handwerkliche Themen früh zusammengeführt werden. So wird aus vielen Einzelleistungen ein strukturiertes Gesamtprojekt mit einem klaren Ansprechpartner.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Wann ein Generalunternehmer sinnvoll ist</h3>
        <p className="mb-4 text-gray-600">Sinnvoll ist eine Generalunternehmerlösung vor allem dann, wenn mehrere Gewerke ineinandergreifen. Typisch sind Sanierungen nach Kauf, Modernisierungen vor Einzug, Bäder, Wohnungen, Häuser, Altbauten, energetische Projekte und gewerbliche Flächen.</p>
        <p className="text-gray-600">Auch Vermieter und Hausverwaltungen profitieren, wenn Leerstand, Übergabetermine und technische Abstimmung zusammenkommen. Dann braucht es nicht mehr einzelne Beauftragungen, sondern einen Partner, der den Ablauf steuert.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Welche Leistungen Radex als GU koordiniert</h3>
        <p className="mb-4 text-gray-600">Radex übernimmt die Einschätzung des Bestands, die Einordnung technischer Schnittstellen, die Abstimmung von Bad, Heizung, Sanitär, Elektro und Innenausbau, die Angebotsphase und die laufende Koordination während der Ausführung.</p>
        <p className="text-gray-600">Wichtig ist dabei auch die Frage, welche Themen zusammengehören und welche später schwer nachzuholen wären. Deshalb wird nicht nur nach Optik geplant, sondern nach sinnvoller Reihenfolge.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Rhein-Main, 40+ Jahre Erfahrung und klare Erreichbarkeit</h3>
        <p className="mb-4 text-gray-600">Radex arbeitet seit über 40 Jahren im Rhein-Main-Gebiet mit Schwerpunkt auf Sanierung, Umbau und Gebäudetechnik. Der direkte Kontakt läuft unter 06074 960620 oder über den Kontaktbereich.</p>
        <p className="text-gray-600">Ob Eigentümer, Käufer, Vermieter oder Gewerbekunde: Ziel ist eine Sanierung, die fachlich sauber geführt wird und am Ende im Alltag funktioniert.</p>
      </div>
    </>
  );

  const seo = {
    title: 'Generalunternehmer Rhein-Main | Sanierung aus einer Hand | Radex',
    description:
      'Generalunternehmer im Rhein-Main-Gebiet: ein Ansprechpartner, klare Koordination, SHK-Meisterbetrieb, 40+ Jahre Erfahrung und Sanierung aus einer Hand.',
    path: '/generalunternehmer-rhein-main',
    serviceName: 'Generalunternehmer'
  };

  return (
    <ServicePageTemplate
      seo={seo}
      heroData={heroData}
      whoIsForData={whoIsForData}
      typicalProjectsData={typicalProjectsData}
      projectsData={false}
      costsData={costsData}
      processData={processData}
      faqsData={faqsData}
      seoContent={seoContent}
    />
  );
}
