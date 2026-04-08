import styles from "./taxonomydiagram.module.css";
import type { CrownLineage, HybridClass } from "@/types/crownclassification";

interface TaxonomyDiagramProps {
  lineages: CrownLineage[];
  hybridClasses: HybridClass[];
}

export function TaxonomyDiagram({
  lineages,
  hybridClasses,
}: TaxonomyDiagramProps) {
  return (
    <div className={styles.taxonomyDiagram}>
      <div className={styles.topNode}>Crown-Bound Organisms</div>

      <div className={styles.branchRow}>
        <div className={styles.branchColumn}>
          <div className={styles.branchNode}>Pure Crown Lineages</div>
          <div className={styles.childGrid}>
            {lineages.map((lineage) => (
              <div key={lineage.key} className={styles.childNode}>
                {lineage.designation} / {lineage.name}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.branchColumn}>
          <div className={styles.branchNode}>Hybrid Classes</div>
          <div className={styles.childGrid}>
            {hybridClasses.map((hybrid) => (
              <div key={hybrid.key} className={styles.childNode}>
                {hybrid.designation} / {hybrid.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}