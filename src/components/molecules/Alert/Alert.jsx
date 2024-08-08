import styles from "./Alert.module.css";

export default function Alert({ variant, show, message }) {
  let styleVariant = "";
  let icon = "";

  if (variant === "success") {
    styleVariant = styles.alertSuccess;
    icon = "check";
  }
  else if (variant === "error") {
    styleVariant = styles.alertDanger;
    icon = "x";
  }

  return (
    <div className={`${styles.alert} ${styleVariant} ${show && styles.show}`}>
      <div className={styles.alertInfo}>
        <span className={styles.alertIcon}>
          <i className={`bi bi-${icon}`}></i>
        </span>
        <p>{message}</p>
      </div>
      <button className={styles.alertBtn}>
        <i className="bi bi-x"></i>
      </button>
    </div>
  );
}