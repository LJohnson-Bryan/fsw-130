const store = require('./redux/index.js');
const {addMovie, removeMovie} = require('./redux/movies.js');
const {addTvShow, removeTvShow} = require('./redux/tvShows.js');

store.dispatch(addMovie('Spiderman'));
store.dispatch(removeMovie('Fast & Furious'));

store.dispatch(addTvShow('The Mandalorian'));
store.dispatch(removeTvShow('The Simpsons'));
