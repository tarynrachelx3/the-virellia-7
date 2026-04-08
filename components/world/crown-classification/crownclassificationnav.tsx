import styles from "./crownclassificationnav.module.css";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Lineages", href: "#lineages" },
  { label: "Luminari", href: "#luminari" },
  { label: "Aetherion", href: "#aetherion" },
  { label: "Pyroclast", href: "#pyroclast" },
  { label: "Verdant Weave", href: "#verdant-weave" },
  { label: "Hybrids", href: "#hybrids" },
  { label: "Profiles", href: "#profiles" },
];

export function CrownClassificationNav() {
  return (
    <div className={styles.classificationNav}>
      <div className={styles.classificationNavTrack}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className={styles.navChip}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}