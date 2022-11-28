import { TbTemperatureCelsius } from "react-icons/tb";

import React from 'react'

const WeatherMid = ({data}) => {
  return (
    <div className="w-full my-12 text-white">
      <div className="flex justify-center items-center">
        <p className="flex text-8xl">
          {Math.floor(data.main.temp)}<TbTemperatureCelsius size={35}/>
        </p>
      </div>
      <div className="flex justify-center my-2">
        <p>{data.weather[0].main}</p>
      </div>
    </div>
  );
}

export default WeatherMid
