import FeatureCard from "./featurecard";
import styles from "./charactercard.module.css";

type CharacterCardProps = {
  title: string;
  subtitle: string;
  body: string;
  buttonLabel: string;
  imageSrc: string;
  align?: "left" | "right";
  backgroundPosition?: string;
};

export default function CharacterCard({
  title,
  subtitle,
  body,
  buttonLabel,
  imageSrc,
  align = "left",
  backgroundPosition = "center",
}: CharacterCardProps) {
  const textRight = align === "right";

  return (
    <FeatureCard
      className={styles.card}
      backgroundImage={imageSrc}
      backgroundPosition={backgroundPosition}
      overlayDirection={textRight ? "right" : "left"}
    >
      <div className={styles.content}>
        <div
          className={`${styles.copy} ${
            textRight ? styles.copyRight : styles.copyLeft
          }`}
        >
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.body}>{body}</p>

          <button className={styles.button} type="button">
            {buttonLabel}
          </button>
        </div>
      </div>
    </FeatureCard>
  );
}