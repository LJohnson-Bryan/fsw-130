const store = require('./redux/index.js');
const {addMovie, removeMovie, getMovies} = require('./redux/movies.js');
const {addTvShow, removeTvShow, getShows} = require('./redux/tvShows.js');

console.log('Adding Spiderman (Movie)');
store.dispatch(addMovie('Spiderman'));

console.log('Removing Fast & Furious (Movie)')
store.dispatch(removeMovie('Fast & Furious'));

console.log('Adding The Mandalorian (TV Show)');
store.dispatch(addTvShow('The Mandalorian'));

console.log('Removing The Simpsons (TV Show)');
store.dispatch(removeTvShow('The Simpsons'));

console.log('Fetching ALL shows and movies...');
store.dispatch(getShows());
store.dispatch(getMovies());
