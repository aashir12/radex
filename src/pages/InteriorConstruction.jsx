import ServicePageTemplate from '../components/ServicePageTemplate';

export default function InteriorConstruction() {
  const heroData = {
    title: 'Innenausbau & Umbau im',
    titleSpan: 'Rhein-Main-Gebiet',
    subtitle: 'Räume neu ordnen, Technik sauber integrieren und Bestandsflächen sinnvoll modernisieren.',
    text: 'Radex koordiniert Innenausbau- und Umbauprojekte als Generalunternehmer im Rhein-Main-Gebiet: Raumaufteilung, Trockenbau, Böden, Wände, Decken, Türen, Elektro, Heizung und Sanitär aus einer Hand.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600'
  };

  const whoIsForData = {
    title: 'Für wen Innenausbau und Umbau sinnvoll ist',
    subtitle: 'Immer dann, wenn Grundriss, Nutzung oder Technik nicht mehr zu den heutigen Anforderungen passen.',
    list: [
      {
        title: 'Eigentümer von Wohnungen',
        desc: 'Wenn Böden, Türen, Wände, Licht oder Raumaufteilung erneuert werden sollen, braucht es einen sauber geplanten Innenausbau.'
      },
      {
        title: 'Eigentümer von Häusern',
        desc: 'Bei Häusern kommen oft mehrere Ebenen, Haustechnik, Dachgeschoss, Keller und spätere Erweiterungen zusammen.'
      },
      {
        title: 'Käufer vor dem Einzug',
        desc: 'Wer eine Immobilie nach dem Kauf modernisiert, kann Innenausbau, Bad, Elektro und Technik in einer sinnvollen Reihenfolge bündeln.'
      },
      {
        title: 'Vermieter und Bestandshalter',
        desc: 'Für Neuvermietung, Leerstand oder Modernisierung im Bestand sind klare Bauabschnitte und kurze Stillstandszeiten entscheidend.'
      },
      {
        title: 'Gewerbliche Nutzer',
        desc: 'Auch Büros, Praxen und Dienstleistungsflächen profitieren von besserer Raumstruktur, Trockenbau, Licht und technisch sauberer Planung.'
      }
    ]
  };

  const typicalProjectsData = {
    title: 'Typische Leistungen beim Innenausbau und Umbau',
    subtitle: 'Die Maßnahmen werden immer objektbezogen und in der richtigen Reihenfolge geplant.',
    projects: [
      {
        title: 'Raumaufteilung und Grundriss',
        desc: 'Offenere Wohnbereiche, neue Zimmerzuschnitte, bessere Flure oder ein zusätzliches Homeoffice.',
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Trockenbau',
        desc: 'Neue Trennwände, abgehängte Decken, Vorwände und Installationsflächen für Leitungen und Technik.',
        img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Böden',
        desc: 'Parkett, Designbelag, Vinyl, Fliesen oder andere Bodenlösungen mit sauberer Untergrundvorbereitung.',
        img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Wände und Decken',
        desc: 'Spachteln, Verputzen, Streichen, Verkleiden und fachgerechte Vorbereitung der Oberflächen.',
        img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Türen und Zargen',
        desc: 'Neue Innentüren, passende Zargen und saubere Anschlüsse für einen stimmigen Gesamteindruck.',
        img: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800'
      },
      {
        title: 'Technik im Innenausbau',
        desc: 'Elektro, Licht, Heizung und Sanitär werden früh mitgedacht und mit dem Ausbau abgestimmt.',
        img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
      }
    ]
  };

  const costsData = {
    title: 'Kosten für Innenausbau und Umbau',
    subtitle: 'Die Kosten hängen stark von Fläche, Zustand, Technik und Umfang ab. Die Angaben dienen nur der Orientierung.',
    items: [
      { title: 'Trockenbauwand', price: 'ab 60 € / m²', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' },
      { title: 'Malerarbeiten', price: 'ab 15 € / m²', img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800' },
      { title: 'Bodenverlegung', price: 'ab 40 € / m²', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800' },
      { title: 'Wanddurchbruch', price: 'projektbezogen', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800' }
    ]
  };

  const processData = {
    steps: [
      { number: 1, title: 'Projektanfrage', icon: <span>1</span> },
      { number: 2, title: 'Begehung und Bestandsaufnahme', icon: <span>2</span> },
      { number: 3, title: 'Ziele und Umfang klären', icon: <span>3</span> },
      { number: 4, title: 'Gewerke und Reihenfolge planen', icon: <span>4</span> },
      { number: 5, title: 'Umsetzung und Übergabe', icon: <span>5</span> }
    ]
  };

  const faqsData = [
    {
      q: 'Was gehört zum Innenausbau bei einer Sanierung?',
      a: 'Zum Innenausbau gehören Böden, Wände, Decken, Türen, Zargen, Trockenbau, Raumaufteilung, Oberflächen, Beleuchtung, Elektro, Heizung, Sanitär und alle Arbeiten, die das Innere einer Wohnung oder eines Hauses nutzbar und fertig machen.'
    },
    {
      q: 'Wann lohnt sich ein Umbau im Bestand?',
      a: 'Ein Umbau lohnt sich, wenn die Substanz grundsätzlich gut ist, aber Grundriss, Technik, Böden, Wände oder Ausstattung nicht mehr zur heutigen Nutzung passen. Besonders nach Kauf, vor Einzug oder bei veränderten Wohnbedürfnissen ist das oft sinnvoll.'
    },
    {
      q: 'Was ist der Unterschied zwischen Innenausbau und Sanierung?',
      a: 'Innenausbau betrifft vor allem den inneren Ausbau mit Wänden, Böden, Decken, Türen und technischer Integration. Sanierung ist breiter und kann zusätzlich Bad, Heizung, Leitungen, Fenster, Energie oder Schadstoffe betreffen.'
    },
    {
      q: 'Kann Radex Raumaufteilung und Trockenbau mitplanen?',
      a: 'Ja. Radex koordiniert neue Raumaufteilungen, Trockenbauwände, abgehängte Decken, Vorsatzschalen, Schallschutz und Wandöffnungen. Vor Eingriffen in vorhandene Wände wird geprüft, ob Tragwerk, Leitungen oder Fachplanung betroffen sind.'
    },
    {
      q: 'Kann eine Wand einfach entfernt werden?',
      a: 'Nein. Vor einem Wanddurchbruch müssen Statik, Leitungsführung, Deckenanschluss, Bodenanschluss und mögliche Genehmigungsfragen geprüft werden. Erst danach lässt sich eine sichere und sinnvolle Lösung planen.'
    },
    {
      q: 'Wie koordiniert Radex Innenausbau, Elektro und Sanitär?',
      a: 'Radex plant die Gewerke in der richtigen Reihenfolge. Elektro, SHK und Leitungen werden vor Trockenbau, Böden und Oberflächen berücksichtigt. Im SHK-Bereich bringt Radex die Meisterkompetenz von Bernd Knoop ein.'
    },
    {
      q: 'Kann Innenausbau im bewohnten Objekt stattfinden?',
      a: 'Das hängt vom Umfang ab. Einzelne Räume oder Etappen sind oft möglich. Wenn Bad, Küche, Elektro, Heizung oder größere Rückbauarbeiten betroffen sind, kann eine temporäre Ausweichlösung sinnvoller sein.'
    },
    {
      q: 'Was kostet Innenausbau im Rhein-Main-Gebiet?',
      a: 'Die Kosten hängen von Umfang, Zustand, Technik, Materialien und beteiligten Gewerken ab. Ein realistisches Angebot entsteht erst nach Begehung und klarer Leistungsabstimmung.'
    },
    {
      q: 'Bietet Radex Innenausbau für Wohnungen und Häuser an?',
      a: 'Ja. Radex koordiniert Innenausbau für Eigentumswohnungen, Altbauwohnungen, Einfamilienhäuser, Doppelhaushälften, Reihenhäuser und Bestandshäuser im Rhein-Main-Gebiet.'
    }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Innenausbau im Bestand braucht Bestandswissen</h3>
        <p className="mb-4 text-gray-600">Im Bestand geht es selten nur um neue Oberflächen. Innenausbau bedeutet meist, die innere Struktur einer Immobilie sinnvoll an die heutige Nutzung anzupassen. Dazu gehören Raumaufteilung, Licht, Technik, Böden, Türen, Oberflächen und die richtige Reihenfolge der Gewerke.</p>
        <p className="text-gray-600">Radex arbeitet im Rhein-Main-Gebiet als Generalunternehmer und führt Heizung, Sanitär und Gebäudetechnik als SHK-Meisterbetrieb mit Bernd Knoop als SHK-Meister und Betriebsleiter ein.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Warum die Bestandsaufnahme so wichtig ist</h3>
        <p className="mb-4 text-gray-600">Hinter Wänden können alte Leitungen liegen, unter Böden mehrere Schichten, und frühere Umbauten verändern die heutige Ausgangslage. Deshalb beginnt ein gutes Innenausbauprojekt immer mit einer realistischen Begehung.</p>
        <p className="text-gray-600">So lassen sich Risiken wie Feuchtigkeit, unklare Wandaufbauten, alte Kleber, Leitungen oder mögliche Schadstoffthemen früh erkennen und in die Planung einordnen.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Typische Arbeiten beim Umbau</h3>
        <p className="mb-4 text-gray-600">Trockenbau, Raumaufteilung, Böden, Wände, Decken, Türen und technische Anpassungen gehören oft zusammen. Eine neue Wand braucht etwa Boden-, Decken- und Elektroanschlüsse. Ein neuer Boden muss mit Sockelleisten, Türen und Nutzungsanforderungen passen.</p>
        <p className="text-gray-600">Radex koordiniert diese Arbeiten so, dass Technik vor Oberfläche und Funktion vor reiner Optik kommt.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Umbau im bewohnten Bestand</h3>
        <p className="mb-4 text-gray-600">Nicht jedes Projekt findet im Leerstand statt. Wenn Eigentümer während der Arbeiten im Objekt wohnen, müssen Bauabschnitte, Staubschutz, Zugang, Lärm und Nutzung sauber organisiert werden.</p>
        <p className="text-gray-600">Radex spricht solche Rahmenbedingungen offen an und bewertet realistisch, ob eine Etappensanierung oder eine größere Maßnahme sinnvoller ist.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Rhein-Main, 40+ Jahre Erfahrung und klare Ansprechpartner</h3>
        <p className="mb-4 text-gray-600">Radex begleitet Innenausbau- und Umbauprojekte in über 60 Städten und Gemeinden im Rhein-Main-Gebiet. Der Standort Rödermark liegt zentral im Einsatzgebiet.</p>
        <p className="text-gray-600">Für eine erste Einschätzung reicht oft ein Gespräch unter 06074 960620 oder über den Kontaktbereich.</p>
      </div>
    </>
  );

  const seo = {
    title: 'Innenausbau & Umbau Rhein-Main | Trockenbau & Böden | Radex',
    description:
      'Innenausbau und Umbau im Rhein-Main-Gebiet: Raumaufteilung, Trockenbau, Böden, Türen, Elektro, Heizung und Sanitär aus einer Hand.',
    path: '/innenausbau-umbau-rhein-main',
    serviceName: 'Innenausbau & Umbau'
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
