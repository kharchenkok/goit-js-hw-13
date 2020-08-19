const APIkey = '17935343-c69abdbb5347cbe1498525dc9';

const api = {
  _querry: '',
  page: 1,
  cardsPerPage: 12,
  _totalHits:0,

  async fetchImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.querry}&page=${this.page}&per_page=${this.cardsPerPage}&key=${APIkey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.totalHits = data.totalHits;
      return data.hits;
    } catch {
      throw new Error(data.status);
    }
  },

  get querry() {
    return this._querry;
  },
  set querry(value) {
    this._querry = value;
  },
  get totalHits() {
    return this._totalHits;
  },
  set totalHits(value) {
    this._totalHits = value;
  },


  reset() {
    this.page = 1;
  },
  nextPage() {
    this.page += 1;
  },
};

export default api
