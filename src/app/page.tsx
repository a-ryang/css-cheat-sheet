import { GradientImage } from "@/components/gradient-image";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <GradientImage
        src="https://picsum.photos/200/300"
        height={160}
        width={160}
        alt="image"
      />
    </main>
  );
}
