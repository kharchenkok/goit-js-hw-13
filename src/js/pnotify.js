import '@pnotify/core/dist/PNotify.css';
import { notice,error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';


export function pnotifyNotice(numb) {

  notice({
    title: `${numb} images were found for your query `,
    delay: 2000,
  });
}
export function pnotifyError() {
    error({
      title: 'No images found. Please try again',
      delay: 2000,
    });
  }