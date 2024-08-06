import styles from "./Button.module.css";

export default function Button({title, variant}) {
  let styleVariant = "";

  if (variant === "primary") {
    styleVariant = styles.primary;
  }
  else if (variant === "secondary") {
    styleVariant = styles.secondary;
  }

  return (
    <button className={`${styles.btn} ${styleVariant}`}>{title}</button>
  );
}