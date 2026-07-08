import { useState, useEffect, createContext, useContext } from 'react';

const RouterContext = createContext({ path: '/', navigate: () => {} });

// SSR-safe: there is no window during prerendering, so accept an
// `initialPath` (passed by the server entry) and fall back to the real
// location only in the browser.
export function BrowserRouter({ children, initialPath }) {
  const [path, setPath] = useState(
    initialPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/')
  );

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const scrollToHash = (hash) => {
    if (typeof window === 'undefined') return;
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        window.scrollTo({ top: elementPosition + window.pageYOffset - headerOffset, behavior: 'smooth' });
      }
    }, 100);
  };

  const navigate = (to) => {
    if (to.includes('#')) {
      const [routePath, hash] = to.split('#');
      const targetPath = routePath || '/';

      if (path !== targetPath) {
        window.history.pushState({}, '', targetPath);
        setPath(targetPath);
      }

      scrollToHash(hash);
      return;
    }

    window.history.pushState({}, '', to);
    setPath(to);
  };

  return (
    <RouterContext.Provider value={{ path, navigate, setPath, scrollToHash }}>
      {children}
    </RouterContext.Provider>
  );
}

export function Routes({ children, fallback }) {
  const { path } = useContext(RouterContext);
  const items = Array.isArray(children) ? children : [children];
  const match = items.find((child) => child && child.props.path === path);
  if (match) return match;
  return fallback || null;
}

export function Route({ path: routePath, element }) {
  const { path } = useContext(RouterContext);
  return path === routePath ? element : null;
}

export function Redirect({ to }) {
  const { setPath, scrollToHash } = useContext(RouterContext);
  useEffect(() => {
    const [routePath, hash] = to.split('#');
    const targetPath = routePath || '/';
    window.history.replaceState({}, '', to.includes('#') ? targetPath : to);
    setPath(targetPath);
    if (hash) scrollToHash(hash);
  }, [to]);
  return null;
}

export function Link({ to, children, className, onClick, style }) {
  const { navigate } = useContext(RouterContext);
  return (
    <a 
      href={to} 
      className={className} 
      style={style}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick(e);
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

export function useLocation() {
  const { path } = useContext(RouterContext);
  return { pathname: path };
}

export function useNavigate() {
  const { navigate } = useContext(RouterContext);
  return navigate;
}
