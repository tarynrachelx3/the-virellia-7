import FeatureCard from "./featurecard";
import styles from "./transmissioncard.module.css";

type TransmissionCardProps = {
  eyebrow: string;
  title: string;
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
  tertiaryLabel: string;
  backgroundSrc?: string;
};

export default function TransmissionCard({
  eyebrow,
  title,
  body,
  primaryLabel,
  secondaryLabel,
  tertiaryLabel,
  backgroundSrc,
}: TransmissionCardProps) {
  return (
    <FeatureCard className={styles.card}>
      <div
        className={styles.background}
        style={
          backgroundSrc
            ? { backgroundImage: `url(${backgroundSrc})` }
            : undefined
        }
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.body}>{body}</p>

        <div className={styles.actions}>
          <button className={styles.button} type="button">
            {primaryLabel}
          </button>
          <button className={styles.button} type="button">
            {secondaryLabel}
          </button>
          <button className={`${styles.button} ${styles.small}`} type="button">
            {tertiaryLabel}
          </button>
        </div>
      </div>
    </FeatureCard>
  );
}