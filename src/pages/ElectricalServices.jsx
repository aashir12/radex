import ServicePageTemplate from '../components/ServicePageTemplate';

export default function ElectricalServices() {
  const heroData = {
    title: "Elektroinstallation im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Elektrofachpartner koordiniert einbinden – bei Sanierung, Bad, Küche, Altbau, Wärmepumpe und Gewerbe.",
    text: "Eine moderne Elektroinstallation ist ein zentraler Bestandteil jeder Sanierung. Radex stimmt die Elektroarbeiten früh mit allen Gewerken ab; die Ausführung erfolgt durch qualifizierte Elektrofachbetriebe, koordiniert von Radex im gesamten Rhein-Main-Gebiet.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Elektroinstallation bei verschiedenen Sanierungstypen",
    subtitle: "Früh geplant – damit Elektro nicht nachträglich in fertige Räume gedrückt werden muss.",
    list: [
      { title: "Bei der Badsanierung", desc: "Elektro muss exakt mit Sanitär, Abdichtung, Fliesen, Lüftung und Badmöbeln abgestimmt werden – Licht, Spiegelanschluss, Steckdosen und sichere Nassbereiche." },
      { title: "Bei der Küche", desc: "Stromkreise, Geräteanschlüsse, Arbeitsflächenbeleuchtung und Steckdosen müssen vor der Küchenmontage geplant sein." },
      { title: "Bei der Wohnungssanierung", desc: "Steckdosen, Licht, Netzwerk, Küche, Bad und Sicherungskasten werden bewertet, bevor Wände und Böden fertig sind." },
      { title: "Bei der Haussanierung", desc: "Elektro wird mit Heizung, Sanitär, Innenausbau, Raumaufteilung, energetischen Maßnahmen und möglicher Wärmepumpe zusammengedacht." }
    ]
  };

  const typicalProjectsData = {
    title: "Elektro-Themen, die wir koordinieren",
    subtitle: "Von der einzelnen Steckdose bis zur kompletten Elektroerneuerung im Bestand.",
    projects: [
      { title: "Sicherungskasten & Unterverteilung", desc: "Prüfung, ob die vorhandene Unterverteilung noch zu Küche, Bad, Wärmepumpe, Wallbox und modernen Stromkreisen passt.", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" },
      { title: "Altbau-Elektrik erneuern", desc: "Alte Leitungen, veraltete Sicherungen, fehlende Schutzschalter und zu wenige Stromkreise werden fachlich geprüft, wenn Wände ohnehin offen sind.", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" },
      { title: "Netzwerk & Smart Home", desc: "Netzwerk für Homeoffice und Medien, Lichtsteuerung, Rollläden und Komfortfunktionen – früh vorbereitet statt aufwendig nachgerüstet.", img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800" },
      { title: "Wärmepumpe & Wallbox", desc: "Stromversorgung, Regeltechnik und Aufstellort für Wärmepumpen sowie Ladevorbereitung für E-Mobilität – mit der Heizungsmodernisierung abgestimmt.", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800" },
      { title: "Gewerbe & Büro", desc: "Arbeitsplätze, Datentechnik, Beleuchtung, Teeküche und Kundenbereiche – bei Büroumbau, Praxis, Ladenumbau und Mieterausbau.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten der Elektroinstallation",
    subtitle: "Die Kosten hängen stark vom Umfang ab – nach der Bestandsaufnahme erstellen wir ein nachvollziehbares Angebot.",
    items: [
      { title: "Sicherungskasten erneuern", price: "ab €2.500", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" },
      { title: "Wallbox-Installation", price: "ab €1.200", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800" },
      { title: "Komplette Elektroerneuerung", price: "ab €10.000", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Führt Radex Elektroarbeiten selbst aus?", a: "Elektroarbeiten werden durch qualifizierte Elektrofachbetriebe ausgeführt. Radex koordiniert diese Fachpartner im Rahmen der Sanierung und stimmt Elektro mit Heizung, Sanitär, Innenausbau, Bad, Küche und weiteren Gewerken ab. Im Bereich Heizung, Sanitär und Gebäudetechnik ist Radex durch Bernd Knoop SHK-meistergeführt." },
    { q: "Wann sollte Elektro bei einer Sanierung geplant werden?", a: "Elektro sollte sehr früh geplant werden, bevor Wände geschlossen, Fliesen gesetzt, Böden verlegt oder Küchen eingebaut werden. Spätere Änderungen sind deutlich aufwendiger, weil fertige Oberflächen wieder geöffnet werden müssen." },
    { q: "Was ist bei Elektro im Bad wichtig?", a: "Im Bad müssen Sicherheitsbereiche (Schutzzonen), Licht, Steckdosen, Spiegelanschlüsse, Lüfter und Badtechnik fachgerecht geplant und mit Sanitär, Abdichtung und Fliesen abgestimmt werden. Gerade in kleinen Bädern ist die frühe Planung entscheidend." },
    { q: "Sollte der Sicherungskasten bei einer Sanierung geprüft werden?", a: "Ja. Besonders bei älteren Immobilien, einer neuen Küche, Wärmepumpe, Wallbox-Vorbereitung, Badsanierung oder umfassender Sanierung sollte geprüft werden, ob die vorhandene Unterverteilung noch zu den heutigen Anforderungen passt. Moderne Geräte und zusätzliche Stromkreise bringen eine ältere Struktur schnell an Grenzen." },
    { q: "Kann die Elektrik bei einer Altbausanierung erneuert werden?", a: "Ja. Bei Altbau- oder Kernsanierung sollte die Elektrostruktur fachlich geprüft werden – alte Leitungen, Unterverteilungen, Stromkreise und Steckdosen passen oft nicht mehr zur heutigen Nutzung. Wenn Wände und Böden ohnehin geöffnet werden, ist der richtige Zeitpunkt dafür. Bei Verdacht auf Schadstoffe ist Radex nach TRGS 519 zertifiziert." },
    { q: "Was kostet Elektroinstallation bei einer Sanierung?", a: "Die Kosten hängen vom Umfang ab: einzelne Steckdosen, Küche, Bad, Sicherungskasten, Netzwerk, Altbau-Elektrik oder eine komplette Elektroerneuerung unterscheiden sich stark. Nach einer Bestandsaufnahme kann ein nachvollziehbares Angebot erstellt werden." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Elektrokoordination bei Sanierungen</h3>
        <p className="mb-4 text-gray-600">Eine moderne Elektroinstallation ist ein zentraler Bestandteil jeder Sanierung. Sie entscheidet darüber, ob ein Haus, eine Wohnung, ein Bad, eine Küche, ein Büro oder eine Gewerbefläche im Alltag wirklich funktioniert. Licht, Steckdosen, Sicherungskasten, Stromkreise, Netzwerk, Badtechnik, Lüftung, Smart-Home-Vorbereitung, Homeoffice, Außenbereiche, Ladeinfrastruktur und Gebäudetechnik müssen früh geplant werden. Wer Elektro erst dann berücksichtigt, wenn Wände geschlossen, Fliesen gesetzt oder Böden verlegt sind, riskiert unnötige Nacharbeiten.</p>
        <p className="mb-4 text-gray-600">Die Radex Objektmanagement GmbH aus Rödermark begleitet Sanierungen im Rhein-Main-Gebiet mit gewerkeübergreifender Koordination. Elektroarbeiten werden durch qualifizierte Elektrofachbetriebe ausgeführt und von Radex in den Sanierungsablauf eingebunden. Radex selbst ist im Bereich Heizung, Sanitär und Gebäudetechnik SHK-meistergeführt durch Bernd Knoop, SHK-Meister und Betriebsleiter.</p>
        <p className="text-gray-600">Gerade bei Sanierungen im Bestand ist Elektrokoordination besonders wichtig. Viele Immobilien wurden zu einer Zeit geplant, in der der elektrische Bedarf deutlich geringer war. Heute brauchen Eigentümer mehr Steckdosen, mehr Lichtpunkte, bessere Küchenanschlüsse, sichere Badtechnik, Netzwerk für Homeoffice, Ladevorbereitung und teilweise smarte Gebäudefunktionen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Warum Elektroinstallation früh geplant werden muss</h3>
        <p className="mb-4 text-gray-600">Elektroinstallation gehört zu den Gewerken, die später oft nicht sichtbar sind, aber täglich genutzt werden. Leitungen liegen in Wänden, Decken oder Böden. Eine neue Küche braucht eigene Stromkreise für Kochfeld, Backofen, Spülmaschine, Kühlschrank, Dunstabzug, Arbeitsflächensteckdosen und Beleuchtung. Ein Bad braucht geschützte Elektrobereiche, Spiegelanschlüsse, Lüfter und Steckdosen. Ein Homeoffice braucht Netzwerk und ausreichend Steckdosen. Eine Wärmepumpe oder Wallbox stellt zusätzliche Anforderungen.</p>
        <p className="text-gray-600">Eine gute Elektroplanung bedeutet nicht, wahllos überall Steckdosen zu setzen. Sie bedeutet, den späteren Alltag zu verstehen: Wo wird gearbeitet? Wo stehen Möbel? Wo kommt die Küche hin? Wie wird das Bad genutzt? Wo werden Geräte geladen? Radex koordiniert diese Fragen im Rahmen der Sanierung – die Elektroarbeiten selbst werden durch qualifizierte Elektrofachbetriebe ausgeführt.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Altbau-Elektrik erneuern – besondere Anforderungen im Bestand</h3>
        <p className="mb-4 text-gray-600">In älteren Immobilien ist Elektroinstallation ein besonders sensibles Thema. Alte Leitungen, veraltete Sicherungen, fehlende Schutzschalter, zu wenige Stromkreise oder improvisierte Ergänzungen können bei einer Sanierung sichtbar werden. Typische Hinweise, dass eine Prüfung sinnvoll ist: sehr wenige Steckdosen, alte Schalter und Sicherungen, häufig auslösende Sicherungen, eine Küche, die nicht für moderne Geräte vorbereitet ist, oder eine alte Unterverteilung.</p>
        <p className="text-gray-600">Wenn Wände, Böden oder Decken ohnehin geöffnet werden, ist der richtige Zeitpunkt, Leitungen, Stromkreise und Sicherungskasten fachlich zu prüfen. Bei Altbauten können zusätzlich Schadstoffthemen relevant sein – Radex ist zertifiziert für Schimmel- und Asbestsanierung und verfügt über Sachkunde nach TRGS 519.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Netzwerk, Homeoffice & Smart Home</h3>
        <p className="mb-4 text-gray-600">Homeoffice, Streaming, Smart-TV, WLAN, Videokonferenzen und smarte Geräte haben die Anforderungen an Wohn- und Gewerberäume verändert. Eine moderne Sanierung sollte deshalb nicht nur Strom, sondern auch Daten und Netzwerk berücksichtigen. Gerade bei größeren Häusern, mehreren Etagen oder Homeoffice-Arbeitsplätzen bietet eine feste Netzwerkstruktur Stabilität und Geschwindigkeit.</p>
        <p className="text-gray-600">Smart Home ist kein Muss, aber für viele Eigentümer interessant: Licht, Rollläden, Heizung, Lüftung, Sicherheit und Beschattung lassen sich sinnvoll verbinden. Wichtig ist, dies früh zu planen, da spätere Nachrüstung aufwendiger ist. Radex koordiniert Beleuchtung, Schalterpositionen und Smart-Home-Vorbereitung mit den Elektrofachpartnern.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Ablauf der Elektrokoordination & Einsatzgebiet</h3>
        <p className="mb-4 text-gray-600">Radex koordiniert Elektroinstallation als Teil der Sanierung in einem klaren Ablauf: Erstgespräch, Bestandsaufnahme, Einbindung qualifizierter Elektrofachpartner, Schnittstellenplanung mit SHK, Trockenbau, Fliesen und Innenausbau, koordinierte Ausführung in der richtigen Reihenfolge und geordnete Übergabe.</p>
        <p className="text-gray-600">Radex sitzt in Rödermark und begleitet Sanierungen mit Elektrokoordination im gesamten Rhein-Main-Gebiet, unter anderem in Frankfurt, Offenbach, Darmstadt, Hanau, Aschaffenburg, Wiesbaden, Mainz, Bad Homburg, Neu-Isenburg, Dreieich, Langen, Rodgau, Heusenstamm, Obertshausen, Dietzenbach, Mühlheim, Seligenstadt, Groß-Gerau, Maintal, Rüsselsheim, Eschborn, Hofheim, Bad Soden, Kronberg und Königstein.</p>
      </div>
    </>
  );

  const seo = {
    title: "Elektrotechnik Rhein-Main | Elektroinstallation & Smart Home | Radex",
    description: "Elektroinstallation im Rhein-Main-Gebiet: Sicherungskasten, Altbau-Elektrik, Bad, Küche, Wärmepumpe, Wallbox & Smart Home – koordiniert von Radex. Jetzt Beratung sichern!",
    path: "/elektroinstallation-rhein-main",
    serviceName: "Elektrotechnik"
  };

  return <ServicePageTemplate seo={seo} heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
