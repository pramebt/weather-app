import React, { useState, useEffect, useRef } from "react";
import clear_icon from "/assets/clear.png";
import cloud_icon from "/assets/cloud.png";
import drizzle_icon from "/assets/drizzle.png";
import rain_icon from "/assets/rain.png";
import snow_icon from "/assets/snow.png";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";
import WeatherDetails from "./WeatherDetails";

const Weather = ({ onWeatherChange }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  // ฟังก์ชันแปลงสภาพอากาศเป็น condition สำหรับ background
  const getWeatherCondition = (weatherMain) => {
    const conditions = {
      'Clear': 'clear',
      'Clouds': 'cloud',
      'Rain': 'rain', 
      'Drizzle': 'drizzle',
      'Snow': 'snow',
      'Thunderstorm': 'thunderstorm',
      'Mist': 'mist',
      'Fog': 'mist',
      'Haze': 'mist'
    };
    return conditions[weatherMain] || 'default';
  };

  const search = async (city) => {
    if (!city || city.trim() === "") {
      alert("Please enter a city name.");
      setWeatherData(false);
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      const weatherCondition = getWeatherCondition(data.weather[0].main);

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
        condition: data.weather[0].main,
        description: data.weather[0].description
      });

      // เปลี่ยน background ตามสภาพอากาศ
      if (onWeatherChange) {
        onWeatherChange(weatherCondition);
      }
    } catch (error) {
      setWeatherData(false);
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search("Bangkok"); // default city
  }, []);

  return (
    <div className="relative z-10 w-full max-w-[420px] min-w-[320px]">
      {/* Main weather card with Apple-style glass morphism */}
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:bg-white/25 hover:scale-[1.02]">
        {/* Header with subtle glow */}
        <div className="text-center mb-6">
          <h1 className="text-white/90 text-lg font-medium tracking-wide">
            Weather Forecast
          </h1>
          <div className="w-16 h-[2px] bg-white/40 mx-auto mt-2 rounded-full"></div>
        </div>

        <SearchBar inputRef={inputRef} onSearch={search} />
        
        {weatherData && (
          <div className="mt-8 space-y-6">
            <WeatherInfo
              icon={weatherData.icon}
              temperature={weatherData.temperature}
              location={weatherData.location}
              condition={weatherData.condition}
              description={weatherData.description}
            />
            
            {/* Weather details in glass card */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6">
              <WeatherDetails
                humidity={weatherData.humidity}
                windSpeed={weatherData.windSpeed}
              />
            </div>
          </div>
        )}
        
        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-white/20 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/15 rounded-full blur-sm animate-bounce"></div>
        
        {/* Corner highlights */}
        <div className="absolute top-4 left-4 w-16 h-[1px] bg-white/30 rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-12 h-[1px] bg-white/20 rounded-full"></div>
      </div>
      
      {/* Additional glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 to-transparent blur-xl -z-10 animate-shimmer"></div>
    </div>
  );
};

export default Weather;
