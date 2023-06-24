const API_KEY = "26f9965e7e64547f1c494c00d122981a";
const BASE_URL = "https://api.openweathermap.org/data/2.5";


const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
};

export default getWeatherData;