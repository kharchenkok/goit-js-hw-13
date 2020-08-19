import { refs } from "./refs";


export function activateLoadBtn (){
    refs.loadMoreBtn.classList.remove('is-hidden')
}
export function hideLoadBtn (){
    refs.loadMoreBtn.classList.add('is-hidden')
}