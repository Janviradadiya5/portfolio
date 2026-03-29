import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/siteData";

// Black Instagram SVG icon for mobile menu
const InstaIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="7" fill="black"/>
    <path d="M19.5 9.5C19.5 9.77614 19.2761 10 19 10C18.7239 10 18.5 9.77614 18.5 9.5C18.5 9.22386 18.7239 9 19 9C19.2761 9 19.5 9.22386 19.5 9.5Z" fill="white"/>
    <rect x="8" y="8" width="12" height="12" rx="5" stroke="white" strokeWidth="2"/>
    <circle cx="14" cy="14" r="3" stroke="white" strokeWidth="2"/>
  </svg>
);

function Header({ light = false, className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header ${light ? "site-header--light" : ""} ${className}`}>
      <div className="site-header__inner">
        {/* Desktop nav/actions/brand: nav left, brand center, actions right */}
        <nav className="site-nav desktop-nav" style={{ justifySelf: 'start' }}>
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `site-nav__link ${isActive ? "site-nav__link--active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/" className="brand-mark small-text" aria-label="Home" style={{ justifySelf: 'center' }}>
          PORTFOLIO
          <span>JANVI</span>
        </Link>
        <div className="site-header__actions desktop-actions" style={{ justifySelf: 'end' }}>
          <a className="ig-dot" href="#" aria-label="Instagram">
            <span className="ig-dot__inner" aria-hidden="true" />
          </a>
          <Link to="/contact-us" className="btn btn--gold site-header__cta">
            Get In Touch
          </Link>
        </div>

        {/* Mobile hamburger menu button */}
        <button
          className={`mobile-menu-btn${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Hamburger icon (3 lines) and cross (X) */}
          <span className="menu-icon">
            <span className="bar top" />
            <span className="bar middle" />
            <span className="bar bottom" />
          </span>
        </button>

        {/* Mobile slide-down menu overlay */}
        {open && (
          <div className="mobile-menu-overlay">
            <nav className="mobile-menu-nav">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `mobile-menu-link${isActive ? " active" : ""}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mobile-menu-bottom">
                <a className="mobile-insta" href="#" aria-label="Instagram">
                  <InstaIcon />
                </a>
                <Link to="/contact-us" className="mobile-menu-cta">
                  Get In Touch
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
