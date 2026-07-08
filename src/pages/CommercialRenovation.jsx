import ServicePageTemplate from '../components/ServicePageTemplate';

export default function CommercialRenovation() {
  const heroData = {
    title: 'Gewerbe- und Objektsanierung im',
    titleSpan: 'Rhein-Main-Gebiet',
    subtitle: 'Bestandsflächen modernisieren, ohne den Betrieb unnötig zu stören.',
    text: 'Radex koordiniert Gewerbe- und Objektsanierungen im Rhein-Main-Gebiet für Büro, Praxis, Ladenfläche und Mieterausbau. Heizung, Sanitär und Gebäudetechnik werden als SHK-Meisterbetrieb durch Bernd Knoop geführt, weitere Gewerke werden abgestimmt koordiniert.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600'
  };

  const whoIsForData = {
    title: 'Für wen Gewerbe- und Objektsanierung wichtig ist',
    subtitle: 'Wenn Flächen funktionieren müssen, zählen Planung, Zeit und saubere Schnittstellen.',
    list: [
      {
        title: 'Bürobetreiber',
        desc: 'Wenn Raumaufteilung, Akustik, Licht, Netzwerk und Arbeitsplätze neu gedacht werden müssen.'
      },
      {
        title: 'Praxisinhaber',
        desc: 'Wenn Sanitär, Hygiene, Zugänge, Wartebereiche und technische Anforderungen zusammenkommen.'
      },
      {
        title: 'Einzelhandel und Ladenflächen',
        desc: 'Wenn Kundenführung, Beleuchtung, Boden und Nutzung für den Betrieb stimmen müssen.'
      },
      {
        title: 'Vermieter und Bestandshalter',
        desc: 'Wenn Leerstand, Neuvermietung oder die Vorbereitung auf einen neuen Mieter im Vordergrund stehen.'
      },
      {
        title: 'Hausverwaltungen und Objektverantwortliche',
        desc: 'Wenn mehrere Nutzer, enge Zeitfenster und klare Kommunikation den Ablauf bestimmen.'
      }
    ]
  };

  const typicalProjectsData = {
    title: 'Typische Gewerbe- und Objektprojekte',
    subtitle: 'Jede Fläche wird nach Nutzung, Zustand und Ziel beurteilt.',
    projects: [
      { title: 'Büroumbau', desc: 'Trockenbau, Akustik, Licht, Arbeitsplätze und Raumaufteilung für neue Nutzungsanforderungen.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
      { title: 'Praxisumbau', desc: 'Raumstruktur, Sanitär, Hygiene, Wartebereiche und technische Anforderungen werden abgestimmt.', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' },
      { title: 'Ladenfläche modernisieren', desc: 'Beleuchtung, Boden, Kassenbereich, Schaufensterwirkung und Aufenthaltsqualität werden verbessert.', img: 'https://images.unsplash.com/photo-1555529771-35a1e2b05f0b?auto=format&fit=crop&q=80&w=800' },
      { title: 'Mieterausbau', desc: 'Fläche wird gezielt für den neuen Mieter vorbereitet und schlüsselfertig übergeben.', img: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800' },
      { title: 'Objektsanierung', desc: 'Mehrere Einheiten oder gemeinschaftliche Bereiche werden als Gesamtprojekt betrachtet.', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800' },
      { title: 'Sanitär und Technik', desc: 'WC-Anlagen, Teeküchen, Leitungen, Heizkörper und Elektrokoordination werden mitgedacht.', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800' }
    ]
  };

  const costsData = {
    title: 'Kosten einer Gewerbe- und Objektsanierung',
    subtitle: 'Die Kosten hängen von Fläche, Zustand, Nutzung, Zeitfenster und Fachgewerken ab.',
    items: [
      { title: 'Teilumbau', price: 'projektbezogen', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
      { title: 'Bürofläche', price: 'nach Begehung', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
      { title: 'Praxis oder Laden', price: 'individuell kalkuliert', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' },
      { title: 'Mieterausbau', price: 'objektbezogen', img: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800' }
    ]
  };

  const processData = {
    steps: [
      { number: 1, title: 'Projektanfrage', icon: <span>1</span> },
      { number: 2, title: 'Begehung vor Ort', icon: <span>2</span> },
      { number: 3, title: 'Nutzung und Ziel definieren', icon: <span>3</span> },
      { number: 4, title: 'Gewerke und Reihenfolge planen', icon: <span>4</span> },
      { number: 5, title: 'Ausführung und Übergabe', icon: <span>5</span> }
    ]
  };

  const faqsData = [
    { q: 'Was gehört zu einer Gewerbe- und Objektsanierung?', a: 'Dazu können Rückbau, Bestandsaufnahme, Innenausbau, Trockenbau, Elektro, Netzwerk, Heizung, Sanitär, Böden, Decken, Oberflächen, Brandschutzthemen, Mieterausbau und die Modernisierung gewerblicher Flächen gehören.' },
    { q: 'Für welche Gewerbeflächen arbeitet Radex?', a: 'Radex begleitet Büroflächen, Praxen, Ladenflächen, Dienstleistungsflächen, Verwaltungsbereiche, Mietflächen, gemischt genutzte Objekte und gewerbliche Bestandsflächen im Rhein-Main-Gebiet.' },
    { q: 'Was ist der Unterschied zwischen Gewerbesanierung und Objektsanierung?', a: 'Gewerbesanierung bezieht sich oft auf eine konkrete gewerbliche Fläche wie Büro, Praxis oder Laden. Objektsanierung kann größer gedacht sein und mehrere Einheiten oder gemeinschaftliche Bereiche betreffen.' },
    { q: 'Kann Radex mehrere Gewerke bei einer Objektsanierung koordinieren?', a: 'Ja. Radex koordiniert SHK, Elektro, Trockenbau, Innenausbau, Böden, Oberflächen, Rückbau und weitere Fachgewerke als Gesamtprojekt.' },
    { q: 'Kann eine Gewerbesanierung im laufenden Betrieb stattfinden?', a: 'Das hängt vom Umfang ab. Teilbereiche können häufig abschnittsweise saniert werden. Bei größeren Eingriffen kann eine temporäre Sperrung sinnvoller sein.' },
    { q: 'Was kostet eine Gewerbe- und Objektsanierung?', a: 'Die Kosten hängen von Fläche, Zustand, Nutzung, Gewerken, Technik, Materialqualität, Zeitfenster und möglicher Fachplanung ab. Ein realistisches Angebot entsteht nach Begehung.' },
    { q: 'Was ist beim Mieterausbau wichtig?', a: 'Beim Mieterausbau müssen Übergabezustand, Mietbeginn, Anforderungen des Mieters, technische Anschlüsse, Raumaufteilung, Sanitär, Elektro, Böden und Oberflächen früh geklärt werden.' },
    { q: 'Muss eine Objektsanierung genehmigt werden?', a: 'Das hängt vom Umfang ab. Wenn Nutzungsänderungen, Brandschutz, Fluchtwege, tragende Bauteile oder öffentlich zugängliche Bereiche betroffen sind, können Fachplanung oder Abstimmung nötig werden.' },
    { q: 'Arbeitet Radex auch für Hausverwaltungen?', a: 'Ja. Radex begleitet Hausverwaltungen bei der Sanierung einzelner Gewerbeeinheiten, gemeinschaftlicher Bereiche und gewerblicher Bestandsflächen.' },
    { q: 'In welchen Städten bietet Radex Gewerbe- und Objektsanierung an?', a: 'Radex ist in über 60 Städten und Gemeinden im Rhein-Main-Gebiet tätig, unter anderem in Rödermark, Eschborn, Bad Homburg, Oberursel, Neu-Isenburg, Dreieich, Langen, Darmstadt, Wiesbaden, Mainz, Hanau, Rodgau, Mörfelden-Walldorf und Groß-Gerau.' }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Gewerbeflächen müssen funktionieren</h3>
        <p className="mb-4 text-gray-600">Gewerbe- und Objektsanierung bedeutet, Flächen so zu modernisieren, dass sie im Alltag für Mitarbeiter, Kunden, Betreiber und Eigentümer zuverlässig funktionieren. Optik ist wichtig, aber ohne funktionierende Technik und Raumstruktur bleibt die Fläche problematisch.</p>
        <p className="text-gray-600">Radex koordiniert solche Projekte als Generalunternehmer im Rhein-Main-Gebiet und bringt Heizung, Sanitär und Gebäudetechnik als SHK-Meisterbetrieb mit ein.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Bestandsprüfung vor der Planung</h3>
        <p className="mb-4 text-gray-600">Gewerbliche Bestände haben oft viele Vorarbeiten und Umbauten hinter sich. Deshalb beginnt die sinnvolle Planung immer mit einer Bestandsaufnahme: Raumstruktur, Technik, Sanitär, Elektro, Oberflächen, Zugang und mögliche Schnittstellen.</p>
        <p className="text-gray-600">Erst daraus entsteht ein realistischer Sanierungsfahrplan für Büro, Praxis, Laden, Dienstleistung oder gemischt genutzte Flächen.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Mieterausbau, Betrieb und Zeitfenster</h3>
        <p className="mb-4 text-gray-600">Bei gewerblichen Projekten sind Termine oft eng. Radex plant deshalb Rückbau, Trockenbau, Technik, Oberflächen und Übergabe so, dass Leerstand, Nutzung oder laufender Betrieb möglichst wenig gestört werden.</p>
        <p className="text-gray-600">Wenn Schadstoffthemen, Brandschutz oder technische Anpassungen dazukommen, werden diese früh in die Reihenfolge integriert.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Technik und Innenausbau zusammen denken</h3>
        <p className="mb-4 text-gray-600">Elektro, Licht, Netzwerk, WC-Anlagen, Teeküchen, Heizung und Sanitär müssen zu Raumaufteilung und Nutzung passen. Wer Technik zu spät plant, riskiert fertige Flächen, die nochmals geöffnet werden müssen.</p>
        <p className="text-gray-600">Radex sorgt dafür, dass diese Schnittstellen rechtzeitig abgestimmt werden und die Fläche am Ende nutzungsgerecht übergeben werden kann.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Regionale Stärke im Rhein-Main-Gebiet</h3>
        <p className="mb-4 text-gray-600">Ob Büro in Eschborn, Praxis in Darmstadt, Objekt in Hanau oder Ladenfläche in Neu-Isenburg: Radex arbeitet regional mit Erfahrung aus über 40 Jahren und ist unter 06074 960620 gut erreichbar.</p>
        <p className="text-gray-600">Ziel ist immer eine wirtschaftlich sinnvolle und sauber koordinierte Sanierung.</p>
      </div>
    </>
  );

  const seo = {
    title: 'Gewerbesanierung Rhein-Main | Büro, Praxis & Ladenbau | Radex',
    description:
      'Gewerbe- und Objektsanierung im Rhein-Main-Gebiet: Büro, Praxis, Laden, Mieterausbau und Objektsanierung mit minimaler Betriebsunterbrechung.',
    path: '/gewerbe-objektsanierung-rhein-main',
    serviceName: 'Gewerbesanierung'
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
