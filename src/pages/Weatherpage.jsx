import React from 'react'
import Weather from '../components/Weather'

const Weatherpage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
        <Weather/>
    </div>
  )
}

export default Weatherpage