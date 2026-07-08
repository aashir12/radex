// Maps legacy/long-tail URLs from the old radex-objektmanagement.de site
// to the closest equivalent page on the new site, to preserve SEO rankings.

// Exact-match redirects for pages with no obvious keyword match.
const exactRedirects = {
  '/kontakt': '/#kontakt',
  '/dienstleistungen': '/leistungen',
  '/ratgeber': '/sanierung-rhein-main',
  '/radex-live': '/#beispiele',
  '/gewerbeumbau': '/gewerbe-objektsanierung-rhein-main',
  '/umbau': '/innenausbau-umbau-rhein-main',
  '/raumoptimierung': '/innenausbau-umbau-rhein-main',
  '/elektrotechnik-rhein-main': '/elektroinstallation-rhein-main',
  '/badsanierung': '/badsanierung-rhein-main',
  '/wohnungssanierung': '/sanierung/wohnungssanierung',
  '/energetische-sanierung': '/energetische-sanierung-rhein-main',
  '/badsanierung-roedermark': '/sanierung-roedermark',
  '/haus-sanieren-wohnungssanierung-darmstadt': '/haus-wohnung-bad-modernisieren-darmstadt',
};

// Ordered keyword -> destination rules, checked in order for any URL
// not covered by exactRedirects or the main route table.
const keywordRedirects = [
  // Bathroom renovation long-tail variants
  { test: (p) => p.startsWith('/badsanierung') || p.startsWith('/komplettbadsanierung') || p.startsWith('/badmodernisierung') || p.startsWith('/badrenovierung') || p.startsWith('/gaeste-wc') || p.startsWith('/barrierefreies-bad') || p.startsWith('/kleines-bad') || p.startsWith('/dusche-statt-badewanne') || p.startsWith('/badewanne-austauschen') || p.startsWith('/badplanung') || p.startsWith('/bad-soforthilfe') || p.startsWith('/schnelle-badsanierung') || p.startsWith('/badsanierung/'), to: '/badsanierung-rhein-main' },

  // Apartment / house / historic building renovation guides
  { test: (p) => p.startsWith('/sanierung/wohnung') || p === '/sanierung/wohnung-sanieren-kosten', to: '/sanierung/wohnungssanierung' },
  { test: (p) => p.startsWith('/sanierung/haus'), to: '/sanierung/haussanierung' },
  { test: (p) => p.startsWith('/sanierung/altbau'), to: '/sanierung/altbausanierung' },

  // General contractor / complete renovation
  { test: (p) => p.startsWith('/generalunternehmer') || p.startsWith('/bauleitung-projektsteuerung'), to: '/generalunternehmer-rhein-main' },
  { test: (p) => p.startsWith('/komplettsanierung') || p.startsWith('/kernsanierung') || p.startsWith('/teilsanierung'), to: '/komplettsanierung-rhein-main' },

  // Electrical
  { test: (p) => p.startsWith('/elektro') || p.startsWith('/altbau-elektrik') || p.startsWith('/sicherungskasten'), to: '/elektroinstallation-rhein-main' },

  // Heating & plumbing
  { test: (p) => p.startsWith('/heizung') || p.startsWith('/waermepumpe') || p.startsWith('/sanitaerinstallation'), to: '/heizung-sanitaer-rhein-main' },

  // Interior construction
  { test: (p) => p.startsWith('/innenausbau') || p.startsWith('/trockenbau') || p.startsWith('/wand-entfernen'), to: '/innenausbau-umbau-rhein-main' },

  // Energy efficiency
  { test: (p) => p.startsWith('/energetische-sanierung') || p.startsWith('/energieeffizienz') || p.startsWith('/sanierung-foerderung'), to: '/energetische-sanierung-rhein-main' },

  // Mold / asbestos / hazardous materials
  { test: (p) => p.startsWith('/schimmelsanierung'), to: '/schimmelsanierung-rhein-main' },
  { test: (p) => p.startsWith('/asbestsanierung'), to: '/asbestsanierung-rhein-main' },
  { test: (p) => p.startsWith('/schadstoffsanierung'), to: '/schadstoffsanierung-rhein-main' },

  // Fast/emergency renovation
  { test: (p) => p.startsWith('/sanierungs-soforthilfe') || p.startsWith('/schnellsanierung'), to: '/sanierung-rhein-main' },

  // Commercial / office renovation
  { test: (p) => p.startsWith('/gewerbe') || p.startsWith('/bueroumbau') || p.startsWith('/mieterausbau'), to: '/gewerbe-objektsanierung-rhein-main' },

  // City pages we don't host individually go to the service area hub
  { test: (p) => p.startsWith('/sanierung-') || p.startsWith('/badsanierung-') || /^\/(haus|wohneigentum|immobilie|eigentumswohnung|villa|reihenhaus|einfamilienhaus|haus-wohnung)[-_a-z]*(darmstadt|kelkheim|bad-soden|friedrichsdorf|bad-vilbel|hattersheim|karben|kelsterbach|moerfelden-walldorf|obertshausen)/.test(p), to: '/einsatzgebiete-rhein-main' },

  // Ratgeber guide articles - send to the relevant hub by topic keyword
  { test: (p) => p.startsWith('/ratgeber/badsanierung') || p.startsWith('/ratgeber/kleines-bad'), to: '/badsanierung-rhein-main' },
  { test: (p) => p.startsWith('/ratgeber/heizung') || p.startsWith('/ratgeber/waermepumpe') || p.startsWith('/ratgeber/sanitaer'), to: '/heizung-sanitaer-rhein-main' },
  { test: (p) => p.startsWith('/ratgeber/elektro'), to: '/elektroinstallation-rhein-main' },
  { test: (p) => p.startsWith('/ratgeber/energie'), to: '/energetische-sanierung-rhein-main' },
  { test: (p) => p.startsWith('/ratgeber/generalunternehmer') || p.startsWith('/ratgeber/komplettsanierung') || p.startsWith('/ratgeber/sanierung-mit') || p.startsWith('/ratgeber/bauleitung'), to: '/generalunternehmer-rhein-main' },
  { test: (p) => p.startsWith('/ratgeber/innenausbau') || p.startsWith('/ratgeber/raumaufteilung') || p.startsWith('/ratgeber/wand-entfernen'), to: '/innenausbau-umbau-rhein-main' },
  { test: (p) => p.startsWith('/ratgeber/gewerbe'), to: '/gewerbe-objektsanierung-rhein-main' },
  { test: (p) => p.startsWith('/ratgeber/schimmel'), to: '/schadstoffsanierung-rhein-main' },
  { test: (p) => p.startsWith('/ratgeber/wohnung'), to: '/sanierung/wohnungssanierung' },
  { test: (p) => p.startsWith('/ratgeber/haus'), to: '/sanierung/haussanierung' },
  { test: (p) => p.startsWith('/ratgeber/'), to: '/sanierung-rhein-main' },
];

export function resolveLegacyRedirect(pathname) {
  if (exactRedirects[pathname]) return exactRedirects[pathname];
  const rule = keywordRedirects.find((r) => r.test(pathname));
  return rule ? rule.to : '/';
}
