import React from "react";
import Weather from "../components/Weather";
import Aurora from "../components/Aurora";

const Weatherpage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={1}
        amplitude={1.0}
        speed={0.5}
      >
        <Weather />
      </Aurora>
    </div>
  );
};

export default Weatherpage;
