const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_7D44E3wD2EXyT9G0PFCOdBkOzs0XpnKnUR0lpTXFjb2IKwUJUjLBshRpH5dsLO6a';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds/?api_key=${API_KEY}`).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText || res.status);
    }

    return res.json();
  });
}
export function fetchCatByBreed(id) {
  return fetch(
    `${BASE_URL}/images/search?breed_ids=${id}&api_key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText || response.status);
    }
    return response.json();
  });
}
