const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_7mlJtNx7EfD2e5kPLVXIyPw5NVvllC4ODStgqsoRe4wQEMPXGIknOUst7FtE6PDI';

function fetchBreeds() {
  const END_POINT = '/breeds';
  return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      return data;
    });
}

function fetchCatByBreed(breedId) {
  const END_POINT = `/images/search?breed_ids=${breedId}`;
  return fetch(`${BASE_URL}${END_POINT}&api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      return data;
    });
}

export { fetchBreeds, fetchCatByBreed };
