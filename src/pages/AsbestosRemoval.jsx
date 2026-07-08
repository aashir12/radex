import ServicePageTemplate from '../components/ServicePageTemplate';

export default function AsbestosRemoval() {
  const heroData = {
    title: "Asbest- & Schadstoffsanierung",
    titleSpan: "TRGS 519 zertifiziert",
    subtitle: "Sichere Entfernung und vorschriftsmäßige Entsorgung von Gefahrstoffen.",
    text: "Als zertifizierter Fachbetrieb nach TRGS 519 sanieren wir asbestbelastete Dächer, Fassaden, Böden und Innenräume sicher, dokumentiert und vollständig nach den geltenden Vorschriften.",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1600"
  };

  const whoIsForData = {
    title: "Wann ist Asbest ein Thema?",
    subtitle: "Gebäude mit Baujahr vor 1993 sind häufig belastet.",
    list: [
      { title: "Dachsanierung", desc: "Asbestzementplatten (Eternit), Wellplatten und Dachschindeln auf älteren Dächern." },
      { title: "Innensanierung", desc: "Floor-Flex-Platten, asbesthaltige Fliesenkleber, Spachtelmassen oder Rohrisolierungen." },
      { title: "Fassade", desc: "Asbesthaltige Fassadenplatten und Verkleidungen aus den 60er- bis 80er-Jahren." },
      { title: "Vor dem Umbau", desc: "Pflicht zur Erkundung vor Abbruch- und Sanierungsarbeiten in Altbauten." }
    ]
  };

  const typicalProjectsData = {
    title: "Unsere Schadstoffsanierungen",
    subtitle: "Sicher, zertifiziert und vollständig dokumentiert.",
    projects: [
      { title: "Asbestdach", desc: "Demontage und Entsorgung von Wellplatten und Dacheindeckungen.", img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" },
      { title: "Asbestböden", desc: "Entfernung asbesthaltiger PVC-, Floor-Flex- und Klebstoffschichten.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
      { title: "KMF & Gefahrstoffe", desc: "Entsorgung künstlicher Mineralfasern und sonstiger belasteter Materialien.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const costsData = {
    title: "Kosten der Asbestsanierung",
    subtitle: "Preise beinhalten Spezialausrüstung, Schutzmaßnahmen und Sondermüll-Entsorgung.",
    items: [
      { title: "Dachsanierung", price: "ab €35 / m²", img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" },
      { title: "Bodenbeläge", price: "ab €60 / m²", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
      { title: "Innenraum-Sanierung", price: "auf Anfrage", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const faqsData = [
    { q: "Muss der Bereich abgeschottet werden?", a: "Ja, im Innenbereich arbeiten wir unter Unterdruck mit speziellen Schleusen und Folienabschottungen, damit keine Asbestfasern in andere Räume gelangen. Die Luft wird über Feinstaubfilter (HEPA) gereinigt. Diese Maßnahmen sind in der TRGS 519 vorgeschrieben." },
    { q: "Woran erkenne ich asbesthaltige Materialien?", a: "Eine sichere Bestimmung ist nur durch eine Materialprobe und Laboranalyse möglich. Verdächtig sind Materialien aus der Bauzeit vor 1993 – etwa graue Wellplatten, Fensterbänke, Floor-Flex-Bodenplatten und alte Rohrisolierungen. Bei Verdacht sollten Sie die Materialien keinesfalls selbst bearbeiten." },
    { q: "Darf ich Asbest selbst entfernen?", a: "Nein. Die Entfernung asbesthaltiger Materialien darf nur durch Betriebe mit Sachkundenachweis nach TRGS 519 erfolgen. Eigenmächtiges Entfernen ist nicht nur gesundheitsgefährlich, sondern auch rechtlich unzulässig und kann Bußgelder nach sich ziehen." },
    { q: "Wie wird Asbest entsorgt?", a: "Asbest ist gefährlicher Abfall und muss in speziellen, staubdichten Big-Bags verpackt und bei einer zugelassenen Deponie entsorgt werden. Wir übernehmen die gesamte Logistik inklusive Entsorgungsnachweis, den Sie für Behörden und ggf. Käufer benötigen." },
    { q: "Muss eine Behörde informiert werden?", a: "Bei asbesthaltigen Sanierungsarbeiten ist eine Anzeige bei der zuständigen Behörde (z. B. Regierungspräsidium) erforderlich. Wir kümmern uns um die vorgeschriebenen Anzeigen, Arbeitspläne und die komplette Dokumentation." }
  ];

  const seoContent = (
    <>
      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Zertifizierte Sanierung nach TRGS 519</h3>
        <p className="mb-4 text-gray-600">Die Entfernung von Asbest darf ausschließlich von Firmen durchgeführt werden, die den Sachkundenachweis nach TRGS 519 (Technische Regeln für Gefahrstoffe) besitzen. Radex verfügt über alle notwendigen Zulassungen, geschultes Personal und modernste Schutzausrüstung. Wir führen jede Sanierung nach einem detaillierten Arbeitsplan durch und dokumentieren sämtliche Schritte lückenlos.</p>
        <p className="text-gray-600">So schützen wir Ihre Gesundheit, die Umwelt und sorgen für eine rechtssichere Abwicklung.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Sicheres Sanierungsverfahren</h3>
        <p className="mb-4 text-gray-600">Vor Beginn der Arbeiten erstellen wir eine Gefährdungsbeurteilung und schotten den Arbeitsbereich ab. Im Innenbereich arbeiten wir mit Unterdruckhaltung, Personenschleusen und HEPA-gefilterter Abluft. Die asbesthaltigen Materialien werden staubarm demontiert, sofort verpackt und sicher abtransportiert. Nach Abschluss erfolgt eine Freimessung der Raumluft, bevor die Räume wieder genutzt werden dürfen.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Entsorgung & Dokumentation</h3>
        <p className="mb-4 text-gray-600">Asbest gilt als gefährlicher Abfall und unterliegt strengen Entsorgungsvorschriften. Wir verpacken die Materialien in staubdichten, gekennzeichneten Behältern und entsorgen sie über zugelassene Deponien. Sie erhalten alle Entsorgungsnachweise – ein wichtiges Dokument für Behörden, Versicherungen und beim späteren Verkauf der Immobilie.</p>
      </div>

      <div className="br-seo-text-block mb-8">
        <h3 className="mb-4 text-xl font-bold">Weitere Gefahrstoffe</h3>
        <p className="text-gray-600">Neben Asbest sanieren wir auch andere Schadstoffe, die in älteren Gebäuden vorkommen: künstliche Mineralfasern (KMF / „alte Mineralwolle"), PAK- und teerhaltige Kleber sowie PCB-belastete Baustoffe. Bei einem geplanten Umbau oder Abriss prüfen wir Ihr Gebäude vorab auf solche Belastungen und beraten Sie zur sicheren Vorgehensweise.</p>
      </div>
    </>
  );

  const seo = {
    title: "Asbestsanierung Rhein-Main | TRGS 519 zertifiziert | Radex",
    description: "Asbestsanierung im Rhein-Main-Gebiet: sichere Entfernung & Entsorgung von Asbest und Gefahrstoffen nach TRGS 519, vollständig dokumentiert. Jetzt Beratung anfragen!",
    path: "/asbestsanierung-rhein-main",
    serviceName: "Asbestsanierung"
  };

  return <ServicePageTemplate seo={seo} heroData={heroData} whoIsForData={whoIsForData} typicalProjectsData={typicalProjectsData} costsData={costsData} faqsData={faqsData} seoContent={seoContent} />;
}
