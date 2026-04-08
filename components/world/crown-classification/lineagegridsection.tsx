"use client";

import { useMemo, useState } from "react";
import styles from "./lineagegridsection.module.css";
import type { CrownLineage } from "@/types/crownclassification";
import { LineageCard } from "./lineagecard";
import { LineageExpandedPanel } from "./lineageexpandedpanel";

interface LineageGridSectionProps {
  lineages: CrownLineage[];
}

export function LineageGridSection({ lineages }: LineageGridSectionProps) {
  const [activeKey, setActiveKey] = useState<string>(lineages[0]?.key ?? "");
  const activeLineage = useMemo(
    () => lineages.find((lineage) => lineage.key === activeKey) ?? lineages[0],
    [activeKey, lineages]
  );

  return (
    <section id="lineages" className={styles.lineageGridSection}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Primary Crown Lineages</p>
          <h2 className={styles.title}>Four dominant adaptations. One Crown system.</h2>
        </div>

        <div className={styles.lineageGrid}>
          {lineages.map((lineage) => (
            <LineageCard
              key={lineage.key}
              lineage={lineage}
              isActive={lineage.key === activeKey}
              onSelect={() => setActiveKey(lineage.key)}
            />
          ))}
        </div>

        {activeLineage ? <LineageExpandedPanel lineage={activeLineage} /> : null}
      </div>
    </section>
  );
}