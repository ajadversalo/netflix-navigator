let NetflixAPI = {};
const baseUrl = 'https://unogs-unogs-v1.p.rapidapi.com/';
const _headers = new Headers();
_headers.append('X-RapidAPI-Host','unogs-unogs-v1.p.rapidapi.com');
_headers.append('X-RapidAPI-Key','cf523eed82mshed7e62394e60ba7p1091d6jsn2c974a328b59')

NetflixAPI.getNewTitles = (callback) => {
    let request = new Request(`${baseUrl}/aaapi.cgi?q=get:new7:CA&p=1&t=ns&st=adv`,  {
        method: 'GET',
        headers: _headers,
        mode: 'cors'
    });

    fetch(request)
        .then((response) => {
            console.log('response: ' + response);
            response.json()
                .then((data) => {
                    console.log(data);
                    callback(data);                    
                });
        })
        .catch((err) => {
            console.log('error: ' + err);
        }); 
}

NetflixAPI.getNewEpisodes = (callback) => {
    let request = new Request(`${baseUrl}/aaapi.cgi?t=weeklynew&cl=CA&q={query}&st=1`,  {
        method: 'GET',
        headers: _headers,
        mode: 'cors'
    });

    fetch(request)
        .then((response) => {
            console.log('response: ' + response);
            response.json()
                .then((data) => {
                    console.log(data);
                    callback(data);                    
                });
        })
        .catch((err) => {
            console.log('error: ' + err);
        }); 
}

NetflixAPI.getTitles = (searchString, startYear, endYear, type, genreID, imdbMin, imdbMax, callback) => {
        let request = new Request(`${baseUrl}/aaapi.cgi?q=${searchString}-!${startYear},${endYear}-!0,5-!${imdbMin},${imdbMax}-!${genreID}-!${type}-!english-!Any-!gt0-!{downloadable}&t=ns&cl=33&st=adv&ob=Relevance&p=1&sa=and`, {
        method: 'GET',
        headers: _headers,
        mode: 'cors'
    });

    fetch(request)
        .then((response) => {
            console.log('response: ' + response);
            response.json()
                .then((data) => {
                    console.log(data);
                    callback(data);                    
                });
        })
        .catch((err) => {
            console.log('error: ' + err);
        });
}

NetflixAPI.getTitleDetail = (id, callback) => {
    let request = new Request(`${baseUrl}/aaapi.cgi?t=loadvideo&q=${id}`,  {
        method: 'GET',
        headers: _headers,
        mode: 'cors'
    });

    fetch(request)
        .then((response) => {
            console.log('response: ' + response);
            response.json()
                .then((data) => {
                    console.log(data);
                    callback(data.RESULT);                    
                });
        })
        .catch((err) => {
            console.log('error: ' + err);
        }); 
}

export default NetflixAPI;