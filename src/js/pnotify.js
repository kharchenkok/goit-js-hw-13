import '@pnotify/core/dist/PNotify.css';
import { notice } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

export function pnotifyNotice() {
  notice({
    title: 'No images found. Please try again',
    delay: 2000,
  });
}
