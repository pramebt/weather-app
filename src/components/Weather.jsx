import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clear_icon from "/assets/clear.png";
import cloud_icon from "/assets/cloud.png";
import drizzle_icon from "/assets/drizzle.png";
import rain_icon from "/assets/rain.png";
import snow_icon from "/assets/snow.png";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";
import WeatherDetails from "./WeatherDetails";

const Weather = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
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

  const search = async (city) => {
    if (!city || city.trim() === "") {
      setWeatherData(false); // Clear data
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

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search(); // default city
  }, []);

  return (
    <div className="w-full max-w-[350px] min-w-[250px] bg-white/20 rounded-2xl shadow-lg flex flex-col items-center justify-center p-10 mx-auto">
      <SearchBar inputRef={inputRef} onSearch={search} />
      <AnimatePresence mode="wait">
        {weatherData && (
          <motion.div
            key="weather-content"
            initial={{ 
              opacity: 0, 
              height: 0,
              scale: 1
            }}
            animate={{ 
              opacity: 1, 
              height: "auto",
              scale: 1
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              scale: 1
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.46, 0.65, 0.94]
            }}
            className="w-full overflow-hidden flex flex-col items-center"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="flex flex-col items-center"
            >
              <WeatherInfo
                icon={weatherData.icon}
                temperature={weatherData.temperature}
                location={weatherData.location}
              />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6,
                delay: 0.4,
                ease: [0.25, 0.46, 0.46, 0.95]
              }}
              className="w-full"
            >
              <WeatherDetails
                humidity={weatherData.humidity}
                windSpeed={weatherData.windSpeed}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Weather;
