export const key = '0bc02751d07d238273aa9f357d139606';

// 1. Функція для створення URL під конкретне місто
const getApiUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

// 2. Масив міст, які вам потрібні
const cities = ['Kyiv', 'Lviv', 'Odesa'];

export const fetchAllWeather = async () => {
  try {
    // 3. Створюємо масив промісів
    const promises = cities.map((city) =>
      fetch(getApiUrl(city)).then((res) => res.json())
    );

    // 4. Чекаємо виконання всіх запитів одночасно
    const results = await Promise.all(promises);

    console.log(results); // Масив з 3-ма об'єктами даних
    return results;
  } catch (error) {
    console.error('Помилка завантаження міст:', error);
  }
};
export const getHourlyForecast = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Помилка погодинного прогнозу:', error);
  }
};
export const getDailyForecast = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Помилка денного прогнозу:', error);
  }
};
