import styles from './PetsBtn.module.css';

export default function PetsBtn({ onClick, disabled }) {
  return (
    <div className={styles.btnWrapper}>
      <button
        className={`${styles.seeMoreBtn} ${disabled ? styles.disabled : ''}`}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        See more
      </button>
    </div>
  );
}
