import React from "react";
import { WiHumidity, WiStrongWind, WiThermometer, WiBarometer } from "react-icons/wi";
import { FiDroplet, FiWind } from "react-icons/fi";

const WeatherDetails = ({ humidity, windSpeed }) => (
  <div className="space-y-4">
    {/* Header */}
    <h3 className="text-white/90 text-lg font-medium text-center mb-6">
      Weather Details
    </h3>
    
    {/* Weather metrics grid */}
    <div className="grid grid-cols-2 gap-4">
      {/* Humidity */}
      <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-200">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-400/20 rounded-lg">
            <FiDroplet className="text-blue-200 text-xl" />
          </div>
          <div>
            <p className="text-white text-xl font-semibold">{humidity}%</p>
            <p className="text-white/70 text-sm font-medium">Humidity</p>
          </div>
        </div>
      </div>
      
      {/* Wind Speed */}
      <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-200">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-400/20 rounded-lg">
            <FiWind className="text-green-200 text-xl" />
          </div>
          <div>
            <p className="text-white text-xl font-semibold">{windSpeed}</p>
            <p className="text-white/70 text-sm font-medium">km/h</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Additional visual elements */}
    <div className="flex justify-center mt-6">
      <div className="w-12 h-[1px] bg-white/30 rounded-full"></div>
    </div>
  </div>
);

export default WeatherDetails;
