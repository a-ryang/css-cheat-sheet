import Image from "next/image";

import styles from "./gradient-image.module.css";

interface GradientImageProps {
  src: string;
  height: number;
  width: number;
  alt: string;
}

export default function GradientImage({
  src,
  height,
  width,
  alt,
}: GradientImageProps) {
  return (
    <div className={styles.container}>
      <Image src={src} height={height} width={width} alt={alt} />
    </div>
  );
}
