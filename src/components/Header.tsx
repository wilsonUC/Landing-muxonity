import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header" id="inicio">
      <div className="container nav-wrap">
        <a href="#inicio" className="brand" onClick={closeMenu}>
          <span className="brand-dot" aria-hidden="true">
            M
          </span>
          <span>Muxonity</span>
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          aria-controls="nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          Menu
        </button>
        <nav className={`nav${menuOpen ? ' open' : ''}`} id="nav" aria-label="Principal">
          <a href="#beneficios" onClick={closeMenu}>
            Beneficios
          </a>
          <a href="#funcionalidades" onClick={closeMenu}>
            Funcionalidades
          </a>
          <a href="#demo" onClick={closeMenu}>
            Demo
          </a>
          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
