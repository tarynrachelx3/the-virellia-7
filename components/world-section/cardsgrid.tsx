import styles from "./cardsgrid.module.css";
import { ReactNode } from "react";

type CardsGridProps = {
  children: ReactNode;
};

export default function CardsGrid({ children }: CardsGridProps) {
  return <div className={styles.grid}>{children}</div>;
}