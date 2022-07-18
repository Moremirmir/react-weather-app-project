import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    let apiKey = "5ac1c44bb493079f7099bb5515307992";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  } else {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thurs</div>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">10°</span>
              <span className="WeatherForecast-temperature-min">19°</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
