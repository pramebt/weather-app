import React from "react";
import humidity_icon from "/assets/humidity.png";
import wind_icon from "/assets/wind.png";

const WeatherDetails = ({ humidity, windSpeed }) => (
  <div className="weather-data">
    <div className="flex items-start gap-2 text-[22px]">
      <img src={humidity_icon} alt="humidity" className="w-[26px] mt-[10px]" />
      <div>
        <p>{humidity} %</p>
        <span className="block text-[16px]">Humidity</span>
      </div>
    </div>
    <div className="flex items-start gap-2 text-[22px]">
      <img src={wind_icon} alt="wind" className="w-[26px] mt-[10px]" />
      <div>
        <p>{windSpeed} km/h</p>
        <span className="block text-[16px]">Wind Speed</span>
      </div>
    </div>
  </div>
);

export default WeatherDetails;
