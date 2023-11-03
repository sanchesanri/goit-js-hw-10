import SlimSelect from 'slim-select';
import { fetchBreeds } from './cat-api';
import { markupSelect } from './helpers/markup-select';
import { fetchCatByBreed } from './cat-api';
import { markupData } from './helpers/markup-data-id';
import { visibleTag } from './helpers/visible';
import{invisibleTag} from './helpers/invisible';

const refs = {
  select: document.querySelector('.breed-select'),
  divMarkup: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader-text'),
  error: document.querySelector('.error'),
};

refs.select.addEventListener('change', onSelectChange);

visibleTag(refs.select);

//SELECT--------------------------------
refs.select.id = 'selectElement';
//fetch data and render markup---------------------------

fetchBreeds()
  .then(data => {
    invisibleTag(refs.select)
    visibleTag(refs.loader)

    refs.select.insertAdjacentHTML('beforeend', markupSelect(data));
    const slimSelect = new SlimSelect({
      select: '#selectElement',
      settings: {
        showSearch: false,
      }
    });
  })
  .catch(el => {
    visibleTag(refs.loader);
    invisibleTag(refs.error)

    console.error(refs.error.textContent);
  });

//--------------------------
function onSelectChange(e) {
  const value = e.target.value;
  if (value === 'default') return;
  refs.divMarkup.innerHTML = ''

  invisibleTag(refs.loader)
  visibleTag(refs.error)

  fetchCatByBreed(value)
    .then(dataId => {
      visibleTag(refs.loader);
      

      refs.divMarkup.innerHTML = markupData(dataId);
    })
    .catch(el => {
      visibleTag(refs.select)
      visibleTag(refs.loader)
      invisibleTag(refs.error)

      refs.divMarkup.innerHTML = ''
      console.error(refs.error.textContent, el);
    });
}

/**
 * Доброго дня, Андрій) 
1) При виборі породи з помилкою (наприклад, Malayan) блок з інформацією про попередню породу потрібно прибрати.
2) При виборі породи з помилкою (наприклад, Malayan), а потім при зміні породи на працюючу, блок з помилкою потрібно приховати.
3) При зміні породи, поки вантажаться дані і показується лоадер, потрібно прибрати блок з інфо про попередню породу.
 */
