let TitleAPI = {};
const baseUrl = 'https://unogs-unogs-v1.p.rapidapi.com/';
const _headers = new Headers();
_headers.append('X-RapidAPI-Host','unogs-unogs-v1.p.rapidapi.com');
_headers.append('X-RapidAPI-Key','cf523eed82mshed7e62394e60ba7p1091d6jsn2c974a328b59')

    //search all query - https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q={query}-!2000<start year>,2001<end year>-!0,5<netflix rating>-!0,10<imdb rating>-!0<genre id>-!Any<video type>-!Any<audio>-!Any<English, Chines, Any subtitle>-!gt1<imdb votes>-!{downloadable}&t=ns&cl=33&st=adv&ob=Relevance<sort by>&p=1<page number>&sa=and<kep this as is>`,  {
    //let request = new Request(`https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q={query}-!1900,2019-!0,5-!0,10-!6839-!Any-!Any-!Any-!gt1-!{downloadable}&t=ns&cl=33&st=adv&ob=Relevance&p=1&sa=and`,  {
TitleAPI.getNewTitles = (days, country, callback) => {
    
    let request = new Request(`${baseUrl}/aaapi.cgi?q=get:new${days}:${country}&p=1&t=ns&st=adv`,  {
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
                    callback(data.ITEMS);                    
                });
        })
        .catch((err) => {
            console.log('error: ' + err);
        }); 
}

TitleAPI.getTitles = (title, startYear, endYear, type, genreID, callback) => {
    //let request = new Request(`${baseUrl}/aaapi.cgi?q=${title}-!1900,2019-!0,5-!0,10-!0,10-!Any-!Any-!Any-!Any-!I%20Don&cl=21,23,26,29,33,307,45,39,327,331,334,337,336,269,267,357,65,67,392,400,402,408,412,348,270,73,34,425,46,78&st=adv&ob=Relevance&p=1&ao=and`, {
        let request = new Request(`${baseUrl}/aaapi.cgi?q=${title}-!${startYear},${endYear}-!0,5-!0,10-!${genreID}-!${type}-!Any-!Any-!gt100-!{downloadable}&t=ns&cl=33&st=adv&ob=Relevance&p=1&sa=and`, {
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
                    callback(data.ITEMS);                    
                });
        })
        .catch((err) => {
            console.log('error: ' + err);
        });
}

TitleAPI.getTitleDetail = (id, callback) => {
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

export default TitleAPI;