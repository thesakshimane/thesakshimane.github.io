import { useState } from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { navigation, themeControls } from './data/portfolioContent';
import Code from './pages/Code/Code';
import PrimusTechsystems from './pages/Experience/PrimusTechsystems';
import Home from './pages/Home/Home';
import Misc from './pages/Misc/Misc';
import Write from './pages/Write/Write';

function App() {
  const [theme, setTheme] = useState('sun');

  return (
    <div className={`app app--${theme}`}>
      <header className="site-header">
        <nav aria-label="Primary navigation" className="site-nav">
          {navigation.map(({ label, to }) => (
            <NavLink
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              end={to === '/'}
              key={to}
              to={to}
            >
              {label}
            </NavLink>
          ))}
          <div aria-label="Colour theme" className="theme-switcher" role="group">
            <button
              aria-label={themeControls.sun.label}
              aria-pressed={theme === 'sun'}
              className={theme === 'sun' ? 'is-selected' : undefined}
              onClick={() => setTheme('sun')}
              title={themeControls.sun.title}
              type="button"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3.5" />
                <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M19.07 4.93 17.3 6.7M6.7 17.3l-1.77 1.77" />
              </svg>
            </button>
            <button
              aria-label={themeControls.dark.label}
              aria-pressed={theme === 'dark'}
              className={theme === 'dark' ? 'is-selected' : undefined}
              onClick={() => setTheme('dark')}
              title={themeControls.dark.title}
              type="button"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Write />} path="/write" />
        <Route element={<Code />} path="/code" />
        <Route element={<PrimusTechsystems />} path="/experience/primus-techsystems" />
        <Route element={<Misc />} path="/misc" />
        <Route element={<Navigate replace to="/write" />} path="/blogs/*" />
        <Route element={<Home />} path="*" />
      </Routes>
    </div>
  );
}

export default App;
