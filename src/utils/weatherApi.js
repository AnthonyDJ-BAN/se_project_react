import { handleServerResponse } from "./api";

export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`,
  ).then(handleServerResponse);
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.type = getWeatherType(result.temp.F);

  const mainCondition = data.weather[0].main.toLowerCase();
  result.condition = getWeatherCondition(mainCondition);

  result.isDay = isDay(data.sys, Date.now());

  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};

const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return "hot";
  } else if (temperature >= 66 && temperature < 86) {
    return "warm";
  } else {
    return "cold";
  }
};

const getWeatherCondition = (condition) => {
  if (condition === "clouds") return "cloudy";
  if (condition === "clear") return "clear";
  if (condition === "rain" || condition === "drizzle") return "rainy";
  if (condition === "snow") return "snowy";
  if (condition === "thunderstorm") return "stormy";
  if (["fog", "mist", "haze", "smoke"].includes(condition)) return "foggy";

  return condition;
};
