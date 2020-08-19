import api from './apiService';
import { createImagesMarkup, imageMarkupCompletion } from './markup';

export function fetchImagesCards(value) {
  api.querry = value;
  api.fetchImages().then(image => createImagesMarkup(image));
}

export function fetchLoadImages() {
  api.nextPage();
  api.fetchImages().then(image => imageMarkupCompletion(image));
}
