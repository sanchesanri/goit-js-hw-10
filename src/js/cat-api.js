import { key } from './helpers/key-axios';

const BASE_URL = 'https://api.thecatapi.com/v1/';
const COLLECTION_POINT = 'breeds';
const SEARCH_POINT = 'images/search'
const PARAMS_ID = "?breed_ids=";
const API_KEY = `&api_key=${key}`;

const urlForCollection = BASE_URL+COLLECTION_POINT;
const urlForSearchId = BASE_URL+SEARCH_POINT+PARAMS_ID

// const options = {
//   headers: {
//     'x-api-key': key,
//   },
// };


export function fetchBreeds() {
  return fetch(urlForCollection).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    urlForSearchId+breedId+API_KEY
  ).then(res => res.json());
}
