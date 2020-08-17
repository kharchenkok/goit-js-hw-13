import imagesTpl from '../templates/search-images.hbs'
import { refs } from './refs'
import api from './apiService';
// import apiService from './apiService'
// console.log(refs.gallery);
// console.log(imagesTpl);

export function createImagesMarkup(image){
    refs.loadMoreBtn.classList.remove('is-hidden')
    refs.gallery.innerHTML = imagesTpl(image)


    refs.loadMoreBtn.addEventListener('click', imageMarkupCompletion)

}

function imageMarkupCompletion(){
api.nextPage()
api.fetchImages().then(data=> data.hits).then(image => refs.gallery.insertAdjacentHTML('beforeend', imagesTpl(image)))
window.scrollTo({
    top:document.documentElement.offsetHeight,
    behavior:'smooth'
})
}

export function clearMarkup(){
    refs.gallery.innerHTML =''
}