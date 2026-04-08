import styles from "./lineageexpandedpanel.module.css";
import type { CrownLineage } from "@/types/crownclassification";

interface LineageExpandedPanelProps {
  lineage: CrownLineage;
}

export function LineageExpandedPanel({ lineage }: LineageExpandedPanelProps) {
  return (
    <div className={`${styles.lineageExpandedPanel} ${styles[lineage.accentClass] ?? ""}`}>
      <div className={styles.visualColumn}>
        <div className={styles.visualFrame}>
          <div className={styles.visualGlow} />
        </div>
      </div>

      <div className={styles.contentColumn}>
        <p className={styles.designation}>
          {lineage.designation} / {lineage.energyType}
        </p>
        <h3 className={styles.name}>{lineage.name}</h3>
        <p className={styles.region}>Primary Region: {lineage.region}</p>

        <div className={styles.contentGrid}>
          <div className={styles.contentBlock}>
            <h4>Defining Traits</h4>
            <ul>
              {lineage.traits.map((trait) => (
                <li key={trait}>{trait}</li>
              ))}
            </ul>
          </div>

          <div className={styles.contentBlock}>
            <h4>Role in Civilization</h4>
            <ul>
              {lineage.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>

          <div className={styles.contentBlock}>
            <h4>Archive Notes</h4>
            <p>{lineage.archiveNotes}</p>
          </div>

          <div className={styles.contentBlock}>
            <h4>Known Figures</h4>
            <ul>
              {lineage.knownFigures.map((figure) => (
                <li key={figure.name}>
                  <a href={figure.href}>{figure.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}