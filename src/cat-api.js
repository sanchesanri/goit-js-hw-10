import { key } from "./helpers/key-axios";

export function fetchBreeds() {
      const BASE_URL = 'https://api.thecatapi.com/v1/';
      const END_POINT = 'breeds';
      
      const options = {
        headers: {
          'x-api-key': key,
        },
      };
    
      const url = BASE_URL + END_POINT;
    
      return fetch(url, options).then(response => response.json());
    }