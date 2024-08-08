import styles from "./FormControl.module.css";

export default function FormControl(
  {leftIcon, value, onChange, hasError, errorMessage, children, ...control}
) {
  let LeftIcon = leftIcon;
  return (
    <div>
      <div className={`${styles.formControl} ${hasError && styles.formControlError}`}>
        <LeftIcon />
        <input {...control} value={value} onChange={onChange}/>
        {children}
      </div>
      {hasError && <small className={styles.formControlFeedback}>{errorMessage}</small>}  
    </div>
  );
}