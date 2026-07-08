import ServicePageTemplate from '../components/ServicePageTemplate';

export default function ApartmentRenovation() {
  const heroData = {
    title: "Wohnung sanieren lassen im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Eigentumswohnungen, Mietwohnungen und Altbauwohnungen – koordiniert aus einer Hand.",
    text: "Eine Wohnung zu sanieren unterscheidet sich grundlegend vom Hausumbau: begrenzte Fläche, unmittelbare Nachbarschaft und Vorgaben der Hausverwaltung prägen das Projekt. Radex arbeitet seit Jahrzehnten als Generalunternehmer unter genau diesen Bedingungen im Rhein-Main-Gebiet.",
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Wann ist eine Wohnungssanierung sinnvoll?",
    subtitle: "Typische Anlässe – und der passende Sanierungsumfang für Ihr Ziel.",
    list: [
      { title: "Eigentumswohnung nach Kauf sanieren", desc: "Frisch erworbene Wohnungen erreichen durch gezielte Sanierung vor Einzug einen deutlich besseren Wohn- und Substanzstandard." },
      { title: "Mietwohnung vor Neuvermietung renovieren", desc: "Eine modernisierte Wohnung erzielt höhere Mieten und spricht anspruchsvollere Mieter an – mit überschaubarem Aufwand." },
      { title: "Altbauwohnung modernisieren", desc: "Altbauwohnungen besitzen oft großzügige Grundrisse und solide Substanz – durch gezielte Maßnahmen erheblich aufwertbar." },
      { title: "Wohnung neu aufteilen", desc: "Grundrisse, die nicht zu aktuellen Lebensgewohnheiten passen, lassen sich durch Innenausbau und Trockenbau anpassen." },
      { title: "Wohnung kernsanieren", desc: "Bei umfassendem Bedarf – Leitungen, Technik, Oberflächen und Grundriss gleichzeitig erneuert – koordiniert Radex den Gesamtprozess." }
    ]
  };

  const typicalProjectsData = {
    title: "Was eine Wohnungssanierung aus einer Hand umfasst",
    subtitle: "Was konkret nötig ist, ergibt sich aus Ist-Zustand und Ihren Zielen – wir beraten ergebnisoffen.",
    projects: [
      { title: "Badsanierung & Sanitärtechnik", desc: "Das aufwendigste Einzelgewerk mit der größten Wirkung – normgerechte Sanitärplanung vom SHK-Meisterbetrieb, vom Kompaktbad bis zum barrierefreien Bad.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
      { title: "Elektroinstallation erneuern", desc: "Veraltete Sicherungskästen, zu wenige Steckdosen, fehlende Absicherungen – ideal erneuert, wenn Wände und Böden ohnehin offen sind.", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" },
      { title: "Böden, Wände & Decken", desc: "Neue Böden (Parkett, Vinyl, Fliesen, Laminat), glatter Putz und frischer Anstrich – aufeinander abgestimmt, ohne lange Wartezeiten.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
      { title: "Innenausbau & Raumaufteilung", desc: "Abgetrennte Küche, neuer Schnitt, zwei Zimmer zu einem – Grundrissänderungen lassen sich gut mit der übrigen Sanierung verbinden.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
      { title: "Heizung & Haustechnik", desc: "Thermostate, Heizkörper und innerwohnungliche Leitungen werden mit SHK-Meisterkompetenz fachgerecht modernisiert.", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Wie viel kostet eine Wohnungssanierung?",
    subtitle: "Die Kosten variieren je nach Quadratmeterzahl und Leistungsumfang. Wir erstellen ein transparentes Festpreisangebot.",
    items: [
      { title: "Kleine Wohnung (bis 50m²)", price: "€25.000", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" },
      { title: "Mittlere Wohnung (bis 90m²)", price: "€45.000", img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800" },
      { title: "Große Wohnung (ab 100m²)", price: "€65.000", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Wann lohnt sich eine Wohnungssanierung?", a: "Eine Wohnungssanierung lohnt sich immer dann, wenn die Substanz nicht dem aktuellen Standard entspricht oder die Immobilie zur Eigennutzung oder Vermietung aufgewertet werden soll. Typische Anlässe: Kauf einer älteren Eigentumswohnung, Mieterwechsel mit Modernisierungsbedarf, veraltete Elektroinstallation oder ein Bad aus den 1980er/1990er Jahren sowie abgenutzte Böden und Oberflächen. Auch lange vermietete Wohnungen mit veralteter Technik profitieren erheblich. Für Rhein-Main-Eigentümer gilt: modernisierter Bestand steigert Mietertrag und Wiederverkaufswert messbar." },
    { q: "Was muss bei einer Wohnung im Mehrfamilienhaus beachtet werden?", a: "Bei einer Wohnung im Mehrfamilienhaus gelten besondere Rahmenbedingungen: Lärm- und Ruhezeiten müssen eingehalten werden, Zufahrten und Treppenhäuser dürfen nicht dauerhaft blockiert werden, und bei baulichen Eingriffen in gemeinschaftliche Leitungsstränge ist oft die Zustimmung der Eigentümergemeinschaft erforderlich. Radex koordiniert alle Abläufe so, dass Nachbarn und Hausverwaltung minimal belastet werden – mit klaren Zeitplänen, abgestimmter Logistik und konsequenter Einhaltung der Hausordnung." },
    { q: "Kann Radex eine Wohnung nach dem Kauf sanieren?", a: "Ja – die Sanierung einer frisch gekauften Eigentumswohnung ist einer unserer häufigsten Aufträge im Rhein-Main-Gebiet. Wir empfehlen, möglichst früh – idealerweise noch vor dem Notartermin – eine Erstbegehung durchzuführen, damit Sie schon beim Kauf eine realistische Vorstellung der Sanierungskosten haben. Nach dem Kauf übernehmen wir die Bestandsaufnahme, erarbeiten den Maßnahmenplan und koordinieren alle Gewerke – vom Bad über die Elektrik bis zu Böden und Innenausbau." },
    { q: "Welche Arbeiten sind bei einer Eigentumswohnung sinnvoll?", a: "Welche Maßnahmen sinnvoll sind, hängt von Baujahr, Zustand und Nutzungsabsicht ab. Häufig kombiniert werden: Badsanierung, Erneuerung der Elektroinstallation, neue Böden, frische Oberflächen an Wänden und Decken, Türen und Innenwände sowie Heizkörper- und Leitungsanpassungen. Bei älteren Wohnungen aus den 1960er–1980er Jahren kommen manchmal eine Leitungsüberprüfung und eine Schadstoffbegutachtung hinzu. Radex berät ergebnisoffen und empfiehlt nur, was Objekt und Zielen wirklich nutzt." },
    { q: "Wie läuft eine Wohnungssanierung ab?", a: "Der Ablauf beginnt mit einer kostenlosen Erstberatung vor Ort. Dabei nehmen wir den Ist-Zustand auf und klären Ihre Ziele. Danach erstellen wir einen konkreten Maßnahmenplan und ein transparentes Angebot. Nach Auftragsvergabe koordinieren wir alle Gewerke in abgestimmter Reihenfolge, damit die Bauzeit so kurz wie möglich bleibt. Am Ende stehen eine gemeinsame Abnahme und eine vollständige Dokumentation." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Wohnungssanierung aus einer Hand im Rhein-Main-Gebiet</h3>
        <p className="mb-4 text-gray-600">Eine Wohnung zu sanieren unterscheidet sich grundlegend vom Hausumbau. Die begrenzte Fläche, die unmittelbare Nachbarschaft, Vorgaben durch Hausverwaltungen und das Ziel eines stimmigen Endergebnisses – ob zur Eigennutzung oder Vermietung – prägen das Projekt. Radex arbeitet seit Jahrzehnten unter diesen Bedingungen im Rhein-Main-Gebiet.</p>
        <p className="mb-4 text-gray-600">Radex koordiniert als Generalunternehmer alle Sanierungsprojekte. Bernd Knoop bringt als SHK-Meister & Betriebsleiter Fachkompetenz in Heizung, Sanitär und Gebäudetechnik ein. Partnerbetriebe führen Trockenbau, Fliesen, Elektro, Böden und Oberflächenarbeiten aus, die Radex verantwortet und begleitet. Das Resultat: ein einziger Ansprechpartner, der den kompletten Ablauf kennt, Termine abstimmt und dafür sorgt, dass aus einer Vielzahl von Einzelgewerken ein stimmiges Ganzes wird.</p>
        <p className="text-gray-600">Tätig in Offenbach, Frankfurt, Dreieich, Rodgau, Neu-Isenburg, Dietzenbach, Heusenstamm, Obertshausen, Darmstadt, Rödermark und weiteren Rhein-Main-Orten.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Wohnungssanierung im Mehrfamilienhaus – worauf es ankommt</h3>
        <p className="mb-4 text-gray-600">Wer eine Wohnung im Mehrfamilienhaus saniert, hat andere Rahmenbedingungen als jemand mit einem freistehenden Haus. Diese Unterschiede sind bei Planung und Durchführung entscheidend.</p>
        <p className="mb-4 text-gray-600"><strong>Ruhezeiten, Zugänge und Hausordnung:</strong> Handwerker müssen die Hausordnung und ortsübliche Ruhezeiten einhalten. Lärmintensive Arbeiten wie Stemm-, Fräs- oder Kernbohrarbeiten sind oft zeitlich beschränkt. Radex plant die Bauabläufe so, dass diese Zeiten eingehalten werden – auch wenn das bestimmte Gewerke in anderer Reihenfolge erfordert.</p>
        <p className="mb-4 text-gray-600"><strong>Eigentumsstruktur und WEG-Recht:</strong> Bei einer Eigentumswohnung in einer Wohnungseigentümergemeinschaft (WEG) gibt es klare Grenzen zwischen Sondereigentum und Gemeinschaftseigentum. Innenwände, Böden und Installationen innerhalb der Wohnung sind typischerweise Sondereigentum; tragende Wände, Versorgungsleitungen im Hauptstrang, Dach und Fassade gehören zum Gemeinschaftseigentum. Eingriffe ins Gemeinschaftseigentum erfordern die Zustimmung der Eigentümerversammlung – Radex berät, welche Maßnahmen betroffen sind.</p>
        <p className="text-gray-600"><strong>Rücksicht auf Nachbarn und kurze Bauzeiten:</strong> Zu laute, zu lange oder unstrukturierte Bauphasen führen schnell zu Nachbarschafts- und Verwaltungskonflikten. Radex legt großen Wert auf kompakte Bauzeiten. Gewerke werden eng aufeinander abgestimmt, ohne unnötige Leerlaufzeiten – die Belastung für alle bleibt minimal. Das ist auch für Vermieter entscheidend: Jeder Monat Leerstand verursacht Kosten.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">So läuft eine Wohnungssanierung mit Radex ab</h3>
        <p className="mb-4 text-gray-600">Ein strukturierter Ablauf ist der wichtigste Faktor für eine reibungslose Wohnungssanierung. Bei Radex folgt jedes Projekt einem klaren Schema – das gibt Planungssicherheit und verhindert, dass Gewerke aneinander vorbeiarbeiten.</p>
        <p className="mb-4 text-gray-600"><strong>1. Erstbegehung und Bestandsaufnahme:</strong> Wir nehmen uns Zeit für die Wohnung. Bei der Erstbegehung schauen wir auf Bad, Elektroinstallation, Böden, Wände, Türen und Technik – und hören zu, was Ihnen wichtig ist. Wünsche, Budget und Zeitrahmen werden von Anfang an einbezogen.</p>
        <p className="mb-4 text-gray-600"><strong>2. Maßnahmenplan und Angebot:</strong> Auf Basis der Begehung erarbeiten wir einen konkreten Maßnahmenplan, der die sinnvolle Gewerkereihenfolge abbildet. Das dazugehörige Angebot ist transparent und nachvollziehbar – keine versteckten Positionen, keine unklaren Pauschalpreise.</p>
        <p className="mb-4 text-gray-600"><strong>3. Koordination und Baubegleitung:</strong> Nach der Auftragsvergabe übernimmt Radex die vollständige Koordination aller Gewerke. Wir sprechen mit der Hausverwaltung ab, halten Ruhezeiten ein und sorgen dafür, dass Treppenhäuser und Zugänge frei bleiben. Sie erhalten regelmäßige Fortschritts-Updates – ohne tägliche Baustelle.</p>
        <p className="text-gray-600"><strong>4. Abnahme und Übergabe:</strong> Am Ende stehen eine gemeinsame Abnahme und eine vollständige Dokumentation. Sie erhalten alle Unterlagen – Prüfprotokolle, Herstellergarantien, Ausführungsnachweise. Die Wohnung wird besenrein und vollständig fertiggestellt übergeben.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Altbauwohnungen sanieren – Substanz erhalten, Komfort steigern</h3>
        <p className="mb-4 text-gray-600">Altbauwohnungen haben einen eigenen Charakter: hohe Decken, solide Ziegelwände, oft großzügige Grundrisse. Gleichzeitig wurden viele über Jahrzehnte nicht grundlegend modernisiert – Elektroinstallation, Bad und Heizungsanbindung entsprechen nicht dem aktuellen Standard.</p>
        <p className="mb-4 text-gray-600">Für Heusenstamm, Obertshausen und Dietzenbach gilt: Viele Wohnungsbestände stammen aus den 1960er, 1970er und frühen 1980er Jahren – aus einer Zeit, in der Elektroinstallationen noch ohne Fehlerstromschutzschalter ausgeführt, Bäder sehr platzsparend gebaut und Böden aus PVC oder einfachen Fliesen gelegt wurden. Heute lassen sich diese Wohnungen mit überschaubarem Aufwand erheblich aufwerten – wenn man weiß, wie.</p>
        <p className="text-gray-600">Radex begutachtet die Substanz vor jedem Auftrag sorgfältig. Wo die Bausubstanz gut ist, lohnt sich eine selektive Sanierung gezielter Bereiche; wo dahinterliegende Leitungen oder Konstruktionen Probleme zeigen, empfehlen wir eine weitergehende Bestandsaufnahme. Für Fragen zu Schadstoffen in Altbauten – Asbest in Bodenmaterialien oder alten Fugenmassen – verfügt Radex über entsprechende Kenntnisse (Asbest-Sachkunde nach TRGS 519) und arbeitet mit zertifizierten Fachbetrieben zusammen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Wohnungssanierung aus einer Hand – was das konkret bedeutet</h3>
        <p className="mb-4 text-gray-600">Viele Eigentümer, die erstmals eine Wohnung sanieren, unterschätzen den Koordinationsaufwand. Wenn Bad, Elektro, Böden und Maler nicht aufeinander abgestimmt sind, passieren vermeidbare Fehler: Der Elektriker legt Kabel, bevor der Trockenbauer fertig ist. Neue Bodenfliesen werden beschädigt, weil danach noch Stemm- und Bohrarbeiten stattfinden. Der Maler kann nicht anfangen, weil die Wandoberflächen noch nicht fertig sind.</p>
        <p className="mb-4 text-gray-600">Als Generalunternehmer übernimmt Radex genau diese Koordination. Wir kennen die Abläufe, wissen, welche Reihenfolge notwendig ist, und haben langjährige Partnerbetriebe in allen relevanten Gewerken im Rhein-Main-Gebiet. Das gibt Ihnen eine wesentlich einfachere Projektverwaltung – ein Gespräch mit Radex statt mit fünf Handwerkern.</p>
        <p className="text-gray-600">Das bedeutet keinen Premiumaufschlag gegenüber der Eigenkoordination. In der Praxis zeigt sich oft das Gegenteil: Weil die Gewerke aufeinander abgestimmt sind, entstehen weniger Nacharbeiten und weniger Stillstandszeiten. Die Effizienz im Ablauf schlägt sich direkt in der Bauzeit und häufig auch im Gesamtpreis nieder. Mit über 40 Jahren Erfahrung aus mehreren hundert Projekten im Rhein-Main-Gebiet ist Radex in über 60 Städten und Gemeinden tätig.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Wohnungssanierung im Rhein-Main-Gebiet – unsere Städte</h3>
        <p className="mb-4 text-gray-600">Radex bietet Wohnungssanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Der Standort Rödermark liegt zentral – von dort schnell erreichbar: Offenbach am Main, Frankfurt am Main, Darmstadt, Neu-Isenburg, Dreieich, Rodgau, Dietzenbach, Heusenstamm und Obertshausen. Ebenso regelmäßig sanieren wir Wohnungen in Hanau, Langen, Mühlheim am Main und weiteren Kommunen im Kreis Offenbach und Darmstadt-Dieburg.</p>
        <p className="text-gray-600">Die Anforderungen unterscheiden sich je nach Standort: In Frankfurter Altbauquartieren arbeiten wir regelmäßig mit Gründerzeit- und Nachkriegswohnungen, bei denen Substanz und Charakter erhalten bleiben sollen. In Rodgau und Dreieich sind es oft 1970er-Bauten mit grundlegendem Erneuerungsbedarf. In Neu-Isenburg und Heusenstamm treffen wir häufig auf kleine bis mittelgroße Eigentumswohnungen, die vor dem Verkauf oder nach dem Kauf umfassend modernisiert werden.</p>
      </div>
    </>
  );

  const seo = {
    title: "Wohnungssanierung Rhein-Main | Festpreis & aus einer Hand | Radex",
    description: "Wohnungssanierung im Rhein-Main-Gebiet: Eigentumswohnung, Mietwohnung & Altbauwohnung modernisieren – Bad, Elektro, Böden & Innenausbau vom Generalunternehmer. Jetzt anfragen!",
    path: "/sanierung/wohnungssanierung",
    serviceName: "Wohnungssanierung"
  };

  return (
    <ServicePageTemplate
      seo={seo}
      heroData={heroData}
      whoIsForData={whoIsForData}
      typicalProjectsData={typicalProjectsData}
      costsData={costsData}
      faqsData={faqsData}
      calculatorType="wohnung"
      seoContent={seoContent}
    />
  );
}
