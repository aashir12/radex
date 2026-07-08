import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Render the app for a given URL path to an HTML string (used by the
// prerender script at build time). The custom router reads `initialPath`
// instead of window.location during SSR.
export function render(path) {
  return renderToString(<App location={path} />);
}
