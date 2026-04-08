import styles from "./crown-classification.module.css";
import { crownLineages, hybridClasses, crownProfiles } from "@/lib/world/crownclassificationcontent";
import { CrownClassificationHero } from "@/components/world/crown-classification/crownclassificationhero";
import { CrownClassificationNav } from "@/components/world/crown-classification/crownclassificationnav";
import { OriginPrincipleSection } from "@/components/world/crown-classification/originprincipalsection";
import { LineageGridSection } from "@/components/world/crown-classification/lineagegridsection";
import { HybridClassificationsSection } from "@/components/world/crown-classification/hybridclassificationsection";
import { TaxonomySection } from "@/components/world/crown-classification/taxonomysection";
// import { CrownProfilesSection } from "@/components/world/crown-classification/CrownProfilesSection";
// import { DoctrineQuoteSection } from "@/components/world/crown-classification/DoctrineQuoteSection";
// import { ArchiveCtaSection } from "@/components/world/crown-classification/ArchiveCtaSection";

export default function CrownClassificationPage() {
  return (
    <main className={styles.classificationPage}>
      <CrownClassificationHero
        lineages={crownLineages}
        hybridClasses={hybridClasses}
      />

      <CrownClassificationNav />
      <OriginPrincipleSection />
      <LineageGridSection lineages={crownLineages} />
      <HybridClassificationsSection hybridClasses={hybridClasses} />
      <TaxonomySection lineages={crownLineages} hybridClasses={hybridClasses} />
      {/* <CrownProfilesSection profiles={crownProfiles} />
      <DoctrineQuoteSection />
      <ArchiveCtaSection /> */}
    </main>
  );
}