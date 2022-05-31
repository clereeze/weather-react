import React from "react";
import "./Summary.css";

export default function Summary() {
  let weatherData = {
    city: "Singapore",
    time: "Monday, 10:00",
    description: "Cloudy"
  };
  return (
    <div className="Summary">
      <ul>
        <li className="city-name"> {weatherData.city} </li>
        <li>
          Last updated: <span className="day-time"> {weatherData.time}</span>
        </li>
        <li>
          <span id="weather"> {weatherData.description} </span>
        </li>
      </ul>
    </div>
  );
}
