import * as Constants from '../data/constants';

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

const mainReducer = (state = initialState, action) => {
    console.log('reducer running', action);
    const newState = {...state};
    switch(action.type) {
        case 'SET_ALL_TITLES':
            newState.allTitles = action.value;
            break;
        case 'SET_VIEW':
            newState.view = action.value;
            break;
        case 'SET_TITLES':
            newState.allTitles = action.value.ITEMS;
            newState.count = action.value.COUNT;
            newState.titleDetail = null;
            break;
        case 'SET_NEW_TITLES':
            newState.allTitles = action.value.ITEMS;
            newState.count = action.value.COUNT;
            newState.titleDetail = null;
            break;
        case 'SET_NEW_EPISODES':
            // newState.episodes = action.value.results;
            newState.episodes = action.value.ITEMS;
            break;
        case 'SET_CURRENT_YEAR':
            newState.currentYear = action.value;
            break;
        case 'SET_TITLE_DETAIL':
            newState.titleDetail = action.value;
            newState.titleDetailPlot = action.value.imdbinfo.plot;
            newState.titleDetailActors = action.value.people[0].actor;
            break;
        case 'CLEAR_ALL_CONTENT':
            newState.allTitles = [];
            newState.titleDetail = null;
            break;
        case 'CLEAR_SELECTED_TITLE':
            newState.titleDetail = null;
            break;
        case 'HANDLE_CHANGE':
            newState.searchString = action.value.target.value;
            break;
    }
    return newState;
}

export default mainReducer;