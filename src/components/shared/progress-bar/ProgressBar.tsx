import styles from './styles.module.css';

export function ProgressBar() {
  return (
    <div className={styles.demoContainer}>
      <div className={styles.progressBar}>
        <div className={styles.progressBarValue}></div>
      </div>
    </div>
  );
}
