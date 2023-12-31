import './App.css';
import TopButtons from './Components/TopButtons';
import Search from './Components/Search';
import TimeAndLocation from './Components/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';
import getFormattedWeatherData from './Services/WeatherDetails';
import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery] = useState({q: "dhaka"});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({...query, units}).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons/>
      <Search/>

      {weather && (
        <div>
      <TimeAndLocation weather={weather}/>
      <TemperatureAndDetails weather={weather}/>

      <Forecast title="hourly forecast" items = {weather.hourly}/>
      <Forecast title="daily forecast" items = {weather.daily}/>
        </div>
      )}
    </div>
  );
}

export default App;
