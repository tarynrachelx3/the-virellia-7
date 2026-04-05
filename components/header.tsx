"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "NOVA VOX", href: "/nova" },
  { label: "ORBIT THE ORACLE", href: "/orbit" },
  { label: "MUSIC", href: "/music" },
  { label: "EPISODES", href: "/episodes" },
  { label: "LORE", href: "/lore" },
  { label: "MERCH", href: "/merch" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-bg" />

      <div className="nav-shell">
        <div className="nav-inner">
          <Link href="/" className="brand" aria-label="Virellia-7 home" onClick={closeMenu}>
            <Image
              src="/images/header/virellia7-wordmark.png"
              alt="Virellia-7"
              width={420}
              height={96}
              priority
              className="brand-logo"
            />
          </Link>

          <nav className="main-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="icon-button" type="button" aria-label="Portal">
            <Image
                src="/images/header/virellia7-crest.png"
                alt=""
                width={48}
                height={48}
                className="corner-icon"
            />
            </button>

            <button
              className={`hamburger-button ${menuOpen ? "is-open" : ""}`}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className="announcement-bar">
          <span className="announcement-label">NEW TRANSMISSION:</span>
          <Link href="/music/low-gravity-problems" className="announcement-highlight">
            “LOW GRAVITY PROBLEMS”
          </Link>
          <span className="announcement-text">OUT NOW</span>
          <Link href="/music/low-gravity-problems" className="announcement-watch">
            Watch Now
          </Link>
        </div>
      </div>

      <div
        className={`mobile-menu-backdrop ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <aside
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-top">
          <span className="mobile-menu-label">Navigation</span>
          <button className="mobile-close-button" type="button" onClick={closeMenu} aria-label="Close menu">
            ×
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="mobile-nav-link" onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <p className="mobile-menu-kicker">Current transmission</p>
          <Link href="/music/low-gravity-problems" className="mobile-feature-card" onClick={closeMenu}>
            <span className="mobile-feature-label">Low Gravity Problems</span>
            <span className="mobile-feature-meta">Out now</span>
          </Link>
        </div>
      </aside>
    </header>
  );
}