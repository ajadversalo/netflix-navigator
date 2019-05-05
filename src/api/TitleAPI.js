let TitleAPI = {};

const header = new Headers();

header.append('X-RapidAPI-Host','unogs-unogs-v1.p.rapidapi.com');
header.append('X-RapidAPI-Key','cf523eed82mshed7e62394e60ba7p1091d6jsn2c974a328b59')


TitleAPI.getNew = (days, country, callback) => {
    const baseUrl = 'https://unogs-unogs-v1.p.rapidapi.com/';
    let request = new Request(`${baseUrl}/aaapi.cgi?q=get:new${days}:${country}&p=1&t=ns&st=adv`,  {
        method: 'GET',
        headers: header,
        mode: 'cors'
    });

    fetch(request)
        .then((response) => {
            console.log('response: ' + response);
            response.json()
                .then((data) => {
                    callback(data.ITEMS);
                });
        })
        .catch((err) => {
            console.log('error: ' + err);
        }); 
}

export default TitleAPI;