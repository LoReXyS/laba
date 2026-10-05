export const api = 'https://pixabay.com/api/';
export const key = '55025418-0e6999a31d014d81c31757d8f';

// Переконайся, що цей масив ОГОЛОШЕНИЙ у файлі:
const queries = [
  'rescue pups ghost photo shoot',
  'cat interrupting morning coffee',
  'dog paying attention to woman',
  'petting dog health benefit',
  'happy dog park',
  'cute kitten blanket',
  'golden retriever ball',
  'puppy face',
];

const getPixabayUrl = (query, page = 1) =>
  `${api}?key=${key}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&per_page=3&page=${page}`;

// Додаємо параметр limit, за замовчуванням 8 (весь масив)
export const fetchAllPetImages = async (page = 1, limit = 8) => {
  try {
    // Обрізаємо масив запитів згідно з лімітом
    const currentQueries = queries.slice(0, limit);

    const promises = currentQueries.map((query) =>
      fetch(getPixabayUrl(query, page)).then(async (res) => {
        if (!res.ok) throw new Error(`API Error ${res.status}`);
        return res.json();
      })
    );

    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
