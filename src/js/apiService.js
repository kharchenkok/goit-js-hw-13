// //       });
const APIkey = '17935343-c69abdbb5347cbe1498525dc9';

export default {
  _querry: '',
  page: 1,
  cardsPerPage: 12,

  fetchImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.querry}&page=${this.page}&per_page=${this.cardsPerPage}&key=${APIkey}`;
    return fetch(url).then(response => response.json());
  },
  get querry() {
    return this._querry;
  },
  set querry(value) {
    this._querry = value;
  },
  reset() {
    this.page = 1;
  },
  nextPage() {
    this.page += 1;
  },
};
