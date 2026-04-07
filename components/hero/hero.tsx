import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/nova-orbit-hero-5.png"
            alt="Nova Vox and Orbit the Oracle"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
        <div className={styles.overlay} />
        <div className={styles.bottomFade} />
      </div>

      <div className={styles.heroContent}>
        <h1>WELCOME TO VIRELLIA—7</h1>
        <p className={styles.heroLead}>
          Dark-pop royalty, emotional collapse, and interplanetary bad decisions.
        </p>
        <p className={styles.heroSubcopy}>
          This is the official portal to the Nova Vox universe. Ready for a descent into dark-pop
        </p>

        <div className={styles.heroButtons}>
          <a href="nova" className={styles.primaryButton}>ENTER NOVA'S WORLD</a>
          <a href="orbit" className={styles.secondaryButton}>ENTER ORBIT'S SPIRAL</a>
          <a href="#transmission" className={styles.ghostButton}>LATEST TRANSMISSION</a>
        </div>

        <p className={styles.heroTagline}>
          Pop star. Prophet. Problem. Pick a portal.
        </p>
      </div>
    </section>
  );
}