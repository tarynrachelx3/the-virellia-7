import styles from "./page.module.css";

const systemStatuses = [
  { label: "Signal Integrity", value: "72%" },
  { label: "Atmospheric Interference", value: "Moderate" },
  { label: "Portal Stability", value: "Initializing" },
];

const socialLinks = [
  { label: "TikTok", href: "https://www.tiktok.com/@the.novavox" },
  { label: "Instagram", href: "https://www.instagram.com/the.novavox" },
  { label: "Spotify", href: "https://open.spotify.com/artist/5COh2pyFUIFcKL5HFVubvd" },
  { label: "YouTube", href: "https://www.youtube.com/@the.novavox" },
];

export default function ComingSoonPage() {
  return (
    <main className={styles.pageShell}>
      <div className={styles.backgroundGlowLeft} />
      <div className={styles.backgroundGlowRight} />
      <div className={styles.backgroundPlanetLarge} />
      <div className={styles.backgroundPlanetSmall} />
      <div className={styles.scanLines} />
      <div className={styles.noiseOverlay} />

      <header className={styles.topBar}>
        <div className={styles.brandLockup}>
          <span className={styles.wordmark}>VIRELLIA-7</span>
        </div>

        <div className={styles.topBarMeta}>
          <span className={styles.statusPill}>SIGNAL STATUS: UNSTABLE</span>
          <span className={styles.accessLabel}>PORTAL ACCESS // RESTRICTED</span>
        </div>
      </header>

      <section className={styles.heroSection} aria-labelledby="coming-soon-heading">
        <div className={styles.panel}>
          <div className={styles.panelChromeTop} />
          <div className={styles.panelChromeBottom} />

          <p className={styles.eyebrow}>
            INCOMING TRANSMISSION // PORTAL INITIALIZATION IN PROGRESS
          </p>

          <h1 id="coming-soon-heading" className={styles.headline}>
            TRANSMISSION OPENING SOON
          </h1>

          <p className={styles.description}>
            Dark-pop royalty, emotional collapse, and interplanetary bad decisions are
            still calibrating. Join the transmission list and return when the signal clears.
          </p>

          <div className={styles.statusModule} aria-label="System status">
            {systemStatuses.map((item) => (
              <div key={item.label} className={styles.statusRow}>
                <span className={styles.statusLabel}>{item.label}</span>
                <span className={styles.statusValue}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* <form className={styles.formBlock}>
            <div className={styles.inputRow}>
              <label htmlFor="email" className={styles.srOnly}>
                Enter your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className={styles.emailInput}
              />
              <button type="submit" className={styles.submitButton}>
                JOIN TRANSMISSION
              </button>
            </div>

            <p className={styles.formNote}>
              No spam. Only transmissions worth receiving.
            </p>
          </form> */}

          <div className={styles.socialBlock}>
            <p className={styles.socialLabel}>UNTIL FULL ACCESS IS RESTORED</p>

            <nav className={styles.socialNav} aria-label="Social links">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} className={styles.socialLink}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <p className={styles.easterEgg}>
            First contact has been delayed for aesthetic reasons.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <span className={styles.footerText}>VIRELLIA-7 // SIGNAL LOCK ACTIVE</span>
      </footer>
    </main>
  );
}