import styles from "./hybridcard.module.css";
import type { HybridClass } from "@/types/crownclassification";
import { HybridCard } from "./hybridcard";
import { HybridCompareRow } from "./hybridcomparerow";

interface HybridClassificationsSectionProps {
  hybridClasses: HybridClass[];
}

export function HybridClassificationsSection({
  hybridClasses,
}: HybridClassificationsSectionProps) {
  return (
    <section id="hybrids" className={styles.hybridSection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Hybrid Classifications</p>
          <h2 className={styles.title}>Not all hybrids are shaped by the same inheritance.</h2>
        </div>

        <div className={styles.hybridGrid}>
          {hybridClasses.map((hybrid) => (
            <HybridCard key={hybrid.key} hybrid={hybrid} />
          ))}
        </div>

        <HybridCompareRow hybridClasses={hybridClasses} />
      </div>
    </section>
  );
}