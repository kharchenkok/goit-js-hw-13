import api from './apiService';
import { createImagesMarkup } from './markup';

export function fetchImagesCards(value){

    api.querry = value
      api.fetchImages().then(data=> data.hits).then(image => createImagesMarkup(image))
        
    
    }