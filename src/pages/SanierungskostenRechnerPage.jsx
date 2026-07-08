import useSeo from '../useSeo';
import SanierungskostenRechner from '../components/SanierungskostenRechner';

const metaByType = {
  bad: {
    title: 'Badsanierung Kosten | Sanierungskosten Rechner | Radex',
    description: 'Badsanierung Kosten online berechnen: kostenloser Radex Sanierungskosten Rechner für Bad, Wohnung und Altbau im Rhein-Main-Gebiet.',
    path: '/badsanierung-kosten'
  },
  wohnung: {
    title: 'Wohnungssanierung Kosten | Sanierungskosten Rechner | Radex',
    description: 'Wohnungssanierung Kosten online einschätzen: Radex Sanierungskosten Rechner mit Basis, Komfort und Premium für das Rhein-Main-Gebiet.',
    path: '/wohnungssanierung-kosten'
  },
  altbau: {
    title: 'Altbausanierung Kosten | Sanierungskosten Rechner | Radex',
    description: 'Altbausanierung Kosten online berechnen: kostenlose Orientierung für Sanierung, Kernsanierung und Modernisierung im Rhein-Main-Gebiet.',
    path: '/altbausanierung-kosten'
  },
  default: {
    title: 'Sanierungskosten Rechner | Bad, Wohnung & Altbau | Radex',
    description: 'Sanierungskosten Rechner von Radex: Badsanierung Kosten, Wohnungssanierung Kosten und Altbausanierung Kosten kostenlos einschätzen.',
    path: '/sanierungskosten-rechner'
  }
};

export default function SanierungskostenRechnerPage({ defaultType = 'bad', metaType = 'default' }) {
  const meta = metaByType[metaType] || metaByType.default;

  useSeo({
    title: meta.title,
    description: meta.description,
    path: meta.path
  });

  return (
    <main style={{ flexGrow: 1 }}>
      <SanierungskostenRechner defaultType={defaultType} />
    </main>
  );
}
