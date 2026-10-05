// SeeMoreWeather.jsx
import styles from './SeeMoreWeather.module.css';

export default function SeeMoreWeather({ onClick }) {
  return (
    <button
      className={styles.btnMore}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      See More
    </button>
  );
}
