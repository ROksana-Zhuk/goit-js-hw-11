import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesPromise } from './js/pixabay-api';
import { addLoader } from './js/render-functions';
import { removeLoader } from './js/render-functions';
import { addImagesMarkup } from './js/render-functions';

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('input[name = search-text]');

formEl.addEventListener('submit', event => {
  event.preventDefault();
  addLoader();

  getImagesPromise(inputEl.value)
    .then(response => {
      console.log(response);

      if (response.data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        addImagesMarkup(response.data.hits);
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      removeLoader();
    });
});
