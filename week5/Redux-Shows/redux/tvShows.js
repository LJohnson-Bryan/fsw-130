const addTvShow = title => {
    return {
        type: "ADD_TVSHOW",
        payload: title
    }
}

const removeTvShow = title => {
    return {
        type: "REMOVE_TVSHOW",
        payload: title
    }
}

const getShows = () => {
    return {
        type: "GET_SHOWS"
    }
}

const initialState = ["Rick & Morty", "The Simpsons", "Family Guy"];

const tvShowReducer = (tvShows = initialState, action) => {
    switch(action.type) {
        case "ADD_TVSHOW":
            return [...tvShows, action.payload];
        case "REMOVE_TVSHOW":
            return tvShows.filter(tvShow => tvShow !== action.payload);
        case "GET_SHOWS":
            return tvShows
        default:
            return tvShows;
    }
}

module.exports = { addTvShow, removeTvShow, tvShowReducer, getShows }
