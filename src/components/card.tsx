import styles from "./card.module.css";

import { PropsWithChildren } from "react";
import clsx from "clsx";

interface CardProps {
  title?: string;
  block?: boolean;
}

export default function Card({
  title,
  block = false,
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <div className={clsx(styles.container, { [styles.block]: block })}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </div>
  );
}
