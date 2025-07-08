import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import humidity_icon from "/assets/humidity.png";
import wind_icon from "/assets/wind.png";

const WeatherDetails = ({ humidity, windSpeed }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={humidity + "-" + windSpeed} 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="bg-white/20 p-4 w-full mt-[40px] text-white flex justify-between rounded-2xl"
    >
      <div className="flex items-start gap-2 text-[22px]">
        <img src={humidity_icon} alt="humidity" className="w-[26px] mt-[10px]" />
        <div>
          <p>{humidity} %</p>
          <span className="block text-[16px] text-gray-300">Humidity</span>
        </div>
      </div>
      <div className="flex items-start gap-2 text-[22px]">
        <img src={wind_icon} alt="wind" className="w-[26px] mt-[10px]" />
        <div>
          <p>{windSpeed} km/h</p>
          <span className="block text-[16px] text-gray-300">Wind Speed</span>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);

export default WeatherDetails;