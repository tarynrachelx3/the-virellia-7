import styles from "./hybridcard.module.css";
import type { HybridClass } from "@/types/crownclassification";

interface HybridCardProps {
  hybrid: HybridClass;
}

export function HybridCard({ hybrid }: HybridCardProps) {
  return (
    <article className={`${styles.hybridCard} ${styles[hybrid.accentClass] ?? ""}`}>
      <div className={styles.visualPanel}>
        <div className={styles.visualGlow} />
      </div>

      <div className={styles.contentPanel}>
        <p className={styles.designation}>{hybrid.designation}</p>
        <h3 className={styles.name}>{hybrid.name}</h3>
        <p className={styles.summary}>{hybrid.summary}</p>

        <ul className={styles.traits}>
          {hybrid.traits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>

        <div className={styles.noteBlock}>
          <h4>Classification Note</h4>
          <p>{hybrid.classificationNote}</p>
        </div>

        <a href={hybrid.knownExample.href} className={styles.exampleLink}>
          Known Example: {hybrid.knownExample.name}
        </a>
      </div>
    </article>
  );
}