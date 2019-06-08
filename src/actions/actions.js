import NetflixAPI from '../api/NetflixAPI';

export const fetchNewTitles = () => {
    return dispatch => { NetflixAPI.getNewTitles((data) => {dispatch({type:'SET_NEW_TITLES', value: data})}) }
}

export const fetchTitles = (searchString, startYear, endYear, type, genreID, imdbMin, imdbMax) => {
    return (dispatch) => { NetflixAPI.getTitles(searchString, startYear, endYear, type, genreID, imdbMin, imdbMax, 
                           (data) => {dispatch({type:'SET_TITLES', value: data})})
    }
}

export const fetchNewEpisodes = () => { 
    // return (dispatch) => { NetflixAPI.getNewEpisodes((data) => {{dispatch({type:'SET_NEW_EPISODES', value: data})}}) }
    return dispatch => { NetflixAPI.getNewTitles((data) => {dispatch({type:'SET_NEW_EPISODES', value: data})}) }
}

export const fetchTitleDetail = (id) => {
    return (dispatch) => { NetflixAPI.getTitleDetail(id, (data) => {dispatch({type:'SET_TITLE_DETAIL', value: data})})}
}

const generateRandomIndex = (length) => {
    let luckyPickIndex = null;
    luckyPickIndex = Math.floor(Math.random() * length);
    return luckyPickIndex;
}

export const luckyPick = (searchString, sYear, cYear, allTypes, genreid, imdbMin, imdbMax) => {
    return (dispatch) => {
        NetflixAPI.getTitles(searchString, sYear, cYear, allTypes, genreid, imdbMin, imdbMax, 
            (data) => {
                dispatch({type:'SET_TITLES', value: data});
                let randomTitleIndex = generateRandomIndex(data.ITEMS.length);
                console.log(randomTitleIndex);
                if (randomTitleIndex >= 0){
                    NetflixAPI.getTitleDetail(data.ITEMS[randomTitleIndex].netflixid, (data) => {dispatch({type:'SET_TITLE_DETAIL', value: data})})
                }     
            })
    }
}

export const setCurrentYear = () => {
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();
    return ({type:'SET_CURRENT_YEAR', value: currentYear})
}

export const clearAllContent = () => {
    return ({type:'CLEAR_ALL_CONTENT'})
}

export const clearSelectedTitle = () => {
    return ({type:'CLEAR_SELECTED_TITLE'})
}

export const changeView = (value) => {
    return ({type:'SET_VIEW', value: value})
}

export const handleChange = (e) => {
    return ({type:'HANDLE_CHANGE', value: e})
}