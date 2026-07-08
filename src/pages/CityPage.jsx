import { useEffect, useState } from 'react';
import { Link } from '../router';
import { Camera, MapPin, MessageSquare, Phone, CheckCircle2, ArrowRight, Award, Users, ShieldCheck, ChevronDown, AlertTriangle, Wrench } from 'lucide-react';
import '../badsanierung.css';
import useSeo, { buildFaqSchema } from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';

const cityDataMap = {
  frankfurt: {
    name: "Frankfurt am Main",
    path: "/sanierung-frankfurt-am-main",
    heroImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Skyline_Frankfurt_am_Main_2015.jpg/1280px-Skyline_Frankfurt_am_Main_2015.jpg",
    districts: [
      "Sachsenhausen",
      "Nordend",
      "Bornheim",
      "Bockenheim",
      "Westend",
      "Ostend",
      "Gallus",
      "Niederrad",
      "Höchst",
      "Riedberg",
    ],
    extraContent: [
      {
        title: "Sanierung in Frankfurt am Main",
        text: "Frankfurt am Main ist einer der vielseitigsten Immobilienstandorte im Rhein-Main-Gebiet. Die breite Palette an Altbauwohnungen, Gründerzeithäusern, Nachkriegsbauten und modernen Wohnquartieren bietet die perfekte Basis für anspruchsvolle Modernisierungen. Radex unterstützt Eigentümer und Käufer dabei, Bestandsgebäude durch eine koordinierte, gewerkeübergreifende Sanierung funktional aufzuwerten, den Wohnkomfort zeitgemäß zu maximieren und den Immobilienwert langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Frankfurt",
        text: "Ein modernes Badezimmer muss den Anforderungen des Alltags standhalten und gleichzeitig barrierearmen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Frankfurt optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Frankfurt",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer geplanten Neuvermietung bietet in den gefragten Stadtteilen Frankfurts die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Frankfurt",
        text: "Viele Einfamilienhäuser, Stadthäuser und Reihenhäuser im Frankfurter Stadtgebiet verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Frankfurt",
        text: "Die Modernisierung älterer Wohngebäude rund um das Nordend, Sachsenhausen oder Bornheim verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Frankfurt",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Frankfurt",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Frankfurt",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Frankfurt",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle von Sachsenhausen und Bockenheim über Höchst und Niederrad bis hin zum Riedberg individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Frankfurt",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Verkaufsflächen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen im Umfeld von Gallus, Ostend oder Kaiserlei.",
      },
    ],
  },
  darmstadt: {
    name: "Darmstadt",
    path: "/haus-wohnung-bad-modernisieren-darmstadt",
    heroImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Darmstadt_Mathildenh%C3%B6he.jpg/1280px-Darmstadt_Mathildenh%C3%B6he.jpg",
    districts: [
      "Bessungen",
      "Eberstadt",
      "Kranichstein",
      "Arheilgen",
      "Wixhausen",
      "Innenstadt",
    ],
    extraContent: [
      {
        title: "Wohnen in Darmstadt neu denken",
        text: "Darmstadt unterscheidet sich deutlich von vielen anderen Städten im Rhein-Main-Gebiet. Die Wissenschaftsstadt vereint klassische Wohnviertel, gewachsene Einfamilienhausgebiete, Eigentumswohnungen, Nachkriegsbauten und moderne Wohnquartiere. Dadurch entstehen sehr unterschiedliche Anforderungen an Sanierungsprojekte. Viele Eigentümer kaufen heute eine Wohnung oder ein Haus in Darmstadt und stellen fest, dass die Immobilie zwar Potenzial besitzt, aber technisch oder optisch nicht mehr zum eigenen Lebensstil passt. Radex begleitet Eigentümer bei der Planung und Koordination solcher Projekte.",
      },
      {
        title: "Das Badezimmer als Startpunkt vieler Modernisierungen",
        text: "Viele Projekte in Darmstadt beginnen im Badezimmer. Nicht weil es der größte Raum ist, sondern weil hier Komfort, Technik und Alltag direkt aufeinandertreffen. Ein Bad, das vor zwanzig oder dreißig Jahren modern war, erfüllt heute oft nicht mehr die Erwartungen seiner Nutzer. Radex begleitet Eigentümer von der ersten Idee bis zur fertigen Umsetzung und stimmt Sanitärtechnik, Innenausbau und Nutzung aufeinander ab.",
      },
      {
        title: "Eigentumswohnungen in Darmstadt modernisieren",
        text: "Darmstadt besitzt einen großen Bestand an Eigentumswohnungen unterschiedlichster Baujahre. Viele Käufer nutzen den Eigentumswechsel, um die Wohnung direkt an die eigenen Vorstellungen anzupassen. Eine Wohnung wirkt oft völlig anders, wenn mehrere kleine Maßnahmen sinnvoll kombiniert werden. Radex hilft dabei, diese Maßnahmen in die richtige Reihenfolge zu bringen und die Arbeiten aufeinander abzustimmen.",
      },
      {
        title: "Familienhäuser in Darmstadt zukunftsfähig machen",
        text: "In vielen Stadtteilen Darmstadts stehen Häuser, die seit Jahrzehnten im Besitz derselben Familie sind. Solche Immobilien besitzen oft eine gute Substanz, wurden aber nur schrittweise modernisiert. Mit veränderten Wohnbedürfnissen entstehen neue Anforderungen an Platz, Technik und Energiebilanz. Radex entwickelt gemeinsam mit Eigentümern eine sinnvolle Modernisierungsstrategie.",
      },
      {
        title: "Bestandsimmobilien erhalten statt ersetzen",
        text: "Nicht jede Immobilie braucht eine Kernsanierung. Viele Gebäude in Darmstadt besitzen eine solide Grundlage und können durch gezielte Maßnahmen deutlich aufgewertet werden. Die Herausforderung besteht darin, den richtigen Umfang zu finden. Radex unterstützt Eigentümer dabei, genau die Maßnahmen zu identifizieren, die zum Gebäude und zur Nutzung passen.",
      },
      {
        title: "Gebäudetechnik und Wohnkomfort in Darmstadt",
        text: "Viele Eigentümer denken bei einer Modernisierung zuerst an sichtbare Veränderungen. Im Alltag entscheidet jedoch oft die Gebäudetechnik darüber, wie komfortabel eine Immobilie tatsächlich ist. In Darmstadt finden sich viele Wohnungen und Häuser aus den 60er-, 70er-, 80er- und 90er-Jahren. Die Gebäude sind häufig solide gebaut, die technische Ausstattung entspricht jedoch nicht immer heutigen Anforderungen.",
      },
      {
        title: "Energie sparen ohne die Immobilie zu verbauen",
        text: "In Darmstadt beschäftigen sich viele Eigentümer mit steigenden Energiekosten. Dabei geht es längst nicht nur um die Heizungsanlage. Oft sind es mehrere kleine Faktoren, die gemeinsam den Energieverbrauch beeinflussen. Radex betrachtet deshalb nicht einzelne Produkte, sondern die gesamte Immobilie, um nachvollziehbare Maßnahmen mit echtem Nutzen zu realisieren.",
      },
      {
        title: "Wenn aus einem kleinen Problem ein größeres wird",
        text: "Viele Projekte entstehen durch einen Schaden wie Feuchtigkeit, einen Rohrbruch, Schimmelbildung oder einen Wasserschaden im Badezimmer. Statt nur die sichtbaren Schäden zu beseitigen, wird geprüft, welche Modernisierung langfristig Sinn ergibt. Radex begleitet Eigentümer dabei, Schäden als Chance für eine sinnvolle Verbesserung der Immobilie zu nutzen.",
      },
      {
        title: "Gewerbeimmobilien in Darmstadt modernisieren",
        text: "Darmstadt ist Wirtschaftsstandort, Wissenschaftsstandort und Technologiestandort zugleich. Dadurch entstehen zahlreiche Modernisierungsprojekte für Büros, Praxen, Kanzleien und Gewerbeeinheiten. Wichtig sind hier kurze Umbauzeiten, klare Planung und funktionale Raumaufteilungen. Radex unterstützt Gewerbekunden bei der Planung und Koordination solcher Projekte.",
      },
      {
        title: "Darmstadt ist nicht gleich Darmstadt",
        text: "Die Stadt besteht aus sehr unterschiedlichen Wohngebieten. Ob hochwertige Wohnungsmodernisierungen in Bessungen, Hausmodernisierungen in Eberstadt, Badmodernisierungen in Arheilgen oder Sanierungen nach Eigentümerwechsel in Kranichstein und Wixhausen – jeder Stadtteil bringt eigene Anforderungen mit sich, die individuell bewertet werden müssen.",
      },
      {
        title: "Für Eigentümer, Käufer und Kapitalanleger",
        text: "Nicht jede Sanierung verfolgt dasselbe Ziel – ob Eigennutzung, Vermietung oder die Wertsteigerung für Kapitalanleger. Deshalb entwickelt Radex keine Standardlösungen, sondern betrachtet jede Immobilie individuell, um zu klären, welche Maßnahmen den Wohnwert steigern und sich langfristig lohnen.",
      },
    ],
  },
  offenbach: {
    name: "Offenbach",
    path: "/sanierung-offenbach-am-main",
    heroImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Offenbach_B%C3%BCsingpalais.jpg/1280px-Offenbach_B%C3%BCsingpalais.jpg",
    districts: [
      "Innenstadt",
      "Bürgel",
      "Bieber",
      "Rumpenheim",
      "Lauterborn",
      "Tempelsee",
    ],
    extraContent: [
      {
        title: "Sanierung in Offenbach am Main",
        text: "Offenbach am Main ist eine Stadt mit vielen Gesichtern: dicht bebaute Wohnquartiere, ältere Mehrfamilienhäuser, Mainlagen und gewachsene Stadtteile bieten eine anspruchsvolle Basis für Modernisierungen. Radex unterstützt Eigentümer und Käufer dabei, Bestandsgebäude durch eine koordinierte, gewerkeübergreifende Sanierung funktional aufzuwerten, den Wohnkomfort zeitgemäß zu maximieren und den Immobilienwert langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Offenbach",
        text: "Ein modernes Badezimmer muss den Anforderungen des Alltags standhalten und gleichzeitig barrierearmen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Offenbach optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Offenbach",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer geplanten Neuvermietung bietet in den zentralen Wohnbereichen Offenbachs die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Offenbach",
        text: "Viele Einfamilienhäuser, Doppelhaushälften und Reihenhäuser in den gefragten Wohnlagen im Offenbacher Umfeld verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Offenbach",
        text: "Die Modernisierung älterer Wohngebäude im Stadtgebiet verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Offenbach",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Offenbach",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Offenbach",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Offenbach",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle von Bieber über Bürgel und Rumpenheim bis nach Lauterborn, Tempelsee oder der Rosenhöhe individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Offenbach",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Verkaufsflächen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen im Umfeld von Innenstadt und Kaiserlei.",
      },
    ],
  },
  hanau: {
    name: "Hanau",
    path: "/sanierung-hanau",
    heroImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Hanau_Marktplatz_S%C3%BCdseite.jpg/1280px-Hanau_Marktplatz_S%C3%BCdseite.jpg",
    districts: [
      "Innenstadt",
      "Kesselstadt",
      "Großauheim",
      "Steinheim",
      "Wolfgang",
      "Lamboy",
    ],
    extraContent: [
      {
        title: "Haus oder Wohnung modernisieren in Hanau",
        text: "Hanau gehört zu den Städten im Rhein-Main-Gebiet, in denen viele Menschen seit Jahrzehnten in ihren Häusern oder Wohnungen leben. Wenn Immobilien den Eigentümer wechseln, innerhalb der Familie weitergegeben oder geerbt werden, stellt sich häufig die Frage, wie eine bestehende Immobilie sinnvoll weiterentwickelt werden kann. Ob das Badezimmer veraltet ist, die Raumaufteilung nicht mehr zum Alltag passt oder ein Homeoffice benötigt wird – Radex bietet eine individuelle Betrachtung der Immobilie statt Standardpakete, um Wohnungen und Häuser passgenau für die nächste Generation vorzubereiten.",
      },
      {
        title: "Häuser modernisieren statt neu bauen",
        text: "Viele Wohnhäuser in Hanau – gerade Gebäude aus den 60er-, 70er- oder 80er-Jahren – besitzen eine solide Bausubstanz, entsprechen aber oft nicht mehr heutigen Anforderungen an Licht, Raumaufteilung oder Haustechnik. Eine strukturierte Modernisierung ist in vielen Fällen deutlich wirtschaftlicher als ein Umzug oder Neubau. Durch gezielte Maßnahmen wie das Öffnen von Wohnräumen, die Aktualisierung der Technik und die Erneuerung von Oberflächen lassen sich der Wohnkomfort, die Familienfreundlichkeit und der Immobilienwert erheblich steigern.",
      },
      {
        title: "Badsanierung in Hanau",
        text: "Das Badezimmer gehört zu den am häufigsten modernisierten Räumen, da viele Bäder in Hanau weder optisch noch funktional heutigen Erwartungen entsprechen. Der Wunsch nach bodengleichen Duschen, mehr Bewegungsfreiheit, modernen Waschtischen und pflegeleichten Materialien steht hierbei im Fokus. Radex betrachtet bei der Badsanierung nicht nur die sichtbaren Bereiche, sondern bezieht Sanitärtechnik, Leitungen und fachgerechte Abdichtungen konsequent mit ein, um langfristig funktionierende Lösungen zu schaffen.",
      },
      {
        title: "Wohnung modernisieren nach Kauf oder Eigentümerwechsel",
        text: "Der Zeitraum zwischen dem Kaufvertrag und dem eigentlichen Einzug bietet die beste Gelegenheit für eine Wohnungssanierung in Hanau. In den leerstehenden Räumen lassen sich Badmodernisierungen, neue Bodenbeläge, Wandgestaltungen, Beleuchtungskonzepte und der Austausch von Innentüren besonders zügig und sauber umsetzen. Radex unterstützt Eigentümer dabei, von Anfang an die richtige Reihenfolge der Gewerke festzulegen, Prioritäten zu setzen und unnötige Doppelarbeiten zu vermeiden.",
      },
      {
        title: "Geerbte Immobilien sinnvoll weiterentwickeln",
        text: "Wenn in Hanau ein Elternhaus oder ein Mehrgenerationenhaus innerhalb der Familie weitergegeben wird, steht neben der technischen Aktualisierung vor allem der langfristige Werterhalt im Vordergrund. Unabhängig davon, ob die geerbte Immobilie später selbst genutzt oder vermietet werden soll, bringt jedes Objekt individuelle Voraussetzungen mit. Radex entwickelt maßgeschneiderte Konzepte, um geerbte Häuser und Wohnungen strukturell und technisch an die Anforderungen der neuen Bewohner anzupassen.",
      },
      {
        title: "Innenausbau für neue Wohnkonzepte",
        text: "Wohnbedürfnisse verändern sich im Laufe der Zeit: Kinderzimmer werden zu Arbeitsbereichen, kleinteilige Grundrisse sollen geöffnet werden oder es wird zusätzlicher Stauraum benötigt. Ein moderner Innenausbau mittels flexiblem Trockenbau, neuen Bodenbelägen und modernen Oberflächen bietet die Möglichkeit, Bestandsimmobilien in Hanau optimal an den aktuellen Alltag anzupassen und ungenutzte Flächen wieder attraktiv und bewohnbar zu machen.",
      },
      {
        title:
          "Gebäudetechnik in Hanau – die Basis für eine funktionierende Immobilie",
        text: "Bei vielen gepflegten Häusern und Wohnungen in Hanau wurden über Jahrzehnte hinweg vor allem sichtbare Oberflächen renoviert, während die technische Infrastruktur unverändert blieb. Im Rahmen einer nachhaltigen Modernisierung sichert die fachgerechte Überprüfung und Erneuerung von Sanitärtechnik, Wasserleitungen und Heizkörpern den Werterhalt der Immobilie. Unter SHK-Meisterverantwortung sorgt Radex dafür, dass die Gebäudetechnik präzise auf die neue Nutzung abgestimmt wird.",
      },
      {
        title: "Immobilienwert erhalten und Zukunft vorbereiten",
        text: "Moderne Käufer und Mieter in Hanau achten zunehmend auf zeitgemäße Badezimmer, flexible Raumnutzung und Energieeffizienz. Um die Attraktivität einer Immobilie langfristig zu sichern, setzen vorausschauende Eigentümer auf gezielte Modernisierungsmaßnahmen statt reiner Schönheitsreparaturen. Oft reichen bereits punktuelle Investitionen in das Bad, den Innenausbau oder technische Erneuerungen aus, um den Marktwert des Objekts spürbar zu steigern.",
      },
      {
        title: "Wenn Feuchtigkeit zum Problem wird",
        text: "Nicht jedes Sanierungsprojekt ist von langer Hand geplant – oft zwingen plötzliche Ereignisse wie ein Rohrbruch, ein Wasserschaden oder Schimmelbildung zum Handeln. In solchen Situationen ist neben einer schnellen Reaktion vor allem eine fundierte Ursachenanalyse entscheidend, da oberflächliche Reparaturen feuchte Kellerbereiche oder beschädigte Wände nicht dauerhaft instand setzen. Radex unterstützt Eigentümer in Hanau dabei, Schäden ganzheitlich zu bewerten und technisch sauber zu beseitigen.",
      },
      {
        title: "Schimmel und Schadstoffthemen bei älteren Gebäuden",
        text: "Da ältere Bestandsimmobilien in Hanau aus Bauphasen stammen, in denen heute bedenkliche Baustoffe verwendet wurden, ist bei größeren Umbauten besondere Vorsicht geboten. Radex verfügt über die notwendige Sachkunde und Zertifizierungen für die professionelle Schimmel- und Asbestsanierung nach TRGS 519. Verdachtsfälle bei Feuchtigkeitsschäden oder alten Materialien werden im Vorfeld gründlich analysiert, um gesundheitliche und bauliche Risiken sicher auszuschließen.",
      },
      {
        title: "Gewerbeimmobilien und Praxisflächen in Hanau",
        text: "Als dynamischer Wirtschaftsstandort erfordert Hanau regelmäßig die Modernisierung und Neuordnung von Büros, Praxen, Kanzleien und Ladenlokalen. Bei gewerblichen Objekten stehen funktionale Raumaufteilungen, repräsentative Kundenbereiche und vor allem kurze Ausfallzeiten im Fokus. Radex begleitet Eigentümer und Gewerbetreibende mit einer straffen und transparenten Planung, um die Modernisierung bestehender Gewerbeflächen effizient umzusetzen.",
      },
      {
        title: "Kesselstadt, Steinheim, Großauheim, Klein-Auheim und Wolfgang",
        text: "Die Hanauer Stadtteile weisen sehr unterschiedliche Immobilienstrukturen auf. Während in beliebten Wohnlagen wie Kesselstadt und Klein-Auheim vor allem hochwertige Badmodernisierungen und der Innenausbau von Familienhäusern im Vordergrund stehen, prägen Steinheim und Großauheim charmante, ältere Wohnhäuser, die nach einem Eigentümerwechsel schrittweise saniert und energetisch aufgewertet werden müssen. Radex bietet für jeden Stadtteil die passende, lokale Fachexpertise.",
      },
    ],
  },
  wiesbaden: {
    name: "Wiesbaden",
    path: "/sanierung-wiesbaden",
    heroImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Wiesbaden_BW_2017-04-24_20-51-36.jpg/1280px-Wiesbaden_BW_2017-04-24_20-51-36.jpg",
    districts: [
      "Biebrich",
      "Sonnenberg",
      "Schierstein",
      "Nordenstadt",
      "Nordost",
    ],
    extraContent: [
      {
        title: "Sanierung in Weiterstadt",
        text: "Weiterstadt gehört zu den dynamischsten Städten im Landkreis Darmstadt-Dieburg. Die Nähe zu Darmstadt, die hervorragende Anbindung an das gesamte Rhein-Main-Gebiet sowie die vielseitige Mischung aus modernen Wohngebieten, Gewerbestandorten und gewachsenen Immobilienstrukturen bieten die ideale Basis für anspruchsvolle Modernisierungen. Radex unterstützt Eigentümer und Käufer dabei, Bestandsgebäude durch eine koordinierte, gewerkeübergreifende Sanierung funktional aufzuwerten, den Wohnkomfort zeitgemäß zu maximieren und den Immobilienwert langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Weiterstadt",
        text: "Ein modernes Badezimmer muss den Anforderungen des Alltags standhalten und gleichzeitig barrierearmen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Weiterstadt optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Weiterstadt",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer geplanten Neuvermietung bietet in den zentralen Wohnbereichen Weiterstadts die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Weiterstadt",
        text: "Viele Einfamilienhäuser und Reihenhäuser in den gefragten Wohnlagen im Weiterstädter Umfeld verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Weiterstadt",
        text: "Die Modernisierung älterer Wohngebäude im Stadtgebiet verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Weiterstadt",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice für Berufspendler. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Weiterstadt",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Weiterstadt",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Weiterstadt",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle von Braunshardt über Gräfenhausen und Schneppenhausen bis in die Kernstadt individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Weiterstadt",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Verkaufsflächen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen in den Wirtschafts- und Gewerbestandorten wie der Riedbahn.",
      },
    ],
  },
  mainz: {
    name: "Mainz",
    path: "/sanierung-mainz",
    heroImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mainz_Dom_BW_2012-08-18_16-18-12.JPG/1280px-Mainz_Dom_BW_2012-08-18_16-18-12.JPG",
    districts: [
      "Altstadt",
      "Neustadt",
      "Oberstadt",
      "Gonsenheim",
      "Bretzenheim",
      "Mombach",
    ],
    extraContent: [
      {
        title: "Haus modernisieren in Mainz",
        text: "Mainz verbindet rheinhessische Lebensqualität in dynamischen Stadtteilen wie Gonsenheim oder Hechtsheim mit einer anhaltend hohen Nachfrage nach attraktivem Wohnraum. Viele freistehende Einfamilienhäuser, Reihenhäuser und Bestandsimmobilien weisen nach Jahrzehnten der Nutzung einen spürbaren Modernisierungsstau auf. Radex unterstützt anspruchsvolle Eigentümer dabei, bestehende Gebäude durch eine durchdachte, gewerkeübergreifende Sanierung funktional aufzuwerten, moderne Standards zu integrieren und den Werterhalt langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Mainz",
        text: "Ein zeitgemäßes Badezimmer erfordert ein stimmiges Lichtkonzept, hochwertige Materialien und barrierearmen Komfort für alle Generationen. Bei einer professionellen Badsanierung in Mainz optimiert Radex nicht nur die sichtbare Raumaufteilung und die Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur hinter der Wand – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Mainz",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer Neuvermietung bietet in den zentralen Wohnlagen der Mainzer Oberstadt oder in Bretzenheim die beste Gelegenheit für eine Wohnungssanierung. Da die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie alle technischen Anpassungen der Elektro- und Sanitärkomponenten hocheffizient vor Ihrem Einzug.",
      },
      {
        title: "Haussanierung in Mainz",
        text: "Gepflegte Einfamilienhäuser und großzügige Familienbauten in Gonsenheim oder Finthen besitzen meist eine hervorragende Bausubstanz, entsprechen energetisch und visuell jedoch oft nicht mehr der Zeit. Radex betrachtet Ihr Gebäude als Gesamtsystem und verbindet gewünschte Grundrissänderungen für offenes Wohnen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, gewerkeübergreifenden Sanierungsprozess.",
      },
      {
        title: "Altbausanierung in Mainz",
        text: "Die Modernisierung charakterstarker Gründerzeitbauten und historischer Immobilien in der Mainzer Altstadt oder der beliebten Neustadt verlangt besondere bauphysikalische Sorgfalt. Radex analysiert bestehende Schwachstellen wie marode Rohrleitungen im Bestand, unzureichenden Schallschutz oder Feuchtigkeit im historischen Mauerwerk gründlich und löst diese nachhaltig, um den besonderen Charme des Altbaus mit zeitgemäßem Wohnkomfort zu verbinden.",
      },
      {
        title: "Innenausbau und Umbau in Mainz",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem integrierten Homeoffice für Berufspendler. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut vorhandene Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre veränderte Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Mainz",
        text: "Unter SHK-Meisterverantwortung sorgt Radex für eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Mainz",
        text: "Moderne Haushalte benötigen durch Homeoffice, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder notwendigen Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Mainz",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur langfristigen Sicherung des Immobilienwerts gewinnt die energetische Modernisierung im Bestand stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Mainz",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen in der Universitäts- und Wirtschaftsstadt Mainz stehen funktionale Anforderungen und minimale Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  aschaffenburg: {
    name: "Aschaffenburg",
    path: "/sanierung-aschaffenburg",
    heroImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Schloss_Johannisberg_%28Aschaffenburg%29_II.jpg/1280px-Schloss_Johannisberg_%28Aschaffenburg%29_II.jpg",
    districts: [
      "Innenstadt",
      "Damm",
      "Leider",
      "Nilkheim",
      "Schweinheim",
      "Strietwald",
    ],
    extraContent: [
      {
        title: "Sanierung in Aschaffenburg",
        text: "Aschaffenburg ist ein besonderer Sanierungsstandort: urban genug für Altbauwohnungen, Gewerbeflächen und Mehrfamilienhäuser, zugleich geprägt von gewachsenen Wohnlagen und Einfamilienhäusern zwischen Main und Spessart. Radex unterstützt Eigentümer und Käufer dabei, Bestandsgebäude durch eine koordinierte, gewerkeübergreifende Sanierung funktional aufzuwerten, den Wohnkomfort zeitgemäß zu maximieren und den Immobilienwert langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Aschaffenburg",
        text: "Ein modernes Badezimmer muss den Anforderungen des Alltags standhalten und gleichzeitig barrierearmen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Aschaffenburg optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Aschaffenburg",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer geplanten Neuvermietung bietet in den zentralen Wohnbereichen Aschaffenburgs die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Aschaffenburg",
        text: "Viele Einfamilienhäuser und Reihenhäuser in den gefragten Wohnlagen im Aschaffenburger Umfeld verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Aschaffenburg",
        text: "Die Modernisierung älterer Wohngebäude rund um die Stadtmitte und die historischen Quartiere verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderne Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Aschaffenburg",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten, altersgerechten Wohnraum. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Aschaffenburg",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Aschaffenburg",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Aschaffenburg",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle von Damm und Schweinheim über Nilkheim und Leider bis nach Obernau individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Aschaffenburg",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Verkaufsflächen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen im gesamten Stadtgebiet.",
      },
    ],
  },
  roedermark: {
    name: "Rödermark",
    path: "/sanierung-roedermark",
    heroImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Seligenstadt_Frankfurter_Strasse_12.jpg/1280px-Seligenstadt_Frankfurter_Strasse_12.jpg",
    districts: ["Ober-Roden", "Urberach", "Waldacker"],
    extraContent: [
      {
        title: "Sanierung in Rödermark",
        text: "Rödermark ist für Radex der zentrale Standort, von dem aus viele Sanierungen im Rhein-Main-Gebiet geplant, koordiniert und umgesetzt werden. Für Eigentümer in Ober-Roden, Urberach, Messenhausen, Waldacker und Bulau bedeutet das kurze Wege, regionale Nähe und direkte Erreichbarkeit. Radex unterstützt Sie dabei, Bestandsgebäude durch eine koordinierte, gewerkeübergreifende Sanierung funktional aufzuwerten, den Wohnkomfort zeitgemäß zu maximieren und den Immobilienwert langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Rödermark",
        text: "Ein modernes Badezimmer muss den Anforderungen des Alltags standhalten und gleichzeitig barrierearmen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Rödermark optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Rödermark",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer geplanten Neuvermietung bietet in den Wohnbereichen Rödermarks die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Rödermark",
        text: "Viele Einfamilienhäuser, Doppelhaushälften und Reihenhäuser in Rödermark verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Rödermark",
        text: "Die Modernisierung älterer Wohngebäude und Bestandsimmobilien im Stadtgebiet verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Rödermark",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Rödermark",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Rödermark",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Rödermark",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle von Ober-Roden und Urberach über Waldacker bis nach Messenhausen oder Bulau individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Rödermark",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder kleineren Gewerbeobjekten stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen im gesamten Stadtgebiet.",
      },
    ],
  },
  babenhausen: {
    name: "Babenhausen",
    path: "/sanierung-babenhausen",
    heroImg: "/assets/sanierung-babenhausen-radex.webp",
    districts: [
      "Babenhausen",
      "Harreshausen",
      "Harpertshausen",
      "Hergershausen",
      "Langstadt",
      "Sickenhofen",
    ],
    extraContent: [
      {
        title: "Sanierung in Babenhausen",
        text: "Wer in Babenhausen eine Immobilie saniert, hat meistens einen konkreten Anlass. Ein Bad ist in die Jahre gekommen. Eine Wohnung wurde gekauft und soll vor dem Einzug modernisiert werden. Ein Haus soll technisch auf einen zuverlässigeren Stand gebracht werden. Oder ein älteres Gebäude braucht neue Leitungen, bessere Oberflächen und eine sinnvollere Raumaufteilung. Babenhausen ist dabei nicht nur eine Stadt mit einem historischen Kern. Radex begleitet Eigentümer, Käufer, Vermieter, Hausverwaltungen und Gewerbekunden bei Sanierungsprojekten in Babenhausen.",
      },
      {
        title: "Badsanierung in Babenhausen",
        text: "Das Badezimmer gehört zu den Räumen, die im Alltag am stärksten auffallen. Viele Bäder in Bestandsimmobilien funktionieren noch, passen aber nicht mehr zu heutigen Ansprüchen. Radex begleitet Badsanierungen von der ersten Besichtigung über die Planung bis zur fertigen Übergabe.",
      },
      {
        title: "Wohnungssanierung in Babenhausen",
        text: "Wohnungssanierungen entstehen häufig nach einem Kauf, nach einer Erbschaft, vor dem Einzug oder nach einem Mieterwechsel. Radex unterstützt bei der Planung und Koordination von Wohnungssanierungen in Babenhausen.",
      },
      {
        title: "Haussanierung in Babenhausen",
        text: "Viele Häuser wurden über Jahrzehnte genutzt, gepflegt und teilweise immer wieder modernisiert. Radex koordiniert diese Abläufe und unterstützt Eigentümer dabei, ihre Immobilie Schritt für Schritt oder umfassend zu modernisieren.",
      },
      {
        title: "Altbausanierung in Babenhausen",
        text: "Ältere Gebäude haben oft eine Qualität, die heute selten neu entsteht. Radex betrachtet Altbauten nicht als Problemfälle, sondern als Immobilien mit Potenzial.",
      },
      {
        title: "Innenausbau & Umbau in Babenhausen",
        text: "Nicht jede Sanierung beginnt mit einem technischen Problem. Häufig geht es darum, Räume besser an die heutige Nutzung anzupassen.",
      },
      {
        title: "Heizung & Sanitär in Babenhausen",
        text: "Besonders bei älteren Gebäuden sind Wasserleitungen, Heizungsanlagen und Sanitärinstallationen häufig nicht mehr auf dem aktuellen Stand.",
      },
      {
        title: "Elektrotechnik in Babenhausen",
        text: "Die Anforderungen an elektrische Anlagen haben sich stark verändert. Homeoffice, Smart Home und digitale Technik stellen neue Anforderungen an bestehende Installationen.",
      },
      {
        title: "Energetische Sanierung in Babenhausen",
        text: "Steigende Energiekosten führen dazu, dass viele Eigentümer ihre Immobilie energetisch überprüfen lassen.",
      },
      {
        title: "Soforthilfe bei Wasserschaden, Rohrbruch und Schimmel",
        text: "Ein Rohrbruch, austretendes Wasser, Feuchtigkeit im Mauerwerk oder Schimmel können dazu führen, dass schnell reagiert werden muss.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Babenhausen",
        text: "Radex begleitet Modernisierungen und Umbauten von Büros, Praxen, Ladenflächen, Gewerbeeinheiten und vermieteten Objekten.",
      },
    ],
  },
  badhomburg: {
    name: "Bad Homburg",
    path: "/sanierung-bad-homburg-vor-der-hoehe",
    heroImg: "/assets/sanierung-bad-homburg-radex.webp",
    districts: [
      "Bad Homburg Kernstadt",
      "Gonzenheim",
      "Kirdorf",
      "Dornholzhausen",
      "Ober-Eschbach",
      "Ober-Erlenbach",
    ],
    extraContent: [
      {
        title: "Sanierung in Bad Homburg vor der Höhe",
        text: "Bad Homburg vor der Höhe gehört zu den hochwertigsten Wohnstandorten im Rhein-Main-Gebiet und verbindet gepflegte Wohnquartiere, Villen, Einfamilienhäuser und anspruchsvolle Eigentumswohnungen. Wer hier eine Immobilie besitzt, kauft oder verwaltet, legt bei einer Sanierung großen Wert auf nachhaltigen Werterhalt, Wohnkomfort und eine Modernisierung, die zur Architektur passt. Die Radex Objektmanagement GmbH begleitet Sanierungen in Bad Homburg mit klarer Projektkoordination. Eigentümer erhalten einen festen Ansprechpartner, der alle Gewerke von Innenausbau und Fliesenarbeiten über Trockenbau bis hin zur anspruchsvollen Raumgestaltung koordiniert.",
      },
      {
        title: "Badsanierung in Bad Homburg vor der Höhe",
        text: "Das Badezimmer ist in vielen Immobilien der erste Raum, an dem Modernisierungsbedarf sichtbar wird. In Bad Homburg betrifft das sowohl ältere Eigentumswohnungen in der Kernstadt als auch Bestandsgebäude in Kirdorf und Gonzenheim. Veraltete Fliesen, hohe Einstiegskanten oder unpraktische Grundrisse passen oft nicht mehr zu heutigen Erwartungen an Komfort. Radex koordiniert Badsanierungen so, dass neben hochwertigen Fliesen, bodengleichen Duschen und modernen Sanitärobjekten auch Wasserleitungen, Abdichtungen und Entlüftungen präzise erneuert werden.",
      },
      {
        title: "Wohnungssanierung in Bad Homburg",
        text: "Eine Wohnungssanierung entsteht häufig nach einem Kauf, vor dem Einzug, nach einem Mieterwechsel oder im Zuge einer Wertsteigerung. Radex begleitet Wohnungssanierungen in Bad Homburg mit einem gewerkeübergreifenden Blick, der alle Arbeiten an Böden, Wänden, Türen und Decken mit der Modernisierung von Bad und Küche verbindet. Besonders bei Eigentumswohnungen im Zentrum ist die Organisation bezüglich Hausordnung, Materialtransport und Abstimmung mit der Hausverwaltung wichtig und wird von Radex zuverlässig gesteuert.",
      },
      {
        title: "Haussanierung in Bad Homburg vor der Höhe",
        text: "Viele Einfamilienhäuser und Reihenhäuser in Dornholzhausen, Ober-Erlenbach oder Ober-Eschbach besitzen eine solide Substanz, wurden aber über Jahrzehnte oft nur abschnittsweise modernisiert. Eine umfassende Haussanierung betrachtet das Gebäude als Gesamtsystem. Radex sorgt dafür, dass die Modernisierung von Badezimmern, der Innenausbau, die Überprüfung von Kellerräumen sowie die Anpassung von Raumaufteilungen nahtlos ineinandergreifen, um die Immobilie langfristig werthaltig und funktional aufzustellen.",
      },
      {
        title:
          "Altbausanierung in Bad Homburg – Charakter erhalten, Technik modernisieren",
        text: "Bad Homburg besitzt einen hohen Bestand an repräsentativen Altbauten und historischen Immobilien, deren Sanierung besonderes Fingerspitzengefühl erfordert. Das Ziel von Radex ist es, den individuellen Charakter und erhaltenswerte Substanz wie Holzböden oder Treppenhäuser zu bewahren und gleichzeitig moderne Wohnqualität zu schaffen. Dabei werden typische Altbauthemen wie veraltete Leitungsstrukturen, unklare Deckenaufbauten, Wärmebrücken und unzureichender Schallschutz systematisch gelöst.",
      },
      {
        title: "Innenausbau und Umbau in Bad Homburg",
        text: "Der Innenausbau entscheidet darüber, wie eine modernisierte Immobilie später wirkt und im Alltag genutzt wird. Ob Trockenbauwände für eine neue Raumaufteilung, das Glätten von Decken und Wänden, der Einbau neuer Zargen und Türen oder das Verlegen von hochwertigem Parkett und Designböden – Radex koordiniert alle Umbauarbeiten. Eine saubere Abstimmung verhindert doppelte Wege und sorgt dafür, dass der Innenausbau erst nach Abschluss aller technischen Vorarbeiten erfolgt.",
      },
      {
        title: "Heizung und Sanitär unter SHK-Meisterkompetenz",
        text: "Im Bereich Heizung, Sanitär und Gebäudetechnik ist Radex meistergeführt durch Bernd Knoop, SHK-Meister und Betriebsleiter. Für Eigentümer in Bad Homburg stellt dies sicher, dass Sanitärinstallationen, Wasserleitungen, Abwasserkanäle, Heizkörpermontagen und die Warmwasserbereitung fachlich verantwortet werden. Technische Modernisierungen werden somit nicht isoliert betrachtet, sondern perfekt in den Ablauf von Bad- oder Haussanierungen integriert.",
      },
      {
        title: "Elektrotechnik bei Sanierungen in Bad Homburg",
        text: "Moderne Küchen, Homeoffice-Arbeitsplätze, Smart-Home-Komponenten und anspruchsvolle Beleuchtungskonzepte stellen hohe Anforderungen an die Elektrik, die ältere Bestandsinstallationen oft nicht erfüllen. Radex übernimmt im Zuge der Sanierung die Elektrokoordination über qualifizierte Fachpartner. Anschlüsse, Steckdosen und Netzwerkverkabelungen werden frühzeitig eingeplant, sodass Wände und Oberflächen im Zuge des Innenausbaus nur einmal geöffnet werden müssen.",
      },
      {
        title: "Energetische Sanierung für langfristigen Werterhalt",
        text: "Da Immobilien in Bad Homburg meist langfristig gehalten werden, spielt die Energieeffizienz eine zentrale Rolle für Eigentümer. Eine energetische Modernisierung umfasst neben der Heiztechnik auch die Heizflächen, Dämmstandards und die Vermeidung von Wärmebrücken. Radex bindet energetische Maßnahmen sinnvoll in laufende Sanierungsprojekte ein. So können Optimierungen an Kellerdecken, Dachböden oder Heizkörpern ohne nachträgliche, doppelte Eingriffe durchgeführt werden.",
      },
      {
        title:
          "Notfallhilfe, Wasserschaden, Schimmel und Asbest in Bad Homburg",
        text: "Ein plötzlicher Wasserschaden, ein Rohrbruch oder Feuchtigkeitsflecken erfordern schnelles, professionelles Handeln. Radex unterstützt Eigentümer bei akuten Schäden, lokalisiert die Ursache und koordiniert Trocknungs- sowie Rückbauarbeiten. Zudem ist Radex für die Schimmel- und Asbestsanierung zertifiziert. Schadstoffverdächtige Altmaterialien, Kleber oder Rohrisolierungen in älteren Gebäuden werden unter Einhaltung strenger Sicherheitsauflagen fachgerecht saniert.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Bad Homburg",
        text: "Neben Wohnräumen modernisiert Radex auch gewerbliche Objekte wie Büros, Arztpraxen, Kanzleien und Ladenflächen in Bad Homburg. Bei Gewerbeprojekten stehen funktionale Grundrisse, repräsentative Oberflächen, eine belastbare Infrastruktur und vor allem eine exakte Terminplanung im Fokus. Radex koordiniert den Rückbau, den neuen Innenausbau sowie die Modernisierung von Sanitärbereichen, um Ausfallzeiten für den Betrieb zu minimieren.",
      },
    ],
  },
  badnauheim: {
    name: "Bad Nauheim",
    path: "/sanierung-bad-nauheim",
    heroImg: "/assets/sanierung-bad-nauheim-radex.webp",
    districts: [
      "Kernstadt und Kurstadtbereiche",
      "Steinfurth",
      "Nieder-Mörlen",
      "Rödgen",
      "Schwalheim",
      "Wisselsheim",
    ],
    extraContent: [
      {
        title: "Sanierung in Bad Nauheim",
        text: "Bad Nauheim gehört zu den besonderen Wohnstandorten in der Wetterau. Die Stadt ist geprägt von Kurstadt-Atmosphäre, gepflegten Wohnlagen, historischen Gebäuden, Eigentumswohnungen, Einfamilienhäusern, Mehrfamilienhäusern, Villen, älteren Bestandsimmobilien und modernen Wohnbereichen. Viele Immobilien besitzen eine hohe Lagequalität und solide Substanz, benötigen aber technische, optische oder energetische Modernisierungen, damit sie heutigen Ansprüchen gerecht werden. Eine Sanierung in Bad Nauheim beginnt häufig mit einem konkreten Anlass. Ein Badezimmer ist nicht mehr zeitgemäß. Eine Wohnung wurde gekauft und soll vor dem Einzug modernisiert werden. Ein Haus soll energetisch verbessert werden. Ein älteres Gebäude benötigt eine saubere technische Erneuerung. Nach einem Mieterwechsel sollen Bad, Böden, Wandflächen und Türen modernisiert werden. Oder ein Wasserschaden, Feuchtigkeit, Schimmelverdacht oder ein dringender Sanitärfall macht eine schnelle Einschätzung notwendig. Radex begleitet Eigentümer, Käufer, Vermieter, Hausverwaltungen und Gewerbekunden bei Sanierungsprojekten in Bad Nauheim. Dabei geht es nicht um einzelne, voneinander getrennte Arbeiten. Bad, Wohnung, Haus, Altbau, Innenausbau, Heizung, Sanitär, Elektrotechnik, energetische Sanierung, Notsanierung und Gewerbeumbau werden sinnvoll koordiniert. Gerade bei hochwertigen Bestandsimmobilien ist diese Gesamtplanung wichtig. Wird ein Badezimmer saniert, sollten Wasserleitungen, Abwasser, Abdichtung, Heizkörper, Lüftung und Elektroanschlüsse früh geprüft werden. Wird eine Wohnung vor dem Einzug modernisiert, sollten Bad, Böden, Wandflächen, Türen und Technik zusammen betrachtet werden. Wird ein Haus langfristig erhalten, spielen neben Optik und Wohnkomfort auch Heizung, Sanitär, Energieverbrauch, Feuchtigkeit und Werterhalt eine wichtige Rolle. Bad Nauheim besitzt unterschiedliche Immobilienstrukturen. Eine Altbauwohnung in zentraler Lage stellt andere Anforderungen als ein Einfamilienhaus in ruhiger Wohnlage, eine Eigentumswohnung nach Kauf, ein gepflegtes Mehrfamilienhaus, eine Villa, ein Gewerbeobjekt oder eine Praxisfläche. Deshalb sollte eine Sanierung nicht nach Schema erfolgen, sondern zur Immobilie, Nutzung und gewünschten Qualität passen. Eine gute Sanierungsplanung klärt zuerst, welche Arbeiten dringend sind, welche Maßnahmen zusammen ausgeführt werden sollten und welche Bereiche später folgen können. Dadurch lassen sich unnötige Eingriffe vermeiden und Angebote sauberer kalkulieren.",
      },
      {
        title: "Badsanierung in Bad Nauheim",
        text: "Eine Badsanierung in Bad Nauheim gehört zu den häufigsten Modernisierungsprojekten. Viele Badezimmer wurden vor Jahren eingebaut und funktionieren noch, sind aber im Alltag nicht mehr komfortabel. Hohe Duschtassen, dunkle Fliesen, wenig Stauraum, schlechte Beleuchtung, alte Armaturen oder beschädigte Fugen machen das Bad unpraktisch und optisch veraltet. Ein modernes Badezimmer soll hell, pflegeleicht, sicher, gut nutzbar und technisch zuverlässig sein. Für Familien zählt häufig Stauraum und robuste Ausstattung. Für ältere Eigentümer stehen Komfort, Sicherheit und barrierearme Nutzung im Vordergrund. Für Vermieter geht es um langlebige Materialien, gute Vermietbarkeit und einen Zustand, der nicht nach kurzer Zeit wieder erneuert werden muss. Bei hochwertigen Immobilien in Bad Nauheim kommt zusätzlich eine Gestaltung hinzu, die zur Qualität der Immobilie passt. Bei einer Badsanierung entscheidet nicht nur die sichtbare Gestaltung. Unter Dusche, Waschtisch, WC, Fliesen und Badmöbeln liegt die technische Grundlage des Raums. Gerade bei älteren Häusern, Eigentumswohnungen, Altbauwohnungen und hochwertigen Bestandsimmobilien sollte geprüft werden, ob vorhandene Anschlüsse und Leitungen noch zum geplanten Bad passen. Wenn das Bad ohnehin geöffnet wird, lassen sich technische Verbesserungen direkt einplanen. Radex koordiniert die beteiligten Fachbereiche, damit Badsanierung, Sanitärtechnik, Innenausbau, Abdichtung und Oberflächen sinnvoll zusammenwirken. Viele Käufer möchten das Badezimmer direkt nach der Übergabe erneuern. Das ist häufig sinnvoll, weil die Immobilie noch leer steht und weitere Arbeiten gleichzeitig geplant werden können.",
      },
      {
        title: "Wohnungssanierung in Bad Nauheim",
        text: "Wohnungssanierungen in Bad Nauheim entstehen häufig nach einem Kauf, nach einem Mieterwechsel oder vor einer Neuvermietung. Viele Wohnungen besitzen eine attraktive Lage und solide Grundstruktur, wirken aber durch alte Badezimmer, abgenutzte Bodenbeläge, unmoderne Wandflächen oder veraltete Technik nicht mehr zeitgemäß. Eine Wohnungssanierung kann gezielt oder umfassend erfolgen.模板 Entscheidend ist, wie die Wohnung später genutzt werden soll. Für Eigennutzer stehen Komfort, Raumgefühl und Alltagstauglichkeit im Mittelpunkt. Für Vermieter und Kapitalanleger zählen zusätzlich Vermietbarkeit, robuste Materialien, planbare Kosten und ein moderner Gesamteindruck. Der Zeitraum vor dem Einzug ist ideal für eine Wohnungssanierung. Räume sind leer, Arbeiten lassen sich besser koordinieren und mehrere Maßnahmen können gleichzeitig umgesetzt werden. Wenn Bad, Böden, Wände, Türen und Technik gemeinsam geplant werden, entsteht ein stimmiges Ergebnis. Außerdem werden spätere Eingriffe in bereits modernisierte Bereiche vermieden.",
      },
      {
        title: "Haussanierung in Bad Nauheim",
        text: "Viele Häuser in Bad Nauheim wurden über Jahrzehnte genutzt, gepflegt und teilweise abschnittsweise modernisiert. Dadurch entsteht häufig eine Immobilie mit guter Substanz, aber technischem, energetischem oder funktionalem Modernisierungsbedarf. Eine Haussanierung in Bad Nauheim lohnt sich besonders, wenn Eigentümer ihre Immobilie langfristig halten möchten oder nach dem Kauf vor dem Einzug modernisieren wollen. Bei hochwertigen Bestandsgebäuden geht es zusätzlich darum, Substanz, Wohnqualität und Wertentwicklung sinnvoll zusammenzubringen. Viele Häuser passen irgendwann nicht mehr zur aktuellen Lebenssituation. Kinderzimmer werden anders genutzt, Homeoffice wird wichtiger, das Bad soll komfortabler werden oder das Erdgeschoss soll offener wirken. Eine Sanierung kann helfen, vorhandene Fläche besser zu nutzen und das Haus für die nächsten Jahre vorzubereiten. Radex unterstützt Eigentümer dabei, notwendige und gewünschte Maßnahmen sinnvoll zu priorisieren.",
      },
      {
        title: "Altbausanierung in Bad Nauheim",
        text: "Bad Nauheim besitzt viele ältere Gebäude und hochwertige Bestandsimmobilien, bei denen eine Sanierung besondere Sorgfalt erfordert. Gerade bei Altbauwohnungen, Villen, gepflegten Mehrfamilienhäusern oder historischen Gebäuden sollte nicht nur die sichtbare Oberfläche modernisiert werden. Leitungen, Feuchtigkeit, Elektrostruktur, Heiztechnik, Bodenaufbauten und energetische Schwachstellen müssen früh betrachtet werden. Eine Altbausanierung bedeutet nicht, den Charakter einer Immobilie zu verlieren. Ziel ist es, vorhandene Qualität zu erhalten und die Immobilie technisch auf heutige Anforderungen vorzubereiten. Gerade nach dem Kauf eines älteren Hauses oder einer Altbauwohnung sollte nicht nur optisch geplant werden. Wenn Bad, Heizung, Sanitär, Elektrokoordination, Innenausbau und Energieeffizienz gemeinsam betrachtet werden, entsteht ein belastbarer Sanierungsplan.",
      },
      {
        title: "Innenausbau und Umbau in Bad Nauheim",
        text: "Viele Immobilien in Bad Nauheim besitzen eine attraktive Lage und eine wertvolle Grundsubstanz, passen aber nicht mehr vollständig zu heutigen Wohn- und Nutzungsanforderungen. Räume wirken zu kleinteilig, Arbeitsbereiche fehlen, Flure nehmen viel Fläche ein oder Oberflächen sind nach Jahren der Nutzung sichtbar gealtert. Gerade in einer Stadt mit Kurstadtcharakter, gepflegten Wohnlagen, Altbauwohnungen, Villen, Einfamilienhäusern und hochwertigen Bestandsgebäuden spielt Innenausbau eine besonders wichtige Rolle. Er entscheidet darüber, ob eine Immobilie nach der Sanierung nicht nur erneuert wirkt, sondern im Alltag wirklich besser funktioniert. Gerade wenn ohnehin eine Wohnungssanierung, Haussanierung oder Badsanierung geplant ist, sollte der Innenausbau früh berücksichtigt werden. So lassen sich Bodenaufbau, Elektroleitungen, Beleuchtung, Heizkörper und Wandgestaltung besser aufeinander abstimmen.",
      },
      {
        title: "Heizung und Sanitär in Bad Nauheim",
        text: "Bei Sanierungen in Bad Nauheim zeigt sich häufig, dass sichtbare Modernisierung und technische Modernisierung zusammengehören. Ein neues Bad funktioniert nur dann langfristig gut, wenn Sanitäranschlüsse, Abdichtung, Warmwasser, Heizkörper und Leitungsführung sauber geplant sind. Radex arbeitet im Bereich Heizung, Sanitär und Gebäudetechnik unter SHK-Meisterverantwortung. Dadurch können technische Anforderungen frühzeitig in die Gesamtplanung eingebunden werden. Besonders bei älteren Häusern, Altbauwohnungen, Villen und hochwertigen Bestandsimmobilien sollte geprüft werden, ob vorhandene Leitungen und Anschlüsse noch zum geplanten Umbau passen. Wenn Wände oder Böden ohnehin geöffnet werden, lassen sich technische Verbesserungen oft effizienter umsetzen.",
      },
      {
        title: "Elektrotechnik bei Sanierungen in Bad Nauheim",
        text: "Viele ältere Immobilien in Bad Nauheim wurden für einen Alltag geplant, in dem deutlich weniger elektrische Verbraucher genutzt wurden. Heute benötigen Haushalte mehr Steckdosen, bessere Beleuchtung, Netzwerkanschlüsse, Homeoffice-Lösungen, moderne Küchenanschlüsse, Smart-Home-Vorbereitung und häufig auch eine zukunftsfähige technische Infrastruktur. Bei einer Sanierung sollte Elektrotechnik deshalb früh mitgedacht werden. Das gilt besonders für Altbauwohnungen, hochwertige Eigentumswohnungen und Häuser, bei denen Wände, Decken oder Böden ohnehin bearbeitet werden. Radex koordiniert Elektroarbeiten über qualifizierte Fachpartner und stimmt die technische Planung mit Innenausbau, Bad, Küche und Wohnnutzung ab.",
      },
      {
        title: "Energetische Sanierung in Bad Nauheim",
        text: "Energetische Sanierungen werden für Eigentümer in Bad Nauheim immer wichtiger. Viele Gebäude besitzen eine gute Substanz und attraktive Lage, verursachen aber durch ältere Heiztechnik, Wärmeverluste oder unzureichende Dämmung höhere Betriebskosten als nötig. Eine energetische Sanierung kann verschiedene Bereiche betreffen. Besonders sinnvoll ist eine energetische Modernisierung, wenn sie mit ohnehin geplanten Arbeiten kombiniert wird. Werden Bad, Innenausbau, Heizung oder Böden saniert, können energetische Maßnahmen besser integriert werden. Bei älteren oder hochwertigeren Gebäuden sollte dabei besonders sorgfältig geprüft werden, welche Maßnahmen technisch sinnvoll sind und zur Immobilie passen. Nicht jede energetische Maßnahme ist für jedes Gebäude gleich geeignet.",
      },
      {
        title:
          "Nothilfe, Notsanierung, Wasserschaden, Schimmel und Asbest in Bad Nauheim",
        text: "Nicht jede Sanierung wird lange geplant. Manchmal entsteht Handlungsbedarf plötzlich: ein Wasserschaden, feuchte Wände, ein Rohrproblem, Schimmelverdacht oder beschädigte Boden- und Wandflächen. Radex unterstützt bei dringenden Sanierungsfällen in Bad Nauheim und koordiniert die nächsten Schritte. Dabei geht es nicht um pauschale Versprechen, sondern um eine seriöse Bewertung des Schadens und eine fachlich sinnvolle Vorgehensweise. Bei Feuchtigkeit und Schimmel ist entscheidend, nicht nur sichtbare Spuren zu beseitigen. Die Ursache muss geprüft werden, damit der Schaden nicht erneut entsteht. Gerade bei älteren Gebäuden, Altbauwohnungen, Kellern oder hochwertigen Bestandsimmobilien sollte Feuchtigkeit nicht oberflächlich behandelt werden.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Bad Nauheim",
        text: "Bad Nauheim ist durch Kur, Gesundheit, Dienstleistung, Einzelhandel, Wohnen und hochwertige Bestandsimmobilien auch für Gewerbe und Objekte mit besonderen Anforderungen relevant. Praxisflächen, Büroeinheiten, Ladenflächen, Dienstleistungsflächen oder vermietete Objekte müssen regelmäßig modernisiert werden, damit sie funktional, repräsentativ und technisch nutzbar bleiben. Bei Gewerbeobjekten sind klare Abläufe besonders wichtig. Übergabetermine, Nutzungsanforderungen, technische Anschlüsse und mögliche Ausfallzeiten sollten früh geplant werden.",
      },
      {
        title:
          "Bad Nauheim und Stadtteile – Sanierung passend zur lokalen Immobilienstruktur",
        text: "In der Kernstadt und in den zentralen Kurstadtbereichen finden sich Eigentumswohnungen, Altbauimmobilien, hochwertige Mehrfamilienhäuser, Praxisflächen und Immobilien mit besonderem Charakter. Hier entstehen häufig Badsanierungen, Wohnungssanierungen, Altbausanierungen, Innenausbauarbeiten und technische Modernisierungen. Steinfurth besitzt viele Wohnhäuser, Bestandsimmobilien und gewachsene Ortsstrukturen. Eigentümer investieren hier häufig in Haussanierung, Badsanierung, energetische Verbesserung und Innenausbau. In Nieder-Mörlen stehen viele Häuser, Reihenhäuser und Bestandsimmobilien im Mittelpunkt. Sanierungen betreffen häufig Badezimmer, Heizungs- und Sanitärtechnik, Innenausbau und Modernisierung nach Immobilienkauf. Rödgen ist kleinteiliger und ruhiger geprägt. Hier stehen oft Wohnhäuser und Bestandsimmobilien im Mittelpunkt, bei denen Werterhalt, Haustechnik und Wohnkomfort eine wichtige Rolle spielen. Schwalheim verbindet gewachsene Wohnbereiche mit Immobilien, die häufig langfristig erhalten und modernisiert werden sollen. Badsanierung, Haussanierung, Innenausbau und energetische Verbesserungen sind hier typische Themen. Wisselsheim besitzt viele ruhigere Wohnlagen und Bestandsimmobilien. Sanierungen betreffen oft Badmodernisierung, technische Modernisierung, energetische Verbesserung und Anpassungen nach Immobilienkauf.",
      },
      {
        title: "Sanierung nach Immobilienkauf in Bad Nauheim",
        text: "Viele Sanierungen in Bad Nauheim beginnen direkt nach dem Kauf einer Immobilie. Käufer möchten das Haus oder die Wohnung anpassen, bevor Möbel einziehen und der Alltag beginnt. Der Vorteil liegt darin, dass mehrere Maßnahmen gleichzeitig umgesetzt werden können. Das spart Zeit und verhindert spätere Eingriffe in bereits modernisierte Bereiche. Gerade bei hochwertigen Immobilien oder Altbauwohnungen in Bad Nauheim lohnt sich eine frühe Bestandsaufnahme. So lässt sich besser entscheiden, welche Elemente erhalten bleiben sollten und welche Modernisierungen technisch notwendig sind.",
      },
      {
        title:
          "Für Vermieter, Eigentümergemeinschaften und Hausverwaltungen in Bad Nauheim",
        text: "Viele Sanierungsprojekte betreffen nicht die Eigennutzung, sondern Vermietung, Verwaltung oder Objekterhalt. Radex unterstützt Vermieter, Eigentümergemeinschaften, Hausverwaltungen, Gewerbeobjektbesitzer, Kapitalanleger und Eigentümer von Praxis- und Dienstleistungsflächen bei der Umsetzung planbarer, nachvollziehbarer und auf den tatsächlichen Bedarf abgestimmter Sanierungsmaßnahmen.",
      },
      {
        title: "Ablauf einer Sanierung mit Radex in Bad Nauheim",
        text: "Der Prozess folgt einer klaren Struktur: Erstgespräch zur Abstimmung von Zielen und Dringlichkeit, gefolgt von einer fundierten Bestandsaufnahme vor Ort. Anschließend unterstützen wir bei der Priorisierung der Maßnahmen und erstellen ein transparentes Angebot. Die Umsetzung der verschiedenen Fachbereiche wird lückenlos koordiniert, bis das Projekt erfolgreich abgeschlossen und übergeben wird.",
      },
    ],
  },
  badsoden: {
    name: "Bad Soden",
    path: "/villa-haus-modernisieren-bad-soden-am-taunus",
    heroImg: "/assets/sanierung-bad-soden-radex.webp",
    districts: ["Bad Soden Kernstadt", "Neuenhain", "Altenhain"],
    extraContent: [
      {
        title: "Haus, Villa oder Wohnung in Bad Soden am Taunus modernisieren",
        text: "Bad Soden am Taunus gehört seit vielen Jahren zu den gefragtesten Wohnstandorten im gesamten Rhein-Main-Gebiet. Die Nähe zu Frankfurt, die hohe Lebensqualität und die attraktiven Wohnlagen sorgen dafür, dass Immobilien hier langfristig gefragt bleiben. Viele Eigentümer investieren deshalb bewusst in ihre Häuser, Wohnungen und Villen, um den Wert ihrer Immobilie zu erhalten und gleichzeitig den Wohnkomfort auf ein neues Niveau zu bringen. Anders als in vielen anderen Städten geht es bei Sanierungsprojekten in Bad Soden häufig nicht darum, grundlegende Mängel zu beseitigen. Viel häufiger stehen Komfort, Design, Werterhalt und die Anpassung an moderne Wohnansprüche im Mittelpunkt. Ein Badezimmer soll hochwertiger werden. Eine Villa wird nach dem Kauf modernisiert. Eine Eigentumswohnung soll vor dem Einzug neu gestaltet werden. Wohnräume sollen offener wirken. Technik und Ausstattung sollen auf den aktuellen Stand gebracht werden. Gerade bei hochwertigen Immobilien lohnt sich eine ganzheitliche Betrachtung. Wer einzelne Maßnahmen sinnvoll miteinander verbindet, schafft nicht nur mehr Wohnqualität, sondern investiert gleichzeitig in die langfristige Attraktivität der Immobilie. Radex begleitet Eigentümer in Bad Soden am Taunus bei Badsanierung, Wohnungssanierung, Haussanierung, Altbausanierung, Innenausbau, Heizung & Sanitär, Elektrotechnik, energetischer Sanierung, Schimmel- und Asbestsanierung sowie Gewerbe- und Objektsanierungen.",
      },
      {
        title: "Wenn das Badezimmer zum Highlight der Immobilie werden soll",
        text: "In hochwertigen Immobilien spielt das Badezimmer eine besondere Rolle. Es soll nicht nur funktional sein, sondern Komfort, Design und Alltag miteinander verbinden. Viele Badezimmer in Bad Soden stammen aus einer Zeit, in der andere Anforderungen galten. Obwohl die Ausstattung oft hochwertig war, entsprechen Raumgefühl, Nutzung und Gestaltung nicht immer den heutigen Erwartungen. Eigentümer wünschen sich großzügige Duschen, moderne Materialien, hochwertige Armaturen, elegante Lichtkonzepte und Lösungen, die langfristig überzeugen. Gerade in Villen, hochwertigen Eigentumswohnungen und großzügigen Einfamilienhäusern bietet eine professionelle Badsanierung enormes Potenzial. Dabei geht es nicht nur um Oberflächen. Leitungen, Sanitärtechnik, Raumaufteilung und spätere Nutzung sollten gemeinsam betrachtet werden. So entsteht ein Badezimmer, das den Charakter einer Immobilie unterstreicht und gleichzeitig modernen Wohnkomfort bietet.",
      },
      {
        title: "Nach dem Immobilienkauf die richtigen Entscheidungen treffen",
        text: "Viele Häuser, Villen und Eigentumswohnungen in Bad Soden wechseln innerhalb weniger Jahre den Eigentümer. Häufig werden diese Immobilien übernommen, bevor größere Modernisierungen stattfinden. Genau dieser Zeitraum bietet die beste Gelegenheit, die Immobilie an die eigenen Vorstellungen anzupassen. Solange die Räume leer stehen, lassen sich verschiedene Maßnahmen besonders effizient koordinieren. Wohnbereiche können neu gestaltet werden. Badezimmer können modernisiert werden. Technische Bereiche können geprüft werden. Innenausbau und Raumaufteilung lassen sich anpassen. Dadurch entsteht von Beginn an ein Wohnumfeld, das zur eigenem Lebenssituation passt. Gerade in hochwertigen Wohnlagen von Bad Soden lohnt sich eine strukturierte Modernisierung vor dem Einzug besonders.",
      },
      {
        title: "Wohnqualität steigern ohne umzuziehen",
        text: "Viele Eigentümer lieben ihre Immobilie und ihren Standort. Trotzdem verändern sich die Anforderungen im Laufe der Jahre. Kinder werden älter. Homeoffice wird wichtiger. Wohnbereiche sollen offener wirken. Stauraum wird benötigt. Deshalb spielt Innenausbau bei vielen Projekten in Bad Soden eine zentrale Rolle. Oft lassen sich durch intelligente Veränderungen erhebliche Verbesserungen erzielen, ohne zusätzliche Wohnfläche schaffen zu müssen. Räume wirken größer. Wohnbereiche werden heller. Arbeitsplätze lassen sich besser integrieren. Der Alltag wird komfortabler. Gerade hochwertige Häuser und Eigentumswohnungen profitieren von einer professionellen Wohnraumanpassung.",
      },
      {
        title: "Werterhalt und Wertsteigerung langfristig sichern",
        text: "Immobilien in Bad Soden zählen zu den wertstabilsten Objekten im Rhein-Main-Gebiet. Genau deshalb investieren viele Eigentümer bewusst in regelmäßige Modernisierungen. Eine hochwertige Sanierung verbessert nicht nur die Nutzung im Alltag. Sie kann auch dazu beitragen, die Attraktivität der Immobilie langfristig zu erhalten. Gerade bei Villen, Altbauten und hochwertigen Eigentumswohnungen spielen Werterhalt und Marktattraktivität eine zentrale Rolle. Deshalb betrachten viele Eigentümer Modernisierung nicht als Ausgabe, sondern als Investition in die Zukunft ihrer Immobilie.",
      },
      {
        title:
          "Immobilienkomfort und moderne Gebäudetechnik sinnvoll verbinden",
        text: "Wer eine hochwertige Immobilie in Bad Soden am Taunus modernisiert, denkt häufig zuerst an sichtbare Veränderungen. Ein neues Badezimmer, exklusive Oberflächen oder ein hochwertiger Innenausbau stehen oft im Mittelpunkt. Die eigentliche Grundlage für langfristigen Wohnkomfort liegt jedoch häufig hinter Wänden, unter Böden oder in technischen Bereichen, die im Alltag kaum wahrgenommen werden. Gerade bei Villen, hochwertigen Eigentumswohnungen und Einfamilienhäusern in Bad Soden lohnt es sich, Technik und Gestaltung gemeinsam zu betrachten. Eine hochwertige Badsanierung sollte nicht nur optisch überzeugen. Wasserleitungen, Warmwasserbereitung, Heizkörper, Sanitärtechnik und Gebäudetechnik müssen ebenfalls zum Nutzungskonzept der Immobilie passen. Viele Häuser in Bad Soden wurden über Jahre gepflegt und modernisiert. Trotzdem stammen technische Anlagen häufig aus unterschiedlichen Bauphasen. Dadurch entstehen Situationen, in denen einzelne Bereiche bereits modern sind, andere Komponenten jedoch nicht mehr optimal zur heutigen Nutzung passen. Radex betrachtet technische Modernisierung deshalb immer als Teil eines Gesamtkonzepts. Dadurch lassen sich spätere Doppelarbeiten vermeiden und langfristig funktionierende Lösungen entwickeln.",
      },
      {
        title: "Intelligente Elektroplanung für moderne Wohnansprüche",
        text: "Viele hochwertige Immobilien in Bad Soden wurden zu einer Zeit geplant, in der digitale Infrastruktur eine deutlich geringere Rolle spielte als heute. Inzwischen gehören Homeoffice, Smart-Home-Lösungen, moderne Beleuchtung, leistungsfähige Netzwerke und hochwertige Unterhaltungstechnik für viele Eigentümer selbstverständlich dazu. Gerade bei einer hochwertigen Modernisierung sollte deshalb frühzeitig geprüft werden, ob die bestehende Elektroinstallation noch zu den heutigen Anforderungen passt. Oft geht es nicht nur um zusätzliche Steckdosen. Lichtkonzepte sollen angepasst werden. Arbeitsbereiche benötigen Netzwerkanschlüsse. Smart-Home-Lösungen sollen vorbereitet werden. Wohnräume sollen flexibler genutzt werden. Wer diese Themen frühzeitig berücksichtigt, kann sie optimal in Innenausbau und Wohnkonzept integrieren.",
      },
      {
        title: "Zukunftssicherheit durch Energieeffizienz und Werterhalt",
        text: "Viele Eigentümer in Bad Soden denken langfristig. Sie möchten ihre Immobilie nicht nur heute genießen, sondern auch in den kommenden Jahren attraktiv und wertstabil halten. Deshalb gewinnt Energieeffizienz bei Modernisierungen zunehmend an Bedeutung. Eine energetische Sanierung sollte jedoch immer individuell betrachtet werden. Eine Villa in Neuenhain stellt andere Anforderungen als eine Eigentumswohnung in der Kernstadt oder ein Einfamilienhaus in Altenhain. Deshalb geht es nicht darum, möglichst viele Maßnahmen umzusetzen. Wichtiger ist die Frage, welche Schritte tatsächlich sinnvoll sind. Wer ohnehin eine Badsanierung, Haussanierung oder Modernisierung plant, kann energetische Themen häufig direkt integrieren und spätere Arbeiten vorbereiten. Dadurch entstehen Lösungen, die Wohnkomfort, Energieeffizienz und Werterhalt miteinander verbinden.",
      },
      {
        title:
          "Wenn Feuchtigkeit oder Wasserschäden schnelles Handeln erfordern",
        text: "Auch in hochwertigen Immobilien lassen sich Wasserschäden nicht vollständig vermeiden. Ein Rohrbruch. Feuchtigkeit hinter Wandflächen. Ein Schaden im Badezimmer. Oder ein Defekt an Leitungen. Gerade bei hochwertigen Immobilien können solche Situationen erhebliche Folgeschäden verursachen, wenn sie nicht frühzeitig bewertet werden. Wichtig ist dabei, nicht nur die sichtbaren Auswirkungen zu betrachten. Entscheidend ist die Ursache. Woher stammt die Feuchtigkeit? Welche Bauteile sind betroffen? Müssen weitere Bereiche geprüft werden? Viele Eigentümer nutzen solche Situationen gleichzeitig, um ohnehin geplante Modernisierungen vorzuziehen und technische Bereiche zu optimieren.",
      },
      {
        title: "Altbau, Schimmel und Schadstoffe frühzeitig erkennen",
        text: "Bad Soden verfügt über zahlreiche hochwertige Bestandsimmobilien und ältere Gebäude mit individuellem Charakter. Gerade bei Altbausanierungen oder größeren Umbauten können dabei Themen sichtbar werden, die vorher nicht erkennbar waren. Feuchtigkeit. Schimmelbildung. Ältere Baustoffe. Verdeckte Schäden. Deshalb empfiehlt es sich, mögliche Risiken frühzeitig zu prüfen. Schimmel entsteht selten ohne Ursache. Oft sind Feuchtigkeit oder bauliche Besonderheiten verantwortlich. Wer nur die sichtbaren Stellen behandelt, beseitigt häufig nicht das eigentliche Problem. Auch bei Verdacht auf Schadstoffe sollte vor Rückbauarbeiten Klarheit geschaffen werden. Radex verfügt über Sachkunde und Zertifizierungen im Bereich Schimmel- und Asbestsanierung nach TRGS 519.",
      },
      {
        title: "Gewerbeobjekte und hochwertige Büroflächen modernisieren",
        text: "Neben Wohnimmobilien verfügt Bad Soden über zahlreiche Praxen, Kanzleien, Dienstleistungsflächen und hochwertige Gewerbeeinheiten. Diese Flächen müssen regelmäßig modernisiert werden, um aktuellen Anforderungen gerecht zu werden. Nach einem Mieterwechsel oder einer Nutzungsänderung stehen häufig folgende Fragen im Mittelpunkt: Wie kann die Fläche effizienter genutzt werden? Welche Modernisierungen sind sinnvoll? Wie lassen sich verschiedene Gewerke koordinieren? Radex unterstützt Eigentümer und Unternehmen bei Büroumbau, Mieterausbau, Gewerbesanierung und Objektsanierung. Dabei steht ein strukturiertem Ablauf im Vordergrund, damit Flächen möglichst schnell wieder genutzt werden können.",
      },
      {
        title: "Bad Soden Kernstadt, Neuenhain und Altenhain",
        text: "Die verschiedenen Bereiche Bad Sodens unterscheiden sich deutlich in ihrer Struktur und den typischen Immobilien. In der Kernstadt finden sich hochwertige Eigentumswohnungen, Wohnanlagen und Bestandsimmobilien. Wohnungssanierungen, Badsanierungen und Modernisierungen nach Eigentümerwechsel gehören hier zu den häufigsten Projekten. Neuenhain ist geprägt von hochwertigen Einfamilienhäusern, Familienimmobilien und großzügigen Wohnlagen. Eigentümer investieren hier häufig in Haussanierung, Innenausbau, Energieeffizienz und hochwertige Badmodernisierung. Altenhain bietet viele Immobilien mit individuellem Charakter. Hier stehen Werterhalt, Altbausanierung, Wohnraumanpassung und langfristige Modernisierung häufig im Mittelpunkt.",
      },
      {
        title: "Haus, Villa oder Wohnung in Bad Soden am Taunus modernisieren",
        text: "Ob hochwertige Badsanierung in Neuenhain, Altbausanierung in Altenhain, Wohnungssanierung in der Kernstadt oder Innenausbau in einer Villa – Radex unterstützt Eigentümer in Bad Soden bei Planung, Koordination und Umsetzung. Wenn Sie eine Modernisierung in Bad Soden planen, rufen Sie uns unter 06074 9606020 an oder senden Sie Ihre Anfrage über den Kontaktbereich. Für eine schnelle Ersteinschätzung können Sie Bilder, Grundrisse oder vorhandene Unterlagen direkt mitsenden.",
      },
    ],
  },
  badvilbel: {
    name: "Bad Vilbel",
    path: "/haus-wohnung-modernisieren-bad-vilbel",
    heroImg: "/assets/sanierung-bad-vilbel-radex.webp",
    districts: [
      "Bad Vilbel Kernstadt",
      "Dortelweil",
      "Heilsberg",
      "Massenheim",
      "Gronau",
    ],
    extraContent: [
      {
        title: "Sanierung in Bad Vilbel",
        text: "Bad Vilbel gehört zu den Städten im Rhein-Main-Gebiet, die in den vergangenen Jahren besonders stark gewachsen sind. Viele Familien ziehen bewusst hierher, weil sie die Nähe zu Frankfurt mit einer angenehmen Wohnqualität verbinden möchten. Gleichzeitig entstehen neue Wohngebiete, Eigentumswohnungen wechseln den Besitzer und zahlreiche Häuser werden modernisiert, erweitert oder an neue Lebenssituationen angepasst. Genau deshalb ist Sanierung in Bad Vilbel weit mehr als die Beseitigung einzelner Mängel. In vielen Fällen geht es darum, eine Immobilie an die Anforderungen der nächsten zehn, fünfzehn oder zwanzig Jahre anzupassen. Familien benötigen mehr Platz. Arbeitszimmer werden wichtiger. Badezimmer sollen komfortabler werden. Heiztechnik muss wirtschaftlicher arbeiten. Wohnräume sollen heller, offener und flexibler nutzbar sein. Viele Eigentümer stellen fest, dass ihre Immobilie eigentlich alles mitbringt, was sie benötigen. Die Lage stimmt. Die Nachbarschaft passt. Die Grundstücksgröße ist ausreichend. Trotzdem wirkt das Haus oder die Wohnung nicht mehr zeitgemäß. Genau an diesem Punkt lohnt sich eine durchdachte Modernisierung häufig deutlich mehr als ein Umzug. Wer sein Haus in Bad Vilbel sanieren möchte, denkt heute oft ganzheitlich. Eine Badsanierung wird mit einer Modernisierung der Sanitärtechnik kombiniert. Eine Wohnungssanierung umfasst gleichzeitig Bodenbeläge, Innenausbau und Elektrotechnik. Eine Haussanierung verbindet Wohnkomfort, Energieeffizienz und langfristigen Werterhalt. Radex begleitet Eigentümer in Bad Vilbel bei Badsanierung, Wohnungssanierung, Haussanierung, Altbausanierung, Innenausbau und Umbau, Heizung und Sanitär, Elektrotechnik, energetischer Sanierung, Notfallhilfe, Schimmel- und Asbestsanierung sowie Gewerbe- und Objektsanierung. Gerade in einer Stadt wie Bad Vilbel, in der Immobilien langfristig gefragt bleiben, lohnt sich eine professionelle Planung. Denn eine gut umgesetzte Modernisierung verbessert nicht nur den Alltag, sondern erhöht häufig auch die Attraktivität und Zukunftsfähigkeit der Immobilie.",
      },
      {
        title:
          "Bad Vilbel wächst – und die Anforderungen an Immobilien wachsen mit",
        text: "Wer heute durch Bad Vilbel fährt, erkennt schnell, wie stark sich die Stadt entwickelt hat. Neue Wohngebiete, moderne Eigentumswohnungen und familienfreundliche Quartiere prägen das Bild. Gleichzeitig gibt es zahlreiche Bestandsimmobilien, die vor Jahren oder Jahrzehnten gebaut wurden und heute vor neuen Herausforderungen stehen. Viele Häuser wurden ursprünglich für andere Familiengrößen geplant. Damals gab es kein Homeoffice, andere Anforderungen an Badezimmer und oft auch eine völlig andere technische Ausstattung. Deshalb entscheiden sich immer mehr Eigentümer dafür, ihr Haus in Bad Vilbel zu modernisieren, statt nach einer neuen Immobilie zu suchen. Gerade Reihenhäuser, Doppelhaushälften und Einfamilienhäuser bieten häufig enormes Potenzial. Oft reichen gezielte Maßnahmen aus, um den Wohnkomfort deutlich zu verbessern. Räume können anders genutzt werden. Badezimmer können moderner gestaltet werden. Heiztechnik lässt sich optimieren. Wohnbereiche können geöffnet werden. Dadurch entsteht ein völlig neues Wohngefühl, ohne dass die Immobilie verlassen werden muss. Auch Eigentumswohnungen stehen häufig im Mittelpunkt von Modernisierungsprojekten. Nach einem Kauf möchten viele neue Eigentümer ihre Wohnung in Bad Vilbel renovieren, bevor sie einziehen. Badezimmer werden modernisiert, Bodenbeläge erneuert, Wände angepasst und technische Bereiche überprüft. Die Zeit vor dem Einzug bietet dafür ideale Voraussetzungen, weil verschiedene Arbeiten effizient miteinander kombiniert werden können.",
      },
      {
        title: "Ein Badezimmer, das den Alltag wirklich verbessert",
        text: "Kaum ein Raum wird so intensiv genutzt wie das Badezimmer. Gleichzeitig wird er häufig über viele Jahre kaum verändert. Genau deshalb gehört die Badsanierung in Bad Vilbel zu den häufigsten Modernisierungsmaßnahmen. Viele Eigentümer stellen fest, dass ihr Badezimmer nicht mehr zu ihrem Alltag passt. Die Dusche ist zu klein. Stauraum fehlt. Die Beleuchtung wirkt unpraktisch. Die Aufteilung stammt aus einer Zeit, in der andere Anforderungen galten. Besonders Familien wünschen sich heute Bäder, die nicht nur gut aussehen, sondern auch funktional überzeugen. Eine moderne Badmodernisierung beginnt deshalb nicht bei den Fliesen. Sie beginnt bei der Frage, wie der Raum genutzt wird. Wer morgens mit mehreren Personen gleichzeitig das Badezimmer nutzt, hat andere Anforderungen als ein Singlehaushalt. Wer langfristig pflegt, denkt vielleicht bereits über Barrierefreiheit oder komfortable Lösungen für spätere Lebensphasen nach. Bei einer professionellen Badsanierung werden deshalb Gestaltung, Nutzung und Technik gemeinsam betrachtet. Wasserleitungen, Abdichtungen, Sanitärtechnik, Lichtplanung und Raumaufteilung sollten zusammenpassen. So entsteht ein Badezimmer, das nicht nur heute modern wirkt, sondern auch langfristig funktioniert. Viele Eigentümer in Bad Vilbel nutzen die Gelegenheit außerdem, Gäste-WCs zu modernisieren oder mehrere Sanitärbereiche gleichzeitig zu erneuern. Dadurch lassen sich Arbeiten effizient bündeln und die Immobilie insgesamt aufwerten.",
      },
      {
        title: "Modernisierung vor dem Einzug spart später viel Aufwand",
        text: "Wer ein Haus oder eine Eigentumswohnung in Bad Vilbel kauft, möchte die Immobilie häufig an die eigenen Vorstellungen anpassen. Genau deshalb gehört die Modernisierung vor dem Einzug zu den sinnvollsten Zeitpunkten für größere Sanierungsmaßnahmen. Solange die Räume leer stehen, lassen sich Badezimmer modernisieren, Bodenbeläge austauschen, Innenausbauarbeiten durchführen und technische Bereiche überprüfen, ohne den Alltag einzuschränken. Gleichzeitig können verschiedene Gewerke besser koordiniert werden. Viele Eigentümer entscheiden sich deshalb dafür, ihr Haus nach dem Kauf zu sanieren oder ihre Wohnung vor dem Einzug vollständig zu modernisieren. Dadurch entstehen keine späteren Baustellen, wenn Möbel bereits aufgebaut sind oder die Familie eingezogen ist. Gerade in Bad Vilbel, Dortelweil und Heilsberg werden viele Immobilien bewusst mit Blick auf langfristige Nutzung gekauft. Eine durchdachte Sanierung direkt zu Beginn schafft die Grundlage dafür, dass die Immobilie viele Jahre den eigenen Anforderungen entspricht.",
      },
      {
        title: "Wohnraum an neue Lebensphasen anpassen statt neu bauen",
        text: "Viele Eigentümer in Bad Vilbel stellen irgendwann fest, dass nicht die Immobilie das Problem ist, sondern deren Aufteilung. Das Haus wurde vielleicht vor vielen Jahren für eine andere Familiensituation geplant. Kinderzimmer werden heute als Homeoffice genutzt. Aus zwei kleinen Räumen soll ein größerer Wohnbereich entstehen. Stauraum fehlt oder der Alltag hat sich verändert. Genau deshalb gehört Innenausbau in Bad Vilbel zu den häufigsten Gründen für eine Modernisierung. Dabei geht es längst nicht mehr nur um Trockenbau oder neue Oberflächen. Viel häufiger steht die Frage im Mittelpunkt, wie vorhandene Wohnfläche besser genutzt werden kann. Gerade in Dortelweil, Heilsberg und den neueren Wohngebieten möchten viele Familien zusätzlichen Komfort schaffen, ohne die Immobilie zu verlassen. Wohnbereiche werden geöffnet, Grundrisse optimiert und Räume an neue Anforderungen angepasst. Dadurch entsteht oft das Gefühl eines völlig neuen Hauses, obwohl die vorhandene Wohnfläche unverändert bleibt. Besonders beliebt sind Maßnahmen, die Küche, Wohnbereich und Esszimmer stärker miteinander verbinden. Gleichzeitig wächst die Nachfrage nach separaten Arbeitsbereichen, weil Homeoffice für viele Familien dauerhaft Teil des Alltags geworden ist. Ein professionell geplanter Innenausbau berücksichtigt nicht nur die aktuelle Situation. Er schafft Lösungen, die auch in einigen Jahren noch funktionieren und flexibel genutzt werden können.",
      },
      {
        title: "Wenn moderne Technik den Unterschied macht",
        text: "Viele Eigentümer konzentrieren sich bei einer Sanierung zunächst auf sichtbare Bereiche. Neue Fliesen, moderne Bodenbeläge oder frisch gestaltete Räume stehen häufig im Mittelpunkt. Langfristig entscheidet jedoch oft die technische Infrastruktur darüber, wie komfortabel eine Immobilie tatsächlich ist. In vielen Häusern und Wohnungen in Bad Vilbel stammen Wasserleitungen, Heizkörper oder Sanitärinstallationen aus einer Zeit, in der andere Anforderungen galten. Bei einer Badsanierung oder Haussanierung sollte deshalb immer geprüft werden, ob die vorhandene Technik noch sinnvoll genutzt werden kann oder ob Modernisierungen langfristig wirtschaftlicher sind. Gerade bei Einfamilienhäusern und Reihenhäusern lohnt sich eine ganzheitliche Betrachtung. Wenn ohnehin Badezimmer erneuert, Wände geöffnet oder Räume umgebaut werden, können technische Verbesserungen häufig ohne zusätzlichen Aufwand integriert werden. Radex plant Sanitär- und Heizungsbereiche nicht isoliert, sondern als Bestandteil einer langfristigen Modernisierung. Dadurch entstehen Lösungen, die Komfort, Zuverlässigkeit und spätere Nutzung miteinander verbinden.",
      },
      {
        title: "Elektrotechnik sollte nicht erst am Ende bedacht werden",
        text: "In vielen Bestandsimmobilien in Bad Vilbel zeigt sich während einer Modernisierung schnell, dass die Elektroinstallation nicht mehr optimal zu den heutigen Anforderungen passt. Die Zahl elektrischer Geräte ist deutlich gestiegen. Homeoffice benötigt andere Anschlüsse. Netzwerke spielen eine größere Rolle. Küchen benötigen mehr Leistung. Moderne Beleuchtungskonzepte verlangen andere Planungen. Deshalb gehört die Elektroinstallation zu den wichtigsten Themen einer modernen Sanierung. Wer Steckdosen, Licht, Netzwerk und spätere Nutzung frühzeitig berücksichtigt, vermeidet viele spätere Einschränkungen. Gerade bei Wohnungssanierungen und Innenausbauprojekten können Elektroarbeiten besonders effizient umgesetzt werden, wenn sie von Beginn an eingeplant werden. Radex koordiniert Elektroarbeiten über qualifizierte Fachpartner und integriert diese in den gesamten Ablauf der Sanierung.",
      },
      {
        title: "Energieeffizienz wird für viele Eigentümer immer wichtiger",
        text: "Steigende Energiekosten und neue Anforderungen an Gebäude führen dazu, dass energetische Sanierung in Bad Vilbel zunehmend an Bedeutung gewinnt. Dabei geht es nicht darum, möglichst viele Maßnahmen umzusetzen. Viel wichtiger ist die Frage, welche Lösungen tatsächlich zur jeweiligen Immobilie passen. Ein Reihenhaus in Dortelweil benötigt andere Maßnahmen als eine Eigentumswohnung in der Kernstadt oder ein Einfamilienhaus in Massenheim. Deshalb sollte Energieeffizienz immer individuell betrachtet werden. Wenn ohnehin eine Haussanierung, Badsanierung oder Modernisierung geplant ist, lassen sich viele energetische Themen sinnvoll integrieren. Wer frühzeitig plant, kann seine Immobilie langfristig besser aufstellen und gleichzeitig den Wohnkomfort verbessern.",
      },
      {
        title: "Wasserschäden sollten nie unterschätzt werden",
        text: "Nicht jede Sanierung beginnt freiwillig. Häufig ist es ein Schaden, der Eigentümer zum Handeln zwingt. Ein Rohrbruch. Feuchtigkeit im Badezimmer. Wasser unter dem Bodenbelag. Oder ein Schaden nach einem technischen Defekt. Gerade bei älteren Häusern können solche Situationen weitreichendere Folgen haben, als zunächst sichtbar ist. Deshalb sollte nicht nur die Oberfläche betrachtet werden. Entscheidend ist die Ursache. Woher kommt die Feuchtigkeit? Welche Bereiche sind betroffen? Welche weiteren Schäden könnten entstehen? Viele Eigentümer nutzen solche Situationen gleichzeitig, um ohnehin geplante Modernisierungen vorzuziehen und langfristige Lösungen umzusetzen.",
      },
      {
        title: "Schimmel und Schadstoffe frühzeitig erkennen",
        text: "Gerade bei älteren Immobilien in Bad Vilbel können während einer Sanierung Themen sichtbar werden, die vorher verborgen waren. Feuchtigkeit. Schimmel. Ältere Baustoffe. Verdeckte Schäden. Wer eine Altbausanierung pflegt, sollte solche Risiken frühzeitig prüfen lassen. Schimmel entsteht selten ohne Ursache. Häufig spielen Feuchtigkeit oder bauliche Besonderheiten eine Rolle. Wird lediglich die sichtbare Stelle behandelt, kann das Problem später erneut auftreten. Radex verfügt über Sachkunde und Zertifizierungen im Bereich Schimmel- und Asbestsanierung nach TRGS 519 und unterstützt Eigentümer dabei, Risiken frühzeitig zu erkennen.",
      },
      {
        title:
          "Bad Vilbel Kernstadt, Dortelweil, Heilsberg, Massenheim und Gronau",
        text: "Die verschiedenen Bereiche Bad Vilbels unterscheiden sich deutlich in ihrer Wohnstruktur. In der Kernstadt stehen Eigentumswohnungen, Mehrfamilienhäuser und gewachsene Wohnlagen häufig im Mittelpunkt. Wohnungssanierungen, Badsanierungen und Modernisierungen nach Eigentümerwechsel gehören hier zu den typischen Projekten. Dortelweil ist stark von Familienhäusern, Reihenhäusern und modernen Wohnquartieren geprägt. Viele Eigentümer investieren hier in Wohnraumanpassung, Badezimmermodernisierung und Energieeffizienz. Heilsberg verfügt über zahlreiche Bestandsimmobilien, die heute an moderne Wohnansprüche angepasst werden. Innenausbau, Haussanierung und technische Modernisierung spielen hier eine wichtige Rolle. Massenheim verbindet ländlichen Charakter mit attraktiven Wohnlagen. Eigentümer investieren häufig in Werterhalt, Badmodernisierung und langfristige Modernisierungskonzepte. Auch in Gronau stehen viele Projekte rund um Wohnkomfort, Sanierung nach Immobilienkauf und energetische Verbesserungen im Mittelpunkt.",
      },
      {
        title: "Haus oder Wohnung in Bad Vilbel modernisieren",
        text: "Ob Badsanierung in Dortelweil, Haussanierung in Massenheim, Wohnungssanierung in der Kernstadt oder Innenausbau in Heilsberg – Radex unterstützt Eigentümer bei Planung, Koordination und Umsetzung. Wenn Sie eine Modernisierung in Bad Vilbel planen, rufen Sie uns unter 06074 9606020 an oder senden Sie Ihre Anfrage über den Kontaktbereich. Für eine schnelle Ersteinschätzung können Sie Bilder, Grundrisse oder vorhandene Unterlagen direkt mitsenden.",
      },
    ],
  },
  bruchkoebel: {
    name: "Bruchköbel",
    path: "/sanierung-bruchkoebel",
    heroImg: "/assets/sanierung-bruchkoebel-radex.webp",
    districts: [
      "Bruchköbel Kernstadt",
      "Niederissigheim",
      "Oberissigheim",
      "Roßdorf",
      "Butterstadt",
    ],
    extraContent: [
      {
        title: "Sanierung in Bruchköbel",
        text: "Bruchköbel verbindet kurze Wege nach Hanau mit attraktiven Wohnlagen im östlichen Rhein-Main-Gebiet. Viele gepflegte Wohn- und Bestandsimmobilien benötigen heute eine technische, funktionale oder energetische Anpassung. Radex begleitet Eigentümer, Käufer und Vermieter bei der Modernisierung und bündelt alle Gewerke von der Badmodernisierung bis zur Haustechnik zu einem koordinierten Gesamtprozess.",
      },
      {
        title: "Badsanierung in Bruchköbel",
        text: "Ein zeitgemäßes Badezimmer erfordert barrierearmen Komfort, pflegeleichte Oberflächen und eine durchdachte Raumaufteilung. Bei einer Badsanierung in Bruchköbel kümmert sich Radex nicht nur um die sichtbaren Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Basis – von den Wasser- und Abwasserleitungen über die fachgerechte Abdichtung bis hin zu den Elektroanschlüssen.",
      },
      {
        title: "Wohnungssanierung in Bruchköbel",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einem Mieterwechsel ist die beste Gelegenheit für eine umfassende Wohnungssanierung. Durch den koordinierten Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, neue Innentüren und technische Anpassungen steigert Radex den Wohnkomfort für Eigennutzer sowie die langfristige Vermietbarkeit für Kapitalanleger.",
      },
      {
        title: "Haussanierung in Bruchköbel",
        text: "Bestandsgebäude, Reihenhäuser und Einfamilienhäuser besitzen oft eine hervorragende Substanz, weisen nach Jahrzehnten der Nutzung jedoch Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch: Wir verbinden gewünschte Grundrissanpassungen, Badsanierungen und kosmetische Updates mit notwendigen technischen Sanierungen der Gebäude- und Heizungstechnik.",
      },
      {
        title: "Altbausanierung in Bruchköbel",
        text: "Die Modernisierung älterer Gebäude erfordert besondere bauphysikalische Sorgfalt, um den gewachsenen Charakter zu bewahren und zeitgemäßen Komfort zu integrieren. Radex analysiert bestehende Schwachstellen wie marode Rohrleitungen, unzureichenden Schallschutz oder Feuchtigkeit im Mauerwerk und löst diese nachhaltig durch den Einsatz moderner Materialien und Verfahren.",
      },
      {
        title: "Innenausbau und Umbau in Bruchköbel",
        text: "Kleinteilige Grundrisse und ungenutzte Flächen älterer Immobilien passen oft nicht mehr zu modernen Lebenskonzepten. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für großzügige Wohnküchen, integriert funktionale Homeoffice-Arbeitsplätze oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche optimal an Ihren Alltag anzupassen.",
      },
      {
        title: "Heizung und Sanitär in Bruchköbel",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Der Austausch alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern werden effizient umgesetzt, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Bruchköbel",
        text: "Moderne Haushalte benötigen durch Homeoffice, Smart-Home-Komponenten und Küchengeräte eine leistungsstarke Elektroinfrastruktur. Radex plant die Elektroinstallation älterer Immobilien frühzeitig mit ein, erweitert Steckdosen und Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Bruchköbel",
        text: "Zur nachhaltigen Senkung von Betriebskosten gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Energiesparmaßnahmen und der Vorbereitung der Heizkörper auf moderne Wärmepumpentechnik.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Bruchköbel",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  buettelborn: {
    name: "Büttelborn",
    path: "/sanierung-buettelborn",
    heroImg: "/assets/sanierung-buettelborn-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Sanierung in Büttelborn",
        text: "Büttelborn gehört zu den beliebtesten Wohnstandorten im Kreis Groß-Gerau. Viele Bestandsimmobilien bieten aufgrund ihrer soliden Bausubstanz enormes Potenzial für eine langfristige Modernisierung. Radex betrachtet Sanierungsprojekte in Büttelborn immer ganzheitlich und unterstützt Eigentümer dabei, aus einzelnen Wünschen ein funktionierendes, wertsteigerndes Gesamtkonzept zu entwickeln, das Wohnkomfort und Energieeffizienz perfekt vereint.",
      },
      {
        title: "Badsanierung in Büttelborn",
        text: "Eine hochwertige Badsanierung schafft barrierearmen Komfort und pflegeleichte Oberflächen anstelle veralteter Standards. Radex konzentriert sich bei der Badmodernisierung in Büttelborn nicht nur auf das Verlegen neuer Fliesen, sondern baut auch die komplette technische Infrastruktur – von Wasser- und Abwasserleitungen über die fachgerechte Abdichtung bis zur Vorwandinstallation – meisterhaft neu auf.",
      },
      {
        title: "Wohnungssanierung in Büttelborn",
        text: "Die Phase direkt nach dem Immobilienkauf bietet die besten Voraussetzungen für eine umfassende Wohnungssanierung, da leere Räume eine hocheffiziente Koordination aller Gewerke erlauben. Durch den koordinierten Austausch von Bodenbelägen, neuen Innentüren, modernisierten Wandflächen und einer optimierten Elektrostruktur steigert Radex den Wohnwert sowie die langfristige Vermietbarkeit.",
      },
      {
        title: "Haussanierung in Büttelborn",
        text: "In den Wohnlagen von Büttelborn lohnt sich die Haussanierung im Bestand oft deutlich mehr als ein Neubau. Radex modernisiert Einfamilienhäuser, Reihenhäuser und Doppelhaushälften technisch wie optisch. Das Leistungsspektrum verbindet Grundrissanpassungen, den Austausch veralteter Gebäudetechnik und energetische Optimierungen zu einem planbaren, budgetkonformen Projektablauf.",
      },
      {
        title: "Altbausanierung in Büttelborn",
        text: "Ältere Immobilien besitzen viel Charakter, bringen jedoch oft versteckte technische Herausforderungen wie marode Rohrleitungen, unzureichenden Schallschutz oder Feuchtigkeit mit sich. Eine professionelle Altbausanierung durch Radex verbindet moderne Gebäudetechnik und zeitgemäßen Wohnkomfort mit dem Erhalt der ursprünglichen Identität und Substanz des Gebäudes.",
      },
      {
        title: "Innenausbau und Umbau in Büttelborn",
        text: "Veraltete, kleinteilige Grundrisse schränken die moderne Wohnnutzung oft ein. Durch gezielten Innenausbau – wie das Entfernen von Wänden für offene Wohnküchen, den Einbau moderner Trockenbauelemente für Homeoffice-Bereiche oder den funktionalen Ausbau von Dach- und Kellerräumen – passt Radex die vorhandene Wohnfläche exakt an die veränderten Lebensphasen Ihrer Familie an.",
      },
      {
        title: "Heizung und Sanitär in Büttelborn",
        text: "Unter SHK-Meisterverantwortung sorgt Radex für eine zukunftssichere Installation der Haustechnik. Wenn Wände und Böden im Zuge einer Sanierung ohnehin geöffnet sind, lassen sich der Austausch alter Wasserleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern am effizientesten umsetzen, um langfristige Folgeschäden an der Immobilie zu verhindern.",
      },
      {
        title: "Elektrotechnik in Büttelborn",
        text: "Ältere Elektroinstallationen sind für die heutige Anzahl an digitalen Verbrauchern nicht ausgelegt. Radex integriert moderne Elektroplanungen frühzeitig in das Sanierungskonzept. Über qualifizierte Fachpartner werden zusätzliche Steckdosen, zeitgemäße Lichtkonzepte, strukturierte Netzwerkverkabelungen für das Homeoffice sowie Vorbereitungen für Smart-Home-Systeme und Wallboxen realisiert.",
      },
      {
        title: "Energetische Sanierung in Büttelborn",
        text: "Steigende Energiepreise machen energetische Modernisierungen im Bestand unumgänglich. Radex unterstützt Eigentümer dabei, thermische Schwachstellen der Immobilie gezielt zu beseitigen. Durch kombinierte Maßnahmen wie Kellerdecken- und Dachoptimierungen, Heizkörpermodernisierungen oder die Vorbereitung auf Wärmepumpentechnik sinken die Betriebskosten nachhaltig.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, feuchte Wände oder Schimmelbildung verlangen eine schnelle und fachgerechte Schadenseinschätzung, um gravierende Substanzschäden zu vermeiden. Radex übernimmt die professionelle Ursachenanalyse und Leckortung. Zudem verfügt das Team über die notwendige Asbest-Sachkunde nach TRGS 519 für den sicheren Umgang mit schadstoffbelasteten Altlasten.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Büttelborn",
        text: "Für gewerbliche Projekte wie Büroumbauten, Praxisrenovierungen oder den Mieterausbau von Ladenlokalen sind straffe Zeitpläne und klare Abläufe essenziell. Radex realisiert funktionale Raumaufteilungen, strapazierfähige Oberflächen und modernisierte Sanitärbereiche passend zu den spezifischen Nutzungsanforderungen und gesetzlichen Vorgaben Ihres Gewerbeobjekts.",
      },
    ],
  },
  dieburg: {
    name: "Dieburg",
    path: "/sanierung-dieburg",
    heroImg: "/assets/sanierung-dieburg-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Sanierung in Dieburg",
        text: "Dieburg vereint einen historischen Stadtkern, ruhige Wohngebiete und funktionale Mischlagen. Viele Bestandsimmobilien besitzen eine solide Substanz, benötigen aber technische, optische oder energetische Modernisierungen, um heutigen Anforderungen zu entsprechen. Radex begleitet Eigentümer, Käufer, Vermieter, Hausverwaltungen und Gewerbekunden bei der koordinierten Sanierung in Dieburg – von der ersten Bestandsaufnahme bis zur schlüsselfertigen Übergabe.",
      },
      {
        title: "Badsanierung in Dieburg",
        text: "Ein modernes Badezimmer soll komfortabel sein, exakt zur Immobilie passen und sich leicht pflegen lassen. Radex plant und realisiert Badsanierungen in Dieburg nicht nur optisch, sondern sichert auch die technischen Grundlagen unter den Oberflächen ab – von der Abdichtung und Sanitärinstallation bis hin zur bodengleichen Dusche und dem barrierearmen Komfort.",
      },
      {
        title: "Wohnungssanierung in Dieburg",
        text: "Ob nach einem Immobilienkauf, vor einer Neuvermietung oder nach einem Mieterwechsel: Eine strukturierte Wohnungssanierung wertet Eigentums- und Mietwohnungen nachhaltig auf. Durch die Kombination von neuen Böden, modernen Wandflächen, Innentüren und aktualisierter Technik entsteht ein harmonisches und zeitgemäßes Gesamtbild.",
      },
      {
        title: "Haussanierung in Dieburg",
        text: "Viele Einfamilienhäuser und Reihenhäuser in Dieburg wurden über Jahrzehnte hinweg nur schrittweise modernisiert. Bei einer ganzheitlichen Haussanierung werden Grundrisse, Haustechnik, Bäder und energetische Schwachstellen gemeinsam betrachtet. Das sorgt für langfristigen Werterhalt und optimale Wirtschaftlichkeit, besonders vor dem anstehenden Einzug.",
      },
      {
        title: "Altbausanierung in Dieburg",
        text: "Ältere Gebäude im historischen Bestand erfordern bei der Sanierung besondere Sorgfalt und Fachkenntnis. Eine erfolgreiche Altbausanierung respektiert die vorhandene Qualität und den Charakter des Bauwerks, während veraltete Wasserleitungen, feuchte Kellerwände, mangelhafte Dämmungen und die Elektrostruktur fachgerecht erneuert werden.",
      },
      {
        title: "Innenausbau & Umbau in Dieburg",
        text: "Durch flexiblen Trockenbau, neue Raumaufteilungen, moderne Bodenbeläge und maßgeschneiderte Details wird vorhandene Wohnfläche im Alltag optimal nutzbar gemacht. Radex stimmt den Innenausbau in Dieburg frühzeitig mit der Elektrotechnik, der Heizkörperplatzierung und den Sanitärbereichen ab, um spätere Nacharbeiten auszuschließen.",
      },
      {
        title: "Heizung & Sanitär in Dieburg",
        text: "Hinter modernen Oberflächen steht eine komplexe Haustechnik. Unter SHK-Meisterverantwortung erneuert und optimiert Radex Wasserleitungen, Abwasserführungen sowie Heizkörper. So wird die technische Infrastruktur Ihrer Immobilie zukunftssicher aufgestellt und perfekt auf neue Bäder oder Küchen abgestimmt.",
      },
      {
        title: "Elektrotechnik in Dieburg",
        text: "Moderne Lebens- und Arbeitsgewohnheiten mit Homeoffice, Küchengeräten und smarten Systemen stellen hohe Anforderungen an das Stromnetz. Über qualifizierte Fachpartner koordiniert Radex die zeitgemäße Elektroplanung, setzt sichere Lichtkonzepte um und bereitet Unterverteilungen sowie Netzwerkverkabelungen professionell vor.",
      },
      {
        title: "Energetische Sanierung in Dieburg",
        text: "Zur dauerhaften Senkung von Betriebskosten und zur Steigerung der Energieeffizienz sind gezielte Modernisierungen unverzichtbar. Radex bewertet die thermische Situation der Immobilie und integriert sinnvolle Dämmmaßnahmen, Heizkörperoptimierungen oder die Vorbereitung auf moderne Wärmepumpentechnik direkt in den Sanierungsablauf.",
      },
      {
        title: "Soforthilfe bei Wasserschaden, Rohrbruch und Schimmel",
        text: "Plötzliche Schäden durch Feuchtigkeit, Rohrbrüche oder Schimmelbefall verlangen schnelles, fachlich fundiertes Handeln. Radex bietet eine seriöse und unkomplizierte Einschätzung der Lage in Dieburg. Dabei steht die nachhaltige Ursachenforschung sowie die anschließende professionelle Trocknung und Schadensbeseitigung im Fokus.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Dieburg",
        text: "Für Praxen, Büros, Ladenlokale und Mietobjekte in Dieburg gelten eigene Gesetze: Kurze Umbauzeiten, funktionale Grundrisse und repräsentative Sanitär- und Arbeitsbereiche sichern den laufenden Betrieb. Radex realisiert gewerbliche Sanierungsprojekte mit einer klaren Taktung und planbaren Übergabeterminen.",
      },
    ],
  },
  dietzenbach: {
    name: "Dietzenbach",
    path: "/wohnung-modernisieren-dietzenbach",
    heroImg: "/assets/sanierung-dietzenbach-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Wohnung modernisieren in Dietzenbach",
        text: "Dietzenbach ist stark geprägt von Eigentumswohnungen, Wohnanlagen und gewachsenen Wohngebieten. Viele dieser Immobilien bieten enormes Potenzial, um durch gezielte Modernisierungen an heutige Lebensstile angepasst zu werden. Radex unterstützt Eigentümer, Käufer und Vermieter dabei, aus einzelnen Wünschen wie der Badmodernisierung, neuen Bodenbelägen oder technischen Updates ein funktionierendes, wertsteigerndes Gesamtkonzept zu entwickeln.",
      },
      {
        title: "Eigentumswohnungen in Dietzenbach modernisieren",
        text: "Der Zeitraum zwischen dem Immobilienkauf und dem eigentlichen Einzug bietet die besten Voraussetzungen für eine Wohnungssanierung. Da die Räume leer stehen, lassen sich Gewerke wie Wandgestaltung, der Austausch von Türen und Böden sowie Sanierungsarbeiten wesentlich effizienter koordinieren. Das spart Zeit, schont das Budget und schafft von Beginn an den gewünschten Wohnkomfort.",
      },
      {
        title: "Badsanierung in Dietzenbach",
        text: "Viele Badezimmer in Dietzenbach entsprechen nach jahrzehntelanger Nutzung nicht mehr modernen Ansprüchen an Komfort und Pflegeleichtigkeit. Bei einer professionellen Badsanierung oder dem Umbau zu einem modernen Duschbad geht es jedoch nicht nur um die Optik. Radex plant die gesamte Sanitärinstallation, die fachgerechte Abdichtung und neue Leitungsführungen unter den Fliesen direkt mit ein.",
      },
      {
        title: "Innenausbau für moderne Wohnkonzepte",
        text: "Veränderte Lebenssituationen und die Anforderungen an Homeoffice-Arbeitsplätze verlangen nach flexiblen Raumaufteilungen. Durch modernen Trockenbau, das Öffnen von Wohnbereichen, den Austausch von Innentüren und durchdachte Stauraumlösungen lässt sich die vorhandene Wohnfläche in Eigentumswohnungen und Häusern deutlich besser und funktionaler nutzen.",
      },
      {
        title: "Vermietete Wohnungen modernisieren",
        text: "Bei einer Wohnung als Kapitalanlage stehen der langfristige Werterhalt, eine hohe Vermietbarkeit und die Reduzierung von Leerstand im Fokus. Vor einer anstehenden Neuvermietung zahlt sich eine gezielte Modernisierung mit robusten, langlebigen Materialien besonders aus. Bereits kleine, strukturierte Maßnahmen steigern die Attraktivität der Mietwohnung auf dem Markt erheblich.",
      },
      {
        title: "Mehrfamilienhäuser und Wohnanlagen",
        text: "In größeren Wohnanlagen und Mehrfamilienhäusern in Dietzenbach erfordern Sanierungsprojekte aufgrund der verschiedenen Beteiligten eine besonders präzise Koordination. Radex übernimmt die Planung von Wohnungssanierungen, technischen Modernisierungen und energetischen Maßnahmen, um den Werterhalt einzelner Einheiten sowie ganzer Gemeinschaftsobjekte zu sichern.",
      },
      {
        title: "Heizung & Sanitär in Dietzenbach",
        text: "Während Oberflächen oft zügig renoviert sind, bleibt die technische Infrastruktur im Hintergrund über Jahrzehnte unverändert. Unter SHK-Meisterführung prüft und erneuert Radex Wasserleitungen, optimiert die Warmwasserbereitung und tauscht veraltete Heizkörper aus. Das verhindert unvorhergesehene Folgeschäden und sichert die Haustechnik für die Zukunft ab.",
      },
      {
        title: "Elektrotechnik für moderne Wohnungen und Häuser",
        text: "Ältere Wohnungen wurden für einen weitaus geringeren Strombedarf konzipiert als heute üblich. Moderne Küchenanschlüsse, flächendeckende Netzwerkverkabelungen, zeitgemäße Lichtkonzepte und zusätzliche Steckdosen sind im Alltag unverzichtbar geworden. Radex bindet qualifizierte Fachpartner ein, um die Elektroinstallation zukunftssicher in den Sanierungsablauf zu integrieren.",
      },
      {
        title: "Energetische Sanierung in Dietzenbach",
        text: "Steigende Energiekosten machen energetische Modernisierungen im Bestand von Eigentumswohnungen, Reihen- und Mehrfamilienhäusern immer wichtiger. Durch die Reduzierung von Wärmeverlusten, die Optimierung von Heizkörpern und die Vorbereitung auf effiziente Heiztechnik wird der Wohnkomfort gesteigert, während die Betriebskosten der Immobilie nachhaltig sinken.",
      },
      {
        title: "Wasserschaden, Rohrbruch und Notfallhilfe",
        text: "Ein akuter Rohrbruch, unentdeckte Feuchtigkeit oder ein Wasserschaden in der Wohnung verlangen sofortiges Handeln, um weitreichende Substanzschäden zu vermeiden. Radex unterstützt Eigentümer bei der schnellen, professionellen Schadensbewertung, ortet die Ursache und koordiniert alle notwendigen Sanierungsschritte von der Trocknung bis zur Wiederherstellung.",
      },
      {
        title: "Schimmel & Asbest bei Bestandsimmobilien",
        text: "Bei Umbauten und Sanierungen im Altbestand oder nach Feuchtigkeitsschäden können Schimmelpilze und schadstoffbelastete Baustoffe wie Asbest zum Risiko werden. Radex verfügt über die notwendige Sachkunde und Zertifizierungen, um solche Verdachtsfälle fachgerecht zu prüfen, zu bewerten und eine gesundheitlich unbedenkliche Sanierung durchzuführen.",
      },
      {
        title: "Dietzenbach Mitte, Steinberg, Hexenberg und Wingertsberg",
        text: "Die Anforderungen variieren je nach Stadtteil: Während in Dietzenbach Mitte und am Wingertsberg oft Wohnungssanierungen nach Eigentümerwechseln und Badmodernisierungen dominieren, stehen in den familienfreundlichen Wohnlagen von Steinberg und am Hexenberg häufig umfassende Hausmodernisierungen, energetische Maßnahmen und der Innenausbau im Fokus.",
      },
    ],
  },
  egelsbach: {
    name: "Egelsbach",
    path: "/sanierung-egelsbach",
    heroImg: "/assets/sanierung-egelsbach-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Sanierung in Egelsbach",
        text: "Egelsbach ist ein attraktiver Wohnstandort mit optimaler Anbindung im südlichen Rhein-Main-Gebiet. Die lokale Immobilienstruktur ist geprägt von klassischen Bestandsobjekten wie Einfamilienhäusern, Reihenhäusern und Eigentumswohnungen. Radex begleitet Eigentümer, Käufer, Vermieter und Hausverwaltungen bei Sanierungsprojekten in Egelsbach und sorgt für eine sinnvolle, gewerkeübergreifende Koordination aller Maßnahmen aus einer Hand.",
      },
      {
        title: "Badsanierung in Egelsbach",
        text: "Ein modernes Badezimmer muss im Alltag perfekt funktionieren, pflegeleicht sein und barrierearmen Komfort bieten. Bei einer professionellen Badsanierung in Egelsbach konzentriert sich Radex nicht nur auf die sichtbaren Oberflächen wie Fliesen und Armaturen, sondern baut auch die technischen Grundlagen – von den Wasserleitungen über die Abdichtung bis zur Vorwandinstallation – fachgerecht neu auf.",
      },
      {
        title: "Wohnungssanierung in Egelsbach",
        text: "Wohnungssanierungen entstehen häufig nach einem Immobilienkauf oder vor einer anstehenden Neuvermietung. Durch den koordinierten Austausch von Bodenbelägen, die Modernisierung von Wandflächen, Innentüren und Heizkörpern sowie die Anpassung der Sanitär- und Elektroanschlüsse werden Eigentums- und Mietwohnungen nachhaltig aufgewertet und zukunftssicher gemacht.",
      },
      {
        title: "Haussanierung in Egelsbach",
        text: "Viele Einfamilien- und Reihenhäuser in Egelsbach vereinen unterschiedliche Modernisierungsphasen der vergangenen Jahrzehnte. Eine ganzheitliche Haussanierung führt diese Bereiche zusammen. Radex unterstützt Eigentümer dabei, notwendige und gewünschte Maßnahmen wie Grundrissoptimierungen, den Austausch von Haustechnik oder die Beseitigung von Altlasten sinnvoll zu priorisieren.",
      },
      {
        title: "Altbausanierung in Egelsbach",
        text: "Die Sanierung älterer Bestandsgebäude und Wohnungen erfordert besondere Sorgfalt, um die vorhandene Substanz und den Charakter der Immobilie zu wahren. Typische Schwerpunkte im Altbau liegen auf der Erneuerung maroder Wasserleitungen, der Trockenlegung feuchter Kellerwände, dem Schallschutz sowie dem gezielten Abbau energetischer Schwachstellen.",
      },
      {
        title: "Innenausbau & Umbau in Egelsbach",
        text: "Erst durch einen durchdachten Innenausbau wird bestehender Wohnraum optimal nutzbar. Ob das Öffnen von kleinteiligen Wohnbereichen, der Einzieher moderner Trockenbauwände für Homeoffice-Plätze, neue Deckenkonstruktionen mit Lichtkonzepten oder maßgeschneiderte Stauraumlösungen – Radex passt die Räumlichkeiten exakt an Ihren aktuellen Alltag an.",
      },
      {
        title: "Heizung & Sanitär in Egelsbach",
        text: "Unter SHK-Meisterverantwortung übernimmt Radex die fachgerechte Planung und Umsetzung der gesamten Gebäudetechnik. Wenn im Zuge einer Sanierung Wände und Böden ohnehin geöffnet sind, lassen sich die Erneuerung von Wasser- und Abwasserleitungen, der Austausch von Heizkörpern sowie die Optimierung der Warmwasserbereitung am wirtschaftlichsten realisieren.",
      },
      {
        title: "Elektrotechnik in Egelsbach",
        text: "Veraltete Elektroinstallationen in Bestandsbauten genügen den heutigen Anforderungen an Steckdosen, smarte Systeme und Heimarbeitsplätze meist nicht mehr. Über qualifizierte Fachpartner integriert Radex die Elektroplanung frühzeitig in das Sanierungskonzept, bereitet Unterverteilungen vor und setzt moderne Netzwerk- sowie Küchenanschlüsse um.",
      },
      {
        title: "Energetische Sanierung in Egelsbach",
        text: "Zur Senkung steigender Betriebskosten und zur langfristigen Effizienzsteigerung der Immobilie sind energetische Maßnahmen unverzichtbar. Radex bewertet die Gebäudehülle und kombiniert Arbeiten wie die Optimierung der Wärmeverteilung, Dämmmaßnahmen an Kellerdecken oder Dachbereichen sowie die Vorbereitung auf moderne Wärmepumpentechnik.",
      },
      {
        title: "Soforthilfe bei Wasserschaden, Rohrbruch und Schimmel",
        text: "Unvorhergesehene Notfälle wie ein Rohrbruch, feuchte Wände oder Schimmelbildung verlangen eine schnelle und fundierte Schadenseinschätzung. Radex unterstützt Betroffene in Egelsbach bei der professionellen Leckortung und Ursachenforschung, um Folgeschäden an der Bausubstanz zu minimieren und eine fachgerechte Trocknung einzuleiten.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Egelsbach",
        text: "Für Büroflächen, Praxen, Ladenlokale und gewerbliche Mischlagen in Egelsbach sind kurze Ausfallzeiten und eine exakte Taktung entscheidend. Radex realisiert funktionale Raumaufteilungen, repräsentative Sanitärbereiche sowie widerstandsfähige Boden- und Wandflächen passend zu den behördlichen und nutzungsspezifischen Vorgaben des Gewerbeobjekts.",
      },
    ],
  },
  erzhausen: {
    name: "Erzhausen",
    path: "/sanierung-erzhausen",
    heroImg: "/assets/sanierung-erzhausen-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Sanierung in Erzhausen",
        text: "Erzhausen ist dank seiner Lage zwischen Darmstadt, Langen und Frankfurt am Main besonders bei Familien als Wohnort beliebt. Viele Immobilien verfügen über eine solide Bausubstanz, entsprechen jedoch technisch und optisch nicht mehr heutigen Standards. Radex unterstützt Eigentümer dabei, bestehende Gebäude durch eine durchdachte, gewerkeübergreifende Sanierung sinnvoll weiterzuentwickeln und den Immobilienwert langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Erzhausen",
        text: "Moderne Badezimmer erfordern viel Bewegungsfläche, pflegeleichte Oberflächen und barrierearmen Komfort. Bei einer Badsanierung in Erzhausen optimiert Radex nicht nur die Raumaufteilung für Familien oder ältere Eigentümer, sondern prüft und erneuert auch alle unsichtbaren Komponenten wie Wasser- und Abwasserleitungen, die Abdichtung sowie die Elektroanschlüsse hinter den Fliesen.",
      },
      {
        title: "Wohnungssanierung in Erzhausen",
        text: "Der Zeitraum direkt nach einem Eigentümerwechsel bietet die besten Voraussetzungen für eine umfassende Wohnungssanierung, da leere Räume eine hocheffiziente Koordination aller Gewerke erlauben. Neben modernen Bodenbelägen und Wandflächen integriert Radex neue Beleuchtungskonzepte, überarbeitet die Elektroinstallation und modernisiert Innentüren, um ein stimmiges Gesamtbild zu schaffen.",
      },
      {
        title: "Haussanierung in Erzhausen",
        text: "Einfamilienhäuser, Reihenhäuser und Doppelhaushälften aus den 1970er- bis 1990er-Jahren besitzen meist eine hervorragende Grundsubstanz, benötigen aber eine technische und energetische Modernisierung. Radex betrachtet das Gebäude als Gesamtsystem und verbindet Grundrissoptimierungen, den Austausch veralteter Haustechnik und kosmetische Updates zu einem planbaren Sanierungskonzept.",
      },
      {
        title: "Altbausanierung in Erzhausen",
        text: "Eine fachgerechte Altbausanierung zielt darauf ab, den gewachsenen Charakter eines älteren Gebäudes zu bewahren und gleichzeitig zeitgemäßen Wohnkomfort zu integrieren. Hierbei führt Radex eine sorgfältige Bestandsaufnahme durch, um marode Rohrleitungen zu ersetzen, Feuchtigkeitsprobleme an der Substanz dauerhaft zu lösen und energetische Schwachstellen gezielt zu minimieren.",
      },
      {
        title: "Innenausbau und Umbau in Erzhausen",
        text: "Veränderte Lebensgewohnheiten erfordern oft flexiblere Raumkonzepte, offene Wohnküchen oder separate Homeoffice-Bereiche. Durch modernen Trockenbau, abgehängte Decken mit integrierter Beleuchtung, neue Bodenaufbauten und maßgeschneiderte Stauraumlösungen passt Radex die vorhandene Wohnfläche exakt an den aktuellen Alltag Ihrer Familie an.",
      },
      {
        title: "Heizung und Sanitär in Erzhausen",
        text: "Unter SHK-Meisterverantwortung sorgt Radex für eine zukunftssichere und technisch einwandfreie Installation der gesamten Gebäudetechnik. Die Erneuerung von Rohrleitungen, die Optimierung der Warmwasserversorgung und der Austausch alter Heizkörper werden idealerweise dann umgesetzt, wenn Wände und Böden im Zuge der Sanierung ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Erzhausen",
        text: "Moderne Haushalte benötigen eine leistungsstarke Elektroinfrastruktur für Netzwerktechnik, Küchengeräte und Ladeinfrastruktur. Radex überprüft die bestehende Elektroinstallation älterer Immobilien frühzeitig, plant ausreichend Steckdosen ein, bereitet Unterverteilungen vor und bindet qualifizierte Fachpartner für eine sichere Umsetzung ein.",
      },
      {
        title: "Energetische Sanierung in Erzhausen",
        text: "Zur nachhaltigen Senkung von Energiekosten und zur Steigerung des Wohnkomforts gewinnt die energetische Modernisierung im Bestand stark an Bedeutung. Radex bewertet die thermischen Schwachstellen des Gebäudes und kombiniert ohnehin geplante Sanierungsarbeiten effizient mit Dämmmaßnahmen an Decken oder Dächern sowie der Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Wasserschäden oder Schimmelbildung erfordern schnelles Handeln und eine fundierte Ursachenanalyse, um eine Ausbreitung der Feuchtigkeit in angrenzende Bauteile zu stoppen. Radex übernimmt die professionelle Schadensbewertung, leitet die Trocknung ein und verfügt zudem über die nötige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
    ],
  },
  eschborn: {
    name: "Eschborn",
    path: "/wohnung-haus-modernisieren-eschborn",
    heroImg: "/assets/wohnung-haus-eschborn-radex.webp",
    districts: ["Eschborn", "Niederhöchstadt"],
    extraContent: [
      {
        title: "Wohnung oder Haus modernisieren in Eschborn",
        text: "Eschborn zählt zu den wirtschaftlich stärksten Standorten im Rhein-Main-Gebiet. Die unmittelbare Nähe zu Frankfurt, die hervorragende Infrastruktur und die hohe Nachfrage nach Wohn- und Gewerbeflächen sorgen dafür, dass Immobilien hier langfristig attraktiv bleiben. Viele Eigentümer investieren gezielt in die Modernisierung ihrer Wohnung, ihres Hauses oder ihrer Gewerbeeinheit, um den Wohnkomfort zu steigern und den Immobilienwert nachhaltig zu sichern. Radex begleitet Eigentümer in Eschborn bei Badsanierung, Wohnungssanierung, Haussanierung, Innenausbau und technischen Modernisierungen aus einer Hand.",
      },
      {
        title: "Badsanierung in Eschborn",
        text: "Das Badezimmer beeinflusst den alltäglichen Wohnkomfort maßgeblich und hat gleichzeitig großen Einfluss auf den Marktwert einer Immobilie – besonders in hochwertigen Eigentumswohnungen. Viele Eigentümer wünschen sich größere, bodengleiche Duschen, mehr Stauraum, hochwertige Materialien und moderne Beleuchtungskonzepte. Eine professionelle Badsanierung von Radex verbindet ansprechendes Design mit technischer Zuverlässigkeit, indem auch Wasserleitungen, Abwasserkanäle und Abdichtungen fachgerecht geprüft und erneuert werden.",
      },
      {
        title: "Wohnungssanierung vor dem Einzug",
        text: "Wer eine Eigentumswohnung oder ein Haus in Eschborn kauft, nutzt idealerweise die Zeit vor dem Einzug für anstehende Modernisierungsmaßnahmen. Solange die Räume leer stehen, lassen sich Gewerke wie Fliesenleger, Trockenbauer und Elektriker deutlich effizienter koordinieren. Eine strukturierte Wohnungssanierung vor dem Einzug hilft dabei, spätere Baustellen im bewohnten Zustand komplett zu vermeiden und die Immobilie von Anfang an perfekt an die eigenen Vorstellungen anzupassen.",
      },
      {
        title: "Wohnräume anpassen durch Innenausbau",
        text: "Veränderte Lebensmodelle, der Bedarf nach einem festen Homeoffice oder neue Raumstrukturen verlangen oft nach flexiblen Grundrissen. Beim Innenausbau in Eschborn geht es meist nicht darum, die Wohnfläche zu vergrößern, sondern die vorhandene Fläche intelligenter zu nutzen. Durch das Entfernen von Wänden, das Öffnen von Wohnbereichen oder den gezielten Trockenbau entstehen moderne Raumstrukturen, die Alltag, Design und hohe Funktionalität perfekt miteinander verbinden.",
      },
      {
        title: "Gewerbe- und Objektsanierung am Bürostandort Eschborn",
        text: "Als einer der wichtigsten Büro- und Gewerbestandorte der Region verzeichnet Eschborn einen hohen Bedarf an flexiblen Raumanpassungen. Nach einem Mieterwechsel oder bei einer Umstrukturierung müssen Büroflächen, Praxen oder Ladenlokale schnell wieder bezugsfertig sein. Radex begleitet Unternehmen, Eigentümer und Vermieter bei Büroumbauten und dem Mieterausbau, koordiniert Trockenbau, Sanitärbereiche sowie Oberflächenarbeiten und sorgt für eine termingerechte Fertigstellung.",
      },
      {
        title: "Heizung und Sanitär unter SHK-Meisterführung",
        text: "Hochwertige Oberflächen und moderne Räume benötigen eine intakte technische Infrastruktur. Radex arbeitet im Bereich Heizung, Sanitär und Gebäudetechnik SHK-meistergeführt. Ob es um die Erneuerung alter Rohrleitungen bei einer Wohnungssanierung geht, das Versetzen von Heizkörpern im Zuge einer Badsanierung oder die technische Überprüfung der Warmwasserbereitung – alle Maßnahmen werden wirtschaftlich und sicher in das Sanierungskonzept integriert.",
      },
      {
        title: "Zukunftssichere Elektrotechnik und Netzwerkplanung",
        text: "Moderne Arbeits- und Lebensstrukturen verlangen eine leistungsfähige Elektroinstallation. Stabile Netzwerke für das Homeoffice, durchdachte Lichtkonzepte und ausreichende Anschlüsse für moderne Küchengeräte müssen frühzeitig in die Sanierung eingeplant werden. Radex bindet qualifizierte Fachpartner für die Elektrotechnik ein, sodass Kabelwege unauffällig während des Innenausbaus verlegt werden und spätere Zusatzarbeiten entfallen.",
      },
      {
        title: "Energetische Sanierung als Wertstrategie",
        text: "Für Kapitalanleger und Eigennutzer in Eschborn ist die Energieeffizienz ein entscheidender Faktor für die Marktattraktivität. Eine energetische Modernisierung muss exakt zur Gebäudestruktur passen. Radex betrachtet Dämmung, Heizkörperoptimierung und Wärmeverteilung als Gesamtsystem. Wenn ohnehin Böden, Wände oder Sanitäranlagen saniert werden, lassen sich energetische Maßnahmen optimal vorbereiten und ohne doppelte Eingriffe umsetzen.",
      },
      {
        title: "Schnelle Hilfe bei Wasserschaden, Feuchtigkeit und Rohrbruch",
        text: "Ein plötzlicher Wasserschaden, ein Rohrbruch oder Feuchtigkeitsflecken an Böden und Wänden erfordern sofortiges Handeln, um kostspielige Folgeschäden und Nutzungsausfälle zu minimieren. Radex übernimmt in Eschborn die schnelle Schadenseinschätzung und koordiniert die notwendigen Trocknungs- und Sanierungsschritte. Oft bietet ein solcher Schaden auch die Gelegenheit, eine ohnehin geplante Badmodernisierung direkt vorzuziehen.",
      },
      {
        title: "Schimmel- und Asbestsanierung mit zertifizierter Sachkunde",
        text: "Bei Sanierungsarbeiten in älteren Bestandsgebäuden können unvorhergesehene Risiken wie verdeckter Schimmel oder schadstoffhaltige Altwohnbaustoffe zum Vorschein kommen. Radex verfügt über die notwendige Sachkunde und Zertifizierungen nach TRGS 519 für die Schimmel- und Asbestsanierung. Dadurch werden Schadstoffe fachgerecht zurückgebaut und bauliche Ursachen für Feuchtigkeit dauerhaft beseitigt, bevor der eigentliche Innenausbau beginnt.",
      },
      {
        title:
          "Eschborn und Niederhöchstadt – Zwei Immobilienstrukturen in einer Stadt",
        text: "Die Stadtteile von Eschborn verlangen nach differenzierten Sanierungsansätzen. Im Kernbereich dominieren hochwertige Eigentumswohnungen sowie Büro- und Gewerbeobjekte, bei denen schnelle Abläufe, Mieterausbauten und anspruchsvolle Wohnraummodernisierungen im Fokus stehen. Niederhöchstadt ist hingegen stark wohnorientiert und durch Einfamilienhäuser geprägt. Hier stehen meist umfassende Haussanierungen, energetische Verbesserungen und langfristig angelegte Bad- und Heizungsmodernisierungen im Vordergrund.",
      },
    ],
  },
  floersheim: {
    name: "Flörsheim",
    path: "/sanierung-floersheim-am-main",
    heroImg: "/assets/sanierung-floersheim-am-main-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Sanierung in Flörsheim am Main",
        text: "Flörsheim am Main gehört zu den gefragten Wohnstandorten im Rhein-Main-Gebiet zwischen Wiesbaden, Mainz, Frankfurt und dem Flughafen. Die Stadt verbindet eine gute Verkehrsanbindung mit gewachsenen Wohngebieten, Einfamilienhäusern, Eigentumswohnungen und älteren Bestandsimmobilien. Viele Eigentümer leben bereits seit Jahren oder Jahrzehnten in ihren Immobilien, weshalb bei Eigentümerwechseln oder veränderten Lebenssituationen ein hoher Bedarf an Modernisierungen entsteht. Radex begleitet Eigentümer in Flörsheim am Main bei der koordinierten Umsetzung aller notwendigen Maßnahmen, um Zeitverluste, unnötige Schnittstellen und vermeidbare Kosten zu reduzieren.",
      },
      {
        title: "Badsanierung in Flörsheim am Main",
        text: "Das Badezimmer gehört zu den am stärksten genutzten Räumen einer Immobilie. Da viele Bäder in Flörsheim aus Modernisierungsphasen stammen, die bereits Jahrzehnte zurückliegen, stehen Eigentümer oft vor unpraktischen Raumaufteilungen, hohen Duschtassen oder veralteter Sanitärtechnik. Gefragt sind heute moderne, pflegeleichte und barrierearme Lösungen wie bodengleiche Duschen und durchdachter Stauraum. Radex prüft im Zuge der Badsanierung auch tieferliegende Komponenten wie Wasserleitungen, Abwasserleitungen und Abdichtungen, um eine langfristig zuverlässige Funktion zu garantieren.",
      },
      {
        title: "Wohnungssanierung in Flörsheim am Main",
        text: "Wohnungssanierungen gehören zu den häufigsten Projekten in Flörsheim und betreffen meist Eigentumswohnungen nach einem Kauf, nach einem Mieterwechsel oder zur Aufwertung von Kapitalanlagen. Die Phase vor dem Einzug ist ideal, um Badmodernisierungen, neue Bodenbeläge, Wandgestaltungen, den Austausch von Innentüren und technische Anpassungen nahtlos miteinander zu verknüpfen. Eine koordinierte Planung sorgt für ein stimmiges Gesamtkonzept statt vieler unzusammenhängender Einzelmaßnahmen und sichert den langfristigen Werterhalt.",
      },
      {
        title: "Haussanierung in Flörsheim am Main",
        text: "Viele Einfamilienhäuser, Doppelhaushälften und Reihenhäuser in Flörsheim wurden über Generationen hinweg gepflegt, jedoch technisch oft nur teilweise modernisiert. Dadurch entsteht in der Praxis häufig ein Mix aus unterschiedlichen Bauphasen mit veralteter Sanitärtechnik, älteren Heizungsanlagen oder energetischem Nachholbedarf. Eine strukturierte Haussanierung betrachtet alle Gewerke gemeinsam, um die gesamte Immobilie sowohl optisch als auch technisch auf den neuesten Stand zu bringen und zukunftssicher aufzustellen.",
      },
      {
        title: "Altbausanierung in Flörsheim am Main",
        text: "Historische Gebäude und ältere Wohnhäuser mit besonderem Charakter prägen das Stadtbild in Teilen von Flörsheim. Eine fachgerechte Altbausanierung erfordert besondere Sorgfalt: Veraltete Leitungsstrukturen, unzureichender Schallschutz, alte Bodenaufbauten und Feuchtigkeit in den Wänden oder Kellerbereichen müssen frühzeitig analysiert werden. Das Ziel von Radex ist es hierbei, wertvolle historische Gebäudestrukturen und den individuellen Charme der Immobilie zu erhalten und gleichzeitig modernen Wohnkomfort zu integrieren.",
      },
      {
        title: "Innenausbau und Umbau in Flörsheim am Main",
        text: "Wenn sich Anforderungen an den Wohnraum verändern – sei es durch die Vergrößerung der Familie oder die Integration eines Homeoffice-Arbeitsplatzes – bietet ein durchdachter Innenausbau flexible Lösungen. Mittels professionellem Trockenbau lassen sich Raumaufteilungen optimieren, Wände entfernen, Wohnbereiche öffnen oder das Dachgeschoss komplett ausbauen. Wird der Innenausbau frühzeitig mit einer Bad- oder Haussanierung kombiniert, können Bodenbeläge, Türen und Lichtkonzepte optimal aufeinander abgestimmt werden.",
      },
      {
        title: "Heizung und Sanitär in Flörsheim am Main",
        text: "Die eigentliche technische Grundlage einer Immobilie liegt im Bereich der SHK-Technik. Veraltete Systeme führen oft zu hohem Energieverbrauch, steigenden Betriebskosten und hoher Reparaturanfälligkeit. Radex arbeitet im Bereich Heizung und Sanitär unter SHK-Meisterverantwortung. Dadurch werden Rohrleitungsanpassungen, der Austausch veralteter Heizkörper sowie die Vorbereitung auf moderne Heizsysteme von Anfang an fachgerecht in die Sanierungsplanung integriert, was sich besonders in Kombination mit einer Badmodernisierung auszahlt.",
      },
      {
        title: "Elektrotechnik bei Sanierungen in Flörsheim am Main",
        text: "Digitale Anforderungen, Smart-Home-Anwendungen, Ladeinfrastrukturen für Wallboxen und moderne Küchengeräte verlangen älteren Elektroinstallationen oft mehr ab, als diese leisten können. Besonders bei Altbau- und Wohnungssanierungen sollte die Elektroplanung mit zeitgemäßen Lichtkonzepten, Steckdosenplatzierungen und Netzwerkverkabelungen frühzeitig berücksichtigt werden. Radex stimmt die technische Elektrostruktur präzise auf den Innenausbau und die spätere Raumnutzung ab.",
      },
      {
        title: "Energetische Sanierung in Flörsheim am Main",
        text: "Angesichts steigender Energiekosten gewinnen energetische Sanierungen für Immobilieneigentümer zunehmend an Bedeutung. Ob Wärmepumpenvorbereitung, gezielte Dämmmaßnahmen, Heizkörperoptimierung oder die Reduzierung von Wärmeverlusten an der Gebäudehülle – Radex bewertet Bestandsimmobilien individuell. Durch die geschickte Verknüpfung energetischer Maßnahmen mit ohnehin laufenden Sanierungsarbeiten lassen sich Schnittstellen minimieren und Kosten nachhaltig senken.",
      },
      {
        title:
          "Nothilfe, Notsanierung, Wasserschaden, Schimmel und Asbest in Flörsheim am Main",
        text: "Ein plötzlicher Wasserschaden, ein Rohrbruch oder unvorhergesehene Feuchtigkeit an Wänden und Böden verlangen schnelles Handeln, damit sich Folgeschäden nicht weiter ausbreiten. Radex unterstützt Eigentümer bei der präzisen Schadenseinschätzung und koordiniert die Trocknung sowie den Wiederaufbau. Auch bei Schimmelbildung oder dem Verdacht auf Schadstoffe wie Asbest bei älteren Baustoffen wird die Sanierung unter Einhaltung strenger Richtlinien und notwendiger Fachkunde sicher durchgeführt.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Flörsheim am Main",
        text: "Neben Wohnräumen modernisiert Radex auch gewerbliche Flächen wie Büros, Praxen, Kanzleien, Ladenlokale und Dienstleistungsflächen. Bei Gewerbeprojekten stehen funktionale Raumaufteilungen, moderne Arbeitsumgebungen und eine zukunftsfähige technische Infrastruktur im Vordergrund. Eine straffe Organisation und exakte Terminplanung sind hierbei entscheidend, um mögliche Ausfallzeiten für den laufenden Betrieb so gering wie möglich zu halten.",
      },
      {
        title:
          "Flörsheim, Wicker, Weilbach und Keramag/Falkenberg – Sanierung passend zur lokalen Struktur",
        text: "Die Stadtbereiche von Flörsheim weisen sehr unterschiedliche Immobilienstrukturen auf. Während in der Kernstadt sowie in Keramag/Falkenberg vor allem Wohnungssanierungen, Badsanierungen und Modernisierungen nach Eigentümerwechseln im Fokus stehen, sind Wicker und Weilbach stark von Einfamilienhäusern, Reihenhäusern und klassischen Familienimmobilien geprägt. Hier investieren Eigentümer vermehrt in umfassende Haussanierungen, intelligenten Innenausbau und langfristige energetische Maßnahmen.",
      },
    ],
  },
  friedberg: {
    name: "Friedberg",
    path: "/sanierung-friedberg-hessen",
    heroImg: "/assets/sanierung-friedberg-hessen-radex.webp",
    districts: [
      "Kernstadt und Altstadt",
      "Bruchenbrücken",
      "Dorheim",
      "Ockstadt",
      "Bauernheim",
    ],
    extraContent: [
      {
        title: "Sanierung in Friedberg (Hessen)",
        text: "Friedberg (Hessen) ist eine Stadt mit gewachsener Geschichte, lebendiger Altstadt, gefragten Wohnlagen, Eigentumswohnungen, Einfamilienhäusern, Mehrfamilienhäusern, älteren Bestandsgebäuden und Immobilien mit besonderem Charakter. Viele Immobilien in Friedberg besitzen eine gute Substanz, benötigen aber technische, optische oder energetische Modernisierungen. Eine Sanierung beginnt deshalb häufig mit einem konkreten Anlass, entwickelt sich aber schnell zu einem größeren Projekt. Radex begleitet Eigentümer, Käufer, Vermieter, Hausverwaltungen und Gewerbekunden bei Sanierungsprojekten in Friedberg.",
      },
      {
        title: "Badsanierung in Friedberg (Hessen)",
        text: "Eine Badsanierung in Friedberg gehört zu den häufigsten Modernisierungsprojekten. Viele Badezimmer wurden vor Jahren eingebaut und funktionieren noch, sind aber im Alltag nicht mehr komfortabel. Ein modernes Badezimmer soll hell, pflegeleicht, sicher, gut nutzbar und technisch zuverlässig sein. Radex koordiniert die beteiligten Fachbereiche, damit Badsanierung, Sanitärtechnik, Innenausbau, Abdichtung und Oberflächen sinnvoll zusammenwirken.",
      },
      {
        title: "Wohnungssanierung in Friedberg (Hessen)",
        text: "Wohnungssanierungen in Friedberg entstehen häufig nach einem Kauf, nach einem Mieterwechsel oder vor einer Neuvermietung. Viele Wohnungen besitzen eine attraktive Lage und solide Grundstruktur, wirken aber durch alte Badezimmer, abgenutzte Bodenbeläge, unmoderne Wandflächen oder veraltete Technik nicht mehr zeitgemäß. Wenn Bad, Böden, Wände, Türen und Technik gemeinsam geplant werden, entsteht ein stimmiges Ergebnis.",
      },
      {
        title: "Haussanierung in Friedberg (Hessen)",
        text: "Viele Häuser in Friedberg wurden über Jahrzehnte genutzt, gepflegt und teilweise abschnittsweise modernisiert. Dadurch entsteht häufig eine Immobilie mit solider Substanz, aber technischem, energetischem oder funktionalem Modernisierungsbedarf. Eine Haussanierung lohnt sich besonders, wenn Eigentümer ihre Immobilie langfristig halten möchten oder nach dem Kauf vor dem Einzug modernisieren wollen.",
      },
      {
        title: "Altbausanierung in Friedberg (Hessen)",
        text: "Friedberg besitzt historische und gewachsene Bereiche mit älteren Gebäuden, bei denen eine Sanierung besondere Sorgfalt erfordert. Gerade bei älteren Häusern und Altbauwohnungen sollte nicht nur die sichtbare Oberfläche modernisiert werden. Leitungen, Feuchtigkeit, Elektrostruktur, Heiztechnik, Bodenaufbauten und energetische Schwachstellen müssen früh betrachtet werden, um vorhandene Qualität zu erhalten.",
      },
      {
        title: "Innenausbau und Umbau in Friedberg (Hessen)",
        text: "Viele Immobilien in Friedberg besitzen eine attraktive Lage und solide Substanz, passen aber nicht mehr vollständig zu heutigen Wohn- und Nutzungsanforderungen. Der Innenausbau entscheidet darüber, ob eine Immobilie nach der Sanierung nicht nur erneuert wirkt, sondern im Alltag wirklich besser funktioniert, wenn Räume neu strukturiert oder Wohnbereiche geöffnet werden.",
      },
      {
        title: "Heizung und Sanitär in Friedberg (Hessen)",
        text: "Bei Sanierungen in Friedberg zeigt sich häufig, dass sichtbare Modernisierung und technische Modernisierung zusammengehören. Ein neues Bad funktioniert nur dann langfristig gut, wenn Sanitäranschlüsse, Abdichtung, Warmwasser, Heizkörper und Leitungsführung sauber geplant sind. Radex arbeitet im Bereich Heizung, Sanitär und Gebäudetechnik unter SHK-Meisterverantwortung.",
      },
      {
        title: "Elektrotechnik bei Sanierungen in Friedberg (Hessen)",
        text: "Viele ältere Immobilien in Friedberg wurden für einen Alltag geplant, in dem deutlich weniger elektrische Verbraucher genutzt wurden. Heute benötigen Haushalte mehr Steckdosen, bessere Beleuchtung und moderne Küchenanschlüsse. Radex koordiniert Elektroarbeiten über qualifizierte Fachpartner und stimmt die technische Planung mit Innenausbau, Bad, Küche und Wohnnutzung ab.",
      },
      {
        title: "Energetische Sanierung in Friedberg (Hessen)",
        text: "Energetische Sanierungen werden für Eigentümer in Friedberg immer wichtiger. Viele Gebäude besitzen eine solide Substanz, verursachen aber durch ältere Heiztechnik, Wärmeverluste oder unzureichende Dämmung höhere Betriebskosten als nötig. Besonders sinnvoll ist eine energetische Modernisierung, wenn sie mit ohnehin geplanten Arbeiten kombiniert wird.",
      },
      {
        title:
          "Nothilfe, Notsanierung, Wasserschaden, Schimmel und Asbest in Friedberg (Hessen)",
        text: "Nicht jede Sanierung wird lange geplant. Manchmal entsteht Handlungsbedarf plötzlich durch einen Wasserschaden, feuchte Wände, ein Rohrproblem oder Schimmelverdacht. Radex unterstützt bei dringenden Sanierungsfällen in Friedberg und koordiniert die nächsten Schritte auf Basis einer seriösen Bewertung des Schadens.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Friedberg (Hessen)",
        text: "Friedberg ist als Standort in der Wetterau auch für Gewerbe, Dienstleistung, Praxisflächen, Büroeinheiten, Ladenflächen und vermietete Objekte relevant. Gewerbeeinheiten müssen regelmäßig modernisiert werden, damit sie funktional, repräsentativ und technisch nutzbar bleiben. Bei Gewerbeobjekten sind klare Abläufe und Termine besonders wichtig.",
      },
    ],
  },
  friedrichsdorf: {
    name: "Friedrichsdorf",
    path: "/einfamilienhaus-wohnung-sanieren-friedrichsdorf",
    heroImg: "/assets/einfamilienhaus-friedrichsdorf-radex.webp",
    districts: [
      "Friedrichsdorf",
      "Köppern",
      "Seulberg",
      "Burgholzhausen",
      "Dillingen",
    ],
    extraContent: [
      {
        title: "Haus sanieren in Friedrichsdorf",
        text: "Friedrichsdorf zählt zu den gefragten Wohnstandorten im Taunus, an denen viele Eigentümer ihre Immobilie langfristig anpassen möchten. Viele Einfamilienhäuser, Doppelhaushälften und Reihenhäuser verfügen über eine gute Substanz, entsprechen jedoch technisch oder optisch nicht mehr heutigen Generationenansprüchen. Radex begleitet Eigentümer bei einer professionellen Haussanierung, um den Wohnkomfort für Familien zu steigern und den Werterhalt der Bestandsimmobilie dauerhaft zu sichern.",
      },
      {
        title: "Warum viele Badezimmer heute komplett neu gedacht werden",
        text: "Bei zahlreichen Modernisierungsprojekten in Friedrichsdorf beginnt die Planung im Badezimmer. Viele Bäder wurden vor Jahrzehnten geplant und passen nicht mehr zum heutigen Familienalltag, in dem großzügige Duschen, moderne Gestaltung und Barrierearmut gewünscht sind. Eine professionelle Badsanierung berücksichtigt Wasserleitungen, Abdichtungen, Sanitärtechnik und Lichtplanung gleichermaßen für ein langfristig funktionierendes Ergebnis.",
      },
      {
        title: "Nach dem Hauskauf die richtigen Entscheidungen treffen",
        text: "Viele Häuser in Friedrichsdorf werden innerhalb einer Familie weitergegeben oder nach einem Eigentümerwechsel saniert. Solange die Immobilie leer steht, bietet sich die beste Gelegenheit, Badezimmer zu erneuern, Wohnräume anzupassen und technische Bereiche zu prüfen. Durch dieses strukturierte Vorgehen vor dem Einzug lassen sich spätere Doppelarbeiten vermeiden und mehrere Maßnahmen effizient miteinander koordinieren.",
      },
      {
        title: "Wenn Wohnräume wieder zum Alltag passen sollen",
        text: "Viele Häuser in Friedrichsdorf wurden für ältere Familienstrukturen geplant, wodurch moderne Anforderungen wie integrierte Homeoffice-Arbeitsplätze oder offene Wohnbereiche fehlen. Der Innenausbau gehört deshalb zu den häufigsten Modernisierungsthemen. Intelligente Grundrissanpassungen in Einfamilienhäusern und Doppelhaushälften verändern das Raumgefühl vollständig und optimieren die vorhandene Wohnfläche ohne Anbauten.",
      },
      {
        title:
          "Technik modernisieren, bevor später doppelte Arbeiten entstehen",
        text: "In vielen Friedrichsdorfer Bestandsimmobilien stammen Wasserleitungen, Heizkörper und Sanitärinstallationen aus unterschiedlichen Bauphasen. Wer eine Badsanierung oder Haussanierung plant, sollte daher immer auch die Haustechnik hinter den Oberflächen prüfen. Radex betrachtet Heizung, Sanitär und Gebäudetechnik als Teil einer langfristigen Modernisierung, damit alle technischen Grundlagen zukunftssicher zusammenspielen.",
      },
      {
        title:
          "Moderne Elektroplanung für Familienhäuser und Bestandsimmobilien",
        text: "Viele Häuser in Friedrichsdorf wurden zu einer Zeit gebaut, in der umfassende Küchentechnik, Netzwerkverkabelungen oder Smart-Home-Lösungen noch keine Rolle spielten. Eine moderne Elektroplanung sollte deshalb frühzeitig in anstehende Sanierungs- und Innenausbauprojekte integriert werden. Werden Raumaufteilungen verändert oder Wände geöffnet, lassen sich Steckdosen und Lichtkonzepte ohne unnötige Zusatzarbeiten umsetzen.",
      },
      {
        title: "Energieeffizienz und Wohnkomfort gemeinsam verbessern",
        text: "Für Eigentümer von Bestandsimmobilien in Friedrichsdorf gewinnt die energetische Sanierung zur Senkung von Energiekosten und zum langfristigen Werterhalt an Bedeutung. Dabei benötigt ein Einfamilienhaus in Dillingen andere Maßnahmen als eine Eigentumswohnung oder ein Altbau in Seulberg. Radex kombiniert energetische Verbesserungen gezielt mit ohnehin geplanten Modernisierungen für ein stimmiges Gesamtkonzept.",
      },
      {
        title: "Schnelle Hilfe bei Wasserschäden und Feuchtigkeit",
        text: "Ein plötzlicher Wasserschaden durch einen Rohrbruch oder Feuchtigkeit hinter Wandflächen zwingt Eigentümer in Friedrichsdorf oft zu schnellem Handeln. Bei der professionellen Schadensbeseitigung steht die Ursachenforschung im Vordergrund, damit Folgeschäden vermieden werden. Häufig nutzen Eigentümer die ohnehin notwendige Öffnung von Wänden und Sanitärbereichen, um geplante Modernisierungen direkt vorzuziehen.",
      },
      {
        title: "Schimmel, Feuchtigkeit und Altbaurisiken richtig bewerten",
        text: "Wer eine Altbausanierung in Friedrichsdorf plant, sollte verdeckte Risiken wie Feuchtigkeit, Schimmel oder ältere Baustoffe frühzeitig berücksichtigen. Schimmel entsteht meist durch bauphysikalische Besonderheiten oder Wärmebrücken und muss an der Wurzel behandelt werden. Radex verfügt über die notwendige Sachkunde und Zertifizierungen nach TRGS 519 für eine fachgerechte Schimmel- und Asbestsanierung.",
      },
      {
        title:
          "Friedrichsdorf, Köppern, Seulberg, Burgholzhausen und Dillingen",
        text: "Die Stadtteile Friedrichsdorfs unterscheiden sich in ihrer Struktur: In der Kernstadt und in Seulberg dominieren Badsanierungen, Wohnungssanierungen und der moderne Innenausbau im Bestand. Köppern und Burgholzhausen sind stark geprägt von langfristig genutzten Einfamilienhäusern, bei denen Energieeffizienz und Werterhalt im Vordergrund stehen. In Dillingen schaffen Eigentümer nach einem Generationenwechsel modernen Wohnraum für die nächsten Jahrzehnte.",
      },
    ],
  },
  ginsheimgustavsburg: {
    name: "Ginsheim-Gustavsburg",
    path: "/sanierung-ginsheim-gustavsburg",
    heroImg: "/assets/sanierung-ginsheim-gustavsburg-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Sanierung in Ginsheim-Gustavsburg",
        text: "Ginsheim-Gustavsburg liegt an einer besonderen Schnittstelle im Rhein-Main-Gebiet und verbindet die Nähe zu Mainz, Wiesbaden, Rüsselsheim, Frankfurt und Darmstadt mit eigenen Wohnlagen, gewachsenen Bestandsimmobilien, Einfamilienhäusern, Eigentumswohnungen und Mehrfamilienhäusern. Viele Gebäude wurden über Jahre gepflegt, benötigen aber heute technische, optische oder energetische Modernisierungen. Radex begleitet Eigentümer, Käufer, Vermieter und Hausverwaltungen bei Sanierungsprojekten in Ginsheim-Gustavsburg, um den Immobilienwert und den Wohnkomfort optimal zu sichern.",
      },
      {
        title: "Badsanierung in Ginsheim-Gustavsburg",
        text: "Eine Badsanierung in Ginsheim-Gustavsburg gehört zu den häufigsten Modernisierungsprojekten. Viele ältere Badezimmer weisen typische Schwächen wie hohe Duschtassen, alte Fliesen oder unpraktische Grundrisse auf. Ein modernes Badezimmer soll pflegeleicht sein, technisch zuverlässig funktionieren und barrierearm gestaltet werden. Radex koordiniert alle beteiligten Fachbereiche von der Sanitärtechnik unter SHK-Meisterverantwortung bis zum Innenausbau, um langlebige Ergebnisse mit bodengleichen Duschen oder modernisierten Gäste-WCs zu garantieren.",
      },
      {
        title: "Wohnungssanierung in Ginsheim-Gustavsburg",
        text: "Wohnungssanierungen in Ginsheim-Gustavsburg entstehen häufig nach einem Kauf, einem Mieterwechsel oder vor einer gezielten Neuvermietung. Wenn Bad, Böden, Wände, Türen und Technik vor dem Einzug gemeinsam geplant und koordiniert werden, entsteht ein reibungsloser Ablauf. Für Eigennutzer steht dabei der persönliche Wohnkomfort im Mittelpunkt, während Vermieter und Kapitalanleger von robusten Materialien, moderner Elektrostruktur, verbesserter Vermietbarkeit und planbaren Kosten profitieren.",
      },
      {
        title: "Haussanierung in Ginsheim-Gustavsburg",
        text: "Viele Häuser in Ginsheim-Gustavsburg wurden über Jahrzehnte genutzt und schrittweise verändert, wodurch oft ein Mix aus alten und neuen Bereichen mit technischem sowie optischem Modernisierungsbedarf entsteht. Eine Haussanierung lohnt sich besonders nach einem Eigentümerwechsel, um die Immobilie an neue Lebensphasen wie das Homeoffice anzupassen oder Grundrisse zu öffnen. Radex unterstützt Eigentümer dabei, notwendige und gewünschte Maßnahmen sinnvoll zu priorisieren.",
      },
      {
        title: "Altbausanierung in Ginsheim-Gustavsburg",
        text: "In den älteren Häusern und Bestandswohnungen in Ginsheim-Gustavsburg erfordert eine Sanierung besondere Sorgfalt. Hierbei sollte nicht nur die sichtbare Oberfläche modernisiert werden, sondern Leitungen, Feuchtigkeit, Elektrostruktur, Heiztechnik und Bodenaufbauten müssen frühzeitig betrachtet werden. Das Ziel einer Altbausanierung liegt darin, die vorhandene Qualität und den Charakter zu erhalten und das Gebäude technisch auf heutige Anforderungen vorzubereiten.",
      },
      {
        title: "Innenausbau und Umbau in Ginsheim-Gustavsburg",
        text: "Viele Immobilien in Ginsheim-Gustavsburg bieten eine gute Grundstruktur, verfügen aber über veraltete, zu geschlossene Grundrisse. Der Innenausbau mittels Trockenbau, das Öffnen von Wohnbereichen oder das Schaffen von Homeoffice-Bereichen macht Bestandsimmobilien wieder alltagstauglich. Wird der Innenausbau frühzeitig mit einer Bad- oder Wohnungssanierung verbunden, lassen sich Lichtplanung, Steckdosen und Raumwirkung perfekt aufeinander abstimmen.",
      },
      {
        title: "Heizung und Sanitär in Ginsheim-Gustavsburg",
        text: "Sichtbare Modernisierungen und technische Erneuerungen gehören bei einer Sanierung fest zusammen. Ein neues Bad funktioniert nur dann langfristig, wenn Sanitäranschlüsse, Abdichtung, Warmwasser und Leitungsführungen sauber geplant sind. Radex arbeitet im Bereich Heizung, Sanitär und Gebäudetechnik unter SHK-Meisterverantwortung, wodurch alle technischen Anforderungen zukunftssicher in die Gesamtplanung einfließen.",
      },
      {
        title: "Elektrotechnik bei Sanierungen in Ginsheim-Gustavsburg",
        text: "Da ältere Immobilien in Ginsheim-Gustavsburg für deutlich weniger elektrische Verbraucher geplant wurden, ist eine moderne Elektroplanung für Küche, Licht, Netzwerke und Homeoffice-Anschlüsse unverzichtbar. Bei einer Sanierung sollte die Elektrotechnik frühzeitig mitgedacht werden. Radex koordiniert alle Elektroarbeiten über qualifizierte Fachpartner und stimmt die technische Infrastruktur passgenau mit dem Innenausbau und der späteren Wohnnutzung ab.",
      },
      {
        title: "Energetische Sanierung in Ginsheim-Gustavsburg",
        text: "Viele Gebäude in Ginsheim-Gustavsburg besitzen eine solide Substanz, verursachen jedoch durch ältere Heiztechnik oder unzureichende Dämmung höhere Betriebskosten als nötig. Eine energetische Sanierung senkt den Energieverbrauch langfristig und steigert den Wohnkomfort. Besonders effizient ist die Umsetzung, wenn Maßnahmen wie Wärmepumpenvorbereitungen oder Dämmungen direkt mit ohnehin geplanten Bad-, Heizungs- oder Bodenarbeiten kombiniert werden.",
      },
      {
        title:
          "Nothilfe, Notsanierung, Wasserschaden, Schimmel und Asbest in Ginsheim-Gustavsburg",
        text: "Manchmal entsteht Sanierungsbedarf völlig unvorhergesehen durch einen Wasserschaden, feuchte Wände, ein Rohrproblem oder akuten Schimmel- und Schadstoffverdacht. Radex unterstützt bei dringenden Sanierungsfällen in Ginsheim-Gustavsburg mit einer seriösen Schadensbewertung und fachlich fundierten Vorgehensweise. Bei Feuchtigkeit steht die präzise Ursachenprüfung im Fokus, damit Schäden dauerhaft beseitigt werden und nicht erneut auftreten.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Ginsheim-Gustavsburg",
        text: "Durch die Lage an der Mainspitze ist Ginsheim-Gustavsburg ein relevanter Standort für Gewerbe, Praxen und Büroflächen. Damit diese Einheiten funktional, repräsentativ und technisch nutzbar bleiben, müssen sie regelmäßig modernisiert oder nach einem Mieterwechsel angepasst werden. Radex realisiert den Gewerbeumbau und den gezielten Mieterausbau mit klaren, strukturierten Abläufen zur Vermeidung langer Ausfallzeiten.",
      },
      {
        title:
          "Ginsheim-Gustavsburger Wohnlagen – Sanierung passend zur lokalen Immobilienstruktur",
        text: "In Ginsheim stehen oft Badsanierungen, Wohnungssanierungen und technische Modernisierungen älterer Bestandsimmobilien in Rheinnähe im Fokus. In Gustavsburg investieren Eigentümer primär in umfassende Haussanierungen, funktionale Umbauten von Büro-, Laden- und Praxisflächen sowie Modernisierungen nach einem Mieterwechsel. Durch die wassernah geprägten Lagen der Mainspitze sollten Feuchtigkeit, Abdichtung und Kellerbereiche besonders sorgfältig bewertet werden.",
      },
    ],
  },
  griesheim: {
    name: "Griesheim",
    path: "/sanierung-griesheim",
    heroImg: "/assets/sanierung-griesheim-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Sanierung in Griesheim",
        text: "Griesheim gehört zu den gefragten Wohnstandorten im Umfeld von Darmstadt und verbindet gewachsene Wohngebiete, Einfamilienhäuser und Eigentumswohnungen. Viele Gebäude wurden über Jahrzehnte gepflegt, entsprechen aber nicht mehr vollständig den heutigen Anforderungen an Komfort, Energieeffizienz, Technik und Raumaufteilung. Radex begleitet Eigentümer, Käufer, Vermieter und Hausverwaltungen bei Sanierungsprojekten in Griesheim, um technische Grundlagen, langfristige Nutzung und den Immobilienwert optimal zu verbinden.",
      },
      {
        title: "Badsanierung in Griesheim",
        text: "Eine Badsanierung in Griesheim gehört zu den häufigsten Modernisierungsprojekten, da viele ältere Badezimmer im Alltag unpraktisch geworden sind. Ein modernes Badezimmer soll pflegeleicht sein, technisch zuverlässig funktionieren und zur jeweiligen Lebenssituation passen. Radex koordiniert alle beteiligten Fachbereiche von der Sanitärtechnik bis zum Innenausbau, um ein stimmiges und langlebiges Ergebnis mit bodengleichen Duschen oder modernisierten Gäste-WCs zu garantieren.",
      },
      {
        title: "Wohnungssanierung in Griesheim",
        text: "Wohnungssanierungen in Griesheim entstehen häufig nach einem Kauf, einem Mieterwechsel oder vor einer gezielten Neuvermietung. Wenn Bad, Böden, Wände, Türen und Technik vor dem Einzug gemeinsam geplant und koordiniert werden, entsteht ein reibungsloser Ablauf. Für Eigennutzer steht dabei der persönliche Wohnkomfort im Mittelpunkt, während Vermieter und Kapitalanleger von robusten Materialien und planbaren Kosten profitieren.",
      },
      {
        title: "Haussanierung in Griesheim",
        text: "Viele Häuser in Griesheim wurden über Jahrzehnte genutzt und schrittweise verändert, wodurch oft ein Mix aus alten und neuen Bereichen mit technischem sowie optischem Modernisierungsbedarf entsteht. Eine Haussanierung lohnt sich besonders nach einem Eigentümerwechsel oder um die Immobilie an neue Lebensphasen wie das Homeoffice anzupassen. Radex unterstützt Eigentümer dabei, notwendige und gewünschte Maßnahmen sinnvoll zu priorisieren.",
      },
      {
        title: "Altbausanierung in Griesheim",
        text: "In den älteren Häusern und Bestandswohnungen in Griesheim erfordert eine Sanierung besondere Sorgfalt. Hierbei sollte nicht nur die sichtbare Oberfläche modernisiert werden, sondern Leitungen, Feuchtigkeit, Elektrostruktur, Heiztechnik und Bodenaufbauten müssen frühzeitig betrachtet werden. Das Ziel einer Altbausanierung liegt darin, die vorhandene Qualität und den Charakter zu erhalten und das Gebäude technisch auf heutige Anforderungen vorzubereiten.",
      },
      {
        title: "Innenausbau und Umbau in Griesheim",
        text: "Viele Immobilien in Griesheim bieten genug Fläche, verfügen aber über veraltete, zu geschlossene Grundrisse. Der Innenausbau mittels Trockenbau, das Öffnen von Wohnbereichen oder das Schaffen von Homeoffice-Bereichen macht Bestandsimmobilien wieder alltagstauglich. Wird der Innenausbau frühzeitig mit einer Bad- oder Wohnungssanierung verbunden, lassen sich Lichtplanung, Steckdosen und Raumwirkung perfekt aufeinander abstimmen.",
      },
      {
        title: "Heizung und Sanitär in Griesheim",
        text: "Sichtbare Modernisierungen und technische Erneuerungen gehören bei einer Sanierung fest zusammen. Ein neues Bad funktioniert nur dann langfristig, wenn Sanitäranschlüsse, Abdichtung, Warmwasser und Leitungsführungen sauber geplant sind. Radex arbeitet im Bereich Heizung, Sanitär und Gebäudetechnik unter SHK-Meisterverantwortung, wodurch alle technischen Anforderungen zukunftssicher in die Gesamtplanung einfließen.",
      },
      {
        title: "Elektrotechnik bei Sanierungen in Griesheim",
        text: "Da ältere Immobilien in Griesheim für deutlich weniger elektrische Verbraucher geplant wurden, ist eine moderne Elektroplanung für Küche, Licht und Netzwerke unverzichtbar. Bei einer Sanierung sollte die Elektrotechnik frühzeitig mitgedacht werden. Radex koordiniert alle Elektroarbeiten über qualifizierte Fachpartner und stimmt die technische Infrastruktur passgenau mit dem Innenausbau und der späteren Wohnnutzung ab.",
      },
      {
        title: "Energetische Sanierung in Griesheim",
        text: "Viele Gebäude in Griesheim besitzen eine solide Substanz, verursachen jedoch durch ältere Heiztechnik oder unzureichende Dämmung höhere Betriebskosten als nötig. Eine energetische Sanierung senkt den Energieverbrauch langfristig und steigert den Wohnkomfort. Besonders effizient ist die Umsetzung, wenn Maßnahmen wie Wärmepumpenvorbereitungen oder Dämmungen direkt mit ohnehin geplanten Bad- oder Bodenarbeiten kombiniert werden.",
      },
      {
        title:
          "Nothilfe, Notsanierung, Wasserschaden, Schimmel und Asbest in Griesheim",
        text: "Manchmal entsteht Sanierungsbedarf völlig unvorhergesehen durch einen Wasserschaden, feuchte Wände oder akuten Schimmelverdacht. Radex unterstützt bei dringenden Sanierungsfällen in Griesheim mit einer seriösen Schadensbewertung und fachlich fundierten Vorgehensweise. Bei Feuchtigkeit steht die präzise Ursachenprüfung im Fokus, damit Schäden dauerhaft beseitigt werden und nicht erneut auftreten.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Griesheim",
        text: "Durch die Nähe zu Darmstadt ist Griesheim ein relevanter Standort für Gewerbe, Praxen und Büroflächen. Damit diese Einheiten funktional, repräsentativ und technisch nutzbar bleiben, müssen sie regelmäßig modernisiert oder nach einem Mieterwechsel angepasst werden. Radex realisiert den Gewerbeumbau und den gezielten Mieterausbau mit klaren, strukturierten Abläufen zur Vermeidung langer Ausfallzeiten.",
      },
      {
        title:
          "Griesheimer Wohnlagen – Sanierung passend zur lokalen Immobilienstruktur",
        text: "In Griesheims Innenstadt stehen oft Badsanierungen, Wohnungssanierungen und technische Modernisierungen älterer Bestandsimmobilien im Fokus. In den Wohngebieten Richtung Darmstadt investieren Eigentümer primär in umfassende Haussanierungen, energetische Verbesserungen und familiengerechten Innenausbau. In den Gewerbe- und Mischlagen realisiert Radex funktionale Umbauten von Büro-, Laden- und Praxisflächen.",
      },
    ],
  },
  grossgerau: {
    name: "Groß-Gerau",
    path: "/immobilie-modernisieren-gross-gerau",
    heroImg: "/assets/immobilie-gross-gerau-radex.webp",
    districts: [
      "Groß-Gerau Zentrum",
      "Dornheim",
      "Wallerstädten",
      "Berkach",
      "Auf Esch",
    ],
    extraContent: [
      {
        title: "Immobilie modernisieren in Groß-Gerau",
        text: "Viele Häuser und Wohnungen in Groß-Gerau verfügen über eine gute Grundsubstanz. Statt nach einer neuen Immobilie zu suchen, entscheiden sich viele Eigentümer bewusst dafür, ihr bestehendes Haus weiterzuentwickeln, um Wohnkomfort, Alltagstauglichkeit und den Immobilienwerterhalt zu sichern. Radex begleitet Eigentümer, Familien und Käufer bei der Modernisierung von Familienhäusern, Doppelhaushälften, Reihenhäusern und Eigentumswohnungen im gesamten Stadtgebiet sowie vor dem Einzug nach einem Immobilienkauf.",
      },
      {
        title: "Badsanierung in Groß-Gerau",
        text: "Bei vielen Modernisierungsprojekten in Groß-Gerau beginnt die Planung im Badezimmer. Ein modernes Badezimmer soll pflegeleicht sein, hell wirken, zur jeweiligen Lebenssituation passen und barrierearm vorbereitet werden. Radex unterstützt Eigentümer bei der Badsanierung – vom komfortablen Familienbad über funktionale Duschbäder bis hin zur Modernisierung von Gäste-WCs –, wobei Raumaufteilung, Lichtkonzepte und Sanitärtechnik unter SHK-Meisterverantwortung nahtlos ineinandergreifen.",
      },
      {
        title: "Wohnungssanierung in Groß-Gerau",
        text: "Eine Wohnungssanierung in Groß-Gerau lohnt sich besonders vor dem Einzug nach einem Immobilienkauf oder vor einer geplanten Neuvermietung. Solange die Eigentumswohnung leer steht, lassen sich Badmodernisierungen, neue Böden, Wandarbeiten, Türenerneuerungen und die Elektrokoordination besonders effizient und sauber aufeinander abstimmen. Das schafft optimalen Wohnkomfort für Eigennutzer und sichert den langfristigen Werterhalt für Kapitalanleger.",
      },
      {
        title: "Haussanierung in Groß-Gerau",
        text: "Ob freistehendes Familienhaus, Doppelhaushälfte oder Reihenhaus – eine Haussanierung in Groß-Gerau strukturiert die vorhandene Wohnfläche neu und bringt veraltete Gebäudetechnik auf den heutigen Stand. Radex unterstützt Eigentümer dabei, notwendige Sanierungsmaßnahmen wie Grundrissoptimierungen, Rohrleitungsprüfungen, Heizkörperaustausch und optische Modernisierungen sinnvoll zu priorisieren und in einer wirtschaftlichen Reihenfolge umzusetzen.",
      },
      {
        title: "Innenausbau und Wohnraumanpassung in Groß-Gerau",
        text: "Wenn der Alltag sich verändert, Homeoffice-Bereiche fehlen oder Kinderzimmer neu geordnet werden müssen, schafft ein professioneller Innenausbau in Groß-Gerau Abhilfe. Mittels Trockenbau, dem Öffnen von Küchen- und Wohnbereichen sowie intelligenten Stauraumlösungen lassen sich Bestandsimmobilien flexibel anpassen. Wird der Innenausbau frühzeitig mit einer Bad- oder Haussanierung kombiniert, können Bodenaufbauten, Beleuchtung und Wandflächen perfekt abgestimmt werden.",
      },
      {
        title: "Heizung und Sanitär in Groß-Gerau",
        text: "Eine nachhaltige Modernisierung verbindet ansprechende Gestaltung mit zukunftssicherer Haustechnik. Radex ist im Bereich Heizung, Sanitär und Gebäudetechnik SHK-meistergeführt. Dadurch fließen Wasserleitungen, Abwasserprüfungen, Warmwasseroptimierungen und der fachgerechte Austausch von Heizkörpern direkt in die Sanierungsplanung ein, um technische Schnittstellen sauber zu schließen und spätere Nacharbeiten an Wänden oder Böden zu vermeiden.",
      },
      {
        title: "Elektrotechnik bei Sanierungen in Groß-Gerau",
        text: "Da ältere Bestandsgebäude für deutlich weniger elektrische Verbraucher ausgelegt wurden, ist eine moderne Elektroplanung bei jeder Sanierung in Groß-Gerau unverzichtbar. Radex koordiniert alle Elektroarbeiten über qualifizierte Fachpartner. So werden Steckdosen für das Homeoffice, Lichtkonzepte, moderne Küchenanschlüsse, Unterverteilungen und Smart-Home-Vorbereitungen exakt auf den neuen Innenausbau und die spätere Raumnutzung abgestimmt.",
      },
      {
        title: "Energetische Sanierung in Groß-Gerau",
        text: "Eine energetische Sanierung senkt die Heizkosten und steigert den Wohnwert nachhaltig. Ob Wärmepumpenvorbereitung, gezielte Dämmmaßnahmen an Kellerdecken oder Dachbereichen sowie die Optimierung der Wärmeverteilung – Radex verbindet energetische Verbesserungen direkt mit ohnehin geplanten Badsanierungen oder Innenausbau-Arbeiten, um eine wirtschaftliche und auf das jeweilige Gebäude abgestimmte Modernisierung zu gewährleisten.",
      },
      {
        title: "Nothilfe, Wasserschaden, Schimmel und Asbest in Groß-Gerau",
        text: "Tritt unvorhergesehen ein Wasserschaden, ein Rohrbruch oder akuter Schimmelverdacht auf, ist schnelles und fachlich fundiertes Handeln gefragt. Radex unterstützt Eigentümer bei der Schadenseinschätzung und der anschließenden Notsanierung. Durch die Sachkunde und Zertifizierungen im Bereich Schimmel- und Asbestsanierung nach TRGS 519 werden auch versteckte Risiken bei Altbausanierungen und Rückbauarbeiten sicher erkannt und fachgerecht behoben.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Groß-Gerau",
        text: "Als wichtiger Wirtschafts- und Verwaltungsstandort erfordert Groß-Gerau flexible Lösungen für Gewerbeeinheiten. Radex realisiert den Gewerbeumbau, Praxisumbau, Mieterausbau und die Objektsanierung nach einem Mieterwechsel. Dabei stehen funktionale Raumaufteilungen, repräsentative Oberflächen, zeitgemäße Sanitärbereiche und strukturierte Abläufe im Fokus, um Ausfallzeiten für Unternehmen und Eigentümer so kurz wie möglich zu halten.",
      },
      {
        title:
          "Groß-Gerauer Stadtteile – Modernisierung passend zur lokalen Gebäudestruktur",
        text: "Im Groß-Gerau Zentrum stehen häufig Wohnungssanierungen von Eigentumswohnungen, Modernisierungen nach Eigentümerwechsel sowie Gewerbeumbauten im Vordergrund. In Dornheim und Wallerstädten dominieren Sanierungsprojekte an freistehenden Familienhäusern, Doppelhaushälften und Reihenhäusern, bei denen Badsanierungen, energetische Verbesserungen und der Innenausbau im Fokus liegen. In Berkach stehen oft der Werterhalt gewachsener Strukturen, Wohnraumanpassungen sowie die Beseitigung von Feuchtigkeitsschäden im Mittelpunkt.",
      },
    ],
  },
  grosskrotzenburg: {
    name: "Großkrotzenburg",
    path: "/sanierung-grosskrotzenburg",
    heroImg: "/assets/sanierung-grosskrotzenburg-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Sanierung in Großkrotzenburg",
        text: "Großkrotzenburg bietet durch seine Lage am Main und die Nähe zu Hanau und Aschaffenburg eine attraktive Wohnlage mit gewachsenen Bestandsimmobilien, Einfamilienhäusern und Eigentumswohnungen. Viele Gebäude wurden über Jahre gepflegt, benötigen jedoch technische, optische oder energetische Modernisierungen. Radex begleitet Eigentümer, Käufer, Vermieter und Hausverwaltungen bei Sanierungsprojekten in Großkrotzenburg, um den Immobilienwert langfristig zu sichern und zeitgemäßen Wohnkomfort zu schaffen.",
      },
      {
        title: "Badsanierung in Großkrotzenburg",
        text: "Eine Badsanierung in Großkrotzenburg gehört zu den häufigsten Modernisierungsprojekten, da viele ältere Badezimmer im Alltag unpraktisch geworden sind. Ein modernes Badezimmer soll pflegeleicht sein, hell wirken, zur jeweiligen Lebenssituation passen und barrierearm vorbereitet werden. Radex unterstützt Eigentümer bei der Badsanierung – vom komfortablen Familienbad mit bodengleicher Dusche bis zur Erneuerung des Gäste-WCs –, wobei Raumaufteilung, Lichtkonzepte und Sanitärtechnik nahtlos ineinandergreifen.",
      },
      {
        title: "Wohnungssanierung in Großkrotzenburg",
        text: "Wohnungssanierungen in Großkrotzenburg entstehen häufig nach einem Kauf, einem Mieterwechsel oder vor einer geplanten Neuvermietung. Wenn Bad, Böden, Wände, Türen und Technik vor dem Einzug gemeinsam geplant und koordiniert werden, entsteht ein reibungsloser Ablauf. Für Eigennutzer steht dabei der persönliche Wohnkomfort im Mittelpunkt, während Vermieter und Kapitalanleger von robusten Materialien, moderner Elektrostruktur und planbaren Kosten profitieren.",
      },
      {
        title: "Haussanierung in Großkrotzenburg",
        text: "Viele Häuser in Großkrotzenburg wurden über Jahrzehnte genutzt und schrittweise verändert, wodurch oft ein Mix aus alten und neuen Bereichen mit technischem sowie optischem Modernisierungsbedarf entsteht. Eine Haussanierung lohnt sich besonders nach einem Eigentümerwechsel, um die Immobilie an neue Lebensphasen anzupassen, Grundrisse zu öffnen oder Homeoffice-Bereiche zu schaffen. Radex unterstützt Eigentümer dabei, notwendige und gewünschte Maßnahmen sinnvoll zu priorisieren.",
      },
      {
        title: "Altbausanierung in Großkrotzenburg",
        text: "In den älteren Häusern und Bestandswohnungen in Großkrotzenburg erfordert eine Sanierung besondere Sorgfalt. Hierbei sollte nicht nur die sichtbare Oberfläche modernisiert werden, sondern Leitungen, Feuchtigkeitsschutz, Elektrostruktur, Heiztechnik und Bodenaufbauten müssen frühzeitig betrachtet werden. Das Ziel einer Altbausanierung liegt darin, die vorhandene Qualität und den Charakter zu erhalten und das Gebäude technisch auf heutige Anforderungen vorzubereiten.",
      },
      {
        title: "Innenausbau und Umbau in Großkrotzenburg",
        text: "Viele Immobilien in Großkrotzenburg bieten eine gute Grundsubstanz, verfügen aber über veraltete, zu geschlossene Grundrisse. Der Innenausbau mittels Trockenbau, das Öffnen von Wohnbereichen oder das Schaffen von flexiblen Arbeitsbereichen macht Bestandsimmobilien wieder alltagstauglich. Wird der Innenausbau frühzeitig mit einer Bad- oder Wohnungssanierung verbunden, lassen sich Lichtplanung, Steckdosen und Raumwirkung perfekt aufeinander abstimmen.",
      },
      {
        title: "Heizung und Sanitär in Großkrotzenburg",
        text: "Sichtbare Modernisierungen und technische Erneuerungen gehören bei einer Sanierung fest zusammen. Ein neues Bad funktioniert nur dann langfristig, wenn Sanitäranschlüsse, Abdichtung, Warmwasser und Leitungsführungen sauber geplant sind. Radex arbeitet im Bereich Heizung, Sanitär und Gebäudetechnik unter SHK-Meisterverantwortung, wodurch alle technischen Anforderungen zukunftssicher in die Gesamtplanung einfließen.",
      },
      {
        title: "Elektrotechnik bei Sanierungen in Großkrotzenburg",
        text: "Da ältere Immobilien in Großkrotzenburg für deutlich weniger elektrische Verbraucher geplant wurden, ist eine moderne Elektroplanung für Küche, Licht, Netzwerke und Homeoffice-Anschlüsse unverzichtbar. Bei einer Sanierung sollte die Elektrotechnik frühzeitig mitgedacht werden. Radex koordiniert alle Elektroarbeiten über qualifizierte Fachpartner und stimmt die technische Infrastruktur passgenau mit dem Innenausbau und der späteren Wohnnutzung ab.",
      },
      {
        title: "Energetische Sanierung in Großkrotzenburg",
        text: "Viele Gebäude in Großkrotzenburg besitzen eine solide Substanz, verursachen jedoch durch ältere Heiztechnik oder unzureichende Dämmung höhere Betriebskosten als nötig. Eine energetische Sanierung senkt den Energieverbrauch langfristig und steigert den Wohnkomfort. Besonders effizient ist die Umsetzung, wenn Maßnahmen wie Wärmepumpenvorbereitungen oder Dämmungen direkt mit ohnehin geplanten Bad-, Heizungs- oder Bodenarbeiten kombiniert werden.",
      },
      {
        title:
          "Nothilfe, Notsanierung, Wasserschaden, Schimmel und Asbest in Großkrotzenburg",
        text: "Manchmal entsteht Sanierungsbedarf völlig unvorhergesehen durch einen Wasserschaden, feuchte Wände, einen Rohrbruch oder akuten Schimmel- und Schadstoffverdacht. Radex unterstützt bei dringenden Sanierungsfällen in Großkrotzenburg mit einer seriösen Schadensbewertung und fachlich fundierten Vorgehensweise. Bei Feuchtigkeit steht die präzise Ursachenprüfung im Fokus, damit Schäden dauerhaft beseitigt werden und nicht erneut auftreten.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Großkrotzenburg",
        text: "Durch die gute Erreichbarkeit im Einzugsgebiet von Hanau ist Großkrotzenburg ein relevanter Standort für Gewerbe, Praxen und Büroflächen. Damit diese Einheiten funktional, repräsentativ und technisch nutzbar bleiben, müssen sie regelmäßig modernisiert oder nach einem Mieterwechsel angepasst werden. Radex realisiert den Gewerbeumbau und den gezielten Mieterausbau mit klaren, strukturierten Abläufen zur Vermeidung langer Ausfallzeiten.",
      },
      {
        title:
          "Großkrotzenburger Wohnlagen – Sanierung passend zur lokalen Immobilienstruktur",
        text: "In den gewachsenen Wohngebieten von Großkrotzenburg stehen oft umfassende Haussanierungen, energetische Verbesserungen und familiengerechter Innenausbau im Fokus. Durch die Nähe und Lage am Main sollten Eigentümer bei älteren Kellerbereichen und lang genutzten Bestandsimmobilien Feuchtigkeit, Bauwerksabdichtung und Gebäudetechnik besonders sorgfältig betrachten, damit Modernisierungen langfristig wertstabil und schadensfrei bleiben.",
      },
    ],
  },
  grossumstadt: {
    name: "Groß-Umstadt",
    path: "/sanierung-gross-umstadt",
    heroImg: "/assets/sanierung-gross-umstadt-radex.webp",
    districts: [
      "Kernstadt und Altstadtbereiche",
      "Stadtteile und Wohnlagen",
      "Gewerbe- und Mischlagen",
    ],
    extraContent: [
      {
        title: "Sanierung in Groß-Umstadt",
        text: "Groß-Umstadt verbindet historische Altstadtstrukturen, Weinlagen und vielseitige Stadtteile im Landkreis Darmstadt-Dieburg. Viele der gewachsenen Bestandsgebäude, Wohnungen und Einfamilienhäuser verfügen über eine solide Substanz, benötigen jedoch technische, optische oder energetische Modernisierungen. Radex begleitet Eigentümer, Käufer, Vermieter und Hausverwaltungen bei Sanierungsprojekten im gesamten Stadtgebiet, um zeitgemäßen Wohnkomfort zu schaffen und den langfristigen Immobilienwert sicherzustellen.",
      },
      {
        title: "Badsanierung in Groß-Umstadt",
        text: "Eine Badsanierung in Groß-Umstadt gehört zu den häufigsten Projekten, da ältere Badezimmer den heutigen Anforderungen an Komfort, Helligkeit und Barrierearmut oft nicht mehr entsprechen. Ob komfortables Familienbad, modernes Duschbad mit bodengleicher Dusche oder die Aufwertung des Gäste-WCs – Radex plant und koordiniert die Sanierung umfassend, sodass Raumaufteilung, Lichtkonzepte, Fliesenarbeiten und die Sanitärinstallation perfekt ineinandergreifen.",
      },
      {
        title: "Wohnungssanierung in Groß-Umstadt",
        text: "Wohnungssanierungen in Groß-Umstadt lohnen sich besonders nach einem Immobilienkauf vor dem Einzug oder bei einem Mieterwechsel vor der Neuvermietung. Solange die Räume leer stehen, lassen sich Badmodernisierungen, Wandgestaltung, neue Böden, der Austausch von Türen und technische Anpassungen besonders zügig und wirtschaftlich umsetzen. Das steigert den Wohnkomfort für Eigennutzer und sichert die langfristige Rendite für Kapitalanleger.",
      },
      {
        title: "Haussanierung in Groß-Umstadt",
        text: "Viele Reihenhäuser, Doppelhaushälften und freistehende Einfamilienhäuser in Groß-Umstadt wurden über Jahrzehnte schrittweise gepflegt, weisen heute jedoch einen umfassenden Modernisierungsbedarf auf. Eine strukturierte Haussanierung verbindet notwendige Kernsanierungsmaßnahmen wie die Erneuerung der Haustechnik mit funktionalen Grundrissverbesserungen. Radex unterstützt Eigentümer dabei, alle Maßnahmen sinnvoll zu priorisieren und in einer wirtschaftlichen Reihenfolge umzusetzen.",
      },
      {
        title: "Altbausanierung in Groß-Umstadt",
        text: "In den historischen Ortskernen und älteren Bestandsgebäuden Groß-Umstadts erfordert eine Altbausanierung besondere Fachkenntnis. Neben optischen Oberflächen stehen hier veraltete Wasserleitungen, der Feuchtigkeitsschutz in Keller und Wänden, der Schallschutz, alte Elektrostrukturen und energetische Schwachstellen im Fokus. Das Ziel ist es, den individuellen Charakter und die Substanz der Immobilie zu bewahren und sie gleichzeitig technisch auf den neuesten Stand zu bringen.",
      },
      {
        title: "Innenausbau und Umbau in Groß-Umstadt",
        text: "Wenn sich die Lebenssituation verändert, Homeoffice-Bereiche fehlen oder kleinteilige Grundrisse geöffnet werden sollen, schafft ein moderner Innenausbau in Groß-Umstadt neue Wohnqualität. Mittels flexiblem Trockenbau, dem Austausch von Innentüren und durchdachten Raumkonzepten lässt sich die vorhandene Wohnfläche optimal strukturieren. Wird der Innenausbau frühzeitig mit einer Bad- oder Haussanierung verknüpft, können Elektrokoordination und Lichtplanung nahtlos integriert werden.",
      },
      {
        title: "Heizung und Sanitär in Groß-Umstadt",
        text: "Die technische Infrastruktur bildet das unsichtbare Fundament jeder hochwertigen Sanierung. Radex arbeitet im Bereich Heizung, Sanitär und Gebäudetechnik unter SHK-Meisterverantwortung. Dadurch werden die Erneuerung von Rohrleitungen, der Austausch veralteter Heizkörper, die Optimierung der Warmwassertechnik sowie die Vorbereitung einer Heizungsmodernisierung von Anfang an fachgerecht in das Gesamtprojekt einbezogen, was spätere Nacharbeiten verhindert.",
      },
      {
        title: "Elektrotechnik bei Sanierungen in Groß-Umstadt",
        text: "Ältere Immobilien wurden für deutlich weniger elektrische Verbraucher konzipiert, weshalb eine moderne Elektroplanung bei jeder Sanierung in Groß-Umstadt unverzichtbar ist. Radex koordiniert alle Elektroarbeiten über qualifizierte Fachpartner. So werden Steckdosenplatzierungen, Netzwerkverkabelungen, moderne Küchenanschlüsse, Unterverteilungen und Smart-Home-Vorbereitungen exakt auf den neuen Innenausbau und die künftige Raumnutzung abgestimmt.",
      },
      {
        title: "Energetische Sanierung in Groß-Umstadt",
        text: "Eine energetische Sanierung senkt die Betriebskosten nachhaltig und steigert den Gebäudewert. Ob gezielte Dämmmaßnahmen an Kellerdecken und Dachbereichen, die energetische Optimierung der Wärmeübertragung oder die Vorbereitung auf moderne Wärmepumpensysteme – Radex verbindet energetische Verbesserungen direkt mit ohnehin geplanten Bad-, Heizungs- oder Trockenbauarbeiten, um eine wirtschaftliche Umsetzung zu garantieren.",
      },
      {
        title:
          "Nothilfe, Notsanierung, Wasserschaden, Schimmel und Asbest in Groß-Umstadt",
        text: "Bei unvorhergesehenen Schäden durch einen Wasserschaden, einen Rohrbruch, feuchte Kellerwände oder akuten Schimmel- und Schadstoffverdacht ist schnelles und fachgerechtes Handeln gefordert. Radex unterstützt Eigentümer in Groß-Umstadt bei der seriösen Schadenseinschätzung und koordiniert die notwendigen Sanierungsschritte. Bei Feuchtigkeit steht die tiefgehende Ursachenprüfung im Vordergrund, damit der Schaden dauerhaft und nachhaltig beseitigt wird.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Groß-Umstadt",
        text: "Groß-Umstadt ist ein bedeutender Gewerbe- und Dienstleistungsstandort, an dem Büroflächen, Praxen, Ladenlokale und gemischt genutzte Immobilien regelmäßig an neue Anforderungen angepasst werden müssen. Radex realisiert den Gewerbeumbau, Praxisumbau und gezielten Mieterausbau nach einem Mieterwechsel. Dabei stehen funktionale Raumaufteilungen, repräsentative Oberflächen und straffe, koordinierte Abläufe im Fokus, um betriebliche Ausfallzeiten so kurz wie möglich zu halten.",
      },
      {
        title:
          "Groß-Umstädter Stadtteile – Sanierung passend zur lokalen Gebäudestruktur",
        text: "In den Kern- und Altstadtbereichen Groß-Umstadts dominieren oft anspruchsvolle Altbausanierungen, Wohnungssanierungen sowie die technische Modernisierung kompakterer Einheiten unter Berücksichtigung historischer Gegebenheiten. In den umliegenden Stadtteilen stehen vor allem Haussanierungen an Einfamilienhäusern, familiengerechter Innenausbau, Badsanierungen und energetische Modernisierungen im Vordergrund, um Immobilien optimal auf neue Lebensphasen vorzubereiten.",
      },
    ],
  },
  hainburg: {
    name: "Hainburg",
    path: "/sanierung-hainburg",
    heroImg: "/assets/sanierung-hainburg-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Sanierung in Hainburg",
        text: "Hainburg ist eine Gemeinde mit eigenem Charakter im östlichen Rhein-Main-Gebiet. Zwischen Seligenstadt, Hanau, Obertshausen, Rodgau und dem Main finden sich viele Einfamilienhäuser, Reihenhäuser, Doppelhaushälften, Eigentumswohnungen, ältere Bestandsimmobilien und gewachsene Wohnlagen. Viele Gebäude wurden über Jahre gepflegt, entsprechen aber nicht mehr vollständig den heutigen Erwartungen an Wohnkomfort, Energieeffizienz, Badgestaltung, Haustechnik und Raumaufteilung. Radex begleitet Eigentümer, Käufer, Vermieter, Hausverwaltungen und Gewerbekunden bei Sanierungsprojekten in Hainburg. Dabei werden Bad, Wohnung, Haus, Altbau, Innenausbau, Heizung, Sanitär, Elektrotechnik, energetische Sanierung, Notsanierung und Gewerbeumbau sinnvoll koordiniert.",
      },
      {
        title: "Badsanierung in Hainburg",
        text: "Eine Badsanierung in Hainburg gehört zu den häufigsten Modernisierungsprojekten. Das Badezimmer wird täglich genutzt und zeigt deshalb besonders schnell, wenn Ausstattung, Komfort und Technik nicht mehr zur heutigen Nutzung passen. Ein modernes Badezimmer soll nicht nur schöner aussehen. Es soll den Alltag erleichtern, pflegeleicht sein, technisch zuverlässig funktionieren und zur Lebenssituation passen – ob bodengleiche Dusche, modernes Duschbad, Gäste-WC-Sanierung oder zeitgemäße Sanitärinstallation. Radex koordiniert die beteiligten Fachbereiche, damit Badsanierung, Sanitärtechnik, Innenausbau, Abdichtung und Oberflächen sinnvoll zusammenwirken.",
      },
      {
        title: "Wohnungssanierung in Hainburg",
        text: "Wohnungssanierungen in Hainburg entstehen häufig nach einem Kauf, nach einem Mieterwechsel oder vor einer Neuvermietung. Viele Wohnungen besitzen eine solide Grundstruktur, wirken aber durch alte Badezimmer, abgenutzte Böden, unmoderne Wandflächen oder veraltete Technik nicht mehr zeitgemäß. Der Zeitraum vor dem Einzug ist ideal für eine Wohnungssanierung. Wenn Bad, Böden, Wände, Türen und Technik gemeinsam geplant werden, entsteht ein stimmiges Ergebnis. Außerdem werden spätere Eingriffe in bereits modernisierte Bereiche vermieden.",
      },
      {
        title: "Haussanierung in Hainburg",
        text: "Viele Häuser in Hainburg wurden über Jahrzehnte genutzt, gepflegt und abschnittsweise modernisiert. Dadurch entsteht häufig eine Immobilie mit solider Substanz, aber technischem, energetischem oder funktionalem Modernisierungsbedarf. Eine Haussanierung in Hainburg lohnt sich besonders, wenn Eigentümer ihre Immobilie langfristig halten möchten oder nach dem Kauf vor dem Einzug modernisieren wollen. Eine Sanierung kann helfen, vorhandene Fläche besser zu nutzen und das Haus für die nächsten Jahre und neue Lebensphasen vorzubereiten.",
      },
      {
        title: "Altbausanierung in Hainburg",
        text: "Auch in Hainburg gibt es ältere Häuser, Bestandswohnungen und gewachsene Immobilienstrukturen, bei denen eine Sanierung besondere Sorgfalt erfordert. Gerade bei älteren Gebäuden sollte nicht nur die sichtbare Oberfläche modernisiert werden. Leitungen, Feuchtigkeit, Elektrostruktur, Heiztechnik, Bodenaufbauten und energetische Schwachstellen müssen früh betrachtet werden. Ziel ist es, vorhandene Qualität zu erhalten und die Immobilie technisch auf heutige Anforderungen vorzubereiten.",
      },
      {
        title: "Innenausbau und Umbau in Hainburg",
        text: "Viele Immobilien in Hainburg haben eine gute Grundsubstanz, passen aber nicht mehr vollständig zu heutigen Wohn- und Nutzungsanforderungen. Ein Innenausbau kann helfen, vorhandene Fläche besser zu nutzen, ohne die Immobilie komplett neu zu bauen. Typische Arbeiten umfassen Trockenbau, neue Raumaufteilung, Erneuerung von Bodenbelägen sowie den Austausch von Türen. So lassen sich Bodenaufbau, Elektroleitungen, Beleuchtung, Heizkörper und Wandgestaltung optimal aufeinander abstimmen.",
      },
      {
        title: "Heizung und Sanitär in Hainburg",
        text: "Bei Sanierungen in Hainburg zeigt sich häufig, dass sichtbare Modernisierung und technische Modernisierung zusammengehören. Ein neues Bad funktioniert nur dann langfristig gut, wenn Sanitäranschlüsse, Abdichtung, Warmwasser, Heizkörper und Leitungsführung sauber geplant sind. Radex arbeitet im Bereich Heizung, Sanitär und Gebäudetechnik unter SHK-Meisterverantwortung. Dadurch können technische Anforderungen wie die Erneuerung von Wasserleitungen oder der Austausch von Heizkörpern frühzeitig in die Gesamtplanung eingebunden werden.",
      },
      {
        title: "Elektrotechnik bei Sanierungen in Hainburg",
        text: "Viele ältere Immobilien in Hainburg wurden für einen Alltag geplant, in dem deutlich weniger elektrische Verbraucher genutzt wurden. Heute benötigen Haushalte mehr Steckdosen, bessere Beleuchtung, Netzwerkanschlüsse und moderne Küchenanschlüsse. Bei einer Sanierung sollte Elektrotechnik deshalb früh mitgedacht werden. Radex koordiniert Elektroarbeiten über qualifizierte Fachpartner und stimmt die technische Planung mit Innenausbau, Bad, Küche und Wohnnutzung ab.",
      },
      {
        title: "Energetische Sanierung in Hainburg",
        text: "Energetische Sanierungen werden für Eigentümer in Hainburg immer wichtiger. Viele Gebäude besitzen eine solide Substanz, verursachen aber durch ältere Heiztechnik, Wärmeverluste oder unzureichende Dämmung höhere Betriebskosten als nötig. Besonders sinnvoll ist eine energetische Modernisierung, wenn sie mit ohnehin geplanten Arbeiten kombiniert wird. Werden Bad, Innenausbau, Heizung oder Böden saniert, können energetische Maßnahmen besser integriert werden.",
      },
      {
        title:
          "Nothilfe, Notsanierung, Wasserschaden, Schimmel und Asbest in Hainburg",
        text: "Nicht jede Sanierung wird lange geplant. Manchmal entsteht Handlungsbedarf plötzlich durch einen Wasserschaden, feuchte Wände, Schimmelverdacht oder einen Rohrschaden. Radex unterstützt bei dringenden Sanierungsfällen in Hainburg und koordiniert die nächsten Schritte. Bei Feuchtigkeit und Schimmel ist entscheidend, nicht nur sichtbare Spuren zu beseitigen, sondern die Ursache fundiert zu prüfen, damit der Schaden nicht erneut entsteht.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Hainburg",
        text: "Hainburg liegt günstig im Rhein-Main-Gebiet, weshalb auch Gewerbeflächen, Praxisräume, Büroeinheiten und vermietete Objekte regelmäßig von Modernisierungen betroffen sind. Bei Gewerbeprojekten sind klare Abläufe besonders wichtig. Übergabetermine, Nutzungsanforderungen, technische Anschlüsse und mögliche Ausfallzeiten werden von Radex frühzeitig in der Sanierung von Büroflächen, Praxen oder Ladenlokalen eingeplant.",
      },
      {
        title:
          "Hainstadt und Klein-Krotzenburg – Sanierung passend zur lokalen Immobilienstruktur",
        text: "In Hainstadt entstehen in den gewachsenen Wohnlagen häufig Badsanierungen, Wohnungssanierungen und technische Modernisierungen, bei denen Leitungen und Elektrostrukturen früh bewertet werden sollten. Klein-Krotzenburg besitzt viele Familienimmobilien und ältere Bestandsgebäude. Durch die Lage in Mainnähe sollte hier bei geplanten Sanierungen außerdem gezielt auf Feuchtigkeit, Kellerbereiche, Abdichtungen und Gebäudetechnik geachtet werden.",
      },
      {
        title: "Sanierung nach Immobilienkauf in Hainburg",
        text: "Viele Sanierungen in Hainburg beginnen direkt nach dem Kauf einer Immobilie. Käufer möchten das Haus oder die Wohnung anpassen, bevor Möbel einziehen und der Alltag beginnt. Der Vorteil liegt darin, dass mehrere Maßnahmen wie Badezimmererneuerung, Bodenarbeiten, Wandflächen und energetische Vorbereitungen gleichzeitig umgesetzt werden können. Das spart Zeit und verhindert spätere Eingriffe in bereits modernisierte Bereiche.",
      },
      {
        title:
          "Für Vermieter, Eigentümergemeinschaften und Hausverwaltungen in Hainburg",
        text: "Viele Sanierungsprojekte betreffen nicht die Eigennutzung, sondern den Werterhalt, die Vermietung oder Verwaltung. Radex unterstützt Vermieter, WEGs und Hausverwaltungen bei Wohnungssanierungen nach Mieterwechseln, Badmodernisierungen in Mietwohnungen oder Schadenssanierungen. Für professionelle Eigentümer ist wichtig, dass alle Maßnahmen planbar, nachvollziehbar und wirtschaftlich auf den tatsächlichen Bedarf abgestimmt sind.",
      },
    ],
  },
  hattersheim: {
    name: "Hattersheim",
    path: "/wohneigentum-modernisieren-hattersheim-am-main",
    heroImg: "/assets/wohneigentum-hattersheim-radex.webp",
    districts: ["Hattersheim", "Okriftel", "Eddersheim"],
    extraContent: [
      {
        title: "Haus oder Wohnung in Hattersheim am Main modernisieren",
        text: "Die Nähe zu Frankfurt, Wiesbaden, dem Flughafen und den wirtschaftsstarken Standorten des Rhein-Main-Gebiets macht Hattersheim am Main für Familien, Berufspendler und Eigentümer besonders attraktiv. Viele Sanierungsprojekte entstehen hier aus dem Wunsch, die eigene Immobilie besser an den heutigen Alltag anzupassen. Ob das Badezimmer veraltet wirkt, die Raumaufteilung nicht mehr dem Familienalltag entspricht oder eine neu gekaufte Immobilie vor dem Einzug modernisiert werden soll – Radex begleitet Eigentümer in Hattersheim dabei, bestehende Häuser und Eigentumswohnungen zukunftssicher weiterzuentwickeln.",
      },
      {
        title: "Badsanierung in Hattersheim am Main",
        text: "Das Badezimmer gehört zu den am intensivsten genutzten Bereichen einer Immobilie und ist einer der häufigsten Auslöser für eine umfassendere Modernisierung. Viele Familien wünschen sich Badezimmer, die funktional, pflegeleicht und modern gestaltet sind – mit ausreichend Stauraum, optimierter Beleuchtung und durchdachten Raumaufteilungen. Eine professionelle Badsanierung betrachtet neben Fliesen und Armaturen auch immer die zugrundeliegende Sanitärtechnik, um abgestimmte Lösungen zu schaffen, die die gesamte Immobilie langfristig aufwerten.",
      },
      {
        title: "Modernisierung nach dem Immobilienkauf vor dem Einzug",
        text: "In Hattersheim wechseln regelmäßig Eigentumswohnungen, Reihenhäuser und Einfamilienhäuser den Besitzer. Die Zeit vor dem Einzug ist ideal für größere Maßnahmen: Solange die Räume leer stehen, lassen sich Badezimmer erneuern, Bodenbeläge austauschen, Wohnräume anpassen und technische Installationen deutlich effizienter überprüfen. Besonders Familien profitieren von einer strukturierten Modernisierung vor dem Einzug, da Kinderzimmer und Arbeitsbereiche passgenau vorbereitet werden können, bevor der Alltag beginnt.",
      },
      {
        title: "Wohnraum schaffen durch intelligenten Innenausbau",
        text: "Häufig wird in einer Immobilie nicht mehr Fläche benötigt, sondern die vorhandene Wohnfläche muss lediglich besser strukturiert werden. Wenn ein Homeoffice benötigt wird, die Kinder älter werden oder Wohnbereiche offener wirken sollen, spielt der Innenausbau eine zentrale Rolle. Durch intelligente Grundrissanpassungen, modernen Trockenbau und das Öffnen von Wänden gewinnen gerade Reihenhäuser und Doppelhaushälften in Hattersheim an Flexibilität, wodurch bereits kleine Veränderungen eine große Wirkung erzielen.",
      },
      {
        title:
          "Heizung und Sanitär als Grundlage einer langfristigen Modernisierung",
        text: "Die technische Infrastruktur entscheidet maßgeblich darüber, wie komfortabel und zukunftssicher eine Immobilie genutzt werden kann. Bei einer Badsanierung in Hattersheim, einer Haussanierung in Okriftel oder einer Altbausanierung in Eddersheim lohnt es sich, Sanitärinstallationen, Wasserleitungen und Heizkörper frühzeitig zu betrachten. Als SHK-meistergeführter Betrieb sorgt Radex dafür, dass technische Verbesserungen wirtschaftlich mit der Modernisierung kombiniert werden und für nachhaltigen Werterhalt sorgen.",
      },
      {
        title: "Moderne Elektrotechnik für den heutigen Alltag",
        text: "Leistungsfähige Netzwerke, Homeoffice-Arbeitsplätze, moderne Küchengeräte und flexible Beleuchtungskonzepte gehören heute zum Standard, wurden bei der Planung älterer Häuser und Eigentumswohnungen in Hattersheim jedoch meist nicht berücksichtigt. Im Zuge einer Wohnungssanierung, Haussanierung oder Altbausanierung lässt sich die Elektroinstallation besonders effizient auf den aktuellen Stand bringen. Integriert in geplante Innenausbauarbeiten können zusätzliche Steckdosen und Netzwerkanschlüsse sauber verlegt werden.",
      },
      {
        title: "Energetische Sanierung und langfristiger Werterhalt",
        text: "Energieeffizienz ist ein zentraler Faktor für den langfristigen Werterhalt und die Senkung von Betriebskosten. Da ein Reihenhaus in Okriftel andere Anforderungen stellt als eine Eigentumswohnung in der Kernstadt oder ein Einfamilienhaus in Eddersheim, betrachtet Radex energetische Maßnahmen immer individuell. Werden ohnehin das Bad, der Innenausbau oder die Heizung saniert, lassen sich Maßnahmen zur Verbesserung der Energieeffizienz optimal und wirtschaftlich in das Gesamtprojekt integrieren.",
      },
      {
        title: "Wasserschaden, Rohrbruch oder Feuchtigkeit – schnell handeln",
        text: "Ein plötzlicher Wasserschaden, ein Rohrbruch oder feuchte Wände zwingen Eigentümer zu schnellem Handeln. Da sich Feuchtigkeit in Bestandsimmobilien unbemerkt hinter Wänden oder unter Bodenbelägen ausbreiten kann, ist eine fachgerechte Ursachenanalyse unerlässlich. Radex unterstützt Eigentümer in Hattersheim dabei, die Schadensursache präzise zu klären, das Ausmaß einzuordnen und notwendige Sanierungsmaßnahmen fachgerecht mit langfristigen Modernisierungen oder Renovierungen zu verbinden.",
      },
      {
        title: "Schimmel, Schadstoffe und Altbausanierung richtig angehen",
        text: "Bei größeren Umbauten oder einer Altbausanierung in Hattersheim können verdeckte Mängel, Feuchtigkeitsschäden oder ältere, bedenkliche Baustoffe sichtbar werden. Da Schimmel selten ohne bauliche Ursache entsteht, reicht eine oberflächliche Behandlung meist nicht aus. Radex verfügt über die notwendige Sachkunde und Zertifizierungen im Bereich der Schimmel- und Asbestsanierung nach TRGS 519, um Bestandsgebäude sicher zu prüfen und gesundheitliche sowie bauliche Risiken auszuschließen.",
      },
      {
        title:
          "Hattersheim, Okriftel und Eddersheim – Sanierung passend zur lokalen Struktur",
        text: "Die Stadtteile von Hattersheim verlangen nach maßgeschneiderten Lösungen: In der Kernstadt dominieren Eigentumswohnungen und Mehrfamilienhäuser, bei denen Badsanierungen und Modernisierungen nach Eigentümerwechseln im Fokus stehen. Okriftel ist stark von Familien- und Reihenhäusern geprägt, was häufig Projekte zur Wohnraumanpassung und energetischen Sanierung hervorbringt. In Eddersheim stehen bei zahlreichen Bestandsimmobilien vor allem die Altbausanierung, Badezimmermodernisierungen und der Werterhalt im Mittelpunkt.",
      },
    ],
  },
  heusenstamm: {
    name: "Heusenstamm",
    path: "/haus-modernisieren-heusenstamm",
    heroImg: "/assets/haus-heusenstamm-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Haus modernisieren in Heusenstamm",
        text: "Heusenstamm verbindet die Nähe zur Metropole Frankfurt mit ruhigen, gewachsenen Wohngebieten im Kreis Offenbach. Viele Immobilien werden über Generationen in Familienbesitz gehalten oder nach einem Kauf umfassend für die Zukunft aufgestellt. Radex unterstützt Eigentümer dabei, bestehende Gebäude durch eine durchdachte, gewerkeübergreifende Sanierung sinnvoll weiterzuentwickeln und den Wert der Immobilie langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Heusenstamm",
        text: "Moderne Badezimmer erfordern funktionale Bewegungsflächen, pflegeleichte Oberflächen und barrierearmen Komfort für die ganze Familie. Bei einer Badsanierung in Heusenstamm optimiert Radex nicht nur die optische Raumaufteilung, sondern erneuert systematisch alle unsichtbaren Komponenten wie Wasser- und Abwasserleitungen, die Abdichtung sowie die Elektroanschlüsse hinter den Fliesen.",
      },
      {
        title: "Wohnungssanierung in Heusenstamm",
        text: "Der Zeitraum direkt nach einem Eigentümerwechsel oder vor einer Neuvermietung bietet im Heusenstämmer Zentrum die besten Voraussetzungen für eine Wohnungssanierung. Leere Räume erlauben eine hocheffiziente Koordination aller Gewerke. Neben modernen Bodenbelägen und Wandflächen integriert Radex neue Beleuchtungskonzepte, überarbeitet die Elektroinstallation und modernisiert Innentüren.",
      },
      {
        title: "Haussanierung in Heusenstamm",
        text: "Einfamilienhäuser und Doppelhaushälften in Heusenstamm und Rembrücken besitzen meist eine hervorragende Grundsubstanz, benötigen nach Jahrzehnten aber eine technische und funktionale Modernisierung. Radex betrachtet das Gebäude als Gesamtsystem und verbindet Grundrissoptimierungen, den Austausch veralteter Haustechnik und kosmetische Updates zu einem planbaren Sanierungskonzept.",
      },
      {
        title: "Altbausanierung in Heusenstamm",
        text: "Eine fachgerechte Altbausanierung im Umfeld des Schlosses oder in der historischen Altstadt zielt darauf ab, den individuellen Charakter zu bewahren und zeitgemäßen Wohnkomfort zu integrieren. Hierbei führt Radex eine sorgfältige Bestandsaufnahme durch, um marode Rohrleitungen zu ersetzen, Feuchtigkeitsprobleme an der Substanz dauerhaft zu lösen und energetische Schwachstellen zu minimieren.",
      },
      {
        title: "Innenausbau und Umbau in Heusenstamm",
        text: "Veränderte Lebensgewohnheiten, wachsende Familien oder die intensive Nutzung eines Homeoffice erfordern oft flexiblere Raumkonzepte. Durch modernen Trockenbau, das Öffnen von Wänden für Wohnküchen, neue Bodenaufbauten und maßgeschneiderte Stauraumlösungen passt Radex die vorhandene Wohnfläche exakt an den aktuellen Alltag Ihrer Familie an.",
      },
      {
        title: "Heizung und Sanitär in Heusenstamm",
        text: "Unter SHK-Meisterverantwortung sorgt Radex für eine zukunftssichere und technisch einwandfreie Installation der gesamten Gebäudetechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und der Austausch veralteter Heizkörper werden idealerweise dann umgesetzt, wenn Wände und Böden im Zuge der Sanierung ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Heusenstamm",
        text: "Moderne Haushalte benötigen eine leistungsstarke Elektroinfrastruktur für Netzwerktechnik, Küchengeräte und Ladeinfrastruktur. Radex überprüft die bestehende Elektroinstallation älterer Immobilien frühzeitig, plant ausreichend Steckdosen ein, bereitet Unterverteilungen vor und bindet qualifizierte Fachpartner für eine sichere Umsetzung ein.",
      },
      {
        title: "Energetische Sanierung in Heusenstamm",
        text: "Zur nachhaltigen Senkung von Energiekosten und zur Steigerung des Wohnkomforts gewinnt die energetische Modernisierung im Bestand an Bedeutung. Radex bewertet die thermischen Schwachstellen des Gebäudes und kombiniert ohnehin geplante Sanierungsarbeiten effizient mit Dämmmaßnahmen an Decken oder Dächern sowie der Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Wasserschäden oder Schimmelbildung erfordern schnelles Handeln und eine fundierte Ursachenanalyse, um eine Ausbreitung der Feuchtigkeit zu stoppen. Radex übernimmt die professionelle Schadensbewertung, leitet die Trocknung ein und verfügt zudem über die nötige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Heusenstamm",
        text: "Nach einem Mieterwechsel oder bei einer Nutzungsänderung von Gewerbeeinheiten, Praxen und Büros sind strukturierte Abläufe entscheidend. Radex realisiert funktionale Raumaufteilungen, strapazierfähige Oberflächen und modernisierte Sanitärbereiche passend zu den spezifischen Anforderungen, damit die Flächen schnell wieder produktiv genutzt werden können.",
      },
    ],
  },
  hofheim: {
    name: "Hofheim",
    path: "/haus-modernisieren-hofheim-am-taunus",
    heroImg: "/assets/haus-hofheim-radex.webp",
    districts: [
      "Hofheim Kernstadt",
      "Marxheim",
      "Diedenbergen",
      "Wallau",
      "Langenhain",
      "Lorsbach",
      "Wildsachsen",
    ],
    extraContent: [
      {
        title: "Haus modernisieren in Hofheim am Taunus",
        text: "Hofheim am Taunus zählt zu den begehrtesten Wohnstandorten im Rhein-Main-Gebiet. In den gehobenen Wohnlagen stehen der langfristige Werterhalt und die Steigerung der Wohnqualität im Vordergrund. Radex unterstützt Eigentümer dabei, Einfamilienhäuser und Eigentumswohnungen durch eine gewerkeübergreifende Modernisierung an veränderte Lebenssituationen anzupassen und Werte nachhaltig zu sichern.",
      },
      {
        title: "Badsanierung in Hofheim am Taunus",
        text: "Ein modernes Badezimmer in Hofheim verbindet anspruchsvolles Design mit hoher Funktionalität und barrierearmem Komfort. Bei einer Badsanierung betrachtet Radex das Projekt ganzheitlich: Neben den sichtbaren Oberflächen und Sanitärobjekten erneuern wir systematisch die Wasserleitungen, Abwasserwege, die Abdichtung sowie die gesamte Elektro- und Lichtplanung hinter den Fliesen.",
      },
      {
        title: "Wohnungssanierung in Hofheim am Taunus",
        text: "Die Phase direkt nach dem Kauf einer Eigentumswohnung in der Hofheimer Kernstadt oder Marxheim bietet ideale Bedingungen für eine umfassende Sanierung. Da die Räume noch leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wänden und Innentüren sowie die technische Anpassung der Infrastruktur hocheffizient vor Ihrem Einzug.",
      },
      {
        title: "Haussanierung in Hofheim am Taunus",
        text: "Viele hochwertige Familienhäuser in Diedenbergen, Langenhain oder Wallau besitzen eine hervorragende Substanz, benötigen nach Jahrzehnten jedoch ein technisches Update. Radex plant Haussanierungen mit weitsichtigem Blick und kombiniert gewünschte Grundrissoptimierungen und kosmetische Erneuerungen effizient mit notwendigen Modernisierungen der Haustechnik.",
      },
      {
        title: "Altbausanierung in Hofheim am Taunus",
        text: "Die Sanierung von Altbauten erfordert besondere baurechtliche und handwerkliche Sorgfalt. Radex analysiert ältere Bestandsimmobilien vorab gründlich auf energetische Schwachstellen, feuchtes Mauerwerk oder veraltete Leitungsstrukturen, um den historischen Charakter des Gebäudes zu bewahren und gleichzeitig modernsten Wohnkomfort zu integrieren.",
      },
      {
        title: "Innenausbau und Umbau in Hofheim am Taunus",
        text: "Ob großzügige Wohnküche, die Integration eines funktionalen Homeoffice oder der Ausbau von Dach- und Kellerräumen – veränderte Wohnansprüche verlangen flexible Konzepte. Durch modernen Trockenbau, das Entfernen von Wänden und maßgeschneiderte Stauraumlösungen passt Radex die vorhandene Wohnfläche exakt an den Alltag Ihrer Familie an.",
      },
      {
        title: "Heizung und Sanitär in Hofheim am Taunus",
        text: "Unter SHK-Meisterverantwortung sorgt Radex für eine zukunftssichere und technisch einwandfreie Installation der gesamten Gebäudetechnik. Der Austausch alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern werden idealerweise dann umgesetzt, wenn Wände und Böden im Zuge der Sanierung ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Hofheim am Taunus",
        text: "Moderne Wohnkonzepte mit Streaming, Smart-Home und Heimarbeitsplätzen setzen eine leistungsstarke Elektroinfrastruktur voraus. Radex integriert die Elektroplanung frühzeitig in den Innenausbau, erweitert Steckdosen, plant zeitgemäße Lichtkonzepte und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen ein.",
      },
      {
        title: "Energetische Sanierung in Hofheim am Taunus",
        text: "Energetische Maßnahmen sind ein wesentlicher Bestandteil des Werterhalts hochwertiger Immobilien. Radex ermittelt die thermischen Schwachstellen des Gebäudes individuell und verbindet anstehende Modernisierungsarbeiten an Decken, Böden oder Dachbereichen mit gezielten Dämmmaßnahmen und der Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, feuchte Keller oder Schimmelbildung erfordern eine schnelle, fundierte Ursachenanalyse, um weitreichende Substanzschäden zu verhindern. Radex übernimmt die professionelle Schadensbewertung sowie Trocknung und verfügt zudem über die nötige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Sanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Hofheim am Taunus",
        text: "Für Dienstleister, Praxen und Bürostandorte in Hofheim realisiert Radex den fachgerechten Mieterausbau und Gewerbeumbau nach einem Mieterwechsel. Wir sorgen für strukturierte Abläufe, die Einhaltung von Budgetvorgaben und minimale Ausfallzeiten – von der Erneuerung der Sanitärbereiche bis hin zu strapazierfähigen Oberflächen.",
      },
    ],
  },
  karben: {
    name: "Karben",
    path: "/haus-wohnung-modernisieren-karben",
    heroImg: "/assets/haus-wohnung-karben-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Haus modernisieren in Karben",
        text: "Karben verbindet familienfreundliche, naturnahe Wohnlagen in der Wetterau mit einer hervorragenden Anbindung an den Wirtschaftsraum Frankfurt und Bad Vilbel. Viele solide gebaute Einfamilienhäuser und Eigentumswohnungen werden heute für moderne Lebenskonzepte oder nach einem Eigentümerwechsel fit gemacht. Radex unterstützt Sie dabei, Bestandsimmobilien durch eine durchdachte, gewerkeübergreifende Sanierung funktional und energetisch aufzuwerten.",
      },
      {
        title: "Badsanierung in Karben",
        text: "Ein zeitgemäßes Badezimmer muss den Anforderungen des Familienalltags standhalten und gleichzeitig barrierearmen Komfort sowie modernes Design bieten. Bei einer professionellen Badsanierung in Karben erneuert Radex nicht nur die sichtbaren Sanitärobjekte und Fliesen, sondern überarbeitet systematisch die gesamte Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Karben",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer Neuvermietung bietet in den zentralen Lagen von Groß-Karben und Klein-Karben die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Karben",
        text: "Viele Reihenhäuser, Doppelhaushälften und freistehende Einfamilienhäuser in Karben verfügen über eine exzellente Bausubstanz, weisen nach einigen Jahrzehnten der Nutzung jedoch Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Karben",
        text: "Die Modernisierung älterer Bestandsgebäude in den historischen Kernen von Rendel, Okarben oder Burg-Gräfenrode verlangt besondere bauphysikalische Sorgfalt, um den Charakter zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand und löst diese nachhaltig durch den Einsatz moderner Verfahren und Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Karben",
        text: "Kleinteilige Grundrisse älterer Immobilien passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem integrierten Homeoffice. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche optimal an Ihren veränderten Alltag anzupassen.",
      },
      {
        title: "Heizung und Sanitär in Karben",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir effizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Karben",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, Smart-Home-Komponenten und leistungsstarke Küchengeräte eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen und Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Karben",
        text: "Zur nachhaltigen Senkung von Betriebskosten gewinnt die energetische Modernisierung im Bestand stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Energiesparmaßnahmen und der Vorbereitung der Heizflächen auf moderne Wärmepumpentechnik.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Karben",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  kelkheim: {
    name: "Kelkheim",
    path: "/haus-modernisierung-kelkheim-taunus",
    heroImg: "/assets/haus-kelkheim-radex.webp",
    districts: [
      "Kelkheim",
      "Hornau",
      "Fischbach",
      "Münster",
      "Ruppertshain",
      "Eppenhain",
    ],
    extraContent: [
      {
        title: "Haus modernisieren in Kelkheim (Taunus)",
        text: "Kelkheim verbindet exklusive Taunuslagen mit einer hohen Lebensqualität im direkten Einzugsgebiet von Frankfurt. Viele hochwertige Einfamilienhäuser, Villen und gepflegte Bestandsimmobilien werden im Zuge von Generationenwechseln auf den neuesten Stand gebracht. Radex unterstützt anspruchsvolle Eigentümer dabei, gewachsene Gebäude durch eine strukturierte, gewerkeübergreifende Modernisierung langfristig im Wert zu steigern und an moderne Wohnansprüche anzupassen.",
      },
      {
        title: "Badsanierung in Kelkheim (Taunus)",
        text: "Ein zeitgemäßes Badezimmer im Taunus erfordert ein durchdachtes Lichtkonzept, hochwertige Materialien und barrierearmen Komfort. Bei einer professionellen Badsanierung in Kelkheim optimiert Radex nicht nur die sichtbare Raumaufteilung und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Basis – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zu den Elektroanschlüssen.",
      },
      {
        title: "Wohnungssanierung in Kelkheim (Taunus)",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer Neuvermietung bietet in den zentralen Wohnlagen von Münster oder Fischbach optimale Bedingungen für eine Wohnungssanierung. Da die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, neue Innentüren sowie alle technischen Anpassungen der Elektro- und Sanitärinstallation hocheffizient vor Ihrem Einzug.",
      },
      {
        title: "Haussanierung in Kelkheim (Taunus)",
        text: "Freistehende Einfamilienhäuser und großzügige Familienbauten in Hornau oder Münster besitzen meist eine hervorragende Grundsubstanz, weisen nach Jahrzehnten der Nutzung jedoch Modernisierungsstau auf. Radex betrachtet Ihr Gebäude als Gesamtsystem und verbindet gewünschte Grundrissänderungen, energetische Verbesserungen und kosmetische Updates zu einem planbaren, gewerkeübergreifenden Sanierungsprozess.",
      },
      {
        title: "Altbausanierung in Kelkheim (Taunus)",
        text: "Die Modernisierung charakterstarker Altbauten und individueller Immobilien in Ruppertshain oder Eppenhain erfordert besondere bauphysikalische Sorgfalt. Radex analysiert bestehende Schwachstellen wie marode Rohrleitungen, unzureichenden Schallschutz oder Feuchtigkeit im Mauerwerk gründlich und löst diese nachhaltig, um den historischen Charme zu bewahren und modernsten Wohnkomfort zu integrieren.",
      },
      {
        title: "Innenausbau und Umbau in Kelkheim (Taunus)",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu heutigen Lebenskonzepten mit offenen Wohnküchen oder einem integrierten Heimarbeitsplatz. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihren veränderten Alltag abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Kelkheim (Taunus)",
        text: "Unter SHK-Meisterverantwortung sorgt Radex für eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir effizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Kelkheim (Taunus)",
        text: "Moderne Haushalte benötigen durch Homeoffice, Smart-Home-Komponenten und leistungsstarke Küchengeräte eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen und Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Kelkheim (Taunus)",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur langfristigen Sicherung des Immobilienwerts gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle individuell und kombiniert anstehende Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der Vorbereitung auf moderne Wärmepumpentechnik.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, feuchte Keller oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die professionelle Schadensbewertung sowie Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Kelkheim (Taunus)",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  kelsterbach: {
    name: "Kelsterbach",
    path: "/eigentumswohnung-haus-modernisieren-kelsterbach",
    heroImg: "/assets/eigentumswohnung-kelsterbach-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Haus modernisieren in Kelsterbach",
        text: "Kelsterbach ist als Teil der dynamischen Flughafenregion ein stark nachgefragter Wohn- und Investitionsstandort im Rhein-Main-Gebiet. Viele Mehrfamilienhäuser und ältere Bestandsquartiere bieten hervorragendes Potenzial für eine umfassende Modernisierung. Radex unterstützt Eigentümer und Kapitalanleger dabei, bestehende Gebäude durch eine strukturierte, gewerkeübergreifende Sanierung funktional aufzuwerten, moderne Standards zu integrieren und den Wert der Immobilie langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Kelsterbach",
        text: "Ein zeitgemäßes Badezimmer erfordert eine optimale Raumaufteilung, pflegeleichte Materialien und barrierearmen Komfort. Bei einer professionellen Badsanierung in Kelsterbach erneuert Radex nicht nur die sichtbaren Sanitärobjekte und Fliesen, sondern überarbeitet systematisch die gesamte technische Basis hinter der Wand – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Kelsterbach",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einem Mieterwechsel bietet in den Wohngebieten am Südpark oder im Kelsterbacher Zentrum die beste Gelegenheit für eine Wohnungssanierung. Da die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, neue Innentüren sowie alle technischen Anpassungen der Elektro- und Sanitärkomponenten hocheffizient vor Ihrem Einzug.",
      },
      {
        title: "Haussanierung in Kelsterbach",
        text: "Viele Bestandsimmobilien und Reihenhäuser in Kelsterbach besitzen eine solide Substanz, weisen nach Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissoptimierungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem perfekt koordinierten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Kelsterbach",
        text: "Die Modernisierung älterer Bestandsquartiere und Immobilien nahe dem Mainufer verlangt besondere bauphysikalische Sorgfalt. Radex analysiert bestehende Schwachstellen wie marode Rohrleitungen, unzureichenden Schallschutz oder Feuchtigkeit im Mauerwerk gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren, um den Charakter des Gebäudes mit heutigem Wohnkomfort zu verbinden.",
      },
      {
        title: "Innenausbau und Umbau in Kelsterbach",
        text: "Kleinteilige Grundrisse älterer Baujahre passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem integrierten Heimarbeitsplatz. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut vorhandene Flächen fachgerecht aus, um die Quadratmeter optimal an Ihre aktuelle Lebenssituation anzupassen.",
      },
      {
        title: "Heizung und Sanitär in Kelsterbach",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir effizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Kelsterbach",
        text: "Moderne Haushalte benötigen durch Homeoffice, Smart-Home-Komponenten und leistungsstarke Küchengeräte eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen und Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Kelsterbach",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur langfristigen Sicherung des Immobilienwerts gewinnt die energetische Modernisierung im Bestand stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle individuell und kombiniert anstehende Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Kelsterbach",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  maintal: {
    name: "Maintal",
    path: "/haus-wohnung-sanieren-maintal",
    heroImg: "/assets/haus-wohnung-maintal-radex.webp",
    districts: ["Dörnigheim", "Bischofsheim", "Hochstadt", "Wachenbuchen"],
    extraContent: [
      {
        title: "Haus modernisieren in Maintal",
        text: "Maintal verbindet die unmittelbare Nähe zu den Wirtschaftsmetropolen Frankfurt und Hanau mit attraktiven, familienfreundlichen Wohnlagen. Viele solide gebaute Einfamilienhäuser, Reihenhäuser und Doppelhaushälften werden heute gezielt für moderne Lebenskonzepte oder direkt nach einem Eigentümerwechsel fit gemacht. Radex unterstützt Sie dabei, Bestandsimmobilien durch eine durchdachte, gewerkeübergreifende Sanierung funktional aufzuwerten, Wohnkomfort zu maximieren und den Werterhalt langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Maintal",
        text: "Ein zeitgemäßes Familienbad muss den hohen Belastungen des Alltags standhalten und gleichzeitig modernen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Maintal optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Maintal",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer Neuvermietung bietet in den zentralen Wohnlagen von Dörnigheim oder Bischofsheim die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Maintal",
        text: "Viele Reihenhäuser und freistehende Einfamilienhäuser in Maintal verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Maintal",
        text: "Die Modernisierung älterer Bestandsgebäude in den historischen Ortskernen wie Hochstadt verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Maintal",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice für Berufspendler. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Maintal",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Maintal",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Maintal",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Maintal",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  moerfeldenwalldorf: {
    name: "Mörfelden-Walldorf",
    path: "/immobilie-modernisieren-moerfelden-walldorf",
    heroImg: "/assets/immobilie-moerfelden-walldorf-radex.webp",
    districts: ["Mörfelden", "Walldorf"],
    extraContent: [
      {
        title: "Haus modernisieren in Mörfelden-Walldorf",
        text: "Mörfelden-Walldorf vereint eine strategisch hervorragende Lage in der Flughafenregion Frankfurt/Rhein-Main mit hoher Wohnqualität für Familien und Berufspendler. Viele freistehende Einfamilienhäuser, klassischen Doppelhaushälften und Reihenhäuser weisen nach jahrzehntelanger Nutzung einen technischen und optischen Modernisierungsstau auf. Radex unterstützt anspruchsvolle Eigentümer dabei, Bestandsimmobilien durch eine durchdachte, gewerkeübergreifende Sanierung funktional aufzuwerten, moderne Grundrisse zu realisieren und den Immobilienwert langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Mörfelden-Walldorf",
        text: "Ein zeitgemäßes Badezimmer für Familien muss den hohen Belastungen des Alltags standhalten und gleichzeitig modernen Wohnkomfort sowie durchdachten Stauraum bieten. Bei einer professionellen Badsanierung in Mörfelden-Walldorf optimiert Radex nicht nur die sichtbare Raumaufteilung, hochwertige Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur hinter der Wand – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Mörfelden-Walldorf",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer Neuvermietung bietet in den gut angebundenen Wohnanlagen von Walldorf oder Mörfelden die beste Gelegenheit für eine Wohnungssanierung. Solange die Eigentumswohnung leer steht, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie alle erforderlichen Anpassungen der Elektro- und Sanitärkomponenten hocheffizient vor Ihrem Einzug.",
      },
      {
        title: "Haussanierung in Mörfelden-Walldorf",
        text: "Viele Wohngebäude und Familienhäuser in der Region verfügen über eine hervorragende Bausubstanz, entsprechen energetisch und visuell jedoch oft nicht mehr der Zeit. Radex betrachtet Ihr Gebäude als Gesamtsystem und verbindet gewünschte Grundrissänderungen für zeitgemäßes, offenes Wohnen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Sanierungsprozess.",
      },
      {
        title: "Altbausanierung in Mörfelden-Walldorf",
        text: "Die Modernisierung älterer Bestandsgebäude und charakterstarker Altbauten in den gewachsenen Ortskernen verlangt besondere bauphysikalische Sorgfalt, um die Substanz der Immobilie nachhaltig zu schützen. Radex analysiert bestehende Schwachstellen wie unzureichenden Schallschutz, marode Rohrleitungen im Bestand oder Feuchtigkeit im Mauerwerk gründlich und löst diese fachgerecht durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Mörfelden-Walldorf",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice für Flughafen- und Stadtpendler. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Mörfelden-Walldorf",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Mörfelden-Walldorf",
        text: "Moderne Haushalte benötigen durch Homeoffice-Arbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Mörfelden-Walldorf",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur langfristigen Sicherung des Immobilienwerts gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Mörfelden-Walldorf",
        text: "Bei der Modernisierung von Büroflächen, Dienstleistungsstandorten oder Gewerbeeinheiten in dieser wirtschaftlich starken Region stehen funktionale Anforderungen und minimale Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  muehlheim: {
    name: "Mühlheim am Main",
    path: "/haus-wohnung-modernisieren-muehlheim-am-main",
    heroImg: "/assets/haus-wohnung-muehlheim-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Haus modernisieren in Mühlheim am Main",
        text: "Mühlheim am Main verbindet die unmittelbare Nähe zu den Wirtschaftsmetropolen Frankfurt, Offenbach und Hanau mit einer attraktiven Wohnqualität in Rheinnähe. Viele solide gebaute Einfamilienhäuser, Reihenhäuser und Doppelhaushälften werden heute gezielt für moderne Lebenskonzepte oder direkt nach einem Eigentümerwechsel fit gemacht. Radex unterstützt Sie dabei, Bestandsimmobilien durch eine durchdachte, gewerkeübergreifende Sanierung funktional aufzuwerten, Wohnkomfort zu maximieren und den Werterhalt langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Mühlheim am Main",
        text: "Ein zeitgemäßes Familienbad muss den hohen Belastungen des Alltags standhalten und gleichzeitig modernen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Mühlheim am Main optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Mühlheim am Main",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer Neuvermietung bietet im Stadtzentrum oder im Bereich Markwald die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Mühlheim am Main",
        text: "Viele Reihenhäuser und freistehende Einfamilienhäuser in Dietesheim oder Lämmerspiel verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Mühlheim am Main",
        text: "Die Modernisierung älterer Bestandsgebäude in den gewachsenen Ortskernen verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Mühlheim am Main",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice für Berufspendler. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Mühlheim am Main",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Mühlheim am Main",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plan die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Mühlheim am Main",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Mühlheim am Main",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  neuisenburg: {
    name: "Neu-Isenburg",
    path: "/sanierung-neu-isenburg",
    heroImg: "/assets/sanierung-neu-isenburg-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Haus modernisieren in Neu-Isenburg",
        text: "Neu-Isenburg verbindet die unmittelbare Nähe zur Metropole Frankfurt am Main und dem Flughafen mit hoher Wohnqualität in gewachsenen Wohngebieten. Viele solide gebaute Einfamilienhäuser, Reihenhäuser und Bestandsimmobilien werden heute gezielt für moderne Lebenskonzepte oder direkt nach einem Eigentümerwechsel fit gemacht. Radex unterstützt Sie dabei, Bestandsimmobilien durch eine durchdachte, gewerkeübergreifende Sanierung funktional aufzuwerten, Wohnkomfort zu maximieren und den Werterhalt langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Neu-Isenburg",
        text: "Ein zeitgemäßes Badezimmer muss den hohen Belastungen des Alltags standhalten und gleichzeitig modernen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Neu-Isenburg optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Neu-Isenburg",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer Neuvermietung bietet im Stadtzentrum oder im Bereich Gravenbruch die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Neu-Isenburg",
        text: "Viele Reihenhäuser und freistehende Einfamilienhäuser in Zeppelinheim oder den gewachsenen Wohnquartieren verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Neu-Isenburg",
        text: "Die Modernisierung älterer Bestandsgebäude in den gewachsenen Ortskernen verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Neu-Isenburg",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice für Berufspendler. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Neu-Isenburg",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Neu-Isenburg",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Neu-Isenburg",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Neu-Isenburg",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen an diesem wichtigen Wirtschaftsstandort stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  nidderau: {
    name: "Nidderau",
    path: "/sanierung-nidderau",
    heroImg: "/assets/sanierung-nidderau-radex.webp",
    districts: ["Windecken", "Heldenbergen", "Ostheim", "Erbstadt", "Eichen"],
    extraContent: [
      {
        title: "Haus modernisieren in Nidderau",
        text: "Nidderau verbindet die ruhige Wohnqualität des Main-Kinzig-Kreises mit einer hervorragenden Anbindung an die Wirtschaftszentren Hanau, Bad Vilbel und Frankfurt. Viele solide gebaute Einfamilienhäuser, Reihenhäuser und Doppelhaushälften werden heute gezielt für moderne Lebenskonzepte oder direkt nach einem Eigentümerwechsel fit gemacht. Radex unterstützt Sie dabei, Bestandsimmobilien durch eine durchdachte, gewerkeübergreifende Sanierung funktional aufzuwerten, Wohnkomfort zu maximieren und den Werterhalt langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Nidderau",
        text: "Ein zeitgemäßes Familienbad muss den hohen Belastungen des Alltags standhalten und gleichzeitig modernen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Nidderau optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Nidderau",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer Neuvermietung bietet in den zentralen Wohnlagen die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Nidderau",
        text: "Viele Reihenhäuser und freistehende Einfamilienhäuser in den Wohnquartieren verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Nidderau",
        text: "Die Modernisierung älterer Bestandsgebäude in den gewachsenen Ortskernen verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Nidderau",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice für Berufspendler. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Nidderau",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Nidderau",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Nidderau",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Nidderau",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  obertshausen: {
    name: "Obertshausen",
    path: "/reihenhaus-modernisieren-obertshausen",
    heroImg: "/assets/reihenhaus-obertshausen-radex.webp",
    districts: [
      "Obertshausen",
      "Hausen",
      "Wohngebiete rund um den Bahnhof",
      "ältere Wohnsiedlungen",
      "familienorientierte Wohnlagen",
    ],
    extraContent: [
      {
        title: "Haus und Reihenhaus modernisieren in Obertshausen",
        text: "Obertshausen verbindet eine hervorragende Anbindung an die Wirtschaftszentren des Rhein-Main-Gebiets mit einer familienfreundlichen Wohnqualität. Viele solide gebaute Reihenhäuser, Doppelhaushälften und Einfamilienhäuser in Obertshausen und Hausen werden heute gezielt für moderne Lebenskonzepte oder direkt nach einem Eigentümerwechsel fit gemacht. Radex unterstützt Sie dabei, Bestandsimmobilien durch eine durchdachte, gewerkeübergreifende Sanierung funktional aufzuwerten, Wohnkomfort zu maximieren und den Werterhalt langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Obertshausen",
        text: "Ein zeitgemäßes Familienbad muss den hohen Belastungen des Alltags standhalten und gleichzeitig modernen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Obertshausen optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Obertshausen",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer Neuvermietung bietet in den zentralen Wohngebieten rund um den Bahnhof die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Obertshausen",
        text: "Viele Reihenhäuser und freistehende Einfamilienhäuser in den älteren Wohnsiedlungen verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Obertshausen",
        text: "Die Modernisierung älterer Bestandsgebäude in den gewachsenen Ortskernen verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderne Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Obertshausen",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice für Berufspendler. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Obertshausen",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Obertshausen",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Obertshausen",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Obertshausen",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  raunheim: {
    name: "Raunheim",
    path: "/sanierung-raunheim",
    heroImg: "/assets/sanierung-raunheim-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Haus und Bestandsimmobilien sanieren in Raunheim",
        text: "Raunheim zeichnet sich durch seine strategische Lage im Rhein-Main-Gebiet zwischen Rüsselsheim, Kelsterbach und der Flughafenregion aus. Die vielfältige Immobilienstruktur aus Einfamilienhäusern, klassischen Reihenhäusern und Eigentumswohnungen bietet enormes Potenzial für Modernisierungen. Radex unterstützt Eigentümer und Käufer dabei, bestehende Gebäude durch eine koordinierte, gewerkeübergreifende Sanierung funktional aufzuwerten, den Wohnkomfort zeitgemäß zu maximieren und den Immobilienwert langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Raunheim",
        text: "Ein modernes Badezimmer muss den Anforderungen des Alltags standhalten und gleichzeitig barrierearmen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Raunheim optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Raunheim",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer geplanten Neuvermietung bietet in den zentralen Wohnbereichen rund um die Kernstadt die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Raunheim",
        text: "Viele Einfamilienhäuser und Reihenhäuser in den gewachsenen Wohnsiedlungen verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Raunheim",
        text: "Die Modernisierung älterer Bestandsgebäude verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Raunheim",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Raunheim",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Raunheim",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftsfähige Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Raunheim",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Raunheim",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  rodgau: {
    name: "Rodgau",
    path: "/einfamilienhaus-modernisieren-rodgau",
    heroImg: "/assets/einfamilienhaus-rodgau-radex.webp",
    districts: [
      "Nieder-Roden",
      "Jügesheim",
      "Dudenhofen",
      "Hainhausen",
      "Weiskirchen",
    ],
    extraContent: [
      {
        title: "Einfamilienhaus modernisieren in Rodgau",
        text: "Rodgau bietet mit seinen gewachsenen Strukturen eine hohe Lebensqualität für Familien und Eigentümer im Rhein-Main-Gebiet. Viele freistehende Einfamilienhäuser, Reihenhäuser und Doppelhaushälften in Jügesheim, Nieder-Roden oder Dudenhofen bieten eine hervorragende Substanz, benötigen jedoch eine zeitgemäße Modernisierung. Radex unterstützt Sie dabei, Bestandsimmobilien durch eine durchdachte, gewerkeübergreifende Sanierung funktional aufzuwerten, Wohnkomfort zu maximieren und den Werterhalt langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Rodgau",
        text: "Ein zeitgemäßes Familienbad muss den hohen Belastungen des Alltags standhalten und gleichzeitig modernen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Rodgau optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Rodgau",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer Neuvermietung bietet in den zentralen Wohngebieten von Hainhausen und Weiskirchen die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Rodgau",
        text: "Viele Einfamilienhäuser in den familienorientierten Wohnlagen verfügen über eine robuste Bauweise, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Rodgau",
        text: "Die Modernisierung älterer Wohngebäude in den gewachsenen Ortskernen verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Rodgau",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Rodgau",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Rodgau",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Rodgau",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Rodgau",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  schwalbach: {
    name: "Schwalbach am Taunus",
    path: "/sanierung-schwalbach-am-taunus",
    heroImg: "/assets/sanierung-schwalbach-am-taunus-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Haus und Bestandsimmobilien sanieren in Schwalbach am Taunus",
        text: "Schwalbach am Taunus besticht durch seine exzellente Wohnlage im Vordertaunus und die unmittelbare Nähe zur Metropole Frankfurt. Die vielseitige Immobilienstruktur aus freistehenden Einfamilienhäusern, gepflegten Reihenhäusern und ansprechenden Eigentumswohnungen bietet das perfekte Fundament für anspruchsvolle Modernisierungen. Radex unterstützt Eigentümer und Käufer dabei, Bestandsgebäude durch eine koordinierte, gewerkeübergreifende Sanierung funktional aufzuwerten, den Wohnkomfort zeitgemäß zu maximieren und den Immobilienwert langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Schwalbach am Taunus",
        text: "Ein modernes Badezimmer muss den Anforderungen des Alltags standhalten und gleichzeitig barrierearmen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Schwalbach am Taunus optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Schwalbach am Taunus",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer geplanten Neuvermietung bietet in den zentralen Wohnbereichen der Limesstadt die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Schwalbach am Taunus",
        text: "Viele Einfamilienhäuser und Reihenhäuser in den gefragten Wohnlagen im Taunusumfeld verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Schwalbach am Taunus",
        text: "Die Modernisierung älterer Wohngebäude im historischen Kern von Alt-Schwalbach verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Schwalbach am Taunus",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice für Berufspendler. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Schwalbach am Taunus",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Schwalbach am Taunus",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Schwalbach am Taunus",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Schwalbach am Taunus",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  seligenstadt: {
    name: "Seligenstadt",
    path: "/altbau-haus-sanieren-seligenstadt",
    heroImg: "/assets/altbau-seligenstadt-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Altbau, Haus oder Wohnung in Seligenstadt sanieren",
        text: "Seligenstadt gehört zu den attraktivsten Städten im östlichen Rhein-Main-Gebiet. Die historische Altstadt, die Nähe zum Main und die hohe Lebensqualität sorgen dafür, dass viele Immobilien langfristig in Familienbesitz bleiben oder nach dem Kauf aufwendig modernisiert werden. Radex unterstützt Eigentümer und Käufer dabei, Bestandsgebäude durch eine koordinierte, gewerkeübergreifende Sanierung funktional aufzuwerten, den Wohnkomfort zeitgemäß zu maximieren und den Immobilienwert langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Seligenstadt",
        text: "Ein modernes Badezimmer muss den Anforderungen des Alltags standhalten und gleichzeitig barrierearmen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Seligenstadt optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Seligenstadt",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer geplanten Neuvermietung bietet in den zentralen Wohnbereichen der Einhardstadt die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Seligenstadt",
        text: "Viele Einfamilienhäuser und Reihenhäuser in den gefragten Wohnlagen im Seligenstädter Umfeld verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Seligenstadt",
        text: "Die Modernisierung älterer Wohngebäude im historischen Kern und den Fachwerkhäusern der Seligenstädter Altstadt verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Seligenstadt",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice für Berufspendler. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Seligenstadt",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Seligenstadt",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Seligenstadt",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle von der Kernstadt bis nach Klein-Welzheim individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Seligenstadt",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen.",
      },
    ],
  },
  sulzbach: {
    name: "Sulzbach (Taunus)",
    path: "/sanierung-sulzbach-taunus",
    heroImg: "/assets/sanierung-sulzbach-taunus-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Sanierung in Sulzbach (Taunus)",
        text: "Sulzbach (Taunus) besticht durch seine hervorragende Wohnlage im Vordertaunus sowie die unmittelbare Nähe zu Frankfurt und dem Main-Taunus-Zentrum. Die gewachsene Immobilienstruktur aus gepflegten Einfamilienhäusern, Reihenhäusern und Eigentumswohnungen bietet die perfekte Basis für anspruchsvolle Modernisierungen. Radex unterstützt Eigentümer und Käufer dabei, Bestandsgebäude durch eine koordinierte, gewerkeübergreifende Sanierung funktional aufzuwerten, den Wohnkomfort zeitgemäß zu maximieren und den Immobilienwert langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Sulzbach (Taunus)",
        text: "Ein modernes Badezimmer muss den Anforderungen des Alltags standhalten und gleichzeitig barrierearmen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Sulzbach (Taunus) optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Sulzbach (Taunus)",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer geplanten Neuvermietung bietet in den zentralen Wohnbereichen Sulzbachs die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Sulzbach (Taunus)",
        text: "Viele Einfamilienhäuser und Reihenhäuser in den gefragten Wohnlagen des Sulzbacher Umfelds verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Sulzbach (Taunus)",
        text: "Die Modernisierung älterer Wohngebäude rund um den historischen Ortskern verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Sulzbach (Taunus)",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel hergerichteten Homeoffice. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Sulzbach (Taunus)",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Sulzbach (Taunus)",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Sulzbach (Taunus)",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle in den Wohnlagen Richtung Bad Soden und Schwalbach individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Sulzbach (Taunus)",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Ladenlokalen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen im Umfeld des Main-Taunus-Zentrums.",
      },
    ],
  },
  weiterstadt: {
    name: "Weiterstadt",
    path: "/sanierung-weiterstadt",
    heroImg: "/assets/sanierung-weiterstadt-radex.webp",
    districts: [],
    extraContent: [
      {
        title: "Sanierung in Weiterstadt",
        text: "Weiterstadt gehört zu den dynamischsten Städten im Landkreis Darmstadt-Dieburg. Die Nähe zu Darmstadt, die hervorragende Anbindung an das gesamte Rhein-Main-Gebiet sowie die vielseitige Mischung aus modernen Wohngebieten, Gewerbestandorten und gewachsenen Immobilienstrukturen bieten die ideale Basis für anspruchsvolle Modernisierungen. Radex unterstützt Eigentümer und Käufer dabei, Bestandsgebäude durch eine koordinierte, gewerkeübergreifende Sanierung funktional aufzuwerten, den Wohnkomfort zeitgemäß zu maximieren und den Immobilienwert langfristig zu sichern.",
      },
      {
        title: "Badsanierung in Weiterstadt",
        text: "Ein modernes Badezimmer muss den Anforderungen des Alltags standhalten und gleichzeitig barrierearmen Komfort sowie kluge Raumlösungen bieten. Bei einer professionellen Badsanierung in Weiterstadt optimiert Radex nicht nur die sichtbare Aufteilung, Fliesen und Sanitärobjekte, sondern erneuert systematisch die gesamte technische Infrastruktur – von den Wasser- und Abwasserleitungen über die fachgerechte Bauwerksabdichtung bis hin zur Elektro- und Lichtplanung.",
      },
      {
        title: "Wohnungssanierung in Weiterstadt",
        text: "Die Phase direkt nach dem Immobilienkauf oder vor einer geplanten Neuvermietung bietet in den zentralen Wohnbereichen Weiterstadts die beste Gelegenheit für eine Wohnungssanierung. Solange die Räume leer stehen, koordiniert Radex den Austausch von Bodenbelägen, die Modernisierung von Wand- und Deckenflächen, den Einbau neuer Innentüren sowie die technische Anpassung der Elektro- und Sanitärkomponenten hocheffizient.",
      },
      {
        title: "Haussanierung in Weiterstadt",
        text: "Viele Einfamilienhäuser und Reihenhäuser in den gefragten Wohnlagen im Weiterstädter Umfeld verfügen über eine hervorragende Bausubstanz, weisen nach einigen Jahrzehnten der intensiven Nutzung jedoch einen spürbaren Modernisierungsstau auf. Radex führt Haussanierungen strukturiert durch und verbindet gewünschte Grundrissanpassungen, energetische Bauteilverbesserungen und kosmetische Updates zu einem planbaren, perfekt aufeinander abgestimmten Gesamtprozess.",
      },
      {
        title: "Altbausanierung in Weiterstadt",
        text: "Die Modernisierung älterer Wohngebäude im Stadtgebiet verlangt besondere bauphysikalische Sorgfalt, um den Charakter der Immobilie zu wahren. Radex analysiert bestehende Schwachstellen wie feuchtes Mauerwerk, unzureichenden Schallschutz oder marode Rohrleitungen im Bestand gründlich und löst diese nachhaltig durch den Einsatz moderner Verfahren und langlebiger Materialien.",
      },
      {
        title: "Innenausbau und Umbau in Weiterstadt",
        text: "Kleinteilige Grundrisse älterer Jahrzehnte passen oft nicht mehr zu modernen Ansprüchen wie offenen Wohnküchen oder einem flexibel integrierten Homeoffice für Berufspendler. Mittels modernem Trockenbau öffnet Radex Wohnbereiche für mehr Tageslicht, schafft intelligente Stauraumlösungen oder baut Dach- und Kellerräume fachgerecht aus, um die vorhandene Wohnfläche exakt auf Ihre Lebenssituation abzustimmen.",
      },
      {
        title: "Heizung und Sanitär in Weiterstadt",
        text: "Unter SHK-Meisterverantwortung realisiert Radex eine zukunftssichere und technisch einwandfreie Installation der gesamten Haustechnik. Die Erneuerung alter Rohrleitungen, die Optimierung der Warmwasserversorgung und die Modernisierung von Heizkörpern setzen wir hocheffizient um, solange Wände und Böden im Zuge der Sanierungsarbeiten ohnehin geöffnet sind.",
      },
      {
        title: "Elektrotechnik in Weiterstadt",
        text: "Moderne Haushalte benötigen durch Heimarbeitsplätze, leistungsstarke Küchengeräte und digitale Netzwerke eine zukunftssichere Elektroinfrastruktur. Radex plant die Elektroinstallation frühzeitig in den Innenausbau ein, erweitert Steckdosen sowie Schalterprogramme und bindet qualifizierte Fachpartner für die sichere Umsetzung von Unterverteilungen oder Wallbox-Vorbereitungen ein.",
      },
      {
        title: "Energetische Sanierung in Weiterstadt",
        text: "Zur nachhaltigen Senkung von Betriebskosten und zur Erhöhung der Energieeffizienz gewinnt die energetische Modernisierung stark an Bedeutung. Radex bewertet die thermischen Schwachstellen der Gebäudehülle von Braunshardt über Gräfenhausen und Schneppenhausen bis in die Kernstadt individuell und kombiniert ohnehin geplante Sanierungsarbeiten an Decken, Böden oder dem Dach mit gezielten Dämmmaßnahmen und der optimalen Vorbereitung auf moderne Heizsysteme.",
      },
      {
        title: "Notsanierung bei Wasserschaden, Schimmel und Asbest",
        text: "Akute Rohrbrüche, unentdeckte Feuchtigkeitsschäden oder Schimmelbildung verlangen schnelles Handeln und eine fundierte Ursachenanalyse, um Folgeschäden an angrenzenden Bauteilen zu verhindern. Radex übernimmt die Schadensbewertung sowie die Trocknung und verfügt zudem über die notwendige Asbest-Sachkunde nach TRGS 519 für eine gesundheitlich unbedenkliche Schadstoffsanierung.",
      },
      {
        title: "Gewerbe- und Objektsanierung in Weiterstadt",
        text: "Bei der Modernisierung von Büroflächen, Praxen oder Verkaufsflächen stehen funktionale Anforderungen und die Vermeidung langer Ausfallzeiten im Fokus. Radex realisiert gewerbliche Umbauten und den Mieterausbau nach klaren Termin- und Budgetvorgaben – von strapazierfähigen Bodenbelägen über angepasste Trockenbauwände bis hin zu modernisierten Sanitärbereichen in den Wirtschafts- und Gewerbestandorten wie der Riedbahn.",
      },
    ],
  },
};

const serviceNavCards = [
  { to: "/badsanierung-rhein-main", title: "Badsanierung", desc: "Komplette Bädermodernisierung, barrierefreie Umbauten und Wellnessoasen.", cta: "Badsanierung planen", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800" },
  { to: "/sanierung/wohnungssanierung", title: "Wohnungssanierung", desc: "Modernisierung von Wohnungen inklusive Innenausbau und Bodengestaltung.", cta: "Wohnung sanieren", img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800" },
  { to: "/sanierung/haussanierung", title: "Haussanierung", desc: "Ganzheitliche Sanierung von Einfamilienhäusern und Mehrfamilienhäusern.", cta: "Haussanierung entdecken", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
  { to: "/sanierung/altbausanierung", title: "Altbausanierung", desc: "Fachgerechte Modernisierung von denkmalgeschützten Gebäuden und Altbauten.", cta: "Mehr zur Altbausanierung", img: "https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=800" },
  { to: "/heizung-sanitaer-rhein-main", title: "Heizung & Sanitär", desc: "Heizungsmodernisierung, Wärmepumpen und Sanitärinstallationen.", cta: "Heizung & Sanitär modernisieren", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" },
  { to: "/elektroinstallation-rhein-main", title: "Elektrotechnik", desc: "Erneuerung von Stromleitungen und moderner Gebäudetechnik.", cta: "Elektrik aufrüsten", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" },
  { to: "/schadstoffsanierung-rhein-main", title: "Schimmel- & Schadstoffsanierung", desc: "Professionelle Beseitigung von Schimmel und Gefahrstoffen (Asbest).", cta: "Befundung anfragen", img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" },
  { to: "/gewerbe-objektsanierung-rhein-main", title: "Gewerbesanierung", desc: "Büroumbau, Mieterausbau und Sanierung von Gewerbeflächen.", cta: "Gewerbeprojekt besprechen", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" }
];

export default function CityPage({ cityId }) {
  const city = cityDataMap[cityId] || { name: "Rhein-Main-Gebiet", heroImg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600", districts: [] };

  const [openFaq, setOpenFaq] = useState(null);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cityId]);

  const faqsData = [
    { q: `Sind Sie auch in ${city.name} und Umgebung tätig?`, a: `Ja, Radex betreut Sanierungs- und Modernisierungsprojekte in ganz ${city.name} sowie den umliegenden Stadtteilen und Gemeinden.` },
    { q: "Wie schnell erhalte ich ein Angebot?", a: "Nach einer Vor-Ort-Besichtigung oder der Auswertung Ihrer Fotos erhalten Sie in der Regel innerhalb von wenigen Tagen ein verbindliches Festpreisangebot." },
    { q: "Bieten Sie eine Festpreisgarantie an?", a: "Ja, alle unsere Angebote sind Festpreise ohne versteckte Zusatzkosten." },
    { q: "Kann ich Fotos meines Projekts vorab senden?", a: "Ja, senden Sie uns gerne Fotos per WhatsApp – wir geben Ihnen eine erste Einschätzung, bevor wir einen Vor-Ort-Termin vereinbaren." },
    { q: "Sind Sie ein lizenzierter Fachbetrieb?", a: "Radex ist ein eingetragener SHK-Meisterbetrieb und zertifizierter Generalunternehmer." }
  ];

  useSeo({
    title: `Sanierung ${city.name} | Bad, Wohnung & Haus modernisieren | Radex`,
    description: `Sanierung & Badsanierung in ${city.name} aus einer Hand: Wohnungs-, Haus- & Altbausanierung, Heizung, Elektro & mehr vom SHK-Meisterbetrieb. Festpreis. Jetzt Beratung sichern!`,
    path: city.path,
    image: city.heroImg,
    jsonLd: [buildFaqSchema(faqsData)]
  });

  const SharedCTABlock = ({ isHero = false }) => (
    <div className={`br-hero-actions ${isHero ? '' : 'mt-8'}`} style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: isHero ? 'flex-start' : 'center'}}>
      <a href="#kontakt" className="btn br-btn-orange">Kostenlose Beratung &rarr;</a>
      <a href="https://wa.me/496074960620" target="_blank" rel="noopener noreferrer" className="btn br-btn-whatsapp">
        Fotos senden <MessageSquare size={18} color="#25D366" style={{marginLeft: '8px'}} />
      </a>
      <a href="tel:+496074960620" className="btn" style={{display: 'flex', alignItems: 'center', gap: '8px', background: isHero ? 'transparent' : '#fff', border: isHero ? '1px solid #111827' : '1px solid #d1d5db', color: '#111827', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none'}}>
        <Phone size={18} /> Jetzt anrufen
      </a>
    </div>
  );

  return (
    <main className="badsanierung-page">
      {/* 1. HERO */}
      <section className="br-hero-split">
        <div className="br-hero-left">
          <div className="br-hero-content">
            <h1 className="br-hero-title">
              Sanierung & Renovierung <br/>
              <span>in {city.name}</span>
            </h1>
            <p className="br-hero-subtitle">
              Ihr lokaler Experte für hochwertige Umbauten, Badsanierungen und Haustechnik in {city.name} und Umgebung.
            </p>
            <p className="br-hero-text">
              Von der ersten Planung bis zur schlüsselfertigen Übergabe unterstützen wir Sie bei Ihrem Projekt in {city.name} – zum Festpreis und aus einer Hand.
            </p>
            <SharedCTABlock isHero={true} />
            <p className="br-hero-micro mt-4">
              <Camera size={14} /> Fotos senden. Erste Einschätzung erhalten.
            </p>
          </div>
        </div>
        <div className="br-hero-right" style={{ backgroundImage: `url(${city.heroImg})` }}>
          <div style={{position: 'absolute', bottom: '24px', left: '24px', background: 'rgba(255,255,255,0.95)', padding: '10px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <MapPin size={24} color="#ea580c" />
            <span style={{fontWeight: 'bold', fontSize: '18px', color: '#111827'}}>Radex in {city.name}</span>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="br-section" style={{paddingTop: '32px', paddingBottom: '32px', borderBottom: '1px solid #e5e7eb'}}>
        <div className="container">
          <div className="br-trust-footer" style={{borderTop: 'none', paddingTop: 0}}>
            <div className="br-trust-item">
              <Award size={32} color="#aaa" />
              <div>
                <strong>500+</strong>
                <span>Abgeschlossene Projekte</span>
              </div>
            </div>
            <div className="br-trust-item">
              <MapPin size={32} color="#aaa" />
              <div>
                <strong>60+</strong>
                <span>Betreute Städte</span>
              </div>
            </div>
            <div className="br-trust-item">
              <ShieldCheck size={32} color="#aaa" />
              <div>
                <strong>SHK-Meister</strong>
                <span>Zugelassener Fachbetrieb</span>
              </div>
            </div>
            <div className="br-trust-item">
              <Users size={32} color="#aaa" />
              <div>
                <strong>100%</strong>
                <span>Festpreisgarantie</span>
              </div>
            </div>
            <div className="br-trust-item">
              <CheckCircle2 size={32} color="#aaa" />
              <div>
                <strong>50km</strong>
                <span>Einsatzradius um {city.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WOULD YOU LIKE TO RENOVATE? (8 SERVICE NAV CARDS) */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Was möchten Sie in {city.name} sanieren?</h2>
            <p className="br-section-subtitle">
              Wir bieten das gesamte Spektrum der Immobilienmodernisierung in {city.name} und Umgebung.
            </p>
          </div>

          <div className="br-projects-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
            {serviceNavCards.map((card, idx) => (
              <Link key={idx} to={card.to} className="br-project-card" style={{textDecoration: 'none', color: 'inherit', border: '1px solid #e5e7eb'}}>
                <div className="br-project-img" style={{ backgroundImage: `url(${card.img})`, height: '180px' }}></div>
                <div className="br-project-info" style={{background: '#fff', padding: '24px'}}>
                  <h4 style={{fontSize: '18px', marginBottom: '8px', color: '#111827'}}>{card.title} in {city.name}</h4>
                  <p style={{color: '#4b5563', fontSize: '14px', marginBottom: '16px'}}>{card.desc}</p>
                  <span style={{color: '#f97316', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px'}}>{card.cta} <ArrowRight size={16} /></span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 p-8" style={{background: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
            <h3 style={{fontSize: '24px', marginBottom: '16px', color: '#111827'}}>Planen Sie ein Projekt in {city.name}?</h3>
            <p style={{color: '#4b5563', marginBottom: '24px'}}>Senden Sie uns Fotos und erhalten Sie eine professionelle Ersteinschätzung.</p>
            <SharedCTABlock />
          </div>
        </div>
      </section>

      {/* 4. PROJECTS IN CITY */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Referenzprojekte in {city.name} und Umgebung</h2>
            <p className="br-section-subtitle">
              Ein Auszug aus unseren abgeschlossenen und laufenden Sanierungsprojekten im Rhein-Main-Gebiet.
            </p>
          </div>

          <div className="br-projects-grid">
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&q=80&w=800)' }}>
                <span className="br-project-badge live">Live</span>
              </div>
              <div className="br-project-info">
                <h4>Badsanierung – Komplettumbau</h4>
                <p>{city.name}</p>
              </div>
            </div>
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800)' }}></div>
              <div className="br-project-info">
                <h4>Wohnungssanierung – Küche & Boden</h4>
                <p>{city.name}</p>
              </div>
            </div>
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800)' }}></div>
              <div className="br-project-info">
                <h4>Haussanierung – Wohnbereich</h4>
                <p>{city.name} Umgebung</p>
              </div>
            </div>
            <div className="br-project-card">
              <div className="br-project-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800)' }}>
                <span className="br-project-badge before-after">Vorher & Nachher</span>
              </div>
              <div className="br-project-info">
                <h4>Altbausanierung – Modernisierung</h4>
                <p>{city.name} Umgebung</p>
              </div>
            </div>
          </div>

          {/* Mid-page CTA */}
          <div className="text-center mt-12 p-8" style={{background: '#fff3ea', borderRadius: '8px', border: '1px solid #fdba74'}}>
            <h3 style={{fontSize: '24px', marginBottom: '16px', color: '#ea580c'}}>Noch Fragen zu Ihrem Projekt in {city.name}?</h3>
            <p style={{color: '#4b5563', marginBottom: '24px'}}>Senden Sie uns Fotos und erhalten Sie eine professionelle Ersteinschätzung.</p>
            <SharedCTABlock />
          </div>
        </div>
      </section>

      {/* 5. WHY RADEX */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Warum Eigentümer in {city.name} Radex wählen</h2>
          </div>
          <div className="br-benefits-grid">
            <div className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
              <div className="br-benefit-icon"><Award size={40} color="#f97316" /></div>
              <h3>Eingetragener<br/>SHK-Meisterbetrieb</h3>
              <p>Zertifizierter Handwerksbetrieb, der fachgerechte Arbeit nach aktuellen deutschen Normen und Vorschriften liefert.</p>
            </div>
            <div className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
              <div className="br-benefit-icon"><Users size={40} color="#f97316" /></div>
              <h3>Alles aus<br/>einer Hand</h3>
              <p>Ein zentraler Ansprechpartner für Planung, Koordination und Ausführung Ihres Projekts in {city.name}.</p>
            </div>
            <div className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
              <div className="br-benefit-icon"><CheckCircle2 size={40} color="#f97316" /></div>
              <h3>Saubere<br/>Sanierung</h3>
              <p>Professionelle Staubschutzsysteme sorgen für einen sauberen Ablauf direkt vor Ort.</p>
            </div>
            <div className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
              <div className="br-benefit-icon"><ShieldCheck size={40} color="#f97316" /></div>
              <h3>Festpreis-<br/>Garantie</h3>
              <p>Transparente Angebote ohne versteckte Kosten oder unerwartete Extras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEED IMMEDIATE HELP? (EMERGENCY & FAST SERVICES) */}
      <section className="br-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="br-section-title">Benötigen Sie schnelle Hilfe in {city.name}?</h2>
            <p className="br-section-subtitle">
              Für dringende Fälle bieten wir priorisierte Termine und schnelle Reaktionszeiten in {city.name} und Umgebung.
            </p>
          </div>
          <div className="br-benefits-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
            <div className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
              <div className="br-benefit-icon" style={{background: '#fff3ea'}}><AlertTriangle size={32} color="#ea580c" /></div>
              <h3>Notfall-Badservice</h3>
              <p>Schnelle Hilfe bei Wasserschäden, defekten Leitungen oder akuten Sanitärproblemen.</p>
              <a href="tel:+496074960620" className="br-seo-tag" style={{display: 'inline-block', marginTop: '12px', fontWeight: 600, color: '#ea580c'}}>Jetzt anrufen &rarr;</a>
            </div>
            <div className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
              <div className="br-benefit-icon" style={{background: '#fff3ea'}}><Wrench size={32} color="#ea580c" /></div>
              <h3>Express-Sanierung</h3>
              <p>Schnelle Projektabwicklung für dringende Modernisierungen mit kurzer Vorlaufzeit.</p>
              <a href="#kontakt" className="br-seo-tag" style={{display: 'inline-block', marginTop: '12px', fontWeight: 600, color: '#ea580c'}}>Termin anfragen &rarr;</a>
            </div>
            <div className="br-benefit-card" style={{boxShadow: 'none', border: '1px solid #e5e7eb', background: '#fff'}}>
              <div className="br-benefit-icon" style={{background: '#fff3ea'}}><CheckCircle2 size={32} color="#ea580c" /></div>
              <h3>Schadstoff-Sofortbefundung</h3>
              <p>Schnelle Einschätzung bei Schimmelbefall oder Verdacht auf Asbest in Bestandsgebäuden.</p>
              <Link to="/schadstoffsanierung-rhein-main" className="br-seo-tag" style={{display: 'inline-block', marginTop: '12px', fontWeight: 600, color: '#ea580c'}}>Befundung anfragen &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <SanierungskostenRechner defaultType="bad" compact />

      {/* 7. DETAILED SERVICE INFORMATION + LOCAL DISTRICTS (ACCORDIONS) */}

          {/* WEITERE INFORMATIONEN - Everything in ONE accordion */}
      <section className="br-section br-bg-light">
        <div className="container">
          <div style={{border: '1px solid #e5e7eb', borderRadius: '8px', background: '#fff'}}>
            <button
              onClick={() => setOpenSection(openSection === 'all' ? null : 'all')}
              style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 24px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '18px', color: 'var(--navy)', textAlign: 'left'}}
            >
              <span>Weitere Informationen zu {city.name}</span>
              <ChevronDown size={22} style={{transform: openSection === 'all' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', flexShrink: 0, color: 'var(--gold)'}} />
            </button>

            {openSection === 'all' && (
              <div style={{padding: '0 24px 28px'}}>

                {/* Intro + service tags */}
                <div className="br-seo-text-block mb-8">
                  <p className="mb-4 text-gray-600">
                    Als erfahrener SHK-Meisterbetrieb und Generalunternehmer realisiert Radex Sanierungsprojekte für Privathaushalte,
                    Kapitalanleger und Gewerbekunden in {city.name}.
                  </p>
                </div>

                {/* Topic sections from docx content */}
                {city.extraContent && Array.isArray(city.extraContent) && city.extraContent.map((item, idx) => (
                  <div key={idx} style={{marginBottom: '24px'}}>
                    <h4 style={{fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px'}}>{item.title}</h4>
                    <p style={{color: '#4b5563', lineHeight: '1.7', fontSize: '15px'}}>{item.text}</p>
                  </div>
                ))}

                {/* Districts */}
                {city.districts && city.districts.length > 0 && (
                  <div style={{marginTop: '32px', marginBottom: '32px'}}>
                    <p className="text-center mb-4 font-semibold">Wir betreuen Sanierungsprojekte in folgenden Stadtteilen und Umgebungsgemeinden von {city.name}:</p>
                    <div className="br-seo-tags">
                      {city.districts.map((district, idx) => (
                        <span key={idx} className="br-seo-tag">{district}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* FAQ moved inside */}
                <div style={{marginTop: '32px', borderTop: '1px solid #e5e7eb', paddingTop: '24px'}}>
                  <h3 style={{fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginBottom: '16px', textAlign: 'center'}}>Häufig gestellte Fragen zu {city.name}</h3>
                  <div className="br-faq-grid">
                    {faqsData.map((faq, i) => (
                      <div key={i} className="home-faq-item">
                        <button className="home-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                          <span style={{fontWeight: 600, color: '#1f2937', fontSize: '15px', textAlign: 'left'}}>{faq.q}</span>
                          <ChevronDown style={{transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease'}} color="#9ca3af" size={16} />
                        </button>
                        <div className="home-faq-answer" style={{display: 'grid', gridTemplateRows: openFaq === i ? '1fr' : '0fr', transition: 'grid-template-rows 0.3s ease', padding: 0}}>
                          <div style={{overflow: 'hidden'}}>
                            <div style={{borderTop: '1px solid #f9fafb', paddingTop: '14px', paddingBottom: '14px', paddingLeft: '14px', paddingRight: '14px', color: '#4b5563', fontSize: '14px', lineHeight: '1.6'}}>
                              {faq.a}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </section>

      {/* 10. CONTACT / FINAL CTA */}
      <section id="kontakt" className="br-section">
        <div className="container" style={{maxWidth: '800px', textAlign: 'center'}}>
          <h2 className="br-section-title">Ihre lokale Handwerksfirma in {city.name}</h2>
          <p className="br-section-subtitle" style={{marginBottom: '30px'}}>
            Als zertifizierter Generalunternehmer betreuen wir Ihr Vorhaben in {city.name} von der Planung bis zur finalen Abnahme. Kontaktieren Sie uns für eine kostenlose Beratung vor Ort.
          </p>
          <SharedCTABlock />
        </div>
      </section>
    </main>
  );
}
