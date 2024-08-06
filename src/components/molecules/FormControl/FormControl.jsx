import styles from "./FormControl.module.css";

export default function FormControl({leftIcon, children, ...control}) {
  let LeftIcon = leftIcon;
  return (
    <div className={styles.formControl}>
      <LeftIcon />
      <input {...control} />
      {children}
    </div>
  );
}