import FeatureCard from "./FeatureCard";
import styles from "./CharacterCard.module.css";

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
  const copyClass = `${styles.copy} ${
    align === "right" ? styles.copyRight : styles.copyLeft
  }`;

  return (
    <FeatureCard
      className={styles.card}
      backgroundImage={imageSrc}
      backgroundPosition={backgroundPosition}
      overlayDirection={align === "right" ? "right" : "left"}
    >
      <div className={styles.content}>
        <div className={copyClass}>
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