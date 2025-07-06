import React from "react";
import search_icon from "/assets/search.png";
import clear_icon from "/assets/clear.png"
import cloud_icon from "/assets/cloud.png"
import drizzle_icon from "/assets/drizzle.png"
import rain_icon from "/assets/rain.png"
import snow_icon from "/assets/snow.png"
import wind_icon from "/assets/wind.png"
import humidity_icon from "/assets/humidity.png"

const Weather = () => {
  return (
    <div className="w-[320px] h-[520px] md:w-[460px] md:h-[620px] bg-black/50 rounded-lg shadow-lg flex flex-col items-center p-[40px]">
      <div className="flex flex-row items-center justify-center w-full px-4 gap-4">
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
        />
        <img
          src={search_icon}
          alt="Search"
          className="search-bar"
        />
        
      </div>
      <img src={clear_icon} alt="" className="weather-icon" />
      <p className="text-2xl font-bold">16°C</p>
      <p className="text-sm">London</p>
    </div>
  );
};

export default Weather;
