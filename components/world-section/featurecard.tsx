import { ReactNode, CSSProperties } from "react";
import styles from "./FeatureCard.module.css";

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
    ["--feature-card-bg"]: backgroundImage
      ? `url("${backgroundImage}")`
      : "none",
    ["--feature-card-bg-position"]: backgroundPosition,
  } as CSSProperties;

  const overlayClass = {
    left: styles.overlayLeft,
    right: styles.overlayRight,
    center: styles.overlayCenter,
  }[overlayDirection];

  return (
    <article className={`${styles.card} ${overlayClass} ${className}`} style={style}>
      {children}
    </article>
  );
}