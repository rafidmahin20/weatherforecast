const API_KEY = "26f9965e7e64547f1c494c00d122981a";
const BASE_URL = "https://api.openweathermap.org/data/2.5";


const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    return fetch(url)
        .then((res) => res.json())
};

const formattedCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed}
}

const getFormattedWeatherData = async (searchParams) => {
    const formatCurrentWeather = await getWeatherData('weather', searchParams).then(formattedCurrentWeather)

    return formatCurrentWeather
}

export default getFormattedWeatherData;