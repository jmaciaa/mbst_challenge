import type { RadioOption } from "@/types"
import styles from "./color_label.module.css"

export default function ColorLabel({ option }: { option: RadioOption }) {
  return (
    <label className={styles.color_label} htmlFor={option.id}>
      <div style={{ backgroundColor: option.id }} />
    </label>
  )
}
