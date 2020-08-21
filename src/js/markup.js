import imagesTpl from '../templates/search-images.hbs';
import { refs } from './refs';
import { fetchLoadImages } from './fetch-cards';
import { activateLoadBtn } from './load-btn';
import { pnotifyError, pnotifyNotice } from './pnotify';
import api from './apiService';

export function createImagesMarkup(image) {
  
  image.length===0 ? pnotifyError() : letMarkup(image)
  
}

function letMarkup(image){
  let totalImgNumb = api.totalHits;
  if (image.length < api.cardsPerPage) {
    pnotifyNotice(totalImgNumb);
    refs.gallery.innerHTML = imagesTpl(image);
    } else {
    activateLoadBtn();
    pnotifyNotice(totalImgNumb);
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
