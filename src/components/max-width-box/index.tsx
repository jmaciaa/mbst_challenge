import { ReactNode } from "react";
import styles from "./max_width_box.module.css";

export default function MaxWidthBox({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${styles.box} ${className ?? ""}`}>{children}</div>;
}
