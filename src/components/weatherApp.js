import { useState } from "react";
import WeatherForm from "./weatherForm";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  async function loadInfo(city = "london") {
    try {
      console.log(process.env);

      console.log(process.env.REACT_APP_URL);
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );

      const json = await request.json();
      console.log(json);
      setWeather(json);
    } catch (error) {
      console.error("Error al cargar la información:", error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);

    loadInfo(city);
  }

  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} />
      <div>Info</div>
    </div>
  );
}
