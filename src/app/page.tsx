import { GradientImage } from "@/components/gradient-image";

import styles from "./page.module.css";
import Card from "@/components/card";

export default function Home() {
  return (
    <main className={`container ${styles.main}`}>
      <div className={styles["card-container"]}>
        <Card title="gradient-image">
          <GradientImage
            src="https://picsum.photos/200/300"
            height={160}
            width={160}
            alt="image"
          />
          <a
            className={styles.link}
            href="https://github.com/a-ryang/css-cheat-sheet/blob/main/src/components/gradient-image.module.css"
            target="_blank">
            code
          </a>
        </Card>
      </div>
    </main>
  );
}
