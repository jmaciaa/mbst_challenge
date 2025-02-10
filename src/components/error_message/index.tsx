import styles from "./error_message.module.css";

export function ErrorMessage() {
  return (
    <p className={styles.message}>
      Oops... Something went wrong getting products
    </p>
  );
}
