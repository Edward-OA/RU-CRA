import { useState, useEffect } from 'react';

export default function useLocalStoragesState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);

    // return JSON.parse(storedValue)

    // here the state is initialized with a callback function
    // this is used to log or place the stored watched movie on the app
    // finally convert the localStorage which is a string to and object in
    // order to avoid errors
    // also you have to account for the times no movie is watched to avoid
    // errors
    // NB: never call a function in the useState function
    // useState(localStorage.getItem('watched))

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
      // we don't need to create a new array cos this
      // effect would only run after the movie has
      // been updated
      //the difference between this and the first one is that
      // this immediately show the data in the local storage
      // once added to list
      //Also when a watched movie is removed it refelects in the local storage
      //this is cause the useEffect function has synced the watched movie to the local storage
      //contrary if it was done in the handlewatched function you would also need to
      //do it in the handledelete function to make sure it is cleared
    },
    [value, key]
  );
  return [value, setValue];
}
