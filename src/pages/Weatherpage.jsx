import React, { useState } from 'react'
import Weather from '../components/Weather'

const Weatherpage = () => {
  const [weatherCondition, setWeatherCondition] = useState('clear')

  // Dynamic background gradients สำหรับสภาพอากาศแต่ละแบบ
  const weatherBackgrounds = {
    clear: "bg-gradient-to-br from-blue-400 via-sky-300 to-orange-300",
    cloud: "bg-gradient-to-br from-gray-400 via-gray-300 to-blue-200", 
    rain: "bg-gradient-to-br from-slate-600 via-blue-400 to-indigo-500",
    drizzle: "bg-gradient-to-br from-gray-500 via-sky-400 to-blue-300",
    snow: "bg-gradient-to-br from-blue-100 via-white to-slate-200",
    thunderstorm: "bg-gradient-to-br from-purple-900 via-indigo-600 to-gray-700",
    mist: "bg-gradient-to-br from-gray-300 via-blue-200 to-white",
    default: "bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300"
  }

  return (
    <div className={`w-full min-h-screen flex items-center justify-center transition-all duration-1000 ease-in-out ${weatherBackgrounds[weatherCondition] || weatherBackgrounds.default}`}>
      {/* เพิ่ม overlay เพื่อความโปร่งใส */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* เพิ่ม floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-white/10 rounded-full animate-ping"></div>
      </div>
      
      <Weather onWeatherChange={setWeatherCondition} />
    </div>
  )
}

export default Weatherpage