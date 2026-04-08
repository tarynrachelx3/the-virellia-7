import styles from "./taxonomysection.module.css";
import type { CrownLineage, HybridClass } from "@/types/crownclassification";
import { TaxonomyDiagram } from "./taxonomydiagram";

interface TaxonomySectionProps {
  lineages: CrownLineage[];
  hybridClasses: HybridClass[];
}

export function TaxonomySection({
  lineages,
  hybridClasses,
}: TaxonomySectionProps) {
  return (
    <section className={styles.taxonomySection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Archive Taxonomy</p>
          <h2 className={styles.title}>The Crown system at a glance.</h2>
        </div>

        <TaxonomyDiagram lineages={lineages} hybridClasses={hybridClasses} />
      </div>
    </section>
  );
}