import ServicePageTemplate from '../components/ServicePageTemplate';

export default function EnergyEfficientRenovation() {
  const heroData = {
    title: 'Energetische Sanierung',
    titleSpan: 'Rhein-Main',
    subtitle: 'Heizkosten senken, Wohnkomfort verbessern und Gebäude sinnvoll modernisieren.',
    text: 'Radex koordiniert energetische Sanierungen im Rhein-Main-Gebiet mit Blick auf Heizung, Dämmung, Fenster, Lüftung, Feuchtigkeit und Innenausbau. Im Bereich Heizung, Sanitär und Gebäudetechnik arbeitet der Betrieb als SHK-Meisterbetrieb mit Bernd Knoop als Meister und Betriebsleiter.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600'
  };

  const whoIsForData = {
    title: 'Für wen energetische Sanierung sinnvoll ist',
    subtitle: 'Energieeffizienz ist immer dann ein Thema, wenn Gebäudehülle und Haustechnik nicht mehr zusammenpassen.',
    list: [
      {
        title: 'Eigentümer älterer Häuser',
        desc: 'Wer hohe Heizkosten, Zugluft oder alte Heiztechnik hat, kann mit einer strukturierten energetischen Sanierung dauerhaft verbessern.'
      },
      {
        title: 'Käufer vor dem Einzug',
        desc: 'Vor Einzug lassen sich Heizung, Dämmung, Fensteranschlüsse, Lüftung und Innenausbau noch sinnvoll bündeln.'
      },
      {
        title: 'Vermieter und Bestandshalter',
        desc: 'Wer eine Immobilie wirtschaftlich modernisieren will, braucht eine Reihenfolge, die Kosten, Leerstand und Zukunftssicherheit zusammenbringt.'
      },
      {
        title: 'Eigentümer mit Feuchtigkeit oder Schimmel',
        desc: 'Wenn warme Oberflächen, Lüftung und Feuchtigkeitsverhalten nicht zusammenpassen, sollte die Ursache vor weiteren Maßnahmen geklärt werden.'
      },
      {
        title: 'Sanierer mit Förderinteresse',
        desc: 'Förderprogramme können attraktiv sein, müssen aber vor Auftragsvergabe und immer aktuell geprüft werden.'
      }
    ]
  };

  const typicalProjectsData = {
    title: 'Typische Maßnahmen der energetischen Sanierung',
    subtitle: 'Radex betrachtet das Gebäude immer als Gesamtsystem und nicht als einzelne Baustelle.',
    projects: [
      { title: 'Heizungsmodernisierung', desc: 'Alte Heizungen, ineffiziente Regelung und ungeeignete Heizflächen werden gemeinsam bewertet.', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800' },
      { title: 'Wärmepumpe im Bestand', desc: 'Aufstellort, Vorlauftemperatur, Heizkörper, Schallschutz und Elektroanschluss werden zusammen geprüft.', img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&q=80&w=800' },
      { title: 'Dämmung von Dach, Fassade und Kellerdecke', desc: 'Bauteile werden nach Nutzung, Feuchteverhalten und bauphysikalischer Logik eingeordnet.', img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800' },
      { title: 'Fenster und Anschlüsse', desc: 'Neue Fenster beeinflussen Wärme, Luftaustausch und Schimmelrisiko und müssen sauber angeschlossen werden.', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' },
      { title: 'Lüftung und Feuchtigkeitsschutz', desc: 'Bäder, Schlafzimmer, Keller und dichte Gebäude brauchen ein abgestimmtes Lüftungskonzept.', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' },
      { title: 'Bad und Innenausbau mitdenken', desc: 'Heizkörper, Warmwasser, Lüfter und Oberflächen werden bei Sanierungen früh mitgeplant.', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800' }
    ]
  };

  const costsData = {
    title: 'Kosten einer energetischen Sanierung',
    subtitle: 'Die Kosten hängen von Gebäudezustand, Maßnahmen, Förderfähigkeit und Ausbauumfang ab.',
    items: [
      { title: 'Einzelmaßnahme', price: 'ab 10.000 €', img: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800' },
      { title: 'Heizungstausch', price: 'ab 20.000 €', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
      { title: 'Umfassende Sanierung', price: 'ab 80.000 €', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
      { title: 'Förderberatung', price: 'projektbezogen', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800' }
    ]
  };

  const processData = {
    steps: [
      { number: 1, title: 'Ziel und Objekt klären', icon: <span>1</span> },
      { number: 2, title: 'Bestandsaufnahme', icon: <span>2</span> },
      { number: 3, title: 'Maßnahmen einordnen', icon: <span>3</span> },
      { number: 4, title: 'Förder- und Fachfragen prüfen', icon: <span>4</span> },
      { number: 5, title: 'Umsetzung und Abstimmung', icon: <span>5</span> },
      { number: 6, title: 'Übergabe und Nachbetreuung', icon: <span>6</span> }
    ]
  };

  const faqsData = [
    { q: 'Was gehört zu einer energetischen Sanierung?', a: 'Zur energetischen Sanierung können Heizungsmodernisierung, Wärmepumpe, Dämmung von Dach, Fassade oder Kellerdecke, Fenster, Lüftung, Heizungsoptimierung, Warmwasser, Schimmelvermeidung, Badsanierung und Innenausbau gehören.' },
    { q: 'Wann lohnt sich eine energetische Sanierung?', a: 'Besonders sinnvoll ist sie bei hohen Heizkosten, alter Heizung, schlecht gedämmten Bauteilen, kalten Räumen, Zugluft, Schimmel, Feuchtigkeit oder wenn ohnehin eine größere Sanierung nach Kauf oder vor Einzug geplant ist.' },
    { q: 'Muss immer das ganze Haus energetisch saniert werden?', a: 'Nein. Manchmal reichen einzelne Maßnahmen, in anderen Fällen ist eine umfassendere Sanierung sinnvoll. Entscheidend sind Bestandsaufnahme und die richtige Reihenfolge.' },
    { q: 'Gibt es Förderung für energetische Sanierung?', a: 'Ja, aber Förderfähigkeit, technische Anforderungen und Antragszeitpunkt müssen immer aktuell geprüft werden. Förderung ist ein wichtiger Faktor, aber keine Garantie.' },
    { q: 'Kann Radex Förderanträge garantieren?', a: 'Nein. Radex kann Sanierungsmaßnahmen koordinieren und Förderthemen im Ablauf berücksichtigen. Die konkrete Förderzusage hängt vom jeweiligen Programm und den aktuellen Bedingungen ab.' },
    { q: 'Ist eine Wärmepumpe im Bestand sinnvoll?', a: 'Das hängt vom Gebäude ab. Dämmstandard, Heizkörper, Vorlauftemperatur, Warmwasserbedarf, Aufstellort und Elektroanschluss müssen zusammen bewertet werden.' },
    { q: 'Warum ist Lüftung bei energetischer Sanierung wichtig?', a: 'Wenn Gebäude dichter werden, verändert sich der Luftaustausch. Feuchtigkeit muss zuverlässig abgeführt werden, damit kein Schimmel entsteht.' },
    { q: 'Kann Radex energetische Sanierung aus einer Hand koordinieren?', a: 'Ja. Radex koordiniert Heizung, Sanitär, Innenausbau, Badsanierung, Schadstoffthemen und qualifizierte Elektrofachpartner.' }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Energetische Sanierung als Gesamtsystem</h3>
        <p className="mb-4 text-gray-600">Energetische Sanierung ist mehr als ein Gerätetausch. Gebäudehülle, Heizung, Warmwasser, Lüftung, Feuchtigkeitsschutz und Innenausbau müssen zusammenpassen, damit sich Maßnahmen wirklich lohnen.</p>
        <p className="text-gray-600">Radex koordiniert die handwerklichen Schnittstellen und bringt die SHK-Meisterkompetenz von Bernd Knoop in Heizung, Sanitär und Gebäudetechnik ein.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Warum Bestandsgebäude sorgfältig geplant werden müssen</h3>
        <p className="mb-4 text-gray-600">Bestandsobjekte haben alte Leitungen, unterschiedliche Modernisierungsstände und oft mehrere Schichten. Wer nur die Heizung oder nur Fenster betrachtet, kann wichtige Zusammenhänge übersehen.</p>
        <p className="text-gray-600">Eine gute Bestandsaufnahme klärt, was dringend ist, was sinnvoll ist und was später folgen kann. So wird die Reihenfolge technisch sinnvoll und wirtschaftlich nachvollziehbar.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Heizung, Dämmung und Wärmepumpe</h3>
        <p className="mb-4 text-gray-600">Die Heizungsmodernisierung ist oft der Ausgangspunkt. Für Wärmepumpen sind Vorlauftemperatur, Heizflächen, Aufstellort und Schallschutz genauso wichtig wie die Frage, wie gut die Gebäudehülle vorbereitet ist.</p>
        <p className="text-gray-600">Dämmmaßnahmen an Dach, Fassade oder Kellerdecke müssen bauphysikalisch passen. Feuchtigkeit, Anschlüsse und Lüftung dürfen dabei nicht aus dem Blick geraten.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Feuchtigkeit, Lüftung und Schimmel mitdenken</h3>
        <p className="mb-4 text-gray-600">Wenn Gebäude dichter werden, verändert sich das Raumklima. Besonders Bäder, Küchen, Schlafzimmer und Keller müssen deshalb im Zusammenhang mit Lüftung und Feuchte beurteilt werden.</p>
        <p className="text-gray-600">Radex ist zertifiziert für Schimmel- und Asbestsanierung und verfügt über TRGS-519-Sachkunde, sodass auch Schadstoffthemen im Ablauf fachlich eingeordnet werden können.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Förderung und regionale Erreichbarkeit</h3>
        <p className="mb-4 text-gray-600">Förderprogramme können die Wirtschaftlichkeit verbessern, müssen aber vor Beginn und immer aktuell geprüft werden. Radex ersetzt keine Förderzusage, kann das Thema aber im Sanierungsablauf mitdenken.</p>
        <p className="text-gray-600">Für eine erste Einschätzung unter 06074 960620 oder über den Kontaktbereich ist Radex im gesamten Rhein-Main-Gebiet erreichbar.</p>
      </div>
    </>
  );

  const seo = {
    title: 'Energetische Sanierung Rhein-Main | Förderung & Wärmepumpe | Radex',
    description:
      'Energetische Sanierung im Rhein-Main-Gebiet: Dämmung, Fenster, Wärmepumpe, Lüftung und Förderung aus einer Hand.',
    path: '/energetische-sanierung-rhein-main',
    serviceName: 'Energetische Sanierung'
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
