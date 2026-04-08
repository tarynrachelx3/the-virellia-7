import styles from "./originprincipalsection.module.css";

export function OriginPrincipleSection() {
  return (
    <section id="overview" className={styles.originSection}>
      <div className={styles.originPanel}>
        <p className={styles.eyebrow}>Origin Principle</p>
        <h2 className={styles.title}>
          Biological identity on Virellia-7 is determined by light adaptation,
          not species separation.
        </h2>

        <div className={styles.originStats}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Stellar Source</span>
            <strong className={styles.statValue}>Aurelios Prime</strong>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Classification Basis</span>
            <strong className={styles.statValue}>Environmental Evolution</strong>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Planetary Designation</span>
            <strong className={styles.statValue}>Crown-Bound Organisms</strong>
          </div>
        </div>
      </div>
    </section>
  );
}