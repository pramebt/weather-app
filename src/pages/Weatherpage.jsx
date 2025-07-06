import React from 'react'
import Weather from '../components/Weather'

const Weatherpage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center min-h-screen bg-gray-100">
        <Weather/>
    </div>
  )
}

export default Weatherpage