import {fetchBreeds} from './helpers/cat-api'
import { markupSelect } from './helpers/markup-select';

const selectRef = document.querySelector('.breed-select');


fetchBreeds()
  .then(data =>

    selectRef.insertAdjacentHTML('beforeend', markupSelect(data))
  )
  .catch(console.error);
