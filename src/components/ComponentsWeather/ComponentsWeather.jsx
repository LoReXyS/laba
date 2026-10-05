import { array } from './ComponentsWeather.js';
import styles from './ComponentsWeather.module.css';

export default function ComponentsWeather() {
  const info = array;

  return (
    <div className={styles.divP}>
      {/* Перший елемент (текст про міста) */}
      <p className={styles.pTxt}>{info[0]}</p>

      {/* Вертикальна лінія */}
      <div className={styles.verticalLine}></div>

      {/* Другий блок (дати) */}
      <div className={styles.dateBlock}>
        <p className={styles.pTxt}>{info[1]}</p>
        <p className={styles.pTxt}>{info[2]}</p>
      </div>
    </div>
  );
}
