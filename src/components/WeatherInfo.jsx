import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const WeatherInfo = ({ icon, temperature, location }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={location + temperature} // เปลี่ยน key เมื่อข้อมูลเปลี่ยน
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <img src={icon} alt="Weather Icon" className="weather-icon" />
      <p className="temperature">{temperature}°C</p>
      <p className="location">{location}</p>
    </motion.div>
  </AnimatePresence>
);

export default WeatherInfo;