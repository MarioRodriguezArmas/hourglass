import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [City, setCity] = useState("");
  const [iconId, setIconId] = useState([]);

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?lat=22.89088&lon=-109.91238&appid=668ead8e0246dd8e125bd93af128aaa2&units=imperial"
      );
      setWeather(res.data.weather[0].main.toUpperCase());
      setTemperature(res.data.main.temp);
      setCity(res.data.name.toUpperCase());
      setIconId(res.data.weather[0].icon);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, []);

  return (
<div className="weather-container col-4 d-none d-md-block">
<div className=" weather d-flex flex-row justify-content-around align-items-center ">
      <div className="temp-container d-flex flex-column justify-content-around">
        <div className="city">{City}</div>
        <div className="degrees d-flex justify-content-around">
          <div className="temp">{Math.floor(temperature)}°F</div>
          <div className="temp-celcius">
            {Math.floor((temperature - 32) * (5 / 9))}°C
          </div>
        </div>
      </div>
      <img
        className="icon"
        src={`https://openweathermap.org/img/wn/${iconId}@2x.png`}
        alt="icon"
        />
        <div>{weather}</div>
    </div>
</div>
  );
}

export default Weather;
