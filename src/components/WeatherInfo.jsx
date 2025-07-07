import React from "react";

const WeatherInfo = ({ icon, temperature, location }) => (
  <>
    <img src={icon} alt="Weather Icon" className="weather-icon" />
    <p className="temperature">{temperature}°C</p>
    <p className="location">{location}</p>
  </>
);

export default WeatherInfo;
