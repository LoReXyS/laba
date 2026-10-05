import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { fetchAllPetImages } from './NatureApi'; // ← шлях до вашого файлу з API

// Стилі Swiper (обов'язково)
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Додаткові кастомні стилі (за бажанням)
import './NatureSection.css'; // створіть цей файл для своїх стилів

export default function NatureSection() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        // Викликаємо вашу функцію (за замовчуванням бере 8 запитів, але ви можете змінити limit)
        const results = await fetchAllPetImages(1, 8); // page=1, limit=8 запитів
        if (!results) throw new Error('Немає даних від API');

        // Збираємо всі URL зображень з усіх запитів
        const allImages = results.flatMap((response) =>
          (response.hits || []).map((hit) => ({
            url: hit.webformatURL, // найкращий варіант для швидкого завантаження
            largeURL: hit.largeImageURL,
            alt: hit.tags || 'Pet image',
            id: hit.id,
          }))
        );

        setImages(allImages);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  if (loading)
    return <div className='loader'>Завантаження чудових світлин... 🌿</div>;
  if (error) return <div className='error'>Помилка: {error}</div>;
  if (images.length === 0) return <div>На жаль, зображення не знайдено 😿</div>;

  return (
    <section className='chartjs-section'>
      <h2>Beautiful nature</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className='petSwiper'
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={img.url} alt={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
