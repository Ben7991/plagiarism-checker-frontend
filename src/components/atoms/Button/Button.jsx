import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({type, variant, link, path, children}) {
  let styleVariant = "";

  if (variant === "primary") {
    styleVariant = styles.primary;
  }
  else if (variant === "secondary") {
    styleVariant = styles.secondary;
  }

  if (link) {
    return (
      <Link to={path} className={`${styles.btn} ${styleVariant}`}>{children}</Link>
    )
  }

  return (
    <button className={`${styles.btn} ${styleVariant}`} type={type}>
      {children}
    </button>
  );
}