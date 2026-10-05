import { useEffect, useState } from 'react';
import { getDailyForecast } from '../WeatherSection/WeatherApi';
import styles from './Forecats.module.css';

export default function Forecats({ city }) {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    getDailyForecast(city).then((data) => {
      if (!data) return;

      // групуємо по днях
      const grouped = {};

      data.list.forEach((item) => {
        const date = item.dt_txt.split(' ')[0];

        if (!grouped[date]) {
          grouped[date] = [];
        }

        grouped[date].push(item);
      });

      // беремо 8 днів
      const result = Object.keys(grouped)
        .slice(0, 8)
        .map((date) => {
          const dayItems = grouped[date];

          const temps = dayItems.map((i) => i.main.temp);
          const min = Math.round(Math.min(...temps));
          const max = Math.round(Math.max(...temps));

          return {
            date,
            min,
            max,
            icon: dayItems[0].weather[0].icon,
            description: dayItems[0].weather[0].description,
          };
        });

      setDailyData(result);
    });
  }, [city]);

  if (!dailyData.length) return <p>Loading forecast...</p>;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>8-day forecast</h2>

      {dailyData.map((day, index) => {
        const dateObj = new Date(day.date);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        });

        return (
          <div key={index} className={styles.row}>
            <span>{formattedDate}</span>

            <div className={styles.center}>
              <img
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt=''
              />
              <span>
                {day.max}/{day.min}°C
              </span>
            </div>

            <span className={styles.desc}>{day.description}</span>
          </div>
        );
      })}
    </div>
  );
}
