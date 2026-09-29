import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContexts";

function Main({ weatherData, handleCard, clothingItems = [] }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is{" "}
          {currentTempUnit === "F" ? weatherData.temp?.F : weatherData.temp?.C}{" "}
          &deg; {currentTempUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard key={item._id} item={item} onCard={handleCard} />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
