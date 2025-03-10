import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const simpleLightboxInstance = new SimpleLightbox('.gallery-link', {
  captionDelay: 250,
  captionsData: 'alt',
});

const galleryListEl = document.querySelector('.gallery');

export function addLoader() {
  galleryListEl.innerHTML = '';
  galleryListEl.insertAdjacentHTML('beforeend', '<span class="loader"></span>');
}

export function removeLoader() {
  galleryListEl.removeChild(document.querySelector('.loader'));
}

export function addImagesMarkup(imagesHits) {
  const markup = imagesHits
    .map(hit => {
      return `<li>
          <a class="gallery-link" href="${hit.largeImageURL}">
            <img src="${hit.previewURL}" alt="" title=""/>
          </a>
          <table>
            <thead>
              <tr>
                <th>Likes</th>
                <th>Views</th>
                <th>Comments</th>
                <th>Downloads</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${hit.likes}</td>
                <td>${hit.views}</td>
                <td>${hit.comments}</td>
                <td>${hit.downloads}</td>
              </tr>
            </tbody>
          </table>

        </li>`;
    })
    .join('');

  galleryListEl.insertAdjacentHTML('beforeend', markup);
  simpleLightboxInstance.refresh();
}
