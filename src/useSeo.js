import { useEffect } from 'react';

const SITE_URL = 'https://www.radex-objektmanagement.de';
const DEFAULT_OG_IMAGE = `${SITE_URL}/updated_logo.png`;

// Upsert a <meta> tag by name or property attribute.
function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

// Build a FAQPage JSON-LD object from a list of { q, a }.
export function buildFaqSchema(faqs) {
  if (!faqs || !faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
}

// Build a Service JSON-LD object linked to the organization.
export function buildServiceSchema({ name, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: 'Rhein-Main-Gebiet'
  };
}

/**
 * Per-page SEO. Sets title, meta description, canonical, Open Graph tags,
 * and optionally injects JSON-LD structured data (cleaned up on unmount).
 *
 * @param {object} opts
 * @param {string} opts.title        full <title> text
 * @param {string} opts.description  meta description
 * @param {string} opts.path         absolute path, e.g. "/badsanierung-rhein-main"
 * @param {string} [opts.image]      OG image URL
 * @param {Array<object>} [opts.jsonLd] array of structured-data objects
 */
export default function useSeo({ title, description, path, image, jsonLd }) {
  useEffect(() => {
    const url = `${SITE_URL}${path || ''}`;
    const ogImage = image || DEFAULT_OG_IMAGE;

    if (title) document.title = title;
    setMeta('name', 'description', description);
    setCanonical(url);

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:type', 'website');

    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // Inject page-specific JSON-LD, tagged so we can remove it on unmount.
    const nodes = [];
    const blocks = (jsonLd || []).filter(Boolean);
    blocks.forEach((data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
      nodes.push(script);
    });

    return () => {
      nodes.forEach((n) => n.remove());
    };
  }, [title, description, path, image, jsonLd]);
}
