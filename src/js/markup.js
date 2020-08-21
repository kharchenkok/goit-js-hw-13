import imagesTpl from '../templates/search-images.hbs';
import { refs } from './refs';
import { activateLoadBtn } from './load-btn';
import { pnotifyError, pnotifyNotice } from './pnotify';
import api from './apiService';

export function createImagesMarkup(image) {
  image.length === 0 ? pnotifyError() : letMarkup(image);
}

function letMarkup(image) {
  let totalImgNumb = api.totalHits;
  pnotifyNotice(totalImgNumb);
  updateMarkup(imagesTpl(image));
  if (image.length >= api.cardsPerPage) {
    activateLoadBtn();
  } 
  
}

export function imageMarkupCompletion(image) {
  refs.gallery.insertAdjacentHTML('beforeend', imagesTpl(image));
  toScrollItem();
}

function toScrollItem() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
}

export function updateMarkup(content = '') {
  refs.gallery.innerHTML = content;
}
