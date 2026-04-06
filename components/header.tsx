"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavItem =
  | { label: string; href: string }
  | {
      label: string;
      children: { label: string; href: string; blurb?: string }[];
    };

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "CHARACTERS",
    children: [
      {
        label: "NOVA VOX",
        href: "/nova",
        blurb: "Alien pop sovereign. Velvet menace. Center of gravity.",
      },
      {
        label: "ORBIT THE ORACLE",
        href: "/orbit",
        blurb: "Romantic ruin. Prophet of emotional collapse.",
      },
      {
        label: "MAIRA MOON",
        href: "/maira",
        blurb: "Human signal. Soft static. Close orbit.",
      },
    ],
  },
  { label: "MUSIC", href: "/music" },
  { label: "EPISODES", href: "/episodes" },
  { label: "LORE", href: "/lore" },
  { label: "MERCH", href: "/merch" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCharactersOpen, setMobileCharactersOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileCharactersOpen(false);
  };

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
            {navItems.map((item) =>
              "href" in item ? (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="nav-dropdown">
                  <button
                    type="button"
                    className="nav-link nav-trigger"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {item.label}
                  </button>

                  <div className="nav-mega-panel">
                    <div className="nav-mega-header">
                      <span className="nav-mega-kicker">Characters</span>
                      <p className="nav-mega-copy">
                        Main entities and close orbit.
                      </p>
                    </div>

                    <div className="nav-mega-grid">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="character-card">
                          <span className="character-card-name">{child.label}</span>
                          {child.blurb ? (
                            <span className="character-card-blurb">{child.blurb}</span>
                          ) : null}
                          <span className="character-card-cta">Enter</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </nav>

          <div className="nav-actions">
            <button className="icon-button desktop-icon-button" type="button" aria-label="Portal">
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
          <button
            className="mobile-close-button"
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link href="/" className="mobile-nav-link" onClick={closeMenu}>
            HOME
          </Link>

          <div className="mobile-nav-group">
            <button
              type="button"
              className={`mobile-nav-link mobile-nav-toggle ${
                mobileCharactersOpen ? "is-open" : ""
              }`}
              aria-expanded={mobileCharactersOpen}
              onClick={() => setMobileCharactersOpen((prev) => !prev)}
            >
              <span>CHARACTERS</span>
              <span className="mobile-nav-toggle-icon">{mobileCharactersOpen ? "−" : "+"}</span>
            </button>

            <div className={`mobile-subnav ${mobileCharactersOpen ? "is-open" : ""}`}>
              <Link href="/nova" className="mobile-subnav-link" onClick={closeMenu}>
                NOVA VOX
              </Link>
              <Link href="/orbit" className="mobile-subnav-link" onClick={closeMenu}>
                ORBIT THE ORACLE
              </Link>
              <Link href="/maira" className="mobile-subnav-link" onClick={closeMenu}>
                MAIRA MOON
              </Link>
            </div>
          </div>

          <Link href="/music" className="mobile-nav-link" onClick={closeMenu}>
            MUSIC
          </Link>
          <Link href="/episodes" className="mobile-nav-link" onClick={closeMenu}>
            EPISODES
          </Link>
          <Link href="/lore" className="mobile-nav-link" onClick={closeMenu}>
            LORE
          </Link>
          <Link href="/merch" className="mobile-nav-link" onClick={closeMenu}>
            MERCH
          </Link>
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