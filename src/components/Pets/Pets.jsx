import { useEffect, useState, useRef } from 'react'; // Додаємо useRef
import { fetchAllPetImages } from '../Pets/PetsApi';
import PetInfo from '../PestInfo/PestInfo';
import styles from './Pets.module.css';
import PetsBtn from '../PetsBtn/PetsBtn';

const cardCaptions = [
  'Rescue pups pose as ghosts in festive photo shoot',
  'Cat interrupts morning coffee on sunny Washington morning',
  'New study finds dogs pay more attention to women',
  'Petting dogs gives health benefit, even if they are not yours',
  'Happy dog running in the park',
  'Cute kitten sleeping on a blanket',
  'Golden retriever playing with a ball',
  'Puppy looking at the camera',
];

export default function Pets() {
  const [petsList, setPetsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const isFirstRender = useRef(true); // Стейт для відстеження першого рендеру

  const initialItems = 4;

  const loadData = (pageNum, itemsLimit) => {
    setLoading(true);
    fetchAllPetImages(pageNum, itemsLimit).then((results) => {
      if (results) {
        const newPets = results.map((data, index) => {
          const hitIndex = Math.floor(Math.random() * (data.hits?.length || 1));
          const imageUrl =
            data.hits && data.hits.length > 0
              ? data.hits[hitIndex].webformatURL
              : '';

          return {
            id: `${pageNum}-${index}-${Math.random()}`,
            imageUrl: imageUrl,
            text: cardCaptions[index % cardCaptions.length],
          };
        });

        setPetsList((prev) => [...prev, ...newPets]);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    // Якщо це перший рендер, завантажуємо дані і ставимо прапорець у false
    if (isFirstRender.current) {
      loadData(1, initialItems);
      isFirstRender.current = false;
    }
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadData(nextPage, 4);
  };

  return (
    <section className={styles.petsSection}>
      <div className={`${styles.container} ${styles.petsDiv}`}>
        <h2 className={styles.h2txt}>Interacting with our pets</h2>
        <ul className={styles.petsList}>
          {petsList.map((petData) => (
            <PetInfo key={petData.id} data={petData} />
          ))}
        </ul>

        {loading && <p>Loading more pets...</p>}

        <PetsBtn onClick={handleLoadMore} disabled={loading} />
      </div>
    </section>
  );
}
