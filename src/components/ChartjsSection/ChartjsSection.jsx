import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { getHourlyForecast } from '../WeatherSection/WeatherApi';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ChartjsSection({ city }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    getHourlyForecast(city).then((data) => {
      if (!data) return;

      // беремо перші 8 значень (~24 години)
      const hourly = data.list.slice(0, 8);

      const labels = hourly.map((item) =>
        new Date(item.dt * 1000).toLocaleTimeString('uk-UA', {
          hour: '2-digit',
          minute: '2-digit',
        })
      );

      const temperatures = hourly.map((item) => Math.round(item.main.temp));

      setChartData({
        labels,
        datasets: [
          {
            label: 'Temperature °C',
            data: temperatures,
            borderColor: '#ff8c42',
            backgroundColor: 'rgba(255,140,66,0.2)',
            tension: 0.4,
          },
        ],
      });
    });
  }, [city]);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              ticks: {
                callback: function (value) {
                  return value + '°C';
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
