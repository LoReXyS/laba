// WeatherSection.jsx
import { useEffect, useState } from 'react';
import { fetchAllWeather } from './WeatherApi';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import WeatherPagination from '../WeatherPagination/WeatherPagination'; // імпортуємо компонент
import styles from './WeatherSection.module.css';

export default function WeatherSection() {
  const [weatherList, setWeatherList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  // 1️⃣ Завантаження погоди
  useEffect(() => {
    fetchAllWeather().then((data) => {
      if (data) {
        setWeatherList(data);
      }
      setLoading(false);
    });
  }, []);

  // 2️⃣ Resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3️⃣ Авто-вибір для mobile
  useEffect(() => {
    if (isMobile && weatherList.length > 0) {
      setSelectedWeather(weatherList[0]);
    }
  }, [isMobile, weatherList]);

  const handleSeeMore = (cityWeather) => {
    setSelectedWeather(cityWeather);
  };

  const handleBackToList = () => {
    setSelectedWeather(null);
  };

  if (loading) {
    return <h2>Loading weather data...</h2>;
  }

  return (
    <section className={styles.weatherSection}>
      <div className={`${styles.container} ${styles.weatherList}`}>
        {weatherList.map((cityWeather, index) => (
          <WeatherInfo
            key={index}
            data={cityWeather}
            onSeeMore={handleSeeMore}
          />
        ))}
      </div>

      {(selectedWeather || isMobile) && (
        <WeatherPagination
          data={selectedWeather || weatherList[0]}
          onBack={handleBackToList}
        />
      )}
    </section>
  );
}
