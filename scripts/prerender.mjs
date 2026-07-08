// Post-build prerender: render each route to static HTML so the full page
// content (incl. the SEO accordion text) is present in the served HTML for
// crawlers, instead of an empty <div id="root"> that only fills via JS.
//
// Run after `vite build` (client) and `vite build --ssr` (server entry).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const SITE = 'https://www.radex-objektmanagement.de';

// Single source of truth for per-route head meta. Mirrors the useSeo() calls
// in the page components so the prerendered <head> matches the runtime head.
const cityNames = {
  '/sanierung-frankfurt-am-main': 'Frankfurt am Main',
  '/haus-wohnung-bad-modernisieren-darmstadt': 'Darmstadt',
  '/sanierung-offenbach-am-main': 'Offenbach',
  '/sanierung-hanau': 'Hanau',
  '/sanierung-wiesbaden': 'Wiesbaden',
  '/sanierung-mainz': 'Mainz',
  '/sanierung-aschaffenburg': 'Aschaffenburg',
  '/sanierung-roedermark': 'Rödermark'
};

const cityMeta = Object.fromEntries(
  Object.entries(cityNames).map(([p, name]) => [
    p,
    {
      title: `Sanierung ${name} | Bad, Wohnung & Haus modernisieren | Radex`,
      description: `Sanierung & Badsanierung in ${name} aus einer Hand: Wohnungs-, Haus- & Altbausanierung, Heizung, Elektro & mehr vom SHK-Meisterbetrieb. Festpreis. Jetzt Beratung sichern!`
    }
  ])
);

