// WeatherInfo.jsx
import SeeMoreWeater from '../SeeMoreWeather/SeeMoreWeather';
import heartIcon from '../../imgs/pc/Weather/heart.png';
import deleteIcon from '../../imgs/pc/Weather/delete.png';
import refreshIcon from '../../imgs/pc/Weather/refresh.png';
import styles from './WeatherInfo.module.css';

export default function WeatherInfo({ data, onSeeMore }) {
  // додали onSeeMore
  if (!data) return <h2>Loading...</h2>;

  const dateObj = new Date(data.dt * 1000);
  const time = dateObj.toLocaleTimeString('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const date = dateObj.toLocaleDateString('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const day = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
  return (
    <div className={styles.weatherInfo}>
      <ul className={styles.name}>
        <li className={styles.nameItem}>
          <h2 className={styles.nameName}>{data.name}</h2>
        </li>
        <li className={styles.nameItem}>
          <h2 className={styles.nameName}>{data.sys.country}</h2>
        </li>
      </ul>

      <ul className={styles.data}>
        <li className={styles.dataItem}>
          <h2 className={styles.dataTxt}>{time}</h2>
        </li>
        <li className={styles.dataItem}>
          <button className={styles.hourlyBtn}>Hourly forecast</button>
        </li>
        <li className={styles.dataItemSecond}>
          <h2 className={styles.dataTxt1}>{date}</h2>
          <p className={styles.dataTxt1}>|</p>
          <h2 className={styles.dataTxt1}>{day}</h2>
        </li>
      </ul>

      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        alt='Weather Icon'
        className={styles.imgIcon}
      />

      <div className={styles.temperature}>
        <h2>{Math.round(data.main.temp)}°C</h2>
      </div>

      <ul className={styles.buttons}>
        <li className={styles.buttonsItem}>
          <button className={styles.btnImgs}>
            <img src={refreshIcon} alt='refresh' />
          </button>
          <button className={styles.btnImgs}>
            <img src={heartIcon} alt='favorite' />
          </button>
        </li>
        <li>
          <SeeMoreWeater onClick={() => onSeeMore(data)} />{' '}
        </li>
        <li>
          <button className={styles.btnImgs}>
            <img src={deleteIcon} alt='delete' />
          </button>
        </li>
      </ul>
    </div>
  );
}
