import React from "react";

import "./Temperature.css";

export default function Temperature() {
  let weatherData = {
    temperature: 19,
    humidity: 10,
    wind: 10
  };
  return (
    <div className="Temperature">
      <div class="row">
        <div class="col">
          <div class="float-left">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="cloudy-icon"
              class="cloudy float-left"
              id="icon"
            />
            <span className="temperature">{weatherData.temperature}</span>
            <span class="units">
              {" "}
              <a href="/" class="active">
                ℃
              </a>
              |<a href="/">℉</a>
            </span>
          </div>
        </div>
        <div class="col others">
          <ul>
            <li>
              Humidity: <span id="humidity"> {weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind"> {weatherData.wind}</span>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
