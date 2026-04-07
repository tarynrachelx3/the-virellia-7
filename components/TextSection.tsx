import styles from "./TextSection.module.css";

type TextSectionProps = {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
};

export default function TextSection({ id, label, title, children }: TextSectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionLabel}>{label}</p>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
}