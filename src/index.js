import './styles.css';
import api from './js/apiService';
import { fetchImagesCards } from './js/fetch-cards';
import { refs } from './js/refs';
import { clearMarkup } from './js/markup';
import { hideLoadBtn } from './js/load-btn';
import { openModal } from './js/modal';

const searchItems = function (event) {
  event.preventDefault();
  hideLoadBtn();
  let inputValue = event.target.elements.query.value;
  clearMarkup();
  api.reset();
  fetchImagesCards(inputValue);
  event.target.reset();
  refs.gallery.addEventListener('click', openModal);
};

refs.searchForm.addEventListener('submit', searchItems);
