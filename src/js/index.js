import { fetchBreeds } from './cat-api';
import { markupSelect } from './helpers/markup-select';
import { fetchCatByBreed } from './cat-api';

const refs = {
  select: document.querySelector('.breed-select'),
  divMarkup: document.querySelector('.cat-info'),
};

refs.select.addEventListener('change', onSelectChange);

//fetch data and render markup---------------------------

fetchBreeds()
  .then(data => refs.select.insertAdjacentHTML('beforeend', markupSelect(data)))
  .catch(console.error);

function onSelectChange(e) {
  const value = e.target.value;

  fetchCatByBreed(value)
    .then(dataId => markupData(dataId))
    .catch(console.log);
}

function markupData(dataId) {
  // const params1 = {...[...dataId]};
  const objDate = dataId[0];

  const markup = `
  <div class="img-container">
  <img src="${objDate.url}" alt="${objDate.breeds[0].name}"></div>
  <div class="text-container">
  <h2>${objDate.breeds[0].name}</h2>
  <p>${objDate.breeds[0].description}</p>
  <h3>Temperament:<span 
  >${objDate.breeds[0].temperament}</span></h3>
  </div>`;

  refs.divMarkup.innerHTML = markup;
}
