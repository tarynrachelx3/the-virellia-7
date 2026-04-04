import { ReactNode, CSSProperties } from "react";
import styles from "./featurecard.module.css";

type FeatureCardProps = {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  overlayDirection?: "left" | "right" | "center";
};

export default function FeatureCard({
  children,
  className = "",
  backgroundImage,
  backgroundPosition = "center",
  overlayDirection = "left",
}: FeatureCardProps) {
  const style = {
    ["--feature-card-bg" as string]: backgroundImage
      ? `url("${backgroundImage}")`
      : "none",
    ["--feature-card-bg-position" as string]: backgroundPosition,
  } as CSSProperties;

  const overlayClass =
    overlayDirection === "right"
      ? styles.overlayRight
      : overlayDirection === "center"
      ? styles.overlayCenter
      : styles.overlayLeft;

  return (
    <article className={`${styles.card} ${overlayClass} ${className}`} style={style}>
      {children}
    </article>
  );
}