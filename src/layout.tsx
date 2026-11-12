import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import Header, { Theme } from './components/Header';
import Home from './Home';
import Footer from './components/Footer';
import { CropMarks } from './components/Marks';

// Stored values stay 'light' / 'dark' so returning visitors keep their choice.
const readTheme = (): Theme => {
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') return 'screen';
    if (stored === 'light') return 'print';
  } catch {
    /* storage blocked */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'screen' : 'print';
};

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'screen');
  root.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'screen' ? '#0b0b0d' : '#e6e4de');
};

export default function Layout() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => applyTheme(theme), [theme]);

  const changeTheme = useCallback(
    (next: Theme) => {
      if (next === theme) return;
      try {
        localStorage.setItem('theme', next === 'screen' ? 'dark' : 'light');
      } catch {
        /* storage blocked: the choice lasts for this visit */
      }
      const commit = () => {
        flushSync(() => setTheme(next));
        applyTheme(next);
      };
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
      if (doc.startViewTransition && !reduce) doc.startViewTransition(commit);
      else commit();
    },
    [theme],
  );

  return (
    <div className="press">
      <a className="skip" href="#experience">
        Skip to content
      </a>
      <Header theme={theme} onTheme={changeTheme} />
      <main className="stock" id="top">
        <CropMarks className="crops--sheet" />
        <Home />
      </main>
      <Footer />
    </div>
  );
}
