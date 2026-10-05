import styles from './WeatherPagination.module.css';
import ChartjsSection from '../ChartjsSection/ChartjsSection';
import Forecats from '../Forecats/Forecats';
import Speed from '../../imgs/pc/Weather/pagination/speed.png';
import Temperature from '../../imgs/pc/Weather/pagination/temperature.png';
import Visibility from '../../imgs/pc/Weather/pagination/Visibility.png';
import WindSpeed from '../../imgs/pc/Weather/pagination/windSpeed.png';
export default function WeatherPagination({ data, onBack }) {
  if (!data) return null;

  const { main, wind, visibility, name, sys, weather } = data;
  const feelsLike = Math.round(main.feels_like);
  const tempMin = Math.round(main.temp_min);
  const tempMax = Math.round(main.temp_max);
  const humidity = main.humidity;
  const pressure = main.pressure; // в гектопаскалях (hPa)
  const windSpeed = wind.speed; // м/с
  const visibilityKm = (visibility / 1000).toFixed(1); // переводимо метри в км

  // формуємо дату
  const dateObj = new Date(data.dt * 1000);
  const date = dateObj.toLocaleDateString('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const day = dateObj.toLocaleDateString('uk-UA', { weekday: 'long' });

  return (
    <>
      <div className={styles.sectionDiv}>
        <div className={styles.continer}>
          <div className={styles.contnent}>
            {/* Заголовок з назвою міста та кнопкою назад */}
            <div className={styles.header}>
              <h1>
                {name}, {sys.country}
              </h1>
              <p>
                {date} | {day}
              </p>
              <button onClick={onBack} className={styles.backBtn}>
                ← Back to list
              </button>
            </div>

            <ul className={styles.list}>
              <li className={styles.item}>
                <p className={styles.txt}>Feels like</p>
                <h2 className={styles.degrees}>{feelsLike}°C</h2>
                <img
                  src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  alt='icon'
                />
              </li>
              <li className={styles.item}>
                <p className={styles.txt}>Min ℃</p>
                <h2 className={styles.degrees}>{tempMin}°C</h2>
                <p className={styles.txt}>Max ℃</p>
                <h2 className={styles.degrees}>{tempMax}°C</h2>
              </li>
              <li className={styles.item}>
                <p className={styles.txt}>Humidity</p>
                <h2 className={styles.degrees}>{humidity}%</h2>
                <img
                  src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  alt=''
                />
                {/* можна додати іконку */}
              </li>
              <li className={styles.item}>
                <p className={styles.txt}>Pressure</p>
                <h2 className={styles.degrees}>{pressure} hPa</h2>
                <img
                  src={Speed}
                  alt='pressure icon'
                  className={styles.pressureIcon}
                />
              </li>
              <li className={styles.item}>
                <p className={styles.txt}>Wind speed</p>
                <h2 className={styles.degrees}>{windSpeed} m/s</h2>
                <img src={WindSpeed} alt='WindSpeed' />
              </li>
              <li className={styles.item}>
                <p className={styles.txt}>Visibility</p>
                <h2 className={styles.degrees}>{visibilityKm} km</h2>
                <img src={Visibility} alt='Visibility' />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.continer}>
          <div className={`${styles.contnent} ${styles.chartSection}`}>
            <ChartjsSection city={name} />
          </div>
        </div>
        <div className={styles.continer}>
          <div className={`${styles.contnent} ${styles.forecastSection}`}>
            <Forecats city={name} />
          </div>
        </div>
      </div>
    </>
  );
}
