import './styles.css';
import api from './js/apiService';
import { fetchImagesCards } from './js/fetch-cards';
import { refs } from './js/refs';
import { clearMarkup } from './js/markup';

const searchItems = function (event) {
  event.preventDefault();
  // console.log('elements', event.target.elements.searchInput.value);
  // console.log(event.target);
  let inputValue = event.target.elements.searchInput.value;
  clearMarkup();
  //   api.querry = event.target.elements.searchInput.value;
  api.reset();
  fetchImagesCards(inputValue);
  event.target.reset();
};

refs.searchForm.addEventListener('submit', searchItems);
