import {createStore, applyMiddleware} from 'redux';
import * as Constants from '../data/Constants';
import thunk from 'redux-thunk';

const initialState = {
    allTitles:  [],
    count: 0,
    episodes: [],
    titleDetail : null,
    titleDetailPlot: null,
    titleDetailActors: [],
    startYear: Constants.EARLIEST_PRODUCTION_YEAR, 
    endYear: null,      // Used in advanced search
    currentYear: null,  // Used in quick search
    searchString: null,
    genreID: null,
    view: Constants.DEFAULT_VIEW_TYPE,
    type: Constants.DEFAULT_MEDIA_TYPE,
    imdbMin: Constants.DEFAULT_IMDB_MIN,
    imdbMax: Constants.DEFAULT_IMDB_MAX
};

const reducer = (state = initialState, action) => {
    console.log('reducer running', action);
    const newState = {...state};
    switch(action.type) {
        case 'SET_ALL_TITLES':
            newState.allTitles = action.value;
            break;
        case 'SET_EPISODES':
            newState.episodes = action.value;
            break;
        case 'SET_VIEW':
            newState.view = action.value;
            break;
        case 'FETCH_NEW_TITLES':
            newState.allTitles = action.value.ITEMS;
            newState.count = action.value.COUNT;
            newState.titleDetail = null;
            break;
        case 'FETCH_TITLES':
            newState.allTitles = action.value.ITEMS;
            newState.count = action.value.COUNT;
            newState.titleDetail = null;
            break;
        case 'FETCH_NEW_EPISODES':
            newState.episodes = action.value.results;
            break;
        case 'SET_CURRENT_YEAR':
            newState.currentYear = action.value;
            break;
        case 'FETCH_TITLE_DETAIL':
            newState.titleDetail = action.value;
            newState.titleDetailPlot = action.value.imdbinfo.plot;
            newState.titleDetailActors = action.value.people[0].actor;
            break;
        case 'CLEAR_ALL_TITLES':
            newState.allTitles = [];
            newState.titleDetail = null;   
    }

    return newState;
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;