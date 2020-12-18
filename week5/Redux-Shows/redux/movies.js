const addMovie = title => {
    return {
        type: "ADD_MOVIE",
        payload: title
    }
}

const removeMovie = title => {
    return {
        type: "REMOVE_MOVIE",
        payload: title
    }
}

const initialState = ["Fast & Furious", "Star Wars: Return of the Jedi"];

const movieReducer = (movies = initialState, action) => {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...movies, action.payload];
        case "REMOVE_MOVIE":
            return movies.filter(movie => movie !== action.payload);
        default:
            return movies;
    }
}

module.exports = { addMovie, removeMovie, movieReducer }