const routes = {
  '/': { title: 'Radex Objektmanagement | Sanierung & Badsanierung im Rhein-Main-Gebiet', description: 'Sanierung, Badsanierung & Modernisierung im Rhein-Main-Gebiet aus einer Hand. Zugelassener SHK-Meisterbetrieb & Generalunternehmer aus Rödermark. Jetzt kostenlose Beratung sichern!' },
  '/sanierung-rhein-main': { title: 'Sanierung Rhein-Main | Wohnung, Haus & Altbau modernisieren | Radex', description: 'Sanierung im Rhein-Main-Gebiet: Wohnungs-, Haus- & Altbausanierung, Komplettsanierung und Generalunternehmer aus einer Hand. Festpreis & feste Termine. Jetzt anfragen!' },
  '/leistungen': { title: 'Leistungen | Sanierung & Modernisierung im Rhein-Main-Gebiet | Radex', description: 'Alle Leistungen von Radex im Rhein-Main-Gebiet: Komplettsanierung, Heizung & Sanitär, Elektrotechnik, Innenausbau, Energie & Förderung, Schimmel & Asbest, Gewerbe.' },
  '/einsatzgebiete-rhein-main': { title: 'Einsatzgebiete | Sanierung im Rhein-Main-Gebiet | Radex', description: 'Radex saniert in über 60 Städten im Rhein-Main-Gebiet: Frankfurt, Offenbach, Darmstadt, Wiesbaden, Mainz, Hanau, Aschaffenburg, Rödermark u. v. m. Jetzt vor Ort beraten lassen!' },
  '/badsanierung-rhein-main': { title: 'Badsanierung Rhein-Main | Komplettbad zum Festpreis | Radex', description: 'Badsanierung im Rhein-Main-Gebiet vom SHK-Meisterbetrieb: Komplettbäder, Badmodernisierung & barrierefreie Bäder aus einer Hand. Jetzt Festpreis-Beratung sichern!' },
  '/sanierung/wohnungssanierung': { title: 'Wohnungssanierung Rhein-Main | Festpreis & aus einer Hand | Radex', description: 'Wohnungssanierung im Rhein-Main-Gebiet: Teilsanierung, Kernsanierung & Modernisierung vom Generalunternehmer. Termingerecht, staubarm, zum Festpreis. Jetzt anfragen!' },
  '/sanierung/haussanierung': { title: 'Haussanierung Rhein-Main | Modernisierung aus einer Hand | Radex', description: 'Haussanierung im Rhein-Main-Gebiet: energetische Modernisierung, Grundrissoptimierung, Dach & Fassade vom Generalunternehmer. Festpreis & feste Termine. Jetzt anfragen!' },
  '/sanierung/altbausanierung': { title: 'Altbausanierung Rhein-Main | Denkmalgerecht modernisieren | Radex', description: 'Altbausanierung im Rhein-Main-Gebiet: historischen Charme erhalten, moderne Technik integrieren. Denkmalgerecht, fachgerecht, aus einer Hand. Jetzt Beratung sichern!' },
  '/komplettsanierung-rhein-main': { title: 'Komplettsanierung Rhein-Main | Kernsanierung zum Festpreis | Radex', description: 'Komplettsanierung & Kernsanierung im Rhein-Main-Gebiet vom Generalunternehmer: ein Ansprechpartner, ein Festpreis, ein Zeitplan. Jetzt kostenlose Beratung sichern!' },
  '/generalunternehmer-rhein-main': { title: 'Generalunternehmer Rhein-Main | Sanierung aus einer Hand | Radex', description: 'Generalunternehmer im Rhein-Main-Gebiet: ein Vertragspartner, ein Festpreis, ein Bauleiter für Ihr gesamtes Sanierungsprojekt. 5 Jahre Gewährleistung. Jetzt anfragen!' },
  '/energetische-sanierung-rhein-main': { title: 'Energetische Sanierung Rhein-Main | Förderung & Wärmepumpe | Radex', description: 'Energetische Sanierung im Rhein-Main-Gebiet: Dämmung, Fenster, Wärmepumpe & Förderung (BAFA/KfW) aus einer Hand. Heizkosten senken, Wert steigern. Jetzt Beratung sichern!' },
  '/gewerbe-objektsanierung-rhein-main': { title: 'Gewerbesanierung Rhein-Main | Büro, Praxis & Ladenbau | Radex', description: 'Gewerbe- & Objektsanierung im Rhein-Main-Gebiet: Büroumbau, Praxis, Gastronomie, Einzelhandel & Mieterausbau mit minimaler Betriebsunterbrechung. Jetzt Projekt besprechen!' },
  '/schadstoffsanierung-rhein-main': { title: 'Schimmel- & Schadstoffsanierung Rhein-Main | Zertifiziert | Radex', description: 'Schimmel- & Schadstoffsanierung im Rhein-Main-Gebiet: Ursachenanalyse, Bautrocknung & sichere Beseitigung durch zertifizierte Experten (TRGS 519). Jetzt Befundung anfragen!' },
  '/schimmelsanierung-rhein-main': { title: 'Schimmel- & Schadstoffsanierung Rhein-Main | Zertifiziert | Radex', description: 'Schimmel- & Schadstoffsanierung im Rhein-Main-Gebiet: Ursachenanalyse, Bautrocknung & sichere Beseitigung durch zertifizierte Experten (TRGS 519). Jetzt Befundung anfragen!', canonical: '/schadstoffsanierung-rhein-main' },
  '/asbestsanierung-rhein-main': { title: 'Asbestsanierung Rhein-Main | TRGS 519 zertifiziert | Radex', description: 'Asbestsanierung im Rhein-Main-Gebiet: sichere Entfernung & Entsorgung von Asbest und Gefahrstoffen nach TRGS 519, vollständig dokumentiert. Jetzt Beratung anfragen!' },
  '/heizung-sanitaer-rhein-main': { title: 'Heizung & Sanitär Rhein-Main | Wärmepumpe vom SHK-Meister | Radex', description: 'Heizung & Sanitär im Rhein-Main-Gebiet vom SHK-Meisterbetrieb: Wärmepumpe, Heizungstausch, Fußbodenheizung & Sanitärinstallation inkl. Förderung. Jetzt Beratung sichern!' },
  '/elektroinstallation-rhein-main': { title: 'Elektrotechnik Rhein-Main | Elektroinstallation & Smart Home | Radex', description: 'Elektrotechnik im Rhein-Main-Gebiet: Elektroinstallation, Zählerschrank, Wallbox, PV-Vorbereitung & Smart Home nach VDE. Sicher & zukunftsfähig. Jetzt Beratung sichern!' },
  '/innenausbau-umbau-rhein-main': { title: 'Innenausbau & Umbau Rhein-Main | Trockenbau & Böden | Radex', description: 'Innenausbau & Umbau im Rhein-Main-Gebiet: Trockenbau, Böden, Malerarbeiten, Wanddurchbrüche & Raumgestaltung aus einer Hand. Sauber & fachgerecht. Jetzt anfragen!' },
  '/ueber-uns': { title: 'Über Radex | SHK-Meisterbetrieb im Rhein-Main-Gebiet', description: 'Radex Objektmanagement: SHK-Meisterbetrieb & Generalunternehmer mit über 40 Jahren Erfahrung. Lernen Sie unser Team, unsere Werte und Zertifizierungen kennen.' },
  '/karriere': { title: 'Karriere bei Radex | Jobs im Handwerk im Rhein-Main-Gebiet', description: 'Jobs bei Radex im Rhein-Main-Gebiet: Elektriker, Bauhelfer, Bauleiter & Allrounder (m/w/d). Sicherer Arbeitsplatz, faire Bezahlung, starkes Team. Jetzt unkompliziert bewerben!' },
  '/sanierungskosten-rechner': { title: 'Sanierungskosten Rechner | Bad, Wohnung & Altbau | Radex', description: 'Sanierungskosten Rechner von Radex: Badsanierung Kosten, Wohnungssanierung Kosten und Altbausanierung Kosten kostenlos einschätzen.' },
  '/badsanierung-kosten': { title: 'Badsanierung Kosten | Sanierungskosten Rechner | Radex', description: 'Badsanierung Kosten online berechnen: kostenloser Radex Sanierungskosten Rechner für Bad, Wohnung und Altbau im Rhein-Main-Gebiet.' },
  '/wohnungssanierung-kosten': { title: 'Wohnungssanierung Kosten | Sanierungskosten Rechner | Radex', description: 'Wohnungssanierung Kosten online einschätzen: Radex Sanierungskosten Rechner mit Basis, Komfort und Premium für das Rhein-Main-Gebiet.' },
  '/altbausanierung-kosten': { title: 'Altbausanierung Kosten | Sanierungskosten Rechner | Radex', description: 'Altbausanierung Kosten online berechnen: kostenlose Orientierung für Sanierung, Kernsanierung und Modernisierung im Rhein-Main-Gebiet.' },
  '/impressum': { title: 'Impressum | Radex Objektmanagement GmbH', description: 'Impressum der Radex Objektmanagement GmbH, Odenwaldstraße 61, 63322 Rödermark.' },
  '/datenschutz': { title: 'Datenschutz | Radex Objektmanagement GmbH', description: 'Datenschutzerklärung der Radex Objektmanagement GmbH gemäß DSGVO.' },
  ...cityMeta
};

function escapeAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

// Replace the title/description/canonical/OG in the template head per route.
function applyHead(html, route, meta) {
  const canonicalPath = meta.canonical || route;
  const canonical = `${SITE}${canonicalPath === '/' ? '/' : canonicalPath}`;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`);
  html = html.replace(
    /<meta name="description" content="[\s\S]*?" \/>/,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`
  );
  html = html.replace(
    /<link rel="canonical" href="[\s\S]*?" \/>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[\s\S]*?" \/>/,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[\s\S]*?" \/>/,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[\s\S]*?" \/>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  return html;
}

async function main() {
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  const { render } = await import(path.join(distDir, 'server', 'entry-server.js'));

  let count = 0;
  for (const [route, meta] of Object.entries(routes)) {
    let appHtml = '';
    try {
      appHtml = render(route);
    } catch (err) {
      console.error(`  ✗ render failed for ${route}:`, err.message);
      continue;
    }

    let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    html = applyHead(html, route, meta);

    // Write to dist/<route>/index.html so static hosting serves it directly.
    const outPath =
      route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route, 'index.html');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);
    count++;
  }
  console.log(`Prerendered ${count} routes to static HTML.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
