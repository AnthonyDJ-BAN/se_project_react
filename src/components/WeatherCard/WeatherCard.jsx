import "./WeatherCard.css";
import clear from "../../assets/day/clear-day.svg";
import { weatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  // FIXME: Weather cards do not show up!
  // const filteredOptions = weatherOptions.filter((option) => {
  //   return (
  //     option.day === weatherData.isDay &&
  //     option.condition === weatherData.condition
  //   );
  // });

  // const weatherOptionUrl = filteredOptions[0]?.url;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img src={clear} alt="clear" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
