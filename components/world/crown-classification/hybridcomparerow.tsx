import styles from "./hybridcomparerow.module.css";
import type { HybridClass } from "@/types/crownclassification";

interface HybridCompareRowProps {
  hybridClasses: HybridClass[];
}

export function HybridCompareRow({ hybridClasses }: HybridCompareRowProps) {
  if (hybridClasses.length < 2) return null;

  const [left, right] = hybridClasses;

  return (
    <div className={styles.hybridCompareRow}>
      <div className={styles.compareCard}>
        <h4>{left.name}</h4>
        <ul>
          <li>Fully Virellian</li>
          <li>Natural lineage variance</li>
          <li>Rare</li>
          <li>{left.knownExample.name}</li>
        </ul>
      </div>

      <div className={styles.compareCard}>
        <h4>{right.name}</h4>
        <ul>
          <li>Partially off-world</li>
          <li>Dual-world inheritance</li>
          <li>Extremely rare</li>
          <li>{right.knownExample.name}</li>
        </ul>
      </div>
    </div>
  );
}