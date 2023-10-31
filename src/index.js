import {fetchBreeds} from './helpers.js/cat-api'
import { markupSelect } from './helpers.js/markup-select';

const selectRef = document.querySelector('.breed-select');


fetchBreeds()
  .then(data =>

    selectRef.insertAdjacentHTML('beforeend', markupSelect(data))
  )
  .catch(console.error);

