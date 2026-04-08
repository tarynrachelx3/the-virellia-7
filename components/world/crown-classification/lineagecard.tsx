import styles from "./lineagecard.module.css";
import type { CrownLineage } from "@/types/crownclassification";

interface LineageCardProps {
  lineage: CrownLineage;
  isActive?: boolean;
  onSelect?: () => void;
}

export function LineageCard({
  lineage,
  isActive = false,
  onSelect,
}: LineageCardProps) {
  return (
    <button
      id={lineage.key}
      type="button"
      className={`${styles.lineageCard} ${isActive ? styles.active : ""} ${styles[lineage.accentClass] ?? ""}`}
      onClick={onSelect}
    >
      <div className={styles.lineageCardHeader}>
        <span className={styles.designation}>{lineage.designation}</span>
        <span className={styles.region}>{lineage.region}</span>
      </div>

      <div className={styles.lineageCardVisual}>
        <div className={styles.visualAura} />
      </div>

      <div className={styles.lineageCardBody}>
        <h3 className={styles.name}>{lineage.name}</h3>
        <p className={styles.energyType}>{lineage.energyType}</p>
        <p className={styles.summary}>{lineage.summary}</p>

        <ul className={styles.lineageTraits}>
          {lineage.traits.slice(0, 4).map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>

        <div className={styles.lineageFooter}>
          <span className={styles.archiveLink}>Open Archive</span>
        </div>
      </div>
    </button>
  );
}