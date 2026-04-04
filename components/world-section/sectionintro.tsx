import styles from "./sectionintro.module.css";

type SectionIntroProps = {
  eyebrow: string;
  description: string;
};

export default function SectionIntro({
  eyebrow,
  description,
}: SectionIntroProps) {
  return (
    <div className={styles.intro}>
      <h2 className={styles.title}>{eyebrow}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}