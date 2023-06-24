import './App.css';
import TopButtons from './Components/TopButtons';
import Search from './Components/Search';
import TimeAndLocation from './Components/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';
import getFormattedWeatherData from './Services/WeatherDetails';

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: "Dhaka"});
    console.log(data);
  };

  fetchWeather()

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons/>
      <Search/>

      <TimeAndLocation/>
      <TemperatureAndDetails/>

      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>
    </div>
  );
}

export default App;
