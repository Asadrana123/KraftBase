import { useState } from 'react';
import { NAV_LINKS } from '../../data/nav';
import Button from '../common/Button';
import { Lightning } from '@phosphor-icons/react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__bar">
        {/* Logo */}
        <a href="#home" className="nav__logo" aria-label="Collectedge home">
          <span className="nav__logo-mark" aria-hidden="true">
            <Lightning size={24} weight="fill" color="#fff" />
          </span>
          <span className="nav__logo-text">Collectedge</span>
        </a>

        {/* Desktop links */}
        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="nav__cta">
          <Button variant="primary">Get in touch</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav__mobile-link"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <Button variant="primary" className="nav__mobile-cta">
          Get in touch
        </Button>
      </div>
    </header>
  );
}
