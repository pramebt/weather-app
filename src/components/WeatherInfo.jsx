import React from "react";
import { FiMapPin } from "react-icons/fi";

const WeatherInfo = ({ icon, temperature, location, condition, description }) => (
  <div className="text-center space-y-4">
    {/* Weather icon with floating animation */}
    <div className="relative flex justify-center">
      <div className="relative animate-float">
        <img 
          src={icon} 
          alt="Weather Icon" 
          className="w-32 h-32 object-contain drop-shadow-2xl"
        />
        {/* Subtle glow behind icon */}
        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-75 -z-10 animate-pulse"></div>
        {/* Additional sparkle effect */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/80 rounded-full animate-bounce"></div>
      </div>
    </div>

    {/* Temperature with elegant typography */}
    <div className="space-y-1">
      <p className="text-white text-7xl font-thin tracking-tight drop-shadow-lg">
        {temperature}°
      </p>
      <p className="text-white/80 text-lg font-light capitalize tracking-wide">
        {description}
      </p>
    </div>

    {/* Location with icon */}
    <div className="flex items-center justify-center space-x-2 mt-4">
      <FiMapPin className="text-white/70 text-sm" />
      <p className="text-white/90 text-xl font-medium tracking-wide">
        {location}
      </p>
    </div>

    {/* Weather condition badge */}
    <div className="inline-flex items-center px-4 py-2 backdrop-blur-md bg-white/15 border border-white/20 rounded-full">
      <span className="text-white/90 text-sm font-medium tracking-wide">
        {condition}
      </span>
    </div>
  </div>
);

export default WeatherInfo;
