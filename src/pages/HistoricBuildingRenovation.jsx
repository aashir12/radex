import ServicePageTemplate from '../components/ServicePageTemplate';

export default function HistoricBuildingRenovation() {
  const heroData = {
    title: "Altbausanierung im",
    titleSpan: "Rhein-Main-Gebiet",
    subtitle: "Bestand erhalten und modernisieren – mit Respekt vor der Bausubstanz.",
    text: "Fachgerechte Sanierung älterer Immobilien mit klarem Blick für zeitgemäßen Komfort. Radex koordiniert als Generalunternehmer; Bernd Knoop bringt als SHK-Meister & Betriebsleiter die Fachkompetenz in Heizung, Sanitär und Gebäudetechnik ein.",
    image: "https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Was Altbausanierung bedeutet",
    subtitle: "Der Unterschied zwischen Renovierung und Sanierung – und warum er entscheidend ist.",
    list: [
      { title: "Renovierung vs. Sanierung", desc: "Renovierung beschränkt sich auf Oberflächen (Anstrich, Böden, Armaturen). Sanierung geht tiefer und bewertet die technische Substanz des Gebäudes." },
      { title: "Gebäude vor 1990", desc: "Hier sind technische Eingriffe häufig nicht optional – Leitungen, Heizung und Elektrik entsprechen oft nicht mehr heutigen Standards." },
      { title: "Substanz erhalten", desc: "Tragende Wände, historische Details und weiterlaufende technische Systeme fließen in einen sorgfältig abgewogenen Plan ein." },
      { title: "Charakter bewahren", desc: "Stuck, Holzdielen, Kassettentüren – das Ziel ist Wohnraum, der im Alltag funktioniert, ohne seine Geschichte zu verleugnen." }
    ]
  };

  const typicalProjectsData = {
    title: "Was Radex bei der Altbausanierung übernimmt",
    subtitle: "Als Generalunternehmer koordiniert Radex alle Gewerke – die SHK-Meisterkompetenz bringt Bernd Knoop direkt ein.",
    projects: [
      { title: "Leitungen erneuern", desc: "Trinkwasser-, Heizungs- und Entwässerungsleitungen: galvanisierte Stahlrohre, alte Bleileitungen und spröde Gussrohre werden gezielt saniert.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
      { title: "Altbau-Elektrik erneuern", desc: "Zweileiter-Systeme ohne Schutzleiter, fehlende FI-Schutzschalter und zu kleine Querschnitte werden normgerecht erneuert – mit Reserven für Wallbox & Co.", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" },
      { title: "Altbau-Bad sanieren", desc: "Kleine, unregelmäßige Grundrisse werden zu zeitgemäßen Sanitärräumen – ohne den Grundriss unnötig aufzubrechen.", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800" },
      { title: "Innenausbau & Erhalt", desc: "Leitungen in Schlitzen statt auf Putz, Trockenbau, der historische Decken unangetastet lässt – technische Eingriffe bleiben unsichtbar.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" },
      { title: "Schadstoffsanierung", desc: "Asbest in Bodenklebern, Dachplatten oder Rohrisolierungen wird sachkundig eingeschätzt und im Bedarfsfall fachgerecht beseitigt (TRGS 519).", img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" },
      { title: "Energetische Sanierung", desc: "Heizungserneuerung (Gas-Brennwert bis Wärmepumpe) und Dämmmaßnahmen, optimal kombiniert für die maximale Förderung.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Was kostet eine Altbausanierung?",
    subtitle: "Aufgrund der individuellen Substanz sind Altbauten schwerer zu pauschalisieren – wir kalkulieren nach der Bestandsaufnahme.",
    items: [
      { title: "Kosmetisch (Böden/Wände)", price: "ab €500 / m²", img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800" },
      { title: "Technik & Bäder", price: "ab €1.200 / m²", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
      { title: "Denkmalschutz-Kernsanierung", price: "ab €2.500 / m²", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Was ist bei einer Altbausanierung besonders wichtig?", a: "Bei der Altbausanierung ist es entscheidend, die vorhandene Bausubstanz sorgfältig zu prüfen, bevor Maßnahmen geplant werden. Leitungen, Elektrik und Heizung entsprechen oft nicht mehr heutigen Standards und müssen behutsam erneuert werden, ohne den Charakter des Gebäudes zu beschädigen. Bei Gebäuden aus bestimmten Baujahren ist eine Prüfung auf Schadstoffe wie Asbest sinnvoll. Ein erfahrener Generalunternehmer koordiniert alle Gewerke aufeinander abgestimmt und sorgt dafür, dass Eingriffe sinnvoll gebündelt werden – damit Wände und Böden nicht mehrfach geöffnet werden müssen." },
    { q: "Wie lassen sich Altbaucharakter und moderne Technik verbinden?", a: "Viele Altbauten im Rhein-Main-Gebiet verfügen über Stuckelemente, Holzdielenböden, Kassettentüren oder historische Fensterproportionen, die ihren Charakter prägen. Moderne Technik lässt sich in der Regel verdeckt integrieren: Leitungen werden in Schächten oder Schlitzen geführt, neue Heizungsverteiler in Nischen untergebracht und Elektroinstallationen hinter Unterkonstruktionen verlegt. Das Ergebnis ist ein Gebäude mit zeitgemäßem Komfort und unverändert persönlichem Charakter." },
    { q: "Wann sollte auf Schadstoffe geprüft werden?", a: "Eine orientierende Schadstoffprüfung ist besonders bei Gebäuden aus den 1950er–1990er Jahren sinnvoll. In dieser Zeit wurden Materialien wie Asbest in Bodenklebern, Dachplatten oder Rohrisolierungen verwendet. Auch Bleileitungen in sehr alten Häusern oder PCB in Fugenmassen können relevant sein. Vor Rückbau- oder Umbauarbeiten empfiehlt sich eine sachliche Ersteinschätzung durch erfahrene Fachleute. Radex ist als zertifizierter Fachbetrieb für die Koordination solcher Maßnahmen ausgerichtet." },
    { q: "Welche Leitungen sollten im Altbau geprüft werden?", a: "Zu prüfen sind in erster Linie: Trinkwasserleitungen (insbesondere Blei und alte Stahlrohre), Entwässerungsleitungen (häufig Gussrohre mit Ablagerungen oder Undichtigkeiten), die Heizungsverteilung und die elektrische Installation. Viele Altbauten verfügen noch über Leitungen aus den 1960er oder 1970er Jahren, die für heutige Lastenprofile nicht ausgelegt sind. Ein strukturierter Blick auf alle Leitungsebenen vor Baubeginn hilft, spätere Überraschungen zu vermeiden." },
    { q: "Wie wird ein Altbau respektvoll modernisiert?", a: "Respektvolle Altbaumodernisierung bedeutet, die Eingriffe auf das technisch Notwendige zu beschränken und die Eigenart des Bestands zu bewahren. Dabei helfen ein sorgfältiger Bestandsaufnahme-Prozess, ein abgestimmter Gewerkeplan und die Wahl von Materialien, die zum vorhandenen Stil passen. Radex koordiniert alle Gewerke aufeinander abgestimmt – so werden Substanz, Charakter und neue Nutzungsqualität gleichermaßen berücksichtigt. Ziel ist ein Ergebnis, das sich nach dem Einzug selbstverständlich anfühlt – nicht wie ein Neubau in alten Mauern." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Altbausanierung im Rhein-Main-Gebiet – Bestand erhalten und modernisieren</h3>
        <p className="mb-4 text-gray-600">Altbauten in der Region – von gründerzeitlichen Wohnungen in Frankfurt am Main über Bestandshäuser aus den 1960er Jahren in Offenbach am Main bis zu älteren Mehrfamilienhäusern in Darmstadt – besitzen charakteristische Substanz, die bewahrenswert ist. Die zentrale Herausforderung liegt darin, technische Modernisierung sinnvoll mit gewachsenem Charakter zu verbinden.</p>
        <p className="mb-4 text-gray-600">Radex fungiert als koordinierender Ansprechpartner. Die Gesamtkoordination erfolgt durch Radex als Generalunternehmer. Bernd Knoop, SHK-Meister & Betriebsleiter, bringt fachliche Kompetenz in Heizung, Sanitär und Gebäudetechnik ein. Weitere Gewerke – Elektroinstallation, Trockenbau, Oberflächen, Innenausbau – werden durch erfahrene Fachbetriebe aus dem bewährten Partnernetzwerk ausgeführt und von Radex koordiniert.</p>
        <p className="text-gray-600">Das Ergebnis: eine Altbausanierung, die keine unnötigen Spuren hinterlässt – und einen Wohnraum schafft, der im Alltag funktioniert, ohne seine Geschichte zu verleugnen. Die Planung wird gemeinsam mit dem Eigentümer entwickelt – nicht am Schreibtisch, sondern im Objekt.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Leitungen erneuern im Altbau – Trinkwasser, Heizung, Entwässerung</h3>
        <p className="mb-4 text-gray-600">In Bestandsgebäuden werden Leitungen häufig unterschätzt. Viele Eigentümer planen zunächst nur Bad und Küche, stellen dann aber fest, dass dahinterliegende Versorgungsleitungen aus den 1960er oder 1970er Jahren nicht für heutige Anforderungen ausgelegt sind. Galvanisierte Stahlrohre rosten von innen und verengen sich, alte Bleileitungen sind hygienisch problematisch, und Guss-Entwässerungsleitungen können spröde werden, undicht sein oder Ablagerungen aufweisen.</p>
        <p className="text-gray-600">Bernd Knoop verantwortet als SHK-Meister & Betriebsleiter die fachgerechte Ausführung. Die Leitungsführung wird so geplant, dass Eingriffe in Wände und Böden minimiert werden. Die Erneuerung von Wasserleitungen bietet oft die Gelegenheit, die Heizungsverteilung neu zu strukturieren – etwa für Wärmepumpen oder effiziente Gas-Brennwertheizungen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Altbau-Elektrik erneuern – Sicherheit und zeitgemäße Kapazitäten</h3>
        <p className="mb-4 text-gray-600">Die Elektroinstallation ist oft das am wenigsten verstandene Thema für Altbau-Eigentümer. Typische Probleme in Gebäuden aus den 1950er–1970er Jahren: Leitungen ohne Schutzleiter (Zweileiter-Systeme), Sicherungskästen ohne moderne FI-Schutzschalter und Querschnitte, die für heutige Verbraucher (E-Herde, Wallboxen, Klimageräte, Wärmepumpen) nicht ausgelegt sind.</p>
        <p className="text-gray-600">Radex koordiniert Elektroarbeiten durch erfahrene Fachbetriebe – so geplant, dass ausreichende Kapazitäten für Wallboxen, smarte Haustechnik oder spätere Erweiterungen bestehen. Besondere Sorgfalt ist in Küche und Bad erforderlich, wo Schutzzonenpflichten und Feuchtraumvorschriften gelten. Eine normgerechte Ausführung mit Abnahmeschein bildet die Grundlage für Versicherungsschutz und Wiederverkaufswert.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Schadstoffe im Altbau – sachliche Einschätzung vor der Sanierung</h3>
        <p className="mb-4 text-gray-600">In Gebäuden aus bestimmten Baujahren können Materialien verbaut sein, die heute nicht mehr zugelassen sind: asbesthaltige Produkte in Bodenbelagsklebern, Dachplatten und Rohrisolierungen, teerhaltige Altanstriche, PCB in Fugenmassen und Blei in sehr alten Leitungen. Das war der damalige Stand der Technik – kein Mangel des Gebäudes.</p>
        <p className="text-gray-600">Für eine sichere Altbausanierung ist es wichtig, diese Themen vor Baubeginn zu klären. Radex ist als zertifizierter Fachbetrieb auf die koordinierte Abwicklung von Schadstoffsanierungen ausgerichtet und sorgt dafür, dass notwendige Maßnahmen dokumentiert, fachgerecht und rechtskonform durchgeführt werden. Für Eigentümer in Städten wie Wiesbaden, Mainz oder Bad Homburg vor der Höhe ist diese Prüfung ein routinemäßiger Teil jeder gründlichen Sanierungsplanung.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Altbau energetisch sanieren – Heizung erneuern und Verbrauch senken</h3>
        <p className="mb-4 text-gray-600">Energetische Maßnahmen im Altbau sind heute weniger eine freiwillige Entscheidung als ein sinnvoller Schritt mit klarem wirtschaftlichen Hintergrund. Steigende Energiepreise, veränderte GEG-Anforderungen und staatliche Förderung über KfW und BAFA machen den richtigen Zeitpunkt zu einem strategischen Thema. Die Energiefrage beginnt häufig bei der Heizung – eine Anlage aus den 1990er Jahren hat ihren Zenit überschritten.</p>
        <p className="text-gray-600">Bernd Knoop verantwortet als SHK-Meister & Betriebsleiter die Auslegung und den Einbau moderner Heizungs- und Sanitärtechnik – von der Gas-Brennwertanlage bis zur Wärmepumpe, je nach baulichem Zustand und Dämmstandard. Wer strategisch plant, kombiniert Heizungserneuerung und Dämmmaßnahmen, um Förderprogramme optimal zu nutzen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Altbausanierung im Rhein-Main-Gebiet – unsere Einsatzgebiete</h3>
        <p className="text-gray-600">Radex bietet Sanierungen in über 60 Städten und Gemeinden im Rhein-Main-Gebiet an. Ob Altbauwohnung in Frankfurt am Main oder Offenbach am Main, Bestandshaus in Darmstadt oder Wiesbaden, Mehrfamilienhaus in Hanau oder Mainz – der Altbaubestand in der Region ist vielfältig, und der Sanierungsbedarf auch. Zu den Einsatzgebieten zählen unter anderem Frankfurt am Main, Offenbach am Main, Darmstadt, Wiesbaden, Mainz, Bad Homburg vor der Höhe, Hanau, Dreieich, Langen und Rödermark.</p>
      </div>
    </>
  );

  const seo = {
    title: "Altbausanierung Rhein-Main | Denkmalgerecht modernisieren | Radex",
    description: "Altbausanierung im Rhein-Main-Gebiet: Leitungen, Elektrik, Bad & energetische Modernisierung mit Respekt vor der Substanz. Schadstoffsanierung nach TRGS 519. Jetzt Beratung sichern!",
    path: "/sanierung/altbausanierung",
    serviceName: "Altbausanierung"
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
