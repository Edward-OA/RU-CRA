import { useEffect } from 'react';
export default function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
          console.log('CLOSING');
        }
      }
      document.addEventListener('keydown', callback);
      return function () {
        document.removeEventListener('keydown', callback);
      };
    },
    [action, key]
  );
}

//this is where the esc button is added to move
// back when youre in the movie details
//the toLowerCase is to allow for corrct comaprison
// in case the user types "escape" like"EscaPe"
