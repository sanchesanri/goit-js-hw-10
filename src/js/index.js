import { fetchBreeds } from './cat-api';
import { markupSelect } from './helpers/markup-select';
import { fetchCatByBreed } from './cat-api';
import { markupData } from './helpers/markup-data-id';

const refs = {
  select: document.querySelector('.breed-select'),
  divMarkup: document.querySelector('.cat-info'),
  loader:document.querySelector('.loader'),
  error:document.querySelector('.error'),
};

refs.select.addEventListener('change', onSelectChange);


refs.select.classList.add('is-hidden');
refs.error.classList.add('is-hidden');

//fetch data and render markup---------------------------

fetchBreeds()
  .then(data => {
    refs.select.classList.remove('is-hidden');
    refs.loader.classList.add('is-hidden');

    refs.select.insertAdjacentHTML('beforeend', markupSelect(data))
  })
  .catch(el=>{
    refs.loader.classList.add('is-hidden');
    refs.error.classList.remove('is-hidden');
    console.error(refs.error.textContent);
  });


//--------------------------
function onSelectChange(e) {
  const value = e.target.value;
  if (value==='default') return

  // refs.loader.hidden = false;
  refs.loader.classList.remove('is-hidden');
  fetchCatByBreed(value)
    .then(dataId => {
      refs.loader.classList.add('is-hidden');

      refs.divMarkup.innerHTML = markupData(dataId)
      })
    .catch(el=>{
      refs.select.classList.add('is-hidden');
      refs.loader.classList.add('is-hidden');
      refs.error.classList.remove('is-hidden');
      console.error(refs.error.textContent);
    });
}