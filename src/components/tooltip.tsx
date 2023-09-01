import styles from "./tooltip.module.css";

interface TooltipProps {
  tooltip: string;
}

export default function Tooltip({ tooltip }: TooltipProps) {
  return (
    <div data-tooltip={tooltip} className={styles.container}>
      Tooltip
    </div>
  );
}
