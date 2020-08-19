import imagesTpl from '../templates/search-images.hbs';
import { refs } from './refs';
import { fetchLoadImages } from './fetch-cards';
import { activateLoadBtn } from './load-btn';
import { pnotifyNotice } from './pnotify';

export function createImagesMarkup(image) {
  if (image.length === 0) {
    pnotifyNotice();
  } else {
    activateLoadBtn();
    refs.gallery.innerHTML = imagesTpl(image);
    refs.loadMoreBtn.addEventListener('click', fetchLoadImages);
  }
}

export function imageMarkupCompletion(image) {
  refs.gallery.insertAdjacentHTML('beforeend', imagesTpl(image));

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
}

export function clearMarkup() {
  refs.gallery.innerHTML = '';
}
