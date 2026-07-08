import ServicePageTemplate from '../components/ServicePageTemplate';

export default function MoldRemediation() {
  const heroData = {
    title: 'Schimmel- & Schadstoffsanierung im',
    titleSpan: 'Rhein-Main-Gebiet',
    subtitle: 'Ursachen finden, Belastungen fachlich einordnen und den Bestand sicher wiederherstellen.',
    text: 'Radex koordiniert Schimmel-, Feuchte- und Schadstoffthemen im Rhein-Main-Gebiet als Teil professioneller Sanierungsprojekte. Im Bereich Heizung, Sanitär und Gebäudetechnik arbeitet der Betrieb als SHK-Meisterbetrieb mit Bernd Knoop als SHK-Meister und Betriebsleiter; für Asbest verfügt Radex über Sachkunde nach TRGS 519.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1600'
  };

  const whoIsForData = {
    title: 'Für wen Schimmel- und Schadstoffsanierung relevant ist',
    subtitle: 'Sobald Feuchtigkeit, verdächtige Baustoffe oder Rückbau im Bestand zusammenkommen, sollte fachlich geprüft werden.',
    list: [
      {
        title: 'Eigentümer und Käufer',
        desc: 'Vor oder nach dem Kauf einer älteren Immobilie können Feuchtigkeit, Schimmel und Verdachtsmaterialien rechtzeitig eingeordnet werden.'
      },
      {
        title: 'Vermieter und Hausverwaltungen',
        desc: 'Bei Mietverhältnissen, Leerstand oder Schadensfällen braucht es eine saubere Dokumentation und klare Kommunikation.'
      },
      {
        title: 'Eigentümer mit Keller- oder Badproblemen',
        desc: 'Feuchte Keller, undichte Bäder, Wärmebrücken und Lüftungsprobleme sind häufige Auslöser für Schimmel.'
      },
      {
        title: 'Sanierer im Altbau',
        desc: 'Bei älteren Baustoffen können Schimmel und Schadstoffe gemeinsam auftreten und müssen zusammen betrachtet werden.'
      },
      {
        title: 'Gewerbliche Nutzer und Objektverantwortliche',
        desc: 'Auch in Büro-, Praxis- oder Ladenflächen können Rückbau und Schadstoffprüfung eng mit der Sanierungsplanung verknüpft sein.'
      }
    ]
  };

  const typicalProjectsData = {
    title: 'Typische Ursachen und Befunde',
    subtitle: 'Radex saniert nicht nur die sichtbare Stelle, sondern ordnet die Ursache und den gesamten Ablauf ein.',
    projects: [
      { title: 'Wasserschaden', desc: 'Rohrbruch, undichte Leitungen oder eindringende Feuchtigkeit können Schimmel auslösen.', img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800' },
      { title: 'Kältebrücken', desc: 'Ungünstige Außenwandecken, Fensterbereiche oder Deckenanschlüsse begünstigen Kondensat.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800' },
      { title: 'Schimmel im Bad', desc: 'Feuchte Zonen, undichte Fugen, schlechte Lüftung oder versteckte Schäden hinter Verkleidungen.', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800' },
      { title: 'Schimmel im Keller', desc: 'Feuchte Kellerwände, Kondensation, aufsteigende Feuchtigkeit oder fehlende Abdichtung.', img: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&q=80&w=800' },
      { title: 'Asbestverdacht', desc: 'Alte Bodenbeläge, Kleber, Platten oder Isolierungen müssen fachlich geprüft werden.', img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&q=80&w=800' },
      { title: 'Altbausanierung', desc: 'Bei älteren Gebäuden können mehrere Themen zusammen auftreten und müssen gemeinsam bewertet werden.', img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d1?auto=format&fit=crop&q=80&w=800' }
    ]
  };

  const costsData = {
    title: 'Kosten einer Schimmel- und Schadstoffsanierung',
    subtitle: 'Die Kosten hängen immer von Befund, Ursache, Zugänglichkeit und Wiederaufbau ab.',
    items: [
      { title: 'Oberflächlicher Schimmel', price: 'ab 300 €', img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800' },
      { title: 'Tiefsitzender Befall', price: 'ab 1.500 €', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800' },
      { title: 'Trocknung und Wiederaufbau', price: 'ab 3.500 €', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800' },
      { title: 'Asbestprüfung und Rückbau', price: 'projektbezogen', img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&q=80&w=800' }
    ]
  };

  const processData = {
    steps: [
      { number: 1, title: 'Verdacht einordnen', icon: <span>1</span> },
      { number: 2, title: 'Objekt und Ziel verstehen', icon: <span>2</span> },
      { number: 3, title: 'Bestandsaufnahme vor Ort', icon: <span>3</span> },
      { number: 4, title: 'Maßnahmen planen', icon: <span>4</span> },
      { number: 5, title: 'Fachgerecht umsetzen', icon: <span>5</span> },
      { number: 6, title: 'Wiederaufbau und Abschluss', icon: <span>6</span> }
    ]
  };

  const faqsData = [
    { q: 'Wann sollte Schimmel fachlich geprüft werden?', a: 'Wenn Schimmel wiederholt auftritt, größer wird, nach einem Wasserschaden entstanden ist, im Bad oder Keller sichtbar wird oder einen muffigen Geruch verursacht, sollte er fachlich geprüft werden.' },
    { q: 'Warum reicht oberflächliches Entfernen nicht aus?', a: 'Weil es nur den sichtbaren Befall beseitigt. Wenn die Feuchtigkeit bleibt, entsteht der Schimmel erneut. Ursache, Tiefe des Befalls und betroffene Bauteile müssen mit betrachtet werden.' },
    { q: 'Was kostet eine Schimmelsanierung?', a: 'Die Kosten hängen vom Umfang ab. Eine kleine lokale Sanierung ist anders zu bewerten als ein Wasserschaden mit Trocknung, Rückbau und Wiederherstellung.' },
    { q: 'Kann Schimmel im Bad dauerhaft saniert werden?', a: 'Ja, wenn die Ursache behoben wird. Abdichtung, Fugen, Lüftung, Wandaufbau und mögliche Leitungsprobleme müssen dabei zusammen geprüft werden.' },
    { q: 'Was passiert bei Schimmel nach einem Wasserschaden?', a: 'Zuerst wird die Ursache gestoppt, dann werden betroffene Bauteile getrocknet und geprüft. Erst danach folgt der Wiederaufbau der betroffenen Bereiche.' },
    { q: 'Ist Radex zertifiziert für Schimmelsanierung?', a: 'Ja. Radex ist zertifiziert für Schimmelsanierung und verfügt zusätzlich über Sachkunde nach TRGS 519 für Asbest.' },
    { q: 'Kann Schimmel mit Asbest oder anderen Schadstoffen zusammenhängen?', a: 'Ja, im selben Sanierungsprojekt können mehrere Befunde auftreten. Deshalb ist im Bestand ein fachkundiger Blick auf Schimmel und Verdachtsmaterialien wichtig.' },
    { q: 'Wie läuft die Anfrage ab?', a: 'Sie rufen Radex unter 06074 960620 an oder nutzen den Kontaktbereich. Im ersten Gespräch werden Befund, Raum, Baujahr und mögliche Ursachen besprochen.' },
    { q: 'Welche Städte betreut Radex?', a: 'Radex ist in über 60 Städten im Rhein-Main-Gebiet aktiv, unter anderem in Rödermark, Rodgau, Dietzenbach, Dreieich, Langen, Neu-Isenburg, Offenbach, Frankfurt, Hanau, Darmstadt, Bad Vilbel, Bad Homburg und Oberursel.' }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Schimmel ist immer ein Ursache-Folge-Thema</h3>
        <p className="mb-4 text-gray-600">Schimmel ist nie nur ein optischer Mangel. Sichtbare Flecken, Geruch oder feuchte Stellen zeigen fast immer ein Feuchtigkeitsproblem an, das bauphysikalisch oder technisch eingeordnet werden muss.</p>
        <p className="text-gray-600">Radex betrachtet deshalb nicht nur die Oberfläche, sondern den gesamten Zusammenhang aus Feuchtigkeit, Nutzung, Bauweise und Technik.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Schimmel im Bad, Keller und an Außenwänden</h3>
        <p className="mb-4 text-gray-600">Besonders häufig tritt Schimmel in Bädern, Kellern, Schlafzimmern und an Außenwänden auf. Dort treffen Feuchtigkeit, kalte Flächen und ungünstige Luftführung oft zusammen.</p>
        <p className="text-gray-600">Gerade nach einem Wasserschaden oder bei älteren Bädern muss deshalb geprüft werden, wie tief der Schaden reicht und welche Bauteile betroffen sind.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Schadstoffe im Bestand sachlich prüfen</h3>
        <p className="mb-4 text-gray-600">Bei älteren Gebäuden können beim Rückbau zusätzlich Schadstoffe sichtbar werden. Dazu gehören unter anderem Asbest, alte Kleber, PAK-haltige Materialien, Mineralfasern oder belastete Anstriche.</p>
        <p className="text-gray-600">Radex verfügt über TRGS-519-Sachkunde und kann diese Themen in die Sanierungsplanung integrieren.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Schimmel- und Schadstoffsanierung zusammen denken</h3>
        <p className="mb-4 text-gray-600">Wenn ein Bereich geöffnet wird, sollte nicht blind weitergearbeitet werden. Erst prüfen, dann rückbauen, dann trocknen und erst danach wiederaufbauen. Diese Reihenfolge schützt vor Doppelarbeit und Folgeschäden.</p>
        <p className="text-gray-600">Radex koordiniert dabei Schimmelbeseitigung, Trocknung, Abdichtung, SHK-Leistungen, Wiederaufbau und die Schnittstellen zu weiteren Gewerken.</p>
      </div>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Regionale Erreichbarkeit und Erfahrung</h3>
        <p className="mb-4 text-gray-600">Radex arbeitet im gesamten Rhein-Main-Gebiet und ist bei Schimmel- und Schadstoffthemen häufig bei Bestandsimmobilien, Altbauten, Wohnungen und Gewerbeflächen im Einsatz.</p>
        <p className="text-gray-600">Für eine erste Einschätzung genügt oft ein Anruf unter 06074 960620 oder eine Anfrage über den Kontaktbereich.</p>
      </div>
    </>
  );

  const seo = {
    title: 'Schimmel- & Schadstoffsanierung Rhein-Main | Zertifiziert | Radex',
    description:
      'Schimmel- und Schadstoffsanierung im Rhein-Main-Gebiet: Ursachenanalyse, Bautrocknung, Asbest-Sachkunde nach TRGS 519 und fachgerechte Sanierung.',
    path: '/schadstoffsanierung-rhein-main',
    serviceName: 'Schimmel- & Schadstoffsanierung'
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
