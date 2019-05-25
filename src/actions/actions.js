const baseUrl = 'https://unogs-unogs-v1.p.rapidapi.com/';
const _headers = new Headers();
_headers.append('X-RapidAPI-Host','unogs-unogs-v1.p.rapidapi.com');
_headers.append('X-RapidAPI-Key','cf523eed82mshed7e62394e60ba7p1091d6jsn2c974a328b59')

export function fetchNewTitles() {
    
    let request = new Request(`${baseUrl}/aaapi.cgi?q=get:new7:CA&p=1&t=ns&st=adv`,  {
        method: 'GET',
        headers: _headers,
        mode: 'cors'
    });

    return (dispatch) => {
        fetch(request)
        .then((response) => {
            console.log('response: ' + response);
            response.json()
                .then((data) => {
                    console.log(data);
                    dispatch({type:'FETCH_NEW_TITLES', value: data})              
                });
        })
        .catch((err) => {
            console.log('error: ' + err);
        }); 
    }
}

export function fetchNewEpisodes() {
    
    let request = new Request(`${baseUrl}/aaapi.cgi?t=weeklynew&cl=CA&q={query}&st=1`,  {
        method: 'GET',
        headers: _headers,
        mode: 'cors'
    });

    return (dispatch) => {
    fetch(request)
        .then((response) => {
            console.log('response: ' + response);
            response.json()
                .then((data) => {
                    console.log(data);
                    dispatch({type:'FETCH_NEW_EPISODES', value: data})                    
                });
        })
        .catch((err) => {
            console.log('error: ' + err);
        });  
    }
}

export function fetchTitleDetail (id) {
    let request = new Request(`${baseUrl}/aaapi.cgi?t=loadvideo&q=${id}`,  {
        method: 'GET',
        headers: _headers,
        mode: 'cors'
    });
    return(dispatch) => {
    fetch(request)
        .then((response) => {
            console.log('response: ' + response);
            response.json()
                .then((data) => {
                    console.log(data);
                    dispatch({type:'FETCH_TITLE_DETAIL', value: data.RESULT})                     
                });
        })
        .catch((err) => {
            console.log('error: ' + err);
        });
    } 
}

export function setCurrentYear() {
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();
    return ({type:'SET_CURRENT_YEAR', value: currentYear})
}

export function clearAllTitles() {
    return ({type:'CLEAR_ALL_TITLES'})
}

export function changeView(value) {
    return ({type:'SET_VIEW', value: value})
}