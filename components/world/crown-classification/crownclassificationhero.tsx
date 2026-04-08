import styles from "./crownclassificationhero.module.css";
import type { CrownLineage, HybridClass } from "@/types/crownclassification";

interface CrownClassificationHeroProps {
  lineages: CrownLineage[];
  hybridClasses: HybridClass[];
}

export function CrownClassificationHero({
  lineages,
  hybridClasses,
}: CrownClassificationHeroProps) {
  return (
    <section className={styles.classificationHero}>
      <div className={styles.classificationHeroInner}>
        <div className={styles.classificationHeroCopy}>
          <p className={styles.archiveLabel}>Crown Archive</p>
          <p className={styles.archiveSubLabel}>
            Aurelios Index / Biological Classification
          </p>

          <h1 className={styles.headline}>
            Life on Virellia-7 was shaped by light.
          </h1>

          <p className={styles.description}>
            All sentient beings of Virellia-7 are Crown-Bound organisms,
            classified by environmental adaptation to Aurelios Prime.
          </p>

          <div className={styles.ctaRow}>
            <a href="#lineages" className={styles.primaryButton}>
              View Crown Lineages
            </a>
            <a href="#hybrids" className={styles.secondaryButton}>
              Inspect Hybrid Classes
            </a>
          </div>

          <div className={styles.metaRow}>
            <span className={styles.metaPill}>{lineages.length} Primary Crown Lineages</span>
            <span className={styles.metaPill}>{hybridClasses.length} Hybrid Classes</span>
            <span className={styles.metaPill}>Royal Archive Approved</span>
          </div>
        </div>

        <div className={styles.classificationHeroDiagram}>
          <div className={styles.diagramCenter}>Crown-Bound Organisms</div>
          <div className={styles.diagramOrbit}>
            {lineages.map((lineage) => (
              <div key={lineage.key} className={styles.diagramNode}>
                <span>{lineage.name}</span>
              </div>
            ))}
            {hybridClasses.map((hybrid) => (
              <div key={hybrid.key} className={styles.diagramHybridNode}>
                <span>{hybrid.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}